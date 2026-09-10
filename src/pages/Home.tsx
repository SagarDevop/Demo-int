import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import SEO from "@/components/SEO";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import ProjectHighlight from "@/components/ProjectHighlight";
import HomePortfolioSection from "@/components/HomePortfolioSection";
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
import { getPageBySlug } from "@/data/contentLoader";

export default function Home() {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);

  // Authoritative JSON content from homepage.json
  const homeData = getPageBySlug("");

  const pageTitle = homeData?.title || "4 Lotus Interior | Luxury Architecture & Interior Design Studio Delhi";
  const metaDescription = homeData?.meta?.description || "4 Lotus Interior is a leading architecture and interior design firm in Delhi-NCR. We offer turnkey solutions for residential, retail, commercial, and corporate spaces. Transform your space today.";
  const canonicalUrl = homeData?.canonical || "https://4lotusinterior.in/";

  const heroDesc = homeData?.paragraphs?.[0] || "We are Delhi-NCR's leading interior designers and decorators. We manage and execute world-class residential, retail, corporate, and commercial interior projects with precision and style.";
  const philosophyDesc = homeData?.paragraphs?.[1] || "4 Lotus Interior is an intelligent design and turnkey interior solutions company based in New Delhi. We specialize in managing complex residential, commercial, corporate, and hospitality projects across Delhi-NCR.";

  const knownForItems = homeData?.paragraphs ? [
    {
      title: "Residential Interiors",
      desc: homeData.paragraphs[4] || "We create living spaces that reflect your culture and lifestyle. Whether modern, western, or contemporary, our residential designs complement the ever-changing world while remaining uniquely yours. Every home we design shares a common thread: tailored comfort and style.",
    },
    {
      title: "Retail Design & Storytelling",
      desc: homeData.paragraphs[5] || "Retail design is storytelling. We combine creativity with commercial strategy to design retail outlets that optimize space and create engaging customer experiences. It's not just about looking good; it's about setting up your store to maximize sales and brand impact.",
    },
    {
      title: "Corporate Workplaces",
      desc: homeData.paragraphs[6] || "We design corporate spaces that work as strategic tools for your business. From furniture selection to finish details, we create successful workplace environments that leverage physical space to achieve your organizational goals and enhance productivity.",
    },
    {
      title: "Turnkey Solutions & Manufacturing",
      desc: homeData.paragraphs[3] || "With over 15 years of experience, we have grown from a simple design firm into a comprehensive solutions provider. We are proud to play a leading role in architecture, interior design, renovation, remodeling, trading, and manufacturing.",
    },
  ] : undefined;

  const reviews = homeData?.paragraphs ? [
    {
      quote: homeData.paragraphs[173] || "It was an absolute pleasure working with 4 Lotus Interior. Very professional and friendly. They renovated our flat, and the process was simple. From initial floor plans to 3D renders and timely delivery, they never exceeded the budget unless we increased the scope. We have now engaged them again for my parents' flat. Highly recommended if you want quality.",
      author: "Verified Homeowner",
      location: "Flat Renovation · Dwarka, Delhi",
      rating: 5,
    },
    {
      quote: homeData.paragraphs[174] || "My home was renovated by 4 Lotus. They are very professional and highly skilled. They totally changed my home interior as per my needs and within my budget. I can say it is the best interior design company in Delhi-NCR.",
      author: "Residential Client",
      location: "Complete Home Interior · Delhi-NCR",
      rating: 5,
    },
    {
      quote: homeData.paragraphs[175] || "4 Lotus Interior designed and decorated our home beautifully. Despite challenges like the lockdown, I am very happy that they completed the work on time. They are totally budget-friendly and have professional experts.",
      author: "Homeowner",
      location: "Interior Decoration & Staging · Delhi",
      rating: 5,
    },
    {
      quote: homeData.paragraphs[178] || "My 4BHK builder floor was well interior designed and renovated in a completely new style. I am satisfied with the service and the execution by 4 Lotus Interior and its owner Rashid Ali.",
      author: "Builder Floor Owner",
      location: "4BHK Luxury Turnkey Floor · South West Delhi",
      rating: 5,
    },
    {
      quote: homeData.paragraphs[176] || "My company took interior designing and contractor services from 4 Lotus. They have all interior-related solutions under one roof. Appreciate their work.",
      author: "Corporate Enterprise",
      location: "Corporate Office & Commercial Fit-Out",
      rating: 5,
    },
    {
      quote: homeData.paragraphs[177] || "Awesome residential interior of my home by Delhi's best and top interior designers and decorators. Choose them, it will never disappoint you.",
      author: "Villa Resident",
      location: "Luxury Living Suite · Janakpuri",
      rating: 5,
    },
  ] : undefined;

  return (
    <main className="min-h-screen bg-[#F8F7F5] flex flex-col justify-between selection:bg-[#111111] selection:text-white">
      <SEO
        title={pageTitle}
        description={metaDescription}
        canonical={canonicalUrl}
        keywords="interior designer in delhi, luxury interior designer janakpuri, best architect dwarka, turnkey interior designer south delhi, interior design firm delhi ncr, modular kitchen manufacturer kirti nagar, 4 lotus interior"
      />

      {/* Fixed Luxury Navbar */}
      <Navbar
        onOpenConsultation={() => setConsultationOpen(true)}
        onOpenProjects={() => setGalleryOpen(true)}
      />

      {/* Hero Section with JSON Data */}
      <Hero
        onOpenConsultation={() => setConsultationOpen(true)}
        onOpenProjects={() => setGalleryOpen(true)}
        title={homeData?.headings?.[0]?.text || "4 Lotus Interior"}
        description={heroDesc}
      />

      {/* The 4 Lotus Philosophy */}
      <Philosophy description={philosophyDesc} />

      {/* Studio Project Highlight: Blueprint Plan + Curved Living Suite */}
      <ProjectHighlight onOpenProjects={() => setGalleryOpen(true)} />

      {/* Curated Architectural Portfolio & Case Studies Showcase */}
      <HomePortfolioSection
        onOpenConsultation={() => setConsultationOpen(true)}
        onOpenProjects={() => setGalleryOpen(true)}
      />

      {/* Interactive Before & After Transformation Slider */}
      <BeforeAfterSection />

      {/* 4-Step Architectural Methodology & Process */}
      <ProcessSection onOpenConsultation={() => setConsultationOpen(true)} />

      {/* Comprehensive Specialized Services (14 Categories) */}
      <ServicesSection onOpenConsultation={() => setConsultationOpen(true)} />

      {/* Studio Leadership, 15+ Years Heritage & Manufacturing */}
      <WhatWereKnownFor items={knownForItems} />

      {/* Verified Google Reviews */}
      <GoogleReviewsSection reviews={reviews} />

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
