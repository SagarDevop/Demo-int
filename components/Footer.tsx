"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="w-full bg-[#0C0C0C] text-[#EAE6E1] pt-16 md:pt-24 pb-8 overflow-hidden border-t border-white/10">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Upper Row: INTERIOR | Phone & Email | ARCHITECTURE */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center border-b border-white/10 pb-12">
          {/* Left Tag */}
          <div className="md:col-span-3 text-center md:text-left">
            <span className="text-xs md:text-sm font-semibold tracking-[0.25em] text-[#8E8D8A] uppercase">
              INTERIOR
            </span>
          </div>

          {/* Center Contact Numbers */}
          <div className="md:col-span-6 text-center space-y-2">
            <a
              href="tel:09810698082"
              className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white hover:text-amber-300 transition-colors"
            >
              +91 98106 98082
            </a>
            <a
              href="mailto:hello@4lotus.co"
              className="block text-lg sm:text-xl md:text-2xl font-light tracking-wide text-[#CCCCCC] hover:text-white transition-colors"
            >
              hello@4lotus.co
            </a>
          </div>

          {/* Right Tag */}
          <div className="md:col-span-3 text-center md:text-right">
            <span className="text-xs md:text-sm font-semibold tracking-[0.25em] text-[#8E8D8A] uppercase">
              ARCHITECTURE
            </span>
          </div>
        </div>

        {/* Middle Row: Address | CRAFTED INTERIOR SPACES | Copyright & Back to Top */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 py-10 border-b border-white/10 text-xs sm:text-[13px] tracking-wider text-[#8E8D8A] uppercase items-center">
          {/* Left Address */}
          <div className="md:col-span-4 text-center md:text-left space-y-1">
            <p className="text-white font-medium">STUDIO ADDRESS:</p>
            <p className="leading-relaxed normal-case text-xs text-[#AAAAAA]">
              South Metro Station, Plot No.18, 1st Floor, Dwarka Road, Near Dabri Police Station, Janakpuri, New Delhi, Delhi 110059
            </p>
          </div>

          {/* Center Text */}
          <div className="md:col-span-4 text-center">
            <span className="tracking-[0.2em] font-medium text-[#CCCCCC]">
              CRAFTED INTERIOR SPACES
            </span>
          </div>

          {/* Right Copyright & Scroll */}
          <div className="md:col-span-4 flex flex-col md:flex-row items-center justify-center md:justify-end gap-4 text-center md:text-right">
            <span>2026 4 LOTUS. ALL RIGHTS RESERVED.</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Giant Bottom Typography: 4 LOTUS (Matching the RENOVA giant watermark) */}
        <div className="pt-8 pb-4 text-center select-none overflow-hidden">
          <h2 className="text-[15vw] font-extrabold tracking-[-0.04em] text-white leading-none whitespace-nowrap opacity-95">
            4 LOTUS
          </h2>
        </div>
      </div>
    </footer>
  );
}
