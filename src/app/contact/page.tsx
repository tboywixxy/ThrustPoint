import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "@/components/contact-form";
import { Icon } from "@/components/icons";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ThemeLogo } from "@/components/theme-logo";

export const metadata: Metadata = {
  title: "Contact Us | ThrustPoint Global",
  description: "Contact ThrustPoint Global for help with exchange, travel, gift cards and everyday digital payments.",
};

export default function ContactPage() {
  return (
    <main className="contact-page" id="top">
      <SiteHeader active="contact" />

      <section className="contact-hero">
        <Image
          className="contact-hero-background"
          src="/services/customer-support.png"
          alt="ThrustPoint customer support specialist assisting a client"
          fill
          priority
          sizes="100vw"
        />
        <div className="contact-hero-overlay" />
        <div className="container contact-hero-inner">
          <div className="contact-hero-copy">
            <span className="kicker">Contact ThrustPoint</span>
            <h1>Let&apos;s move things <span>forward.</span></h1>
          </div>
          <ThemeLogo
            className="contact-hero-logo"
            alt="ThrustPoint"
            width={180}
            height={180}
            priority
          />
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
              <a href="tel:+233201473475">
                <span className="contact-method-icon"><Icon name="phone" /></span>
                <span><small>Call us</small><strong>+233 20 147 3475</strong></span>
              </a>
              <a href="mailto:support@thrustpoint.co">
                <span className="contact-method-icon"><Icon name="mail" /></span>
                <span><small>Email us</small><strong>support@thrustpoint.co</strong></span>
              </a>
              <div>
                <span className="contact-method-icon"><Icon name="location" /></span>
                <span><small>Head office</small><strong>Aku Si Ka Plaza<br />Broadcasting</strong></span>
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
