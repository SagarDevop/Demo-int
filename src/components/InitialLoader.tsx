import React, { useState, useEffect } from "react";

export default function InitialLoader() {
  const [progress, setProgress] = useState(0);
  const [hidden, setHidden] = useState(false);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // Lock scroll while loader is showing
    document.body.style.overflow = "hidden";

    const startTime = Date.now();
    const duration = 1400; // 1.4s smooth luxury intro

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(Math.round((elapsed / duration) * 100), 100);
      setProgress(pct);

      if (pct >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setFading(true);
          setTimeout(() => {
            setHidden(true);
            document.body.style.overflow = "";
          }, 700);
        }, 200);
      }
    }, 25);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = "";
    };
  }, []);

  if (hidden) return null;

  return (
    <div
      className={`fixed inset-0 z-[99999] bg-[#0C0C0C] text-[#F8F7F5] flex flex-col justify-between p-8 sm:p-14 select-none pointer-events-auto transition-all duration-700 ease-out ${
        fading ? "opacity-0 scale-[1.02] pointer-events-none" : "opacity-100 scale-100"
      }`}
    >
      {/* Top Studio Credentials Header */}
      <div className="flex items-center justify-between text-[11px] sm:text-xs tracking-[0.25em] text-[#8E8D8A] uppercase font-mono">
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping inline-block" />
          DELHI-NCR
        </span>
        <span>EST. 2011 · ARCHITECTURE & INTERIORS</span>
      </div>

      {/* Center Studio Logo & Branding */}
      <div className="text-center space-y-4 max-w-xl mx-auto py-12">
        <span className="text-xs sm:text-sm font-semibold tracking-[0.35em] text-amber-300 uppercase block">
          INTERIOR ARCHITECTURE
        </span>
        <div className="flex items-center justify-center gap-3">
          <img
            src="/assets/logo.webp"
            alt="4 Lotus Logo"
            className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain drop-shadow-lg"
          />
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-[-0.03em] uppercase text-white font-sans">
            LOTUS
          </h1>
        </div>
        <p className="text-xs sm:text-sm text-[#8E8D8A] font-light tracking-[0.2em] uppercase">
          Crafting Timeless Spatial Sanctuaries
        </p>
      </div>

      {/* Bottom Progress Tracker & Counter */}
      <div className="space-y-4 max-w-2xl mx-auto w-full">
        <div className="flex items-end justify-between text-xs tracking-widest text-[#8E8D8A]">
          <span className="font-mono text-white text-base font-bold">
            {progress}%
          </span>
          <span className="uppercase text-[11px] font-mono tracking-wider">
            Loading Studio Experience...
          </span>
        </div>

        {/* Progress Track */}
        <div className="w-full h-[2px] bg-white/10 overflow-hidden relative rounded-full">
          <div
            className="h-full bg-gradient-to-r from-amber-300 via-white to-amber-200 transition-all duration-75 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
