import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SEO from "@/components/SEO";
import ConsultationModal from "@/components/ConsultationModal";
import { PageInventoryItem, pageInventory } from "@/data/pageInventory";
import { richPageDataMap, RichPageData, getContextualVisuals } from "@/data/richPageData";
import {
  Building,
  Factory,
  Phone,
  ArrowUpRight,
  Compass,
  CheckCircle2,
  Clock,
  Mail,
  MapPin,
  ChevronRight,
  Maximize2,
  X,
  FileCheck,
  Sparkles,
  Quote,
} from "lucide-react";

interface DynamicPageTemplateProps {
  page: PageInventoryItem;
}

export default function DynamicPageTemplate({ page }: DynamicPageTemplateProps) {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [activeTabIdx, setActiveTabIdx] = useState(0);
  const [lightboxImg, setLightboxImg] = useState<{ src: string; title: string } | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    scope: page.label,
    message: "",
  });

  const richData: RichPageData | undefined = richPageDataMap[page.slug];
  const visuals = getContextualVisuals(page.slug, page.label);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (lightboxImg) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxImg]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  // Sibling internal links in the same parent category
  const siblingPages = pageInventory.filter(
    (item) => item.category === page.category && item.slug !== page.slug
  );

  return (
    <main className="min-h-screen bg-[#F8F7F5] flex flex-col justify-between selection:bg-[#111111] selection:text-white">
      {/* Dynamic SEO Meta Tags & Schema */}
      <SEO
        title={richData?.seo?.title || `${page.label} | 4 Lotus Interior Delhi`}
        description={richData?.seo?.meta_description || page.metaDescription}
        canonical={richData?.canonical || page.url}
      />

      {/* Fixed Luxury Navbar */}
      <Navbar onOpenConsultation={() => setConsultationOpen(true)} />

      {/* Editorial Page Header */}
      <PageHeader
        eyebrow={`4 LOTUS INTERIOR · ${page.parentCategory.toUpperCase()}`}
        title={richData?.hero?.title || page.label}
        description={richData?.hero?.description || page.metaDescription}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: page.parentCategory, href: "/services" },
          { label: page.label, href: `/${page.slug}` },
        ]}
      />

      {/* Main Content Area */}
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-10 py-12 md:py-16 space-y-16 md:space-y-24">

        {/* 1. HERO SECTION WITH AUTHENTIC PHOTOGRAPHY */}
        {richData ? (
          <section className="bg-white border border-black/[0.08] rounded-[8px] p-6 sm:p-10 lg:p-14 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Hero Image */}
              <div className="lg:col-span-5 relative group overflow-hidden rounded-[6px] border border-black/10 bg-[#FAF9F6] aspect-[4/5] sm:aspect-[3/4] max-h-[550px]">
                <img
                  src={richData.hero.image || visuals.hero}
                  alt={richData.hero.image_alt || richData.hero.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                  onError={(e) => {
                    // Contextual fallback matching page category
                    (e.target as HTMLImageElement).src = visuals.hero;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] uppercase font-bold tracking-widest bg-black/70 px-2.5 py-1 rounded backdrop-blur-sm inline-block">
                    Turnkey Architectural Project
                  </span>
                </div>
              </div>

              {/* Right Column: Hero Narrative */}
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-semibold tracking-[0.25em] text-[#888888] uppercase block">
                    SPECIALIZED SPATIAL DESIGN
                  </span>
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase text-[#111111] tracking-tight leading-tight">
                    {richData.hero.title}
                  </h1>
                </div>

                <p className="text-sm sm:text-base text-[#444444] font-light leading-relaxed">
                  {richData.hero.description}
                </p>

                <div className="pt-4 flex flex-wrap gap-4 items-center">
                  <button
                    onClick={() => setConsultationOpen(true)}
                    className="px-6 py-3.5 bg-[#111111] text-white hover:bg-neutral-800 text-xs uppercase tracking-wider font-semibold rounded-[4px] transition-all shadow-sm"
                  >
                    Book Spatial Consultation
                  </button>
                  <a
                    href="tel:+919810698082"
                    className="px-6 py-3.5 border border-black/15 hover:border-black text-[#111111] text-xs uppercase tracking-wider font-semibold rounded-[4px] transition-all flex items-center gap-2"
                  >
                    <Phone className="w-3.5 h-3.5 text-amber-800" />
                    <span>+91 98106 98082</span>
                  </a>
                </div>

                {/* Quick Trust Highlights */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-6 border-t border-black/[0.08] text-xs text-[#555555]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-800 shrink-0" />
                    <span>In-House Millwork</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-800 shrink-0" />
                    <span>3D CAD Visualization</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-800 shrink-0" />
                    <span>Single Window MEP</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : null}

        {/* 2. DESIGN CONCEPT & CONSULTANT SPECIALIZATIONS */}
        {richData?.design_concept ? (
          <section className="bg-white border border-black/[0.08] rounded-[8px] p-6 sm:p-10 lg:p-14 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Concept Copy & Pill Links */}
              <div className="lg:col-span-7 space-y-6 order-2 lg:order-1">
                <div className="space-y-2">
                  <span className="text-xs font-semibold tracking-[0.25em] text-[#888888] uppercase block">
                    CONCEPTUAL BLUEPRINT & EXECUTION
                  </span>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold uppercase text-[#111111] tracking-tight">
                    {richData.design_concept.title}
                  </h2>
                </div>

                <p className="text-xs sm:text-sm text-[#444444] font-light leading-relaxed">
                  {richData.design_concept.description}
                </p>

                {/* Related Specialized Badges */}
                {richData.design_concept.links && richData.design_concept.links.length > 0 && (
                  <div className="space-y-3 pt-4 border-t border-black/[0.08]">
                    <span className="text-[11px] uppercase font-bold tracking-wider text-black block">
                      Consultancy Scope & Expertise:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {richData.design_concept.links.map((linkText, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 bg-[#FAF9F6] border border-black/10 rounded-[4px] text-[11px] font-medium text-[#333333]"
                        >
                          {linkText}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column: Concept Image */}
              <div className="lg:col-span-5 order-1 lg:order-2 relative group overflow-hidden rounded-[6px] border border-black/10 bg-[#FAF9F6] aspect-[4/5] sm:aspect-[3/4] max-h-[550px]">
                <img
                  src={richData.design_concept.image || visuals.concept}
                  alt={richData.design_concept.image_alt || richData.design_concept.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = visuals.concept;
                  }}
                />
              </div>
            </div>
          </section>
        ) : null}

        {/* 3. EDITORIAL QUOTE BANNER */}
        {richData?.quote ? (
          <section className="bg-[#111111] text-white rounded-[8px] p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden shadow-sm">
            <div className="max-w-3xl mx-auto space-y-4 relative z-10">
              <Quote className="w-8 h-8 mx-auto text-amber-500/60" />
              <blockquote className="text-base sm:text-xl lg:text-2xl font-light italic leading-relaxed tracking-wide text-neutral-200">
                &ldquo;{richData.quote.replace(/^"|"$/g, "")}&rdquo;
              </blockquote>
              <div className="w-16 h-0.5 bg-amber-700/60 mx-auto mt-4" />
              <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-neutral-400 block pt-2">
                4 LOTUS INTERIOR · PRINCIPAL DESIGN PHILOSOPHY
              </span>
            </div>
          </section>
        ) : null}

        {/* 4. TURNKEY SERVICES CARDS (3-COLUMN GRID) */}
        {richData?.turnkey_services ? (
          <section className="space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-semibold tracking-[0.25em] text-[#888888] uppercase block">
                COMPREHENSIVE CAPABILITIES
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold uppercase text-[#111111]">
                {richData.turnkey_services.title}
              </h2>
              {richData.turnkey_services.subtitle && (
                <p className="text-xs sm:text-sm text-[#666666]">
                  {richData.turnkey_services.subtitle}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {richData.turnkey_services.cards.map((card, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-black/[0.08] hover:border-black/25 rounded-[8px] p-8 space-y-5 transition-all hover:shadow-md group flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    {/* Authentic Icon Badge */}
                    <div className="w-14 h-14 rounded-full bg-[#FAF9F6] border border-black/10 flex items-center justify-center p-2.5 overflow-hidden">
                      {card.icon ? (
                        <img
                          src={card.icon}
                          alt={card.title}
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.display = "none";
                          }}
                        />
                      ) : (
                        <Sparkles className="w-6 h-6 text-amber-800" />
                      )}
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-lg font-bold uppercase text-[#111111] group-hover:text-amber-900 transition-colors">
                        {card.title}
                      </h3>
                      {card.subtitle && (
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-[#777777] block">
                          {card.subtitle}
                        </span>
                      )}
                    </div>

                    <p className="text-xs text-[#555555] font-light leading-relaxed">
                      {card.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-black/[0.06] flex items-center justify-between text-[11px] font-semibold text-black uppercase">
                    <span>Turnkey Solution</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-black transition-colors" />
                  </div>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {/* 5. DESIGN-BUILD PROCESS & INTERACTIVE TABS */}
        {richData?.process ? (
          <section className="bg-white border border-black/[0.08] rounded-[8px] p-6 sm:p-10 lg:p-14 shadow-sm space-y-8">
            <div className="space-y-2 max-w-3xl">
              <span className="text-xs font-semibold tracking-[0.25em] text-[#888888] uppercase block">
                METHODICAL DELIVERY
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold uppercase text-[#111111]">
                {richData.process.title}
              </h2>
              {richData.process.subtitle && (
                <p className="text-xs sm:text-sm text-[#666666]">
                  {richData.process.subtitle}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-4">
              {/* Process Diagram Image */}
              <div className="lg:col-span-6 rounded-[6px] border border-black/10 overflow-hidden bg-[#FAF9F6] p-4 flex items-center justify-center">
                <img
                  src={richData.process.image || "https://4lotusinterior.in/assets/images/12-1204x535.webp"}
                  alt={richData.process.image_alt || "Design Build Process"}
                  className="w-full h-auto object-contain max-h-[350px]"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "/assets/blueprint_sketch.svg";
                  }}
                />
              </div>

              {/* Interactive Tabs */}
              <div className="lg:col-span-6 space-y-6">
                {/* Tab Navigation */}
                <div className="flex border-b border-black/[0.08] gap-2">
                  {richData.process.tabs.map((tab, idx) => (
                    <button
                      key={tab.id || idx}
                      onClick={() => setActiveTabIdx(idx)}
                      className={`pb-3 px-4 text-xs font-bold uppercase tracking-wider transition-all border-b-2 ${
                        activeTabIdx === idx
                          ? "border-black text-black"
                          : "border-transparent text-[#888888] hover:text-black"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Tab Content Display */}
                {richData.process.tabs[activeTabIdx] && (
                  <div className="bg-[#FAF9F6] border border-black/5 p-6 rounded-[6px] space-y-4">
                    <span className="text-xs font-bold uppercase tracking-widest text-amber-900 block">
                      Phase {activeTabIdx + 1}: {richData.process.tabs[activeTabIdx].label}
                    </span>
                    <p className="text-xs sm:text-sm text-[#444444] font-light leading-relaxed">
                      {richData.process.tabs[activeTabIdx].content}
                    </p>
                    <div className="pt-2 flex items-center gap-2 text-[11px] text-[#666666]">
                      <Clock className="w-3.5 h-3.5 text-amber-800" />
                      <span>Dedicated On-Site Project Manager Assigned</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        ) : null}

        {/* 6. EXECUTION & TRANSFORMATION CARDS */}
        {richData?.execution_cards && richData.execution_cards.length > 0 ? (
          <section className="space-y-8">
            <div className="space-y-2">
              <span className="text-xs font-semibold tracking-[0.25em] text-[#888888] uppercase block">
                PHYSICAL TRANSFORMATION
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold uppercase text-[#111111]">
                Execution & Reality
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {richData.execution_cards.map((card, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-black/[0.08] rounded-[8px] overflow-hidden shadow-sm flex flex-col group"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
                    <img
                      src={card.image || visuals.execution_cards[idx % visuals.execution_cards.length]?.image || visuals.hero}
                      alt={card.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          visuals.execution_cards[idx % visuals.execution_cards.length]?.image || visuals.hero;
                      }}
                    />
                    {card.role && (
                      <span className="absolute top-4 left-4 bg-black/80 text-white text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded backdrop-blur-sm">
                        {card.role}
                      </span>
                    )}
                  </div>

                  <div className="p-6 sm:p-8 space-y-3 flex-1 flex flex-col justify-between">
                    <div className="space-y-2">
                      <h3 className="text-lg font-bold uppercase text-[#111111]">
                        {card.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#555555] font-light leading-relaxed">
                        {card.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-black/[0.06] flex items-center gap-2 text-[11px] font-semibold text-amber-900 uppercase">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Certified Quality & Safety Handover</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {/* 7. PROJECT GALLERY & LIGHTBOX */}
        {richData?.gallery && richData.gallery.length > 0 ? (
          <section className="space-y-8">
            <div className="space-y-2">
              <span className="text-xs font-semibold tracking-[0.25em] text-[#888888] uppercase block">
                PORTFOLIO CAPTURES
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold uppercase text-[#111111]">
                Project Gallery
              </h2>
              <p className="text-xs sm:text-sm text-[#666666]">
                Click any image to inspect high-resolution finishes and spatial design details.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {richData.gallery.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => setLightboxImg({ src: item.image, title: item.title })}
                  className="relative group cursor-pointer aspect-[16/10] overflow-hidden rounded-[6px] border border-black/[0.08] bg-neutral-100 shadow-sm"
                >
                  <img
                    src={item.thumb || item.image || visuals.gallery[idx % visuals.gallery.length]?.image || visuals.hero}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        visuals.gallery[idx % visuals.gallery.length]?.image || visuals.hero;
                    }}
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Maximize2 className="w-6 h-6 text-white" />
                  </div>
                  {item.tag && (
                    <span className="absolute bottom-2.5 left-2.5 bg-black/75 text-white text-[9px] uppercase font-bold tracking-wider px-2 py-0.5 rounded backdrop-blur-sm">
                      {item.tag}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {/* 8. DUAL-BRANCH CONTACT & FAST INQUIRY FORM */}
        <section className="bg-white border border-black/[0.08] rounded-[8px] p-6 sm:p-10 lg:p-14 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Direct Branch Coordinates */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-semibold tracking-[0.25em] text-[#888888] uppercase block">
                  DELHI-NCR STUDIOS
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold uppercase text-[#111111]">
                  Connect With Our Studio
                </h2>
                <p className="text-xs sm:text-sm text-[#555555] font-light">
                  Schedule an in-person meeting or speak directly with our senior interior consultants.
                </p>
              </div>

              {/* Direct Phones */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <a
                  href="tel:+919810698082"
                  className="p-4 rounded-[6px] bg-[#FAF9F6] border border-black/10 hover:border-black transition-colors block space-y-1"
                >
                  <span className="text-[10px] uppercase font-bold text-[#777777] block">Primary Line</span>
                  <span className="text-sm font-bold text-black flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-amber-800" />
                    +91 98106 98082
                  </span>
                </a>
                <a
                  href="tel:+919811363064"
                  className="p-4 rounded-[6px] bg-[#FAF9F6] border border-black/10 hover:border-black transition-colors block space-y-1"
                >
                  <span className="text-[10px] uppercase font-bold text-[#777777] block">Secondary Line</span>
                  <span className="text-sm font-bold text-black flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-amber-800" />
                    +91 98113 63064
                  </span>
                </a>
              </div>

              {/* Physical Addresses */}
              <div className="space-y-3 pt-2">
                <div className="p-4 rounded-[6px] bg-[#FAF9F6] border border-black/5 space-y-1 text-xs">
                  <div className="flex items-center gap-2 font-bold uppercase text-black">
                    <Building className="w-4 h-4 text-amber-800 shrink-0" />
                    <span>Dwarka / Janakpuri Design Studio</span>
                  </div>
                  <p className="text-[#555555] pl-6">
                    Plot No-18, 1st Floor, Main Palam Dwarka Road, Near Dabri Police Station, South West Delhi, New Delhi-110045
                  </p>
                </div>

                <div className="p-4 rounded-[6px] bg-[#FAF9F6] border border-black/5 space-y-1 text-xs">
                  <div className="flex items-center gap-2 font-bold uppercase text-black">
                    <Factory className="w-4 h-4 text-amber-800 shrink-0" />
                    <span>Kirti Nagar Factory & Millwork</span>
                  </div>
                  <p className="text-[#555555] pl-6">
                    Plot No-57, W.H.S, A Block, 2nd Floor, Kirti Nagar Industrial Area, Timber Market, West Delhi, New Delhi-110015
                  </p>
                </div>
              </div>

              {/* Email & Timings */}
              <div className="flex flex-wrap gap-4 text-xs text-[#666666] pt-2">
                <div className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-amber-800" />
                  <span>contact@4lotusinterior.in</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-amber-800" />
                  <span>Mon - Sat | 10:00 AM - 06:00 PM</span>
                </div>
              </div>
            </div>

            {/* Right Column: Instant Inquiry Form */}
            <div className="lg:col-span-6 bg-[#FAF9F6] border border-black/10 rounded-[6px] p-6 sm:p-8 space-y-5">
              <div className="space-y-1">
                <h3 className="text-base font-bold uppercase text-black">
                  Request Spatial Consultation
                </h3>
                <p className="text-xs text-[#666666]">
                  Leave your details and our team will get back within 2 hours.
                </p>
              </div>

              {submitted ? (
                <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded text-xs space-y-1">
                  <strong>Thank you for contacting 4 Lotus Interior.</strong>
                  <p>Our senior architectural consultant will contact you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-[11px] font-semibold uppercase text-[#555555] block mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your Name"
                        className="w-full text-xs p-2.5 bg-white border border-black/15 rounded focus:outline-none focus:border-black"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-semibold uppercase text-[#555555] block mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98100 XXXXX"
                        className="w-full text-xs p-2.5 bg-white border border-black/15 rounded focus:outline-none focus:border-black"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold uppercase text-[#555555] block mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@domain.com"
                      className="w-full text-xs p-2.5 bg-white border border-black/15 rounded focus:outline-none focus:border-black"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold uppercase text-[#555555] block mb-1">
                      Project Notes / Spatial Requirements
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={`Tell us about your ${page.label} requirements, location, and preferred timeline...`}
                      className="w-full text-xs p-2.5 bg-white border border-black/15 rounded focus:outline-none focus:border-black"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-[#111111] text-white hover:bg-neutral-800 text-xs uppercase tracking-wider font-semibold rounded transition-colors"
                  >
                    Send Consultation Request
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* 9. SIBLING INTERNAL NAVIGATION LINKS */}
        {siblingPages.length > 0 && (
          <section className="bg-white border border-black/[0.08] p-8 rounded-[8px] shadow-sm space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-black border-b border-black/[0.08] pb-3">
              Related {page.parentCategory} Services Across Delhi-NCR
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 text-xs">
              {siblingPages.map((item) => (
                <Link
                  key={item.slug}
                  to={`/${item.slug}`}
                  className="p-2.5 rounded-[4px] hover:bg-[#FAF9F6] text-[#444444] hover:text-black transition-colors flex items-center justify-between border border-transparent hover:border-black/5"
                >
                  <span className="truncate">{item.label}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-50 shrink-0" />
                </Link>
              ))}
            </div>
          </section>
        )}

      </div>

      {/* Lightbox Modal */}
      {lightboxImg && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setLightboxImg(null)}
        >
          <button
            onClick={() => setLightboxImg(null)}
            className="absolute top-6 right-6 text-white hover:text-neutral-300 p-2"
          >
            <X className="w-8 h-8" />
          </button>
          <div className="max-w-5xl max-h-[85vh] flex flex-col items-center gap-3" onClick={(e) => e.stopPropagation()}>
            <img
              src={lightboxImg.src}
              alt={lightboxImg.title}
              className="max-w-full max-h-[75vh] object-contain rounded shadow-2xl"
            />
            <p className="text-white text-xs uppercase tracking-wider font-semibold">
              {lightboxImg.title}
            </p>
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer />

      {/* Consultation Modal */}
      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
      />
    </main>
  );
}
