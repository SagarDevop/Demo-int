import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  breadcrumbs?: { label: string; href?: string }[];
}

export default function PageHeader({
  eyebrow,
  title,
  description,
  breadcrumbs = [{ label: "Home", href: "/" }],
}: PageHeaderProps) {
  return (
    <section className="w-full pt-28 pb-10 md:pt-40 md:pb-16 px-4 md:px-10 max-w-[1440px] mx-auto border-b border-black/[0.08]">
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-[10px] sm:text-[11px] uppercase tracking-wider text-[#888888] mb-4 sm:mb-6 min-w-0">
        {breadcrumbs.map((crumb, idx) => (
          <React.Fragment key={idx}>
            {crumb.href ? (
              <Link href={crumb.href} className="hover:text-black transition-colors whitespace-nowrap">
                {crumb.label}
              </Link>
            ) : (
              <span className="text-black font-semibold">{crumb.label}</span>
            )}
            {idx < breadcrumbs.length - 1 && (
              <ChevronRight className="w-3 h-3 text-[#CCCCCC] shrink-0" />
            )}
          </React.Fragment>
        ))}
        <ChevronRight className="w-3 h-3 text-[#CCCCCC] shrink-0" />
        <span className="text-black font-semibold break-words">{title}</span>
      </nav>

      {/* Eyebrow and Editorial Title */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
        <div className="lg:col-span-8 space-y-3">
          <span className="text-xs font-semibold tracking-[0.2em] sm:tracking-[0.25em] text-[#777777] uppercase block">
            {eyebrow}
          </span>
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#111111] uppercase break-words leading-tight">
            {title}
          </h1>
        </div>

        {description && (
          <div className="lg:col-span-4">
            <p className="text-xs sm:text-sm text-[#555555] font-light leading-relaxed">
              {description}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
