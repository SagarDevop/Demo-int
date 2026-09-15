'use client';

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ConsultationModal from "@/components/ConsultationModal";
import SEO from "@/components/SEO";
import { Home, Compass, PhoneCall } from "lucide-react";

export default function NotFoundPageClient() {
  const [consultationOpen, setConsultationOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8F7F5] dark:bg-[#0C0C0C] text-[#141414] dark:text-[#F8F7F5] flex flex-col justify-between selection:bg-[#111111] selection:text-white dark:selection:bg-white dark:selection:text-black">
      <SEO
        title="404 — Space Not Found | 4 Lotus Interior"
        description="The architectural page or archive you are looking for has been relocated. Explore 4 Lotus Interior studio services and portfolio in Delhi."
      />

      <Navbar onOpenConsultation={() => setConsultationOpen(true)} />

      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-24 sm:py-32 relative overflow-hidden">
        {/* Background Subtle Watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.03] dark:opacity-[0.05]">
          <span className="text-[28vw] font-black tracking-tighter text-black dark:text-white">404</span>
        </div>

        <div className="max-w-2xl w-full text-center relative z-10 space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/15 text-xs font-mono tracking-widest text-[#666] dark:text-neutral-400 uppercase">
            <Compass className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
            <span>Error 404 · Uncharted Space</span>
          </div>

          {/* Heading */}
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-6xl font-sans font-light tracking-tight text-[#141414] dark:text-white">
              Space Not Found
            </h1>
            <p className="text-[#666] dark:text-[#D4D2CD] text-sm sm:text-base font-light leading-relaxed max-w-lg mx-auto">
              The architectural page or archive you are looking for has been relocated or does not exist. Let us guide you back to our curated sanctuaries.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#0C0C0C] dark:bg-white text-white dark:text-black text-xs font-medium tracking-widest uppercase hover:bg-black/80 dark:hover:bg-neutral-200 transition-all duration-300 shadow-sm"
            >
              <Home className="w-4 h-4" />
              Return Home
            </Link>
            <div className="flex flex-col sm:flex-row items-center gap-2 w-full sm:w-auto">
              <a
                href="tel:09810698082"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-3 sm:py-3.5 rounded-full bg-white dark:bg-white/10 border border-black/10 dark:border-white/15 text-[#141414] dark:text-white text-xs font-medium tracking-wider uppercase hover:border-black/30 dark:hover:border-white/30 transition-all duration-300 shadow-sm"
              >
                <PhoneCall className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>+91 98106 98082</span>
              </a>
              <a
                href="tel:09811363064"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-3 sm:py-3.5 rounded-full bg-white dark:bg-white/10 border border-black/10 dark:border-white/15 text-[#141414] dark:text-white text-xs font-medium tracking-wider uppercase hover:border-black/30 dark:hover:border-white/30 transition-all duration-300 shadow-sm"
              >
                <PhoneCall className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>+91 98113 63064</span>
              </a>
            </div>
          </div>

          {/* Quick Links Grid */}
          <div className="pt-10 border-t border-black/5 dark:border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs tracking-wider uppercase text-[#666] dark:text-neutral-400">
            <Link href="/about" className="p-3 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 hover:text-black dark:hover:text-white transition-colors">
              Studio
            </Link>
            <Link href="/services" className="p-3 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 hover:text-black dark:hover:text-white transition-colors">
              Services
            </Link>
            <Link href="/portfolio" className="p-3 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 hover:text-black dark:hover:text-white transition-colors">
              Portfolio
            </Link>
            <Link href="/contact-us" className="p-3 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 hover:text-black dark:hover:text-white transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </main>

      <Footer />

      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
      />
    </div>
  );
}
