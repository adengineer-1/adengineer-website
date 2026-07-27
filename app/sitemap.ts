import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.adengineers.co.in";

  const routes = [
    "",
    "/products",
    "/company",
    "/services",
    "/contact",
    "/gallery",
    "/blog",
    "/clients",
    "/certifications",
    "/careers",
    "/faq",
    "/privacy",
    "/terms"
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" || route === "/products" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : route === "/products" || route === "/contact" ? 0.9 : 0.8,
  }));
}
