"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { contact, navLinks } from "../lib/site";
import { ArrowRight, Close, Mail, MapPin, Menu, Phone } from "./Icons";

const links = [...navLinks, { href: "/contact", label: "Contact" }];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Pages without a dark banner (e.g. 404) get the solid header straight away.
    const onScroll = () =>
      setIsScrolled(window.scrollY > 60 || !document.querySelector(".hero, .page-banner"));
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  const brand = (
    <Link href="/" className="brand" aria-label="ADEN, A.D. Engineers home">
      <img src="/brand/logo.png" alt="ADEN" width={102} height={34} />
      <span>A.D. Engineers</span>
    </Link>
  );

  return (
    <header className={`site-header ${isScrolled ? "scrolled" : ""} ${isOpen ? "menu-open" : ""}`}>
      <div className="hdr-top">
        <div className="container">
          {brand}
          <div className="hdr-contacts">
            <div className="hc-visit">
              <MapPin size={30} strokeWidth={1.3} />
              <div><small>Visit our works</small><span>G.I.D.C. Naroda, Ahmedabad</span></div>
            </div>
            <a href={contact.phoneHref}>
              <Phone size={28} strokeWidth={1.3} />
              <div><small>Give us a call</small><span>{contact.phone}</span></div>
            </a>
            <a href={`mailto:${contact.email}`}>
              <Mail size={30} strokeWidth={1.3} />
              <div><small>Email us</small><span>{contact.email}</span></div>
            </a>
          </div>
          <button
            className="nav-toggle"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <Close size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <div className="hdr-nav">
        <div className="container">
          {brand}
          <nav aria-label="Main">
            <ul className="nav-links">
              {links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={pathname === link.href ? "active" : ""}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <Link href="/contact" className="nav-cta">
            Get a quote <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      <div className={`mobile-menu ${isOpen ? "open" : ""}`} aria-hidden={!isOpen}>
        {links.map((link, i) => (
          <Link
            key={link.href}
            href={link.href}
            className={`mm-link ${pathname === link.href ? "active" : ""}`}
            style={{ transitionDelay: isOpen ? `${0.15 + i * 0.06}s` : "0s" }}
            onClick={() => setIsOpen(false)}
            tabIndex={isOpen ? 0 : -1}
          >
            {link.label}
          </Link>
        ))}
        <div className="mm-contact">
          {contact.phone}<br />{contact.email}<br />G.I.D.C. Naroda, Ahmedabad
        </div>
        <a href={contact.phoneHref} className="btn btn-red" tabIndex={isOpen ? 0 : -1}>Call us now</a>
      </div>
    </header>
  );
}
