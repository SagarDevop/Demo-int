"use client";

import React from "react";
import Image from "next/image";
import { Star, ShieldCheck, Award, Sparkles } from "lucide-react";

export default function WhatWereKnownFor() {
  const highlights = [
    {
      title: "Design Awards",
      desc: "Each space is designed to elevate everyday living with clarity and comfort.",
      icon: Award,
    },
    {
      title: "Featured Work",
      desc: "Our work has been featured across design platforms and publications.",
      icon: Sparkles,
    },
    {
      title: "Built to Last",
      desc: "Chosen for durability, texture, and long-term environmental value.",
      icon: ShieldCheck,
    },
    {
      title: "Client Experience",
      desc: "From first concepts to final styling, we keep every step transparent and intentional.",
      icon: Star,
    },
  ];

  return (
    <section id="highlights" className="w-full py-16 md:py-24 px-4 md:px-10 max-w-[1440px] mx-auto border-t border-black/[0.08]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Left Column: STUDIO HIGHLIGHTS & Crafted with Care Card */}
        <div className="lg:col-span-4 flex flex-col justify-between space-y-8">
          <div>
            <span className="text-xs md:text-sm font-semibold tracking-[0.2em] text-[#111111] uppercase block mb-6">
              STUDIO HIGHLIGHTS
            </span>

            {/* Crafted With Care Thumbnail Card */}
            <div className="space-y-3">
              <span className="text-xs font-medium text-[#777777] tracking-wider uppercase">
                Crafted With Care
              </span>
              <div className="relative w-[140px] h-[180px] rounded-[4px] overflow-hidden border border-black/10 shadow-sm group">
                <Image
                  src="/assets/crafted_care_thumb.jpg"
                  alt="4 Lotus Studio Interior Architecture Crafted With Care"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Business Credentials Badge */}
          <div className="p-4 bg-white border border-black/[0.08] rounded-[4px] space-y-2">
            <div className="flex items-center gap-1.5 text-amber-500 text-xs font-semibold">
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <span className="text-black ml-1">4.9 / 5.0</span>
            </div>
            <p className="text-[12px] text-[#555555] leading-relaxed">
              Trusted by 80+ homeowners & businesses in Janakpuri, Dwarka & Delhi-NCR.
            </p>
          </div>
        </div>

        {/* Right Column: "What We're Known For" Editorial Table */}
        <div className="lg:col-span-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline pb-6 border-b border-black/[0.08]">
            <h2 className="md:col-span-6 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#111111]">
              What We&apos;re Known For
            </h2>
            <p className="md:col-span-6 text-xs sm:text-sm text-[#555555] font-light leading-relaxed">
              4 Lotus is a design studio focused on interiors that feel effortless, warm, and deeply personal. We blend timeless palettes with natural materials and thoughtful planning to elevate everyday living.
            </p>
          </div>

          {/* The 4 Editorial Rows */}
          <div className="divide-y divide-black/[0.08]">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="py-6 md:py-8 grid grid-cols-1 sm:grid-cols-12 gap-4 items-baseline hover:bg-black/[0.02] transition-colors px-2 rounded-[2px]"
              >
                <div className="sm:col-span-5 flex items-center gap-3">
                  <h3 className="text-base sm:text-lg md:text-xl font-medium text-[#111111]">
                    {item.title}
                  </h3>
                </div>
                <div className="sm:col-span-7">
                  <p className="text-xs sm:text-sm md:text-base text-[#555555] font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
