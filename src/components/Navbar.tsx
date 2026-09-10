import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X, ChevronDown, ExternalLink, MapPin } from "lucide-react";
import { navigationData } from "@/data/navigationData";

interface NavbarProps {
  onOpenConsultation?: () => void;
  onOpenProjects?: () => void;
}

export default function Navbar({ onOpenConsultation }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle escape key on mobile drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
        setActiveDropdown(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    window.scrollTo({ top: 0, behavior: "instant" as any });
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navItems = navigationData;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[#F8F7F5]/95 backdrop-blur-md border-b border-black/[0.08] py-3.5 shadow-sm"
            : "bg-[#F8F7F5]/90 backdrop-blur-sm border-b border-black/[0.04] py-4"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2.5 group py-1 shrink-0"
            aria-label="4 Lotus Interior Homepage"
          >
            <img
              src="/assets/logo.webp"
              alt="4 Lotus Interior Architecture & Design Studio Official Logo"
              className="w-7 h-7 sm:w-8 sm:h-8 object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <span className="text-sm sm:text-base font-bold tracking-[0.16em] text-[#111111] uppercase group-hover:opacity-80 transition-opacity whitespace-nowrap">
              LOTUS INTERIOR
            </span>
          </Link>

          {/* Desktop Navigation Menu (Includes Source right after Contact) */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-6 2xl:gap-7 text-[12px] xl:text-[12.5px] 2xl:text-[13px] tracking-[0.08em] font-medium uppercase text-[#333333]">
            {navItems.map((item) => {
              const hasChildren = item.children && item.children.length > 0;
              const isCurrentRoute =
                item.path === pathname ||
                (hasChildren && item.children?.some((c) => c.path === pathname));

              if (!hasChildren) {
                return (
                  <Link
                    key={item.label}
                    to={item.path || "/"}
                    className={`transition-colors relative py-1.5 ${
                      isCurrentRoute
                        ? "text-black font-semibold after:w-full"
                        : "hover:text-black after:w-0 hover:after:w-full"
                    } after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:bg-black after:transition-all`}
                  >
                    {item.label}
                  </Link>
                );
              }

              const isSource = item.label === "Source";

              return (
                <div
                  key={item.label}
                  className="relative group py-1.5"
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    className={`flex items-center gap-1 transition-colors uppercase py-1 ${
                      isCurrentRoute || (isSource && pathname === "/sitemap")
                        ? "text-black font-semibold"
                        : "hover:text-black text-[#333333]"
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180 text-neutral-400" />
                  </button>

                  {/* Dropdown Menu Box */}
                  <div
                    className={`absolute ${
                      isSource
                        ? "right-0 top-full pt-2.5 z-50"
                        : "left-1/2 -translate-x-1/2 top-full pt-2.5 z-50"
                    } transition-all duration-200 ${
                      activeDropdown === item.label
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 translate-y-2 pointer-events-none"
                    }`}
                  >
                    {isSource ? (
                      <div className="bg-white/95 backdrop-blur-xl border border-black/10 rounded-[8px] shadow-2xl p-5 w-[940px] max-w-[calc(100vw-32px)]">
                        <div className="flex items-center justify-between px-3 py-2 border-b border-black/[0.08] mb-2 text-[10.5px] font-bold tracking-widest uppercase text-neutral-500">
                          <span>Source Directory ({item.children?.length} Portals)</span>
                          <span className="text-[9.5px] font-medium text-neutral-400 bg-black/5 px-2.5 py-0.5 rounded">4lotus.co & Sitemap</span>
                        </div>
                        <div className="max-h-[520px] overflow-y-auto pr-2 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-1">
                          {item.children?.map((sub) => {
                            const isExternal = sub.path.startsWith("http");
                            return isExternal ? (
                              <a
                                key={sub.path}
                                href={sub.path}
                                className="flex items-center justify-between px-3 py-1.5 text-[11.5px] font-medium tracking-wide text-[#444444] hover:text-black hover:bg-black/5 rounded-[4px] transition-colors"
                                title={sub.label}
                              >
                                <span className="truncate">{sub.label}</span>
                                <ExternalLink className="w-3.5 h-3.5 text-neutral-400 shrink-0 ml-2 opacity-60" />
                              </a>
                            ) : (
                              <Link
                                key={sub.path}
                                to={sub.path}
                                className="block px-3 py-1.5 text-[11.5px] font-medium tracking-wide text-[#444444] hover:text-black hover:bg-black/5 rounded-[4px] transition-colors truncate"
                                title={sub.label}
                              >
                                {sub.label}
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    ) : (
                      <div
                        className={`bg-white/95 backdrop-blur-xl border border-black/10 rounded-[8px] shadow-2xl p-4 ${
                          item.label === "Availability"
                            ? "w-[860px] max-w-[calc(100vw-32px)]"
                            : item.label === "Commercial"
                            ? "w-[520px] grid grid-cols-2 gap-1.5"
                            : item.label === "Residential"
                            ? "w-[440px] grid grid-cols-2 gap-1.5"
                            : "w-[300px] space-y-1"
                        }`}
                      >
                        {/* Availability: NCR left side, Delhi localities right side */}
                        {item.label === "Availability" ? (
                          <div className="flex gap-5">
                            {/* Left: NCR Core Regions */}
                            <div className="w-[200px] shrink-0 border-r border-black/[0.08] pr-4 space-y-1">
                              <div className="flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-bold tracking-widest uppercase text-neutral-500 border-b border-black/[0.06] mb-1">
                                <MapPin className="w-3 h-3 text-amber-700" />
                                <span>NCR Core Regions</span>
                              </div>
                              {item.children?.slice(0, 6).map((sub) => (
                                <Link
                                  key={sub.path}
                                  to={sub.path}
                                  className="block px-3 py-1.5 text-[11px] font-medium tracking-wide text-[#333333] hover:text-black hover:bg-black/5 rounded-[4px] transition-colors"
                                >
                                  {sub.label}
                                </Link>
                              ))}
                            </div>

                            {/* Right: Delhi Prime Localities in 3 columns */}
                            <div className="flex-1 space-y-1">
                              <div className="px-2 py-1.5 text-[10px] font-bold tracking-widest uppercase text-neutral-500 border-b border-black/[0.06] mb-1">
                                <span>Delhi Prime Localities ({item.children?.slice(6).length})</span>
                              </div>
                              <div className="grid grid-cols-3 gap-x-3 gap-y-0.5">
                                {item.children?.slice(6).map((sub) => (
                                  <Link
                                    key={sub.path}
                                    to={sub.path}
                                    className="block px-2 py-1.5 text-[11px] font-medium tracking-wide text-[#444444] hover:text-black hover:bg-black/5 rounded-[4px] transition-colors truncate"
                                    title={sub.label}
                                  >
                                    {sub.label}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </div>
                        ) : (
                          item.children?.map((sub) => {
                            const isExternal = sub.path.startsWith("http");
                            return isExternal ? (
                              <a
                                key={sub.path}
                                href={sub.path}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-between px-3 py-2 text-[11.5px] font-medium tracking-wide text-[#444444] hover:text-black hover:bg-black/5 rounded-[4px] transition-colors"
                              >
                                <span className="truncate">{sub.label}</span>
                                <ExternalLink className="w-3 h-3 text-neutral-400 shrink-0 ml-2" />
                              </a>
                            ) : (
                              <Link
                                key={sub.path}
                                to={sub.path}
                                className="block px-3 py-2 text-[11.5px] font-medium tracking-wide text-[#444444] hover:text-black hover:bg-black/5 rounded-[4px] transition-colors"
                              >
                                {sub.label}
                              </Link>
                            );
                          })
                        )}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </nav>

          {/* Right Direct Phone Numbers (Both Primary & Secondary) */}
          <div className="hidden sm:flex items-center gap-2 xl:gap-2.5 shrink-0">
            <a
              href="tel:09810698082"
              className="flex items-center gap-1.5 px-3 py-1.5 xl:px-3.5 xl:py-2 border border-black/20 hover:border-black bg-white/80 hover:bg-white text-[#111111] rounded-full text-[11px] xl:text-xs font-semibold tracking-wider transition-all shadow-sm hover:scale-[1.02] whitespace-nowrap"
              aria-label="Call studio phone +91 98106 98082"
              title="Studio Phone: +91 98106 98082"
            >
              <Phone className="w-3 h-3 xl:w-3.5 xl:h-3.5 text-amber-700 shrink-0" />
              <span>+91 98106 98082</span>
            </a>

            <a
              href="tel:09811363064"
              className="flex items-center gap-1.5 px-3 py-1.5 xl:px-3.5 xl:py-2 border border-black/20 hover:border-black bg-white/80 hover:bg-white text-[#111111] rounded-full text-[11px] xl:text-xs font-semibold tracking-wider transition-all shadow-sm hover:scale-[1.02] whitespace-nowrap"
              aria-label="Call factory and studio phone +91 98113 63064"
              title="Kirti Nagar Studio: +91 98113 63064"
            >
              <Phone className="w-3 h-3 xl:w-3.5 xl:h-3.5 text-amber-700 shrink-0" />
              <span>+91 98113 63064</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-black"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Fullscreen Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-[#F8F7F5] flex flex-col justify-between pb-10 lg:hidden animate-fade-in overflow-y-auto"
        >
          {/* Top Bar with Brand & Cancel / Close Button */}
          <div className="sticky top-0 bg-[#F8F7F5]/95 backdrop-blur-md border-b border-black/[0.08] px-6 py-4 flex items-center justify-between z-20 shrink-0">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2.5"
            >
              <img
                src="/assets/logo.webp"
                alt="4 Lotus Interior"
                className="w-7 h-7 object-contain"
              />
              <span className="text-sm font-bold tracking-[0.16em] text-black uppercase">
                LOTUS INTERIOR
              </span>
            </Link>

            {/* Cancel Button */}
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#111111] hover:bg-neutral-800 text-white text-xs font-semibold uppercase tracking-wider transition-all shadow-sm active:scale-95"
              aria-label="Cancel and close navigation menu"
            >
              <span>Cancel</span>
              <X className="w-4 h-4 text-neutral-300" />
            </button>
          </div>

          <div className="px-6 pt-6 flex flex-col space-y-3 text-sm uppercase tracking-[0.12em] font-medium text-black">
            {navItems.map((item) => {
              const hasChildren = item.children && item.children.length > 0;
              if (!hasChildren) {
                return (
                  <Link
                    key={item.label}
                    to={item.path || "/"}
                    onClick={() => setMobileMenuOpen(false)}
                    className="border-b border-black/10 pb-2.5 text-[#333333]"
                  >
                    {item.label}
                  </Link>
                );
              }

              const isOpen = mobileAccordion === item.label;

              return (
                <div key={item.label} className="border-b border-black/10 pb-2.5">
                  <button
                    onClick={() => setMobileAccordion(isOpen ? null : item.label)}
                    className="w-full flex items-center justify-between py-1 text-left font-semibold text-black"
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="pl-3 pt-2 space-y-2 text-xs normal-case tracking-normal max-h-64 overflow-y-auto bg-white/70 p-3 rounded mt-2 border border-black/5">
                      {item.children?.map((sub) => {
                        const isExternal = sub.path.startsWith("http");
                        return isExternal ? (
                          <a
                            key={sub.path}
                            href={sub.path}
                            className="flex items-center justify-between py-1 text-[#555555] hover:text-black border-b border-black/5"
                          >
                            <span>{sub.label}</span>
                            <ExternalLink className="w-3 h-3 text-neutral-400" />
                          </a>
                        ) : (
                          <Link
                            key={sub.path}
                            to={sub.path}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block py-1 text-[#555555] hover:text-black border-b border-black/5"
                          >
                            {sub.label}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="pt-6 px-6 border-t border-black/10 space-y-2.5">
            <a
              href="tel:09810698082"
              className="flex items-center justify-center gap-2 p-3 bg-black text-white text-xs uppercase tracking-wider font-semibold rounded-full shadow"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>+91 98106 98082 (Dwarka Studio)</span>
            </a>
            <a
              href="tel:09811363064"
              className="flex items-center justify-center gap-2 p-3 border border-black/20 bg-white text-black text-xs uppercase tracking-wider font-semibold rounded-full shadow-sm"
            >
              <Phone className="w-4 h-4 text-amber-700" />
              <span>+91 98113 63064 (Kirti Nagar Studio)</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
