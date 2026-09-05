import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";

interface NavbarProps {
  onOpenConsultation?: () => void;
  onOpenProjects?: () => void;
}

export default function Navbar({ onOpenConsultation }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "instant" as any });
  }, [pathname]);

  // Refined Luxury Interior Studio Standard Navigation Links
  const navLinks = [
    { label: "Studio", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Process", href: "/process" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[#F8F7F5]/92 backdrop-blur-md border-b border-black/[0.06] py-3.5 shadow-sm"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 group py-1"
            aria-label="4 Lotus Interior Homepage"
          >
            <img
              src="/assets/logo.webp"
              alt="4 Lotus Logo"
              className="w-7 h-7 sm:w-8 sm:h-8 object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <span className="text-xl md:text-2xl font-bold tracking-[0.2em] text-[#111111] uppercase group-hover:opacity-80 transition-opacity">
              LOTUS
            </span>
          </Link>

          {/* Center Multi-page Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8 text-[13px] tracking-[0.14em] font-medium uppercase text-[#333333]">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`transition-colors relative py-1 ${
                    isActive
                      ? "text-black font-semibold after:w-full"
                      : "hover:text-black after:w-0 hover:after:w-full"
                  } after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:bg-black after:transition-all`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Direct Phone Numbers (Consultation button removed as requested) */}
          <div className="hidden sm:flex items-center space-x-3 md:space-x-4">
            <a
              href="tel:09810698082"
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs md:text-[13px] font-medium tracking-wide text-[#333333] hover:text-black hover:bg-black/5 rounded-full transition-all"
              aria-label="Call studio phone 098106 98082"
            >
              <Phone className="w-3.5 h-3.5 text-amber-800" />
              <span>+91 98106 98082</span>
            </a>
            <span className="text-black/20 text-xs font-light">|</span>
            <a
              href="tel:09811363064"
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs md:text-[13px] font-medium tracking-wide text-[#333333] hover:text-black hover:bg-black/5 rounded-full transition-all"
              aria-label="Call studio phone 098113 63064"
            >
              <Phone className="w-3.5 h-3.5 text-amber-800" />
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
          className="fixed inset-0 z-50 bg-[#F8F7F5] pt-24 px-8 flex flex-col justify-between pb-12 lg:hidden animate-fade-in"
        >
          <div className="flex flex-col space-y-4 text-base sm:text-lg uppercase tracking-[0.15em] font-medium text-black">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`border-b border-black/10 pb-3 ${pathname === "/" ? "font-bold text-black" : "text-[#444444]"}`}
            >
              Home
            </Link>
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`border-b border-black/10 pb-3 flex items-center justify-between ${
                    isActive ? "font-bold text-black" : "text-[#444444]"
                  }`}
                >
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Mobile Direct Phone Numbers */}
          <div className="space-y-3 pt-4">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-[#777777] block text-center">
              Direct Studio Lines
            </span>
            <a
              href="tel:09810698082"
              className="w-full flex items-center justify-center gap-2 py-3 bg-[#EAE6E1] text-black text-xs sm:text-sm tracking-widest uppercase font-semibold rounded-full hover:bg-black hover:text-white transition-all shadow-sm"
            >
              <Phone className="w-4 h-4 text-amber-800" />
              <span>+91 98106 98082</span>
            </a>
            <a
              href="tel:09811363064"
              className="w-full flex items-center justify-center gap-2 py-3 bg-white border border-black/15 text-black text-xs sm:text-sm tracking-widest uppercase font-semibold rounded-full hover:bg-black hover:text-white transition-all shadow-sm"
            >
              <Phone className="w-4 h-4 text-amber-800" />
              <span>+91 98113 63064</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
