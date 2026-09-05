"use client";

import React from "react";
import { Compass, Home, Sparkles, Building, Layers, ArrowUpRight } from "lucide-react";

interface ServicesSectionProps {
  onOpenConsultation: () => void;
}

export default function ServicesSection({ onOpenConsultation }: ServicesSectionProps) {
  const services = [
    {
      num: "01",
      title: "Luxury Residential Interiors",
      desc: "Comprehensive design and turnkey styling for luxury flats, penthouses, and bespoke villas across Delhi-NCR.",
      tag: "Flats & Villas",
    },
    {
      num: "02",
      title: "Commercial & Showroom Execution",
      desc: "High-impact retail showrooms, executive corporate spaces, and boutique hospitality architecture.",
      tag: "Commercial",
    },
    {
      num: "03",
      title: "Architectural Planning & Layouts",
      desc: "Flawless building floor plans, structural layouts, and precision 3D architectural visualizations.",
      tag: "Architecture",
    },
    {
      num: "04",
      title: "Modular Kitchens & Spa Bathrooms",
      desc: "Ergonomic German-hardware kitchens, quartz countertops, and minimalist luxury bathroom sanctuaries.",
      tag: "Specialized",
    },
    {
      num: "05",
      title: "Bespoke Furniture & Joinery",
      desc: "Custom fluted wood panels, imported stone finishes, brass accents, and tailored seating made to measure.",
      tag: "Craftsmanship",
    },
    {
      num: "06",
      title: "Complete Home Renovations",
      desc: "End-to-end transformation of legacy properties into modern, light-filled sanctuaries of calm sophistication.",
      tag: "Renovation",
    },
  ];

  return (
    <section id="services" className="w-full py-16 md:py-24 px-4 md:px-10 max-w-[1440px] mx-auto border-t border-black/[0.08]">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <span className="text-xs font-semibold tracking-[0.2em] text-[#666666] uppercase block mb-3">
            STUDIO SERVICES
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#111111] uppercase">
            Transforming Spaces With Intention
          </h2>
        </div>
        <p className="max-w-md text-xs sm:text-sm text-[#555555] font-light leading-relaxed">
          Your one-stop destination in New Delhi for bespoke architectural interior design, turnkey construction, and curated material finishes.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((svc, i) => (
          <div
            key={i}
            className="group bg-white border border-black/[0.08] p-8 rounded-[4px] flex flex-col justify-between min-h-[260px] card-hover-effect"
          >
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-semibold tracking-widest text-[#999999]">
                {svc.num}
              </span>
              <span className="text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full bg-[#F5F4F0] text-[#444444] font-medium">
                {svc.tag}
              </span>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg md:text-xl font-bold text-[#111111] tracking-tight group-hover:text-amber-700 transition-colors">
                {svc.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#666666] font-light leading-relaxed">
                {svc.desc}
              </p>
            </div>

            <div className="pt-6 mt-4 border-t border-black/[0.05]">
              <button
                onClick={onOpenConsultation}
                className="flex items-center gap-1 text-xs font-semibold text-black uppercase tracking-wider group-hover:gap-2 transition-all"
              >
                <span>Inquire For Project</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
