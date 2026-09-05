import React from "react";
import { Link } from "react-router-dom";
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
    <section className="w-full pt-32 pb-12 md:pt-40 md:pb-16 px-4 md:px-10 max-w-[1440px] mx-auto border-b border-black/[0.08]">
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[11px] uppercase tracking-widest text-[#888888] mb-6">
        {breadcrumbs.map((crumb, idx) => (
          <React.Fragment key={idx}>
            {crumb.href ? (
              <Link to={crumb.href} className="hover:text-black transition-colors">
                {crumb.label}
              </Link>
            ) : (
              <span className="text-black font-semibold">{crumb.label}</span>
            )}
            {idx < breadcrumbs.length - 1 && (
              <ChevronRight className="w-3 h-3 text-[#CCCCCC]" />
            )}
          </React.Fragment>
        ))}
        <ChevronRight className="w-3 h-3 text-[#CCCCCC]" />
        <span className="text-black font-semibold">{title}</span>
      </nav>

      {/* Eyebrow and Editorial Title */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
        <div className="lg:col-span-8 space-y-3">
          <span className="text-xs font-semibold tracking-[0.25em] text-[#777777] uppercase block">
            {eyebrow}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#111111] uppercase">
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
