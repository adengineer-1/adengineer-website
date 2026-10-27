import type { Metadata } from "next";
import { exportMarketsText, pageMetadata } from "../../lib/seo";
import { photos } from "../../lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Contact Us | Centrifuge Enquiry & Quotation",
  description: `Contact ADEN (AD Engineers) in Ahmedabad, India for centrifuge sizing and quotations. We supply customers in India, ${exportMarketsText}, with 24/7 breakdown support.`,
  path: "/contact",
  image: photos.entrance,
  keywords: ["Contact ADEN", "Centrifuge Quotation", "Centrifuge Price", "Bag-Lifting Centrifuge Cost", "ADEN Naroda Ahmedabad Address", "Centrifuge Manufacturer Contact"],
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
