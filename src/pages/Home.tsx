import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import ProjectHighlight from "@/components/ProjectHighlight";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import ProcessSection from "@/components/ProcessSection";
import ServicesSection from "@/components/ServicesSection";
import WhatWereKnownFor from "@/components/WhatWereKnownFor";
import LocationsCoverage from "@/components/LocationsCoverage";
import GoogleReviewsSection from "@/components/GoogleReviewsSection";
import FaqSection from "@/components/FaqSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import ConsultationModal from "@/components/ConsultationModal";
import ProjectGalleryModal from "@/components/ProjectGalleryModal";

export default function Home() {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#F8F7F5] flex flex-col justify-between selection:bg-[#111111] selection:text-white">
      {/* Fixed Luxury Navbar */}
      <Navbar
        onOpenConsultation={() => setConsultationOpen(true)}
        onOpenProjects={() => setGalleryOpen(true)}
      />

      {/* Hero Section */}
      <Hero
        onOpenConsultation={() => setConsultationOpen(true)}
        onOpenProjects={() => setGalleryOpen(true)}
      />

      {/* The 4 Lotus Philosophy: 01 Function First, 02 Timeless Aesthetic, 03 Material-Led Craftsmanship */}
      <Philosophy />

      {/* Studio Project Highlight: Blueprint Plan + Curved Living Suite */}
      <ProjectHighlight onOpenProjects={() => setGalleryOpen(true)} />

      {/* Interactive Before & After Transformation Slider */}
      <BeforeAfterSection />

      {/* 4-Step Architectural Methodology & Process */}
      <ProcessSection onOpenConsultation={() => setConsultationOpen(true)} />

      {/* Comprehensive Specialized Services (14 Categories) */}
      <ServicesSection onOpenConsultation={() => setConsultationOpen(true)} />

      {/* Studio Leadership, 15+ Years Heritage & Manufacturing */}
      <WhatWereKnownFor />

      {/* Regional Reach & 32 Delhi-NCR Service Hubs */}
      <LocationsCoverage onOpenConsultation={() => setConsultationOpen(true)} />

      {/* Verified Google Reviews (4.9 ★ 81 Reviews) */}
      <GoogleReviewsSection />

      {/* Comprehensive Frequently Asked Questions */}
      <FaqSection />

      {/* Fireplace CTA Banner: Start Your Project */}
      <CtaSection onOpenConsultation={() => setConsultationOpen(true)} />

      {/* Deep Black Obsidian Footer with Giant 4 LOTUS Watermark */}
      <Footer />

      {/* Interactive Booking & Project Lightbox Modals */}
      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
      />

      <ProjectGalleryModal
        isOpen={galleryOpen}
        onClose={() => setGalleryOpen(false)}
        onOpenConsultation={() => setConsultationOpen(true)}
      />
    </main>
  );
}
