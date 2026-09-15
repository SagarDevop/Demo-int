import type { Metadata } from "next";
import LocationsPageClient from "@/components/pages/LocationsPageClient";

export const metadata: Metadata = {
  title: "Interior Design Service Locations Delhi-NCR (32 Hubs) | 4 Lotus",
  description:
    "4 Lotus Interior provides turnkey architecture and interior design services across 32 major hubs in Delhi-NCR, including Janakpuri, Dwarka, South Delhi, Gurgaon, and Noida.",
  alternates: {
    canonical: "https://4lotusinterior.in/locations",
  },
  openGraph: {
    title: "Interior Design Service Locations Delhi-NCR (32 Hubs) | 4 Lotus",
    description:
      "4 Lotus Interior provides turnkey architecture and interior design services across 32 major hubs in Delhi-NCR, including Janakpuri, Dwarka, South Delhi, Gurgaon, and Noida.",
    url: "https://4lotusinterior.in/locations",
    siteName: "4 Lotus Interior",
    images: [
      {
        url: "https://4lotusinterior.in/assets/hero_living_room.jpg",
        width: 1200,
        height: 630,
        alt: "4 Lotus Interior Locations",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function LocationsPage() {
  return <LocationsPageClient />;
}
