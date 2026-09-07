import React, { useState, useEffect } from "react";
import Image from "@/components/Image";
import { X, ArrowRight, ArrowLeft, Layers, MapPin, Calendar } from "lucide-react";

interface ProjectGalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export default function ProjectGalleryModal({
  isOpen,
  onClose,
  onOpenConsultation,
}: ProjectGalleryModalProps) {
  const [activeIdx, setActiveIdx] = useState(0);

  // Close on Escape key press and lock background scroll
  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  const projects = [
    {
      title: "The Knightsbridge Residence",
      category: "Luxury Residential Suite",
      location: "South Delhi · Completed 2025",
      area: "3,850 sq.ft.",
      timeline: "4.5 Months",
      desc: "An architectural home transformation balancing soft curvilinear furniture with structured microcement wall finishes, travertine stone surfaces, and bespoke recessed ambient cove lighting.",
      materials: ["Italian Travertine", "Curved Bouclé Wool", "Fluted Smoked Oak", "Dimmable 2700K Cove Lighting"],
      image: "/assets/curved_sofa_project.jpg",
    },
    {
      title: "Timeless Minimalist Living Hall",
      category: "Penthouse & Lounge",
      location: "Dwarka Expressway · Completed 2024",
      area: "2,600 sq.ft.",
      timeline: "3 Months",
      desc: "Low-slung modular seating, monolithic Statuario marble coffee table, custom brushed brass floor lamps, and floor-to-ceiling linen drapery creating effortless calm.",
      materials: ["Statuario Marble", "Hand-Tufted Wool Rug", "Brushed Brass", "Warm Neutral Plaster"],
      image: "/assets/hero_living_room.jpg",
    },
    {
      title: "Function First Courtyard Suite",
      category: "Architectural Villa Renovation",
      location: "Janakpuri Executive Home · Completed 2024",
      area: "4,200 sq.ft.",
      timeline: "5 Months",
      desc: "Seamless indoor-outdoor courtyard integration featuring an internal glass atrium, recessed fireplace with vertical wood storage, and modular low-profile daybeds.",
      materials: ["Natural Birch Courtyard", "Matte Charcoal Steel", "Limestone Floor Tiles", "Cast Concrete Hearth"],
      image: "/assets/card_function_first.jpg",
    },
    {
      title: "Atmospheric Hearth & Dining Lounge",
      category: "Bespoke Hospitality & Villa",
      location: "New Delhi Residence · Completed 2025",
      area: "3,100 sq.ft.",
      timeline: "3.5 Months",
      desc: "Linear bio-ethanol fireplace embedded into a floating walnut console, textured limestone acoustic plaster panels, and curated handmade ceramic vessels.",
      materials: ["Solid Walnut Hearth", "Linear Bio-Flame", "Acoustic Plaster", "Handmade Ceramics"],
      image: "/assets/cta_fireplace.jpg",
    },
  ];

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="gallery-headline"
      className="fixed inset-0 z-[9999] overflow-y-auto bg-black/85 backdrop-blur-md p-4 sm:p-6 md:p-10 flex justify-center items-start animate-fade-in"
      onClick={(e) => {
        // Close on clicking backdrop
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      {/* Top Fixed Floating Close Pill */}
      <button
        onClick={onClose}
        className="fixed top-4 right-4 sm:top-6 sm:right-6 z-[10000] flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/20 hover:bg-white text-white hover:text-black backdrop-blur-lg border border-white/30 transition-all duration-200 shadow-2xl text-xs uppercase tracking-widest font-semibold cursor-pointer"
        aria-label="Close modal"
      >
        <X className="w-4 h-4" />
        <span>Close (ESC)</span>
      </button>

      {/* Modal Card */}
      <div className="relative w-full max-w-5xl bg-[#141414] border border-white/15 text-white rounded-[10px] p-6 sm:p-10 shadow-2xl my-8 sm:my-12">
        <div className="space-y-6">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-white/10 pb-4 gap-2 pr-12">
            <div>
              <span className="text-[11px] font-semibold tracking-[0.2em] text-[#A09E9B] uppercase block">
                {projects[activeIdx].category}
              </span>
              <h3 id="gallery-headline" className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white uppercase">
                {projects[activeIdx].title}
              </h3>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs text-amber-300 font-mono tracking-widest uppercase">
                Project 0{activeIdx + 1} / 0{projects.length}
              </span>
            </div>
          </div>

          {/* Project Image Display */}
          <div className="relative w-full h-[240px] sm:h-[340px] md:h-[420px] rounded-[6px] overflow-hidden border border-white/10 bg-black/40">
            <Image
              src={projects[activeIdx].image}
              alt={projects[activeIdx].title}
              fill
              className="object-cover object-center"
            />
          </div>

          {/* Project Details Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-2">
            <div className="lg:col-span-7 space-y-3">
              <div className="flex flex-wrap items-center gap-4 text-xs text-neutral-300">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  <span>{projects[activeIdx].location}</span>
                </span>
                <span className="flex items-center gap-1">
                  <Layers className="w-3.5 h-3.5 text-amber-400" />
                  <span>{projects[activeIdx].area}</span>
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-amber-400" />
                  <span>{projects[activeIdx].timeline}</span>
                </span>
              </div>
              <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                {projects[activeIdx].desc}
              </p>
            </div>

            {/* Material Palette */}
            <div className="lg:col-span-5 space-y-2.5 bg-white/5 p-4 rounded-[6px] border border-white/10">
              <span className="text-[10px] font-semibold uppercase tracking-widest text-[#CCCCCC] block">
                Curated Material Palette:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {projects[activeIdx].materials.map((m, mIdx) => (
                  <span
                    key={mIdx}
                    className="text-[11px] px-2.5 py-1 rounded-full bg-white/10 text-white/90 border border-white/10"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex flex-col sm:flex-row items-center justify-between pt-4 border-t border-white/10 gap-4">
            <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-start">
              <button
                onClick={() =>
                  setActiveIdx((prev) => (prev > 0 ? prev - 1 : projects.length - 1))
                }
                className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider"
                aria-label="Previous project"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Prev Project</span>
              </button>
              <button
                onClick={() =>
                  setActiveIdx((prev) => (prev < projects.length - 1 ? prev + 1 : 0))
                }
                className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider"
                aria-label="Next project"
              >
                <span>Next Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <button
              onClick={() => {
                onClose();
                onOpenConsultation();
              }}
              className="w-full sm:w-auto px-6 py-3 bg-white text-black text-xs font-semibold uppercase tracking-widest rounded-full hover:bg-neutral-200 transition-colors shadow-lg text-center"
            >
              Inquire For Similar Space ↗
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
