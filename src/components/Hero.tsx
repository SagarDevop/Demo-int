import React from "react";
import { Link } from "react-router-dom";
import Image from "@/components/Image";
import { ArrowUpRight, Star } from "lucide-react";

interface HeroProps {
  onOpenConsultation: () => void;
  onOpenProjects?: () => void;
}

export default function Hero({ onOpenConsultation, onOpenProjects }: HeroProps) {
  return (
    <section className="relative w-full min-h-[85vh] md:min-h-screen flex flex-col justify-between pt-24 pb-8 md:pb-12 px-4 md:px-10 max-w-[1440px] mx-auto overflow-hidden">
      {/* Accessible semantic heading for screen readers & SEO */}
      <h1 className="sr-only">
        4 Lotus Interior — Luxury Architecture & Interior Design Studio in New Delhi
      </h1>

      {/* Background Hero Image Card */}
      <div className="relative w-full h-[65vh] sm:h-[72vh] md:h-[82vh] rounded-[4px] md:rounded-[8px] overflow-hidden shadow-2xl flex flex-col justify-between p-6 sm:p-8 md:p-12">
        <Image
          src="/assets/hero_living_room.jpg"
          alt="4 Lotus Interior Timeless Comfort Minimalist Living Room in Delhi"
          fill
          priority
          className="object-cover object-center transform scale-100 hover:scale-105 transition-transform duration-1000 ease-out"
        />

        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/25 pointer-events-none" />

        {/* Top Floating Badges */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3">
          <Link
            to="/reviews"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-[11px] md:text-xs tracking-wider uppercase font-medium hover:bg-white/30 transition-colors"
          >
            <div className="flex items-center text-amber-300">
              <Star className="w-3.5 h-3.5 fill-current" />
            </div>
            <span>4.9 Rated Studio</span>
            <span className="opacity-60">·</span>
            <span>81 Google Reviews ↗</span>
          </Link>

          <Link
            to="/locations"
            className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/30 backdrop-blur-md border border-white/20 text-white/90 text-[11px] md:text-xs tracking-wider uppercase hover:bg-black/50 transition-colors"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Janakpuri Studio · Open till 6 PM ↗</span>
          </Link>
        </div>

        {/* Bottom Bar: Value Proposition & Action Links */}
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-end justify-between gap-6 pt-4 border-t border-white/20">
          {/* Left Text */}
          <p className="max-w-md text-xs sm:text-sm md:text-base text-white/90 font-light leading-relaxed">
            4 Lotus is a design studio built on the belief that interiors should feel effortless, warm, and deeply personal. Transforming residential and commercial spaces across Delhi-NCR.
          </p>

          {/* Right Action Links */}
          <div className="flex items-center gap-6 sm:gap-8 self-end md:self-auto">
            <button
              onClick={onOpenConsultation}
              className="group flex items-center gap-1.5 text-xs sm:text-sm md:text-base font-medium text-white tracking-wide border-b border-white pb-0.5 hover:text-amber-200 hover:border-amber-200 transition-all"
            >
              <span>Book Consultation</span>
              <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            <Link
              to="/portfolio"
              className="group flex items-center gap-1.5 text-xs sm:text-sm md:text-base font-medium text-white/90 tracking-wide border-b border-white/60 pb-0.5 hover:text-white hover:border-white transition-all"
            >
              <span>View Projects</span>
              <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
