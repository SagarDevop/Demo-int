import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

interface ProcessSectionProps {
  onOpenConsultation: () => void;
}

export default function ProcessSection({ onOpenConsultation }: ProcessSectionProps) {
  return (
    <section id="process" className="w-full py-16 md:py-24 px-4 md:px-10 max-w-[1440px] mx-auto border-t border-black/[0.08]">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
        <div>
          <span className="text-xs font-semibold tracking-[0.2em] text-[#666666] uppercase block mb-3">
            INTEGRATED DESIGN & BUILD PROCESS
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#111111] uppercase">
            Seamless Execution for Every Project Type
          </h2>
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <p className="max-w-md text-xs sm:text-sm text-[#555555] font-light leading-relaxed">
            We are the preferred choice for residential, retail, commercial, corporate, and hospitality interior design in Delhi-NCR, Gurgaon, and Noida.
          </p>
          <Link
            to="/process"
            className="text-xs font-bold uppercase tracking-wider text-black border-b border-black pb-1 hover:opacity-70 transition-opacity whitespace-nowrap"
          >
            Full Process Breakdown ↗
          </Link>
        </div>
      </div>

      {/* 2-Phase Architectural Process Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Phase 01: From Concept to Detail */}
        <div className="bg-white border border-black/[0.08] p-8 sm:p-10 rounded-[4px] flex flex-col justify-between card-hover-effect">
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-black/[0.06]">
              <span className="text-3xl font-bold text-black/30 font-mono">01</span>
              <span className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-[#FAF9F6] text-black border border-black/10">
                Phase 1: Planning & Design
              </span>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl sm:text-2xl font-bold text-[#111111]">
                From Concept to Detail
              </h3>
              <p className="text-xs sm:text-sm text-[#555555] font-light leading-relaxed">
                We start with a comprehensive Client Brief and Analysis, followed by Layout Planning, Budgeting (BOQ) & Specifications. We then move to Concept Design, Detailing, 3D Rendered Views, and Material Sampling.
              </p>
            </div>

            <div className="space-y-2.5 pt-2">
              {[
                "Client Brief & Spatial Requirement Analysis",
                "2D Layout Planning & Functional Zoning",
                "Itemized Budgeting (BOQ) & Specifications",
                "Concept Design, Elevations & Working Details",
                "Hyper-Realistic 3D Rendered Views & Physical Material Sampling",
              ].map((step, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-[13px] text-[#333333]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Phase 02: From Blueprint to Reality */}
        <div className="bg-white border border-black/[0.08] p-8 sm:p-10 rounded-[4px] flex flex-col justify-between card-hover-effect">
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-black/[0.06]">
              <span className="text-3xl font-bold text-black/30 font-mono">02</span>
              <span className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-[#FAF9F6] text-black border border-black/10">
                Phase 2: Build & Turnkey Execution
              </span>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl sm:text-2xl font-bold text-[#111111]">
                From Blueprint to Reality
              </h3>
              <p className="text-xs sm:text-sm text-[#555555] font-light leading-relaxed">
                We handle Engineering & Production Drawings, full Project Management, and On-site Execution. Our team ensures rigorous Cost Control, Quality Control, and Risk Management before the final Hand Over.
              </p>
            </div>

            <div className="space-y-2.5 pt-2">
              {[
                "Engineering & Production Structural Drawings",
                "Dedicated On-Site Project Management & Supervision",
                "Rigorous Cost Control with Fixed-Price Guarantee",
                "Quality Control Inspections & Risk Management",
                "White-Glove Final Hand Over & Warranty Backing",
              ].map((step, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-[13px] text-[#333333]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Box */}
      <div className="mt-10 p-6 md:p-8 bg-[#FAF9F6] border border-black/[0.08] rounded-[4px] flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center sm:text-left">
          <h4 className="text-base sm:text-lg font-bold uppercase tracking-tight text-black">
            Ready to experience our integrated design & build execution?
          </h4>
          <p className="text-xs sm:text-sm text-[#666666]">
            Meet our senior architects at our Janakpuri studio or schedule an on-site evaluation in Delhi-NCR.
          </p>
        </div>
        <button
          onClick={onOpenConsultation}
          className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white text-xs font-semibold uppercase tracking-widest rounded-full hover:bg-neutral-800 transition-all whitespace-nowrap shadow-md"
        >
          <span>Schedule Project Briefing</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
