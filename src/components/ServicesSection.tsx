import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

interface ServicesSectionProps {
  onOpenConsultation: () => void;
}

export default function ServicesSection({ onOpenConsultation }: ServicesSectionProps) {
  const [activeTab, setActiveTab] = useState<"turnkey" | "residential" | "commercial">("turnkey");

  // Exact word-for-word turnkey solutions from https://4lotusinterior.in/
  const turnkeySolutions = [
    {
      num: "01",
      title: "Civil Works, Masonry & Plastering",
      desc: "Masonry & Plastering, RCC Works, Screeding, and all types of Flooring/Cladding (Granite, Marble, Vitrified Tiles).",
      tag: "Structural",
    },
    {
      num: "02",
      title: "Plumbing & Sanitary Lines",
      desc: "Complete Fresh Water & Sanitary Line installation, along with high-quality Sanitary Fixtures & Luxury Bath Accessories.",
      tag: "Plumbing",
    },
    {
      num: "03",
      title: "Electrical & Smart Lighting",
      desc: "Internal Electrification (Lighting, Power Outlets, DBs), External Electrification (HT Sub-stations, DG sets), and comprehensive electrical fittings.",
      tag: "Electrical",
    },
    {
      num: "04",
      title: "False Ceiling Solutions",
      desc: "Modular Grid, Gypsum Board, POP Decorative, Metal, and Wooden/Glazed Architectural Ceilings.",
      tag: "Ceilings",
    },
    {
      num: "05",
      title: "Joinery, Carpentry & Storage Units",
      desc: "Wood/Gypsum Partitions, Paneling, Flush Doors, Custom Furniture, Storage Units, and Built-in Wardrobe Cabinets.",
      tag: "Carpentry",
    },
    {
      num: "06",
      title: "Flooring & Architectural Surfaces",
      desc: "False Flooring, Carpets, Hardwood & Engineered Wooden Flooring, Luxury Vinyl, Epoxy, and Imported Stone (Granite/Marble).",
      tag: "Flooring",
    },
    {
      num: "07",
      title: "Fabrication & Structural MS",
      desc: "MS Structures, Structural Roofing, Stainless Steel & Aluminium Grills, Glass Railings, and Commercial Rolling Shutters.",
      tag: "Fabrication",
    },
    {
      num: "08",
      title: "HVAC & Ventilation Engineering",
      desc: "Comfort Air-conditioning (Split, Ductable, VRV), Precision AC for Server Rooms, and Office & Toilet Ventilation Systems.",
      tag: "HVAC",
    },
    {
      num: "09",
      title: "Architectural Glass Works",
      desc: "Toughened Glass Partitions, Lacquered Glass, Anti-reflective Glazing, and Custom Painted Glass solutions.",
      tag: "Glass",
    },
    {
      num: "10",
      title: "Data, Networking & Server Rooms",
      desc: "Structured Cabling (Cat-6), Server Room Design, Rack Setup, and Wireless Enterprise Network solutions.",
      tag: "IT & Data",
    },
    {
      num: "11",
      title: "Fire Safety & Electronic Security",
      desc: "Fire Alarm Systems, Hydrants, Sprinklers, FM-200 Suppression, Biometric Access Control, and Internal/External CCTV Surveillance.",
      tag: "Security",
    },
    {
      num: "12",
      title: "Finishing Touches & Artistry",
      desc: "Painting, Wall Art, Polishing (Melamine/PU), Texture Finishing, Commercial Signage, Glass Blocks, Indoor Waterfalls, and Artifacts.",
      tag: "Finishes",
    },
  ];

  const residentialSectors = [
    {
      num: "01",
      title: "Apartment & Flat Interiors",
      desc: "Transform your apartment into a dream home with smart layouts, modular storage, and warm minimalist elegance.",
      tag: "Apartments",
    },
    {
      num: "02",
      title: "Luxury Bungalows & Villas",
      desc: "Redefining luxury living in Delhi-NCR bungalows with expansive floor plans, custom joinery, and private lounges.",
      tag: "Villas",
    },
    {
      num: "03",
      title: "Penthouses & Farmhouse Estates",
      desc: "Luxurious farmhouse interiors and penthouse retreats designed as serene escapes with bespoke stone and landscape integration.",
      tag: "Farmhouses",
    },
    {
      num: "04",
      title: "Modular Kitchen Remodeling",
      desc: "Chef-grade modular kitchens with German soft-close fittings, granite/quartz countertops, and functional workflow zoning.",
      tag: "Kitchens",
    },
    {
      num: "05",
      title: "Luxury Bathroom Sanctuary",
      desc: "Your dream bathroom awaits: spa-like wet rooms, concealed cisterns, floating vanities, and ambient lighting.",
      tag: "Bathrooms",
    },
    {
      num: "06",
      title: "Masterful Furniture Creation",
      desc: "In-house manufacturing of bespoke solid wood furniture, dining suites, lounge chairs, and upholstered headboards.",
      tag: "Furniture",
    },
  ];

  const commercialSectors = [
    {
      num: "01",
      title: "Corporate Offices & IT Workspaces",
      desc: "Strategic workplace environments that optimize square footage, foster collaboration, and boost employee productivity.",
      tag: "Corporate",
    },
    {
      num: "02",
      title: "Retail Shops & Commercial Showrooms",
      desc: "Designing commercial spaces that drive success: storytelling layouts that maximize merchandise visibility and sales.",
      tag: "Retail",
    },
    {
      num: "03",
      title: "Healthcare Clinics & Hospitals",
      desc: "Designing patient-centric healing spaces that balance clinical sterility standards with soothing, comforting aesthetics.",
      tag: "Healthcare",
    },
    {
      num: "04",
      title: "Hotels, Restaurants & Pubs",
      desc: "Modern hotel and dining interiors engineered for high footfall, acoustic balance, and memorable culinary ambiance.",
      tag: "Hospitality",
    },
    {
      num: "05",
      title: "Banquet Halls & Event Spaces",
      desc: "Create unforgettable event spaces in Delhi-NCR with grand architectural scale, illumination, and flexible staging.",
      tag: "Banquet",
    },
    {
      num: "06",
      title: "Gyms, Salons & Play Schools",
      desc: "High-performance gym interiors, luxury beauty salons, and playful, safe children's educational centers.",
      tag: "Wellness",
    },
  ];

  const currentList =
    activeTab === "turnkey"
      ? turnkeySolutions
      : activeTab === "residential"
      ? residentialSectors
      : commercialSectors;

  return (
    <section id="services" className="w-full py-16 md:py-24 px-4 md:px-10 max-w-[1440px] mx-auto border-t border-black/[0.08]">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
        <div>
          <span className="text-xs font-semibold tracking-[0.2em] text-[#666666] uppercase block mb-3">
            TURNKEY INTERIOR SOLUTIONS
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#111111] uppercase">
            We Handle Everything: Design & Renovation in Delhi-NCR
          </h2>
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <p className="max-w-md text-xs sm:text-sm text-[#555555] font-light leading-relaxed">
            Comprehensive interior makeover and renovation services in Delhi-NCR, Gurgaon & Noida for residential, retail, commercial, corporate, and hospitality sectors.
          </p>
          <Link
            to="/services"
            className="text-xs font-bold uppercase tracking-wider text-black border-b border-black pb-1 hover:opacity-70 transition-opacity whitespace-nowrap"
          >
            All 24 Scopes ↗
          </Link>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-8 border-b border-black/[0.06] pb-4">
        {[
          { key: "turnkey", label: "Turnkey Civil & Technical Execution (12)" },
          { key: "residential", label: "Residential, Villas & Kitchens (6)" },
          { key: "commercial", label: "Commercial, Retail & Healthcare (6)" },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key as any)}
            className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-full transition-all ${
              activeTab === tab.key
                ? "bg-black text-white shadow-sm"
                : "bg-white text-[#555555] border border-black/10 hover:border-black/30 hover:text-black"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentList.map((svc, i) => (
          <div
            key={i}
            className="group bg-white border border-black/[0.08] p-7 md:p-8 rounded-[4px] flex flex-col justify-between min-h-[250px] card-hover-effect"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold tracking-widest text-[#999999] font-mono">
                  {svc.num}
                </span>
                <span className="text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full bg-[#F5F4F0] text-[#444444] font-medium border border-black/[0.04]">
                  {svc.tag}
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-[#111111] tracking-tight group-hover:text-amber-800 transition-colors mb-2">
                {svc.title}
              </h3>
              <p className="text-xs sm:text-[13px] text-[#666666] font-light leading-relaxed">
                {svc.desc}
              </p>
            </div>

            <div className="pt-5 mt-4 border-t border-black/[0.05]">
              <button
                onClick={onOpenConsultation}
                className="flex items-center gap-1 text-xs font-semibold text-black uppercase tracking-wider group-hover:gap-2 transition-all"
              >
                <span>Consult For This Scope</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
