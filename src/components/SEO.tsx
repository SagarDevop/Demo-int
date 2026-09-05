import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: "website" | "article";
  schema?: object | object[];
}

export default function SEO({
  title,
  description,
  keywords = "interior designer in delhi, best interior designer janakpuri, luxury architecture delhi ncr, turnkey interior designer dwarka, top architects west delhi, Rashid Ali interior architect, modular kitchen delhi, luxury home renovation delhi",
  canonical,
  ogImage = "https://4lotusinterior.in/assets/hero_living_room.jpg",
  ogType = "website",
  schema,
}: SEOProps) {
  const location = useLocation();
  const domain = "https://4lotusinterior.in";
  const currentUrl = canonical || `${domain}${location.pathname}`;
  const fullTitle = title.includes("4 Lotus Interior")
    ? title
    : `${title} | 4 Lotus Interior Delhi`;

  useEffect(() => {
    // 1. Update Title
    document.title = fullTitle;

    // 2. Helper to set or create meta tag
    const setMetaTag = (attrName: string, attrValue: string, content: string) => {
      let element = document.querySelector(`meta[${attrName}="${attrValue}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attrName, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // Helper to set or create link tag
    const setLinkTag = (rel: string, href: string) => {
      let element = document.querySelector(`link[rel="${rel}"]`);
      if (!element) {
        element = document.createElement("link");
        element.setAttribute("rel", rel);
        document.head.appendChild(element);
      }
      element.setAttribute("href", href);
    };

    // Standard Meta Tags
    setMetaTag("name", "description", description);
    setMetaTag("name", "keywords", keywords);
    setMetaTag("name", "author", "Principal Architect Rashid Ali - 4 Lotus Interior");
    setMetaTag("name", "robots", "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");
    setMetaTag("name", "geo.region", "IN-DL");
    setMetaTag("name", "geo.placename", "Janakpuri, New Delhi");
    setMetaTag("name", "geo.position", "28.6181;77.0898");
    setMetaTag("name", "ICBM", "28.6181, 77.0898");

    // Canonical
    setLinkTag("canonical", currentUrl);

    // OpenGraph
    setMetaTag("property", "og:title", fullTitle);
    setMetaTag("property", "og:description", description);
    setMetaTag("property", "og:url", currentUrl);
    setMetaTag("property", "og:type", ogType);
    setMetaTag("property", "og:site_name", "4 Lotus Interior");
    setMetaTag("property", "og:locale", "en_IN");
    setMetaTag("property", "og:image", ogImage);

    // Twitter Card
    setMetaTag("name", "twitter:card", "summary_large_image");
    setMetaTag("name", "twitter:title", fullTitle);
    setMetaTag("name", "twitter:description", description);
    setMetaTag("name", "twitter:image", ogImage);

    // Dynamic Schema Injection
    let scriptElem = document.getElementById("seo-schema-script") as HTMLScriptElement | null;
    if (!scriptElem) {
      scriptElem = document.createElement("script");
      scriptElem.id = "seo-schema-script";
      scriptElem.type = "application/ld+json";
      document.head.appendChild(scriptElem);
    }

    const defaultSchema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "HomeAndConstructionBusiness",
          "@id": "https://4lotusinterior.in/#organization",
          "name": "4 Lotus Interior",
          "alternateName": ["Four Lotus Interior", "4 Lotus Architecture & Interior Studio"],
          "url": "https://4lotusinterior.in",
          "logo": "https://4lotusinterior.in/assets/logo.webp",
          "image": "https://4lotusinterior.in/assets/hero_living_room.jpg",
          "description": "Premier architecture and luxury turnkey interior design studio in Delhi-NCR led by Principal Architect Rashid Ali. 15+ years of craft, custom millwork, and spatial excellence.",
          "telephone": ["+91 98106 98082", "+91 98113 63064"],
          "email": "contact@4lotusinterior.in",
          "priceRange": "₹₹₹",
          "founder": {
            "@type": "Person",
            "name": "Rashid Ali",
            "jobTitle": "Principal Architect & Interior Designer"
          },
          "address": [
            {
              "@type": "PostalAddress",
              "streetAddress": "Plot No-18, 1st Floor, Main Palam Dwarka Road, Near Dabri Police Station",
              "addressLocality": "Janakpuri / Dwarka",
              "addressRegion": "Delhi",
              "postalCode": "110045",
              "addressCountry": "IN"
            },
            {
              "@type": "PostalAddress",
              "streetAddress": "Plot No-57, W.H.S, A Block, 2nd Floor, Kirti Nagar Industrial Area, Timber Market",
              "addressLocality": "Kirti Nagar",
              "addressRegion": "Delhi",
              "postalCode": "110015",
              "addressCountry": "IN"
            }
          ],
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 28.6181,
            "longitude": 77.0898
          },
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              "opens": "10:00",
              "closes": "18:00"
            }
          ],
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "81",
            "bestRating": "5",
            "worstRating": "1"
          },
          "areaServed": [
            "Delhi",
            "New Delhi",
            "Janakpuri",
            "Dwarka",
            "South Delhi",
            "Vasant Kunj",
            "Greater Kailash",
            "Gurgaon",
            "Golf Course Road",
            "Noida",
            "West Delhi",
            "Kirti Nagar"
          ],
          "knowsAbout": [
            "Luxury Residential Interior Design",
            "Architectural Planning & 3D Blueprints",
            "Turnkey Home Renovation",
            "Modular Kitchens & Solid Wood Joinery",
            "Commercial & Corporate Office Interiors",
            "Custom Luxury Furniture Manufacturing"
          ]
        },
        ...(Array.isArray(schema) ? schema : schema ? [schema] : [])
      ]
    };

    scriptElem.text = JSON.stringify(defaultSchema);
  }, [fullTitle, description, keywords, currentUrl, ogImage, ogType, schema]);

  return null;
}
