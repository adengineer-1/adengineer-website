import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingContact from "../components/FloatingContact";
import ScrollReveal from "../components/ScrollReveal";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.adengineers.co.in"),
  title: {
    default: "ADEN | Industrial Centrifuges & Process Pumps Manufacturer India",
    template: "%s | ADEN - A.D.Engineers",
  },
  description: "ADEN (A.D.Engineers) manufactures high-performance solid-liquid separation equipment, manual & bag-lifting top discharge centrifuges, rubber-lined centrifuges, and industrial process pumps in Ahmedabad, India since 1990.",
  keywords: [
    "ADEN",
    "A.D.Engineers",
    "Industrial Centrifuges India",
    "Solid-Liquid Separation Equipment",
    "Manual Top Discharge Centrifuge",
    "Bag-Lifting Top Discharge Centrifuge",
    "Stainless Steel Centrifuge",
    "Rubber-Lined Centrifuge",
    "Chemical Centrifuge Machine",
    "Pharmaceutical Centrifuge India",
    "Industrial Process Pumps Ahmedabad",
    "Centrifuge Manufacturer Gujarat",
    "Top Discharge Centrifuge",
    "Three Point Suspension Centrifuge"
  ],
  authors: [{ name: "ADEN - A.D.Engineers", url: "https://www.adengineers.co.in" }],
  creator: "ADEN - A.D.Engineers",
  publisher: "ADEN - A.D.Engineers",
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
    url: "https://www.adengineers.co.in",
    title: "ADEN | Industrial Centrifuges & Process Pumps Manufacturer India",
    description: "Solid-liquid separation equipment built for continuous industrial duty. Discover manual & bag-lifting centrifuges engineered in Ahmedabad, India.",
    siteName: "ADEN - A.D.Engineers",
  },
  twitter: {
    card: "summary_large_image",
    title: "ADEN | Industrial Centrifuges & Process Pumps Manufacturer India",
    description: "Solid-liquid separation equipment built for continuous industrial duty. Engineered and manufactured in Ahmedabad, India since 1990.",
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
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <Header />
        {children}
        <Footer />
        <FloatingContact />
        <ScrollReveal />
      </body>
    </html>
  );
}
