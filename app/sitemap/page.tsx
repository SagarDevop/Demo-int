import type { Metadata } from "next";
import HtmlSitemapPageClient from "@/components/pages/HtmlSitemapPageClient";

export const metadata: Metadata = {
  title: "HTML Sitemap | 4 Lotus Interior Architecture & Design",
  description:
    "Complete page inventory, service categories, residential, commercial and regional directory for 4 Lotus Interior in Delhi-NCR.",
  alternates: {
    canonical: "https://4lotusinterior.in/sitemap",
  },
  openGraph: {
    title: "HTML Sitemap | 4 Lotus Interior Architecture & Design",
    description:
      "Complete page inventory, service categories, residential, commercial and regional directory for 4 Lotus Interior in Delhi-NCR.",
    url: "https://4lotusinterior.in/sitemap",
    siteName: "4 Lotus Interior",
    images: [
      {
        url: "https://4lotusinterior.in/assets/hero_living_room.jpg",
        width: 1200,
        height: 630,
        alt: "4 Lotus Interior Sitemap",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function SitemapPage() {
  return <HtmlSitemapPageClient />;
}
