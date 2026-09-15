import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { pageInventory, PageInventoryItem } from "@/data/pageInventory";
import { richPageDataMap } from "@/data/richPageData";
import DynamicPageTemplate from "@/components/DynamicPageTemplate";

const aliasMap: Record<string, string> = {
  "interior-designers-noida": "interior-designers-decorators-in-noida",
  "interior-designers-delhi": "interior-designers-decorators-in-delhi",
  "interior-designers-gurgaon": "interior-designers-decorators-in-gurgaon",
  "interior-designers-faridabad": "interior-designers-decorators-in-faridabad",
  "interior-designers-sonipat": "interior-designers-decorators-in-sonipat",
  "interior-designers-ghaziabad": "interior-designers-decorators-in-ghaziabad",
};

function resolvePage(rawSlug: string): PageInventoryItem | undefined {
  const targetSlug = aliasMap[rawSlug] || rawSlug;
  return pageInventory.find((p) => p.slug === targetSlug);
}

export async function generateStaticParams() {
  const templatePages = pageInventory.filter(
    (item) => item.category !== "Core" && item.category !== "Sitemap"
  );
  const params = templatePages.map((page) => ({
    slug: page.slug,
  }));

  // Add alias routes so static HTML is exported for all aliases
  for (const alias of Object.keys(aliasMap)) {
    params.push({ slug: alias });
  }

  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = resolvePage(slug);
  if (!page) return {};

  const richData = richPageDataMap[page.slug];
  const title = richData?.seo?.title || page.metaTitle || `${page.label} | 4 Lotus Interior Delhi`;
  const description = richData?.seo?.meta_description || page.metaDescription;
  const targetSlug = aliasMap[slug] || page.slug;
  const canonical = `https://4lotusinterior.in/${targetSlug}`;

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "4 Lotus Interior",
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: "https://4lotusinterior.in/assets/hero_living_room.jpg",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["https://4lotusinterior.in/assets/hero_living_room.jpg"],
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = resolvePage(slug);
  if (!page) {
    notFound();
  }

  return <DynamicPageTemplate page={page} />;
}
