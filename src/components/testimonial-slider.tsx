"use client";

import { useRef } from "react";

const testimonials = [
  {
    quote: "ThrustPoint made a cross-border payment feel surprisingly simple. I knew what was happening at every step, and the support team stayed responsive until it landed.",
    service: "Currency exchange",
  },
  {
    quote: "I booked a last-minute flight and sorted my travel payment in one conversation. The speed was excellent, but the clarity is what made me trust the service.",
    service: "Flight tickets",
  },
  {
    quote: "Selling gift cards used to mean chasing updates. With ThrustPoint, the process was direct, the rate was clear, and confirmation came exactly when promised.",
    service: "Gift cards",
  },
  {
    quote: "We use ThrustPoint whenever our team needs quick top-ups across Ghana and Nigeria. It is dependable, easy to understand, and always feels human.",
    service: "Airtime & data",
  },
  {
    quote: "What impressed me most was the follow-through. I never had to ask twice, and every detail was confirmed before anything moved.",
    service: "Digital payments",
  },
];

export function TestimonialSlider() {
  const trackRef = useRef<HTMLDivElement>(null);

  function move(direction: -1 | 1) {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>(".testimonial-card");
    track.scrollBy({ left: direction * ((card?.offsetWidth ?? 360) + 16), behavior: "smooth" });
  }

  return (
    <div className="testimonial-slider">
      <div className="slider-controls" aria-label="Testimonial slider controls">
        <button type="button" onClick={() => move(-1)} aria-label="Previous testimonial">
          <span aria-hidden="true">←</span>
        </button>
        <button type="button" onClick={() => move(1)} aria-label="Next testimonial">
          <span aria-hidden="true">→</span>
        </button>
      </div>
      <div className="testimonial-track" ref={trackRef}>
        {testimonials.map((testimonial, index) => (
          <article className="testimonial-card" key={testimonial.service}>
            <div className="testimonial-card-top">
              <span className="quote-mark" aria-hidden="true">“</span>
              <span className="testimonial-number">0{index + 1}</span>
            </div>
            <blockquote>{testimonial.quote}</blockquote>
            <span className="testimonial-service">{testimonial.service}</span>
          </article>
        ))}
      </div>
    </div>
  );
}
