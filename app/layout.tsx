import type { Metadata } from "next";
import { Raleway, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingContact from "../components/FloatingContact";
import Animations from "../components/Animations";
import { exportMarketsText, jsonLdScript, keywords, organizationJsonLd, siteUrl } from "../lib/seo";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-source",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ADEN | Centrifuge Manufacturer India | Exporter to Bangladesh, Africa & Gulf",
    template: "%s | ADEN",
  },
  description: `ADEN (A.D. Engineers) manufactures manual and bag-lifting top discharge centrifuges in stainless steel and rubber-lined construction in Ahmedabad, India since 1990, supplying ${exportMarketsText}.`,
  keywords: keywords(
    "Industrial Centrifuges India",
    "Solid-Liquid Separation Equipment",
    "Manual Top Discharge Centrifuge",
    "Bag-Lifting Top Discharge Centrifuge",
    "Stainless Steel Centrifuge",
    "Rubber-Lined Centrifuge",
    "Chemical Centrifuge Machine",
    "Pharmaceutical Centrifuge India",
    "Top Discharge Centrifuge",
    "Three Point Suspension Centrifuge",
  ),
  applicationName: "ADEN - A.D. Engineers",
  authors: [{ name: "ADEN - A.D. Engineers", url: siteUrl }],
  creator: "ADEN - A.D. Engineers",
  publisher: "ADEN - A.D. Engineers",
  category: "Industrial Equipment",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    title: "ADEN | Centrifuge Manufacturer India",
    description: `Top discharge centrifuges engineered in Ahmedabad, India since 1990. Supplying ${exportMarketsText}.`,
    siteName: "ADEN - A.D. Engineers",
    images: [{ url: "/images/machines/plant-installation.jpg", width: 1280, height: 960, alt: "ADEN centrifuges installed at a chemical plant" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ADEN | Centrifuge Manufacturer India",
    description: `Top discharge centrifuges engineered in Ahmedabad, India since 1990. Supplying ${exportMarketsText}.`,
    images: ["/images/machines/plant-installation.jpg"],
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/favicon.ico",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${raleway.variable} ${sourceSans.variable}`}
    >
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdScript(organizationJsonLd) }} />
        <Header />
        {children}
        <Footer />
        <FloatingContact />
        <Animations />
      </body>
    </html>
  );
}
