import React from "react";
import { Link } from "react-router-dom";
import { Star, CheckCircle, Quote, ArrowUpRight } from "lucide-react";

export default function GoogleReviewsSection() {
  const allReviews = [
    {
      quote:
        "It was an absolute pleasure working with 4 Lotus Interior. Very professional and friendly. They renovated our flat, and the process was simple. From initial floor plans to 3D renders and timely delivery, they never exceeded the budget unless we increased the scope. We have now engaged them again for my parents' flat. Highly recommended if you want quality.",
      author: "Verified Homeowner",
      location: "Flat Renovation · Dwarka, Delhi",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      quote:
        "My home was renovated by 4 Lotus. They are very professional and highly skilled. They totally changed my home interior as per my needs and within my budget. I can say it is the best interior design company in Delhi-NCR.",
      author: "Residential Client",
      location: "Complete Home Interior · Delhi-NCR",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      quote:
        "4 Lotus Interior designed and decorated our home beautifully. Despite challenges like the lockdown, I am very happy that they completed the work on time. They are totally budget-friendly and have professional experts.",
      author: "Homeowner",
      location: "Interior Decoration & Staging · Delhi",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      quote:
        "My 4BHK builder floor was well interior designed and renovated in a completely new style. I am satisfied with the service and the execution by 4 Lotus Interior and its owner Rashid Ali.",
      author: "Builder Floor Owner",
      location: "4BHK Luxury Turnkey Floor · South West Delhi",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    },
    {
      quote:
        "My company took interior designing and contractor services from 4 Lotus. They have all interior-related solutions under one roof. Appreciate their work.",
      author: "Corporate Enterprise",
      location: "Corporate Office & Commercial Fit-Out",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/men/46.jpg",
    },
    {
      quote:
        "Awesome residential interior of my home by Delhi's best and top interior designers and decorators. Choose them, it will never disappoint you.",
      author: "Villa Resident",
      location: "Luxury Living Suite · Janakpuri",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/women/49.jpg",
    },
  ];

  return (
    <section id="reviews" className="w-full py-16 md:py-24 px-4 md:px-10 max-w-[1440px] mx-auto border-t border-black/[0.08]">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-amber-500">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span className="text-black text-sm font-semibold tracking-wide">
              4.9 Rating (81 Verified Google Reviews)
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#111111] uppercase">
            WHAT OUR CLIENTS SAY
          </h2>
        </div>

        <div className="flex items-center gap-5">
          <Link
            to="/reviews"
            className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-black border-b border-black pb-1 hover:opacity-70 transition-opacity"
          >
            All Client Stories ↗
          </Link>
          <a
            href="https://www.google.com/search?q=Lotus+Interior+in+South+Metro+Station+Dwarka+Road+Janakpuri+New+Delhi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#666666] hover:text-black transition-colors"
          >
            <span>Google Reviews</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Compact review marquee: the duplicate set makes the loop seamless. */}
      <div className="reviews-marquee" aria-label="Client reviews carousel">
        <div className="reviews-track">
          {[...allReviews, ...allReviews].map((rev, idx) => (
          <div
            key={`${rev.author}-${idx}`}
            className="review-card bg-white border border-black/[0.08] p-5 rounded-[4px] flex flex-col justify-between gap-4"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex text-amber-400">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <Quote className="w-5 h-5 text-black/15" />
              </div>
              <p className="text-xs sm:text-sm text-[#222222] font-normal leading-relaxed italic">
                &ldquo;{rev.quote}&rdquo;
              </p>
            </div>

            <div className="pt-4 border-t border-black/[0.06] flex items-center justify-between text-xs text-[#777777]">
              <div className="flex items-center gap-2.5 min-w-0">
                <img
                  src={rev.avatar}
                  alt="Client portrait"
                  className="h-9 w-9 shrink-0 rounded-full object-cover ring-2 ring-[#f1efe9]"
                  loading="lazy"
                />
                <div className="min-w-0">
                  <p className="font-semibold text-black truncate">{rev.author}</p>
                <p className="text-[11px] text-[#888888]">{rev.location}</p>
                </div>
              </div>
              <span className="flex items-center gap-1 text-emerald-600 font-medium text-[11px]">
                <CheckCircle className="w-3.5 h-3.5" />
                Verified
              </span>
            </div>
          </div>
          ))}
        </div>
      </div>
    </section>
  );
}
