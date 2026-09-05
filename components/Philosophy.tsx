"use client";

import React from "react";
import Image from "next/image";

export default function Philosophy() {
  return (
    <section id="philosophy" className="w-full py-16 md:py-24 px-4 md:px-10 max-w-[1440px] mx-auto">
      {/* Section Header Row */}
      <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-12 md:mb-16 border-b border-black/[0.08] pb-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#111111] uppercase max-w-lg">
          THE 4 LOTUS PHILOSOPHY
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-[#444444] font-normal leading-relaxed max-w-xl">
          Purpose first, beauty always. We blend functional planning, enduring design language, and carefully curated natural materials to create spaces that feel deeply personal.
        </p>
      </div>

      {/* 3 Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {/* Card 01: Function First (Full-Bleed Photo Card) */}
        <div className="group relative bg-[#1E1D1B] rounded-[4px] overflow-hidden min-h-[440px] md:min-h-[500px] flex flex-col justify-between p-7 md:p-8 card-hover-effect">
          <Image
            src="/assets/card_function_first.jpg"
            alt="Function First - 4 Lotus Interior Space"
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out opacity-90"
          />
          {/* Subtle gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 pointer-events-none" />

          {/* Top-left Number badge */}
          <span className="relative z-10 text-sm md:text-base font-semibold text-white/90 tracking-widest">
            01
          </span>

          {/* Bottom Content */}
          <div className="relative z-10 space-y-1.5 pt-6">
            <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
              Function First
            </h3>
            <p className="text-xs md:text-sm text-white/80 font-light">
              Every element serves a purpose.
            </p>
          </div>
        </div>

        {/* Card 02: Timeless Aesthetic (Minimalist Line Art Sketch) */}
        <div className="group relative bg-white border border-black/[0.08] rounded-[4px] overflow-hidden min-h-[440px] md:min-h-[500px] flex flex-col justify-between p-7 md:p-8 card-hover-effect">
          {/* Top-left Number badge */}
          <span className="text-sm md:text-base font-semibold text-[#111111] tracking-widest">
            02
          </span>

          {/* Center Line Art Illustration */}
          <div className="relative my-auto w-full flex items-center justify-center py-6">
            <div className="w-[180px] sm:w-[210px] md:w-[240px] h-[200px] md:h-[230px] relative transition-transform duration-500 group-hover:scale-105">
              <Image
                src="/assets/card_02_sketch.svg"
                alt="Timeless Aesthetic Fluted Table and Vase Botanical Line Art"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Bottom Content */}
          <div className="space-y-1.5 pt-4">
            <h3 className="text-xl md:text-2xl font-bold text-[#111111] tracking-tight">
              Timeless Aesthetic
            </h3>
            <p className="text-xs md:text-sm text-[#666666] font-light">
              Designs that remain beautiful for years
            </p>
          </div>
        </div>

        {/* Card 03: Material-Led Craftsmanship (Minimalist Pendant Lamps Sketch) */}
        <div className="group relative bg-white border border-black/[0.08] rounded-[4px] overflow-hidden min-h-[440px] md:min-h-[500px] flex flex-col justify-between p-7 md:p-8 card-hover-effect">
          {/* Top-left Number badge */}
          <span className="text-sm md:text-base font-semibold text-[#111111] tracking-widest">
            03
          </span>

          {/* Center Line Art Illustration */}
          <div className="relative my-auto w-full flex items-center justify-center py-6">
            <div className="w-[180px] sm:w-[210px] md:w-[240px] h-[200px] md:h-[230px] relative transition-transform duration-500 group-hover:scale-105">
              <Image
                src="/assets/card_03_sketch.svg"
                alt="Material-Led Craftsmanship Modern Scandinavian Lamps Line Art"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Bottom Content */}
          <div className="space-y-1.5 pt-4">
            <h3 className="text-xl md:text-2xl font-bold text-[#111111] tracking-tight">
              Material-Led Craftsmanship
            </h3>
            <p className="text-xs md:text-sm text-[#666666] font-light">
              Natural textures and curated palettes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
