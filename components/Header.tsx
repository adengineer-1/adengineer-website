"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`site-header ${isScrolled ? "scrolled" : ""}`}>
      <nav className="nav">
        <Link href="/" className="brand" style={{ display: "flex", flexDirection: "column", alignItems: "center", textDecoration: "none" }}>
          <div style={{ width: '150px', height: '38px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src="/logo.png" alt="ADEN Logo" style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'center', filter: 'invert(1)' }} />
          </div>
          <span style={{ fontFamily: "var(--font-display)", fontWeight: "800", fontSize: "14px", letterSpacing: "0.15em", color: "var(--steel)", textTransform: "uppercase", lineHeight: "1", marginTop: "3px" }}>
            A.D.Engineers
          </span>
        </Link>
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li><Link href="/" className={pathname === "/" ? "active" : ""}>Home</Link></li>
          <li><Link href="/company" className={pathname === "/company" ? "active" : ""}>Company</Link></li>
          <li><Link href="/products" className={pathname === "/products" ? "active" : ""}>Products</Link></li>
          <li><Link href="/services" className={pathname === "/services" ? "active" : ""}>Services</Link></li>
          <li><Link href="/gallery" className={pathname === "/gallery" ? "active" : ""}>Gallery</Link></li>
          <li><Link href="/blog" className={pathname === "/blog" ? "active" : ""}>Blog</Link></li>
          <li><Link href="/contact" className={`nav-cta ${pathname === "/contact" ? "active" : ""}`}>Contact Us</Link></li>
        </ul>
        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span><span></span><span></span>
        </button>
      </nav>
    </header>
  );
}
