'use client';

import React, { useState } from "react";
import Link from "next/link";
import Image from "@/components/Image";
import { Star, Home, ShoppingBag, Building2, Factory, LucideIcon } from "lucide-react";

interface PillarItem {
  title: string;
  desc: string;
  icon?: LucideIcon | any;
  image?: string;
  tag?: string;
}

interface WhatWereKnownForProps {
  items?: PillarItem[];
}

export default function WhatWereKnownFor({ items }: WhatWereKnownForProps) {
  const [activePillarIndex, setActivePillarIndex] = useState<number | null>(null);

  const defaultPillars: PillarItem[] = [
    {
      title: "Residential Interiors",
      desc: "We create living spaces that reflect your culture and lifestyle. Whether modern, western, or contemporary, our residential designs complement the ever-changing world while remaining uniquely yours. Every home we design shares a common thread: tailored comfort and style.",
      icon: Home,
      image: "/assets/modern_apartment.jpg",
      tag: "Bespoke Residences",
    },
    {
      title: "Retail Design & Storytelling",
      desc: "Retail design is storytelling. We combine creativity with commercial strategy to design retail outlets that optimize space and create engaging customer experiences. It's not just about looking good; it's about setting up your store to maximize sales and brand impact.",
      icon: ShoppingBag,
      image: "/assets/luxury_lounge_finished.jpg",
      tag: "Commercial Retail",
    },
    {
      title: "Corporate Workplaces",
      desc: "We design corporate spaces that work as strategic tools for your business. From furniture selection to finish details, we create successful workplace environments that leverage physical space to achieve your organizational goals and enhance productivity.",
      icon: Building2,
      image: "/assets/corporate_office.jpg",
      tag: "Strategic Workspaces",
    },
    {
      title: "Turnkey Solutions & Manufacturing",
      desc: "With over 15 years of experience, we have grown from a simple design firm into a comprehensive solutions provider. We are proud to play a leading role in architecture, interior design, renovation, remodeling, trading, and manufacturing.",
      icon: Factory,
      image: "/assets/wood_millwork.jpg",
      tag: "In-House Millwork",
    },
  ];

  const defaultImage = "/assets/rashid-owner-4-lotus-interior-design-expert.webp";

  const fallbackIcons = [Home, ShoppingBag, Building2, Factory];
  const fallbackImages = [
    "/assets/modern_apartment.jpg",
    "/assets/luxury_lounge_finished.jpg",
    "/assets/corporate_office.jpg",
    "/assets/wood_millwork.jpg",
  ];
  const fallbackTags = [
    "Bespoke Residences",
    "Commercial Retail",
    "Strategic Workspaces",
    "In-House Millwork",
  ];

  const pillars: PillarItem[] = items && items.length > 0
    ? items.map((it, idx) => ({
        title: it.title,
        desc: it.desc,
        icon: it.icon || fallbackIcons[idx % fallbackIcons.length],
        image: it.image || fallbackImages[idx % fallbackImages.length],
        tag: it.tag || fallbackTags[idx % fallbackTags.length],
      }))
    : defaultPillars;

  return (
    <section id="studio" className="w-full py-16 md:py-24 px-4 md:px-10 max-w-[1440px] mx-auto border-t border-black/[0.08]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Leadership, Showcase Image & Heritage */}
        <div className="lg:col-span-4 flex flex-col space-y-8">
          <div>
            <span className="text-xs md:text-sm font-semibold tracking-[0.2em] text-[#111111] uppercase block mb-6">
              EXCELLENCE IN ARCHITECTURE & INTERIORS
            </span>

            {/* Interactive Showcase Image Display */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-medium text-[#777777] tracking-wider uppercase h-5 overflow-hidden">
                <span className="truncate pr-2 transition-colors duration-300">
                  {activePillarIndex !== null
                    ? `Pillar 0${activePillarIndex + 1} · ${pillars[activePillarIndex]?.title}`
                    : "Crafted With Care · Delhi-NCR"}
                </span>
                <span className="font-mono text-[11px] text-[#999999] shrink-0">
                  {activePillarIndex !== null ? `0${activePillarIndex + 1} / 04` : "4 Lotus Studio"}
                </span>
              </div>

              {/* Strictly Fixed-Height Showcase Container with Cinematic Cross-Fade Animation */}
              <div className="relative w-full max-w-full sm:max-w-[420px] h-[420px] sm:h-[460px] lg:h-[480px] shrink-0 flex-none rounded-[6px] overflow-hidden border border-black/10 shadow-md bg-neutral-950 group">
                {/* Default Image (Crafted With Care) */}
                <div
                  className={`absolute inset-0 w-full h-full transition-all duration-700 ease-out ${
                    activePillarIndex === null
                      ? "opacity-100 scale-100 z-10"
                      : "opacity-0 scale-105 z-0 pointer-events-none"
                  }`}
                >
                  <Image
                    src={defaultImage}
                    alt="4 Lotus Studio Interior Architecture Crafted With Care"
                    fill
                    sizes="(max-width: 768px) 100vw, 420px"
                    className="object-cover"
                  />
                </div>

                {/* Pillar Specific Images */}
                {pillars.map((pillar, idx) => (
                  <div
                    key={idx}
                    className={`absolute inset-0 w-full h-full transition-all duration-700 ease-out ${
                      activePillarIndex === idx
                        ? "opacity-100 scale-100 z-10"
                        : "opacity-0 scale-105 z-0 pointer-events-none"
                    }`}
                  >
                    <Image
                      src={pillar.image || defaultImage}
                      alt={`4 Lotus Interior - ${pillar.title}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 420px"
                      className="object-cover"
                    />
                  </div>
                ))}

                {/* Subtle Luxury Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent z-20 pointer-events-none" />

                {/* Floating Bottom Card Details */}
                <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 z-30 flex items-end justify-between pointer-events-none">
                  <div className="min-w-0 pr-2">
                    <span className="text-[10px] font-semibold tracking-widest text-amber-300 uppercase block mb-1">
                      {activePillarIndex !== null
                        ? `Pillar 0${activePillarIndex + 1}`
                        : "STUDIO HERITAGE"}
                    </span>
                    <h4 className="text-sm sm:text-base font-bold text-white tracking-wide leading-tight truncate">
                      {activePillarIndex !== null
                        ? pillars[activePillarIndex]?.title
                        : "Crafted With Care · Delhi-NCR"}
                    </h4>
                  </div>
                  <span className="text-[11px] font-medium text-white/90 bg-white/15 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20 shrink-0">
                    {activePillarIndex !== null
                      ? pillars[activePillarIndex]?.tag
                      : "15+ Yrs"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Business & Leadership Credentials */}
          <div className="p-6 bg-white border border-black/[0.08] rounded-[4px] space-y-3.5 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-bold text-sm">
                RA
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase text-black">Rashid Ali</h4>
                <p className="text-xs text-[#777777]">Principal Interior Architect & Founder</p>
              </div>
            </div>

            <div className="flex items-center gap-1.5 text-amber-500 text-xs font-semibold pt-1">
              <Star className="w-3.5 h-3.5 fill-current" />
              <Star className="w-3.5 h-3.5 fill-current" />
              <Star className="w-3.5 h-3.5 fill-current" />
              <Star className="w-3.5 h-3.5 fill-current" />
              <Star className="w-3.5 h-3.5 fill-current" />
              <span className="text-black ml-1">4.9 / 5.0 (81 Google Reviews)</span>
            </div>

            <p className="text-xs text-[#555555] leading-relaxed border-t border-black/[0.05] pt-3">
              &ldquo;Led by Interior Architect Rashid Ali, we demand and maintain the highest level of integrity in every operation. We aim to be leaders in design innovation, product selection, material quality, and installation excellence.&rdquo;
            </p>

            <div className="pt-2">
              <Link
                href="/about"
                className="text-xs font-bold uppercase tracking-wider text-black border-b border-black pb-0.5 hover:opacity-70 transition-opacity inline-block"
              >
                Read Full Studio Story ↗
              </Link>
            </div>
          </div>
        </div>

        {/* Right Column: "About Us" & Core Pillars */}
        <div className="lg:col-span-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline pb-6 border-b border-black/[0.08]">
            <div className="md:col-span-6 space-y-2">
              <span className="text-xs font-semibold tracking-widest text-[#777777] uppercase block">
                WHO WE ARE & OUR LEGACY
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#111111]">
                Transforming Spaces, Redefining Lifestyles
              </h2>
            </div>
            <div className="md:col-span-6 space-y-3">
              <p className="text-xs sm:text-sm text-[#444444] font-normal leading-relaxed">
                4 Lotus Interior is an intelligent design and turnkey interior solutions company based in New Delhi. We specialize in managing complex residential, commercial, corporate, and hospitality projects across Delhi-NCR.
              </p>
              <p className="text-xs sm:text-sm text-[#666666] font-light leading-relaxed">
                We are Delhi-NCR&apos;s leading interior designers and decorators. We manage and execute world-class residential, retail, corporate, and commercial interior projects with precision and style.
              </p>
            </div>
          </div>

          {/* The 4 Editorial Pillars with Interactive Hover & Focus Trigger */}
          <div
            className="divide-y divide-black/[0.08]"
            onMouseLeave={() => setActivePillarIndex(null)}
          >
            {pillars.map((item, index) => {
              const IconComponent = item.icon;
              const isActive = activePillarIndex === index;
              return (
                <div
                  key={index}
                  onMouseEnter={() => setActivePillarIndex(index)}
                  onClick={() => setActivePillarIndex(index)}
                  className={`py-6 md:py-8 grid grid-cols-1 sm:grid-cols-12 gap-4 items-baseline px-3 sm:px-4 rounded-[4px] cursor-pointer transition-colors duration-200 border-l-2 ${
                    isActive
                      ? "bg-black/[0.04] shadow-sm border-black"
                      : "hover:bg-black/[0.02] border-transparent"
                  }`}
                >
                  <div className="sm:col-span-5 flex items-center justify-between sm:justify-start gap-2.5">
                    <div className="flex items-center gap-2.5">
                      {IconComponent && (
                        <IconComponent
                          className={`w-4 h-4 shrink-0 transition-transform duration-300 ${
                            isActive ? "text-black scale-125" : "text-[#555555]"
                          }`}
                        />
                      )}
                      <h3
                        className={`text-base sm:text-lg font-bold transition-colors duration-300 ${
                          isActive ? "text-black" : "text-[#111111]"
                        }`}
                      >
                        {item.title}
                      </h3>
                    </div>
                    <span
                      className={`text-[11px] font-semibold tracking-wider uppercase transition-all duration-300 sm:hidden ${
                        isActive ? "text-black opacity-100" : "opacity-0"
                      }`}
                    >
                      Active
                    </span>
                  </div>
                  <div className="sm:col-span-7 flex items-center justify-between gap-3">
                    <p className="text-xs sm:text-sm text-[#555555] font-light leading-relaxed">
                      {item.desc}
                    </p>
                    <span
                      className={`hidden sm:inline-block text-base font-semibold text-black transition-all duration-300 shrink-0 ${
                        isActive
                          ? "translate-x-1 opacity-100"
                          : "translate-x-0 opacity-0"
                      }`}
                    >
                      →
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

