import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import ConsultationModal from "@/components/ConsultationModal";
import CtaSection from "@/components/CtaSection";
import SEO from "@/components/SEO";
import { MapPin, CheckCircle2, Building, Factory, ArrowUpRight } from "lucide-react";

export default function Locations() {
  const [consultationOpen, setConsultationOpen] = useState(false);

  const zones = [
    {
      title: "West & South-West Delhi (Headquarters)",
      description: "Immediate studio access from Janakpuri South Metro Station with full residential and commercial site coverage.",
      areas: [
        "Janakpuri (Studio HQ & Office)",
        "Dwarka & Dwarka Expressway",
        "Vikas Puri",
        "Uttam Nagar",
        "Paschim Vihar",
        "Punjabi Bagh",
        "Rajouri Garden",
        "Tilak Nagar",
        "Vishal Enclave",
        "Najafgarh & Kakrola",
      ],
    },
    {
      title: "South & Central Delhi",
      description: "Premium builder floors, luxury bungalows, diplomatic residences, and commercial flagships.",
      areas: [
        "Greater Kailash (GK 1 & GK 2)",
        "Vasant Kunj & Vasant Vihar",
        "Hauz Khas & Green Park",
        "Safdarjung Enclave & Defence Colony",
        "Lajpat Nagar & South Extension",
        "Patel Nagar & Shadipur",
        "Karol Bagh & Rajendra Nagar",
        "Kirti Nagar (Factory Hub)",
        "Naraina Industrial Area",
      ],
    },
    {
      title: "North & East Delhi",
      description: "Comprehensive turnkey architectural execution across North and East residential hubs.",
      areas: [
        "Rohini (All Sectors)",
        "Pitampura",
        "Model Town",
        "Civil Lines",
        "Mayur Vihar",
        "Preet Vihar & Laxmi Nagar",
      ],
    },
    {
      title: "NCR & Satellite Cities",
      description: "Dedicated project site engineers stationed across luxury condominiums and commercial high-rises.",
      areas: [
        "Gurgaon (DLF Phase 1-5, Golf Course Road, Cyber City)",
        "Noida & Greater Noida (Sector 50, 75, 128, 150)",
        "Faridabad (Sector 14, 15, Greenfields)",
        "Ghaziabad (Indirapuram, Vaishali, Vasundhara)",
        "Sonipat & Kundli Expressway",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-[#F8F7F5] flex flex-col justify-between selection:bg-[#111111] selection:text-white">
      <SEO
        title="Interior Design Service Locations Delhi-NCR (32 Hubs) | 4 Lotus"
        description="4 Lotus Interior provides turnkey architecture and interior design services across 32 major hubs in Delhi-NCR, including Janakpuri, Dwarka, South Delhi, Gurgaon, and Noida."
        keywords="interior designer janakpuri, interior designer dwarka, interior designer south delhi, interior designer gurgaon, interior design services noida, 4 lotus locations"
      />

      <Navbar onOpenConsultation={() => setConsultationOpen(true)} />

      {/* Page Header */}
      <PageHeader
        eyebrow="REGIONAL REACH & ON-SITE SERVICE HUBS"
        title="Delhi-NCR Locations Coverage"
        description="Serving over 32 prime localities across Delhi, Gurgaon, Noida, Faridabad, Ghaziabad, and Sonipat with on-site architectural visits and turnkey execution."
        breadcrumbs={[{ label: "Home", href: "/" }]}
      />

      {/* Two Flagship Facilities */}
      <section className="w-full py-12 px-4 md:px-10 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white border border-black/[0.08] p-8 rounded-[4px] space-y-4">
            <div className="flex items-center gap-2 text-black font-bold uppercase tracking-wider text-sm">
              <Building className="w-4 h-4 text-amber-800" />
              <h3>Design Studio & Head Office · Janakpuri</h3>
            </div>
            <p className="text-xs text-[#555555] leading-relaxed">
              Plot No-18, 1st Floor, Main Palam Dwarka Road, Near Dabri Police Station, Janakpuri, South West Delhi, New Delhi 110045.
            </p>
            <p className="text-[11px] text-[#888888]">
              Operating Hours: Monday – Saturday (10:00 AM – 06:00 PM)
            </p>
          </div>

          <div className="bg-white border border-black/[0.08] p-8 rounded-[4px] space-y-4">
            <div className="flex items-center gap-2 text-black font-bold uppercase tracking-wider text-sm">
              <Factory className="w-4 h-4 text-amber-800" />
              <h3>Manufacturing & Joinery Workshop · Kirti Nagar</h3>
            </div>
            <p className="text-xs text-[#555555] leading-relaxed">
              Plot No-57, W.H.S, A Block, 2nd Floor, Kirti Nagar Industrial Area, Timber Market, West Delhi, New Delhi 110015.
            </p>
            <p className="text-[11px] text-[#888888]">
              Custom Millwork, Modular Kitchens & Upholstery Facility
            </p>
          </div>
        </div>
      </section>

      {/* 4 Regional Zones */}
      <section className="w-full pb-20 px-4 md:px-10 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {zones.map((zone, idx) => (
            <div
              key={idx}
              className="bg-white border border-black/[0.08] p-8 rounded-[4px] flex flex-col justify-between space-y-6 card-hover-effect"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-2 pb-3 border-b border-black/[0.06]">
                  <MapPin className="w-4 h-4 text-black shrink-0" />
                  <h3 className="text-base font-bold uppercase text-[#111111]">
                    {zone.title}
                  </h3>
                </div>
                <p className="text-xs text-[#666666] font-light">
                  {zone.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                  {zone.areas.map((area, aIdx) => (
                    <div
                      key={aIdx}
                      className="flex items-center gap-2 text-xs text-[#444444]"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-black/[0.06]">
                <button
                  onClick={() => setConsultationOpen(true)}
                  className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-black hover:gap-2 transition-all"
                >
                  <span>Book On-Site Visit in This Region</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
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
