import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link href="/" className="brand" style={{ display: "inline-flex", flexDirection: "column", alignItems: "flex-start", textDecoration: "none", marginBottom: "16px" }}>
              <div style={{ width: '150px', height: '38px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src="/logo.png" alt="ADEN Logo" style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'center', filter: 'brightness(0) invert(1)' }} />
              </div>
              <span style={{ fontFamily: "var(--font-display)", fontWeight: "800", fontSize: "14px", letterSpacing: "0.15em", color: "#ffffff", textTransform: "uppercase", lineHeight: "1", marginTop: "3px" }}>
                A.D.Engineers
              </span>
            </Link>
            <p style={{ fontSize: "13.5px", opacity: 0.8, maxWidth: "32ch" }}>
              Centrifuges and process pumps engineered and manufactured in Ahmedabad, India since 1990.
            </p>
          </div>
          <div>
            <h4>Company</h4>
            <Link href="/company">Company</Link>
            <Link href="/products">Products</Link>
            <Link href="/services">Services</Link>
          </div>
          <div>
            <h4>Resources</h4>
            <Link href="/gallery">Gallery</Link>
            <Link href="/clients">Clients &amp; Reach</Link>
            <Link href="/certifications">Certifications</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/faq">FAQ</Link>
            <Link href="/careers">Careers</Link>
          </div>
          <div>
            <h4>Legal &amp; Contact</h4>
            <Link href="/contact">Contact Us</Link>
            <Link href="/terms">Terms &amp; Conditions</Link>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/sitemap">Sitemap</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 ADEN. All rights reserved.</span>
          <span>Naroda GIDC, Ahmedabad, Gujarat, India</span>
        </div>
      </div>
    </footer>
  );
}
