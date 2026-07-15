"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight } from "@/components/icons";

export function ContactForm() {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`ThrustPoint enquiry: ${String(form.get("service"))}`);
    const body = encodeURIComponent([
      `Name: ${String(form.get("name"))}`,
      `Email: ${String(form.get("email"))}`,
      `Phone: ${String(form.get("phone") || "Not provided")}`,
      `Service: ${String(form.get("service"))}`,
      "",
      String(form.get("message")),
    ].join("\n"));

    setStatus("Your email app should open with your message ready to send.");
    window.location.href = `mailto:hello@thrustpoint.com?subject=${subject}&body=${body}`;
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-heading">
        <span className="kicker">Send an enquiry</span>
        <h2>Tell us what you need.</h2>
        <p>Complete the form and we&apos;ll prepare an email with all your details.</p>
      </div>
      <div className="form-row">
        <label>
          <span>Full name</span>
          <input name="name" type="text" autoComplete="name" placeholder="Your full name" required />
        </label>
        <label>
          <span>Email address</span>
          <input name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
        </label>
      </div>
      <div className="form-row">
        <label>
          <span>Phone number <small>Optional</small></span>
          <input name="phone" type="tel" autoComplete="tel" placeholder="+233 ..." />
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
        <textarea name="message" rows={6} placeholder="Share the details of your request..." required />
      </label>
      <div className="form-submit">
        <button className="button" type="submit">Open email draft <ArrowUpRight /></button>
        <p aria-live="polite">{status || "Your details stay on your device until you send the email."}</p>
      </div>
    </form>
  );
}
