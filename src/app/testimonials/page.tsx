import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@/components/icons";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TestimonialSlider } from "@/components/testimonial-slider";

export const metadata: Metadata = {
  title: "Customer Stories | ThrustPoint Global",
  description: "Hear from customers who trust ThrustPoint for exchange, travel, gift cards and everyday payments.",
};

const serviceVisuals = [
  { src: "/services/currency-exchange.png", className: "portrait-one", alt: "Currency exchange service" },
  { src: "/services/gift-cards.png", className: "portrait-two", alt: "Gift card trading service" },
  { src: "/services/flight-tickets.png", className: "portrait-three", alt: "Flight ticket booking service" },
  { src: "/services/betting-wallets.png", className: "portrait-four", alt: "Betting wallet funding service" },
  { src: "/services/airtime-data.png", className: "portrait-five", alt: "Airtime and mobile data service" },
  { src: "/services/tv-subscriptions.png", className: "portrait-six", alt: "TV subscription payment service" },
  { src: "/services/digital-payments.png", className: "portrait-seven", alt: "Secure digital payment service" },
  { src: "/services/customer-support.png", className: "portrait-eight", alt: "Responsive customer support service" },
];

export default function TestimonialsPage() {
  return (
    <main className="testimonials-page" id="top">
      <SiteHeader active="testimonials" />

      <section className="testimonials-hero">
        <div className="portrait-collage" aria-label="A collage of ThrustPoint services">
          {serviceVisuals.map((visual) => (
            <div className={`hero-portrait ${visual.className}`} key={visual.src}>
              <Image src={visual.src} alt={visual.alt} fill sizes="(max-width: 700px) 24vw, 150px" />
            </div>
          ))}
        </div>
        <div className="testimonials-hero-copy">
          <span className="kicker">Customer stories</span>
          <h1>
            <span className="hero-line-primary">Trusted by people</span>
            <span className="hero-line-muted">moving life forward.</span>
          </h1>
          <p>Real stories from customers using ThrustPoint to exchange, travel and manage everyday payments across borders.</p>
          <a className="button" href="#stories">Read their stories <span aria-hidden="true">↓</span></a>
        </div>
      </section>

      <section className="testimonial-stories" id="stories">
        <div className="container stories-heading">
          <div>
            <span className="kicker">In their own words</span>
            <h2>Don&apos;t take our word for it.<br /><span>Hear it from our customers.</span></h2>
          </div>
        </div>
        <div className="container"><TestimonialSlider /></div>
      </section>

      <section className="testimonial-cta">
        <div className="container testimonial-cta-inner">
          <div><span className="kicker">Your turn</span><h2>What can we move forward for you?</h2></div>
          <Link className="button" href="/#services">Explore our services <ArrowUpRight /></Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
