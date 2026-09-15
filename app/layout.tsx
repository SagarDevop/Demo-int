import type { Metadata, Viewport } from "next";
import "./globals.css";
import InitialLoader from "@/components/InitialLoader";
import ScrollToTop from "@/components/ScrollToTop";

export const viewport: Viewport = {
  themeColor: "#111111",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://4lotusinterior.in"),
  title: {
    default: "4 Lotus Interior | Luxury Architecture & Interior Design Studio Delhi",
    template: "%s | 4 Lotus Interior Delhi",
  },
  description:
    "4 Lotus Interior is Delhi-NCR's premier architecture and luxury interior design studio led by Principal Architect Rashid Ali. 15+ years of turnkey excellence in residential, villas, and commercial spaces.",
  alternates: {
    canonical: "https://4lotusinterior.in/",
  },
  icons: {
    icon: "/assets/logo.webp",
    apple: "/assets/logo.webp",
  },
  openGraph: {
    title: "4 Lotus Interior | Luxury Architecture & Interior Design Studio Delhi",
    description:
      "15+ years of turnkey excellence in luxury residences, villas, and corporate interiors across Delhi-NCR led by Principal Architect Rashid Ali.",
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
  twitter: {
    card: "summary_large_image",
    title: "4 Lotus Interior | Luxury Architecture & Interior Design Studio Delhi",
    description:
      "15+ years of turnkey excellence in luxury residences, villas, and corporate interiors across Delhi-NCR led by Principal Architect Rashid Ali.",
    images: ["https://4lotusinterior.in/assets/images/index-meta.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark');}}catch(e){}})();`,
          }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="bg-[#F8F7F5] dark:bg-[#0C0C0C] text-[#111111] dark:text-[#F8F7F5] antialiased selection:bg-[#111111] selection:text-white dark:selection:bg-white dark:selection:text-black"
      >
        <InitialLoader />
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}
