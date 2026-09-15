import type { Metadata } from "next";
import PortfolioPageClient from "@/components/pages/PortfolioPageClient";

export const metadata: Metadata = {
  title: "Luxury Interior Design Portfolio | 4 Lotus Projects Delhi-NCR",
  description:
    "Browse completed luxury residences, villas, duplexes, penthouses, and corporate interiors designed by 4 Lotus Interior across Delhi, Janakpuri, Dwarka, and South Delhi.",
  alternates: {
    canonical: "https://4lotusinterior.in/portfolio",
  },
  openGraph: {
    title: "Luxury Interior Design Portfolio | 4 Lotus Projects Delhi-NCR",
    description:
      "Browse completed luxury residences, villas, duplexes, penthouses, and corporate interiors designed by 4 Lotus Interior across Delhi, Janakpuri, Dwarka, and South Delhi.",
    url: "https://4lotusinterior.in/portfolio",
    siteName: "4 Lotus Interior",
    images: [
      {
        url: "https://4lotusinterior.in/assets/curved_sofa_project.jpg",
        width: 1200,
        height: 630,
        alt: "4 Lotus Interior Portfolio",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function PortfolioPage() {
  return <PortfolioPageClient />;
}
