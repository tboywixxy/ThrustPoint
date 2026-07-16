import Link from "next/link";
import { Icon } from "@/components/icons";
import { ThemeLogo } from "@/components/theme-logo";

export function SiteFooter() {
  return (
    <footer>
      <div className="container footer-top">
        <Link className="brand" href="/#top" aria-label="ThrustPoint home">
          <ThemeLogo className="logo-wrap" width={44} height={44} />
          <span><strong>ThrustPoint</strong><small>Global Company LTD</small></span>
        </Link>
        <p>Exchange · Travel · Digital payments</p>
      </div>
      <div className="container footer-details">
        <div className="footer-detail">
          <div className="footer-detail-heading">
            <span className="footer-detail-icon"><Icon name="phone" /></span>
            <span>Call us</span>
          </div>
          <a className="footer-detail-value" href="tel:+233201473475">+233 20 147 3475</a>
        </div>
        <div className="footer-detail">
          <div className="footer-detail-heading">
            <span className="footer-detail-icon"><Icon name="mail" /></span>
            <span>Email us</span>
          </div>
          <a className="footer-detail-value" href="mailto:hello@thrustpoint.com">hello@thrustpoint.com</a>
        </div>
        <address className="footer-detail">
          <div className="footer-detail-heading">
            <span className="footer-detail-icon"><Icon name="location" /></span>
            <span>Head office</span>
          </div>
          <div className="footer-detail-value">Aku Si Ka Plaza Broadcasting</div>
        </address>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} ThrustPoint Global Company LTD.</span>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}
