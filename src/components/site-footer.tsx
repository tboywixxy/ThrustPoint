import Image from "next/image";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer>
      <div className="container footer-top">
        <Link className="brand" href="/#top" aria-label="ThrustPoint home">
          <span className="logo-wrap">
            <Image src="/ThrustPoint_transparent.png" alt="" width={44} height={44} />
          </span>
          <span><strong>ThrustPoint</strong><small>Global Company LTD</small></span>
        </Link>
        <p>Exchange · Travel · Digital payments</p>
        <Link className="back-top" href="/contact">Contact us →</Link>
      </div>
      <div className="container footer-details">
        <div>
          <span>Call us</span>
          <a href="tel:+233201234567">+233 20 123 4567</a>
        </div>
        <div>
          <span>Email us</span>
          <a href="mailto:hello@thrustpoint.com">hello@thrustpoint.com</a>
        </div>
        <address>
          <span>Head office</span>
          14 Independence Avenue, Accra, Ghana
        </address>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} ThrustPoint Global Company LTD.</span>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}
