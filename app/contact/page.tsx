"use client";

import { useState } from "react";
import { contact, products } from "../../lib/site";
import { ArrowRight, Clock, Mail, MapPin, Phone, WhatsApp } from "../../components/Icons";

type Status = { type: "idle" | "sending" | "success" } | { type: "error"; message: string; mailto: string };

export default function Contact() {
  const [status, setStatus] = useState<Status>({ type: "idle" });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const formattedBody = `Name: ${data.name}\nCompany: ${data.company}\nEmail: ${data.email}\nPhone: ${data.phone}\nProduct: ${data.product}\nIndustry: ${data.industry}\n\nRequirement Details:\n${data.message}`;

    setStatus({ type: "sending" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();

      if (response.ok && result.success) {
        setStatus({ type: "success" });
        form.reset();
      } else {
        throw new Error(result.error || "Submission failed");
      }
    } catch (error: unknown) {
      setStatus({
        type: "error",
        message: error instanceof Error ? error.message : "Submission failed",
        mailto: `mailto:${contact.email}?subject=${encodeURIComponent(`Inquiry from ${data.name || "Website"}`)}&body=${encodeURIComponent(formattedBody)}`,
      });
    }
  };

  const isSending = status.type === "sending";

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-grid">
            <div>
              <div className="eyebrow">Contact</div>
              <h1>Let&apos;s talk about your process.</h1>
            </div>
            <p className="lead">
              Share your requirement and our engineering team will come back with a sized recommendation — usually
              within one business day.
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container contact-grid">
          <div className="contact-cards">
            <a href={contact.phoneHref} className="contact-card">
              <div className="tile-icon"><Phone size={22} /></div>
              <div>
                <small>Call us</small>
                <strong>{contact.phone}</strong>
                <span>Also {contact.phoneAlt}</span>
              </div>
            </a>
            <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" className="contact-card">
              <div className="tile-icon"><WhatsApp size={22} /></div>
              <div>
                <small>WhatsApp</small>
                <strong>Chat with our team</strong>
                <span>Quick questions and photos</span>
              </div>
            </a>
            <a href={`mailto:${contact.email}`} className="contact-card">
              <div className="tile-icon"><Mail size={22} /></div>
              <div>
                <small>Email</small>
                <strong>{contact.email}</strong>
                <span>Send drawings or datasheets</span>
              </div>
            </a>
            <div className="contact-card">
              <div className="tile-icon"><MapPin size={22} /></div>
              <div>
                <small>Works</small>
                <strong>
                  {contact.addressLines.map((line) => (
                    <span key={line} style={{ display: "block", color: "inherit", fontSize: "inherit" }}>{line}</span>
                  ))}
                </strong>
              </div>
            </div>
            <a href={contact.landlineHref} className="contact-card">
              <div className="tile-icon"><Clock size={22} /></div>
              <div>
                <small>24/7 breakdown line</small>
                <strong>{contact.landline}</strong>
                <span>Works open Mon–Sat · breakdown support 365 days</span>
              </div>
            </a>
          </div>

          <form className="form-card" onSubmit={handleSubmit}>
            <h2>Send an inquiry</h2>
            <p className="muted" style={{ margin: 0 }}>The more process detail you share, the faster we can size the right machine.</p>
            <div className="form-grid">
              <div className="field">
                <label htmlFor="name">Full name</label>
                <input type="text" id="name" name="name" autoComplete="name" required />
              </div>
              <div className="field">
                <label htmlFor="company">Company</label>
                <input type="text" id="company" name="company" autoComplete="organization" required />
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" autoComplete="email" required />
              </div>
              <div className="field">
                <label htmlFor="phone">Phone</label>
                <input type="tel" id="phone" name="phone" autoComplete="tel" required />
              </div>
              <div className="field">
                <label htmlFor="product">Product of interest</label>
                <select id="product" name="product">
                  {products.map((product) => (
                    <option key={product.id}>{product.name} ({product.short})</option>
                  ))}
                  <option>Not sure — need a recommendation</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="industry">Industry</label>
                <select id="industry" name="industry">
                  <option>Pharmaceutical</option>
                  <option>Chemical</option>
                  <option>Dyes &amp; pigments</option>
                  <option>Textile</option>
                  <option>Food processing</option>
                  <option>Water treatment</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="field full">
                <label htmlFor="message">Process details</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Media handled, batch size or throughput, construction preference, plant location…"
                  required
                />
              </div>
            </div>
            {/* Honeypot field to catch automated spam bots */}
            <input type="text" name="_hp" tabIndex={-1} autoComplete="off" style={{ display: "none" }} aria-hidden="true" />
            <div className="form-foot">
              <p>We reply within one business day.</p>
              <button type="submit" className="btn btn-primary" disabled={isSending}>
                {isSending ? "Sending…" : <>Send inquiry <ArrowRight size={18} /></>}
              </button>
            </div>
            {status.type === "success" && (
              <p className="form-note success" role="status">
                Thank you — your inquiry has been sent. Our engineering team will respond within one business day.
              </p>
            )}
            {status.type === "error" && (
              <p className="form-note error" role="alert">
                {status.message}. You can also <a href={status.mailto}>send it directly from your email app</a>.
              </p>
            )}
          </form>
        </div>

        <div className="container reveal" style={{ marginTop: 64 }}>
          <div className="map-frame">
            <iframe
              title="ADEN, Naroda GIDC, Ahmedabad"
              src={contact.mapEmbed}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
