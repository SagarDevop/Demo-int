import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import FaqSection from "@/components/FaqSection";
import ConsultationModal from "@/components/ConsultationModal";
import SEO from "@/components/SEO";
import { Phone, Mail, Clock, Building, Factory, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [consultationOpen, setConsultationOpen] = useState(false);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#F8F7F5] flex flex-col justify-between selection:bg-[#111111] selection:text-white">
      <SEO
        title="Contact 4 Lotus Interior | Studio Janakpuri & Factory Kirti Nagar"
        description="Book a consultation with Principal Architect Rashid Ali at our Janakpuri Studio (Plot No-18, Main Palam Dwarka Rd) or call +91 98106 98082 / +91 98113 63064."
        keywords="contact 4 lotus interior, architect rashid ali phone, interior designer janakpuri contact, interior designer dwarka phone, kirti nagar furniture factory address"
      />

      <Navbar onOpenConsultation={() => setConsultationOpen(true)} />

      {/* Page Header */}
      <PageHeader
        eyebrow="STUDIO CONSULTATIONS & VISITS"
        title="Contact 4 Lotus Interior"
        description="Book an architectural spatial consultation with Principal Architect Rashid Ali at our Janakpuri Design Studio or schedule an on-site property audit."
        breadcrumbs={[{ label: "Home", href: "/" }]}
      />

      {/* Contact Details & Form Section */}
      <section className="w-full py-16 md:py-24 px-4 md:px-10 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Studio Contact & Addresses */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-semibold tracking-[0.2em] text-[#777777] uppercase block">
                DIRECT CHANNELS
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold uppercase text-[#111111]">
                Let&apos;s Discuss Your Vision
              </h2>
              <p className="text-xs sm:text-sm text-[#555555] font-light leading-relaxed">
                Whether you have an architectural blueprint or an idea for a full turnkey makeover, our senior designers are available for direct discussion.
              </p>
            </div>

            {/* Direct Phone & Email Cards */}
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href="tel:09810698082"
                  className="flex items-center gap-4 p-5 bg-white border border-black/[0.08] rounded-[4px] hover:border-black transition-colors group shadow-sm"
                >
                  <div className="p-3 rounded-full bg-black text-white group-hover:bg-amber-600 transition-colors shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-[#777777] block">
                      Direct Line 1 (Call)
                    </span>
                    <span className="text-sm font-bold text-[#111111] group-hover:text-black">
                      +91 98106 98082
                    </span>
                  </div>
                </a>

                <a
                  href="tel:09811363064"
                  className="flex items-center gap-4 p-5 bg-white border border-black/[0.08] rounded-[4px] hover:border-black transition-colors group shadow-sm"
                >
                  <div className="p-3 rounded-full bg-black text-white group-hover:bg-amber-600 transition-colors shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-[#777777] block">
                      Direct Line 2 (Call)
                    </span>
                    <span className="text-sm font-bold text-[#111111] group-hover:text-black">
                      +91 98113 63064
                    </span>
                  </div>
                </a>
              </div>

              <a
                href="mailto:contact@4lotusinterior.in"
                className="flex items-center gap-4 p-6 bg-white border border-black/[0.08] rounded-[4px] hover:border-black transition-colors group shadow-sm"
              >
                <div className="p-3 rounded-full bg-black text-white group-hover:bg-amber-600 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#777777] block">
                    Official Inquiries & Estimates
                  </span>
                  <span className="text-sm sm:text-base font-bold text-[#111111]">
                    contact@4lotusinterior.in
                  </span>
                </div>
              </a>
            </div>

            {/* Dual Location Cards */}
            <div className="space-y-4 pt-4 border-t border-black/[0.08]">
              {/* Studio HQ */}
              <div className="p-6 bg-white border border-black/[0.08] rounded-[4px] space-y-2.5">
                <div className="flex items-center gap-2 text-black font-bold uppercase text-xs tracking-wider">
                  <Building className="w-4 h-4 text-amber-800" />
                  <h4>Design Studio & Head Office · Janakpuri</h4>
                </div>
                <p className="text-xs text-[#555555] leading-relaxed">
                  Plot No-18, 1st Floor, Main Palam Dwarka Road, Near Dabri Police Station, South West Delhi, New Delhi 110045
                </p>
                <div className="flex items-center gap-2 text-[11px] text-[#777777] pt-1">
                  <Clock className="w-3.5 h-3.5 text-black" />
                  <span>Mon – Sat : 10:00 AM – 06:00 PM (Sunday by Appointment)</span>
                </div>
              </div>

              {/* Manufacturing Facility */}
              <div className="p-6 bg-white border border-black/[0.08] rounded-[4px] space-y-2.5">
                <div className="flex items-center gap-2 text-black font-bold uppercase text-xs tracking-wider">
                  <Factory className="w-4 h-4 text-amber-800" />
                  <h4>Custom Joinery & Millwork Facility · Kirti Nagar</h4>
                </div>
                <p className="text-xs text-[#555555] leading-relaxed">
                  Plot No-57, W.H.S, A Block, 2nd Floor, Kirti Nagar Industrial Area, Timber Market, West Delhi, New Delhi 110015
                </p>
                <p className="text-[11px] text-[#888888]">
                  Solid Teak Furniture, Modular Kitchens & Wardrobe Manufacturing
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Booking Form */}
          <div className="lg:col-span-7 bg-white border border-black/[0.08] p-8 md:p-12 rounded-[4px] shadow-sm">
            {submitted ? (
              <div className="text-center py-12 space-y-4 animate-fade-in">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold uppercase text-[#111111]">
                  Consultation Request Received
                </h3>
                <p className="text-xs sm:text-sm text-[#555555] max-w-md mx-auto leading-relaxed">
                  Thank you. Principal Architect Rashid Ali and our design coordination team will review your project brief and call you within 2 business hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 bg-black text-white text-xs uppercase tracking-wider font-semibold rounded-full hover:bg-neutral-800 transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <span className="text-xs font-semibold tracking-[0.2em] text-[#777777] uppercase block mb-1">
                    SCHEDULE AN ARCHITECTURAL BRIEF
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold uppercase text-[#111111]">
                    Request Project Consultation
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-black">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Vikram Malhotra"
                      className="w-full px-4 py-3 bg-[#FAF9F6] border border-black/10 rounded-[2px] text-xs sm:text-sm text-black focus:outline-none focus:border-black transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-black">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +91 98100 XXXXX"
                      className="w-full px-4 py-3 bg-[#FAF9F6] border border-black/10 rounded-[2px] text-xs sm:text-sm text-black focus:outline-none focus:border-black transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-black">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. name@example.com"
                      className="w-full px-4 py-3 bg-[#FAF9F6] border border-black/10 rounded-[2px] text-xs sm:text-sm text-black focus:outline-none focus:border-black transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-black">
                      Project Location (Delhi-NCR)
                    </label>
                    <select
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full px-4 py-3 bg-[#FAF9F6] border border-black/10 rounded-[2px] text-xs sm:text-sm text-black focus:outline-none focus:border-black transition-colors"
                    >
                      <option value="Janakpuri / Dwarka">Janakpuri / Dwarka / West Delhi</option>
                      <option value="South Delhi (GK / Vasant Kunj / Hauz Khas)">South Delhi (GK / Vasant Kunj / Hauz Khas)</option>
                      <option value="Gurgaon (DLF / Golf Course Rd)">Gurgaon (DLF / Golf Course Rd)</option>
                      <option value="Noida / Greater Noida">Noida / Greater Noida</option>
                      <option value="North & East Delhi">North & East Delhi</option>
                      <option value="Faridabad / Ghaziabad / Sonipat">Faridabad / Ghaziabad / Sonipat</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-black">
                      Scope of Work
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3 bg-[#FAF9F6] border border-black/10 rounded-[2px] text-xs sm:text-sm text-black focus:outline-none focus:border-black transition-colors"
                    >
                      <option value="Full Residential Villa / Flat">Full Residential Villa / Flat</option>
                      <option value="Modular Kitchen & Wardrobes">Modular Kitchen & Wardrobes</option>
                      <option value="Corporate Office Interior">Corporate Office Interior</option>
                      <option value="Retail Outlet / Showroom">Retail Outlet / Showroom</option>
                      <option value="Turnkey Civil & Structural Remodeling">Turnkey Civil & Structural Remodeling</option>
                      <option value="Bathroom Remodeling">Bathroom Remodeling</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-black">
                      Estimated Investment Range
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 bg-[#FAF9F6] border border-black/10 rounded-[2px] text-xs sm:text-sm text-black focus:outline-none focus:border-black transition-colors"
                    >
                      <option value="₹5 Lakh - ₹15 Lakh">₹5 Lakh - ₹15 Lakh</option>
                      <option value="₹15 Lakh - ₹35 Lakh">₹15 Lakh - ₹35 Lakh</option>
                      <option value="₹35 Lakh - ₹75 Lakh">₹35 Lakh - ₹75 Lakh</option>
                      <option value="₹75 Lakh+ (Luxury Estate / Commercial)">₹75 Lakh+ (Luxury Estate / Commercial)</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-black">
                    Brief Project Details (Optional)
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about the property square footage, number of rooms, or specific design preferences..."
                    className="w-full px-4 py-3 bg-[#FAF9F6] border border-black/10 rounded-[2px] text-xs sm:text-sm text-black focus:outline-none focus:border-black transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-black text-white text-xs uppercase tracking-widest font-bold rounded-full hover:bg-neutral-800 transition-colors shadow-md"
                >
                  Submit Consultation Request ↗
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FaqSection />

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
