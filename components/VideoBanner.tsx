"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Close, Play } from "./Icons";

type Props = {
  image: string;
  alt: string;
  video: string;
  supertitle: string;
  title: string;
};

export default function VideoBanner({ image, alt, video, supertitle, title }: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <section className="video-banner">
      <div className="ph">
        <Image src={image} alt={alt} fill sizes="100vw" />
      </div>
      <div className="inner" data-anim="up">
        <span className="supertitle light">{supertitle}</span>
        <h2>{title}</h2>
        <button type="button" className="play-btn" onClick={() => setOpen(true)}>
          <span className="ico"><Play size={22} /></span>
          <span className="txt">Watch the video</span>
        </button>
      </div>

      {open && (
        <div className="video-modal" role="dialog" aria-modal="true" aria-label={title} onClick={() => setOpen(false)}>
          <video src={video} controls autoPlay playsInline onClick={(e) => e.stopPropagation()} />
          <button type="button" className="lb-btn lb-close" onClick={() => setOpen(false)} aria-label="Close video">
            <Close size={22} />
          </button>
        </div>
      )}
    </section>
  );
}
