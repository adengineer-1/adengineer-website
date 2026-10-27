import Link from "next/link";
import { contact, navLinks, products } from "../lib/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div className="footer-grid">
          <div data-anim="up">
            <img src="/brand/logo.png" alt="ADEN" width={108} height={36} />
            <p>
              A.D. Engineers designs and manufactures top discharge centrifuges for the chemical, pharmaceutical,
              textile and food industries. Naroda, Ahmedabad, since 1990.
            </p>
          </div>

          <div data-anim="up" style={{ ["--d" as string]: ".1s" }}>
            <h4>Company</h4>
            <ul>
              {navLinks.map((link) => (
                <li key={link.href}><Link href={link.href}>{link.label}</Link></li>
              ))}
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div data-anim="up" style={{ ["--d" as string]: ".2s" }}>
            <h4>Products</h4>
            <ul>
              {products.map((product) => (
                <li key={product.id}>
                  <Link href={`/products#${product.id}`}>{product.name.split(" ")[0]} · {product.short}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div data-anim="up" style={{ ["--d" as string]: ".3s" }}>
            <h4>Get in touch</h4>
            <ul>
              {contact.addressLines.map((line) => <li key={line}>{line}</li>)}
              <li style={{ marginTop: 12 }}><a href={contact.phoneHref}>{contact.phone}</a></li>
              <li><a href={`mailto:${contact.email}`}>{contact.email}</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <span>© {new Date().getFullYear()} A.D. Engineers. All rights reserved.</span>
          <nav aria-label="Legal">
            <Link href="/privacy">Privacy policy</Link>
            <Link href="/terms">Terms</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
