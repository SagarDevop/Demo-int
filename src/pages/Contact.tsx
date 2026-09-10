import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import ConsultationModal from "@/components/ConsultationModal";
import SEO from "@/components/SEO";
import { getPageBySlug } from "@/data/contentLoader";
import {
  Phone,
  Mail,
  Clock,
  Building,
  Factory,
  CheckCircle2,
  Compass,
  Sparkles,
  ArrowUpRight,
  Quote,
  Layers,
  MapPin,
} from "lucide-react";

export default function Contact() {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [activeTabIdx, setActiveTabIdx] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "Janakpuri / Dwarka",
    projectType: "Full Residential Villa / Flat",
    budget: "₹15 Lakh - ₹35 Lakh",
    message: "",
  });

  // Authoritative JSON content from contact-us.json
  const contactData = getPageBySlug("contact-us");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const processTabs = (contactData?.turnkey_services as any)?.cards
    ? (contactData.turnkey_services as any).cards.map((c: any, idx: number) => ({
        id: `phase-${idx}`,
        label: c.title.includes("Design") ? "Design Phase" : c.title.includes("Build") ? "Build Phase" : `Phase 0${idx + 1}`,
        content: c.description,
      }))
    : [
        {
          id: "consultation-planning",
          label: "Design Phase",
          content:
            "Consultation & Planning: We begin with a detailed client brief and site analysis, followed by layout planning, budgeting (BOQ), and material specifications. We then create conceptual designs, detailed drawings, and realistic 3D views for your approval.",
        },
        {
          id: "execution-delivery",
          label: "Build Phase",
          content:
            "Execution & Delivery: Our team manages the entire construction process, including engineering drawings, project management, quality control, and cost monitoring. We ensure a smooth execution and timely handover of your finished space.",
        },
      ];

  const pillars = Array.isArray(contactData?.core_services)
    ? contactData.core_services
    : [];

  const primaryPhone = contactData?.contact?.phones?.[0] || "+91 98106 98082";
  const secondaryPhone = contactData?.contact?.phones?.[1] || "+91 98113 63064";
  const studioAddress = contactData?.contact?.addresses?.[0] || "Plot No-18, 1st Floor, Main Palam Dwarka Road, Near Dabri Police Station, South West Delhi, New Delhi, Delhi-110045";
  const factoryAddress = contactData?.contact?.addresses?.[1] || "Plot No-57, W.h.s, A Block, 2nd Floor, Kirti Nagar Industrial Area, Timber Market, West Delhi, New Delhi, Delhi-110015";
  const contactEmail = contactData?.contact?.email || "contact@4lotusinterior.in";
  const contactTimings = contactData?.contact?.timings || "Mon - Sat | 10 AM - 06 PM";

  return (
    <main className="min-h-screen bg-[#F8F7F5] flex flex-col justify-between selection:bg-[#111111] selection:text-white">
      <SEO
        title={contactData?.seo?.title || "Contact Turnkey Design & Renovation Experts in Delhi-NCR | 4 Lotus Interior"}
        description={contactData?.seo?.meta_description || "Ready to transform your space? Contact 4 Lotus Interior for expert residential and commercial interior design, decoration, and renovation services across Delhi-NCR. Get a free consultation today."}
        canonical={contactData?.canonical || "https://4lotusinterior.in/contact-us.html"}
      />

      <Navbar onOpenConsultation={() => setConsultationOpen(true)} />

      {/* Page Header */}
      <PageHeader
        eyebrow="STUDIO CONSULTATIONS & VISITS"
        title={contactData?.hero?.title || "Contact 4 Lotus Interior"}
        description={contactData?.hero?.description || "Book an architectural spatial consultation with Principal Architect Rashid Ali at our Janakpuri Design Studio or schedule an on-site property audit."}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact Us", href: "/contact-us" }]}
      />

      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-10 py-12 md:py-16 space-y-16 md:space-y-24">

        {/* 1. HERO SECTION FROM LEGACY CONTACT PAGE */}
        <section className="bg-white border border-black/[0.08] rounded-[8px] p-6 sm:p-10 lg:p-14 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Hero Image */}
            <div className="lg:col-span-5 relative group overflow-hidden rounded-[6px] border border-black/10 bg-[#FAF9F6] aspect-[4/5] sm:aspect-[3/4] max-h-[500px]">
              <img
                src={contactData?.hero?.image || "/assets/images/contact-4-lotus-interior-studio.webp"}
                alt={contactData?.hero?.image_alt || "3D Floor Plan Design"}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="eager"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/assets/blueprint_sketch.svg";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] uppercase font-bold tracking-widest bg-black/70 px-2.5 py-1 rounded backdrop-blur-sm inline-block">
                  3D Floor Plan & Spatial Execution
                </span>
              </div>
            </div>

            {/* Hero Copy */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-semibold tracking-[0.25em] text-[#888888] uppercase block">
                  GET IN TOUCH
                </span>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase text-[#111111] tracking-tight leading-tight">
                  {contactData?.hero?.title || "Let's Build Your Dream Space Together"}
                </h1>
                <p className="text-sm font-semibold uppercase tracking-wider text-amber-900">
                  Architectural Precision & Transparent Pricing
                </p>
              </div>

              <p className="text-sm sm:text-base text-[#444444] font-light leading-relaxed">
                {contactData?.hero?.description || "We are committed to transparent, ethical business and delivering your residential or commercial project on time and within budget. Contact us today to start your journey."}
              </p>

              <div className="pt-2 flex flex-wrap gap-4 items-center">
                <button
                  onClick={() => setConsultationOpen(true)}
                  className="px-6 py-3.5 bg-[#111111] text-white hover:bg-neutral-800 text-xs uppercase tracking-wider font-semibold rounded-[4px] transition-all shadow-sm"
                >
                  Book Spatial Consultation
                </button>
                <a
                  href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
                  className="px-6 py-3.5 border border-black/15 hover:border-black text-[#111111] text-xs uppercase tracking-wider font-semibold rounded-[4px] transition-all flex items-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-800" />
                  <span>{primaryPhone}</span>
                </a>
              </div>

              {/* Four Pillar Badges */}
              <div className="pt-6 border-t border-black/[0.08] space-y-2">
                <span className="text-[11px] uppercase font-bold tracking-wider text-black block">
                  Our Core Architectural Expertise:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#555555]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-800 shrink-0" />
                    <span>Residential & Commercial Interior Design</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-800 shrink-0" />
                    <span>Full-Service Decor & Renovation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-800 shrink-0" />
                    <span>Bathroom & Kitchen Remodeling</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-800 shrink-0" />
                    <span>Custom Furniture Design & Manufacturing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. PHILOSOPHY: WE LISTEN FIRST & TURNING DREAMS INTO REALITY */}
        <section className="bg-white border border-black/[0.08] rounded-[8px] p-6 sm:p-10 lg:p-14 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 rounded-[6px] overflow-hidden border border-black/10 bg-[#FAF9F6] aspect-[16/10]">
              <img
                src="/assets/images/4-lotus-interior-studio-location-map.webp"
                alt="House Design"
                className="w-full h-full object-cover"
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/assets/card_function_first.jpg";
                }}
              />
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-4">
                <div className="p-5 bg-[#FAF9F6] border border-black/[0.06] rounded-[6px] space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-black text-white text-xs font-bold flex items-center justify-center shrink-0">
                      1
                    </span>
                    <h3 className="text-base font-bold uppercase text-[#111111]">
                      {pillars[0]?.title || "We Listen First"}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#555555] font-light leading-relaxed pl-10">
                    {pillars[0]?.description || "Your vision is our priority. We start by understanding your ideas, needs, and lifestyle before offering expert advice to achieve the best possible results."}
                  </p>
                </div>

                <div className="p-5 bg-[#FAF9F6] border border-black/[0.06] rounded-[6px] space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-black text-white text-xs font-bold flex items-center justify-center shrink-0">
                      2
                    </span>
                    <h3 className="text-base font-bold uppercase text-[#111111]">
                      {pillars[1]?.title || "Turning Dreams into Reality"}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#555555] font-light leading-relaxed pl-10">
                    {pillars[1]?.description || "We work within your budget and aspirations to create practical, beautiful designs that transform your concepts into tangible, living spaces."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. END-TO-END SOLUTIONS & FORM MEETS FUNCTION */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white border border-black/[0.08] rounded-[8px] p-8 space-y-4 shadow-sm">
            <div className="w-12 h-12 rounded-full bg-[#FAF9F6] border border-black/10 flex items-center justify-center">
              <Layers className="w-5 h-5 text-amber-800" />
            </div>
            <h3 className="text-lg font-bold uppercase text-[#111111]">
              {pillars[2]?.title || "End-to-End Interior Solutions"}
            </h3>
            <p className="text-xs sm:text-sm text-[#555555] font-light leading-relaxed">
              {pillars[2]?.description || "From initial design concepts to final construction, we handle every aspect of your residential or commercial project. Our turnkey service includes everything from architectural planning and decoration to kitchen and bathroom revamps and custom furniture."}
            </p>
          </div>

          <div className="bg-white border border-black/[0.08] rounded-[8px] p-8 space-y-4 shadow-sm">
            <div className="w-12 h-12 rounded-full bg-[#FAF9F6] border border-black/10 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-amber-800" />
            </div>
            <h3 className="text-lg font-bold uppercase text-[#111111]">
              {pillars[3]?.title || "Form Meets Function"}
            </h3>
            <p className="text-xs sm:text-sm text-[#555555] font-light leading-relaxed">
              {pillars[3]?.description || "We balance aesthetics with practicality, creating spaces that are both beautiful and purposeful. Our integrated design-build approach ensures your vision is realized flawlessly, whether it's a home, office, retail store, or hospitality venue."}
            </p>
          </div>
        </section>

        {/* 4. TURNKEY PROCESS */}
        <section className="bg-white border border-black/[0.08] rounded-[8px] p-6 sm:p-10 lg:p-14 shadow-sm space-y-8">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-semibold tracking-[0.25em] text-[#888888] uppercase block">
              TURNKEY EXECUTION
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold uppercase text-[#111111]">
              {(contactData?.turnkey_services as any)?.title || "Our Turnkey Process"}
            </h2>
            <p className="text-xs sm:text-sm text-[#666666]">
              {(contactData?.turnkey_services as any)?.subtitle || "From Concept to Completion: Your Trusted Partner for Interior Projects in Delhi-NCR"}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 rounded-[6px] border border-black/10 overflow-hidden bg-[#FAF9F6] p-4 flex items-center justify-center">
              <img
                src="/assets/images/turnkey-interior-execution-process.webp"
                alt="Design Build Process"
                className="w-full h-auto object-contain max-h-[350px]"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/assets/blueprint_sketch.svg";
                }}
              />
            </div>

            <div className="lg:col-span-6 space-y-6">
              <div className="flex border-b border-black/[0.08] gap-2">
                {processTabs.map((tab: any, idx: number) => (
                  <button
                    key={tab.id}
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

              <div className="bg-[#FAF9F6] border border-black/5 p-6 rounded-[6px] space-y-3">
                <span className="text-xs font-bold uppercase tracking-widest text-amber-900 block">
                  Phase {activeTabIdx + 1}: {processTabs[activeTabIdx]?.label}
                </span>
                <p className="text-xs sm:text-sm text-[#444444] font-light leading-relaxed">
                  {processTabs[activeTabIdx]?.content}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. DESIGN BLOG CTA BANNER */}
        <section className="bg-neutral-900 text-white rounded-[8px] p-8 sm:p-12 text-center space-y-4">
          <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-neutral-400 block">
            EXPLORE ARCHITECTURAL INSIGHTS & CASE STUDIES
          </span>
          <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight">
            Looking for Design Inspiration?
          </h3>
          <p className="text-xs sm:text-sm text-neutral-300 max-w-xl mx-auto font-light">
            Browse our articles on spatial planning, modular kitchen ergonomics, lighting design, and luxury interior trends.
          </p>
          <div className="pt-2">
            <a
              href="https://4lotusinteriors.blogspot.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black text-xs uppercase font-bold tracking-wider rounded hover:bg-neutral-200 transition-colors"
            >
              <span>Visit Our Blog for Design Inspiration</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </section>

        {/* 6. EDITORIAL QUOTE BANNER */}
        <section className="bg-[#111111] text-white rounded-[8px] p-8 sm:p-12 text-center relative overflow-hidden shadow-sm">
          <div className="max-w-3xl mx-auto space-y-4 relative z-10">
            <Quote className="w-8 h-8 mx-auto text-amber-500/60" />
            <blockquote className="text-base sm:text-lg lg:text-xl font-light italic leading-relaxed tracking-wide text-neutral-200">
              &ldquo;{contactData?.quote || "Architecture is not just about making blueprints; it is about listening to how you live, work, and interact with your environment."}&rdquo;
            </blockquote>
            <div className="w-16 h-0.5 bg-amber-700/60 mx-auto mt-4" />
            <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-neutral-400 block pt-2">
              4 LOTUS INTERIOR · PRINCIPAL DESIGN PHILOSOPHY
            </span>
          </div>
        </section>

        {/* 7. CONTACT COORDINATES & INQUIRY FORM */}
        <section className="bg-white border border-black/[0.08] rounded-[8px] p-6 sm:p-10 lg:p-14 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Direct Branch Coordinates */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <span className="text-xs font-semibold tracking-[0.2em] text-[#777777] uppercase block">
                  DIRECT CHANNELS
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold uppercase text-[#111111]">
                  {contactData?.contact?.title || "Contact Information"}
                </h2>
                <p className="text-xs sm:text-sm text-[#555555] font-light leading-relaxed">
                  Whether you have an architectural blueprint or an idea for a full turnkey makeover, our senior designers are available for direct discussion.
                </p>
              </div>

              {/* Direct Phone Cards */}
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <a
                    href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
                    className="flex items-center gap-4 p-5 bg-[#FAF9F6] border border-black/[0.08] rounded-[4px] hover:border-black transition-colors group shadow-sm"
                  >
                    <div className="p-3 rounded-full bg-black text-white group-hover:bg-amber-600 transition-colors shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-[#777777] block">
                        Call Us (Primary)
                      </span>
                      <span className="text-sm font-bold text-[#111111]">
                        {primaryPhone}
                      </span>
                    </div>
                  </a>

                  <a
                    href={`tel:${secondaryPhone.replace(/\s+/g, "")}`}
                    className="flex items-center gap-4 p-5 bg-[#FAF9F6] border border-black/[0.08] rounded-[4px] hover:border-black transition-colors group shadow-sm"
                  >
                    <div className="p-3 rounded-full bg-black text-white group-hover:bg-amber-600 transition-colors shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-[#777777] block">
                        Call Us (Secondary)
                      </span>
                      <span className="text-sm font-bold text-[#111111]">
                        {secondaryPhone}
                      </span>
                    </div>
                  </a>
                </div>

                <a
                  href={`mailto:${contactEmail}`}
                  className="flex items-center gap-4 p-5 bg-[#FAF9F6] border border-black/[0.08] rounded-[4px] hover:border-black transition-colors group shadow-sm"
                >
                  <div className="p-3 rounded-full bg-black text-white group-hover:bg-amber-600 transition-colors shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-[#777777] block">
                      Official Email
                    </span>
                    <span className="text-sm font-bold text-[#111111]">
                      {contactEmail}
                    </span>
                  </div>
                </a>
              </div>

              {/* Physical Addresses */}
              <div className="space-y-4 pt-2">
                <div className="p-5 bg-[#FAF9F6] border border-black/[0.08] rounded-[4px] space-y-2">
                  <div className="flex items-center gap-2 text-black font-bold uppercase text-xs tracking-wider">
                    <Building className="w-4 h-4 text-amber-800" />
                    <h4>Our Office · Janakpuri Studio & Head Office</h4>
                  </div>
                  <p className="text-xs text-[#555555] leading-relaxed">
                    {studioAddress}
                  </p>
                  <div className="flex items-center gap-2 text-[11px] text-[#777777] pt-1">
                    <Clock className="w-3.5 h-3.5 text-amber-800" />
                    <span>Hours: {contactTimings}</span>
                  </div>
                </div>

                <div className="p-5 bg-[#FAF9F6] border border-black/[0.08] rounded-[4px] space-y-2">
                  <div className="flex items-center gap-2 text-black font-bold uppercase text-xs tracking-wider">
                    <Factory className="w-4 h-4 text-amber-800" />
                    <h4>Our Workshop · Kirti Nagar Manufacturing Facility</h4>
                  </div>
                  <p className="text-xs text-[#555555] leading-relaxed">
                    {factoryAddress}
                  </p>
                  <p className="text-[11px] text-[#888888]">
                    Solid Teak Furniture, Modular Kitchens & Wardrobe Joinery
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Message Form & Map Link */}
            <div className="lg:col-span-7 bg-[#FAF9F6] border border-black/[0.08] p-8 md:p-10 rounded-[6px] shadow-sm space-y-6">
              <div>
                <span className="text-xs font-semibold tracking-[0.2em] text-[#777777] uppercase block mb-1">
                  DROP A LINE
                </span>
                <h3 className="text-xl sm:text-2xl font-bold uppercase text-[#111111]">
                  Send Us a Message
                </h3>
                <p className="text-xs text-[#555555] pt-1">
                  We look forward to hearing from you! Get a free consultation today.
                </p>
              </div>

              {submitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold uppercase text-black">
                    Thanks for filling out the form!
                  </h3>
                  <p className="text-xs text-[#555555] max-w-sm mx-auto">
                    We&apos;ll be in touch shortly to schedule your spatial consultation.
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
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[11px] font-bold uppercase text-[#333333]">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-white border border-black/15 rounded text-xs text-black focus:outline-none focus:border-black"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[11px] font-bold uppercase text-[#333333]">
                        Your Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="Your Phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-white border border-black/15 rounded text-xs text-black focus:outline-none focus:border-black"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-bold uppercase text-[#333333]">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-black/15 rounded text-xs text-black focus:outline-none focus:border-black"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-bold uppercase text-[#333333]">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your project..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-black/15 rounded text-xs text-black focus:outline-none focus:border-black"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#111111] hover:bg-neutral-800 text-white text-xs uppercase tracking-wider font-bold rounded transition-colors shadow-sm"
                  >
                    Send Message
                  </button>

                  <div className="pt-4 border-t border-black/[0.08] flex items-center justify-between text-xs text-[#555555]">
                    <a
                      href="https://maps.app.goo.gl/6Z1tADm86C6oRxRh9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-amber-900 hover:text-black font-semibold uppercase tracking-wider"
                    >
                      <MapPin className="w-4 h-4" />
                      <span>Find Studio on Google Maps</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>

      </div>

      {/* Booking Modal */}
      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
      />

      <Footer />
    </main>
  );
}
