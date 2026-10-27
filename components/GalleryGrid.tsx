"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";
import type { Photo } from "../lib/site";
import { ChevronLeft, ChevronRight, Close } from "./Icons";

const categories = ["All", "Machines", "Works", "Dispatch", "People"] as const;

export default function GalleryGrid({ photos }: { photos: Photo[] }) {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");
  const [open, setOpen] = useState<number | null>(null);

  const visible = useMemo(
    () => (filter === "All" ? photos : photos.filter((photo) => photo.category === filter)),
    [filter, photos],
  );

  const step = useCallback(
    (dir: number) => setOpen((i) => (i === null ? i : (i + dir + visible.length) % visible.length)),
    [visible.length],
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, step]);

  const current = open === null ? null : visible[open];

  return (
    <>
      <div className="tabs" role="tablist" aria-label="Filter photos">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            role="tab"
            aria-selected={filter === cat}
            className={filter === cat ? "active" : ""}
            onClick={() => setFilter(cat)}
          >
            {cat}
            <small>{cat === "All" ? photos.length : photos.filter((p) => p.category === cat).length}</small>
          </button>
        ))}
      </div>

      <div className="masonry">
        {visible.map((photo, i) => (
          <button key={`${filter}-${photo.src}`} type="button" className="masonry-item" style={{ animationDelay: `${Math.min(i, 8) * 0.06}s` }} onClick={() => setOpen(i)} aria-label={`Open: ${photo.alt}`}>
            <Image
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              sizes="(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 400px"
            />
            <span className="mi-cap">{photo.alt}</span>
          </button>
        ))}
      </div>

      {current && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={current.alt} onClick={() => setOpen(null)}>
          <img src={current.src} alt={current.alt} onClick={(e) => e.stopPropagation()} />
          <p className="lb-caption">
            {current.alt} ({open! + 1} of {visible.length})
          </p>
          <button type="button" className="lb-btn lb-close" onClick={() => setOpen(null)} aria-label="Close">
            <Close size={22} />
          </button>
          <button type="button" className="lb-btn lb-prev" onClick={(e) => { e.stopPropagation(); step(-1); }} aria-label="Previous photo">
            <ChevronLeft size={22} />
          </button>
          <button type="button" className="lb-btn lb-next" onClick={(e) => { e.stopPropagation(); step(1); }} aria-label="Next photo">
            <ChevronRight size={22} />
          </button>
        </div>
      )}
    </>
  );
}
