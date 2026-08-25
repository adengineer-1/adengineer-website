import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Centrifuge Service & Support | 24/7 Breakdown Response, Spares & Commissioning",
  description: "ADEN provides 24/7 breakdown support, on-site commissioning, preventative maintenance, process consultation, and genuine spare parts for industrial centrifuges and pumps.",
  keywords: [
    "Centrifuge Maintenance Services",
    "24/7 Centrifuge Breakdown Support",
    "Centrifuge Commissioning India",
    "Industrial Centrifuge Spare Parts",
    "Process Equipment Consultation",
    "Centrifuge Repair Ahmedabad",
    "Rubber-Lined Centrifuge Repair",
    "Solid-Liquid Separation Support",
    "ADEN After Sales Support"
  ],
  openGraph: {
    title: "Centrifuge Service & Support | 24/7 Breakdown Response & Spares",
    description: "Dedicated mechanical, electrical, and control-system support for continuous separation plants 365 days a year.",
    url: "https://www.adengineers.co.in/services",
  }
};

export default function Services() {
  return (
    <main>
      <section style={{ paddingTop: "120px" }}>
        <div className="container two-col">
          <div className="reveal">
            <div className="eyebrow">24/7 standby service</div>
            <h2>We answer breakdown calls the same way we answer the first enquiry.</h2>
            <p style={{ color: "var(--steel-light)" }}>A separation or pumping failure rarely waits for business hours. ADEN maintains a round-the-clock breakdown line covering both mechanical faults and electrical/control-system issues, so a stopped machine gets a qualified answer immediately rather than a callback the next day.</p>
            <div className="badge-strip">
              <span className="badge">Breakdown Call: 079 2282 3263</span>
              <span className="badge">Available 24/7, 365 days a year</span>
            </div>
          </div>
          <div className="title-block reveal" style={{ maxWidth: "none" }}>
            <div className="tb-row"><div className="tb-cell"><span className="tb-label">Breakdown line</span>079 2282 3263</div></div>
            <div className="tb-row">
              <div className="tb-cell"><span className="tb-label">Mobile</span>+91 98251 72158</div>
              <div className="tb-cell"><span className="tb-label">Mobile</span>+91 94280 46318</div>
            </div>
            <div className="tb-row"><div className="tb-cell"><span className="tb-label">Telefax</span>079 2281 8437</div></div>
            <div className="tb-row"><div className="tb-cell"><span className="tb-label">Email</span>info@adengineers.co.in</div></div>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--white)", borderTop: "1px solid var(--silver)", borderBottom: "1px solid var(--silver)" }}>
        <div className="container">
          <div className="section-head reveal">
            <h2>What our support covers</h2>
          </div>
          <div className="grid-3 reveal">
            <div className="card">
              <div className="index">Service 01</div>
              <h3>Pre-purchase consultation</h3>
              <p>Our engineering team reviews the process — media, throughput, duty cycle — before recommending a centrifuge or pump size, rather than starting from a catalogue part number.</p>
            </div>
            <div className="card">
              <div className="index">Service 02</div>
              <h3>Installation &amp; commissioning</h3>
              <p>On-site support to get new equipment running to its rated specification, with the operating team walked through maintenance points before we leave.</p>
            </div>
            <div className="card">
              <div className="index">Service 03</div>
              <h3>Breakdown response</h3>
              <p>A 24/7 line for mechanical, electrical and control-system faults, staffed to get a stopped line moving again with minimum lost production time.</p>
            </div>
            <div className="card">
              <div className="index">Service 04</div>
              <h3>Spares &amp; wear parts</h3>
              <p>Baskets, seals, liners and drive components sourced to the original build specification of your machine, not a generic equivalent.</p>
            </div>
            <div className="card">
              <div className="index">Service 05</div>
              <h3>Retrofits &amp; upgrades</h3>
              <p>Where an older machine can be brought up to current duty requirements, we assess and quote the retrofit rather than defaulting to full replacement.</p>
            </div>
            <div className="card">
              <div className="index">Service 06</div>
              <h3>After-sales engineering</h3>
              <p>Ongoing access to the same engineering team that specified your equipment — for process changes, capacity reviews or plant expansions.</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--graphite)", color: "var(--silver)" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <div className="eyebrow" style={{ justifyContent: "center", color: "var(--silver)" }}>Have a running machine that needs attention?</div>
          <h2 style={{ color: "var(--white)", maxWidth: "26ch", margin: "0 auto 16px" }}>Call our breakdown line or send us the details.</h2>
          <div className="hero-actions" style={{ justifyContent: "center" }}>
            <Link href="/contact" className="btn btn-amber" style={{ background: "transparent" }}>Contact Us</Link>
            <Link href="/inquiry" className="btn" style={{ borderColor: "var(--silver)", color: "var(--silver)" }}>Submit an Inquiry</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
