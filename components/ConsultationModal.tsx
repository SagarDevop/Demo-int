'use client';

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
  const [whatsappUrl, setWhatsappUrl] = useState("");

  // Close on Escape key press and lock body scroll
  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    const messageText = [
      "Hello 4 Lotus Interior,",
      "",
      "I have an interior design consultation enquiry.",
      "",
      `Name: ${name.trim()}`,
      `Phone: ${phone.trim()}`,
      `Project Type: ${projectType}`,
      `Consultation Mode: ${consultationMode}`,
      `Location: ${location}`,
      `Estimated Budget: ${budgetRange}`,
      "",
      "Please contact me regarding this consultation.",
      "",
      "4 Lotus Interior Website Enquiry"
    ].join("\n");

    const targetUrl = `https://wa.me/919810698082?text=${encodeURIComponent(messageText)}`;
    setWhatsappUrl(targetUrl);
    setSubmitted(true);
    // Direct user-gesture navigation without delayed popup blockers
    window.location.href = targetUrl;
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-headline"
      className="fixed inset-0 z-[9999] overflow-y-auto bg-black/80 backdrop-blur-md p-4 sm:p-6 md:p-8 flex justify-center items-start animate-fade-in"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      {/* Top Floating Close Pill (visible on tablet/desktop) */}
      <button
        onClick={onClose}
        className="hidden sm:flex fixed top-4 right-4 sm:top-6 sm:right-6 z-[10000] items-center gap-1.5 px-4 py-2 rounded-full bg-black/70 hover:bg-black text-white backdrop-blur-lg border border-white/20 transition-all duration-200 shadow-2xl text-xs uppercase tracking-widest font-semibold cursor-pointer"
        aria-label="Close consultation modal"
      >
        <X className="w-4 h-4" />
        <span>Close (ESC)</span>
      </button>

      <div className="relative w-full max-w-lg bg-[#F8F7F5] dark:bg-[#141414] border border-black/10 dark:border-white/15 rounded-[10px] p-5 sm:p-9 shadow-2xl my-6 sm:my-12">
        {/* Close Button Inside Card */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10 text-black dark:text-white transition-colors"
          aria-label="Close consultation modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div className="space-y-5">
            <div className="space-y-1.5 pr-6">
              <span className="text-[11px] font-semibold tracking-[0.2em] text-[#777777] dark:text-neutral-400 uppercase block">
                4 Lotus Interior Studio
              </span>
              <h3 id="modal-headline" className="text-xl sm:text-2xl font-bold tracking-tight text-[#111111] dark:text-white uppercase">
                Schedule Spatial Consultation
              </h3>
              <p className="text-xs sm:text-[13px] text-[#666666] dark:text-[#A09E9B]">
                Consult directly with our senior architects. No obligation, 100% bespoke guidance.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Consultation Format Selector */}
              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#333333] dark:text-neutral-300 mb-1.5">
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
                            ? "bg-black dark:bg-white text-white dark:text-black border-black dark:border-white shadow-sm"
                            : "bg-white dark:bg-[#1e1e1e] text-neutral-800 dark:text-neutral-200 border-black/15 dark:border-white/15 hover:border-black/40 dark:hover:border-white/40"
                        }`}
                      >
                        <mode.icon className={`w-3.5 h-3.5 mb-1 ${isSelected ? "text-amber-300 dark:text-amber-600" : "text-neutral-500 dark:text-neutral-400"}`} />
                        <span className="text-xs font-semibold block">{mode.label}</span>
                        <span className={`text-[10px] ${isSelected ? "text-neutral-300 dark:text-neutral-700" : "text-neutral-500 dark:text-neutral-400"}`}>
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
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#333333] dark:text-neutral-300 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Amit Sharma"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2 bg-white dark:bg-[#1c1c1c] border border-black/15 dark:border-white/15 rounded-[4px] text-xs sm:text-sm text-black dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none focus:border-black dark:focus:border-white"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#333333] dark:text-neutral-300 mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 098106 98082"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2 bg-white dark:bg-[#1c1c1c] border border-black/15 dark:border-white/15 rounded-[4px] text-xs sm:text-sm text-black dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none focus:border-black dark:focus:border-white"
                  />
                </div>
              </div>

              {/* Project Type & Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#333333] dark:text-neutral-300 mb-1">
                    Project Scope
                  </label>
                  <select
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    className="w-full px-3.5 py-2 bg-white dark:bg-[#1c1c1c] border border-black/15 dark:border-white/15 rounded-[4px] text-xs sm:text-sm text-black dark:text-white focus:outline-none focus:border-black dark:focus:border-white"
                  >
                    <option className="dark:bg-[#1c1c1c] dark:text-white">Residential Flat / Apartment</option>
                    <option className="dark:bg-[#1c1c1c] dark:text-white">Luxury Villa / Independent Floor</option>
                    <option className="dark:bg-[#1c1c1c] dark:text-white">Retail Showroom / Commercial</option>
                    <option className="dark:bg-[#1c1c1c] dark:text-white">Modular Kitchen & Spa Bath</option>
                    <option className="dark:bg-[#1c1c1c] dark:text-white">Complete Home Renovation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#333333] dark:text-neutral-300 mb-1">
                    Location in Delhi-NCR
                  </label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="e.g. Janakpuri / Dwarka / South Delhi"
                    className="w-full px-3.5 py-2 bg-white dark:bg-[#1c1c1c] border border-black/15 dark:border-white/15 rounded-[4px] text-xs sm:text-sm text-black dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none focus:border-black dark:focus:border-white"
                  />
                </div>
              </div>

              {/* Budget Range */}
              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#333333] dark:text-neutral-300 mb-1">
                  Estimated Investment Budget
                </label>
                <select
                  value={budgetRange}
                  onChange={(e) => setBudgetRange(e.target.value)}
                  className="w-full px-3.5 py-2 bg-white dark:bg-[#1c1c1c] border border-black/15 dark:border-white/15 rounded-[4px] text-xs sm:text-sm text-black dark:text-white focus:outline-none focus:border-black dark:focus:border-white"
                >
                  <option className="dark:bg-[#1c1c1c] dark:text-white">₹10 Lakhs – ₹20 Lakhs</option>
                  <option className="dark:bg-[#1c1c1c] dark:text-white">₹20 Lakhs – ₹35 Lakhs</option>
                  <option className="dark:bg-[#1c1c1c] dark:text-white">₹35 Lakhs – ₹60 Lakhs</option>
                  <option className="dark:bg-[#1c1c1c] dark:text-white">₹60 Lakhs – ₹1.5 Crore+</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#111111] dark:bg-white text-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-200 text-xs sm:text-[13px] font-semibold uppercase tracking-[0.15em] rounded-[4px] transition-all flex items-center justify-center gap-2 shadow-md mt-2"
              >
                <span>Send via WhatsApp</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>

            <div className="pt-3 border-t border-black/10 dark:border-white/10 flex items-center justify-between text-xs text-[#666666] dark:text-neutral-400">
              <span>Prefer calling directly?</span>
              <a href="tel:09810698082" className="font-semibold text-black dark:text-white hover:underline flex items-center gap-1">
                <Phone className="w-3 h-3 text-amber-600 dark:text-amber-400" />
                <span>+91 98106 98082</span>
              </a>
            </div>
          </div>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto">
              <Check className="w-6 h-6" />
            </div>
            <h4 className="text-lg sm:text-xl font-bold uppercase tracking-tight text-black dark:text-white">
              Enquiry Ready in WhatsApp
            </h4>
            <p className="text-xs sm:text-sm text-[#555555] dark:text-[#D4D2CD] max-w-sm mx-auto">
              Your consultation enquiry is ready in WhatsApp. Tap <strong>Send</strong> in WhatsApp to send it directly to our team.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 justify-center pt-2">
              {whatsappUrl && (
                <a
                  href={whatsappUrl}
                  className="px-6 py-2.5 bg-black dark:bg-white text-white dark:text-black text-xs font-semibold uppercase tracking-wider rounded-full hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors inline-flex items-center justify-center gap-1.5 shadow"
                >
                  <span>Open WhatsApp Again</span>
                  <Send className="w-3.5 h-3.5" />
                </a>
              )}
              <button
                onClick={onClose}
                className="px-5 py-2.5 border border-black/20 dark:border-white/20 text-[#111111] dark:text-white text-xs font-semibold uppercase tracking-wider rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
