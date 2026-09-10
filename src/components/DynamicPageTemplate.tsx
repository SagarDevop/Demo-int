import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SEO from "@/components/SEO";
import ConsultationModal from "@/components/ConsultationModal";
import { PageInventoryItem, pageInventory } from "@/data/pageInventory";
import { richPageDataMap, RichPageData, getContextualVisuals } from "@/data/richPageData";
import { getPageBySlug } from "@/data/contentLoader";
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
  ChevronDown,
  Maximize2,
  X,
  FileCheck,
  Sparkles,
  Quote,
  Layers,
  Wrench,
  Palette,
  Home as HomeIcon,
  ShieldCheck,
} from "lucide-react";

interface DynamicPageTemplateProps {
  page: PageInventoryItem;
}

export default function DynamicPageTemplate({ page }: DynamicPageTemplateProps) {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [activeTabIdx, setActiveTabIdx] = useState(0);
  const [openAccordionIdx, setOpenAccordionIdx] = useState<number | null>(0);
  const [lightboxImg, setLightboxImg] = useState<{ src: string; title: string } | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    scope: page.label,
    message: "",
  });

  const pageData = getPageBySlug(page.slug);
  const richData: any = pageData || richPageDataMap[page.slug];
  const visuals = getContextualVisuals(page.slug, page.label);

  if (!richData) {
    return (
      <main className="min-h-screen bg-[#F8F7F5] flex flex-col justify-center items-center p-12 text-center">
        <h1 className="text-2xl font-bold text-red-600 uppercase tracking-tight">Content Not Found</h1>
        <p className="text-sm text-neutral-600 mt-2">
          No JSON content found for slug: <code className="font-mono bg-neutral-200 px-1.5 py-0.5 rounded">{page.slug}</code>
        </p>
        <Link to="/" className="mt-6 px-6 py-2.5 bg-[#111111] text-white text-xs uppercase font-semibold tracking-wider rounded">
          Return Home
        </Link>
      </main>
    );
  }

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

        {/* 1. HERO SECTION WITH AUTHENTIC PHOTOGRAPHY & HIGHLIGHTS */}
        {richData ? (
          <section className="bg-white border border-black/[0.08] rounded-[8px] p-6 sm:p-10 lg:p-14 shadow-sm space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Hero Image */}
              <div className="lg:col-span-5 relative group overflow-hidden rounded-[6px] border border-black/10 bg-[#FAF9F6] aspect-[4/5] sm:aspect-[3/4] max-h-[550px]">
                <img
                  src={richData.hero.image || visuals.hero}
                  alt={richData.hero.image_alt || richData.hero.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                  onError={(e) => {
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
                  {richData.hero.subtitle && (
                    <p className="text-sm font-semibold uppercase tracking-wider text-amber-900">
                      {richData.hero.subtitle}
                    </p>
                  )}
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

            {/* Sub Feature Cards (e.g. Expert Design Consultation & Professional Decorators in Micro-Locations) */}
            {richData.hero_sub_cards && richData.hero_sub_cards.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-black/[0.08]">
                {richData.hero_sub_cards.map((sc, idx) => (
                  <div
                    key={idx}
                    className="p-6 bg-[#FAF9F6] border border-black/[0.08] rounded-[6px] space-y-2 hover:border-black/25 transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 bg-white rounded-full border border-black/10">
                        {idx === 0 ? (
                          <Compass className="w-4 h-4 text-amber-800" />
                        ) : (
                          <Palette className="w-4 h-4 text-amber-800" />
                        )}
                      </div>
                      <h3 className="text-sm font-bold uppercase text-[#111111] tracking-wide">
                        {sc.title}
                      </h3>
                    </div>
                    <p className="text-xs text-[#555555] font-light leading-relaxed pl-9">
                      {sc.description}
                    </p>
                  </div>
                ))}
              </div>
            )}
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
                      {richData.design_concept.links.map((linkItem, idx) => {
                        const labelText = typeof linkItem === "string" ? linkItem : (linkItem as any).label || "";
                        return (
                          <span
                            key={idx}
                            className="px-3 py-1.5 bg-[#FAF9F6] border border-black/10 rounded-[4px] text-[11px] font-medium text-[#333333]"
                          >
                            {labelText}
                          </span>
                        );
                      })}
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

        {/* 2A. ADVANTAGES (e.g. Bathroom Remodelers) */}
        {richData?.advantages && (
          <section className="bg-white border border-black/[0.08] rounded-[8px] p-6 sm:p-10 lg:p-14 shadow-sm space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {richData.advantages.image && (
                <div className="lg:col-span-5 rounded-[6px] overflow-hidden border border-black/10 aspect-[4/3]">
                  <img
                    src={richData.advantages.image}
                    alt={richData.advantages.image_alt || richData.advantages.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              )}
              <div className={richData.advantages.image ? "lg:col-span-7 space-y-6" : "lg:col-span-12 space-y-6"}>
                <div className="space-y-2">
                  <span className="text-xs font-semibold tracking-[0.25em] text-[#888888] uppercase block">
                    PROVEN ADVANTAGE
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold uppercase text-[#111111]">
                    {richData.advantages.title}
                  </h2>
                  {richData.advantages.subtitle && (
                    <p className="text-xs sm:text-sm text-[#666666]">{richData.advantages.subtitle}</p>
                  )}
                </div>
                {richData.advantages.items && (
                  <div className="space-y-4">
                    {richData.advantages.items.map((adv: any, idx: number) => (
                      <div key={idx} className="p-5 bg-[#FAF9F6] border border-black/[0.06] rounded-[6px] space-y-1">
                        <h3 className="text-sm font-bold uppercase text-[#111111] flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-amber-800" />
                          {adv.title}
                        </h3>
                        <p className="text-xs text-[#555555] font-light leading-relaxed pl-6">{adv.description}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* 2B. EXPERTISE (e.g. Bathroom Remodelers & Furniture Manufacturer) */}
        {richData?.expertise && (
          <section className="bg-white border border-black/[0.08] rounded-[8px] p-6 sm:p-10 lg:p-14 shadow-sm space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className={richData.expertise.image ? "lg:col-span-7 space-y-6" : "lg:col-span-12 space-y-6"}>
                <div className="space-y-2">
                  <span className="text-xs font-semibold tracking-[0.25em] text-[#888888] uppercase block">
                    SPECIALIZED CRAFTSMANSHIP
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold uppercase text-[#111111]">
                    {richData.expertise.title}
                  </h2>
                  {richData.expertise.subtitle && (
                    <p className="text-xs sm:text-sm text-[#666666]">{richData.expertise.subtitle}</p>
                  )}
                </div>
                {richData.expertise.items && (
                  <div className="space-y-4">
                    {richData.expertise.items.map((exp: any, idx: number) => (
                      <div key={idx} className="p-5 bg-[#FAF9F6] border border-black/[0.06] rounded-[6px] space-y-1">
                        <div className="flex items-center gap-2.5">
                          <span className="w-6 h-6 rounded-full bg-black text-white text-[11px] font-bold flex items-center justify-center shrink-0">
                            {exp.number || idx + 1}
                          </span>
                          <h3 className="text-sm font-bold uppercase text-[#111111]">{exp.title}</h3>
                        </div>
                        <p className="text-xs text-[#555555] font-light leading-relaxed pl-8">{exp.description}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              {richData.expertise.image && (
                <div className="lg:col-span-5 rounded-[6px] overflow-hidden border border-black/10 aspect-[4/3]">
                  <img
                    src={richData.expertise.image}
                    alt={richData.expertise.image_alt || richData.expertise.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              )}
            </div>
          </section>
        )}

        {/* 2C. WE DO (e.g. Kitchen Remodelers) */}
        {richData?.we_do && (
          <section className="bg-white border border-black/[0.08] rounded-[8px] p-6 sm:p-10 lg:p-14 shadow-sm space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className={richData.we_do.image ? "lg:col-span-7 space-y-6" : "lg:col-span-12 space-y-6"}>
                <div className="space-y-2">
                  <span className="text-xs font-semibold tracking-[0.25em] text-[#888888] uppercase block">
                    WHAT WE DO
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold uppercase text-[#111111]">{richData.we_do.title}</h2>
                  {richData.we_do.subtitle && <p className="text-xs sm:text-sm text-[#666666]">{richData.we_do.subtitle}</p>}
                </div>
                {richData.we_do.items && (
                  <div className="space-y-4">
                    {richData.we_do.items.map((it: any, idx: number) => (
                      <div key={idx} className="p-5 bg-[#FAF9F6] border border-black/[0.06] rounded-[6px] space-y-1">
                        <div className="flex items-center gap-2.5">
                          <span className="w-6 h-6 rounded-full bg-black text-white text-[11px] font-bold flex items-center justify-center shrink-0">
                            {it.number || idx + 1}
                          </span>
                          <h3 className="text-sm font-bold uppercase text-[#111111]">{it.title}</h3>
                        </div>
                        <p className="text-xs text-[#555555] font-light leading-relaxed pl-8">{it.description}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              {richData.we_do.image && (
                <div className="lg:col-span-5 rounded-[6px] overflow-hidden border border-black/10 aspect-[4/3]">
                  <img src={richData.we_do.image} alt={richData.we_do.image_alt || richData.we_do.title} className="w-full h-full object-cover" loading="lazy" />
                </div>
              )}
            </div>
          </section>
        )}

        {/* 2D. KITCHEN RECONSTRUCTION */}
        {richData?.reconstruction && (
          <section className="bg-white border border-black/[0.08] rounded-[8px] p-6 sm:p-10 lg:p-14 shadow-sm space-y-8">
            <div className="space-y-2">
              <span className="text-xs font-semibold tracking-[0.25em] text-[#888888] uppercase block">
                RECONSTRUCTION & REMODELING
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold uppercase text-[#111111]">{richData.reconstruction.title}</h2>
              {richData.reconstruction.subtitle && <p className="text-xs sm:text-sm text-[#666666]">{richData.reconstruction.subtitle}</p>}
            </div>
            {richData.reconstruction.items && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {richData.reconstruction.items.map((rc: any, idx: number) => (
                  <div key={idx} className="p-6 bg-[#FAF9F6] border border-black/[0.06] rounded-[6px] space-y-2">
                    <h3 className="text-sm font-bold uppercase text-[#111111]">{rc.title}</h3>
                    <p className="text-xs text-[#555555] font-light leading-relaxed">{rc.description}</p>
                  </div>
                ))}
              </div>
            )}
          </section>
        )}

        {/* 2E. KITCHEN TYPES TIMELINE */}
        {richData?.kitchen_types_timeline && (
          <section className="space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-semibold tracking-[0.25em] text-[#888888] uppercase block">
                MODULAR SPECS
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold uppercase text-[#111111]">{richData.kitchen_types_timeline.title}</h2>
              {richData.kitchen_types_timeline.subtitle && <p className="text-xs sm:text-sm text-[#666666]">{richData.kitchen_types_timeline.subtitle}</p>}
            </div>
            {richData.kitchen_types_timeline.items && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {richData.kitchen_types_timeline.items.map((kt: any, idx: number) => (
                  <div key={idx} className="p-6 bg-white border border-black/[0.08] rounded-[8px] space-y-2 shadow-sm">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-900 block">Type 0{idx + 1}</span>
                    <h3 className="text-base font-bold uppercase text-[#111111]">{kt.title}</h3>
                    <p className="text-xs text-[#555555] font-light leading-relaxed">{kt.description}</p>
                  </div>
                ))}
              </div>
            )}
          </section>
        )}

        {/* 2F. PARTNER BANNER (Furniture Manufacturer) */}
        {richData?.partner_banner && (
          <section className="bg-[#111111] text-white rounded-[8px] p-8 sm:p-12 text-center space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-white">{richData.partner_banner.title}</h2>
            <p className="text-xs sm:text-sm text-neutral-300 font-light max-w-3xl mx-auto leading-relaxed">{richData.partner_banner.description}</p>
          </section>
        )}

        {/* 2G. STYLES SLIDER (Furniture Manufacturer) */}
        {richData?.styles_slider && richData.styles_slider.length > 0 && (
          <section className="space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-semibold tracking-[0.25em] text-[#888888] uppercase block">
                DESIGN VOCABULARY
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold uppercase text-[#111111]">
                Furniture Styles & Aesthetics
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {richData.styles_slider.map((st: any, idx: number) => (
                <div key={idx} className="bg-white border border-black/[0.08] rounded-[8px] overflow-hidden shadow-sm flex flex-col group">
                  <div className="aspect-[16/10] overflow-hidden bg-neutral-100">
                    <img src={st.image} alt={st.image_alt || st.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                  </div>
                  <div className="p-6 space-y-1">
                    <h3 className="text-base font-bold uppercase text-[#111111]">{st.title}</h3>
                    {st.subtitle && <p className="text-xs text-[#555555] font-light leading-relaxed">{st.subtitle}</p>}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 2H. COMMERCIAL TYPOLOGIES (e.g. Commercial Interior) */}
        {richData?.typologies && richData.typologies.length > 0 && (
          <section className="space-y-8">
            <div className="text-center max-w-3xl mx-auto space-y-2">
              <span className="text-xs font-semibold tracking-[0.25em] text-[#888888] uppercase block">
                COMMERCIAL DOMAINS
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold uppercase text-[#111111]">
                Commercial Typologies & Sectors
              </h2>
              <p className="text-xs sm:text-sm text-[#666666]">
                Specialized commercial architecture and turnkey fitouts tailored for operational efficiency and footfall engagement.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {richData.typologies.map((t: any, idx: number) => (
                <div key={idx} className="bg-white border border-black/[0.08] rounded-[8px] overflow-hidden shadow-sm flex flex-col group hover:border-black/25 transition-all">
                  {t.image && (
                    <div className="aspect-[16/10] bg-neutral-100 overflow-hidden relative">
                      <img src={t.image} alt={t.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                    </div>
                  )}
                  <div className="p-6 space-y-2 flex-1 flex flex-col justify-between">
                    <div className="space-y-1">
                      <h3 className="text-base font-bold uppercase text-[#111111]">{t.title}</h3>
                      {t.subtitle && <p className="text-xs font-semibold uppercase text-amber-900">{t.subtitle}</p>}
                      <p className="text-xs text-[#555555] font-light leading-relaxed pt-1">{t.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 2I. SPECIALIZED SERVICES (e.g. Commercial Interior) */}
        {richData?.specialized_services && richData.specialized_services.length > 0 && (
          <section className="bg-white border border-black/[0.08] rounded-[8px] p-6 sm:p-10 lg:p-14 shadow-sm space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-semibold tracking-[0.25em] text-[#888888] uppercase block">
                SPECIALIZED SCOPE
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold uppercase text-[#111111]">
                Specialized Commercial Services
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {richData.specialized_services.map((ss: any, idx: number) => (
                <div key={idx} className="p-6 bg-[#FAF9F6] border border-black/[0.06] rounded-[6px] space-y-2">
                  <span className="w-7 h-7 rounded-full bg-black text-white text-xs font-bold flex items-center justify-center shrink-0">
                    {ss.step || idx + 1}
                  </span>
                  <h3 className="text-sm font-bold uppercase text-[#111111] pt-1">{ss.title}</h3>
                  <p className="text-xs text-[#555555] font-light leading-relaxed">{ss.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 2J. RESIDENTIAL TYPOLOGIES (e.g. Residential Interior) */}
        {richData?.residential_categories && richData.residential_categories.length > 0 && (
          <section className="space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-semibold tracking-[0.25em] text-[#888888] uppercase block">
                RESIDENTIAL DOMAINS
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold uppercase text-[#111111]">
                Residential Typologies
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {richData.residential_categories.map((rc: any, idx: number) => (
                <div key={idx} className="bg-white border border-black/[0.08] rounded-[8px] overflow-hidden shadow-sm flex flex-col group hover:border-black/30 transition-all">
                  {rc.image && (
                    <div className="aspect-[16/10] overflow-hidden bg-neutral-100">
                      <img src={rc.image} alt={rc.image_alt || rc.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                    </div>
                  )}
                  <div className="p-6 space-y-2 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-sm font-bold uppercase text-[#111111]">{rc.name}</h3>
                      {rc.tagline && <p className="text-[11px] font-semibold text-amber-900 uppercase">{rc.tagline}</p>}
                      <p className="text-xs text-[#555555] font-light leading-relaxed pt-1">{rc.description}</p>
                    </div>
                    {rc.link && (
                      <div className="pt-3 border-t border-black/[0.06] flex items-center justify-between text-[10px] font-bold text-neutral-600 uppercase">
                        <Link to={rc.link} className="flex items-center gap-1 hover:text-black">
                          <span>Explore {rc.name}</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 2K. FOUR STEPS (e.g. Residential Interior) */}
        {richData?.four_steps && (
          <section className="bg-white border border-black/[0.08] rounded-[8px] p-6 sm:p-10 lg:p-14 shadow-sm space-y-8">
            <div className="space-y-2">
              <span className="text-xs font-semibold tracking-[0.25em] text-[#888888] uppercase block">
                METHODICAL EXECUTION
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold uppercase text-[#111111]">{richData.four_steps.title}</h2>
              {richData.four_steps.subtitle && <p className="text-xs sm:text-sm text-[#666666]">{richData.four_steps.subtitle}</p>}
            </div>
            {richData.four_steps.steps && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {richData.four_steps.steps.map((st: any, idx: number) => (
                  <div key={idx} className="p-6 bg-[#FAF9F6] border border-black/[0.06] rounded-[6px] space-y-2">
                    <span className="text-xs font-bold text-amber-900 uppercase tracking-widest block">Step {st.step || idx + 1}</span>
                    <h3 className="text-sm font-bold uppercase text-[#111111]">{st.title}</h3>
                    <p className="text-xs text-[#555555] font-light leading-relaxed">{st.description}</p>
                  </div>
                ))}
              </div>
            )}
          </section>
        )}

        {/* 2L. SERVICE PILLARS (e.g. Regional Hubs) */}
        {richData?.service_pillars && Array.isArray(richData.service_pillars) && (
          <section className="space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-semibold tracking-[0.25em] text-[#888888] uppercase block">
                REGIONAL CAPABILITIES
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold uppercase text-[#111111]">Turnkey Service Pillars</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {richData.service_pillars.map((sp: any, idx: number) => (
                <div key={idx} className="bg-white border border-black/[0.08] rounded-[8px] p-6 space-y-2 shadow-sm">
                  <h3 className="text-sm font-bold uppercase text-[#111111]">{sp.title}</h3>
                  {sp.role && <p className="text-xs font-semibold uppercase text-amber-900">{sp.role}</p>}
                  <p className="text-xs text-[#555555] font-light leading-relaxed">{sp.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 2M. LUXURY STYLE & SPECIFICATION PORTFOLIO */}
        {richData?.luxury_style && (
          <section className="bg-white border border-black/[0.08] rounded-[8px] p-6 sm:p-10 lg:p-14 shadow-sm space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-semibold tracking-[0.25em] text-[#888888] uppercase block">HIGH-END DESIGN</span>
              <h2 className="text-2xl sm:text-3xl font-bold uppercase text-[#111111]">{richData.luxury_style.title}</h2>
              {richData.luxury_style.description && <p className="text-xs sm:text-sm text-[#555555] font-light">{richData.luxury_style.description}</p>}
            </div>
            {richData.luxury_style.cards && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                {richData.luxury_style.cards.map((c: any, idx: number) => (
                  <div key={idx} className="rounded-[8px] overflow-hidden border border-black/10 aspect-[16/10] relative group">
                    <img src={c.image} alt={c.alt || c.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
                      <h3 className="text-lg font-bold text-white uppercase">{c.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        )}

        {/* 2N. COMMERCIAL SCOPE */}
        {richData?.scope && (
          <section className="bg-white border border-black/[0.08] rounded-[8px] p-6 sm:p-10 lg:p-14 shadow-sm space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-semibold tracking-[0.25em] text-[#888888] uppercase block">
                COMMERCIAL SCOPE
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold uppercase text-[#111111]">
                Planning & Execution Scope
              </h2>
              {richData.scope.statement && (
                <p className="text-xs sm:text-sm text-[#555555] font-light leading-relaxed">
                  {richData.scope.statement}
                </p>
              )}
            </div>
            {richData.scope.pillars && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                {richData.scope.pillars.map((p: any, idx: number) => (
                  <div key={idx} className="p-6 bg-[#FAF9F6] border border-black/[0.06] rounded-[6px] space-y-2">
                    <h3 className="text-sm font-bold uppercase text-[#111111]">{p.title}</h3>
                    <p className="text-xs text-[#555555] font-light leading-relaxed">{p.description}</p>
                  </div>
                ))}
              </div>
            )}
          </section>
        )}

        {/* 2P. REGIONAL EXPERTISE BREAKDOWN */}
        {richData?.expertise_breakdown && (
          <section className="bg-white border border-black/[0.08] rounded-[8px] p-6 sm:p-10 lg:p-14 shadow-sm space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-semibold tracking-[0.25em] text-[#888888] uppercase block">
                DOMAIN EXPERTISE
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold uppercase text-[#111111]">
                Comprehensive Interior & Decorator Scope
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              {richData.expertise_breakdown.residential && (
                <div className="p-6 bg-[#FAF9F6] border border-black/[0.06] rounded-[6px] space-y-2">
                  <h3 className="text-sm font-bold uppercase text-[#111111]">Residential Expertise</h3>
                  <p className="text-xs text-[#555555] font-light leading-relaxed">
                    {typeof richData.expertise_breakdown.residential === "string"
                      ? richData.expertise_breakdown.residential.replace(/^Residential Expertise:\s*/i, "")
                      : ""}
                  </p>
                </div>
              )}
              {richData.expertise_breakdown.commercial && (
                <div className="p-6 bg-[#FAF9F6] border border-black/[0.06] rounded-[6px] space-y-2">
                  <h3 className="text-sm font-bold uppercase text-[#111111]">Commercial Expertise</h3>
                  <p className="text-xs text-[#555555] font-light leading-relaxed">
                    {typeof richData.expertise_breakdown.commercial === "string"
                      ? richData.expertise_breakdown.commercial.replace(/^Commercial Expertise:\s*/i, "")
                      : ""}
                  </p>
                </div>
              )}
            </div>
          </section>
        )}

        {/* 2Q. SPECIALTIES CAROUSEL / REGIONAL DOMAINS */}
        {richData?.specialties_carousel && richData.specialties_carousel.length > 0 && (
          <section className="space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-semibold tracking-[0.25em] text-[#888888] uppercase block">
                REGIONAL SPECIALTIES
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold uppercase text-[#111111]">
                Specialized Spatial Capabilities
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {richData.specialties_carousel.map((sc: any, idx: number) => (
                <div key={idx} className="bg-white border border-black/[0.08] rounded-[8px] overflow-hidden shadow-sm flex flex-col group">
                  {sc.image && (
                    <div className="aspect-[16/10] overflow-hidden bg-neutral-100">
                      <img src={sc.image} alt={sc.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                    </div>
                  )}
                  <div className="p-6 space-y-1">
                    <h3 className="text-base font-bold uppercase text-[#111111]">{sc.title}</h3>
                    {sc.subtitle && <p className="text-xs text-[#555555] font-light leading-relaxed">{sc.subtitle}</p>}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 2R. PROJECT GALLERY SECTION */}
        {richData?.project_gallery_section && (
          <section className="space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-semibold tracking-[0.25em] text-[#888888] uppercase block">
                PROJECT SHOWCASE
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold uppercase text-[#111111]">
                {richData.project_gallery_section.title}
              </h2>
              {richData.project_gallery_section.subtitle && (
                <p className="text-xs sm:text-sm text-[#666666]">{richData.project_gallery_section.subtitle}</p>
              )}
              {richData.project_gallery_section.description && (
                <p className="text-xs text-[#555555] font-light max-w-xl mx-auto">{richData.project_gallery_section.description}</p>
              )}
            </div>
            {richData.project_gallery_section.cards && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {richData.project_gallery_section.cards.map((c: any, idx: number) => (
                  <div key={idx} className="bg-white border border-black/[0.08] rounded-[8px] overflow-hidden shadow-sm flex flex-col group hover:border-black/30 transition-all">
                    {c.image && (
                      <div className="aspect-[16/10] overflow-hidden bg-neutral-100">
                        <img src={c.image} alt={c.alt || c.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                      </div>
                    )}
                    <div className="p-6 space-y-2 flex-1 flex flex-col justify-between">
                      <h3 className="text-sm font-bold uppercase text-[#111111]">{c.title}</h3>
                      {c.link && (
                        <div className="pt-3 border-t border-black/[0.06] flex items-center justify-between text-[10px] font-bold text-neutral-600 uppercase">
                          <Link to={c.link} className="flex items-center gap-1 hover:text-black">
                            <span>View Project</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        )}

        {/* 2S. INTERIOR PHILOSOPHY & PILLARS */}
        {richData?.interior_philosophy && (
          <section className="bg-white border border-black/[0.08] rounded-[8px] p-6 sm:p-10 lg:p-14 shadow-sm space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-semibold tracking-[0.25em] text-[#888888] uppercase block">
                STRATEGIC PHILOSOPHY
              </span>
              {richData.interior_philosophy.quote && (
                <blockquote className="text-sm sm:text-base text-[#444444] font-light italic leading-relaxed border-l-2 border-amber-800 pl-4">
                  &ldquo;{richData.interior_philosophy.quote}&rdquo;
                </blockquote>
              )}
            </div>
            {richData.interior_philosophy.pillars && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                {richData.interior_philosophy.pillars.map((p: any, idx: number) => (
                  <div key={idx} className="p-6 bg-[#FAF9F6] border border-black/[0.06] rounded-[6px] space-y-2">
                    <h3 className="text-sm font-bold uppercase text-[#111111]">{p.term || p.title}</h3>
                    <p className="text-xs text-[#555555] font-light leading-relaxed">{p.description}</p>
                  </div>
                ))}
              </div>
            )}
          </section>
        )}

        {/* 2T. TEAM APPROACH / SPECIALIZED STRATEGY */}
        {richData?.team_approach && richData.team_approach.length > 0 && !richData.execution_cards && (
          <section className="space-y-8">
            <div className="space-y-2">
              <span className="text-xs font-semibold tracking-[0.25em] text-[#888888] uppercase block">
                SPECIALIZED COLLABORATION
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold uppercase text-[#111111]">
                Tailored Approach & Lifestyle Fit
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {richData.team_approach.map((card: any, idx: number) => (
                <div key={idx} className="bg-white border border-black/[0.08] rounded-[8px] overflow-hidden shadow-sm flex flex-col group">
                  {card.image && (
                    <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
                      <img src={card.image} alt={card.image_alt || card.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                      {card.role && (
                        <span className="absolute top-4 left-4 bg-black/80 text-white text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded backdrop-blur-sm">
                          {card.role}
                        </span>
                      )}
                    </div>
                  )}
                  <div className="p-6 sm:p-8 space-y-3 flex-1 flex flex-col justify-between">
                    <div className="space-y-2">
                      <h3 className="text-lg font-bold uppercase text-[#111111]">{card.title}</h3>
                      <p className="text-xs sm:text-sm text-[#555555] font-light leading-relaxed">{card.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 3. CATEGORY SHOWCASE DUO (Residential vs Commercial) */}
        {richData?.showcase_duo && richData.showcase_duo.length > 0 && (
          <section className="space-y-6">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-semibold tracking-[0.25em] text-[#888888] uppercase block">
                SPATIAL DOMAINS
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold uppercase text-[#111111]">
                Residential & Commercial Portfolios
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {richData.showcase_duo.map((item, idx) => (
                <div
                  key={idx}
                  className="relative group overflow-hidden rounded-[8px] border border-black/[0.08] bg-white aspect-[16/11] shadow-sm cursor-pointer"
                  onClick={() => setLightboxImg({ src: item.image, title: item.title })}
                >
                  <img
                    src={item.image}
                    alt={item.alt || item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = idx === 0 ? "/assets/south_delhi_villa.jpg" : "/assets/corporate_office.jpg";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6 sm:p-8">
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-widest text-neutral-300 block mb-1">
                        Domain Portfolio
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold uppercase text-white tracking-tight">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 4. INTERACTIVE LOCALITY ACCORDION (Residential & Commercial Scope) */}
        {richData?.accordion_sections && richData.accordion_sections.length > 0 && (
          <section className="bg-white border border-black/[0.08] rounded-[8px] p-6 sm:p-10 lg:p-14 shadow-sm space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-semibold tracking-[0.25em] text-[#888888] uppercase block">
                EXPANDED SERVICE SCOPE
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold uppercase text-[#111111]">
                Tailored Services in {page.label.replace(/^Interior Designers in /i, "").replace(/^Interior Designers & Decorators in /i, "")}
              </h2>
              <p className="text-xs sm:text-sm text-[#555555] font-light">
                Click each category below to review our complete residential and commercial design specifications.
              </p>
            </div>

            <div className="space-y-4 pt-4">
              {richData.accordion_sections.map((acc, idx) => {
                const isOpen = openAccordionIdx === idx;
                return (
                  <div
                    key={idx}
                    className="border border-black/[0.08] rounded-[6px] overflow-hidden transition-colors"
                  >
                    <button
                      onClick={() => setOpenAccordionIdx(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between p-5 bg-[#FAF9F6] text-left hover:bg-neutral-100 transition-colors"
                    >
                      <span className="text-sm sm:text-base font-bold uppercase text-[#111111] tracking-tight">
                        {acc.title}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-black transition-transform duration-300 ${
                          isOpen ? "transform rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="p-6 bg-white text-xs sm:text-sm text-[#444444] font-light leading-relaxed border-t border-black/[0.06] animate-fade-in">
                        {acc.content}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* 5. 4-CAPABILITY SPECIALTIES / FLIP CARDS GRID */}
        {richData?.flip_cards && richData.flip_cards.cards?.length > 0 && (
          <section className="space-y-8">
            <div className="text-center max-w-3xl mx-auto space-y-2">
              <span className="text-xs font-semibold tracking-[0.25em] text-[#888888] uppercase block">
                FULL-SERVICE PILLARS
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold uppercase text-[#111111]">
                {richData.flip_cards.title}
              </h2>
              <p className="text-xs sm:text-sm text-[#666666]">
                Comprehensive turnkey solutions executed with factory-backed precision.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {richData.flip_cards.cards.map((fc, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-black/[0.08] hover:border-black/30 rounded-[8px] overflow-hidden shadow-sm flex flex-col group transition-all"
                >
                  {fc.image && (
                    <div className="aspect-[4/3] bg-neutral-100 overflow-hidden relative">
                      <img
                        src={fc.image}
                        alt={fc.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = "/assets/card_function_first.jpg";
                        }}
                      />
                      <span className="absolute top-3 left-3 bg-black/80 text-white text-[9px] uppercase font-bold tracking-widest px-2 py-0.5 rounded">
                        Pillar 0{idx + 1}
                      </span>
                    </div>
                  )}
                  <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                    <div className="space-y-2">
                      <h3 className="text-sm font-bold uppercase text-[#111111] group-hover:text-amber-900 transition-colors">
                        {fc.title}
                      </h3>
                      <p className="text-xs text-[#555555] font-light leading-relaxed">
                        {fc.description}
                      </p>
                    </div>
                    <div className="pt-3 border-t border-black/[0.06] flex items-center justify-between text-[10px] font-bold text-neutral-600 uppercase">
                      <span>Turnkey Delivery</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-black" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 6. CORE SERVICES / STRATEGIC SPACE PLANNING */}
        {richData?.core_services && (
          Array.isArray(richData.core_services) ? (
            <section className="bg-white border border-black/[0.08] rounded-[8px] p-6 sm:p-10 lg:p-14 shadow-sm space-y-8">
              <div className="space-y-2 max-w-2xl">
                <span className="text-xs font-semibold tracking-[0.25em] text-[#888888] uppercase block">
                  CORE PILLARS
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold uppercase text-[#111111]">
                  Our Philosophy & Approach
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {richData.core_services.map((it: any, idx: number) => (
                  <div key={idx} className="p-5 bg-[#FAF9F6] border border-black/[0.06] rounded-[6px] space-y-2">
                    <span className="w-7 h-7 rounded-full bg-black text-white text-xs font-bold flex items-center justify-center shrink-0">
                      {it.number || idx + 1}
                    </span>
                    <h3 className="text-sm font-bold uppercase text-[#111111]">{it.title}</h3>
                    <p className="text-xs text-[#555555] font-light leading-relaxed">{it.description}</p>
                  </div>
                ))}
              </div>
            </section>
          ) : richData.core_services.items?.length > 0 ? (
            <section className="bg-white border border-black/[0.08] rounded-[8px] p-6 sm:p-10 lg:p-14 shadow-sm space-y-8">
              <div className="space-y-2 max-w-2xl">
                <span className="text-xs font-semibold tracking-[0.25em] text-[#888888] uppercase block">
                  METHODICAL SERVICES
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold uppercase text-[#111111]">
                  {richData.core_services.title}
                </h2>
                {richData.core_services.subtitle && (
                  <p className="text-xs sm:text-sm text-[#666666]">
                    {richData.core_services.subtitle}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {richData.core_services.image && (
                  <div className="lg:col-span-5 rounded-[6px] overflow-hidden border border-black/10 aspect-[3/4] max-h-[500px]">
                    <img
                      src={richData.core_services.image}
                      alt={richData.core_services.image_alt || "Core Services"}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "/assets/card_function_first.jpg";
                      }}
                    />
                  </div>
                )}

                <div className={richData.core_services.image ? "lg:col-span-7 space-y-5" : "lg:col-span-12 grid grid-cols-1 md:grid-cols-2 gap-6"}>
                  {richData.core_services.items.map((it: any, idx: number) => (
                    <div
                      key={idx}
                      className="p-5 bg-[#FAF9F6] border border-black/[0.06] rounded-[6px] space-y-2 hover:border-black/20 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-7 h-7 rounded-full bg-black text-white text-xs font-bold flex items-center justify-center shrink-0">
                          {it.number || idx + 1}
                        </span>
                        <h3 className="text-sm font-bold uppercase text-[#111111]">
                          {it.title}
                        </h3>
                      </div>
                      <p className="text-xs text-[#555555] font-light leading-relaxed pl-10">
                        {it.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          ) : null
        )}

        {/* 7. HOLISTIC SOLUTIONS / SERVICE PILLARS */}
        {richData?.holistic_solutions && richData.holistic_solutions.cards?.length > 0 && (
          <section className="space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-semibold tracking-[0.25em] text-[#888888] uppercase block">
                INTEGRATED EXPERTISE
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold uppercase text-[#111111]">
                {richData.holistic_solutions.title}
              </h2>
              {richData.holistic_solutions.subtitle && (
                <p className="text-xs sm:text-sm text-[#666666]">
                  {richData.holistic_solutions.subtitle}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {richData.holistic_solutions.cards.map((sol: any, idx: number) => (
                <div
                  key={idx}
                  className="bg-white border border-black/[0.08] hover:border-black/25 rounded-[8px] p-8 space-y-4 shadow-sm"
                >
                  <div className="w-12 h-12 rounded-full bg-[#FAF9F6] border border-black/10 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-amber-800" />
                  </div>
                  <h3 className="text-base font-bold uppercase text-[#111111]">
                    {sol.title}
                  </h3>
                  <p className="text-xs text-[#555555] font-light leading-relaxed">
                    {sol.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 8. EDITORIAL QUOTE BANNER */}
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

        {/* 8B. CALLOUT BANNER (When present and distinct from quote) */}
        {richData?.callout && richData.callout !== richData.quote ? (
          <section className="bg-[#111111] text-white rounded-[8px] p-8 sm:p-12 text-center relative overflow-hidden shadow-sm">
            <div className="max-w-3xl mx-auto space-y-4 relative z-10">
              <blockquote className="text-base sm:text-lg font-light italic leading-relaxed text-neutral-200">
                &ldquo;{richData.callout.replace(/^"|"$/g, "")}&rdquo;
              </blockquote>
              <div className="w-12 h-0.5 bg-amber-700/60 mx-auto mt-2" />
              <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-neutral-400 block pt-1">
                4 LOTUS INTERIOR · CLIENT COMMITMENT
              </span>
            </div>
          </section>
        ) : null}

        {/* 9. TURNKEY SERVICES CARDS (3-COLUMN GRID) */}
        {richData?.turnkey_services && !richData?.flip_cards ? (
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

        {/* 10. DESIGN-BUILD PROCESS & INTERACTIVE TABS */}
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
                  src={richData.process.image || "/assets/images/turnkey-interior-execution-process.webp"}
                  alt={richData.process.image_alt || "Design Build Process"}
                  className="w-full h-auto object-contain max-h-[350px]"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "/assets/blueprint_sketch.svg";
                  }}
                />
              </div>

              {/* Interactive Tabs */}
              <div className="lg:col-span-6 space-y-6">
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

        {/* 11. NUMBERED DESIGN PROCESS STEPS (When present) */}
        {richData?.design_process && richData.design_process.steps?.length > 0 && (
          <section className="bg-white border border-black/[0.08] rounded-[8px] p-6 sm:p-10 lg:p-14 shadow-sm space-y-8">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-semibold tracking-[0.25em] text-[#888888] uppercase block">
                SEQUENTIAL ROADMAP
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold uppercase text-[#111111]">
                {richData.design_process.title}
              </h2>
              {richData.design_process.subtitle && (
                <p className="text-xs sm:text-sm text-[#666666]">
                  {richData.design_process.subtitle}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {richData.design_process.steps.map((st, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-[#FAF9F6] border border-black/[0.06] rounded-[6px] space-y-3 hover:border-black/20 transition-colors"
                >
                  <span className="text-xs font-bold text-amber-900 uppercase tracking-widest block">
                    Step {st.step || idx + 1}
                  </span>
                  <h3 className="text-sm font-bold uppercase text-[#111111]">
                    {st.title}
                  </h3>
                  <p className="text-xs text-[#555555] font-light leading-relaxed">
                    {st.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 12. EXECUTION & TRANSFORMATION CARDS */}
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

        {/* 13. PROJECT GALLERY & LIGHTBOX */}
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

        {/* 14. DUAL-BRANCH CONTACT & FAST INQUIRY FORM */}
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
                  <span>Mon – Sat: 10:00 AM – 06:00 PM</span>
                </div>
              </div>
            </div>

            {/* Right Column: Fast Inquiry Form */}
            <div className="lg:col-span-6 bg-[#FAF9F6] border border-black/[0.08] p-6 sm:p-8 rounded-[6px]">
              {submitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold uppercase text-black">
                    Inquiry Received
                  </h3>
                  <p className="text-xs text-[#555555] max-w-sm mx-auto">
                    Thank you. Principal Architect Rashid Ali and our design team will contact you within 2 business hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2 bg-black text-white text-xs uppercase font-semibold rounded hover:bg-neutral-800 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#777777] block">
                      DROP A LINE
                    </span>
                    <h3 className="text-lg font-bold uppercase text-black">
                      Get a Turnkey Project Estimate
                    </h3>
                  </div>

                  <div className="space-y-3">
                    <input
                      type="text"
                      required
                      placeholder="Your Name *"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-black/15 rounded text-xs text-black focus:outline-none focus:border-black"
                    />
                    <input
                      type="tel"
                      required
                      placeholder="Phone Number *"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-black/15 rounded text-xs text-black focus:outline-none focus:border-black"
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-black/15 rounded text-xs text-black focus:outline-none focus:border-black"
                    />
                    <textarea
                      rows={3}
                      placeholder="Project brief, carpet area or design requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-black/15 rounded text-xs text-black focus:outline-none focus:border-black"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-[#111111] hover:bg-neutral-800 text-white text-xs uppercase tracking-wider font-bold rounded transition-colors shadow-sm"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* 15. INTERNAL ARCHITECTURAL DIRECTORY (Sibling Category Links) */}
        {siblingPages.length > 0 && (
          <section className="pt-8 border-t border-black/[0.08] space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#888888]">
                RELATED {page.parentCategory.toUpperCase()} HUBS
              </span>
              <Link
                to="/sitemap"
                className="text-xs font-semibold text-amber-900 hover:text-black flex items-center gap-1 uppercase tracking-wider"
              >
                <span>View Full Directory</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {siblingPages.slice(0, 8).map((sib) => (
                <Link
                  key={sib.slug}
                  to={`/${sib.slug}`}
                  className="p-3 bg-white border border-black/[0.06] hover:border-black rounded-[4px] text-xs font-medium text-[#333333] hover:text-black transition-colors flex items-center justify-between group shadow-sm"
                >
                  <span className="truncate">{sib.label}</span>
                  <ChevronRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-black shrink-0 ml-2" />
                </Link>
              ))}
            </div>
          </section>
        )}

      </div>

      {/* Lightbox Modal */}
      {lightboxImg && (
        <div
          onClick={() => setLightboxImg(null)}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm animate-fade-in"
        >
          <button
            onClick={() => setLightboxImg(null)}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-4xl max-h-[90vh] bg-white rounded-[8px] overflow-hidden shadow-2xl flex flex-col"
          >
            <img
              src={lightboxImg.src}
              alt={lightboxImg.title}
              className="w-full h-auto max-h-[80vh] object-contain bg-black"
            />
            <div className="p-4 bg-white border-t border-black/10 flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-black">
                {lightboxImg.title}
              </span>
              <span className="text-[10px] text-[#777777] uppercase tracking-widest font-semibold">
                4 Lotus Interior · Studio Project
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Booking Modal */}
      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
      />

      {/* Obsidian Footer */}
      <Footer />
    </main>
  );
}
