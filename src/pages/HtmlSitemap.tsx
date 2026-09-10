import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SEO from "@/components/SEO";
import { navigationData } from "@/data/navigationData";
import { pageInventory } from "@/data/pageInventory";
import { getPageBySlug } from "@/data/contentLoader";
import { ArrowUpRight, Folder, FileText } from "lucide-react";

export default function HtmlSitemap() {
  const sitemapData = getPageBySlug("sitemap");

  const categories = [
    { title: "Core Studio Pages", cat: "Core" },
    { title: "Specialist Capabilities", cat: "Specialist" },
    { title: "Residential Interior Architecture", cat: "Residential" },
    { title: "Commercial & Corporate Interiors", cat: "Commercial" },
    { title: "Regional Contractor Services", cat: "Regions" },
    { title: "Delhi-NCR 32 Hub Availability", cat: "Availability" },
  ];

  return (
    <main className="min-h-screen bg-[#F8F7F5] flex flex-col justify-between selection:bg-[#111111] selection:text-white">
      <SEO
        title={sitemapData?.seo?.title || "4 Lotus Interior HTML Sitemap | Complete Directory"}
        description={sitemapData?.seo?.meta_description || "Explore the complete hierarchical sitemap and URL inventory of 4 Lotus Interior architecture and design firm in Delhi-NCR."}
        canonical={sitemapData?.canonical || "https://4lotusinterior.in/sitemap.html"}
      />

      <Navbar />

      <PageHeader
        eyebrow="DIRECTORY & ARCHIVE"
        title={sitemapData?.hero?.title || "HTML Sitemap Directory"}
        description={sitemapData?.hero?.description || "Complete site index and hierarchical information architecture of 4 Lotus Interior architecture and design services in Delhi-NCR."}
        breadcrumbs={[{ label: "Home", href: "/" }]}
      />

      <section className="w-full py-16 md:py-24 px-4 md:px-10 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((group, idx) => {
            const pagesInGroup = pageInventory.filter(
              (p) => p.category === group.cat
            );

            return (
              <div
                key={idx}
                className="bg-white border border-black/[0.08] p-6 rounded-[6px] shadow-sm space-y-4"
              >
                <div className="flex items-center gap-2 border-b border-black/[0.08] pb-3 text-black font-bold uppercase text-xs tracking-wider">
                  <Folder className="w-4 h-4 text-amber-800" />
                  <h3>{group.title}</h3>
                </div>

                <ul className="space-y-2 text-xs text-[#555555]">
                  {pagesInGroup.map((page) => (
                    <li key={page.slug || "home"}>
                      <Link
                        to={page.slug ? `/${page.slug}` : "/"}
                        className="flex items-center justify-between py-1 hover:text-black hover:translate-x-1 transition-all group"
                      >
                        <span className="group-hover:font-medium">{page.label}</span>
                        <ArrowUpRight className="w-3 h-3 opacity-40 group-hover:opacity-100 shrink-0" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      <Footer />
    </main>
  );
}
