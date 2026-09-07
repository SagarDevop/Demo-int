export interface UrlMapping {
  oldUrl: string;
  cleanPath: string;
  legacyPath: string;
  label: string;
  category: string;
  contentStatus: "FULL_HOMEPAGE_MIGRATED" | "TEMPLATE_READY_AWAITING_BODY_JSON";
}

import { pageInventory } from "./pageInventory";

export const urlMappings: UrlMapping[] = pageInventory.map((item) => {
  const isHomepage = item.slug === "";
  return {
    oldUrl: item.url,
    cleanPath: isHomepage ? "/" : `/${item.slug}`,
    legacyPath: isHomepage ? "/" : `/${item.slug}.html`,
    label: item.label,
    category: item.category,
    contentStatus: item.hasFullExtractedBody
      ? "FULL_HOMEPAGE_MIGRATED"
      : "TEMPLATE_READY_AWAITING_BODY_JSON",
  };
});
