import React, { useState, useEffect } from "react";
import { X, Check, Phone, Send, MapPin, Video, Building2 } from "lucide-react";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [projectType, setProjectType] = useState("Residential Flat / Villa");
  const [consultationMode, setConsultationMode] = useState("Studio Meeting (Janakpuri)");
  const [location, setLocation] = useState("Delhi-NCR");
  const [budgetRange, setBudgetRange] = useState("₹15 Lakhs - ₹35 Lakhs");
  const [submitted, setSubmitted] = useState(false);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      const text = encodeURIComponent(
        `Hi 4 Lotus Interior! My name is ${name}. I would like to schedule a ${consultationMode} for my ${projectType} in ${location}. Estimated Budget: ${budgetRange}. My Phone: ${phone}`
      );
      window.open(`https://wa.me/919810698082?text=${text}`, "_blank");
    }, 1000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-headline"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in overflow-y-auto"
    >
      <div className="relative w-full max-w-lg bg-[#F8F7F5] border border-black/10 rounded-[8px] p-6 sm:p-9 shadow-2xl overflow-hidden my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-black/5 text-black transition-colors"
          aria-label="Close consultation modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div className="space-y-5">
            <div className="space-y-1.5 pr-6">
              <span className="text-[11px] font-semibold tracking-[0.2em] text-[#777777] uppercase block">
                4 Lotus Interior Studio
              </span>
              <h3 id="modal-headline" className="text-xl sm:text-2xl font-bold tracking-tight text-[#111111] uppercase">
                Schedule Spatial Consultation
              </h3>
              <p className="text-xs sm:text-[13px] text-[#666666]">
                Consult directly with our senior architects. No obligation, 100% bespoke guidance.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Consultation Format Selector */}
              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#333333] mb-1.5">
                  Choose Consultation Format
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {[
                    { label: "Studio Meeting", desc: "Janakpuri", icon: Building2 },
                    { label: "On-Site Visit", desc: "Delhi-NCR", icon: MapPin },
                    { label: "Virtual Call", desc: "Online 3D", icon: Video },
                  ].map((mode, i) => {
                    const isSelected = consultationMode.includes(mode.label);
                    return (
                      <button
                        type="button"
                        key={i}
                        onClick={() => setConsultationMode(`${mode.label} (${mode.desc})`)}
                        className={`p-2.5 rounded-[4px] border text-left transition-all flex flex-col justify-between ${
                          isSelected
                            ? "bg-black text-white border-black"
                            : "bg-white text-neutral-800 border-black/15 hover:border-black/40"
                        }`}
                      >
                        <mode.icon className={`w-3.5 h-3.5 mb-1 ${isSelected ? "text-amber-300" : "text-neutral-500"}`} />
                        <span className="text-xs font-semibold block">{mode.label}</span>
                        <span className={`text-[10px] ${isSelected ? "text-neutral-300" : "text-neutral-500"}`}>
                          {mode.desc}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#333333] mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Amit Sharma"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2 bg-white border border-black/15 rounded-[4px] text-xs sm:text-sm text-black focus:outline-none focus:border-black"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#333333] mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 098106 98082"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2 bg-white border border-black/15 rounded-[4px] text-xs sm:text-sm text-black focus:outline-none focus:border-black"
                  />
                </div>
              </div>

              {/* Project Type & Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#333333] mb-1">
                    Project Scope
                  </label>
                  <select
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    className="w-full px-3.5 py-2 bg-white border border-black/15 rounded-[4px] text-xs sm:text-sm text-black focus:outline-none focus:border-black"
                  >
                    <option>Residential Flat / Apartment</option>
                    <option>Luxury Villa / Independent Floor</option>
                    <option>Retail Showroom / Commercial</option>
                    <option>Modular Kitchen & Spa Bath</option>
                    <option>Complete Home Renovation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#333333] mb-1">
                    Location in Delhi-NCR
                  </label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="e.g. Janakpuri / Dwarka / South Delhi"
                    className="w-full px-3.5 py-2 bg-white border border-black/15 rounded-[4px] text-xs sm:text-sm text-black focus:outline-none focus:border-black"
                  />
                </div>
              </div>

              {/* Budget Range */}
              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#333333] mb-1">
                  Estimated Investment Budget
                </label>
                <select
                  value={budgetRange}
                  onChange={(e) => setBudgetRange(e.target.value)}
                  className="w-full px-3.5 py-2 bg-white border border-black/15 rounded-[4px] text-xs sm:text-sm text-black focus:outline-none focus:border-black"
                >
                  <option>₹10 Lakhs – ₹20 Lakhs</option>
                  <option>₹20 Lakhs – ₹35 Lakhs</option>
                  <option>₹35 Lakhs – ₹60 Lakhs</option>
                  <option>₹60 Lakhs – ₹1.5 Crore+</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-black text-white text-xs sm:text-[13px] font-semibold uppercase tracking-[0.15em] rounded-[4px] hover:bg-neutral-800 transition-all flex items-center justify-center gap-2 shadow-md mt-2"
              >
                <span>Confirm & Connect on WhatsApp</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>

            <div className="pt-3 border-t border-black/10 flex items-center justify-between text-xs text-[#666666]">
              <span>Prefer calling directly?</span>
              <a href="tel:09810698082" className="font-semibold text-black hover:underline flex items-center gap-1">
                <Phone className="w-3 h-3" />
                <span>+91 98106 98082</span>
              </a>
            </div>
          </div>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
              <Check className="w-6 h-6" />
            </div>
            <h4 className="text-lg sm:text-xl font-bold uppercase tracking-tight text-black">
              Consultation Scheduled!
            </h4>
            <p className="text-xs sm:text-sm text-[#555555] max-w-sm mx-auto">
              Thank you {name}. Redirecting you to WhatsApp to connect directly with the 4 Lotus senior architecture desk...
            </p>
            <button
              onClick={onClose}
              className="px-6 py-2 bg-black text-white text-xs font-semibold uppercase tracking-widest rounded-full"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
