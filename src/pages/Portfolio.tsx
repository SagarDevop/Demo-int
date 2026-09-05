import React, { useState } from "react";
import Image from "@/components/Image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import ConsultationModal from "@/components/ConsultationModal";
import ProjectGalleryModal from "@/components/ProjectGalleryModal";
import CtaSection from "@/components/CtaSection";
import SEO from "@/components/SEO";
import { Eye, MapPin, ArrowUpRight } from "lucide-react";

export default function Portfolio() {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);
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

  const categories = ["All", "Residential Villa", "Luxury Penthouse", "Corporate Office", "Modular Kitchen", "Commercial Retail"];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <main className="min-h-screen bg-[#F8F7F5] flex flex-col justify-between selection:bg-[#111111] selection:text-white">
      <SEO
        title="Luxury Interior Design Portfolio | 4 Lotus Projects Delhi-NCR"
        description="Browse completed luxury residences, villas, duplexes, penthouses, and corporate interiors designed by 4 Lotus Interior across Delhi, Janakpuri, Dwarka, and South Delhi."
        keywords="interior design portfolio delhi, luxury villa interiors dwarka, south delhi interior projects, modern living room designs delhi, architectural interior gallery"
        ogImage="https://4lotusinterior.in/assets/curved_sofa_project.jpg"
      />

      <Navbar
        onOpenConsultation={() => setConsultationOpen(true)}
        onOpenProjects={() => setGalleryOpen(true)}
      />
      
      {/* Page Header */}
      <PageHeader
        eyebrow="ARCHITECTURAL PORTFOLIO & CASE STUDIES"
        title="Curated Work & Living Spaces"
        description="Explore our executed residential villas, luxury penthouses, corporate offices, and bespoke modular kitchens across Delhi-NCR."
        breadcrumbs={[{ label: "Home", href: "/" }]}
      />

      {/* Category Filter */}
      <section className="w-full pt-12 pb-20 px-4 md:px-10 max-w-[1440px] mx-auto">
        <div className="flex flex-wrap items-center gap-2 mb-12 border-b border-black/[0.08] pb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 text-xs font-semibold uppercase tracking-wider rounded-full transition-all ${
                activeCategory === cat
                  ? "bg-black text-white shadow-sm"
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
              className="bg-white border border-black/[0.08] rounded-[4px] overflow-hidden flex flex-col justify-between group card-hover-effect"
            >
              {/* Image Preview with Hover Action */}
              <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
                <Image
                  src={proj.image}
                  alt={proj.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md text-white text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full">
                  {proj.category}
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md text-black text-[11px] font-mono font-bold px-2.5 py-1 rounded-full">
                  {proj.area}
                </div>
              </div>

              {/* Content Details */}
              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex items-center gap-1.5 text-xs text-[#777777]">
                  <MapPin className="w-3.5 h-3.5 text-black" />
                  <span>{proj.location}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold uppercase text-[#111111] group-hover:text-amber-800 transition-colors">
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
                    onClick={() => setGalleryOpen(true)}
                    className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-black hover:opacity-70 transition-opacity"
                  >
                    <Eye className="w-4 h-4" />
                    <span>View Project Drawings & Specs</span>
                  </button>

                  <button
                    onClick={() => setConsultationOpen(true)}
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

      {/* CTA Section */}
      <CtaSection onOpenConsultation={() => setConsultationOpen(true)} />

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
      />

      <ProjectGalleryModal
        isOpen={galleryOpen}
        onClose={() => setGalleryOpen(false)}
        onOpenConsultation={() => setConsultationOpen(true)}
      />
    </main>
  );
}
