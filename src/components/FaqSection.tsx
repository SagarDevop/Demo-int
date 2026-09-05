import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "Who leads the architectural and design desk at 4 Lotus Interior?",
      a: "4 Lotus Interior is led by Principal Interior Architect Rashid Ali, bringing over 15+ years of design and execution expertise. Our multidisciplinary team includes CAD draftsmen, 3D visualizers, master carpenters, and dedicated site supervisors ensuring the highest level of craftsmanship.",
    },
    {
      q: "What services do you provide under turnkey interior execution?",
      a: "We provide complete end-to-end turnkey solutions covering architectural spatial planning, 3D photorealistic visualization, structural civil remodeling, electrical & plumbing layouts, false ceiling elevations, modular kitchen installations, luxury bathroom transformations, and custom in-house furniture manufacturing.",
    },
    {
      q: "Do you manufacture your own custom furniture and modular fixtures?",
      a: "Yes. 4 Lotus operates its own specialized furniture manufacturing facility. We produce bespoke fluted consoles, solid teak dining tables, upholstered headboards, German-hardware modular kitchens, and custom wardrobes with precision millimeter tolerances.",
    },
    {
      q: "Which areas in Delhi-NCR do you provide on-site services?",
      a: "We are headquartered at South Metro Station, Janakpuri, and provide on-site visits across all Delhi-NCR zones including Janakpuri, Dwarka, South Delhi (Greater Kailash, Vasant Kunj, Hauz Khas), West Delhi (Punjabi Bagh, Rajouri Garden, Paschim Vihar), North & East Delhi, Gurgaon, Noida, Faridabad, Ghaziabad, and Sonipat.",
    },
    {
      q: "How does the initial design consultation and 3D modeling work?",
      a: "The journey begins with an initial 45-minute spatial consultation (at our Janakpuri studio, on your site, or virtually). We map your lifestyle requirements and prepare 2D layout options, followed by hyper-realistic 3D walkthrough renders and physical material sample boards before commencing site work.",
    },
    {
      q: "How do you ensure budget certainty and project timelines?",
      a: "Before signing, we provide a fixed-price itemized bill of quantities (BOQ) with zero hidden charges. Each project follows a milestone-linked timeline supervised by an on-site project manager with regular client progress reports.",
    },
  ];

  return (
    <section id="faq" className="w-full py-16 md:py-24 px-4 md:px-10 max-w-[1440px] mx-auto border-t border-black/[0.08]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        {/* Left Column Header */}
        <div className="lg:col-span-4 space-y-4">
          <span className="text-xs font-semibold tracking-[0.2em] text-[#666666] uppercase block">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#111111] uppercase">
            Everything You Need To Know
          </h2>
          <p className="text-xs sm:text-sm text-[#555555] font-light leading-relaxed">
            Have a question about our design process, studio consultations, or turnkey execution? Here are answers to our most common client inquiries.
          </p>
          <div className="pt-4">
            <a
              href="tel:09810698082"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-black border-b border-black pb-1 hover:opacity-70 transition-opacity"
            >
              <span>Speak With Principal Architect ↗</span>
            </a>
          </div>
        </div>

        {/* Right Column Accordion */}
        <div className="lg:col-span-8 divide-y divide-black/[0.08] bg-white border border-black/[0.08] rounded-[4px] px-6 sm:px-8">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className="py-5 sm:py-6">
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between text-left gap-4 group"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-[#111111] group-hover:text-amber-800 transition-colors">
                    {faq.q}
                  </span>
                  <span className="p-1 rounded-full bg-[#FAF9F6] border border-black/10 shrink-0 text-black">
                    {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="pt-3 pr-6 text-xs sm:text-sm text-[#555555] font-light leading-relaxed animate-fade-in">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
