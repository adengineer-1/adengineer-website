"use client";

import Image from "next/image";
import { useState } from "react";

export default function ProductGallery({ images }: { images: { src: string; alt: string; position?: string }[] }) {
  const [active, setActive] = useState(0);

  return (
    <div className="pg-wrap">
      <div className="ph pg-main">
        <Image key={images[active].src} src={images[active].src} alt={images[active].alt} style={{ objectPosition: images[active].position }} fill sizes="(max-width: 900px) 100vw, 570px" />
      </div>
      {images.length > 1 && (
        <div className="pg-thumbs">
          {images.map((image, i) => (
            <button
              key={image.src}
              type="button"
              className={i === active ? "active" : ""}
              onClick={() => setActive(i)}
              aria-label={`Show photo ${i + 1}`}
              aria-pressed={i === active}
            >
              <Image src={image.src} alt="" fill sizes="76px" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
