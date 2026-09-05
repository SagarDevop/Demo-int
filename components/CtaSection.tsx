"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface CtaSectionProps {
  onOpenConsultation: () => void;
}

export default function CtaSection({ onOpenConsultation }: CtaSectionProps) {
  return (
    <section className="relative w-full py-20 md:py-32 px-4 md:px-10 max-w-[1440px] mx-auto overflow-hidden">
      {/* Background Plaster Fireplace Image Card */}
      <div className="relative w-full min-h-[380px] md:min-h-[460px] rounded-[6px] overflow-hidden flex items-center justify-center p-8 md:p-16 text-center ">
        <Image
          src="/assets/cta_fireplace.jpg"
          alt="4 Lotus Interior Luxury Plaster Fireplace Atmosphere"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Ambient Darkened Overlay */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px] pointer-events-none" />

        {/* Center Content Matching Dribbble Reference */}
        <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
        

          <div className="pt-24">
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/20 hover:bg-white text-white hover:text-black backdrop-blur-md border border-white/40 text-xs sm:text-sm font-semibold uppercase tracking-widest transition-all shadow-lg hover:scale-105"
            >
              <span>Start Your Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
