"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "./Icons";

export type HeroSlide = {
  image: string;
  alt: string;
  position?: string;
  supertitle: string;
  title: string;
  text: string;
  cta: { href: string; label: string };
};

const DURATION = 7000;

export default function HeroSlider({ slides }: { slides: HeroSlide[] }) {
  const [active, setActive] = useState(0);
  // Bumped on every manual change so the autoplay timer restarts.
  const [cycle, setCycle] = useState(0);

  const go = useCallback(
    (dir: number) => {
      setActive((i) => (i + dir + slides.length) % slides.length);
      setCycle((c) => c + 1);
    },
    [slides.length],
  );

  useEffect(() => {
    const id = window.setTimeout(() => setActive((i) => (i + 1) % slides.length), DURATION);
    return () => window.clearTimeout(id);
  }, [active, cycle, slides.length]);

  return (
    <section className="hero" aria-roledescription="carousel">
      {slides.map((slide, i) => (
        <div key={slide.image} className={`hero-slide ${i === active ? "active" : ""}`} aria-hidden={i !== active}>
          <div className="ph">
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              sizes="100vw"
              preload={i === 0}
              loading={i === 0 ? undefined : "eager"}
              style={{ objectPosition: slide.position }}
            />
          </div>
          <div className="container hero-content">
            <span className="supertitle light">{slide.supertitle}</span>
            {i === 0 ? <h1>{slide.title}</h1> : <h2 style={{ fontSize: "clamp(42px, 6vw, 78px)" }}>{slide.title}</h2>}
            <p>{slide.text}</p>
            <div>
              <Link href={slide.cta.href} className="btn-split" tabIndex={i === active ? 0 : -1}>
                <span className="ico"><ArrowRight size={20} /></span>
                <span className="txt">{slide.cta.label}</span>
              </Link>
            </div>
          </div>
        </div>
      ))}

      <div className="hero-controls">
        <div className="container">
          <div className="hero-dots">
            {slides.map((slide, i) => (
              <button
                key={`${slide.image}-${i === active ? cycle : "idle"}`}
                type="button"
                className={i === active ? "active" : ""}
                style={{ ["--dur" as string]: `${DURATION}ms` }}
                onClick={() => { setActive(i); setCycle((c) => c + 1); }}
                aria-label={`Show slide ${i + 1}`}
              >
                <span />
              </button>
            ))}
          </div>
          <button type="button" className="hero-arrow" onClick={() => go(-1)} aria-label="Previous slide">
            <ChevronLeft size={22} />
          </button>
          <button type="button" className="hero-arrow" onClick={() => go(1)} aria-label="Next slide">
            <ChevronRight size={22} />
          </button>
        </div>
      </div>
    </section>
  );
}
