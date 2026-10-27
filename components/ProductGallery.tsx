"use client";

import Image from "next/image";
import { useState } from "react";

export default function ProductGallery({ images }: { images: { src: string; alt: string }[] }) {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className="media pg-main">
        <Image
          key={images[active].src}
          src={images[active].src}
          alt={images[active].alt}
          fill
          sizes="(max-width: 960px) 100vw, 50vw"
        />
      </div>
      {images.length > 1 && (
        <div className="pg-thumbs">
          {images.map((image, i) => (
            <button
              key={image.src}
              type="button"
              className={i === active ? "active" : ""}
              onClick={() => setActive(i)}
              aria-label={`Show image ${i + 1}`}
              aria-pressed={i === active}
            >
              <Image src={image.src} alt="" fill sizes="84px" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
