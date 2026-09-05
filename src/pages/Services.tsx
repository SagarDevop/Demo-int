import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import ConsultationModal from "@/components/ConsultationModal";
import CtaSection from "@/components/CtaSection";
import { ArrowUpRight } from "lucide-react";

export default function Services() {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"all" | "turnkey" | "residential" | "commercial">("all");

  const turnkeyCivil = [
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
      num: "13",
      title: "Apartment & Flat Interiors",
      desc: "Transform your apartment into a dream home with smart layouts, modular storage, and warm minimalist elegance.",
      tag: "Apartments",
    },
    {
      num: "14",
      title: "Luxury Bungalows & Villas",
      desc: "Redefining luxury living in Delhi-NCR bungalows with expansive floor plans, custom joinery, and private lounges.",
      tag: "Villas",
    },
    {
      num: "15",
      title: "Penthouses & Farmhouse Estates",
      desc: "Luxurious farmhouse interiors and penthouse retreats designed as serene escapes with bespoke stone and landscape integration.",
      tag: "Farmhouses",
    },
    {
      num: "16",
      title: "Modular Kitchen Remodeling",
      desc: "Chef-grade modular kitchens with German soft-close fittings, granite/quartz countertops, and functional workflow zoning.",
      tag: "Kitchens",
    },
    {
      num: "17",
      title: "Luxury Bathroom Sanctuary",
      desc: "Your dream bathroom awaits: spa-like wet rooms, concealed cisterns, floating vanities, and ambient lighting.",
      tag: "Bathrooms",
    },
    {
      num: "18",
      title: "Masterful Furniture Creation",
      desc: "In-house manufacturing of bespoke solid wood furniture, dining suites, lounge chairs, and upholstered headboards.",
      tag: "Furniture",
    },
  ];

  const commercialSectors = [
    {
      num: "19",
      title: "Corporate Offices & IT Workspaces",
      desc: "Strategic workplace environments that optimize square footage, foster collaboration, and boost employee productivity.",
      tag: "Corporate",
    },
    {
      num: "20",
      title: "Retail Shops & Commercial Showrooms",
      desc: "Designing commercial spaces that drive success: storytelling layouts that maximize merchandise visibility and sales.",
      tag: "Retail",
    },
    {
      num: "21",
      title: "Healthcare Clinics & Hospitals",
      desc: "Designing patient-centric healing spaces that balance clinical sterility standards with soothing, comforting aesthetics.",
      tag: "Healthcare",
    },
    {
      num: "22",
      title: "Hotels, Restaurants & Pubs",
      desc: "Modern hotel and dining interiors engineered for high footfall, acoustic balance, and memorable culinary ambiance.",
      tag: "Hospitality",
    },
    {
      num: "23",
      title: "Banquet Halls & Event Spaces",
      desc: "Create unforgettable event spaces in Delhi-NCR with grand architectural scale, illumination, and flexible staging.",
      tag: "Banquet",
    },
    {
      num: "24",
      title: "Gyms, Salons & Play Schools",
      desc: "High-performance gym interiors, luxury beauty salons, and playful, safe children's educational centers.",
      tag: "Wellness",
    },
  ];

  const allServices = [...turnkeyCivil, ...residentialSectors, ...commercialSectors];

  const displayServices =
    activeTab === "turnkey"
      ? turnkeyCivil
      : activeTab === "residential"
      ? residentialSectors
      : activeTab === "commercial"
      ? commercialSectors
      : allServices;

  return (
    <main className="min-h-screen bg-[#F8F7F5] flex flex-col justify-between selection:bg-[#111111] selection:text-white">
      <Navbar onOpenConsultation={() => setConsultationOpen(true)} />

      {/* Page Header */}
      <PageHeader
        eyebrow="COMPREHENSIVE DESIGN & TURNKEY SERVICES"
        title="Interior Architecture & Execution"
        description="We handle everything: architectural planning, 3D visualization, turnkey civil & MEP engineering, modular kitchens, and bespoke furniture manufacturing across Delhi-NCR."
        breadcrumbs={[{ label: "Home", href: "/" }]}
      />

      {/* Filter Tabs Section */}
      <section className="w-full pt-12 pb-20 px-4 md:px-10 max-w-[1440px] mx-auto">
        <div className="flex flex-wrap items-center gap-2 mb-12 border-b border-black/[0.08] pb-4">
          {[
            { key: "all", label: "All 24 Services & Scopes" },
            { key: "turnkey", label: "Turnkey Civil & Technical (12)" },
            { key: "residential", label: "Residential, Villas & Kitchens (6)" },
            { key: "commercial", label: "Commercial, Retail & Healthcare (6)" },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key as any)}
              className={`px-5 py-2.5 text-xs font-semibold uppercase tracking-wider rounded-full transition-all ${
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {displayServices.map((svc, idx) => (
            <div
              key={idx}
              className="group bg-white border border-black/[0.08] p-7 md:p-8 rounded-[4px] flex flex-col justify-between min-h-[260px] card-hover-effect"
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
                  onClick={() => setConsultationOpen(true)}
                  className="flex items-center gap-1.5 text-xs font-semibold text-black uppercase tracking-wider group-hover:gap-2 transition-all"
                >
                  <span>Book Consultation For This Scope</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Turnkey Assurance Banner */}
      <section className="w-full py-16 px-4 md:px-10 max-w-[1440px] mx-auto border-t border-black/[0.08]">
        <div className="bg-[#151515] text-white p-8 md:p-12 rounded-[4px] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-3">
            <span className="text-xs font-semibold tracking-widest text-amber-300 uppercase">
              100% TURNKEY COMMITMENT
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-wide">
              Single-Window Execution with Zero Vendor Hassles
            </h2>
            <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed max-w-2xl">
              When you engage 4 Lotus Interior, you don&apos;t deal with separate civil contractors, plumbers, electricians, or carpenters. Our in-house site supervisors and Principal Architect manage the entire project from excavation to final upholstery polishing.
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
            <button
              onClick={() => setConsultationOpen(true)}
              className="w-full py-3.5 px-6 bg-white text-black text-xs font-bold uppercase tracking-wider rounded-full hover:bg-amber-200 transition-colors text-center"
            >
              Get Free Estimate & Scope Breakdown ↗
            </button>
            <a
              href="tel:09810698082"
              className="w-full py-3.5 px-6 bg-white/10 text-white text-xs font-semibold uppercase tracking-wider rounded-full hover:bg-white/20 transition-colors text-center"
            >
              Direct Architect Line: +91 98106 98082
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection onOpenConsultation={() => setConsultationOpen(true)} />

      {/* Footer */}
      <Footer />

      {/* Modal */}
      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
      />
    </main>
  );
}
