import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ArrowUp, Clock, Building, Factory } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navPages = [
    { label: "Studio Heritage", href: "/about" },
    { label: "Turnkey & Interior Services", href: "/services" },
    { label: "Project Portfolio", href: "/portfolio" },
    { label: "Design Methodology", href: "/process" },
    { label: "Client Testimonials", href: "/reviews" },
    { label: "Delhi-NCR Locations", href: "/locations" },
    { label: "Consultation & Contact", href: "/contact" },
  ];

  const servicesList = [
    "Residential Interior Architecture",
    "Apartment & Flat Interiors",
    "Luxury Bungalows & Villas",
    "Penthouse & Farmhouse Estates",
    "Corporate Office Workplaces",
    "Retail Shops & Showrooms",
    "Modular Kitchen Remodeling",
    "Luxury Bathroom Suites",
    "In-house Furniture Manufacturing",
    "Healthcare & Clinic Design",
    "Hotels, Dining & Bars",
    "Turnkey Civil & MEP Engineering",
  ];

  const locationsList = [
    "Janakpuri Studio HQ",
    "Dwarka & Dwarka Expressway",
    "Greater Kailash (GK 1 & 2)",
    "Vasant Kunj & Hauz Khas",
    "Kirti Nagar Timber Market",
    "Punjabi Bagh & Paschim Vihar",
    "Rajouri Garden & Patel Nagar",
    "Rohini & Pitampura",
    "Gurgaon (DLF & Golf Course)",
    "Noida & Greater Noida",
    "Faridabad & Ghaziabad",
    "Sonipat (NCR Reach)",
  ];

  return (
    <footer id="contact" className="w-full bg-[#0C0C0C] text-[#EAE6E1] pt-16 md:pt-24 pb-8 overflow-hidden border-t border-white/10">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Upper Row: INTERIOR | Phone & Email | ARCHITECTURE */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center border-b border-white/10 pb-12">
          {/* Left Tag */}
          <div className="md:col-span-3 text-center md:text-left">
            <span className="text-xs md:text-sm font-semibold tracking-[0.25em] text-[#8E8D8A] uppercase">
              INTERIOR
            </span>
          </div>

          {/* Center Contact Numbers */}
          <div className="md:col-span-6 text-center space-y-2">
            <a
              href="tel:09810698082"
              className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white hover:text-amber-300 transition-colors"
            >
              +91 98106 98082
            </a>
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-[#CCCCCC]">
              <a href="mailto:contact@4lotusinterior.in" className="hover:text-white transition-colors">
                contact@4lotusinterior.in
              </a>
              <span className="opacity-40">·</span>
              <a href="mailto:info@4lotusinterior.in" className="hover:text-white transition-colors">
                info@4lotusinterior.in
              </a>
            </div>
          </div>

          {/* Right Tag */}
          <div className="md:col-span-3 text-center md:text-right">
            <span className="text-xs md:text-sm font-semibold tracking-[0.25em] text-[#8E8D8A] uppercase">
              ARCHITECTURE
            </span>
          </div>
        </div>

        {/* Directory & Two Official Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 py-12 border-b border-white/10 text-xs text-[#8E8D8A]">
          {/* Office 1: Main Studio (Janakpuri / Palam Dwarka Rd) */}
          <div className="lg:col-span-3 space-y-2.5">
            <div className="flex items-center gap-1.5 text-white font-bold uppercase tracking-wider">
              <Building className="w-3.5 h-3.5 text-amber-300" />
              <h4>Head Office & Design Studio</h4>
            </div>
            <p className="leading-relaxed text-neutral-400">
              Plot No-18, 1st Floor, Main Palam Dwarka Road, Near Dabri Police Station, South West Delhi, New Delhi, Delhi-110045
            </p>
            <div className="flex items-center gap-1.5 text-neutral-400 text-[11px] pt-1">
              <Clock className="w-3.5 h-3.5 text-amber-300" />
              <span>Time : Mon - Sat | 10:00 AM - 06:00 PM</span>
            </div>
          </div>

          {/* Office 2: Factory & Timber Facility (Kirti Nagar) */}
          <div className="lg:col-span-3 space-y-2.5">
            <div className="flex items-center gap-1.5 text-white font-bold uppercase tracking-wider">
              <Factory className="w-3.5 h-3.5 text-amber-300" />
              <h4>Manufacturing & Workshop</h4>
            </div>
            <p className="leading-relaxed text-neutral-400">
              Plot No-57, W.H.S, A Block, 2nd Floor, Kirti Nagar Industrial Area, Timber Market, West Delhi, New Delhi, Delhi-110015
            </p>
            <p className="text-[11px] text-neutral-500">
              Custom Furniture & Architectural Millwork Facility
            </p>
          </div>

          {/* Direct Navigation Links */}
          <div className="lg:col-span-3 space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              Studio Navigation
            </h4>
            <div className="grid grid-cols-1 gap-1.5 text-[11px] text-neutral-400">
              {navPages.map((page, i) => (
                <Link
                  key={i}
                  to={page.href}
                  className="hover:text-white transition-colors"
                >
                  {page.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Delhi-NCR Coverage Hubs */}
          <div className="lg:col-span-3 space-y-2.5">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold uppercase tracking-widest text-white">
                Delhi-NCR Reach
              </h4>
              <Link to="/locations" className="text-[10px] text-amber-300 hover:underline">
                View All 32 Hubs
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-1 text-[11px] text-neutral-400">
              {locationsList.slice(0, 6).map((loc, i) => (
                <span key={i} className="hover:text-white transition-colors cursor-default">
                  {loc}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Middle Row: Copyright & Back to Top */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 py-6 border-b border-white/10 text-xs tracking-wider text-[#8E8D8A] uppercase items-center">
          <div className="md:col-span-4 text-center md:text-left">
            <span>4 LOTUS INTERIOR · 15+ YEARS DESIGN EXCELLENCE</span>
          </div>

          <div className="md:col-span-4 text-center">
            <span className="tracking-[0.2em] font-medium text-[#CCCCCC]">
              CRAFTED INTERIOR ARCHITECTURE
            </span>
          </div>

          <div className="md:col-span-4 flex items-center justify-center md:justify-end gap-4 text-center md:text-right">
            <span>© 2026 4 Lotus Interior - All Rights Reserved.</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Scroll to top of page"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Giant Bottom Typography: 4 LOTUS */}
        <div className="pt-8 pb-4 text-center select-none overflow-hidden">
          <h2 className="text-[15vw] font-extrabold tracking-[-0.04em] text-white leading-none whitespace-nowrap opacity-95">
            4 LOTUS
          </h2>
        </div>
      </div>
    </footer>
  );
}
