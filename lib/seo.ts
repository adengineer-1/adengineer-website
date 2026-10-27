import type { Metadata } from "next";
import { contact, photos, products, type Photo } from "./site";

export const siteUrl = "https://www.adengineers.co.in";

// Export markets we want to rank for, in the order they're mentioned in copy.
export const exportMarkets = ["Bangladesh", "African countries", "Gulf countries"];
export const exportMarketsText = "Bangladesh, African countries and the Gulf";

// Brand and market keywords shared by every page; pages add their own on top.
export const baseKeywords = [
  "Centrifuge",
  "Centrifuges",
  "AD",
  "Aden",
  "ADEN",
  "AD Engineers",
  "A.D. Engineers",
  "A.D.Engineers",
  "Aden Centrifuge",
  "AD Centrifuge",
  "Centrifuge Manufacturer",
  "Industrial Centrifuge Manufacturer India",
  "Centrifuge Manufacturer Ahmedabad",
  "Centrifuge Manufacturer Gujarat",
  "Centrifuge Exporter India",
  "Centrifuge Bangladesh",
  "Centrifuge Supplier Bangladesh",
  "Centrifuge Exporter to Bangladesh",
  "Centrifuge Africa",
  "Centrifuge Supplier African Countries",
  "Centrifuge Exporter to Africa",
  "Centrifuge Gulf Countries",
  "Centrifuge Supplier Gulf",
  "Centrifuge Supplier GCC",
  "Centrifuge Supplier UAE",
  "Centrifuge Supplier Oman",
  "Middle East Centrifuge Supplier",
];

export const keywords = (...pageKeywords: string[]) => [...new Set([...pageKeywords, ...baseKeywords])];

const abs = (path: string) => `${siteUrl}${path}`;

type PageSeo = {
  title: string;
  description: string;
  path: string;
  keywords: string[];
  image: Photo;
};

// Per-page metadata. openGraph/twitter are replaced (not merged) by Next when a
// page sets them, so each page carries its own image and canonical URL.
export const pageMetadata = ({ title, description, path, keywords: pageKeywords, image }: PageSeo): Metadata => ({
  title,
  description,
  keywords: keywords(...pageKeywords),
  alternates: { canonical: path },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "ADEN - A.D. Engineers",
    url: path,
    title,
    description,
    images: [{ url: image.src, width: image.width, height: image.height, alt: image.alt }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [image.src],
  },
});

// Organization + website structured data (schema.org), rendered once in the root layout.
export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": abs("/#organization"),
      name: "ADEN - A.D. Engineers",
      alternateName: ["ADEN", "Aden", "AD", "AD Engineers", "A.D. Engineers", "A.D.Engineers"],
      url: siteUrl,
      logo: abs("/brand/logo.png"),
      image: abs(photos.plant.src),
      description:
        "Manufacturer of manual and bag-lifting top discharge centrifuges in stainless steel and rubber-lined construction, exporting to Bangladesh, African countries and the Gulf.",
      foundingDate: "1990",
      founder: { "@type": "Person", name: "Bharat M. Patel" },
      email: contact.email,
      telephone: contact.phone.replace(/\s/g, ""),
      address: {
        "@type": "PostalAddress",
        streetAddress: "Plot No. 329, Phase I, Behind Lion's School, G.I.D.C. Naroda",
        addressLocality: "Ahmedabad",
        addressRegion: "Gujarat",
        postalCode: "382330",
        addressCountry: "IN",
      },
      areaServed: [
        { "@type": "Country", name: "India" },
        { "@type": "Country", name: "Bangladesh" },
        { "@type": "Continent", name: "Africa" },
        { "@type": "Place", name: "Gulf Cooperation Council (GCC) countries" },
        { "@type": "Country", name: "United Arab Emirates" },
        { "@type": "Country", name: "Oman" },
      ],
      knowsAbout: ["Centrifuge", "Industrial centrifuges", "Solid-liquid separation", "Top discharge centrifuge"],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: contact.phone.replace(/\s/g, ""),
        email: contact.email,
        contactType: "sales",
        areaServed: ["IN", "BD", "AE", "OM", "Africa", "GCC"],
        availableLanguage: ["English", "Hindi", "Gujarati"],
      },
      makesOffer: products.map((product) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: `${product.name} (${product.short})`,
          description: product.description,
          image: abs(product.images[0].src),
          brand: { "@type": "Brand", name: "ADEN" },
          url: abs(`/products#${product.id}`),
        },
      })),
    },
    {
      "@type": "WebSite",
      "@id": abs("/#website"),
      url: siteUrl,
      name: "ADEN - A.D. Engineers",
      publisher: { "@id": abs("/#organization") },
      inLanguage: "en-IN",
    },
  ],
};

export const jsonLdScript = (data: object) => JSON.stringify(data).replace(/</g, "\\u003c");
