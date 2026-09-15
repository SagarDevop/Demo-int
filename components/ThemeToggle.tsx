'use client';

import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setMounted(true);
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  if (!mounted) {
    return (
      <div className="w-8 h-8 rounded-full border border-black/10 dark:border-white/15 opacity-0 shrink-0" />
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to signature light mode" : "Switch to obsidian dark mode"}
      title={isDark ? "Switch to Light Mode" : "Switch to Obsidian Dark Mode"}
      className="relative w-8 h-8 rounded-full border border-black/15 dark:border-white/20 bg-white/80 dark:bg-[#1a1a1a] hover:bg-white dark:hover:bg-[#252525] text-[#111111] dark:text-[#F8F7F5] flex items-center justify-center transition-all duration-300 shadow-sm hover:scale-105 active:scale-95 shrink-0"
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-amber-400 transition-transform duration-300 rotate-0 hover:rotate-45" />
      ) : (
        <Moon className="w-4 h-4 text-neutral-800 transition-transform duration-300 -rotate-12 hover:rotate-0" />
      )}
    </button>
  );
}
