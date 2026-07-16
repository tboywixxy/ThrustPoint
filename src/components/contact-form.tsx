"use client";

import { FormEvent, useEffect, useState } from "react";
import { ArrowUpRight } from "@/components/icons";

type ResultStatus = { type: "idle" | "success" | "error"; message: string };
type Toast = { type: "success" | "error"; message: string };

export function ContactForm() {
  const [status, setStatus] = useState<ResultStatus>({
    type: "idle",
    message: "We’ll email you a confirmation after your enquiry is sent.",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<Toast | null>(null);

  useEffect(() => {
    if (!toast) return;

    const timer = window.setTimeout(() => setToast(null), 5_000);
    return () => window.clearTimeout(timer);
  }, [toast]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formElement = event.currentTarget;
    const form = new FormData(formElement);
    const payload = Object.fromEntries(form.entries());

    setIsSubmitting(true);
    setToast(null);
    setStatus({ type: "idle", message: "Sending your enquiry securely…" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json().catch(() => null) as { message?: string } | null;

      if (!response.ok) throw new Error(result?.message || "Something went wrong. Please try again.");

      formElement.reset();
      const message = result?.message || "Your enquiry has been sent successfully.";
      setStatus({ type: "success", message });
      setToast({ type: "success", message });
    } catch (error) {
      const message = error instanceof Error ? error.message : "Something went wrong. Please try again.";
      setStatus({ type: "error", message });
      setToast({ type: "error", message });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} aria-busy={isSubmitting}>
      {toast && (
        <div
          className={`contact-toast contact-toast-${toast.type}`}
          role={toast.type === "error" ? "alert" : "status"}
          aria-live={toast.type === "error" ? "assertive" : "polite"}
        >
          <span className="contact-toast-icon" aria-hidden="true">{toast.type === "success" ? "✓" : "!"}</span>
          <span className="contact-toast-copy">
            <strong>{toast.type === "success" ? "Enquiry sent" : "Couldn’t send enquiry"}</strong>
            <span>{toast.message}</span>
          </span>
          <button type="button" onClick={() => setToast(null)} aria-label="Dismiss notification">×</button>
        </div>
      )}
      <div className="form-heading">
        <span className="kicker">Send an enquiry</span>
        <h2>Tell us what you need.</h2>
        <p>Complete the form and our team will get back to you as soon as possible.</p>
      </div>
      <label className="form-honeypot" aria-hidden="true">
        <span>Leave this field blank</span>
        <input name="contact_reference" type="text" tabIndex={-1} autoComplete="off" maxLength={200} />
      </label>
      <div className="form-row">
        <label>
          <span>Full name</span>
          <input name="name" type="text" autoComplete="name" placeholder="Your full name" maxLength={100} required />
        </label>
        <label>
          <span>Email address</span>
          <input name="email" type="email" autoComplete="email" placeholder="you@example.com" maxLength={254} required />
        </label>
      </div>
      <div className="form-row">
        <label>
          <span>Phone number <small>Optional</small></span>
          <input name="phone" type="tel" autoComplete="tel" placeholder="+233 ..." maxLength={40} />
        </label>
        <label>
          <span>Service</span>
          <select name="service" defaultValue="" required>
            <option value="" disabled>Select a service</option>
            <option>Currency exchange</option>
            <option>Gift cards</option>
            <option>Flight tickets</option>
            <option>Betting wallets</option>
            <option>Airtime and data</option>
            <option>TV subscriptions</option>
            <option>Something else</option>
          </select>
        </label>
      </div>
      <label>
        <span>How can we help?</span>
        <textarea name="message" rows={6} placeholder="Share the details of your request..." maxLength={5000} required />
      </label>
      <div className="form-submit">
        <button className="button" type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending…" : "Send enquiry"} <ArrowUpRight />
        </button>
        <p className={`form-status form-status-${status.type}`}>
          {status.message}
        </p>
      </div>
    </form>
  );
}
