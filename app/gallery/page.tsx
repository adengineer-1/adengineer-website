import type { Metadata } from "next";
import { galleryPhotos, galleryVideos, photos } from "../../lib/site";
import PageBanner from "../../components/PageBanner";
import GalleryGrid from "../../components/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery | Centrifuge Manufacturing, Works Floor & Dispatch Photos",
  description: "Photos of ADEN industrial centrifuges in production, on customer plant floors and ready for dispatch from our Naroda, Ahmedabad works.",
  keywords: [
    "Industrial Centrifuge Gallery",
    "Centrifuge Manufacturing Plant Photos",
    "Stainless Steel Centrifuge Pictures",
    "Rubber-Lined Centrifuge Photos",
    "ADEN Factory Ahmedabad",
  ],
  openGraph: {
    title: "Gallery | ADEN Works, Ahmedabad",
    description: "Centrifuges in production, on customer plant floors, and ready for dispatch from our Naroda, Ahmedabad works.",
    url: "https://www.adengineers.co.in/gallery",
  },
};

const delay = (s: number) => ({ ["--d" as string]: `${s}s` });

export default function Gallery() {
  return (
    <main>
      <PageBanner
        title="Gallery"
        crumb="Gallery"
        text="Machines at the works and at customer sites, our team, and shipments leaving Naroda."
        image={photos.dispatchLoaded.src}
        alt={photos.dispatchLoaded.alt}
        position="center 70%"
      />

      <section className="section">
        <div className="container">
          <GalleryGrid photos={galleryPhotos} />
        </div>
      </section>

      <section className="section light">
        <div className="container">
          <div className="sec-title">
            <span className="outline-word" aria-hidden="true">VIDEO</span>
            <span className="supertitle" data-anim="up">On the works floor</span>
            <h2 data-anim="up" style={delay(0.1)}>See it in motion</h2>
          </div>
          <div className="video-grid">
            {galleryVideos.map((video, i) => (
              <video
                key={video.src}
                src={video.src}
                controls
                playsInline
                preload="metadata"
                muted
                aria-label={video.title}
                data-anim="up"
                style={delay(0.15 * i)}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
