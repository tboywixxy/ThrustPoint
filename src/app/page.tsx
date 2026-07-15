import { ArrowUpRight, Icon, type IconName } from "@/components/icons";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const services: Array<{ title: string; description: string; icon: IconName }> = [
  { title: "Naira ↔ Cedis", description: "Exchange securely in both directions.", icon: "exchange" },
  { title: "Gift Cards", description: "Buy and sell popular gift cards.", icon: "gift" },
  { title: "Flight Tickets", description: "Local and international bookings.", icon: "plane" },
  { title: "Betting Wallets", description: "Fund supported betting platforms.", icon: "wallet" },
  { title: "Airtime & Data", description: "Local and international top-ups.", icon: "signal" },
  { title: "TV Subscriptions", description: "Quick DStv and GOtv payments.", icon: "tv" },
];

function ServiceCard({ title, description, icon }: (typeof services)[number]) {
  return (
    <article className="service-card">
      <div className="service-card-top">
        <div className="service-icon"><Icon name={icon} /></div>
        <span className="service-status">Available</span>
      </div>
      <div><h3>{title}</h3><p>{description}</p></div>
      <span className="card-arrow" aria-hidden="true"><ArrowUpRight /></span>
    </article>
  );
}

export default function Home() {
  return (
    <main id="top">
      <SiteHeader />

      <section className="hero">
        <div className="container hero-grid">
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
            <svg className="world-map" viewBox="0 0 620 430" aria-hidden="true">
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
                <path d="M55 92 88 55l71-24 69 17 27 34-13 28-41 4-22 30-29 7-21 46-25-8-14-45-27-15Z" />
                <path d="m194 201 43 15 32 45-14 66-27 62-24-24 6-54-27-61Z" />
                <path d="m292 87 46-31 52 14 27-19 89 5 57 39-20 32-58 8-24 35-50-8-28 19-42-26-47 1-21-33Z" />
                <path d="m356 181 57 7 28 52-17 73-36 60-24-38-18-71-25-36Z" />
                <path d="m490 290 54-15 39 27-18 39-61 3-27-27Z" />
              </g>
              <path className="route-line" d="M116 131 C210 78 272 218 365 183 S468 89 545 120" />
              <circle className="route-point" cx="116" cy="131" r="6" />
              <circle className="route-point" cx="365" cy="183" r="6" />
              <circle className="route-point" cx="545" cy="120" r="6" />
            </svg>

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

      <SiteFooter />
    </main>
  );
}
