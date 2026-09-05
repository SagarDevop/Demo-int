import React from "react";

interface SkeletonProps {
  className?: string;
  variant?: "text" | "rectangular" | "circular" | "card";
}

export default function Skeleton({
  className = "",
  variant = "rectangular",
}: SkeletonProps) {
  const baseClasses =
    "relative overflow-hidden bg-gradient-to-r from-[#EFECE6] via-[#F8F6F2] to-[#EFECE6] bg-[length:200%_100%] animate-shimmer";

  if (variant === "circular") {
    return <div className={`rounded-full ${baseClasses} ${className}`} />;
  }

  if (variant === "text") {
    return (
      <div
        className={`h-4 rounded-sm my-1.5 ${baseClasses} ${className}`}
      />
    );
  }

  if (variant === "card") {
    return (
      <div
        className={`rounded-xl border border-black/5 bg-[#FAF8F5] p-6 space-y-4 ${className}`}
      >
        <div className={`w-full aspect-[4/3] rounded-lg ${baseClasses}`} />
        <div className={`h-4 w-1/3 rounded-sm ${baseClasses}`} />
        <div className={`h-6 w-3/4 rounded-sm ${baseClasses}`} />
        <div className={`h-3 w-full rounded-sm ${baseClasses}`} />
      </div>
    );
  }

  return <div className={`rounded-sm ${baseClasses} ${className}`} />;
}
