import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import ConsultationModal from "@/components/ConsultationModal";
import CtaSection from "@/components/CtaSection";
import { Star, CheckCircle, Quote, ArrowUpRight } from "lucide-react";

export default function Reviews() {
  const [consultationOpen, setConsultationOpen] = useState(false);

  const reviews = [
    {
      quote:
        "It was an absolute pleasure working with 4 Lotus Interior. Very professional and friendly. They renovated our flat, and the process was simple. From initial floor plans to 3D renders and timely delivery, they never exceeded the budget unless we increased the scope. We have now engaged them again for my parents' flat. Highly recommended if you want quality.",
      author: "Verified Homeowner",
      location: "Flat Renovation · Dwarka Sector 12, Delhi",
      rating: 5,
      date: "Recent Project",
    },
    {
      quote:
        "My home was renovated by 4 Lotus. They are very professional and highly skilled. They totally changed my home interior as per my needs and within my budget. I can say it is the best interior design company in Delhi-NCR.",
      author: "Residential Client",
      location: "Complete Home Interior · Delhi-NCR",
      rating: 5,
      date: "Turnkey Project",
    },
    {
      quote:
        "4 Lotus Interior designed and decorated our home beautifully. Despite challenges like the lockdown, I am very happy that they completed the work on time. They are totally budget-friendly and have professional experts.",
      author: "Homeowner",
      location: "Interior Decoration & Staging · West Delhi",
      rating: 5,
      date: "Turnkey Handover",
    },
    {
      quote:
        "My 4BHK builder floor was well interior designed and renovated in a completely new style. I am satisfied with the service and the execution by 4 Lotus Interior and its owner Rashid Ali.",
      author: "Builder Floor Owner",
      location: "4BHK Luxury Turnkey Floor · South West Delhi",
      rating: 5,
      date: "Full Scope Execution",
    },
    {
      quote:
        "My company took interior designing and contractor services from 4 Lotus. They have all interior-related solutions under one roof. Appreciate their work and professional coordination.",
      author: "Corporate Enterprise",
      location: "Corporate Office & Commercial Fit-Out · Gurgaon",
      rating: 5,
      date: "Commercial Scope",
    },
    {
      quote:
        "Awesome residential interior of my home by Delhi's best and top interior designers and decorators. Choose them, it will never disappoint you. Great quality carpentry from their own workshop.",
      author: "Villa Resident",
      location: "Luxury Living Suite · Janakpuri",
      rating: 5,
      date: "Residential Villa",
    },
  ];

  return (
    <main className="min-h-screen bg-[#F8F7F5] flex flex-col justify-between selection:bg-[#111111] selection:text-white">
      <Navbar onOpenConsultation={() => setConsultationOpen(true)} />

      {/* Page Header */}
      <PageHeader
        eyebrow="CLIENT VOICES & GOOGLE RATINGS"
        title="What Our Clients Say"
        description="4.9 ★ Rating across 81+ verified Google Reviews. Read honest feedback from homeowners, villa residents, and corporate enterprises across Delhi-NCR."
        breadcrumbs={[{ label: "Home", href: "/" }]}
      />

      {/* Ratings Highlight Bar */}
      <section className="w-full py-12 px-4 md:px-10 max-w-[1440px] mx-auto">
        <div className="bg-white border border-black/[0.08] p-8 rounded-[4px] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <div className="text-center md:text-left">
              <span className="text-4xl sm:text-5xl font-extrabold text-[#111111] font-mono block">
                4.9
              </span>
              <div className="flex text-amber-500 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
            </div>
            <div className="border-l border-black/10 pl-6 space-y-1">
              <h3 className="text-sm sm:text-base font-bold uppercase text-black">
                81 Verified Google Reviews
              </h3>
              <p className="text-xs text-[#777777]">
                Rated Delhi-NCR&apos;s most reliable turnkey interior architecture studio
              </p>
            </div>
          </div>

          <a
            href="https://www.google.com/search?q=Lotus+Interior+in+South+Metro+Station+Dwarka+Road+Janakpuri+New+Delhi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white text-xs font-semibold uppercase tracking-wider rounded-full hover:bg-neutral-800 transition-colors shadow-sm"
          >
            <span>Read on Google Search</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="w-full pb-20 px-4 md:px-10 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-white border border-black/[0.08] p-8 rounded-[4px] flex flex-col justify-between space-y-6 card-hover-effect"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-black/15" />
                </div>
                <p className="text-xs sm:text-sm text-[#222222] font-normal leading-relaxed italic">
                  &ldquo;{rev.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-black/[0.06] flex items-center justify-between text-xs text-[#777777]">
                <div>
                  <p className="font-bold text-black">{rev.author}</p>
                  <p className="text-[11px] text-[#888888]">{rev.location}</p>
                </div>
                <span className="flex items-center gap-1 text-emerald-600 font-medium text-[11px]">
                  <CheckCircle className="w-3.5 h-3.5" />
                  Verified Client
                </span>
              </div>
            </div>
          ))}
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
