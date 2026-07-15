import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { Icon } from "@/components/icons";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Contact Us | ThrustPoint Global",
  description: "Contact ThrustPoint Global for help with exchange, travel, gift cards and everyday digital payments.",
};

export default function ContactPage() {
  return (
    <main className="contact-page" id="top">
      <SiteHeader active="contact" />

      <section className="contact-hero">
        <div className="container contact-hero-inner">
          <div>
            <span className="kicker">Contact ThrustPoint</span>
            <h1>Let&apos;s move things <span>forward.</span></h1>
          </div>
          <p>Questions, requests or support—tell us what you need and our team will guide you from there.</p>
        </div>
      </section>

      <section className="contact-section">
        <div className="container contact-grid">
          <aside className="contact-details" aria-label="Contact details">
            <div className="contact-details-heading">
              <span className="kicker">Talk to our team</span>
              <h2>We&apos;re here to help.</h2>
              <p>Choose the channel that works best for you. We&apos;ll respond as soon as possible.</p>
            </div>
            <div className="contact-methods">
              <a href="tel:+233201234567">
                <span className="contact-method-icon"><Icon name="signal" /></span>
                <span><small>Call us</small><strong>+233 20 123 4567</strong></span>
              </a>
              <a href="mailto:hello@thrustpoint.com">
                <span className="contact-method-icon"><Icon name="cursor" /></span>
                <span><small>Email us</small><strong>hello@thrustpoint.com</strong></span>
              </a>
              <div>
                <span className="contact-method-icon"><Icon name="globe" /></span>
                <span><small>Head office</small><strong>14 Independence Avenue<br />Accra, Ghana</strong></span>
              </div>
            </div>
            <div className="response-note"><Icon name="clock" /><span><small>Response standard</small><strong>Clear, guided support during business hours</strong></span></div>
          </aside>

          <ContactForm />
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
