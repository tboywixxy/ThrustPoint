"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";

type SiteHeaderProps = {
  active?: "testimonials" | "contact";
};

export function SiteHeader({ active }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setMenuOpen(false);
    }

    function closeOnDesktop() {
      if (window.innerWidth > 900) setMenuOpen(false);
    }

    window.addEventListener("keydown", closeOnEscape);
    window.addEventListener("resize", closeOnDesktop);
    return () => {
      window.removeEventListener("keydown", closeOnEscape);
      window.removeEventListener("resize", closeOnDesktop);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`site-header${menuOpen ? " menu-open" : ""}`}>
      <div className="container header-inner">
        <Link className="brand" href="/#top" aria-label="ThrustPoint home" onClick={closeMenu}>
          <span className="logo-wrap">
            <Image src="/ThrustPoint_transparent.png" alt="" width={44} height={44} priority />
          </span>
          <span><strong>ThrustPoint</strong><small>Global Company LTD</small></span>
        </Link>
        <nav id="main-navigation" aria-label="Main navigation">
          <Link href="/#services" onClick={closeMenu}>Services</Link>
          <Link href="/#process" onClick={closeMenu}>How it works</Link>
          <Link className={active === "testimonials" ? "active" : undefined} href="/testimonials" aria-current={active === "testimonials" ? "page" : undefined} onClick={closeMenu}>Testimonials</Link>
          <Link href="/#about" onClick={closeMenu}>About</Link>
          <Link className={active === "contact" ? "active" : undefined} href="/contact" aria-current={active === "contact" ? "page" : undefined} onClick={closeMenu}>Contact</Link>
        </nav>
        <div className="header-actions">
          <ThemeToggle />
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="main-navigation"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>
      </div>
      <button
        className="menu-backdrop"
        type="button"
        aria-label="Close navigation menu"
        aria-hidden={!menuOpen}
        tabIndex={menuOpen ? 0 : -1}
        onClick={closeMenu}
      />
    </header>
  );
}
