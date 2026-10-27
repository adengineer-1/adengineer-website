import Link from "next/link";
import { contact, navLinks, products } from "../lib/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <img src="/logo.png" alt="ADEN" width={102} height={34} />
            <p>
              Industrial centrifuges engineered and manufactured in Ahmedabad, India since 1990 — built for plants
              that run around the clock.
            </p>
          </div>

          <div>
            <h4>Company</h4>
            <div className="footer-links">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>{link.label}</Link>
              ))}
              <Link href="/contact">Contact</Link>
            </div>
          </div>

          <div>
            <h4>Products</h4>
            <div className="footer-links">
              {products.map((product) => (
                <Link key={product.id} href={`/products#${product.id}`}>
                  {product.name.split(" ")[0]} · {product.short}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4>Get in touch</h4>
            <div className="footer-links">
              <a href={contact.phoneHref}>{contact.phone}</a>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
              {contact.addressLines.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} ADEN — A.D. Engineers. All rights reserved.</span>
          <nav aria-label="Legal">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
