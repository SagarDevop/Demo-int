import type { Metadata } from "next";
import ReviewsPageClient from "@/components/pages/ReviewsPageClient";

export const metadata: Metadata = {
  title: "Client Reviews & Testimonials (4.9★) | 4 Lotus Interior Delhi",
  description:
    "Read authentic client reviews and testimonials for 4 Lotus Interior and Principal Architect Rashid Ali. 4.9-star rating across 81+ Google Reviews for residential and commercial projects in Delhi.",
  alternates: {
    canonical: "https://4lotusinterior.in/reviews",
  },
  openGraph: {
    title: "Client Reviews & Testimonials (4.9★) | 4 Lotus Interior Delhi",
    description:
      "Read authentic client reviews and testimonials for 4 Lotus Interior and Principal Architect Rashid Ali. 4.9-star rating across 81+ Google Reviews for residential and commercial projects in Delhi.",
    url: "https://4lotusinterior.in/reviews",
    siteName: "4 Lotus Interior",
    images: [
      {
        url: "https://4lotusinterior.in/assets/hero_living_room.jpg",
        width: 1200,
        height: 630,
        alt: "4 Lotus Interior Reviews",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function ReviewsPage() {
  return <ReviewsPageClient />;
}
