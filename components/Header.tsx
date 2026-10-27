"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { contact, navLinks } from "../lib/site";
import { ArrowRight, Close, Menu, Phone } from "./Icons";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  return (
    <header className={`site-header ${isScrolled ? "scrolled" : ""}`}>
      <div className="container nav">
        <Link href="/" className="brand" aria-label="ADEN — A.D. Engineers, home">
          <img src="/logo.png" alt="ADEN" width={90} height={30} />
          <span className="brand-name">
            <strong>A.D. Engineers</strong>
            <span>Since 1990</span>
          </span>
        </Link>

        <nav aria-label="Main">
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={pathname === link.href ? "active" : ""}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav-actions">
          <a href={contact.phoneHref} className="nav-phone">
            <Phone size={16} /> {contact.phone}
          </a>
          <Link href="/contact" className="btn btn-dark">
            Get a quote
          </Link>
        </div>

        <button
          className="nav-toggle"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <Close size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        {[...navLinks, { href: "/contact", label: "Contact" }].map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`mm-link ${pathname === link.href ? "active" : ""}`}
            onClick={() => setIsOpen(false)}
          >
            {link.label} <ArrowRight size={22} />
          </Link>
        ))}
        <a href={contact.phoneHref} className="btn btn-primary">
          <Phone size={18} /> Call {contact.phone}
        </a>
      </div>
    </header>
  );
}
