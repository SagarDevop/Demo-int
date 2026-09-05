"use client";

import React from "react";
import { Star, CheckCircle, Quote, ArrowUpRight } from "lucide-react";

export default function GoogleReviewsSection() {
  const reviews = [
    {
      quote: "Best showroom interior designer design and work execution.",
      author: "Verified Client",
      location: "Delhi Commercial Space",
      rating: 5,
      date: "Recent",
    },
    {
      quote: "Home construction nice with interiors works designs and contractors team.",
      author: "Homeowner",
      location: "Janakpuri Residence",
      rating: 5,
      date: "Recent",
    },
    {
      quote: "Excellent building plan layout and home construction and best interior.",
      author: "Villa Owner",
      location: "Dwarka Sector 18",
      rating: 5,
      date: "Recent",
    },
  ];

  return (
    <section id="reviews" className="w-full py-16 md:py-24 px-4 md:px-10 max-w-[1440px] mx-auto border-t border-black/[0.08]">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-amber-500">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span className="text-black text-sm font-semibold tracking-wide">
              4.9 Rating (81 Google Reviews)
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#111111] uppercase">
            Client Voices & Endorsements
          </h2>
        </div>

        <a
          href="https://www.google.com/search?q=Lotus+Interior+in+South+Metro+Station+Dwarka+Road+Janakpuri+New+Delhi"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-black border-b border-black pb-1 hover:opacity-70 transition-opacity"
        >
          <span>View All 81 Google Reviews</span>
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>

      {/* Review Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {reviews.map((rev, idx) => (
          <div
            key={idx}
            className="bg-white border border-black/[0.08] p-8 rounded-[4px] flex flex-col justify-between space-y-6 card-hover-effect"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex text-amber-400">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <Quote className="w-6 h-6 text-black/15" />
              </div>
              <p className="text-sm md:text-base text-[#222222] font-medium leading-relaxed italic">
                &ldquo;{rev.quote}&rdquo;
              </p>
            </div>

            <div className="pt-4 border-t border-black/[0.06] flex items-center justify-between text-xs text-[#777777]">
              <div>
                <p className="font-semibold text-black">{rev.author}</p>
                <p>{rev.location}</p>
              </div>
              <span className="flex items-center gap-1 text-emerald-600 font-medium">
                <CheckCircle className="w-3.5 h-3.5" />
                Verified
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
