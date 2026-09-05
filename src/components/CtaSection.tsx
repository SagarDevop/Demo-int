import React from "react";
import Image from "@/components/Image";
import { ArrowUpRight } from "lucide-react";

interface CtaSectionProps {
  onOpenConsultation: () => void;
}

export default function CtaSection({ onOpenConsultation }: CtaSectionProps) {
  return (
    <section className="w-full py-12 md:py-16 px-4 md:px-10 max-w-[1440px] mx-auto">
      <div className="relative w-full h-[220px] sm:h-[280px] md:h-[340px] rounded-[6px] overflow-hidden shadow-2xl flex flex-col justify-center items-center text-center p-6 md:p-12 group">
        {/* Background Atmospheric Fireplace Photo */}
        <Image
          src="/assets/cta_fireplace.jpg"
          alt="Atmospheric Fireplace Lounge at 4 Lotus Studio"
          fill
          className="object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
        />

        {/* Deep Contrast Overlay */}
        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 space-y-4 max-w-xl animate-fade-in">
          <span className="text-[11px] md:text-xs font-semibold tracking-[0.25em] text-white/80 uppercase block">
            Begin Your Spatial Transformation
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white uppercase">
            Start Your Project
          </h2>

          <div className="pt-2">
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-black text-xs sm:text-sm font-semibold tracking-wider uppercase hover:bg-amber-200 transition-colors shadow-lg"
            >
              <span>Book Design Consultation</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
