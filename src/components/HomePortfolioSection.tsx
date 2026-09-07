import React, { useState } from "react";
import Image from "@/components/Image";
import { Eye, MapPin, ArrowUpRight, Sparkles } from "lucide-react";

interface HomePortfolioSectionProps {
  onOpenConsultation?: () => void;
  onOpenProjects?: () => void;
}

export default function HomePortfolioSection({
  onOpenConsultation,
  onOpenProjects,
}: HomePortfolioSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const projects = [
    {
      id: "curved-sofa-residence",
      title: "The Solis Residence — Curved Living Suite",
      category: "Residential Villa",
      location: "Janakpuri & Dwarka Expressway, New Delhi",
      area: "3,850 sq.ft",
      image: "/assets/curved_sofa_project.jpg",
      description:
        "Bespoke curved bouclé sectional layout with custom fluted timber wall paneling, Italian travertine coffee table, and architectural mood lighting.",
      materials: ["Italian Travertine", "Smoked Oak Veneer", "Bouclé Fabric", "Concealed 2700K LED"],
    },
    {
      id: "minimalist-penthouse",
      title: "The Minimalist Horizon Suite",
      category: "Luxury Penthouse",
      location: "Greater Kailash (GK-2), New Delhi",
      area: "4,200 sq.ft",
      image: "/assets/hero_living_room.jpg",
      description:
        "Warm minimalist interior architecture featuring open spatial zoning, floor-to-ceiling glass integration, and seamless micro-cement flooring.",
      materials: ["Micro-cement", "Teak Joinery", "Brushed Brass Fixtures", "Lacquered Glass"],
    },
    {
      id: "duplex-lounge-renovation",
      title: "Vasant Vihar Duplex Sanctuary",
      category: "Residential Villa",
      location: "Vasant Vihar, South Delhi",
      area: "5,100 sq.ft",
      image: "/assets/luxury_lounge_finished.jpg",
      description:
        "Complete turnkey structural makeover from raw RCC state into an ultra-luxury modern duplex with double-height ceiling acoustics.",
      materials: ["Statuario Marble", "Acoustic Wall Slats", "Custom Teak Consoles", "VRV Air Conditioning"],
    },
    {
      id: "corporate-headquarters",
      title: "Nexus Executive Workspace",
      category: "Corporate Office",
      location: "Cyber City & Golf Course Rd, Gurgaon",
      area: "8,500 sq.ft",
      image: "/assets/crafted_care_thumb.jpg",
      description:
        "High-performance collaborative enterprise office with ergonomic modular pods, toughened acoustic glass partitions, and Cat-6 server room infrastructure.",
      materials: ["Acoustic Glass", "Modular Steel Pods", "Carpet Tile Flooring", "Cat-6 Data Grid"],
    },
    {
      id: "artisan-culinary-kitchen",
      title: "The Atelier Modular Kitchen",
      category: "Modular Kitchen",
      location: "Punjabi Bagh, New Delhi",
      area: "650 sq.ft",
      image: "/assets/curved_sofa_project.jpg",
      description:
        "Chef-grade modular kitchen manufactured at our Kirti Nagar facility featuring Blum soft-close hardware, quartz countertops, and concealed pantry drawers.",
      materials: ["German Blum Hardware", "Anti-fingerprint Acrylic", "Quartz Countertops", "Integrated Appliances"],
    },
    {
      id: "retail-luxury-flagship",
      title: "Aura Boutique & Showroom",
      category: "Commercial Retail",
      location: "South Extension & Rajouri Garden",
      area: "2,200 sq.ft",
      image: "/assets/luxury_lounge_finished.jpg",
      description:
        "Commercial retail showroom engineered with spatial customer journey pathways, high-CRI spotlighting tracks, and bespoke display fixtures.",
      materials: ["High-CRI Lighting", "Brushed Champagne Metal", "Tempered Display Glass", "Venetian Plaster"],
    },
  ];

  const categories = [
    "All",
    "Residential Villa",
    "Luxury Penthouse",
    "Corporate Office",
    "Modular Kitchen",
    "Commercial Retail",
  ];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section className="w-full py-16 md:py-24 px-4 md:px-10 max-w-[1440px] mx-auto space-y-12">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-black/[0.08] pb-8">
        <div className="space-y-3 max-w-2xl">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.25em] text-amber-900 uppercase">
            <Sparkles className="w-4 h-4" />
            <span>EXECUTED ARCHITECTURAL PORTFOLIO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase text-[#111111] tracking-tight">
            Curated Spaces & Living Suites
          </h2>
          <p className="text-xs sm:text-sm text-[#555555] font-light leading-relaxed">
            Explore a selection of our bespoke residences, villas, penthouses, and commercial headquarters designed and executed across Delhi-NCR.
          </p>
        </div>

        {onOpenProjects && (
          <button
            onClick={onOpenProjects}
            className="px-6 py-3.5 bg-[#111111] text-white hover:bg-neutral-800 text-xs uppercase tracking-wider font-semibold rounded-[4px] transition-all shrink-0 flex items-center gap-2"
          >
            <span>Inspect All Blueprints & Plans</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 sm:px-5 py-2 text-xs font-semibold uppercase tracking-wider rounded-full transition-all ${
              activeCategory === cat
                ? "bg-[#111111] text-white shadow-sm"
                : "bg-white text-[#555555] border border-black/10 hover:border-black/30 hover:text-black"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {filteredProjects.map((proj) => (
          <div
            key={proj.id}
            className="bg-white border border-black/[0.08] rounded-[6px] overflow-hidden flex flex-col justify-between group hover:shadow-lg transition-all duration-300"
          >
            {/* Image Preview with Badges */}
            <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
              <Image
                src={proj.image}
                alt={proj.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md text-white text-[10px] font-semibold uppercase tracking-widest px-3 py-1 rounded-full">
                {proj.category}
              </div>
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md text-black text-[10px] font-mono font-bold px-2.5 py-1 rounded-full">
                {proj.area}
              </div>
            </div>

            {/* Content Details */}
            <div className="p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-1.5 text-xs text-[#777777]">
                <MapPin className="w-3.5 h-3.5 text-amber-800" />
                <span>{proj.location}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold uppercase text-[#111111] group-hover:text-amber-900 transition-colors">
                {proj.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#555555] font-light leading-relaxed">
                {proj.description}
              </p>

              {/* Material Tags */}
              <div className="pt-2">
                <span className="text-[10px] uppercase tracking-widest text-[#888888] font-semibold block mb-2">
                  Key Materials & Finishes:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {proj.materials.map((mat, mIdx) => (
                    <span
                      key={mIdx}
                      className="text-[11px] bg-[#FAF9F6] border border-black/[0.06] px-2.5 py-1 rounded-[2px] text-[#444444]"
                    >
                      {mat}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Action Buttons */}
              <div className="pt-6 border-t border-black/[0.06] flex items-center justify-between">
                <button
                  onClick={onOpenProjects}
                  className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-black hover:text-amber-900 transition-colors"
                >
                  <Eye className="w-4 h-4 text-amber-800" />
                  <span>View Project Drawings & Specs</span>
                </button>

                <button
                  onClick={onOpenConsultation}
                  className="p-2 rounded-full bg-[#FAF9F6] border border-black/10 text-black hover:bg-black hover:text-white transition-colors"
                  aria-label="Request consultation for similar project"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
