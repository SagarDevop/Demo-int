import React, { useState } from "react";
import { Link } from "react-router-dom";
import Image from "@/components/Image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import ConsultationModal from "@/components/ConsultationModal";
import CtaSection from "@/components/CtaSection";
import SEO from "@/components/SEO";
import { Star, Factory, CheckCircle2 } from "lucide-react";

export default function About() {
  const [consultationOpen, setConsultationOpen] = useState(false);

  const pillars = [
    {
      num: "01",
      title: "Residential Interior Architecture",
      desc: "We create living spaces that reflect your culture and lifestyle. Whether modern, western, or contemporary, our residential designs complement the ever-changing world while remaining uniquely yours. Every home we design shares a common thread: tailored comfort and style.",
    },
    {
      num: "02",
      title: "Retail Design & Storytelling",
      desc: "Retail design is storytelling. We combine creativity with commercial strategy to design retail outlets that optimize space and create engaging customer experiences. It's not just about looking good; it's about setting up your store to maximize sales and brand impact.",
    },
    {
      num: "03",
      title: "Corporate Workplaces",
      desc: "We design corporate spaces that work as strategic tools for your business. From furniture selection to finish details, we create successful workplace environments that leverage physical space to achieve your organizational goals and enhance employee productivity.",
    },
    {
      num: "04",
      title: "Turnkey Solutions & Manufacturing",
      desc: "With over 15 years of experience, we have grown from a design firm into a comprehensive solutions provider. We are proud to play a leading role in architecture, interior design, renovation, remodeling, trading, and precision timber manufacturing.",
    },
  ];

  const studioValues = [
    {
      title: "Uncompromising Integrity",
      desc: "We demand and maintain the highest level of integrity in every operation, ensuring transparent pricing, milestone commitments, and honest material sourcing.",
    },
    {
      title: "Masterful Craftsmanship",
      desc: "Our dedicated joinery workshop in Kirti Nagar allows us to craft bespoke furniture with millimeter tolerances and hand-finished veneers.",
    },
    {
      title: "End-to-End Turnkey Delivery",
      desc: "From initial CAD drawings to final civil execution and soft furnishings, you have a single accountable partner throughout your project lifecycle.",
    },
    {
      title: "15+ Years Delhi-NCR Legacy",
      desc: "Over 15 years of trusted execution across 500+ luxury apartments, bungalows, corporate offices, and commercial flagships.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#F8F7F5] flex flex-col justify-between selection:bg-[#111111] selection:text-white">
      <SEO
        title="About 4 Lotus Interior | 15+ Years Architecture Studio Delhi"
        description="Learn about 4 Lotus Interior, our philosophy of Function First and Timeless Aesthetic, and Principal Architect Rashid Ali. Janakpuri Studio and Kirti Nagar manufacturing."
        keywords="about 4 lotus interior, architect rashid ali delhi, best interior designer janakpuri, interior design history delhi, custom furniture manufacturer kirti nagar"
      />

      <Navbar onOpenConsultation={() => setConsultationOpen(true)} />

      {/* Page Header */}
      <PageHeader
        eyebrow="STUDIO HERITAGE & LEADERSHIP"
        title="About 4 Lotus Interior"
        description="Delhi-NCR's premier interior design & turnkey architecture studio led by Principal Architect Rashid Ali, bringing 15+ years of design innovation and bespoke manufacturing."
        breadcrumbs={[{ label: "Home", href: "/" }]}
      />

      {/* Leadership & Legacy Section */}
      <section className="w-full py-16 md:py-24 px-4 md:px-10 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Architect Profile Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative w-full aspect-[4/5] rounded-[4px] overflow-hidden border border-black/10 shadow-sm bg-neutral-200">
              <Image
                src="/assets/crafted_care_thumb.jpg"
                alt="Principal Architect Rashid Ali - 4 Lotus Interior"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 text-white">
                <span className="text-xs font-semibold tracking-widest text-amber-300 uppercase">
                  Founder & Principal Architect
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold uppercase mt-1">
                  Rashid Ali
                </h2>
                <p className="text-xs text-neutral-300 font-light mt-1">
                  15+ Years Experience in Architectural Interior Design
                </p>
              </div>
            </div>

            {/* Ratings & Accreditations */}
            <div className="bg-white border border-black/[0.08] p-6 rounded-[4px] space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-black bg-[#FAF9F6] px-2.5 py-1 rounded-full border border-black/10">
                  4.9 ★ (81 Reviews)
                </span>
              </div>
              <p className="text-xs text-[#555555] leading-relaxed">
                &ldquo;We believe great architecture emerges from understanding how human lives unfold within spaces. Every contour, light source, and material is chosen with deliberate purpose.&rdquo;
              </p>
            </div>
          </div>

          {/* Right: Narrative Copy */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="text-xs font-semibold tracking-[0.2em] text-[#777777] uppercase block mb-3">
                WHO WE ARE
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#111111] uppercase leading-snug">
                Transforming Spaces, Redefining Lifestyles Across Delhi-NCR
              </h2>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-[#444444] font-light leading-relaxed">
              <p>
                <strong>4 Lotus Interior</strong> is an intelligent design and turnkey interior solutions firm based in New Delhi. Over our 15+ years of dedicated practice, we have evolved from an architectural design practice into a full-service turnkey execution and custom furniture manufacturing powerhouse.
              </p>
              <p>
                We are Delhi-NCR&apos;s leading interior designers and decorators. We manage and execute world-class residential, retail, corporate, and commercial interior projects with surgical precision, uncompromising material standards, and architectural elegance.
              </p>
              <p>
                From luxury apartments in Dwarka and builder floors in South West Delhi to opulent farmhouses in Chattarpur, corporate offices in Gurgaon, and commercial retail showrooms across Delhi, our multidisciplinary team handles every phase in-house.
              </p>
            </div>

            {/* In-House Manufacturing Facility Highlight */}
            <div className="bg-[#111111] text-white p-8 rounded-[4px] space-y-4 shadow-sm">
              <div className="flex items-center gap-3">
                <Factory className="w-5 h-5 text-amber-300" />
                <h3 className="text-base sm:text-lg font-bold uppercase tracking-wide">
                  In-House Custom Furniture Workshop · Kirti Nagar
                </h3>
              </div>
              <p className="text-xs text-[#BBBBBB] leading-relaxed">
                Located at Plot No-57, W.H.S, A Block, Kirti Nagar Timber Market, our manufacturing unit produces bespoke joinery, modular kitchens with German hardware, veneer wall paneling, and custom upholstered furnishings tailored to exact architectural specifications.
              </p>
              <div className="flex flex-wrap gap-4 pt-2 text-[11px] uppercase tracking-wider text-amber-200">
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5" /> 100% Solid Teak & HDHMR</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5" /> German Soft-Close Fittings</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5" /> Hand-Finished PU Polish</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Sectors & Pillars */}
      <section className="w-full py-16 md:py-20 px-4 md:px-10 max-w-[1440px] mx-auto border-t border-black/[0.08]">
        <div className="mb-12">
          <span className="text-xs font-semibold tracking-[0.2em] text-[#777777] uppercase block mb-2">
            DESIGN DISCIPLINES
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111111] uppercase">
            Our Architectural & Execution Pillars
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((p, i) => (
            <div
              key={i}
              className="bg-white border border-black/[0.08] p-8 rounded-[4px] space-y-4 card-hover-effect"
            >
              <span className="text-xs font-mono font-bold text-[#999999] tracking-widest block">
                {p.num}
              </span>
              <h3 className="text-lg font-bold text-black uppercase tracking-wide">
                {p.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#555555] font-light leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Values Grid */}
      <section className="w-full py-16 md:py-20 px-4 md:px-10 max-w-[1440px] mx-auto border-t border-black/[0.08]">
        <div className="mb-12 text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-semibold tracking-[0.2em] text-[#777777] uppercase block">
            OUR CORE VALUES
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111111] uppercase">
            The Standards We Live By
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {studioValues.map((v, i) => (
            <div
              key={i}
              className="bg-white border border-black/[0.08] p-6 rounded-[4px] space-y-3 flex flex-col justify-between"
            >
              <h3 className="text-sm font-bold uppercase text-black">
                {v.title}
              </h3>
              <p className="text-xs text-[#666666] font-light leading-relaxed">
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Fireplace Section */}
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
