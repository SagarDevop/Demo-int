import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import ConsultationModal from "@/components/ConsultationModal";
import CtaSection from "@/components/CtaSection";
import SEO from "@/components/SEO";
import { Compass, Layers, Hammer, ShieldCheck, CheckCircle2, Clock, Calculator, FileText } from "lucide-react";

export default function Process() {
  const [consultationOpen, setConsultationOpen] = useState(false);

  const steps = [
    {
      num: "01",
      title: "Spatial Discovery & Lifestyle Brief",
      subtitle: "Phase 1: Conceptual Alignment",
      desc: "Every project starts with an in-depth 45-minute spatial consultation with Principal Architect Rashid Ali. We analyze your lifestyle rhythms, family dynamics, storage requirements, and spatial aspirations at our Janakpuri studio or directly at your site.",
      deliverables: [
        "Comprehensive site measurement audit",
        "Lifestyle & functional requirement mapping",
        "Initial budget zoning and feasibility roadmap",
      ],
      icon: Compass,
    },
    {
      num: "02",
      title: "Architectural Schematics & 3D Walkthroughs",
      subtitle: "Phase 2: Digital Precision",
      desc: "We translate your brief into dimensioned 2D CAD floor plans, furniture layouts, false ceiling elevations, and hyper-realistic 3D walkthrough renders. You see every light fixture, marble grain, and texture before breaking ground.",
      deliverables: [
        "2D CAD architectural & MEP layouts",
        "Photorealistic 4K 3D renders & VR previews",
        "Physical material sample boards (travertine, veneer, brass)",
      ],
      icon: Layers,
    },
    {
      num: "03",
      title: "Millimeter Factory Fabrication & Sourcing",
      subtitle: "Phase 3: Workshop Production",
      desc: "Our dedicated joinery facility at Kirti Nagar Timber Market commences custom millwork, modular kitchen carcass builds, solid teak dining sets, and bespoke wardrobe manufacturing under strict climate-controlled quality tolerances.",
      deliverables: [
        "Precision factory carpentry & German hardware integration",
        "Imported marble slab selection at partner stockyards",
        "Itemized Bill of Quantities (BOQ) with fixed pricing",
      ],
      icon: Hammer,
    },
    {
      num: "04",
      title: "Turnkey Site Execution & Quality Handover",
      subtitle: "Phase 4: Flawless Reality",
      desc: "Our on-site project managers and civil engineers coordinate all trades: structural masonry, electrical DBs, concealed plumbing, acoustic false ceilings, and final PU polishing with milestone-linked delivery commitments.",
      deliverables: [
        "Daily site progress audits & client WhatsApp log",
        "Full turnkey deep cleaning & snag checklist sign-off",
        "Comprehensive warranty documentation & handover kit",
      ],
      icon: ShieldCheck,
    },
  ];

  return (
    <main className="min-h-screen bg-[#F8F7F5] flex flex-col justify-between selection:bg-[#111111] selection:text-white">
      <SEO
        title="Our Turnkey Architectural Process | 4 Lotus Interior Delhi"
        description="Discover our systematic 4-step interior architecture methodology: Spatial Discovery, 3D Schematics, Kirti Nagar Millwork Production, and Turnkey On-Site Delivery."
        keywords="interior design process delhi, 3d interior rendering delhi, turnkey interior workflow, home interior execution steps, interior architect process"
      />

      <Navbar onOpenConsultation={() => setConsultationOpen(true)} />

      {/* Page Header */}
      <PageHeader
        eyebrow="METHODOLOGY & EXECUTION"
        title="Our Design & Build Process"
        description="A structured, transparent 4-phase architectural methodology engineered to eliminate delays, cost overruns, and vendor confusion."
        breadcrumbs={[{ label: "Home", href: "/" }]}
      />

      {/* 4 Process Steps Breakdown */}
      <section className="w-full py-16 md:py-24 px-4 md:px-10 max-w-[1440px] mx-auto">
        <div className="space-y-12 lg:space-y-16">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white border border-black/[0.08] p-8 md:p-12 rounded-[4px] grid grid-cols-1 lg:grid-cols-12 gap-8 items-start card-hover-effect"
            >
              {/* Step Number & Icon */}
              <div className="lg:col-span-3 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl sm:text-4xl font-mono font-bold text-[#111111]">
                    {step.num}
                  </span>
                  <div className="p-2.5 rounded-full bg-[#F5F4F0] border border-black/[0.06] text-black">
                    <step.icon className="w-5 h-5" />
                  </div>
                </div>
                <span className="text-xs font-semibold tracking-widest text-[#777777] uppercase block">
                  {step.subtitle}
                </span>
              </div>

              {/* Step Description */}
              <div className="lg:col-span-5 space-y-3">
                <h3 className="text-xl sm:text-2xl font-bold uppercase text-[#111111]">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#555555] font-light leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Deliverables Checklist */}
              <div className="lg:col-span-4 bg-[#FAF9F6] border border-black/[0.05] p-6 rounded-[2px] space-y-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-black block">
                  Phase Deliverables:
                </span>
                <div className="space-y-2">
                  {step.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2 text-xs text-[#555555]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Assurance & Timeline Section */}
      <section className="w-full py-16 px-4 md:px-10 max-w-[1440px] mx-auto border-t border-black/[0.08]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white border border-black/[0.08] p-8 rounded-[4px] space-y-3">
            <Calculator className="w-6 h-6 text-black" />
            <h3 className="text-base font-bold uppercase text-black">
              Fixed Price BOQ Guarantee
            </h3>
            <p className="text-xs text-[#666666] font-light leading-relaxed">
              Transparent itemized Bill of Quantities with zero hidden escalations. You know the exact financial scope before work begins on site.
            </p>
          </div>

          <div className="bg-white border border-black/[0.08] p-8 rounded-[4px] space-y-3">
            <Clock className="w-6 h-6 text-black" />
            <h3 className="text-base font-bold uppercase text-black">
              Milestone Timelines
            </h3>
            <p className="text-xs text-[#666666] font-light leading-relaxed">
              Every project is mapped onto a strict milestone timeline with dedicated on-site engineering supervisors and weekly photo audits.
            </p>
          </div>

          <div className="bg-white border border-black/[0.08] p-8 rounded-[4px] space-y-3">
            <FileText className="w-6 h-6 text-black" />
            <h3 className="text-base font-bold uppercase text-black">
              Turnkey Warranty
            </h3>
            <p className="text-xs text-[#666666] font-light leading-relaxed">
              Full peace of mind with material warranties on German hardware, plumbing fixtures, and post-handover maintenance support.
            </p>
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
