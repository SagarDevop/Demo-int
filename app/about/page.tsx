import type { Metadata } from "next";
import AboutPageClient from "@/components/pages/AboutPageClient";

export const metadata: Metadata = {
  title: "About 4 Lotus Interior | 15+ Years Architecture Studio Delhi",
  description:
    "Learn about 4 Lotus Interior, our philosophy of Function First and Timeless Aesthetic, and Principal Architect Rashid Ali. Janakpuri Studio and Kirti Nagar manufacturing.",
  alternates: {
    canonical: "https://4lotusinterior.in/about",
  },
  openGraph: {
    title: "About 4 Lotus Interior | 15+ Years Architecture Studio Delhi",
    description:
      "Learn about 4 Lotus Interior, our philosophy of Function First and Timeless Aesthetic, and Principal Architect Rashid Ali. Janakpuri Studio and Kirti Nagar manufacturing.",
    url: "https://4lotusinterior.in/about",
    siteName: "4 Lotus Interior",
    images: [
      {
        url: "https://4lotusinterior.in/assets/hero_living_room.jpg",
        width: 1200,
        height: 630,
        alt: "About 4 Lotus Interior",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function AboutPage() {
  return <AboutPageClient />;
}
