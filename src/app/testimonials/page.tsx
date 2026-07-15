import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Icon } from "@/components/icons";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TestimonialSlider } from "@/components/testimonial-slider";

export const metadata: Metadata = {
  title: "Customer Stories | ThrustPoint Global",
  description: "Hear from customers who trust ThrustPoint for exchange, travel, gift cards and everyday payments.",
};

const portraits = [
  { src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=82", className: "portrait-one", alt: "Smiling ThrustPoint customer" },
  { src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=82", className: "portrait-two", alt: "ThrustPoint customer portrait" },
  { src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=82", className: "portrait-three", alt: "Business customer portrait" },
  { src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=82", className: "portrait-four", alt: "Professional customer portrait" },
  { src: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=82", className: "portrait-five", alt: "ThrustPoint community member" },
  { src: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=600&q=82", className: "portrait-six", alt: "ThrustPoint customer smiling" },
  { src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=82", className: "portrait-seven", alt: "Customer portrait" },
  { src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=82", className: "portrait-eight", alt: "Customer smiling at camera" },
];

export default function TestimonialsPage() {
  return (
    <main className="testimonials-page" id="top">
      <SiteHeader active="testimonials" />

      <section className="testimonials-hero">
        <div className="portrait-collage" aria-label="A collage of ThrustPoint customers">
          {portraits.map((portrait) => (
            <div className={`hero-portrait ${portrait.className}`} key={portrait.src}>
              <Image src={portrait.src} alt={portrait.alt} fill sizes="(max-width: 700px) 24vw, 150px" />
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
        <div className="hero-trust-note"><Icon name="shield" /> Guided, clear and secure</div>
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
