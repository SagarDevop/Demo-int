// Shared Content Loader & Normalizer
// Single source of truth for all 61 pages

export interface PageData {
  url?: string;
  slug?: string;
  canonical?: string;
  seo?: {
    title?: string;
    meta_description?: string;
    og_card?: string;
    og_image?: string;
    og_title?: string;
    robots?: string;
    [key: string]: any;
  };
  hero?: {
    title?: string;
    subtitle?: string;
    description?: string;
    image?: string;
    image_alt?: string;
    [key: string]: any;
  };
  hero_sub_cards?: { title: string; description: string; [key: string]: any }[];
  showcase_duo?: { title: string; image: string; alt?: string; [key: string]: any }[];
  accordion_sections?: { title: string; content: string; [key: string]: any }[];
  flip_cards?: {
    title?: string;
    cards?: { title: string; description: string; image?: string; [key: string]: any }[];
    [key: string]: any;
  };
  core_services?: {
    title?: string;
    subtitle?: string;
    image?: string;
    image_alt?: string;
    items?: { number?: string | number; title: string; description: string; [key: string]: any }[];
    [key: string]: any;
  } | { number?: string | number; title: string; description: string; icon?: string; [key: string]: any }[];
  holistic_solutions?: {
    title?: string;
    subtitle?: string;
    cards?: { icon?: string; title: string; description: string; [key: string]: any }[];
    [key: string]: any;
  };
  design_concept?: {
    title?: string;
    description?: string;
    image?: string;
    image_alt?: string;
    links?: (string | { label: string; href?: string })[];
    [key: string]: any;
  };
  quote?: string;
  callout?: string;
  turnkey_services?: {
    title?: string;
    subtitle?: string;
    cards?: { title: string; subtitle?: string; role?: string; description: string; icon?: string; image?: string; [key: string]: any }[];
    [key: string]: any;
  } | { title: string; subtitle?: string; description: string; icon?: string; [key: string]: any }[];
  turnkey_solutions?: {
    title?: string;
    subtitle?: string;
    pillars?: { title: string; subtitle?: string; role?: string; description: string; icon?: string; [key: string]: any }[];
    [key: string]: any;
  };
  process?: {
    title?: string;
    subtitle?: string;
    image?: string;
    image_alt?: string;
    tabs?: { id: string; label: string; content: string; [key: string]: any }[];
    [key: string]: any;
  };
  design_process?: {
    title?: string;
    subtitle?: string;
    steps?: { step?: number | string; title: string; description: string; [key: string]: any }[];
    [key: string]: any;
  };
  execution_cards?: { title: string; role?: string; description: string; image: string; [key: string]: any }[];
  team_approach?: { title: string; role?: string; description: string; image: string; image_alt?: string; [key: string]: any }[];
  gallery?: { title: string; image: string; thumb?: string; tag?: string; [key: string]: any }[];
  contact?: {
    title?: string;
    phones?: string[];
    addresses?: string[];
    email?: string;
    timings?: string;
    map_link?: string;
    map_image?: string;
    [key: string]: any;
  };
  // Specialized migrated sections
  typologies?: { title: string; subtitle?: string; description: string; image?: string; [key: string]: any }[];
  specialized_services?: { step?: number | string; title: string; description: string; [key: string]: any }[];
  scope?: { title?: string; subtitle?: string; description?: string; [key: string]: any };
  advantages?: {
    title?: string;
    subtitle?: string;
    image?: string;
    image_alt?: string;
    items?: { title: string; description: string; [key: string]: any }[];
    [key: string]: any;
  };
  expertise?: {
    title?: string;
    subtitle?: string;
    image?: string;
    image_alt?: string;
    items?: { number?: string | number; title: string; description: string; [key: string]: any }[];
    [key: string]: any;
  };
  modern_solutions?: {
    title?: string;
    description?: string;
    image?: string;
    image_alt?: string;
    links?: (string | { label: string; href?: string })[];
    [key: string]: any;
  };
  renovation_process?: {
    title?: string;
    subtitle?: string;
    image?: string;
    image_alt?: string;
    tabs?: { id: string; label: string; content: string; [key: string]: any }[];
    [key: string]: any;
  };
  service_decor?: {
    title?: string;
    description?: string;
    image?: string;
    image_alt?: string;
    links?: (string | { label: string; href?: string })[];
    [key: string]: any;
  };
  partner_banner?: { title?: string; description?: string; [key: string]: any };
  styles_slider?: { title: string; subtitle?: string; image: string; image_alt?: string; [key: string]: any }[];
  complete_solutions?: {
    title?: string;
    subtitle?: string;
    cards?: { title: string; role?: string; description: string; image?: string; image_alt?: string; [key: string]: any }[];
    [key: string]: any;
  };
  inspired_design?: {
    title?: string;
    description?: string;
    image?: string;
    image_alt?: string;
    links?: (string | { label: string; href?: string })[];
    [key: string]: any;
  };
  turnkey_home_interior?: {
    title?: string;
    subtitle?: string;
    pillars?: { title: string; role?: string; description: string; icon?: string; [key: string]: any }[];
    [key: string]: any;
  };
  design_and_make?: {
    title?: string;
    subtitle?: string;
    image?: string;
    image_alt?: string;
    tabs?: { id: string; label: string; content: string; [key: string]: any }[];
    [key: string]: any;
  };
  service_pillars?: { title: string; role?: string; description: string; icon?: string; [key: string]: any }[];
  expertise_breakdown?: {
    title?: string;
    subtitle?: string;
    items?: { title: string; description: string; [key: string]: any }[];
    [key: string]: any;
  };
  specialties_carousel?: any[];
  we_do?: {
    title?: string;
    subtitle?: string;
    image?: string;
    image_alt?: string;
    items?: { number?: string | number; title: string; description: string; [key: string]: any }[];
    [key: string]: any;
  };
  feature_section?: {
    title?: string;
    description?: string;
    image?: string;
    image_alt?: string;
    links?: (string | { label: string; href?: string })[];
    [key: string]: any;
  };
  reconstruction?: {
    title?: string;
    subtitle?: string;
    image?: string;
    image_alt?: string;
    items?: { title: string; description: string; [key: string]: any }[];
    [key: string]: any;
  };
  kitchen_types_timeline?: {
    title?: string;
    subtitle?: string;
    items?: { title: string; description: string; [key: string]: any }[];
    [key: string]: any;
  };
  bespoke_design?: any;
  exclusive_design?: any;
  decorator_section?: {
    title?: string;
    description?: string;
    image?: string;
    image_alt?: string;
    links?: (string | { label: string; href?: string })[];
    [key: string]: any;
  };
  four_steps?: {
    title?: string;
    subtitle?: string;
    image?: string;
    image_alt?: string;
    steps?: { step?: number | string; title: string; link?: string; description: string; [key: string]: any }[];
    [key: string]: any;
  };
  residential_categories?: {
    name: string;
    subtitle?: string;
    tagline?: string;
    description: string;
    image?: string;
    image_alt?: string;
    link?: string;
    [key: string]: any;
  }[];
  philosophy?: { title?: string; subtitle?: string; description?: string; [key: string]: any } | string;
  interior_philosophy?: any;
  luxury_style?: {
    title?: string;
    subtitle?: string;
    description?: string;
    cards?: { title: string; image?: string; alt?: string; [key: string]: any }[];
    [key: string]: any;
  };
  project_gallery_section?: {
    title?: string;
    subtitle?: string;
    description?: string;
    cards?: { title: string; link?: string; image?: string; alt?: string; [key: string]: any }[];
    [key: string]: any;
  };
  // Homepage raw fields
  title?: string;
  meta?: any;
  headings?: { level: number; text: string }[];
  paragraphs?: string[];
  images?: { src: string; alt?: string; title?: string }[];
  sections?: { headings?: string[]; text?: string; [key: string]: any }[];
  links?: (string | { label: string; href?: string })[];
  [key: string]: any;
}

/**
 * Normalizes any route path or slug into the canonical slug key.
 * Handles /, "", "/flat-interior", "/flat-interior/", "/flat-interior.html", "index", etc.
 */
export function normalizeSlug(pathOrSlug: string = ""): string {
  if (!pathOrSlug) return "";
  let clean = pathOrSlug.trim();
  // Strip protocol & host if full URL passed
  clean = clean.replace(/^https?:\/\/[^\/]+/i, "");
  // Strip query & hash
  clean = clean.split("?")[0].split("#")[0];
  // Strip leading & trailing slashes
  clean = clean.replace(/^\/+/, "").replace(/\/+$/, "");
  // Strip .html or .htm extension
  clean = clean.replace(/\.html?$/i, "");
  clean = clean.toLowerCase();

  // Root aliases
  if (clean === "" || clean === "index" || clean === "homepage") {
    return "";
  }
  // Contact alias
  if (clean === "contact") {
    return "contact-us";
  }

  // Regional hub shorthand aliases
  if (clean === "interior-designers-noida") return "interior-designers-decorators-in-noida";
  if (clean === "interior-designers-delhi") return "interior-designers-decorators-in-delhi";
  if (clean === "interior-designers-gurgaon") return "interior-designers-decorators-in-gurgaon";
  if (clean === "interior-designers-faridabad") return "interior-designers-decorators-in-faridabad";
  if (clean === "interior-designers-sonipat") return "interior-designers-decorators-in-sonipat";
  if (clean === "interior-designers-ghaziabad") return "interior-designers-decorators-in-ghaziabad";

  return clean;
}

// Vite eager import for bundling in browser / production
const jsonModules = import.meta.glob("./content/*.json", {
  eager: true,
  import: "default",
}) as Record<string, any>;

// Internal indexed registry: normalized slug -> raw JSON
const pageRegistry = new Map<string, PageData>();

Object.entries(jsonModules).forEach(([filePath, rawData]) => {
  const fileName = filePath.split("/").pop() || "";
  const baseName = fileName.replace(/\.json$/i, "");
  const slugKey = baseName === "homepage" ? "" : baseName;
  pageRegistry.set(slugKey, rawData);
  // Also register explicit slug if defined in data
  if (rawData.slug && rawData.slug !== slugKey) {
    pageRegistry.set(rawData.slug, rawData);
  }
});

/**
 * Helper to normalize concept, turnkey, process, quote across schemas
 * while fully preserving all specialized original fields.
 */
export function normalizePageData(raw: PageData, slug: string): PageData {
  const item: PageData = JSON.parse(JSON.stringify(raw));
  const rawAny = item as any;

  // 1. Concept normalization
  if (!item.design_concept) {
    const sourceConcept =
      rawAny.bespoke_design ||
      rawAny.exclusive_design ||
      rawAny.inspired_design ||
      rawAny.service_decor ||
      rawAny.modern_solutions ||
      rawAny.complete_solutions ||
      rawAny.we_do ||
      rawAny.decorator_section ||
      rawAny.feature_section;

    if (sourceConcept) {
      item.design_concept = {
        title: sourceConcept.title || "Architectural Design Concept",
        description: sourceConcept.description || "",
        image: sourceConcept.image,
        image_alt: sourceConcept.image_alt || sourceConcept.title,
        links: Array.isArray(sourceConcept.links)
          ? sourceConcept.links.map((l: any) =>
              typeof l === "string" ? l : l.label || l.text || ""
            )
          : [],
      };
    }
  }

  // 2. Turnkey services normalization
  if (!item.turnkey_services) {
    if (rawAny.turnkey_solutions && rawAny.turnkey_solutions.pillars) {
      item.turnkey_services = {
        title: rawAny.turnkey_solutions.title || "Turnkey Interior Solutions",
        subtitle: rawAny.turnkey_solutions.subtitle,
        cards: rawAny.turnkey_solutions.pillars.map((p: any) => ({
          title: p.title,
          subtitle: p.role,
          role: p.role,
          description: p.description,
          icon: p.icon || "/assets/blueprint_sketch.svg",
        })),
      };
    } else if (rawAny.turnkey_home_interior && rawAny.turnkey_home_interior.pillars) {
      item.turnkey_services = {
        title: rawAny.turnkey_home_interior.title || "Turnkey Home Interior",
        subtitle: rawAny.turnkey_home_interior.subtitle,
        cards: rawAny.turnkey_home_interior.pillars.map((p: any) => ({
          title: p.title,
          subtitle: p.role,
          role: p.role,
          description: p.description,
          icon: p.icon || "/assets/blueprint_sketch.svg",
        })),
      };
    } else if (rawAny.complete_solutions && rawAny.complete_solutions.cards) {
      item.turnkey_services = {
        title: rawAny.complete_solutions.title || "Complete Furniture Solutions",
        subtitle: rawAny.complete_solutions.subtitle,
        cards: rawAny.complete_solutions.cards.map((c: any) => ({
          title: c.title,
          subtitle: c.role,
          role: c.role,
          description: c.description,
          image: c.image,
          icon: "/assets/blueprint_sketch.svg",
        })),
      };
    } else if (rawAny.service_pillars && Array.isArray(rawAny.service_pillars)) {
      item.turnkey_services = {
        title: "Service Pillars & Capabilities",
        cards: rawAny.service_pillars.map((p: any) => ({
          title: p.title,
          subtitle: p.role,
          role: p.role,
          description: p.description,
          icon: p.icon || "/assets/blueprint_sketch.svg",
        })),
      };
    } else if (rawAny.core_services && rawAny.core_services.items) {
      item.turnkey_services = {
        title: rawAny.core_services.title || "Core Services",
        subtitle: rawAny.core_services.subtitle,
        cards: rawAny.core_services.items.map((it: any) => ({
          title: it.title,
          description: it.description,
          icon: "/assets/blueprint_sketch.svg",
        })),
      };
    } else if (rawAny.expertise && rawAny.expertise.items) {
      item.turnkey_services = {
        title: rawAny.expertise.title || "Our Expertise",
        subtitle: rawAny.expertise.subtitle,
        cards: rawAny.expertise.items.map((it: any) => ({
          title: it.title,
          description: it.description,
          icon: "/assets/blueprint_sketch.svg",
        })),
      };
    }
  }

  // 3. Process normalization
  if (!item.process) {
    const pSource =
      rawAny.renovation_process ||
      rawAny.design_and_make ||
      rawAny.remodeling_process ||
      rawAny.craftsmanship_process;

    if (pSource) {
      item.process = {
        title: pSource.title || "Our Process",
        subtitle: pSource.subtitle,
        image: pSource.image || "/assets/images/turnkey-interior-execution-process.webp",
        image_alt: pSource.image_alt || "Process",
        tabs: pSource.tabs || [],
      };
    } else if (rawAny.design_process && rawAny.design_process.steps) {
      item.process = {
        title: rawAny.design_process.title || "Design Process",
        subtitle: rawAny.design_process.subtitle,
        image: "/assets/images/turnkey-interior-execution-process.webp",
        image_alt: "Design Process",
        tabs: rawAny.design_process.steps.map((st: any, idx: number) => ({
          id: `step-${idx + 1}`,
          label: st.title,
          content: st.description,
        })),
      };
    } else if (rawAny.four_steps && rawAny.four_steps.steps) {
      item.process = {
        title: rawAny.four_steps.title || "Execution Steps",
        subtitle: rawAny.four_steps.subtitle,
        image: rawAny.four_steps.image || "/assets/images/turnkey-interior-execution-process.webp",
        image_alt: rawAny.four_steps.image_alt || "Execution Steps",
        tabs: rawAny.four_steps.steps.map((st: any, idx: number) => ({
          id: `step-${idx + 1}`,
          label: st.title,
          content: st.description,
        })),
      };
    }
  }

  // 4. Quote normalization
  if (!item.quote) {
    item.quote =
      rawAny.callout ||
      rawAny.reconstruction_quote ||
      (typeof rawAny.philosophy === "string" ? rawAny.philosophy : rawAny.philosophy?.description) ||
      rawAny.interior_philosophy?.description;
  }

  // 5. Execution cards normalization
  if (!item.execution_cards || item.execution_cards.length === 0) {
    if (rawAny.team_approach && rawAny.team_approach.length > 0) {
      item.execution_cards = rawAny.team_approach;
    }
  }

  return item;
}

/**
 * Get authoritative page content by slug (e.g. "flat-interior", "/flat-interior.html", "").
 * Returns null if slug is not found.
 */
export function getPageBySlug(slugOrPath: string): PageData | null {
  const slug = normalizeSlug(slugOrPath);
  const raw = pageRegistry.get(slug);
  if (!raw) {
    if (import.meta.env?.DEV) {
      console.warn(`[contentLoader] Content not found for slug: "${slugOrPath}" (normalized: "${slug}")`);
    }
    return null;
  }
  return normalizePageData(raw, slug);
}

/**
 * Get all available authoritative pages.
 */
export function getAllPages(): PageData[] {
  const result: PageData[] = [];
  const seen = new Set<string>();
  for (const [slug, raw] of pageRegistry.entries()) {
    if (!seen.has(slug)) {
      seen.add(slug);
      result.push(normalizePageData(raw, slug));
    }
  }
  return result;
}
