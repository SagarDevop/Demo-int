"use client";

import React from "react";
import { Compass, Box, Palette, KeyRound, ArrowUpRight } from "lucide-react";

interface ProcessSectionProps {
  onOpenConsultation: () => void;
}

export default function ProcessSection({ onOpenConsultation }: ProcessSectionProps) {
  const steps = [
    {
      step: "01",
      title: "Spatial Brief & Lifestyle Analysis",
      icon: Compass,
      timeframe: "Week 1",
      description:
        "We visit your site or host you at our Janakpuri studio to map functional needs, natural lighting, daily routines, and aesthetic aspirations.",
      deliverables: ["Site Measurement", "Spatial Zoning", "Budget & Mood Alignment"],
    },
    {
      step: "02",
      title: "Hyper-Realistic 3D CAD & Blueprints",
      icon: Box,
      timeframe: "Weeks 2–3",
      description:
        "Every room is modeled with exact scale, custom joinery, electrical conduits, false ceiling elevations, and realistic material textures.",
      deliverables: ["3D Photorealistic Views", "CAD Working Drawings", "Lighting Schemes"],
    },
    {
      step: "03",
      title: "Bespoke Material & Finish Curation",
      icon: Palette,
      timeframe: "Weeks 3–4",
      description:
        "Together, we touch and select physical samples: Italian travertine, fluted oak, brass hardware, quartz countertops, and textured linen wall coverings.",
      deliverables: ["Material Sample Board", "Hardware Matrix", "Fixed Cost Estimation"],
    },
    {
      step: "04",
      title: "Turnkey Execution & White-Glove Handover",
      icon: KeyRound,
      timeframe: "Execution Phase",
      description:
        "Our in-house contractors, master carpenters, and site supervisors execute the project with daily quality checks and on-time milestone delivery.",
      deliverables: ["Dedicated Site Supervisor", "Zero-Defect Quality Check", "Warranty & Handover"],
    },
  ];

  return (
    <section id="process" className="w-full py-16 md:py-24 px-4 md:px-10 max-w-[1440px] mx-auto border-t border-black/[0.08]">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <span className="text-xs font-semibold tracking-[0.2em] text-[#666666] uppercase block mb-3">
            ARCHITECTURAL METHODOLOGY
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#111111] uppercase">
            How We Bring Your Space To Life
          </h2>
        </div>
        <p className="max-w-md text-xs sm:text-sm text-[#555555] font-light leading-relaxed">
          From first sketches to the final handover, our 4-stage process guarantees budget certainty, architectural precision, and uncompromising craftsmanship.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((item, idx) => (
          <div
            key={idx}
            className="group bg-white border border-black/[0.08] p-7 md:p-8 rounded-[4px] flex flex-col justify-between min-h-[360px] card-hover-effect"
          >
            <div>
              <div className="flex items-center justify-between pb-5 mb-5 border-b border-black/[0.06]">
                <span className="text-2xl font-bold text-black/25 group-hover:text-black transition-colors font-mono">
                  {item.step}
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#FAF9F6] text-[#555555] border border-black/[0.05]">
                  {item.timeframe}
                </span>
              </div>

              <h3 className="text-lg md:text-xl font-bold text-[#111111] mb-3 leading-snug">
                {item.title}
              </h3>

              <p className="text-xs sm:text-[13px] text-[#666666] font-light leading-relaxed mb-6">
                {item.description}
              </p>
            </div>

            <div>
              <div className="pt-4 border-t border-black/[0.05] space-y-1.5">
                <span className="text-[10px] font-semibold uppercase tracking-widest text-[#999999] block">
                  Deliverables:
                </span>
                {item.deliverables.map((d, dIdx) => (
                  <div key={dIdx} className="flex items-center gap-1.5 text-xs text-[#444444]">
                    <span className="w-1.5 h-1.5 rounded-full bg-black/40" />
                    <span>{d}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 p-6 md:p-8 bg-[#FAF9F6] border border-black/[0.08] rounded-[4px] flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center sm:text-left">
          <h4 className="text-base sm:text-lg font-bold uppercase tracking-tight text-black">
            Ready to start your spatial transformation?
          </h4>
          <p className="text-xs sm:text-sm text-[#666666]">
            Schedule an initial 45-minute spatial consultation with our senior design team.
          </p>
        </div>
        <button
          onClick={onOpenConsultation}
          className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white text-xs font-semibold uppercase tracking-widest rounded-full hover:bg-neutral-800 transition-all whitespace-nowrap"
        >
          <span>Schedule Briefing</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
