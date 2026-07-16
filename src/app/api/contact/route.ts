import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";
import {
  buildConfirmationEmail,
  buildTeamEmail,
  type ContactDetails,
} from "@/lib/contact-email";

export const runtime = "nodejs";

const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 4;
const MAX_BODY_BYTES = 16_000;
const rateLimits = new Map<string, { count: number; resetAt: number }>();

type ContactPayload = Partial<Record<"name" | "email" | "phone" | "subject" | "service" | "message" | "contact_reference", unknown>>;

function cleanSingleLine(value: unknown, maxLength: number) {
  if (typeof value !== "string") return null;
  return value.trim().replace(/[\u0000-\u001F\u007F]+/g, " ").replace(/\s+/g, " ").slice(0, maxLength);
}

function cleanMessage(value: unknown, maxLength: number) {
  if (typeof value !== "string") return null;
  return value
    .trim()
    .replace(/\r\n?/g, "\n")
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "")
    .slice(0, maxLength);
}

function parseContact(payload: ContactPayload): { data?: ContactDetails; error?: string; honeypot?: boolean } {
  const maximums: Array<[unknown, number, string]> = [
    [payload.name, 100, "Name"],
    [payload.email, 254, "Email"],
    [payload.phone, 40, "Phone"],
    [payload.subject ?? payload.service, 100, "Subject"],
    [payload.message, 5_000, "Message"],
    [payload.contact_reference, 200, "Contact reference"],
  ];

  for (const [value, maximum, label] of maximums) {
    if (typeof value === "string" && value.length > maximum) {
      return { error: `${label} is too long.` };
    }
  }

  const name = cleanSingleLine(payload.name, 100);
  const cleanedEmail = cleanSingleLine(payload.email, 254);
  const email = cleanedEmail === null ? null : cleanedEmail.toLowerCase();
  const phone = cleanSingleLine(payload.phone ?? "", 40);
  const subject = cleanSingleLine(payload.subject ?? payload.service ?? "", 100);
  const message = cleanMessage(payload.message, 5_000);
  const contactReference = cleanSingleLine(payload.contact_reference ?? "", 200);

  if (contactReference) return { honeypot: true };
  if (name === null || email === null || phone === null || subject === null || message === null) {
    return { error: "All form fields must be text." };
  }
  if (!name || !message) return { error: "Name and message are required." };
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return { error: "Enter a valid email address." };
  if (phone && !/^[+()\d\s.-]{5,40}$/.test(phone)) return { error: "Enter a valid phone number." };

  return { data: { name, email, phone, subject, message } };
}

function clientIp(request: NextRequest) {
  return request.headers.get("x-real-ip")
    ?? request.headers.get("x-forwarded-for")?.split(",")[0]?.trim()
    ?? "unknown";
}

function isRateLimited(key: string) {
  const now = Date.now();
  const existing = rateLimits.get(key);

  if (rateLimits.size > 500) {
    for (const [ip, limit] of rateLimits) {
      if (limit.resetAt <= now) rateLimits.delete(ip);
    }
  }

  if (!existing || existing.resetAt <= now) {
    rateLimits.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  existing.count += 1;
  return existing.count > RATE_LIMIT_MAX_REQUESTS;
}

function smtpConfig() {
  const host = process.env.ZOHO_SMTP_HOST;
  const user = process.env.ZOHO_SMTP_USER;
  const password = process.env.ZOHO_SMTP_PASSWORD;
  const receiver = process.env.CONTACT_RECEIVER_EMAIL;
  const port = Number(process.env.ZOHO_SMTP_PORT ?? "465");
  const secure = (process.env.ZOHO_SMTP_SECURE ?? "true").toLowerCase() === "true";

  if (
    !host
    || !user
    || !password
    || !receiver
    || !Number.isInteger(port)
    || port < 1
    || port > 65_535
    || !["true", "false"].includes((process.env.ZOHO_SMTP_SECURE ?? "true").toLowerCase())
  ) {
    throw new Error("Contact email is not configured.");
  }

  return { host, user, password, receiver, port, secure };
}

export async function POST(request: NextRequest) {
  const contentType = request.headers.get("content-type") ?? "";
  const contentLength = Number(request.headers.get("content-length") ?? "0");

  if (!contentType.toLowerCase().startsWith("application/json")) {
    return NextResponse.json({ message: "Content-Type must be application/json." }, { status: 415 });
  }
  if (contentLength > MAX_BODY_BYTES) {
    return NextResponse.json({ message: "The request is too large." }, { status: 413 });
  }
  if (isRateLimited(clientIp(request))) {
    return NextResponse.json(
      { message: "Too many enquiries were sent. Please wait a few minutes and try again." },
      { status: 429, headers: { "Retry-After": String(RATE_LIMIT_WINDOW_MS / 1000) } },
    );
  }

  let rawBody: string;
  try {
    rawBody = await request.text();
  } catch {
    return NextResponse.json({ message: "The request body could not be read." }, { status: 400 });
  }
  if (Buffer.byteLength(rawBody, "utf8") > MAX_BODY_BYTES) {
    return NextResponse.json({ message: "The request is too large." }, { status: 413 });
  }

  let payload: unknown;
  try {
    payload = JSON.parse(rawBody);
  } catch {
    return NextResponse.json({ message: "The request body is not valid JSON." }, { status: 400 });
  }

  if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
    return NextResponse.json({ message: "The request body is malformed." }, { status: 400 });
  }

  const parsed = parseContact(payload as ContactPayload);
  if (parsed.honeypot) return NextResponse.json({ message: "Thank you. Your enquiry has been received." });
  if (!parsed.data) return NextResponse.json({ message: parsed.error }, { status: 400 });

  try {
    const config = smtpConfig();
    const transporter = nodemailer.createTransport({
      host: config.host,
      port: config.port,
      secure: config.secure,
      auth: { user: config.user, pass: config.password },
    });
    const from = { name: "ThrustPoint Global", address: config.user };
    const teamEmail = buildTeamEmail(parsed.data);

    await transporter.sendMail({
      from,
      to: config.receiver,
      replyTo: { name: parsed.data.name, address: parsed.data.email },
      subject: `Website enquiry: ${parsed.data.subject || "General enquiry"}`,
      ...teamEmail,
    });

    const confirmation = buildConfirmationEmail(parsed.data);
    try {
      await transporter.sendMail({
        from,
        to: parsed.data.email,
        replyTo: config.receiver,
        subject: "We received your ThrustPoint enquiry",
        ...confirmation,
      });
    } catch (error) {
      console.error("Contact confirmation email failed:", error);
    }

    return NextResponse.json({ message: "Thank you. Your enquiry has been sent successfully." });
  } catch (error) {
    console.error("Contact form email failed:", error);
    return NextResponse.json(
      { message: "We couldn’t send your enquiry right now. Please try again shortly." },
      { status: 500 },
    );
  }
}
