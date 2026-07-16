export type ContactDetails = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

const brand = "#2711AA";
const brandSoft = "#efedfb";
const navy = "#111a4a";
const muted = "#737783";
const background = "#f6f6f8";
const border = "#e1e3e9";

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    '"': "&quot;",
  })[character] ?? character);
}

function emailShell(preheader: string, heading: string, intro: string, content: string) {
  return `<!doctype html>
<html lang="en">
  <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"></head>
  <body style="margin:0;background:${background};font-family:'DM Sans',Arial,sans-serif;color:${navy};">
    <div style="display:none;max-height:0;overflow:hidden;opacity:0;">${escapeHtml(preheader)}</div>
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:${background};">
      <tr><td align="center" style="padding:32px 16px;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:620px;background:#fff;border:1px solid ${border};border-radius:8px;overflow:hidden;">
          <tr><td style="height:7px;background:${brand};font-size:0;line-height:0;">&nbsp;</td></tr>
          <tr><td style="padding:30px 36px 22px;border-bottom:1px solid ${border};">
            <div style="font-size:20px;font-weight:800;letter-spacing:-.4px;">ThrustPoint <span style="color:${brand};">Global</span></div>
          </td></tr>
          <tr><td style="padding:34px 36px;">
            <div style="color:${brand};font-size:11px;font-weight:800;letter-spacing:1px;text-transform:uppercase;">Contact ThrustPoint</div>
            <h1 style="margin:12px 0 12px;font-size:30px;line-height:1.15;letter-spacing:-1px;color:${navy};">${heading}</h1>
            <p style="margin:0 0 26px;color:#3b3e47;font-size:15px;line-height:1.7;">${intro}</p>
            ${content}
          </td></tr>
          <tr><td style="padding:22px 36px;background:#f0f1f6;border-top:1px solid ${border};color:${muted};font-size:12px;line-height:1.6;">
            ThrustPoint Global &middot; Aku Si Ka Plaza, Broadcasting<br>
          </td></tr>
        </table>
      </td></tr>
    </table>
  </body>
</html>`;
}

function detailRow(label: string, value: string) {
  return `<tr>
    <td style="width:120px;padding:11px 14px;border-bottom:1px solid ${border};color:${muted};font-size:11px;font-weight:800;text-transform:uppercase;vertical-align:top;">${escapeHtml(label)}</td>
    <td style="padding:11px 14px;border-bottom:1px solid ${border};color:${navy};font-size:14px;line-height:1.55;">${escapeHtml(value)}</td>
  </tr>`;
}

export function buildTeamEmail(details: ContactDetails) {
  const content = `
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border:1px solid ${border};border-radius:8px;border-collapse:separate;overflow:hidden;">
      ${detailRow("Name", details.name)}
      ${detailRow("Email", details.email)}
      ${detailRow("Phone", details.phone || "Not provided")}
      ${detailRow("Service", details.subject || "General enquiry")}
    </table>
    <div style="margin-top:22px;padding:20px;border-left:4px solid ${brand};background:${brandSoft};border-radius:0 8px 8px 0;">
      <div style="margin-bottom:8px;color:${brand};font-size:11px;font-weight:800;letter-spacing:.8px;text-transform:uppercase;">Message</div>
      <div style="color:${navy};font-size:14px;line-height:1.7;white-space:pre-wrap;">${escapeHtml(details.message)}</div>
    </div>`;

  return {
    html: emailShell(
      `New enquiry from ${details.name}`,
      "A new enquiry has arrived.",
      "A visitor submitted the website contact form. Replying to this email will respond directly to them.",
      content,
    ),
    text: [
      "NEW THRUSTPOINT WEBSITE ENQUIRY",
      "",
      `Name: ${details.name}`,
      `Email: ${details.email}`,
      `Phone: ${details.phone || "Not provided"}`,
      `Service: ${details.subject || "General enquiry"}`,
      "",
      "Message:",
      details.message,
    ].join("\n"),
  };
}

export function buildConfirmationEmail(details: ContactDetails) {
  const content = `
    <div style="padding:20px;border:1px solid ${border};border-radius:8px;background:${background};">
      <div style="color:${muted};font-size:11px;font-weight:800;letter-spacing:.8px;text-transform:uppercase;">Your enquiry</div>
      <div style="margin-top:8px;color:${navy};font-size:16px;font-weight:700;">${escapeHtml(details.subject || "General enquiry")}</div>
      <div style="margin-top:10px;color:#3b3e47;font-size:14px;line-height:1.7;white-space:pre-wrap;">${escapeHtml(details.message)}</div>
    </div>
    <p style="margin:24px 0 0;color:#3b3e47;font-size:14px;line-height:1.7;">There is no need to submit the form again. If you need to add anything, simply reply to this email.</p>`;

  return {
    html: emailShell(
      "We received your ThrustPoint enquiry",
      `Thanks, ${escapeHtml(details.name)}.`,
      "Your message is safely with our team. We’ll review the details and respond as soon as possible during business hours.",
      content,
    ),
    text: [
      `Thanks, ${details.name}.`,
      "",
      "Your message is safely with the ThrustPoint team. We’ll respond as soon as possible during business hours.",
      "",
      `Service: ${details.subject || "General enquiry"}`,
      "Message:",
      details.message,
      "",
      "There is no need to submit the form again. Reply to this email if you need to add anything.",
    ].join("\n"),
  };
}
