"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import ProjectHighlight from "@/components/ProjectHighlight";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import ProcessSection from "@/components/ProcessSection";
import WhatWereKnownFor from "@/components/WhatWereKnownFor";
import GoogleReviewsSection from "@/components/GoogleReviewsSection";
import ServicesSection from "@/components/ServicesSection";
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

      {/* Hero Section: TIMELESS COMFORT */}
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

      {/* Studio Highlights & What We're Known For Editorial Table */}
      <WhatWereKnownFor />

      {/* Verified Google Reviews (4.9 ★ 81 Reviews) */}
      <GoogleReviewsSection />

      {/* Studio Specialized Services */}
      <ServicesSection onOpenConsultation={() => setConsultationOpen(true)} />

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
