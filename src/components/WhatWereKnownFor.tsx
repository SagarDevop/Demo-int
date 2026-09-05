import React from "react";
import { Link } from "react-router-dom";
import Image from "@/components/Image";
import { Star, Home, ShoppingBag, Building2, Factory } from "lucide-react";

export default function WhatWereKnownFor() {
  const pillars = [
    {
      title: "Residential Interiors",
      desc: "We create living spaces that reflect your culture and lifestyle. Whether modern, western, or contemporary, our residential designs complement the ever-changing world while remaining uniquely yours. Every home we design shares a common thread: tailored comfort and style.",
      icon: Home,
    },
    {
      title: "Retail Design & Storytelling",
      desc: "Retail design is storytelling. We combine creativity with commercial strategy to design retail outlets that optimize space and create engaging customer experiences. It's not just about looking good; it's about setting up your store to maximize sales and brand impact.",
      icon: ShoppingBag,
    },
    {
      title: "Corporate Workplaces",
      desc: "We design corporate spaces that work as strategic tools for your business. From furniture selection to finish details, we create successful workplace environments that leverage physical space to achieve your organizational goals and enhance productivity.",
      icon: Building2,
    },
    {
      title: "Turnkey Solutions & Manufacturing",
      desc: "With over 15 years of experience, we have grown from a simple design firm into a comprehensive solutions provider. We are proud to play a leading role in architecture, interior design, renovation, remodeling, trading, and manufacturing.",
      icon: Factory,
    },
  ];

  return (
    <section id="studio" className="w-full py-16 md:py-24 px-4 md:px-10 max-w-[1440px] mx-auto border-t border-black/[0.08]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Left Column: Leadership & Heritage */}
        <div className="lg:col-span-4 flex flex-col justify-between space-y-8">
          <div>
            <span className="text-xs md:text-sm font-semibold tracking-[0.2em] text-[#111111] uppercase block mb-6">
              EXCELLENCE IN ARCHITECTURE & INTERIORS
            </span>

            {/* Crafted With Care Thumbnail Card */}
            <div className="space-y-3">
              <span className="text-xs font-medium text-[#777777] tracking-wider uppercase">
                Crafted With Care · Delhi-NCR
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
                to="/about"
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

          {/* The 4 Editorial Pillars */}
          <div className="divide-y divide-black/[0.08]">
            {pillars.map((item, index) => (
              <div
                key={index}
                className="py-6 md:py-8 grid grid-cols-1 sm:grid-cols-12 gap-4 items-baseline hover:bg-black/[0.02] transition-colors px-2 rounded-[2px]"
              >
                <div className="sm:col-span-5 flex items-center gap-2.5">
                  <item.icon className="w-4 h-4 text-black shrink-0" />
                  <h3 className="text-base sm:text-lg font-bold text-[#111111]">
                    {item.title}
                  </h3>
                </div>
                <div className="sm:col-span-7">
                  <p className="text-xs sm:text-sm text-[#555555] font-light leading-relaxed">
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
