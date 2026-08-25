import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions | Equipment Warranty & Website Usage",
  description: "Read ADEN's terms and conditions regarding industrial centrifuge datasheets, equipment specifications, warranty policies, and intellectual property.",
  keywords: ["ADEN Terms and Conditions", "Centrifuge Warranty Terms", "Industrial Equipment Sale Terms"],
  robots: { index: false, follow: true }
};

export default function Terms() {
  return (
    <main>
      <section className="page-banner">
        <div className="container">
          <div className="breadcrumb"><Link href="/">Home</Link> / Terms &amp; Conditions</div>
          <h1>Terms &amp; Conditions</h1>
          <p style={{ maxWidth: "56ch", color: "var(--steel-light)", marginTop: "10px" }}>
            Terms governing the use of this website and the information published on it.
          </p>
        </div>
      </section>

      <section>
        <div className="container legal-body" style={{ maxWidth: "820px" }}>
          <p className="legal-updated" style={{ color: "var(--steel-light)", fontSize: "14px", marginBottom: "32px" }}>
            Last updated: July 2026
          </p>

          <p>These Terms &amp; Conditions govern the use of this website, operated by A.D. Engineers (ADEN), Plot No. 329, Phase I, G.I.D.C., Naroda, Ahmedabad – 382330, Gujarat, India. By using this site, you agree to the terms below.</p>

          <h2 style={{ marginTop: "40px", marginBottom: "16px" }}>Use of this website</h2>
          <p>Content on this website — including product descriptions, technical data and images — is provided for general information about ADEN's centrifuges, pumps and services. It does not constitute a binding offer; all orders are subject to a separate written quotation and order confirmation from ADEN.</p>

          <h2 style={{ marginTop: "40px", marginBottom: "16px" }}>Product specifications</h2>
          <ul style={{ paddingLeft: "24px", marginBottom: "24px", color: "var(--steel-light)" }}>
            <li style={{ marginBottom: "8px" }}>Technical data shown for centrifuges and pumps (basket diameter, filtration area, discharge rate, power input, etc.) reflects standard configurations and may vary by order.</li>
            <li style={{ marginBottom: "8px" }}>ADEN reserves the right to modify product specifications, materials of construction or design without prior notice, in line with ongoing engineering improvements.</li>
            <li style={{ marginBottom: "8px" }}>Formal, order-specific specifications are confirmed in writing at the time of quotation.</li>
          </ul>

          <h2 style={{ marginTop: "40px", marginBottom: "16px" }}>Intellectual property</h2>
          <p>All text, graphics, logos and technical drawings on this website are the property of A.D. Engineers unless otherwise noted, and may not be reproduced without written permission.</p>

          <h2 style={{ marginTop: "40px", marginBottom: "16px" }}>Inquiries and quotations</h2>
          <p>Submitting the inquiry form on this website does not create a contract. A quotation becomes binding only once confirmed in writing by ADEN and accepted by the customer.</p>

          <h2 style={{ marginTop: "40px", marginBottom: "16px" }}>Limitation of liability</h2>
          <p>While we take care to keep information on this site accurate, ADEN makes no warranty that content is free of errors or omissions, and is not liable for decisions made solely on the basis of website content without a confirmed quotation.</p>

          <h2 style={{ marginTop: "40px", marginBottom: "16px" }}>Governing law</h2>
          <p>These terms are governed by the laws of India, with courts at Ahmedabad, Gujarat having jurisdiction.</p>

          <h2 style={{ marginTop: "40px", marginBottom: "16px" }}>Contact</h2>
          <p>Questions about these terms can be sent to info@adengineers.co.in or through our <Link href="/contact">Contact Us</Link> page.</p>
        </div>
      </section>
    </main>
  );
}
