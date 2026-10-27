"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Drives the site's scroll motion:
//  [data-anim]     fades/slides in once it enters the viewport (stagger via style --d)
//  [data-count]    counts up from 0 to its value when visible
//  [data-parallax] drifts horizontally with scroll (outline words)
//  .video-banner   background image drifts vertically
export default function Animations() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    root.classList.add("anim-ready");

    const countUp = (el: HTMLElement) => {
      const target = Number(el.dataset.count);
      const suffix = el.dataset.suffix ?? "";
      if (reduce) {
        el.textContent = target.toLocaleString("en-IN") + suffix;
        return;
      }
      const start = performance.now();
      const duration = 1800;
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - t, 3);
        el.textContent = Math.round(target * eased).toLocaleString("en-IN") + suffix;
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          el.classList.add("is-in");
          el.querySelectorAll<HTMLElement>("[data-count]").forEach(countUp);
          if (el.dataset.count) countUp(el);
          io.unobserve(el);
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" },
    );

    // Wait a frame so the new route's DOM is in place.
    const raf = requestAnimationFrame(() => {
      document.querySelectorAll("[data-anim], .counters").forEach((el) => io.observe(el));
    });

    let ticking = false;
    const onScroll = () => {
      if (ticking || reduce) return;
      ticking = true;
      requestAnimationFrame(() => {
        const vh = window.innerHeight;
        document.querySelectorAll<HTMLElement>("[data-parallax]").forEach((el) => {
          const rect = el.getBoundingClientRect();
          const progress = (rect.top + rect.height / 2 - vh / 2) / vh;
          el.style.setProperty("--px", `${progress * Number(el.dataset.parallax || 120)}px`);
        });
        document.querySelectorAll<HTMLElement>(".video-banner").forEach((el) => {
          const rect = el.getBoundingClientRect();
          const progress = (rect.top + rect.height / 2 - vh / 2) / vh;
          el.style.setProperty("--py", `${progress * -60}px`);
        });
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [pathname]);

  return null;
}
