import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.4lotus.co"),
  title: "4 Lotus Interior | Luxury Architecture & Interior Design Studio Delhi",
  description: "Award-winning interior design, architecture & turnkey home transformations in Delhi-NCR. Rated 4.9★ with 81+ Google Reviews. South Metro Station, Dwarka Road, Janakpuri.",
  keywords: [
    "Interior Designer Delhi",
    "4 Lotus Interior",
    "Luxury Interior Studio Delhi",
    "Dwarka Interior Designer",
    "Janakpuri Interior Designer",
    "Home Renovation Delhi",
    "Villa Interior Design Delhi NCR",
    "Modular Kitchen Delhi"
  ],
  authors: [{ name: "4 Lotus Interior" }],
  openGraph: {
    title: "4 Lotus Interior | Minimalist Elegant Interior Design",
    description: "Transforming spaces with expert architecture, interior design, and renovation services in New Delhi.",
    url: "https://www.4lotus.co",
    siteName: "4 Lotus Interior",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/assets/hero_living_room.jpg",
        width: 1200,
        height: 630,
        alt: "4 Lotus Interior Luxury Design Studio Delhi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "4 Lotus Interior | Luxury Architecture & Interior Design Studio Delhi",
    description: "Award-winning interior design and architecture in New Delhi. Rated 4.9★ with 81+ Google Reviews.",
    images: ["/assets/hero_living_room.jpg"],
  },
  alternates: {
    canonical: "https://www.4lotus.co",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "name": "4 Lotus Interior",
  "image": "https://www.4lotus.co/assets/hero_living_room.jpg",
  "@id": "https://www.4lotus.co",
  "url": "https://www.4lotus.co",
  "telephone": "+919810698082",
  "priceRange": "₹₹₹₹",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "South Metro Station, Plot No.18, 1st Floor, Dwarka Road, Near Dabri Police Station, Janakpuri",
    "addressLocality": "New Delhi",
    "addressRegion": "Delhi",
    "postalCode": "110059",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 28.6139,
    "longitude": 77.0878
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "10:00",
    "closes": "18:00"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "81",
    "bestRating": "5"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${cormorant.variable} scroll-smooth`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#F8F7F5] text-[#141414] antialiased selection:bg-[#141414] selection:text-white font-sans min-h-screen" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
