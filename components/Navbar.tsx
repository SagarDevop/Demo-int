'use client';

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X, ChevronDown, ExternalLink, MapPin } from "lucide-react";
import { navigationData } from "@/data/navigationData";
import ThemeToggle from "@/components/ThemeToggle";

interface NavbarProps {
  onOpenConsultation?: () => void;
  onOpenProjects?: () => void;
}

export default function Navbar({ onOpenConsultation }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [phoneDropdownOpen, setPhoneDropdownOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);
  const pathname = usePathname() || "/";
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle escape key and click outside for dropdowns
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
        setActiveDropdown(null);
        setPhoneDropdownOpen(false);
      }
    };
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
        setPhoneDropdownOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close mobile menu and dropdowns on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    setPhoneDropdownOpen(false);
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
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[#F8F7F5]/95 dark:bg-[#0C0C0C]/95 backdrop-blur-md border-b border-black/[0.08] dark:border-white/10 py-3.5 shadow-sm"
            : "bg-[#F8F7F5]/90 dark:bg-[#0C0C0C]/90 backdrop-blur-sm border-b border-black/[0.04] dark:border-white/5 py-4"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group py-1 shrink-0"
            aria-label="4 Lotus Interior Homepage"
          >
            <img
              src="/assets/logo.webp"
              alt="4 Lotus Interior Architecture & Design Studio Official Logo"
              className="w-7 h-7 sm:w-8 sm:h-8 object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <span className="text-sm sm:text-base font-bold tracking-[0.16em] text-[#111111] dark:text-white uppercase group-hover:opacity-80 transition-opacity whitespace-nowrap">
              LOTUS INTERIOR
            </span>
          </Link>

          {/* Desktop Navigation Menu */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7 2xl:gap-8 text-[12px] xl:text-[12.5px] 2xl:text-[13px] tracking-[0.08em] font-medium uppercase text-[#333333] dark:text-neutral-300">
            {navItems.map((item) => {
              const hasChildren = item.children && item.children.length > 0;
              const isCurrentRoute =
                item.path === pathname ||
                (hasChildren && item.children?.some((c) => c.path === pathname));

              if (!hasChildren) {
                return (
                  <Link
                    key={item.label}
                    href={item.path || "/"}
                    className={`transition-colors relative py-1.5 ${
                      isCurrentRoute
                        ? "text-black dark:text-white font-semibold after:w-full"
                        : "hover:text-black dark:hover:text-white after:w-0 hover:after:w-full"
                    } after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:bg-black dark:after:bg-white after:transition-all`}
                  >
                    {item.label}
                  </Link>
                );
              }

              const isSource = item.label === "Source";
              const isDropdownOpen = activeDropdown === item.label;

              return (
                <div
                  key={item.label}
                  className="relative group py-1.5"
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    type="button"
                    onClick={() => setActiveDropdown(isDropdownOpen ? null : item.label)}
                    aria-expanded={isDropdownOpen}
                    aria-haspopup="true"
                    className={`flex items-center gap-1 transition-colors uppercase py-1 ${
                      isCurrentRoute || (isSource && pathname === "/sitemap")
                        ? "text-black dark:text-white font-semibold"
                        : "hover:text-black dark:hover:text-white text-[#333333] dark:text-neutral-300"
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 text-neutral-400 dark:text-neutral-500 group-hover:rotate-180 ${
                        isDropdownOpen ? "rotate-180 text-black dark:text-white" : ""
                      }`}
                    />
                  </button>

                  {/* Dropdown Menu Box */}
                  <div
                    className={`absolute ${
                      isSource
                        ? "right-0 top-full pt-2.5 z-50"
                        : "left-1/2 -translate-x-1/2 top-full pt-2.5 z-50"
                    } transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto ${
                      isDropdownOpen
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 translate-y-2 pointer-events-none"
                    }`}
                  >
                    {isSource ? (
                      <div className="bg-white dark:bg-[#141414] border border-black/15 dark:border-white/15 rounded-[8px] shadow-[0_20px_50px_rgba(0,0,0,0.22)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.8)] p-5 w-[940px] max-w-[calc(100vw-32px)]">
                        <div className="flex items-center justify-between px-3 py-2 border-b border-black/[0.08] dark:border-white/10 mb-2 text-[10.5px] font-bold tracking-widest uppercase text-neutral-500 dark:text-neutral-400">
                          <span>Source Directory ({item.children?.length} Portals)</span>
                          <span className="text-[9.5px] font-medium text-neutral-400 dark:text-neutral-300 bg-black/5 dark:bg-white/10 px-2.5 py-0.5 rounded">
                            4lotus.co & Sitemap
                          </span>
                        </div>
                        <div className="max-h-[520px] overflow-y-auto pr-2 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-1">
                          {item.children?.map((sub) => (
                            <a
                              key={sub.path}
                              href={sub.url}
                              className="block px-3 py-1.5 text-[11.5px] font-medium tracking-wide text-[#444444] dark:text-neutral-300 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 rounded-[4px] transition-colors truncate"
                              title={sub.label}
                              onClick={() => {
                                setActiveDropdown(null);
                              }}
                            >
                              {sub.label}
                            </a>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div
                        className={`bg-white dark:bg-[#141414] border border-black/15 dark:border-white/15 rounded-[8px] shadow-[0_20px_50px_rgba(0,0,0,0.22)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.8)] p-4 max-w-[calc(100vw-32px)] ${
                          item.label === "Locations" || item.label === "Availability"
                            ? "w-[860px]"
                            : item.label === "Commercial"
                            ? "w-[520px] grid grid-cols-2 gap-1.5"
                            : item.label === "Residential"
                            ? "w-[440px] grid grid-cols-2 gap-1.5"
                            : "w-[300px] space-y-1"
                        }`}
                      >
                        {/* Locations: NCR left side, Delhi localities right side */}
                        {item.label === "Locations" || item.label === "Availability" ? (
                          <div className="flex gap-5">
                            {/* Left: NCR Core Regions */}
                            <div className="w-[200px] shrink-0 border-r border-black/[0.08] dark:border-white/10 pr-4 space-y-1">
                              <div className="flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-bold tracking-widest uppercase text-neutral-500 dark:text-neutral-400 border-b border-black/[0.06] dark:border-white/10 mb-1">
                                <MapPin className="w-3 h-3 text-amber-700 dark:text-amber-400" />
                                <span>NCR Core Regions</span>
                              </div>
                              {item.children?.slice(0, 6).map((sub) => (
                                <Link
                                  key={sub.path}
                                  href={sub.path}
                                  className="block px-3 py-1.5 text-[11px] font-medium tracking-wide text-[#333333] dark:text-neutral-200 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 rounded-[4px] transition-colors"
                                >
                                  {sub.label}
                                </Link>
                              ))}
                            </div>

                            {/* Right: Delhi Prime Localities in 3 columns */}
                            <div className="flex-1 space-y-1">
                              <div className="px-2 py-1.5 text-[10px] font-bold tracking-widest uppercase text-neutral-500 dark:text-neutral-400 border-b border-black/[0.06] dark:border-white/10 mb-1">
                                <span>Delhi Prime Localities ({item.children?.slice(6).length})</span>
                              </div>
                              <div className="grid grid-cols-3 gap-x-3 gap-y-0.5">
                                {item.children?.slice(6).map((sub) => (
                                  <Link
                                    key={sub.path}
                                    href={sub.path}
                                    className="block px-2 py-1.5 text-[11px] font-medium tracking-wide text-[#444444] dark:text-neutral-300 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 rounded-[4px] transition-colors truncate"
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
                                className="flex items-center justify-between px-3 py-2 text-[11.5px] font-medium tracking-wide text-[#444444] dark:text-neutral-300 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 rounded-[4px] transition-colors"
                              >
                                <span className="truncate">{sub.label}</span>
                                <ExternalLink className="w-3 h-3 text-neutral-400 dark:text-neutral-500 shrink-0 ml-2" />
                              </a>
                            ) : (
                              <Link
                                key={sub.path}
                                href={sub.path}
                                className="block px-3 py-2 text-[11.5px] font-medium tracking-wide text-[#444444] dark:text-neutral-300 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 rounded-[4px] transition-colors"
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

          {/* Right Direct Phone Pill & Theme Toggle */}
          <div className="hidden sm:flex items-center gap-2.5 xl:gap-3 shrink-0">
            <ThemeToggle />

            {/* Studio Direct Lines Phone Popover */}
            <div
              className="relative group py-1"
              onMouseEnter={() => setPhoneDropdownOpen(true)}
              onMouseLeave={() => setPhoneDropdownOpen(false)}
            >
              <button
                type="button"
                onClick={() => setPhoneDropdownOpen((prev) => !prev)}
                aria-label="Studio contact numbers"
                aria-expanded={phoneDropdownOpen}
                className="flex items-center gap-2 px-3.5 py-1.5 xl:px-4 xl:py-2 border border-black/20 dark:border-white/20 hover:border-black dark:hover:border-white bg-white/80 dark:bg-white/10 hover:bg-white dark:hover:bg-white/20 text-[#111111] dark:text-white rounded-full text-[11px] xl:text-xs font-semibold tracking-wider transition-all shadow-sm hover:shadow whitespace-nowrap"
              >
                <Phone className="w-3 h-3 xl:w-3.5 xl:h-3.5 text-amber-700 dark:text-amber-400 shrink-0" />
                <span>+91 98106 98082</span>
                <ChevronDown
                  className={`w-3 h-3 text-neutral-400 dark:text-neutral-500 transition-transform duration-200 ${
                    phoneDropdownOpen ? "rotate-180 text-black dark:text-white" : "group-hover:rotate-180"
                  }`}
                />
              </button>

              {/* Studio Phone Directory Popover */}
              <div
                className={`absolute right-0 top-full pt-2 z-50 transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto ${
                  phoneDropdownOpen
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 translate-y-2 pointer-events-none"
                }`}
              >
                <div className="bg-white dark:bg-[#141414] border border-black/15 dark:border-white/15 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.22)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.85)] p-3 w-[290px] backdrop-blur-xl">
                  <div className="flex items-center justify-between px-2 pb-2 mb-1.5 border-b border-black/[0.08] dark:border-white/10 text-[9.5px] font-bold tracking-widest uppercase text-neutral-500 dark:text-neutral-400">
                    <span>Direct Studio Lines</span>
                    <span className="text-[9px] font-medium text-amber-700 dark:text-amber-400 bg-amber-500/10 dark:bg-amber-400/10 px-2 py-0.5 rounded-full">
                      Delhi NCR
                    </span>
                  </div>

                  <div className="space-y-1">
                    <a
                      href="tel:09810698082"
                      onClick={() => setPhoneDropdownOpen(false)}
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition-colors group/call"
                      title="Call Dwarka & Janakpuri Studio HQ"
                    >
                      <div className="w-8 h-8 rounded-full bg-amber-500/10 dark:bg-amber-400/15 flex items-center justify-center shrink-0 text-amber-800 dark:text-amber-400 group-hover/call:bg-amber-500 group-hover/call:text-white transition-colors">
                        <Phone className="w-3.5 h-3.5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[12px] font-bold tracking-wider text-black dark:text-white">
                          +91 98106 98082
                        </div>
                        <div className="text-[10px] text-neutral-500 dark:text-neutral-400 truncate">
                          Dwarka & Janakpuri Studio HQ
                        </div>
                      </div>
                    </a>

                    <a
                      href="tel:09811363064"
                      onClick={() => setPhoneDropdownOpen(false)}
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition-colors group/call"
                      title="Call Kirti Nagar Workshop & Millwork"
                    >
                      <div className="w-8 h-8 rounded-full bg-amber-500/10 dark:bg-amber-400/15 flex items-center justify-center shrink-0 text-amber-800 dark:text-amber-400 group-hover/call:bg-amber-500 group-hover/call:text-white transition-colors">
                        <Phone className="w-3.5 h-3.5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[12px] font-bold tracking-wider text-black dark:text-white">
                          +91 98113 63064
                        </div>
                        <div className="text-[10px] text-neutral-500 dark:text-neutral-400 truncate">
                          Kirti Nagar Workshop & Studio
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Right Controls: ThemeToggle & Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-black dark:text-white"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Fullscreen Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-[#F8F7F5] dark:bg-[#0C0C0C] flex flex-col justify-between pb-10 lg:hidden animate-fade-in overflow-y-auto"
        >
          {/* Top Bar with Brand & Cancel / Close Button */}
          <div className="sticky top-0 bg-[#F8F7F5]/95 dark:bg-[#0C0C0C]/95 backdrop-blur-md border-b border-black/[0.08] dark:border-white/10 px-6 py-4 flex items-center justify-between z-20 shrink-0">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2.5"
            >
              <img
                src="/assets/logo.webp"
                alt="4 Lotus Interior"
                className="w-7 h-7 object-contain"
              />
              <span className="text-sm font-bold tracking-[0.16em] text-black dark:text-white uppercase">
                LOTUS INTERIOR
              </span>
            </Link>

            {/* Cancel Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#111111] dark:bg-white/15 hover:bg-neutral-800 text-white text-xs font-semibold uppercase tracking-wider transition-all shadow-sm active:scale-95"
              aria-label="Cancel and close navigation menu"
            >
              <span>Cancel</span>
              <X className="w-4 h-4 text-neutral-300" />
            </button>
          </div>

          <div className="px-6 pt-6 flex flex-col space-y-3 text-sm uppercase tracking-[0.12em] font-medium text-black dark:text-white">
            {navItems.map((item) => {
              const hasChildren = item.children && item.children.length > 0;
              if (!hasChildren) {
                return (
                  <Link
                    key={item.label}
                    href={item.path || "/"}
                    onClick={() => setMobileMenuOpen(false)}
                    className="border-b border-black/10 dark:border-white/10 pb-2.5 text-[#333333] dark:text-neutral-200"
                  >
                    {item.label}
                  </Link>
                );
              }

              const isOpen = mobileAccordion === item.label;

              return (
                <div key={item.label} className="border-b border-black/10 dark:border-white/10 pb-2.5">
                  <button
                    type="button"
                    onClick={() => setMobileAccordion(isOpen ? null : item.label)}
                    className="w-full flex items-center justify-between py-1 text-left font-semibold text-black dark:text-white"
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="pl-3 pt-2 space-y-2 text-xs normal-case tracking-normal max-h-64 overflow-y-auto bg-white/70 dark:bg-white/5 p-3 rounded mt-2 border border-black/5 dark:border-white/10">
                      {item.children?.map((sub) => {
                        if (item.label === "Source") {
                          return (
                            <a
                              key={sub.path}
                              href={sub.url}
                              onClick={() => setMobileMenuOpen(false)}
                              className="block py-1 text-[#555555] dark:text-neutral-300 hover:text-black dark:hover:text-white border-b border-black/5 dark:border-white/5"
                            >
                              {sub.label}
                            </a>
                          );
                        }
                        const isExternal = sub.path.startsWith("http");
                        return isExternal ? (
                          <a
                            key={sub.path}
                            href={sub.path}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between py-1 text-[#555555] dark:text-neutral-300 hover:text-black dark:hover:text-white border-b border-black/5 dark:border-white/5"
                          >
                            <span>{sub.label}</span>
                            <ExternalLink className="w-3 h-3 text-neutral-400 dark:text-neutral-500" />
                          </a>
                        ) : (
                          <Link
                            key={sub.path}
                            href={sub.path}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block py-1 text-[#555555] dark:text-neutral-300 hover:text-black dark:hover:text-white border-b border-black/5 dark:border-white/5"
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

          <div className="pt-6 px-4 sm:px-6 border-t border-black/10 dark:border-white/10 space-y-2.5">
            <a
              href="tel:09810698082"
              className="flex items-center justify-center gap-2 p-3 bg-black dark:bg-white dark:text-black text-white text-[11px] sm:text-xs uppercase tracking-wider font-semibold rounded-full shadow text-center"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400 dark:text-amber-700 shrink-0" />
              <span>+91 98106 98082 (Dwarka Studio)</span>
            </a>
            <a
              href="tel:09811363064"
              className="flex items-center justify-center gap-2 p-3 border border-black/20 dark:border-white/20 bg-white dark:bg-white/10 text-black dark:text-white text-[11px] sm:text-xs uppercase tracking-wider font-semibold rounded-full shadow-sm text-center"
            >
              <Phone className="w-3.5 h-3.5 text-amber-700 dark:text-amber-400 shrink-0" />
              <span>+91 98113 63064 (Kirti Nagar Studio)</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
