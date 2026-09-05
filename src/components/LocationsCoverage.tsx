import React from "react";
import { Link } from "react-router-dom";
import { MapPin, CheckCircle2 } from "lucide-react";

interface LocationsCoverageProps {
  onOpenConsultation: () => void;
}

export default function LocationsCoverage({ onOpenConsultation }: LocationsCoverageProps) {
  const regions = [
    {
      region: "West & South-West Delhi (Headquarters)",
      areas: [
        "Janakpuri (Studio)",
        "Dwarka Expressway",
        "Vikas Puri",
        "Uttam Nagar",
        "Paschim Vihar",
        "Punjabi Bagh",
        "Rajouri Garden",
        "Tilak Nagar",
        "Vishal Enclave",
        "Najafgarh",
      ],
    },
    {
      region: "South & Central Delhi",
      areas: [
        "Greater Kailash (GK 1 & 2)",
        "Vasant Kunj",
        "Hauz Khas",
        "Safdarjung Enclave",
        "Lajpat Nagar",
        "Patel Nagar",
        "Karol Bagh",
        "Kirti Nagar",
        "Naraina",
      ],
    },
    {
      region: "North & East Delhi",
      areas: [
        "Pitampura",
        "Rohini",
        "Rani Bagh",
        "Shakti Nagar",
        "Model Town",
        "Civil Lines",
        "Preet Vihar",
        "Mayur Vihar",
        "Laxmi Nagar",
      ],
    },
    {
      region: "NCR Metropolitan Regions",
      areas: [
        "Gurgaon (DLF & Golf Course Rd)",
        "Noida & Greater Noida",
        "Faridabad",
        "Ghaziabad (Indirapuram)",
        "Sonipat (Kundli)",
      ],
    },
  ];

  return (
    <section id="locations" className="w-full py-16 md:py-24 px-4 md:px-10 max-w-[1440px] mx-auto border-t border-black/[0.08]">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <span className="text-xs font-semibold tracking-[0.2em] text-[#666666] uppercase block mb-3">
            DELHI-NCR REGIONAL REACH
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#111111] uppercase">
            Service Hubs & On-Site Visits
          </h2>
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <p className="max-w-md text-xs sm:text-sm text-[#555555] font-light leading-relaxed">
            Headquartered at South Metro Station, Janakpuri, our senior architects and site engineers provide on-site spatial consultations across all Delhi-NCR zones.
          </p>
          <Link
            to="/locations"
            className="text-xs font-bold uppercase tracking-wider text-black border-b border-black pb-1 hover:opacity-70 transition-opacity whitespace-nowrap"
          >
            All 32 Hubs ↗
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {regions.map((reg, idx) => (
          <div
            key={idx}
            className="bg-white border border-black/[0.08] p-6 sm:p-7 rounded-[4px] flex flex-col justify-between card-hover-effect"
          >
            <div>
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-black/[0.06]">
                <MapPin className="w-4 h-4 text-black shrink-0" />
                <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#111111]">
                  {reg.region}
                </h3>
              </div>

              <div className="space-y-2">
                {reg.areas.map((area, aIdx) => (
                  <div
                    key={aIdx}
                    className="flex items-center gap-2 text-xs text-[#555555] hover:text-black transition-colors"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-5 mt-6 border-t border-black/[0.05]">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-black hover:opacity-70 transition-opacity"
              >
                <span>Request Site Visit ↗</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
