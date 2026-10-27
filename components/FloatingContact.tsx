"use client";

import { useEffect, useState } from "react";
import { contact } from "../lib/site";
import { ArrowUp, WhatsApp } from "./Icons";

export default function FloatingContact() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <a
        href={contact.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="wa-float"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        <WhatsApp size={26} />
      </a>
      <button
        type="button"
        className={`to-top ${showTop ? "show" : ""}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
      >
        <ArrowUp size={22} />
      </button>
    </>
  );
}
