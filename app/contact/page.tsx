import type { Metadata } from "next";
import ContactPageClient from "@/components/pages/ContactPageClient";

export const metadata: Metadata = {
  title: "Contact Turnkey Design & Renovation Experts in Delhi-NCR | 4 Lotus Interior",
  description:
    "Ready to transform your space? Contact 4 Lotus Interior for expert residential and commercial interior design, decoration, and renovation services across Delhi-NCR. Get a free consultation today.",
  alternates: {
    canonical: "https://4lotusinterior.in/contact-us",
  },
  openGraph: {
    title: "Contact Turnkey Design & Renovation Experts in Delhi-NCR | 4 Lotus Interior",
    description:
      "Ready to transform your space? Contact 4 Lotus Interior for expert residential and commercial interior design, decoration, and renovation services across Delhi-NCR.",
    url: "https://4lotusinterior.in/contact-us",
    siteName: "4 Lotus Interior",
    images: [
      {
        url: "https://4lotusinterior.in/assets/hero_living_room.jpg",
        width: 1200,
        height: 630,
        alt: "Contact 4 Lotus Interior",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
