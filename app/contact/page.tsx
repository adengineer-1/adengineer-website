"use client";

import { useState } from "react";
import { contact, photos, products } from "../../lib/site";
import PageBanner from "../../components/PageBanner";
import { ArrowRight, Mail, MapPin, Phone } from "../../components/Icons";

const delay = (s: number) => ({ ["--d" as string]: `${s}s` });

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
      <PageBanner
        title="Contact us"
        crumb="Contact"
        text="Send us your requirement by form, phone or email. We normally reply within one working day."
        image={photos.entrance.src}
        alt={photos.entrance.alt}
        position="center 60%"
      />

      <div className="container">
        <div className="info-boxes">
          <div className="info-box" data-anim="up">
            <div className="ib-ico"><MapPin size={26} /></div>
            <h3>Visit our works</h3>
            <p>A.D. Engineers<br />{contact.addressLines.map((line) => <span key={line}>{line}<br /></span>)}</p>
          </div>
          <div className="info-box" data-anim="up" style={delay(0.1)}>
            <div className="ib-ico"><Phone size={24} /></div>
            <h3>Give us a call</h3>
            <p>
              <a href={contact.phoneHref}>{contact.phone}</a><br />
              Monday to Saturday
            </p>
          </div>
          <div className="info-box" data-anim="up" style={delay(0.2)}>
            <div className="ib-ico"><Mail size={26} /></div>
            <h3>Write to us</h3>
            <p>
              <a href={`mailto:${contact.email}`}>{contact.email}</a><br />
              <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer">Message us on WhatsApp</a>
            </p>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container contact-split" data-anim="up">
          <div className="contact-side">
            <span className="supertitle light">Get in touch</span>
            <h2>Tell us about your requirement</h2>
            <p>Please include the product, batch size and media if you can. It helps us recommend the right machine faster.</p>
            <dl>
              <div><dt>Working hours</dt><dd>Monday to Saturday</dd></div>
              <div><dt>Breakdown service</dt><dd>24 hours on {contact.phone}</dd></div>
              <div><dt>Response</dt><dd>Within one working day</dd></div>
            </dl>
          </div>

          <form className="enquiry" onSubmit={handleSubmit}>
            <h2>Enquiry form</h2>
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
                  <option>Not sure, please recommend</option>
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
                <label htmlFor="message">Requirement</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Product, batch size, media, SS or rubber-lined, plant location"
                  required
                />
              </div>
            </div>
            {/* Honeypot field to catch automated spam bots */}
            <input type="text" name="_hp" tabIndex={-1} autoComplete="off" style={{ display: "none" }} aria-hidden="true" />
            <div className="form-foot">
              <button type="submit" className="btn-split" disabled={isSending} style={{ border: 0, padding: 0, cursor: "pointer", opacity: isSending ? 0.7 : 1 }}>
                <span className="ico"><ArrowRight size={20} /></span>
                <span className="txt">{isSending ? "Sending…" : "Send enquiry"}</span>
              </button>
            </div>
            {status.type === "success" && (
              <p className="form-note success" role="status">
                Thank you. Your enquiry has been sent and we will get back to you within one working day.
              </p>
            )}
            {status.type === "error" && (
              <p className="form-note error" role="alert">
                {status.message}. You can also <a href={status.mailto}>send it directly from your email app</a>.
              </p>
            )}
          </form>
        </div>

        <div className="container" style={{ marginTop: 80 }} data-anim="up">
          <div className="map">
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
