import type { Metadata } from "next";
import { Raleway, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingContact from "../components/FloatingContact";
import Animations from "../components/Animations";

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
  metadataBase: new URL("https://www.adengineers.co.in"),
  title: {
    default: "ADEN | Industrial Centrifuge Manufacturer India",
    template: "%s | ADEN - A.D.Engineers",
  },
  description: "ADEN (A.D.Engineers) manufactures high-performance solid-liquid separation equipment, manual & bag-lifting top discharge centrifuges and rubber-lined centrifuges in Ahmedabad, India since 1990.",
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
    title: "ADEN | Industrial Centrifuge Manufacturer India",
    description: "Solid-liquid separation equipment built for continuous industrial duty. Discover manual & bag-lifting centrifuges engineered in Ahmedabad, India.",
    siteName: "ADEN - A.D.Engineers",
  },
  twitter: {
    card: "summary_large_image",
    title: "ADEN | Industrial Centrifuge Manufacturer India",
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
      className={`${raleway.variable} ${sourceSans.variable}`}
    >
      <body>
        <Header />
        {children}
        <Footer />
        <FloatingContact />
        <Animations />
      </body>
    </html>
  );
}
