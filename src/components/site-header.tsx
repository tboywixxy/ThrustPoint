import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@/components/icons";
import { ThemeToggle } from "@/components/theme-toggle";

type SiteHeaderProps = {
  active?: "testimonials" | "contact";
};

export function SiteHeader({ active }: SiteHeaderProps) {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="brand" href="/#top" aria-label="ThrustPoint home">
          <span className="logo-wrap">
            <Image src="/ThrustPoint_transparent.png" alt="" width={44} height={44} priority />
          </span>
          <span><strong>ThrustPoint</strong><small>Global Company LTD</small></span>
        </Link>
        <nav aria-label="Main navigation">
          <Link href="/#services">Services</Link>
          <Link href="/#process">How it works</Link>
          <Link className={active === "testimonials" ? "active" : undefined} href="/testimonials" aria-current={active === "testimonials" ? "page" : undefined}>Testimonials</Link>
          <Link href="/#about">About</Link>
          <Link className={active === "contact" ? "active" : undefined} href="/contact" aria-current={active === "contact" ? "page" : undefined}>Contact</Link>
        </nav>
        <div className="header-actions">
          <ThemeToggle />
          <Link className="button button-small" href="/#services">Get started <ArrowUpRight /></Link>
        </div>
      </div>
    </header>
  );
}
