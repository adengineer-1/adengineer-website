import type { MetadataRoute } from "next";
import { galleryPhotos, galleryVideos, photos, products } from "../lib/site";
import { exportMarketsText, siteUrl } from "../lib/seo";

// Bump this when page content changes so search engines know to recrawl.
const lastModified = "2026-10-27";

const abs = (path: string) => `${siteUrl}${path}`;
const productImages = products.flatMap((product) => product.images.map((image) => image.src));
const unique = (paths: string[]) => [...new Set(paths)].map(abs);

const videos = galleryVideos.map((video) => ({
  title: `ADEN centrifuges: ${video.title}`,
  description: `Footage from the ADEN (AD Engineers) centrifuge works in Naroda, Ahmedabad, India, supplying ${exportMarketsText}.`,
  thumbnail_loc: abs(photos.ssFront.src),
  content_loc: abs(video.src),
  family_friendly: "yes" as const,
}));

// Privacy and Terms are noindex, so they're deliberately left out.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
      images: unique([
        photos.plant.src,
        photos.dispatchLoaded.src,
        photos.lathe.src,
        ...productImages,
        photos.teamGroup.src,
        photos.teamWorkshop.src,
        photos.ssFront.src,
        photos.trailerSide.src,
        photos.dispatchSide.src,
      ]),
      videos: videos.slice(0, 1),
    },
    {
      url: abs("/products"),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
      images: unique([photos.plant.src, ...productImages]),
    },
    {
      url: abs("/company"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
      images: unique([
        photos.teamWorkshop.src,
        photos.director.src,
        photos.lathe.src,
        photos.worksOverview.src,
        photos.entrance.src,
      ]),
    },
    {
      url: abs("/gallery"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
      images: unique(galleryPhotos.map((photo) => photo.src)),
      videos,
    },
    {
      url: abs("/contact"),
      lastModified,
      changeFrequency: "yearly",
      priority: 0.8,
      images: unique([photos.entrance.src]),
    },
  ];
}
