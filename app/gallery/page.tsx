import type { Metadata } from "next";
import Link from "next/link";
import { galleryPhotos, galleryVideos } from "../../lib/site";
import GalleryGrid from "../../components/GalleryGrid";
import { ArrowRight } from "../../components/Icons";

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

export default function Gallery() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-grid">
            <div>
              <div className="eyebrow">Gallery</div>
              <h1>From the works floor to your plant.</h1>
            </div>
            <p className="lead">
              Machines in build and on installation, the team behind them, and shipments leaving our Naroda works.
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <GalleryGrid photos={galleryPhotos} />
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-head center reveal">
            <div className="eyebrow">Video</div>
            <h2>See it in motion.</h2>
          </div>
          <div className="video-grid reveal">
            {galleryVideos.map((video) => (
              <div key={video.src} className="video-card">
                <video src={video.src} controls playsInline preload="metadata" muted aria-label={video.title} />
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 56 }}>
            <Link href="/contact" className="btn btn-dark">
              Arrange a works visit <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
