import Image from "next/image";
import { ArrowUpRight, Icon, type IconName } from "@/components/icons";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const services: Array<{ title: string; description: string; icon: IconName; image: string; imageAlt: string }> = [
  { title: "Naira ↔ Cedis", description: "Exchange securely in both directions.", icon: "exchange", image: "/services/currency-exchange.png", imageAlt: "Customer completing a currency exchange on her phone" },
  { title: "Gift Cards", description: "Buy and sell popular gift cards.", icon: "gift", image: "/services/gift-cards.png", imageAlt: "Selection of digital gift cards" },
  { title: "Flight Tickets", description: "Local and international bookings.", icon: "plane", image: "/services/flight-tickets.png", imageAlt: "Traveler preparing for a flight at an airport" },
  { title: "Betting Wallets", description: "Fund supported betting platforms.", icon: "wallet", image: "/services/betting-wallets.png", imageAlt: "Sports fan managing a betting wallet on a phone" },
  { title: "Airtime & Data", description: "Local and international top-ups.", icon: "signal", image: "/services/airtime-data.png", imageAlt: "Mobile phone being used for an airtime and data top-up" },
  { title: "TV Subscriptions", description: "Quick DStv and GOtv payments.", icon: "tv", image: "/services/tv-subscriptions.png", imageAlt: "Family enjoying television at home" },
];

function ServiceCard({ title, description, icon, image, imageAlt }: (typeof services)[number]) {
  return (
    <article className="service-card">
      <div className="service-image">
        <Image src={image} alt={imageAlt} fill sizes="(max-width: 700px) 84vw, (max-width: 1000px) 50vw, 33vw" />
        <span className="service-status">Available</span>
        <div className="service-icon"><Icon name={icon} /></div>
      </div>
      <div className="service-card-body">
        <div><h3>{title}</h3><p>{description}</p></div>
        <span className="card-arrow" aria-hidden="true"><ArrowUpRight /></span>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <main id="top">
      <SiteHeader />

      <section className="hero">
        <div className="container hero-grid">
          <svg className="world-map" viewBox="0 0 720 430" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
            <defs>
              <pattern id="map-dots" width="10" height="10" patternUnits="userSpaceOnUse">
                <circle cx="3" cy="3" r="2.1" fill="currentColor" />
              </pattern>
              <linearGradient id="route-gradient" x1="0" x2="1">
                <stop offset="0" stopColor="var(--brand)" />
                <stop offset="1" stopColor="var(--brand-hover)" />
              </linearGradient>
            </defs>
            <g className="map-land">
              <path data-continent="north-america" d="M28 98 59 52l53-22 54 12 30 31-8 26-35 2-19 25-29 13-14 39-25-13-7-33-28-13Z" />
              <path data-continent="greenland" d="m190 30 30-16 27 14-9 25-31 7-23-12Z" />
              <path data-continent="south-america" d="m143 190 35 6 27 32-9 42-15 44-21 51-17-24 6-45-17-35-12-44Z" />
              <path data-continent="europe" d="m305 99 17-14 16-20 31 4 10 20-19 12-20-5-18 13Z" />
              <path data-continent="africa" d="m326 119 47-7 27 31-8 54-21 52-26 44-19-33-11-46-17-50Z" />
              <path data-continent="asia" d="m383 80 38-25 53 5 29-15 70 11 61 29 25 31-30 24-40-8-30 26-38-12-26 25-38-18-27-30-38-5Z" />
              <path data-continent="japan" d="m627 164 8 6-5 25-8 10-3-13 5-13Z" />
              <path data-continent="australia" d="m555 265 43-18 36 20 9 35-31 22-46-6-25-26Z" />
              <path data-continent="madagascar" d="m413 265 8 13-5 28-9 12-4-21Z" />
              <path data-continent="antarctica" d="m98 389 72-8 69 7 70-5 74 8 82-7 72 7 72-5 51 15-79 9-91-2-89 6-83-7-86 5-77-8Z" />
            </g>
            <path className="route-line" d="M105 126 C205 54 260 82 340 91 S488 68 589 112" />
            <path className="route-line route-line-secondary" d="M160 246 C250 174 306 184 354 177 S493 217 591 282" />
            <circle className="route-point" cx="105" cy="126" r="6" />
            <circle className="route-point" cx="340" cy="91" r="6" />
            <circle className="route-point" cx="589" cy="112" r="6" />
            <circle className="route-point" cx="160" cy="246" r="6" />
            <circle className="route-point" cx="354" cy="177" r="6" />
            <circle className="route-point" cx="591" cy="282" r="6" />
          </svg>
          <div className="hero-copy">
            <div className="eyebrow">Ghana · Nigeria · Beyond</div>
            <h1>Move money and handle life, <span>across borders.</span></h1>
            <p className="hero-text">Exchange Naira and Cedis, trade gift cards, book flights, and manage everyday payments from one trusted place.</p>
            <div className="hero-actions">
              <a className="button hero-cta" href="#services">Explore services <ArrowUpRight /></a>
              <a className="button hero-secondary-cta" href="#process">How it works</a>
            </div>
            <div className="hero-proof">
              <span><Icon name="shield" /> Secure transactions</span>
              <span><Icon name="clock" /> Responsive support</span>
            </div>
          </div>

          <div className="hero-visual" aria-label="Cross-border payments and services dashboard preview">
            <div className="transaction-card">
              <div className="transaction-head">
                <div><small>Cross-border transfer</small><strong>Payment summary</strong></div>
                <span className="live-badge"><i /> Live</span>
              </div>
              <div className="account-row">
                <span className="currency-flag">GH</span>
                <div><small>You send</small><strong>GH₵ 8,250.00</strong></div>
                <span>GHS</span>
              </div>
              <div className="transfer-path"><span /><small>Fast settlement</small><span /></div>
              <div className="account-row">
                <span className="currency-flag currency-flag-ng">NG</span>
                <div><small>They receive</small><strong>₦ 1,072,500.00</strong></div>
                <span>NGN</span>
              </div>
              <div className="transaction-status">
                <span><Icon name="check" /> Ready to process</span>
                <code>TP-30482</code>
              </div>
            </div>

            <div className="float-card gift-float"><Icon name="gift" /><span><small>Gift cards</small><strong>Buy & sell easily</strong></span></div>
            <div className="float-card rate-float"><span className="rate-dot" /><span><small>Live service</small><strong>Fast, guided support</strong></span></div>
          </div>
        </div>
        <div className="container trust-strip" aria-label="Available services">
          <small className="trust-strip-label">One point for everyday essentials</small>
          <div className="trust-marquee">
            <div className="trust-track">
              <div className="trust-group">
                <span><Icon name="exchange" /> Currency exchange</span>
                <span><Icon name="gift" /> Gift cards</span>
                <span><Icon name="plane" /> Flight tickets</span>
                <span><Icon name="signal" /> Airtime &amp; data</span>
              </div>
              <div className="trust-group" aria-hidden="true">
                <span><Icon name="exchange" /> Currency exchange</span>
                <span><Icon name="gift" /> Gift cards</span>
                <span><Icon name="plane" /> Flight tickets</span>
                <span><Icon name="signal" /> Airtime &amp; data</span>
              </div>
              <div className="trust-group" aria-hidden="true">
                <span><Icon name="exchange" /> Currency exchange</span>
                <span><Icon name="gift" /> Gift cards</span>
                <span><Icon name="plane" /> Flight tickets</span>
                <span><Icon name="signal" /> Airtime &amp; data</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services-section" id="services">
        <div className="container">
          <div className="section-heading">
            <div><span className="kicker">Our services</span><h2>One place for what matters.</h2></div>
            <p>Choose what you need. We&apos;ll guide you through the rest.</p>
          </div>
          <div className="services-grid" aria-label="Available services">
            {services.map((service) => <ServiceCard key={service.title} {...service} />)}
          </div>
          <div className="section-note">
            <span><Icon name="shield" /> Secure by default</span>
            <p>Every request is handled with clear confirmation and responsive support.</p>
          </div>
        </div>
      </section>

      <section className="process-section" id="process">
        <div className="container">
          <div className="process-heading">
            <span className="kicker">Simple by design</span>
            <h2>Done in three steps.</h2>
            <p>Tell us what you need. We&apos;ll take it from there.</p>
          </div>
          <ol className="steps">
            <li><div className="step-top"><span>01</span><Icon name="cursor" /></div><h3>Choose a service</h3><p>Select what you want us to handle.</p></li>
            <li><div className="step-top"><span>02</span><Icon name="check" /></div><h3>Confirm details</h3><p>Share the required information.</p></li>
            <li><div className="step-top"><span>03</span><Icon name="sparkle" /></div><h3>Consider it done</h3><p>We process it and keep you updated.</p></li>
          </ol>
          <div className="process-assurance">
            <div><span className="assurance-mark"><Icon name="shield" /></span><span><small>Built around trust</small><strong>Clear updates at every stage</strong></span></div>
            <div className="assurance-code"><small>Service standard</small><code>FAST · GUIDED · SECURE</code></div>
          </div>
        </div>
      </section>

      <section className="cta-section" id="about">
        <div className="container cta-card">
          <div>
            <span className="kicker">ThrustPoint Global</span>
            <h2>Ready when you are.</h2>
            <p>Exchange, travel and payments without the runaround.</p>
          </div>
          <a className="button button-light" href="#services">Get started <ArrowUpRight /></a>
        </div>
      </section>

      <section className="story-banner" aria-labelledby="story-banner-title">
        <Image
          className="story-banner-image"
          src="/travel-hero.jpg"
          alt="Airplane wing above the clouds at sunrise"
          fill
          sizes="100vw"
        />
        <div className="story-banner-overlay" />
        <div className="container story-banner-frame">
          <div className="story-banner-topline">
            <span>Money · travel · everyday essentials</span>
            <div className="story-banner-brand" aria-label="ThrustPoint Global">
              <Image src="/Thrustpoint_white_transparent.png" alt="" width={62} height={52} />
              <span>ThrustPoint<br />Global</span>
            </div>
          </div>
          <div className="story-banner-copy">
            <span className="story-banner-kicker">Built for movement</span>
            <h2 id="story-banner-title">Wherever life takes you, <em>move with confidence.</em></h2>
            <p>One trusted point for the payments, plans, and possibilities that keep your world moving.</p>
          </div>
          <div className="story-banner-action">
            <span>Ghana to Nigeria.<br />Home to anywhere.</span>
            <a className="button button-light" href="/contact">Start your journey <ArrowUpRight /></a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
