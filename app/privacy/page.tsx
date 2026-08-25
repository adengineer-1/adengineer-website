import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Data Protection & Inquiry Security",
  description: "Read ADEN's privacy policy regarding customer data protection, technical inquiry confidentiality, and industrial equipment specification security.",
  keywords: ["ADEN Privacy Policy", "Customer Data Protection", "Chemical Equipment Confidentiality"],
  robots: { index: false, follow: true }
};

export default function Privacy() {
  return (
    <main>
      <section className="page-banner">
        <div className="container">
          <div className="breadcrumb"><Link href="/">Home</Link> / Privacy Policy</div>
          <h1>Privacy Policy</h1>
          <p style={{ maxWidth: "56ch", color: "var(--steel-light)", marginTop: "10px" }}>
            How we collect, use and protect information you share with us.
          </p>
        </div>
      </section>

      <section>
        <div className="container legal-body" style={{ maxWidth: "820px" }}>
          <p className="legal-updated" style={{ color: "var(--steel-light)", fontSize: "14px", marginBottom: "32px" }}>
            Last updated: July 2026
          </p>

          <p>This Privacy Policy explains how A.D. Engineers (ADEN) collects, uses and protects information submitted through this website.</p>

          <h2 style={{ marginTop: "40px", marginBottom: "16px" }}>Information we collect</h2>
          <ul style={{ paddingLeft: "24px", marginBottom: "24px", color: "var(--steel-light)" }}>
            <li style={{ marginBottom: "8px" }}>Contact details submitted through the inquiry form — name, company, email address and phone number.</li>
            <li style={{ marginBottom: "8px" }}>Process details you choose to share when requesting a quotation.</li>
            <li style={{ marginBottom: "8px" }}>Basic technical data such as browser type, collected automatically to keep the site running smoothly.</li>
          </ul>

          <h2 style={{ marginTop: "40px", marginBottom: "16px" }}>How we use it</h2>
          <ul style={{ paddingLeft: "24px", marginBottom: "24px", color: "var(--steel-light)" }}>
            <li style={{ marginBottom: "8px" }}>To respond to inquiries and prepare quotations.</li>
            <li style={{ marginBottom: "8px" }}>To provide after-sales support on equipment you have purchased.</li>
            <li style={{ marginBottom: "8px" }}>We do not sell or rent your contact details to third parties.</li>
          </ul>

          <h2 style={{ marginTop: "40px", marginBottom: "16px" }}>Data retention</h2>
          <p>Inquiry and customer information is retained for as long as needed to respond to your request and to maintain records for after-sales support and statutory purposes.</p>

          <h2 style={{ marginTop: "40px", marginBottom: "16px" }}>Cookies</h2>
          <p>This site may use basic cookies to remember display preferences. No third-party advertising cookies are used.</p>

          <h2 style={{ marginTop: "40px", marginBottom: "16px" }}>Your rights</h2>
          <p>You may request a copy of the information we hold about you, or ask us to correct or delete it, by writing to info@adengineers.co.in.</p>

          <h2 style={{ marginTop: "40px", marginBottom: "16px" }}>Contact</h2>
          <p>Questions about this policy can be sent to info@adengineers.co.in or through our <Link href="/contact">Contact Us</Link> page.</p>
        </div>
      </section>
    </main>
  );
}
