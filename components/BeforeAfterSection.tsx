'use client';

import React, { useState, useRef, useCallback, useEffect } from "react";
import Image from "@/components/Image";
import { Sparkles, MoveHorizontal } from "lucide-react";

export default function BeforeAfterSection() {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState<number>(1200);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <section className="w-full py-16 md:py-24 px-4 md:px-10 max-w-[1440px] mx-auto border-t border-black/[0.08] dark:border-white/10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <span className="text-xs font-semibold tracking-[0.2em] text-[#666666] dark:text-[#A09E9B] uppercase block mb-3">
            TRANSFORMATION PROOF
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#111111] dark:text-white uppercase">
            Before & After Makeover
          </h2>
        </div>
        <p className="max-w-md text-xs sm:text-sm text-[#555555] dark:text-[#D4D2CD] font-light leading-relaxed">
          Drag the slider horizontally to view the structural and aesthetic evolution of our luxury residence makeover in Delhi-NCR.
        </p>
      </div>

      {/* Interactive Slider Container */}
      <div
        ref={containerRef}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        className="relative w-full h-[320px] sm:h-[450px] md:h-[550px] rounded-[6px] overflow-hidden select-none cursor-ew-resize border border-black/10 dark:border-white/15 shadow-xl"
      >
        {/* AFTER Image (Full Layer Below) */}
        <div className="absolute inset-0">
          <Image
            src="/assets/after.png"
            alt="After - 4 Lotus Luxury Interior Transformation"
            fill
            className="object-cover object-center"
          />
          <div className="absolute top-3 sm:top-5 right-3 sm:right-5 bg-black/75 backdrop-blur-md px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full text-white text-[9.5px] sm:text-[11px] uppercase tracking-wider font-semibold z-10 border border-white/20 flex items-center gap-1.5 shadow-sm">
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-300" />
            <span>After: Finished Space</span>
          </div>
        </div>

        {/* BEFORE Image (Clipped Layer on Top with matched width) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPos}%` }}
        >
          <div
            className="relative h-full"
            style={{ width: `${containerWidth}px` }}
          >
            <Image
              src="/assets/before.png"
              alt="Before - Raw Spatial Structure"
              fill
              className="object-cover object-center"
            />
          </div>
          <div className="absolute top-3 sm:top-5 left-3 sm:left-5 bg-neutral-900/85 backdrop-blur-md px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full text-white text-[9.5px] sm:text-[11px] uppercase tracking-wider font-semibold z-10 border border-white/20 shadow-sm whitespace-nowrap">
            <span>Before: Raw State</span>
          </div>
        </div>

        {/* Slider Handle Line */}
        <div
          className="absolute top-0 bottom-0 w-[2px] bg-white z-20 pointer-events-none shadow-[0_0_10px_rgba(0,0,0,0.5)]"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white text-black flex items-center justify-center shadow-xl border border-black/10">
            <MoveHorizontal className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
          </div>
        </div>
      </div>

      <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] sm:text-xs text-[#777777] dark:text-neutral-400 text-center">
        <span className="order-2 sm:order-1">← Slide Left for Before</span>
        <span className="font-medium text-black dark:text-white order-1 sm:order-2">Interactive Comparison · Dwarka Residence Project</span>
        <span className="order-3">Slide Right for After →</span>
      </div>
    </section>
  );
}
