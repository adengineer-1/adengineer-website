import { contact } from "../lib/site";
import { Phone, WhatsApp } from "./Icons";

export default function FloatingContact() {
  return (
    <div className="floating-contact">
      <a href={contact.phoneHref} className="fc-call" aria-label="Call us" title="Call us">
        <Phone size={22} />
      </a>
      <a
        href={contact.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="fc-wa"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        <WhatsApp size={26} />
      </a>
    </div>
  );
}
