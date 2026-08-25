import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Careers at ADEN | Mechanical & Centrifuge Design Engineering Jobs Ahmedabad",
  description: "Join ADEN's engineering and manufacturing team in Naroda, Ahmedabad. Opportunities for mechanical design engineers, production supervisors, and QC inspectors.",
  keywords: [
    "Mechanical Engineering Jobs Ahmedabad",
    "Centrifuge Design Engineer Careers",
    "Industrial Equipment Manufacturing Jobs Gujarat",
    "Production Engineer Jobs Naroda GIDC",
    "ADEN Careers",
    "Chemical Equipment Sales Engineer Jobs"
  ],
  openGraph: {
    title: "Careers at ADEN | Mechanical & Centrifuge Design Jobs",
    description: "Build industrial separation equipment engineered for continuous 24/7 duty. Explore careers with our senior engineering team in Ahmedabad.",
    url: "https://www.adengineers.co.in/careers",
  }
};

export default function Careers() {
  return (
    <main>
      <section className="page-banner">
        <div className="container">
          <div className="breadcrumb"><Link href="/">Home</Link> / Careers</div>
          <h1>Careers</h1>
          <p style={{ maxWidth: "56ch", color: "var(--steel-light)", marginTop: "10px" }}>
            A small, senior team spanning design, production, quality control and sales engineering.
          </p>
        </div>
      </section>

      <section>
        <div className="container two-col">
          <div className="reveal">
            <div className="eyebrow">Working at ADEN</div>
            <h2>Built by a small team that stays close to the machines.</h2>
            <p style={{ color: "var(--steel-light)" }}>
              ADEN is run by a senior team spanning design, sales engineering, production and quality control — not a large, layered organisation. People who join us work directly on the equipment our customers depend on, from first consultation through to commissioning.
            </p>
          </div>
          <div className="title-block reveal" style={{ maxWidth: "none" }}>
            <div className="tb-row"><div className="tb-cell"><span className="tb-label">Location</span>Naroda GIDC, Ahmedabad</div></div>
            <div className="tb-row"><div className="tb-cell"><span className="tb-label">Disciplines</span>Design, Production, QC, Sales Engineering</div></div>
            <div className="tb-row"><div className="tb-cell"><span className="tb-label">To apply</span>info@adengineers.co.in</div></div>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--white)", borderTop: "1px solid var(--silver)", borderBottom: "1px solid var(--silver)", textAlign: "center" }}>
        <div className="container">
          <div className="eyebrow" style={{ justifyContent: "center" }}>Current openings</div>
          <h2 style={{ maxWidth: "32ch", margin: "0 auto 12px" }}>No positions are open right now.</h2>
          <p style={{ color: "var(--steel-light)", maxWidth: "48ch", margin: "0 auto 24px" }}>
            We're not actively hiring at the moment, but you're welcome to send your profile for future openings in design, production or quality control.
          </p>
          <Link href="/contact" className="btn btn-solid">Send Your Profile</Link>
        </div>
      </section>
    </main>
  );
}
