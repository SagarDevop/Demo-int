import apartmentInterior from "./content/apartment-interior.json";
import banquetHallInterior from "./content/banquet-hall-interior.json";
import bathroomRemodelers from "./content/bathroom-remodelers.json";
import bungalowInterior from "./content/bungalow-interior.json";
import clinicInterior from "./content/clinic-interior.json";
import commercialInterior from "./content/commercial-interior.json";
import farmhouseInterior from "./content/farmhouse-interior.json";
import flatInterior from "./content/flat-interior.json";
import furnitureManufacturer from "./content/furniture-manufacturer.json";
import gymInterior from "./content/gym-interior.json";
import homeInterior from "./content/home-interior.json";
import hospitalInterior from "./content/hospital-interior.json";
import hotelInterior from "./content/hotel-interior.json";
import interiorDesignersDecoratorsInDelhi from "./content/interior-designers-decorators-in-delhi.json";
import interiorDesignersDecoratorsInFaridabad from "./content/interior-designers-decorators-in-faridabad.json";
import interiorDesignersDecoratorsInGhaziabad from "./content/interior-designers-decorators-in-ghaziabad.json";
import interiorDesignersDecoratorsInGurgaon from "./content/interior-designers-decorators-in-gurgaon.json";
import interiorDesignersDecoratorsInNoida from "./content/interior-designers-decorators-in-noida.json";
import interiorDesignersDecoratorsInSonipat from "./content/interior-designers-decorators-in-sonipat.json";
import interiorDesignersDwarka from "./content/interior-designers-dwarka.json";
import interiorDesignersEastDelhi from "./content/interior-designers-east-delhi.json";
import interiorDesignersGreaterKailash from "./content/interior-designers-greater-kailash.json";
import interiorDesignersJanakpuri from "./content/interior-designers-janakpuri.json";
import interiorDesignersKarolBagh from "./content/interior-designers-karol-bagh.json";
import interiorDesignersKirtiNagar from "./content/interior-designers-kirti-nagar.json";
import interiorDesignersLajpatNagar from "./content/interior-designers-lajpat-nagar.json";
import interiorDesignersNajafgarh from "./content/interior-designers-najafgarh.json";
import interiorDesignersNaraina from "./content/interior-designers-naraina.json";
import interiorDesignersNorthDelhi from "./content/interior-designers-north-delhi.json";
import interiorDesignersPaschimVihar from "./content/interior-designers-paschim-vihar.json";
import interiorDesignersPatelNagar from "./content/interior-designers-patel-nagar.json";
import interiorDesignersPitampura from "./content/interior-designers-pitampura.json";
import interiorDesignersPunjabiBagh from "./content/interior-designers-punjabi-bagh.json";
import interiorDesignersRajouriGarden from "./content/interior-designers-rajouri-garden.json";
import interiorDesignersRaniBagh from "./content/interior-designers-rani-bagh.json";
import interiorDesignersRohini from "./content/interior-designers-rohini.json";
import interiorDesignersSafdarjungEnclave from "./content/interior-designers-safdarjung-enclave.json";
import interiorDesignersShaktiNagar from "./content/interior-designers-shakti-nagar.json";
import interiorDesignersSouthDelhi from "./content/interior-designers-south-delhi.json";
import interiorDesignersTilakNagar from "./content/interior-designers-tilak-nagar.json";
import interiorDesignersUttamNagar from "./content/interior-designers-uttam-nagar.json";
import interiorDesignersVasantKunj from "./content/interior-designers-vasant-kunj.json";
import interiorDesignersVikasPuri from "./content/interior-designers-vikas-puri.json";
import interiorDesignersVishalEnclave from "./content/interior-designers-vishal-enclave.json";
import interiorDesignersWestDelhi from "./content/interior-designers-west-delhi.json";
import interiorDesigners from "./content/interior-designers.json";
import kitchenRemodelers from "./content/kitchen-remodelers.json";
import officeInterior from "./content/office-interior.json";
import penthouseInterior from "./content/penthouse-interior.json";
import pubInterior from "./content/pub-interior.json";
import residentialInterior from "./content/residential-interior.json";
import restaurantInterior from "./content/restaurant-interior.json";
import salonInterior from "./content/salon-interior.json";
import schoolInterior from "./content/school-interior.json";
import shopInterior from "./content/shop-interior.json";
import showroomInterior from "./content/showroom-interior.json";
import villaInterior from "./content/villa-interior.json";

export interface TurnkeyCard {
  title: string;
  subtitle?: string;
  role?: string;
  description: string;
  icon?: string;
}

export interface ProcessTab {
  id: string;
  label: string;
  content: string;
}

export interface ExecutionCard {
  title: string;
  role?: string;
  description: string;
  image: string;
}

export interface GalleryItem {
  title: string;
  image: string;
  thumb?: string;
  tag?: string;
}

export interface ShowcaseDuoItem {
  title: string;
  image: string;
  alt?: string;
}

export interface AccordionItem {
  title: string;
  content: string;
}

export interface FlipCardItem {
  title: string;
  description: string;
  image?: string;
}

export interface ServicePillarItem {
  title: string;
  role?: string;
  description: string;
  icon?: string;
}

export interface DesignProcessStep {
  step: number | string;
  title: string;
  description: string;
}

export interface CoreServiceItem {
  number?: string | number;
  title: string;
  description: string;
}

export interface RichPageData {
  url: string;
  slug: string;
  canonical: string;
  seo: {
    title: string;
    meta_description: string;
    og_card?: string;
    og_image?: string;
    og_title?: string;
    robots?: string;
  };
  hero: {
    title: string;
    subtitle?: string;
    description: string;
    image: string;
    image_alt?: string;
  };
  hero_sub_cards?: { title: string; description: string }[];
  design_concept?: {
    title: string;
    description: string;
    image: string;
    image_alt?: string;
    links?: string[];
  };
  bespoke_design?: any;
  exclusive_design?: any;
  quote?: string;
  callout?: string;
  core_services?: {
    title: string;
    subtitle?: string;
    image?: string;
    image_alt?: string;
    items: CoreServiceItem[];
  };
  service_pillars?: {
    title: string;
    subtitle?: string;
    cards?: ServicePillarItem[];
    items?: ServicePillarItem[];
  };
  expertise_breakdown?: {
    title: string;
    subtitle?: string;
    items?: { title: string; description: string }[];
  };
  specialties_carousel?: {
    title?: string;
    subtitle?: string;
    items?: any[];
  };
  holistic_solutions?: {
    title: string;
    subtitle?: string;
    cards: { icon?: string; title: string; description: string }[];
  };
  showcase_duo?: ShowcaseDuoItem[];
  accordion_sections?: AccordionItem[];
  flip_cards?: {
    title: string;
    cards: FlipCardItem[];
  };
  turnkey_services?: {
    title: string;
    subtitle?: string;
    cards: TurnkeyCard[];
  };
  turnkey_solutions?: any;
  process?: {
    title: string;
    subtitle?: string;
    image?: string;
    image_alt?: string;
    tabs: ProcessTab[];
  };
  design_process?: {
    title: string;
    subtitle?: string;
    steps: DesignProcessStep[];
  };
  remodeling_process?: any;
  craftsmanship_process?: any;
  we_do?: any;
  feature_section?: any;
  furniture_types?: any;
  factory_capabilities?: any;
  reconstruction?: any;
  kitchen_types_timeline?: any;
  residential_categories?: any;
  commercial_categories?: any;
  services_list?: any;
  team_approach?: ExecutionCard[];
  execution_cards?: ExecutionCard[];
  gallery?: GalleryItem[];
  contact?: {
    title?: string;
    phones: string[];
    addresses: string[];
    email: string;
    timings?: string;
    map_link?: string;
    map_image?: string;
  };
}

import { pageInventory, PageInventoryItem } from "./pageInventory";

export const baseRichPageDataMap: Record<string, RichPageData> = {
  "apartment-interior": apartmentInterior as unknown as RichPageData,
  "banquet-hall-interior": banquetHallInterior as unknown as RichPageData,
  "bathroom-remodelers": bathroomRemodelers as unknown as RichPageData,
  "bungalow-interior": bungalowInterior as unknown as RichPageData,
  "clinic-interior": clinicInterior as unknown as RichPageData,
  "commercial-interior": commercialInterior as unknown as RichPageData,
  "farmhouse-interior": farmhouseInterior as unknown as RichPageData,
  "flat-interior": flatInterior as unknown as RichPageData,
  "furniture-manufacturer": furnitureManufacturer as unknown as RichPageData,
  "gym-interior": gymInterior as unknown as RichPageData,
  "home-interior": homeInterior as unknown as RichPageData,
  "hospital-interior": hospitalInterior as unknown as RichPageData,
  "hotel-interior": hotelInterior as unknown as RichPageData,
  "interior-designers-decorators-in-delhi": interiorDesignersDecoratorsInDelhi as unknown as RichPageData,
  "interior-designers-decorators-in-faridabad": interiorDesignersDecoratorsInFaridabad as unknown as RichPageData,
  "interior-designers-decorators-in-ghaziabad": interiorDesignersDecoratorsInGhaziabad as unknown as RichPageData,
  "interior-designers-decorators-in-gurgaon": interiorDesignersDecoratorsInGurgaon as unknown as RichPageData,
  "interior-designers-decorators-in-noida": interiorDesignersDecoratorsInNoida as unknown as RichPageData,
  "interior-designers-decorators-in-sonipat": interiorDesignersDecoratorsInSonipat as unknown as RichPageData,
  "interior-designers-dwarka": interiorDesignersDwarka as unknown as RichPageData,
  "interior-designers-east-delhi": interiorDesignersEastDelhi as unknown as RichPageData,
  "interior-designers-greater-kailash": interiorDesignersGreaterKailash as unknown as RichPageData,
  "interior-designers-janakpuri": interiorDesignersJanakpuri as unknown as RichPageData,
  "interior-designers-karol-bagh": interiorDesignersKarolBagh as unknown as RichPageData,
  "interior-designers-kirti-nagar": interiorDesignersKirtiNagar as unknown as RichPageData,
  "interior-designers-lajpat-nagar": interiorDesignersLajpatNagar as unknown as RichPageData,
  "interior-designers-najafgarh": interiorDesignersNajafgarh as unknown as RichPageData,
  "interior-designers-naraina": interiorDesignersNaraina as unknown as RichPageData,
  "interior-designers-north-delhi": interiorDesignersNorthDelhi as unknown as RichPageData,
  "interior-designers-paschim-vihar": interiorDesignersPaschimVihar as unknown as RichPageData,
  "interior-designers-patel-nagar": interiorDesignersPatelNagar as unknown as RichPageData,
  "interior-designers-pitampura": interiorDesignersPitampura as unknown as RichPageData,
  "interior-designers-punjabi-bagh": interiorDesignersPunjabiBagh as unknown as RichPageData,
  "interior-designers-rajouri-garden": interiorDesignersRajouriGarden as unknown as RichPageData,
  "interior-designers-rani-bagh": interiorDesignersRaniBagh as unknown as RichPageData,
  "interior-designers-rohini": interiorDesignersRohini as unknown as RichPageData,
  "interior-designers-safdarjung-enclave": interiorDesignersSafdarjungEnclave as unknown as RichPageData,
  "interior-designers-shakti-nagar": interiorDesignersShaktiNagar as unknown as RichPageData,
  "interior-designers-south-delhi": interiorDesignersSouthDelhi as unknown as RichPageData,
  "interior-designers-tilak-nagar": interiorDesignersTilakNagar as unknown as RichPageData,
  "interior-designers-uttam-nagar": interiorDesignersUttamNagar as unknown as RichPageData,
  "interior-designers-vasant-kunj": interiorDesignersVasantKunj as unknown as RichPageData,
  "interior-designers-vikas-puri": interiorDesignersVikasPuri as unknown as RichPageData,
  "interior-designers-vishal-enclave": interiorDesignersVishalEnclave as unknown as RichPageData,
  "interior-designers-west-delhi": interiorDesignersWestDelhi as unknown as RichPageData,
  "interior-designers": interiorDesigners as unknown as RichPageData,
  "kitchen-remodelers": kitchenRemodelers as unknown as RichPageData,
  "office-interior": officeInterior as unknown as RichPageData,
  "penthouse-interior": penthouseInterior as unknown as RichPageData,
  "pub-interior": pubInterior as unknown as RichPageData,
  "residential-interior": residentialInterior as unknown as RichPageData,
  "restaurant-interior": restaurantInterior as unknown as RichPageData,
  "salon-interior": salonInterior as unknown as RichPageData,
  "school-interior": schoolInterior as unknown as RichPageData,
  "shop-interior": shopInterior as unknown as RichPageData,
  "showroom-interior": showroomInterior as unknown as RichPageData,
  "villa-interior": villaInterior as unknown as RichPageData,
};

export interface VisualTheme {
  hero: string;
  heroAlt: string;
  concept: string;
  conceptAlt: string;
  execution_cards: ExecutionCard[];
  gallery: GalleryItem[];
}

export function getContextualVisuals(slug: string, label: string = ""): VisualTheme {
  const s = slug.toLowerCase();
  const l = label.toLowerCase();

  // 1. Corporate / Office / Commercial / Showroom / Shop / Clinic / Hospital / School / Commercial Districts
  if (
    s.includes("office") ||
    s.includes("commercial") ||
    s.includes("showroom") ||
    s.includes("shop") ||
    s.includes("clinic") ||
    s.includes("hospital") ||
    s.includes("school") ||
    s.includes("corporate") ||
    s.includes("naraina") ||
    s.includes("connaught") ||
    s.includes("nehru-place") ||
    s.includes("okhla") ||
    s.includes("barakhamba") ||
    s.includes("bhikaji") ||
    s.includes("jasola") ||
    l.includes("commercial") ||
    l.includes("office") ||
    l.includes("corporate")
  ) {
    return {
      hero: "/assets/corporate_office.jpg",
      heroAlt: `Turnkey Commercial Architecture & Executive Interiors by 4 Lotus Interior`,
      concept: "/assets/card_function_first.jpg",
      conceptAlt: `Modern Boardroom, Acoustic Glass Systems & Workspaces`,
      execution_cards: [
        {
          title: `High-Performance Executive Suites & Boardrooms`,
          role: "Corporate Architecture & MEP",
          description: `Engineered meeting pods, acoustic double-glazed glass partitions, and linear architectural LED lighting systems delivering executive prestige.`,
          image: "/assets/corporate_office.jpg",
        },
        {
          title: `Precision Architectural Joinery & Reception Lounges`,
          role: "Bespoke Millwork & Fitouts",
          description: `In-house manufactured fluted wall paneling, monolithic reception desks, and client breakout zones crafted to corporate branding specifications.`,
          image: "/assets/wood_millwork.jpg",
        },
      ],
      gallery: [
        {
          title: "Executive Boardroom Suite",
          image: "/assets/corporate_office.jpg",
          tag: "Executive Corporate",
        },
        {
          title: "Architectural Workstations & Partitions",
          image: "/assets/card_function_first.jpg",
          tag: "Commercial Fitout",
        },
        {
          title: "Bespoke Walnut Reception Desk",
          image: "/assets/wood_millwork.jpg",
          tag: "Joinery & Millwork",
        },
        {
          title: "Lounge & Breakout Atrium",
          image: "/assets/luxury_lounge_finished.jpg",
          tag: "Modern Office",
        },
      ],
    };
  }

  // 2. Kitchen & Dining
  if (s.includes("kitchen") || l.includes("kitchen")) {
    return {
      hero: "/assets/modular_kitchen.jpg",
      heroAlt: `Factory-Crafted German Modular Kitchens by 4 Lotus Interior`,
      concept: "/assets/wood_millwork.jpg",
      conceptAlt: `Quartz Surfaces, In-House Shutter Pressing & Hardware`,
      execution_cards: [
        {
          title: `Quartz Waterfall Islands & Soft-Close Carcasses`,
          role: "Precision Factory Joinery",
          description: `Moisture-resistant HDHMR carcasses paired with Blum motion technology and anti-scratch acrylic finishes fabricated at Kirti Nagar.`,
          image: "/assets/modular_kitchen.jpg",
        },
        {
          title: `Ergonomic Pantry Units & Integrated Appliances`,
          role: "Modular Engineering",
          description: `Tandem pull-outs, concealed built-in ovens, profile task lighting, and corner organizers maximizing storage efficiency.`,
          image: "/assets/wood_millwork.jpg",
        },
      ],
      gallery: [
        {
          title: "Island Kitchen with Breakfast Counter",
          image: "/assets/modular_kitchen.jpg",
          tag: "Modular Kitchen",
        },
        {
          title: "Fluted Woodwork & Pantry Towers",
          image: "/assets/wood_millwork.jpg",
          tag: "Joinery Details",
        },
        {
          title: "Modern Dining & Buffet Credenza",
          image: "/assets/card_function_first.jpg",
          tag: "Dining Suite",
        },
        {
          title: "Open-Plan Living & Kitchen Transition",
          image: "/assets/hero_living_room.jpg",
          tag: "Turnkey Interior",
        },
      ],
    };
  }

  // 3. Furniture & Millwork
  if (s.includes("furniture") || s.includes("kirti-nagar") || l.includes("furniture")) {
    return {
      hero: "/assets/wood_millwork.jpg",
      heroAlt: `Bespoke Teak & Veneer Furniture Manufacturing at Kirti Nagar`,
      concept: "/assets/curved_sofa_project.jpg",
      conceptAlt: `Handcrafted Curved Upholstery & Bespoke Joinery`,
      execution_cards: [
        {
          title: `Solid Burma Teak Dining & Credenza Systems`,
          role: "In-House Wood Workshop",
          description: `Precision-seasoned hardwood joinery with zero-emission Italian PU coatings crafted directly in our West Delhi timber facility.`,
          image: "/assets/wood_millwork.jpg",
        },
        {
          title: `Custom Sculptural Seating & Fabric Curation`,
          role: "Bespoke Upholstery Atelier",
          description: `High-resilience foam layered with Belgian linens, tailored velvet sofas, and ergonomic accent armchairs made to measure.`,
          image: "/assets/curved_sofa_project.jpg",
        },
      ],
      gallery: [
        {
          title: "Custom Veneered Architectural Millwork",
          image: "/assets/wood_millwork.jpg",
          tag: "Factory Production",
        },
        {
          title: "Curved Velvet Living Suite",
          image: "/assets/curved_sofa_project.jpg",
          tag: "Custom Furniture",
        },
        {
          title: "Master Walk-in Wardrobe System",
          image: "/assets/master_bedroom.jpg",
          tag: "Wardrobe Millwork",
        },
        {
          title: "Luxury Lounge & Tailored Armchairs",
          image: "/assets/luxury_lounge_finished.jpg",
          tag: "Turnkey Finish",
        },
      ],
    };
  }

  // 4. Default: Luxury Residential (Villas, Mansions, Apartments, Penthouses, General Localities)
  return {
    hero: "/assets/south_delhi_villa.jpg",
    heroAlt: `Luxury Residential Interior Architecture by 4 Lotus Interior`,
    concept: "/assets/curved_sofa_project.jpg",
    conceptAlt: `Spatial Harmony, Italian Marble & Architectural Lighting`,
    execution_cards: [
      {
        title: `Comprehensive Turnkey Civil & Interior Fitout`,
        role: "Single-Point Architectural Execution",
        description: `Civil structural enhancements, false ceiling acoustics, VRV ducting, imported Italian marble laying, and turnkey handover.`,
        image: "/assets/south_delhi_villa.jpg",
      },
      {
        title: `Bespoke Wardrobes, Paneling & Lighting Design`,
        role: "Luxury Interior Styling",
        description: `Custom tinted-glass wardrobe shutters, fluted veneer feature walls, architectural magnetic track lighting, and automation.`,
        image: "/assets/master_bedroom.jpg",
      },
    ],
    gallery: [
      {
        title: "Grand Living Suite & Double-Height Atrium",
        image: "/assets/south_delhi_villa.jpg",
        tag: "Luxury Living",
      },
      {
        title: "Bespoke Master Bedroom Suite",
        image: "/assets/master_bedroom.jpg",
        tag: "Master Bedroom",
      },
      {
        title: "Curved Designer Lounge",
        image: "/assets/curved_sofa_project.jpg",
        tag: "Spatial Design",
      },
      {
        title: "Finished Architectural Lounge",
        image: "/assets/luxury_lounge_finished.jpg",
        tag: "Complete Turnkey",
      },
    ],
  };
}

// Initialize richPageDataMap with deep normalized structure
export const richPageDataMap: Record<string, RichPageData> = {};

// Populate base rich data and normalize fields
Object.entries(baseRichPageDataMap).forEach(([slug, rawItem]) => {
  if (!rawItem) return;
  const item: RichPageData = JSON.parse(JSON.stringify(rawItem));
  const rawAny = item as any;
  const visuals = getContextualVisuals(slug, item.hero?.title || slug);

  // Normalize design_concept
  if (!item.design_concept) {
    const sourceConcept = rawAny.bespoke_design || rawAny.exclusive_design;
    if (sourceConcept) {
      item.design_concept = {
        title: sourceConcept.title,
        description: sourceConcept.description,
        image: sourceConcept.image || visuals.concept,
        image_alt: sourceConcept.image_alt || visuals.conceptAlt,
        links: Array.isArray(sourceConcept.links)
          ? sourceConcept.links.map((l: any) =>
              typeof l === "string" ? l : l.label || l.text || ""
            )
          : [],
      };
    }
  }

  // Normalize turnkey_services
  if (!item.turnkey_services && rawAny.turnkey_solutions) {
    item.turnkey_services = {
      title: rawAny.turnkey_solutions.title || "Turnkey Interior Solutions",
      subtitle: rawAny.turnkey_solutions.subtitle,
      cards: (rawAny.turnkey_solutions.pillars || []).map((p: any) => ({
        title: p.title,
        subtitle: p.role,
        role: p.role,
        description: p.description,
        icon: p.icon || "/assets/blueprint_sketch.svg",
      })),
    };
  }

  // Normalize quote
  if (!item.quote && (rawAny.callout || rawAny.reconstruction_quote)) {
    item.quote = rawAny.callout || rawAny.reconstruction_quote;
  }

  // Normalize process
  if (!item.process && (rawAny.remodeling_process || rawAny.craftsmanship_process)) {
    const pSource = rawAny.remodeling_process || rawAny.craftsmanship_process;
    item.process = {
      title: pSource.title,
      subtitle: pSource.subtitle,
      image: pSource.image || "/assets/images/turnkey-interior-execution-process.webp",
      image_alt: pSource.image_alt || "Process",
      tabs: pSource.tabs || [],
    };
  }

  // Ensure hero image exists
  if (!item.hero?.image) {
    if (item.hero) {
      item.hero.image = visuals.hero;
      item.hero.image_alt = visuals.heroAlt;
    }
  }

  // Ensure execution cards exist
  if (!item.execution_cards || item.execution_cards.length === 0) {
    if (rawAny.team_approach && rawAny.team_approach.length > 0) {
      item.execution_cards = rawAny.team_approach;
    } else {
      item.execution_cards = visuals.execution_cards;
    }
  }

  // Ensure gallery exists
  if (!item.gallery || item.gallery.length === 0) {
    item.gallery = visuals.gallery;
  }

  richPageDataMap[slug] = item;
});

import { getPageBySlug } from "./contentLoader";

// Ensure all pageInventory items are populated from authoritative JSON content loader
pageInventory.forEach((item) => {
  const loaded = getPageBySlug(item.slug);
  if (loaded) {
    const richItem: RichPageData = JSON.parse(JSON.stringify(loaded));
    const visuals = getContextualVisuals(item.slug, richItem.hero?.title || item.label);
    if (!richItem.hero?.image && richItem.hero) {
      richItem.hero.image = visuals.hero;
      richItem.hero.image_alt = visuals.heroAlt;
    }
    if (!richItem.execution_cards || richItem.execution_cards.length === 0) {
      richItem.execution_cards = visuals.execution_cards;
    }
    if (!richItem.gallery || richItem.gallery.length === 0) {
      richItem.gallery = visuals.gallery;
    }
    richPageDataMap[item.slug] = richItem;
  } else if (!richPageDataMap[item.slug]) {
    const fallbackVisuals = getContextualVisuals(item.slug, item.label);
    richPageDataMap[item.slug] = {
      url: item.url,
      slug: item.slug,
      canonical: item.url,
      seo: {
        title: item.metaTitle,
        meta_description: item.metaDescription,
        og_title: item.metaTitle,
        og_image: fallbackVisuals.hero,
      },
      hero: {
        title: item.label,
        description: item.metaDescription,
        image: fallbackVisuals.hero,
        image_alt: fallbackVisuals.heroAlt,
      },
      turnkey_services: {
        title: `Turnkey Solutions in ${item.label}`,
        subtitle: "Complete Design & Execution",
        cards: fallbackVisuals.execution_cards.map((c) => ({
          title: c.title,
          description: c.description,
          icon: "/assets/blueprint_sketch.svg",
        })),
      },
      gallery: fallbackVisuals.gallery,
    };
  }
});

