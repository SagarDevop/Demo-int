import React from "react";
import { Link } from "react-router-dom";
import Image from "@/components/Image";
import { ArrowUpRight } from "lucide-react";

interface ProjectHighlightProps {
  onOpenProjects: () => void;
}

export default function ProjectHighlight({ onOpenProjects }: ProjectHighlightProps) {
  return (
    <section id="studio" className="w-full py-16 md:py-20 px-4 md:px-10 max-w-[1440px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-white border border-black/[0.08] rounded-[6px] p-6 md:p-12 overflow-hidden shadow-sm">
        {/* Left Column: Technical Blueprint Sketch & Description */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6 md:space-y-8">
          <div className="space-y-3">
            <span className="text-[11px] font-semibold tracking-[0.2em] text-[#666666] uppercase">
              Transformation Case Study
            </span>
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-[#111111] uppercase">
              Architectural Precision & Luxury Living
            </h3>
          </div>

          {/* Blueprint Technical Sketch */}
          <div className="relative w-full h-[140px] md:h-[160px] bg-[#FAF9F6] border border-black/[0.06] rounded-[4px] p-4 flex items-center justify-center">
            <Image
              src="/assets/blueprint_sketch.svg"
              alt="4 Lotus Architectural Floor Plan and Dimension Layout"
              fill
              className="object-contain p-2"
            />
          </div>

          {/* Exact Text from Dribbble Reference */}
          <p className="text-xs sm:text-sm md:text-base text-[#444444] font-normal leading-relaxed">
            Completed a comprehensive home transformation that defined 4 Lotus&apos;s material-led and timeless approach.
          </p>

          <div className="flex items-center gap-6">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold text-black uppercase tracking-wider border-b border-black pb-1 hover:opacity-70 transition-opacity"
            >
              <span>Explore Portfolio ↗</span>
            </Link>

            <button
              onClick={onOpenProjects}
              className="text-xs md:text-sm font-medium text-[#777777] uppercase tracking-wider hover:text-black transition-colors"
            >
              Quick Preview
            </button>
          </div>
        </div>

        {/* Right Column: Full-Resolution Curved Sofa Photo */}
        <div className="lg:col-span-7 relative h-[280px] sm:h-[360px] md:h-[440px] rounded-[4px] overflow-hidden group">
          <Image
            src="/assets/curved_sofa_project.jpg"
            alt="Completed 4 Lotus Luxury Interior Transformation in Delhi"
            fill
            className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-[4px] flex items-center justify-between text-[11px] md:text-xs font-medium text-black tracking-wide border border-black/5">
            <span>Residence & Lounge · South Delhi</span>
            <Link to="/portfolio" className="text-black font-semibold hover:underline">
              View Specs ↗
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
