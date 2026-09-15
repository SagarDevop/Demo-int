import type { Metadata } from "next";
import HomePageClient from "@/components/pages/HomePageClient";

export const metadata: Metadata = {
  title: "4 Lotus Interior | Luxury Architecture & Interior Design Studio Delhi",
  description:
    "4 Lotus Interior is a leading architecture and interior design firm in Delhi-NCR. We offer turnkey solutions for residential, retail, commercial, and corporate spaces. Transform your space today.",
  alternates: {
    canonical: "https://4lotusinterior.in/",
  },
  openGraph: {
    title: "4 Lotus Interior | Luxury Architecture & Interior Design Studio Delhi",
    description:
      "4 Lotus Interior is a leading architecture and interior design firm in Delhi-NCR. We offer turnkey solutions for residential, retail, commercial, and corporate spaces.",
    url: "https://4lotusinterior.in/",
    siteName: "4 Lotus Interior",
    images: [
      {
        url: "https://4lotusinterior.in/assets/images/index-meta.webp",
        width: 1200,
        height: 630,
        alt: "4 Lotus Interior Design Studio",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <HomePageClient />;
}
