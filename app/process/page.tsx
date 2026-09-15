import type { Metadata } from "next";
import ProcessPageClient from "@/components/pages/ProcessPageClient";

export const metadata: Metadata = {
  title: "Our Turnkey Architectural Process | 4 Lotus Interior Delhi",
  description:
    "Discover our systematic 4-step interior architecture methodology: Spatial Discovery, 3D Schematics, Kirti Nagar Millwork Production, and Turnkey On-Site Delivery.",
  alternates: {
    canonical: "https://4lotusinterior.in/process",
  },
  openGraph: {
    title: "Our Turnkey Architectural Process | 4 Lotus Interior Delhi",
    description:
      "Discover our systematic 4-step interior architecture methodology: Spatial Discovery, 3D Schematics, Kirti Nagar Millwork Production, and Turnkey On-Site Delivery.",
    url: "https://4lotusinterior.in/process",
    siteName: "4 Lotus Interior",
    images: [
      {
        url: "https://4lotusinterior.in/assets/hero_living_room.jpg",
        width: 1200,
        height: 630,
        alt: "4 Lotus Interior Process",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function ProcessPage() {
  return <ProcessPageClient />;
}
