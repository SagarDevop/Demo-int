import type { Metadata } from "next";
import ServicesPageClient from "@/components/pages/ServicesPageClient";

export const metadata: Metadata = {
  title: "Interior Design & Turnkey Architecture Services Delhi | 4 Lotus",
  description:
    "Explore 14 specialized turnkey interior services: civil masonry, modular kitchens, HVAC, MEP, false ceilings, luxury residential remodeling, and corporate fitouts in Delhi-NCR.",
  alternates: {
    canonical: "https://4lotusinterior.in/services",
  },
  openGraph: {
    title: "Interior Design & Turnkey Architecture Services Delhi | 4 Lotus",
    description:
      "Explore 14 specialized turnkey interior services: civil masonry, modular kitchens, HVAC, MEP, false ceilings, luxury residential remodeling, and corporate fitouts in Delhi-NCR.",
    url: "https://4lotusinterior.in/services",
    siteName: "4 Lotus Interior",
    images: [
      {
        url: "https://4lotusinterior.in/assets/hero_living_room.jpg",
        width: 1200,
        height: 630,
        alt: "4 Lotus Interior Services",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
