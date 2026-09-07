import apartmentInterior from "./content/apartment-interior.json";
import banquetHallInterior from "./content/banquet-hall-interior.json";
import bathroomRemodelers from "./content/bathroom-remodelers.json";
import bungalowInterior from "./content/bungalow-interior.json";
import clinicInterior from "./content/clinic-interior.json";
import commercialInterior from "./content/commercial-interior.json";
import farmhouseInterior from "./content/farmhouse-interior.json";
import furnitureManufacturer from "./content/furniture-manufacturer.json";
import gymInterior from "./content/gym-interior.json";
import homeInterior from "./content/home-interior.json";
import hospitalInterior from "./content/hospital-interior.json";
import hotelInterior from "./content/hotel-interior.json";
import interiorDelhi from "./content/interior-designers-decorators-in-delhi.json";
import interiorFaridabad from "./content/interior-designers-decorators-in-faridabad.json";
import interiorGhaziabad from "./content/interior-designers-decorators-in-ghaziabad.json";
import interiorGurgaon from "./content/interior-designers-decorators-in-gurgaon.json";
import interiorNoida from "./content/interior-designers-decorators-in-noida.json";
import interiorSonipat from "./content/interior-designers-decorators-in-sonipat.json";
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
    description: string;
    image: string;
    image_alt?: string;
  };
  design_concept: {
    title: string;
    description: string;
    image: string;
    image_alt?: string;
    links?: string[];
  };
  quote?: string;
  turnkey_services: {
    title: string;
    subtitle?: string;
    cards: TurnkeyCard[];
  };
  process: {
    title: string;
    subtitle?: string;
    image?: string;
    image_alt?: string;
    tabs: ProcessTab[];
  };
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
  "furniture-manufacturer": furnitureManufacturer as unknown as RichPageData,
  "gym-interior": gymInterior as unknown as RichPageData,
  "home-interior": homeInterior as unknown as RichPageData,
  "hospital-interior": hospitalInterior as unknown as RichPageData,
  "hotel-interior": hotelInterior as unknown as RichPageData,
  "interior-designers-decorators-in-delhi": interiorDelhi as unknown as RichPageData,
  "interior-designers-decorators-in-faridabad": interiorFaridabad as unknown as RichPageData,
  "interior-designers-decorators-in-ghaziabad": interiorGhaziabad as unknown as RichPageData,
  "interior-designers-decorators-in-gurgaon": interiorGurgaon as unknown as RichPageData,
  "interior-designers-decorators-in-noida": interiorNoida as unknown as RichPageData,
  "interior-designers-decorators-in-sonipat": interiorSonipat as unknown as RichPageData,
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
          thumb: "/assets/corporate_office.jpg",
          tag: "Corporate",
        },
        {
          title: "Acoustic Reception & Waiting Zone",
          image: "/assets/card_function_first.jpg",
          thumb: "/assets/card_function_first.jpg",
          tag: "Commercial",
        },
        {
          title: "Architectural Wood Millwork & Paneling",
          image: "/assets/wood_millwork.jpg",
          thumb: "/assets/wood_millwork.jpg",
          tag: "Joinery",
        },
        {
          title: "Client Hospitality Lounge",
          image: "/assets/luxury_lounge_finished.jpg",
          thumb: "/assets/luxury_lounge_finished.jpg",
          tag: "Hospitality",
        },
      ],
    };
  }

  // 2. Furniture Manufacturing, Woodworking, Millwork, Kirti Nagar Timber Market
  if (
    s.includes("furniture") ||
    s.includes("kirti-nagar") ||
    s.includes("millwork") ||
    s.includes("joinery") ||
    s.includes("timber") ||
    l.includes("furniture")
  ) {
    return {
      hero: "/assets/wood_millwork.jpg",
      heroAlt: `Kirti Nagar Furniture Manufacturing & Teakwood Joinery by 4 Lotus Interior`,
      concept: "/assets/curved_sofa_project.jpg",
      conceptAlt: `Handcrafted Curved Sofas, Loungers & Solid Teak Joinery`,
      execution_cards: [
        {
          title: `Direct Factory Woodworking & Custom Timber Millwork`,
          role: "Kirti Nagar Workshop Production",
          description: `Direct manufacturing of seasoned solid teak, fluted wall louvers, bespoke credenzas, and precision-veneered architectural elements.`,
          image: "/assets/wood_millwork.jpg",
        },
        {
          title: `Handcrafted Luxury Upholstery & Bespoke Seating`,
          role: "Artisan Living Room Suites",
          description: `High-density foam, feather-fill cushions, and imported performance fabrics tailored into signature organic curved sofas and armchairs.`,
          image: "/assets/curved_sofa_project.jpg",
        },
      ],
      gallery: [
        {
          title: "In-House Woodworking Workshop",
          image: "/assets/wood_millwork.jpg",
          thumb: "/assets/wood_millwork.jpg",
          tag: "Factory Millwork",
        },
        {
          title: "Handcrafted Luxury Curved Lounger",
          image: "/assets/curved_sofa_project.jpg",
          thumb: "/assets/curved_sofa_project.jpg",
          tag: "Bespoke Furniture",
        },
        {
          title: "Fluted Bed Back & Acoustic Slatting",
          image: "/assets/master_bedroom.jpg",
          thumb: "/assets/master_bedroom.jpg",
          tag: "Joinery",
        },
        {
          title: "Modular Island Kitchen Cabinetry",
          image: "/assets/modular_kitchen.jpg",
          thumb: "/assets/modular_kitchen.jpg",
          tag: "Modular",
        },
      ],
    };
  }

  // 3. Kitchen Remodelers & Bathroom Remodelers
  if (
    s.includes("kitchen") ||
    s.includes("bathroom") ||
    l.includes("kitchen") ||
    l.includes("bathroom")
  ) {
    return {
      hero: "/assets/modular_kitchen.jpg",
      heroAlt: `Luxury German Modular Kitchen & Bath Remodeling by 4 Lotus Interior`,
      concept: "/assets/modern_apartment.jpg",
      conceptAlt: `Integrated Open-Concept Kitchen & Dining Architecture`,
      execution_cards: [
        {
          title: `German Hardware & Quartz Waterfall Island Kitchens`,
          role: "Ergonomic Culinary Architecture",
          description: `Soft-close Blum lift-ups, motorized tandem drawers, anti-scratch quartz countertops, and integrated appliance tall units.`,
          image: "/assets/modular_kitchen.jpg",
        },
        {
          title: `Marine-Grade Veneer & High-Moisture Cabinetry`,
          role: "Factory-Calibrated Fitouts",
          description: `BWP Grade boiling waterproof marine ply carcases, PU lacquered shutters, and concealed LED ambient task strip illumination.`,
          image: "/assets/wood_millwork.jpg",
        },
      ],
      gallery: [
        {
          title: "Quartz Waterfall Island Kitchen",
          image: "/assets/modular_kitchen.jpg",
          thumb: "/assets/modular_kitchen.jpg",
          tag: "Modular Kitchen",
        },
        {
          title: "Precision CNC Kitchen Cabinetry",
          image: "/assets/wood_millwork.jpg",
          thumb: "/assets/wood_millwork.jpg",
          tag: "Millwork",
        },
        {
          title: "Contemporary Integrated Dining",
          image: "/assets/modern_apartment.jpg",
          thumb: "/assets/modern_apartment.jpg",
          tag: "Open Plan",
        },
        {
          title: "Luxury Master Vanity & En-Suite",
          image: "/assets/master_bedroom.jpg",
          thumb: "/assets/master_bedroom.jpg",
          tag: "Bath & Vanity",
        },
      ],
    };
  }

  // 4. Hospitality: Hotel, Restaurant, Banquet Hall, Pub, Bar, Salon, Gym
  if (
    s.includes("hotel") ||
    s.includes("restaurant") ||
    s.includes("banquet") ||
    s.includes("pub") ||
    s.includes("salon") ||
    s.includes("gym") ||
    l.includes("restaurant") ||
    l.includes("hotel") ||
    l.includes("banquet")
  ) {
    return {
      hero: "/assets/luxury_lounge_finished.jpg",
      heroAlt: `Luxury Hospitality & Entertainment Architecture by 4 Lotus Interior`,
      concept: "/assets/cta_fireplace.jpg",
      conceptAlt: `Warm Ambient Dining, Atmospheric Lighting & VIP Lounges`,
      execution_cards: [
        {
          title: `Grand Double-Height Banquet & Lobby Architecture`,
          role: "Experiential Hospitality Design",
          description: `Opulent statement lighting, acoustic wall paneling, Italian marble flooring, and durable high-traffic luxury finishes.`,
          image: "/assets/south_delhi_villa.jpg",
        },
        {
          title: `Atmospheric Cocktail Lounges & Intimate Dining`,
          role: "Lighting & Acoustic Curation",
          description: `Custom fluted bar counters, warm cove illumination, leather booth banquettes, and fire-rated designer interior fixtures.`,
          image: "/assets/luxury_lounge_finished.jpg",
        },
      ],
      gallery: [
        {
          title: "Atmospheric Cocktail Lounge",
          image: "/assets/luxury_lounge_finished.jpg",
          thumb: "/assets/luxury_lounge_finished.jpg",
          tag: "Lounge",
        },
        {
          title: "Intimate Fireside Dining Sanctuary",
          image: "/assets/cta_fireplace.jpg",
          thumb: "/assets/cta_fireplace.jpg",
          tag: "Dining",
        },
        {
          title: "Grand Banquet & Reception Hall",
          image: "/assets/south_delhi_villa.jpg",
          thumb: "/assets/south_delhi_villa.jpg",
          tag: "Banquet",
        },
        {
          title: "Bespoke Bar Counter & Wood Slatting",
          image: "/assets/wood_millwork.jpg",
          thumb: "/assets/wood_millwork.jpg",
          tag: "Joinery",
        },
      ],
    };
  }

  // 5. Luxury Villas, Bungalows, Farmhouses, Penthouses & Prime South Delhi Localities
  const isSouthDelhiOrVilla =
    s.includes("villa") ||
    s.includes("bungalow") ||
    s.includes("farmhouse") ||
    s.includes("penthouse") ||
    s.includes("south-delhi") ||
    s.includes("greater-kailash") ||
    s.includes("vasant-kunj") ||
    s.includes("vasant-vihar") ||
    s.includes("defence-colony") ||
    s.includes("hauz-khas") ||
    s.includes("punjabi-bagh") ||
    s.includes("golf-links") ||
    s.includes("chanakyapuri") ||
    s.includes("panchsheel") ||
    s.includes("shanti-niketan") ||
    s.includes("anand-niketan") ||
    s.includes("new-friends-colony") ||
    s.includes("gulmohar") ||
    s.includes("sainik-farm") ||
    s.includes("civil-lines") ||
    l.includes("villa") ||
    l.includes("bungalow") ||
    l.includes("farmhouse") ||
    l.includes("south delhi");

  if (isSouthDelhiOrVilla) {
    return {
      hero: "/assets/south_delhi_villa.jpg",
      heroAlt: `Luxury Villa & Bungalow Interior Architecture in South Delhi by 4 Lotus Interior`,
      concept: "/assets/luxury_lounge_finished.jpg",
      conceptAlt: `Bespoke Formal Living Rooms, Double Height Sanctuaries & Marble Detailing`,
      execution_cards: [
        {
          title: `Double-Height Formal Living & Entertainment Sanctuaries`,
          role: "Bespoke Villa Transformation",
          description: `Bookmatched Statuario Italian marble, integrated crystal chandeliers, floor-to-ceiling drapery, and acoustic ceiling coffer systems.`,
          image: "/assets/south_delhi_villa.jpg",
        },
        {
          title: `Opulent Master Bedroom Suites & Walk-In Dressing Rooms`,
          role: "Private Sanctuary Architecture",
          description: `Custom fluted upholstered headboard walls, hidden door wardrobes, motorized sheer drapery, and integrated warm circadian illumination.`,
          image: "/assets/master_bedroom.jpg",
        },
      ],
      gallery: [
        {
          title: "Double-Height Formal Villa Living",
          image: "/assets/south_delhi_villa.jpg",
          thumb: "/assets/south_delhi_villa.jpg",
          tag: "Villa",
        },
        {
          title: "Fluted Master Bedroom Suite",
          image: "/assets/master_bedroom.jpg",
          thumb: "/assets/master_bedroom.jpg",
          tag: "Master Bedroom",
        },
        {
          title: "German Quartz Waterfall Island Kitchen",
          image: "/assets/modular_kitchen.jpg",
          thumb: "/assets/modular_kitchen.jpg",
          tag: "Modular Kitchen",
        },
        {
          title: "Custom Ribbed Teakwood Joinery",
          image: "/assets/wood_millwork.jpg",
          thumb: "/assets/wood_millwork.jpg",
          tag: "Factory Millwork",
        },
      ],
    };
  }

  // 6. High-Rise Apartments, Condominiums, Urban Flats (Dwarka, Rohini, Paschim Vihar, Janakpuri, Noida, Gurgaon, etc.)
  const hash = s.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0);
  const apartmentHeroes = [
    "/assets/modern_apartment.jpg",
    "/assets/hero_living_room.jpg",
    "/assets/curved_sofa_project.jpg",
  ];

  const selectedHero = s.includes("dwarka")
    ? "/assets/modern_apartment.jpg"
    : s.includes("rohini")
    ? "/assets/hero_living_room.jpg"
    : s.includes("paschim-vihar")
    ? "/assets/curved_sofa_project.jpg"
    : s.includes("janakpuri")
    ? "/assets/modern_apartment.jpg"
    : s.includes("vikas-puri")
    ? "/assets/hero_living_room.jpg"
    : apartmentHeroes[hash % apartmentHeroes.length];

  const selectedConcept =
    selectedHero === "/assets/modern_apartment.jpg"
      ? "/assets/hero_living_room.jpg"
      : selectedHero === "/assets/hero_living_room.jpg"
      ? "/assets/curved_sofa_project.jpg"
      : "/assets/luxury_lounge_finished.jpg";

  return {
    hero: selectedHero,
    heroAlt: `Contemporary Apartment Interior Design & Turnkey Fitouts by 4 Lotus Interior`,
    concept: selectedConcept,
    conceptAlt: `Open-Concept Living, Modular Partitions & Ambient Lighting`,
    execution_cards: [
      {
        title: `Curated High-Rise Living & Dining Sanctuaries`,
        role: "Bespoke Apartment Architecture",
        description: `Transforming builder flats and apartments into open-concept homes with slatted partitions, hidden storage, and concealed ambient illumination.`,
        image: selectedHero,
      },
      {
        title: `Acoustic Master Suites & Modular Storage Systems`,
        role: "Luxury Residential Fitout",
        description: `Bespoke upholstered beds, floor-to-ceiling wardrobes, and integrated work-from-home nooks engineered for maximum space efficiency.`,
        image: "/assets/master_bedroom.jpg",
      },
    ],
    gallery: [
      {
        title: "Open-Plan High-Rise Living & Dining",
        image: "/assets/modern_apartment.jpg",
        thumb: "/assets/modern_apartment.jpg",
        tag: "Apartment",
      },
      {
        title: "Acoustic Slat Master Bedroom Suite",
        image: "/assets/master_bedroom.jpg",
        thumb: "/assets/master_bedroom.jpg",
        tag: "Bedroom",
      },
      {
        title: "German Quartz Island Modular Kitchen",
        image: "/assets/modular_kitchen.jpg",
        thumb: "/assets/modular_kitchen.jpg",
        tag: "Kitchen",
      },
      {
        title: "Handcrafted Curved Lounger & Living Accent",
        image: "/assets/curved_sofa_project.jpg",
        thumb: "/assets/curved_sofa_project.jpg",
        tag: "Living Suite",
      },
    ],
  };
}

export function createLocalizedRichData(item: PageInventoryItem): RichPageData {
  const locality = item.label
    .replace(/^Top /i, "")
    .replace(/^Luxury /i, "")
    .replace(/^Interior Designers & Decorators in /i, "")
    .replace(/^Interior Designers in /i, "")
    .replace(/ Design & Renovation$/i, "")
    .replace(/ Renovation$/i, "")
    .trim();

  const title = item.metaTitle || `Interior Designers & Decorators in ${locality} | 4 Lotus Interior`;
  const metaDesc =
    item.metaDescription ||
    `Bespoke residential interior architecture, luxury renovations, modular joinery, and turnkey civil contracting in ${locality}.`;

  const visuals = getContextualVisuals(item.slug, item.label);

  return {
    url: item.url,
    slug: item.slug,
    canonical: item.url,
    seo: {
      title,
      meta_description: metaDesc,
      og_title: title,
      og_image: visuals.hero,
    },
    hero: {
      title: item.label,
      description: item.metaDescription,
      image: visuals.hero,
      image_alt: visuals.heroAlt,
    },
    design_concept: {
      title: `Architectural Excellence in ${locality}`,
      description: `At 4 Lotus Interior, we deliver tailored architectural spatial planning, 2D/3D visualizations, in-house solid wood millwork, and end-to-end civil contracting across ${locality}. Our single-window turnkey approach eliminates contractor delays, ensuring project handovers are on time, on budget, and crafted to the highest architectural standards.`,
      image: visuals.concept,
      image_alt: visuals.conceptAlt,
      links: [
        `Turnkey Interior Designers in ${locality}`,
        `Luxury Residential Contractors in ${locality}`,
        `Bespoke Modular Kitchens in ${locality}`,
        `Commercial Office Renovations in ${locality}`,
      ],
    },
    quote: `Every residence and workspace in ${locality} deserves an environment engineered for timeless elegance and effortless everyday living. Our commitment is to deliver bespoke luxury backed by factory-grade precision.`,
    turnkey_services: {
      title: `Turnkey Interior Services in ${locality}`,
      subtitle: "Full-scope design, procurement, millwork, and contracting under one roof",
      cards: [
        {
          title: "Spatial Planning & 3D Renderings",
          subtitle: "Architectural Schematics",
          description: `Detailed 2D furniture layouts, MEP schematics, lighting calculations, and photorealistic 3D virtual walkthroughs before civil commencement in ${locality}.`,
          icon: "/assets/blueprint_sketch.svg",
        },
        {
          title: "Custom Joinery & Millwork",
          subtitle: "Kirti Nagar Factory",
          description: `Direct manufacturing of solid teak sofas, modular wardrobe systems, and premium German-hardware modular kitchens crafted in our West Delhi timber facility.`,
          icon: "/assets/card_02_sketch.svg",
        },
        {
          title: "Turnkey Civil & Fitout Execution",
          subtitle: "Dedicated Project Management",
          description: `Demolition, masonry, plaster, false ceiling, sanitary plumbing, VRV air conditioning, and electrical cabling executed with zero contractor disputes across ${locality}.`,
          icon: "/assets/card_03_sketch.svg",
        },
      ],
    },
    process: {
      title: "Our Proven Delivery Methodology",
      subtitle: "A systematic roadmap from initial site measurement to keys handover",
      image: "/assets/blueprint_sketch.svg",
      image_alt: "Design Build Process",
      tabs: [
        {
          id: "design-phase",
          label: "Design Phase",
          content: `Brief Analysis, On-Site Laser Survey in ${locality}, Spatial Layout Planning, Bill of Quantities (BOQ), Concept Detailing, 3D Rendered Views, and Material Sampling.`,
        },
        {
          id: "build-phase",
          label: "Build Phase",
          content: `Production Drawings, Dedicated Site Engineer Supervision, Quality Control Benchmarks, Weekly Progress Reporting, Safety Compliance, and Flawless Handover in ${locality}.`,
        },
      ],
    },
    execution_cards: visuals.execution_cards,
    gallery: visuals.gallery,
    contact: {
      title: "Connect With Our Studio",
      phones: ["+91 98106 98082", "+91 98113 63064"],
      addresses: [
        "Plot No-18, 1st Floor, Main Palam Dwarka Road, Near Dabri Police Station, South West Delhi, New Delhi-110045",
        "Plot No-57, W.H.S, A Block, 2nd Floor, Kirti Nagar Industrial Area, Timber Market, West Delhi, New Delhi-110015",
      ],
      email: "contact@4lotusinterior.in",
    },
  };
}

export const richPageDataMap: Record<string, RichPageData> = {
  ...baseRichPageDataMap,
};

// Enhance baseRichPageDataMap with authentic contextual imagery
Object.keys(richPageDataMap).forEach((slug) => {
  const item = richPageDataMap[slug];
  if (item) {
    const rawAny = item as any;
    const visuals = getContextualVisuals(slug, item.hero?.title || slug);

    // Normalize design_concept if present under legacy bespoke_design
    if (!item.design_concept && rawAny.bespoke_design) {
      item.design_concept = {
        title: rawAny.bespoke_design.title,
        description: rawAny.bespoke_design.description,
        image: visuals.concept,
        image_alt: visuals.conceptAlt,
        links: Array.isArray(rawAny.bespoke_design.links)
          ? rawAny.bespoke_design.links.map((l: any) =>
              typeof l === "string" ? l : l.label || l.text || ""
            )
          : [],
      };
    }

    // Normalize turnkey_services if present under legacy turnkey_solutions
    if (!item.turnkey_services && rawAny.turnkey_solutions) {
      item.turnkey_services = {
        title: rawAny.turnkey_solutions.title,
        subtitle: rawAny.turnkey_solutions.subtitle,
        cards: (rawAny.turnkey_solutions.pillars || []).map((p: any) => ({
          title: p.title,
          subtitle: p.role,
          description: p.description,
          icon: "/assets/blueprint_sketch.svg",
        })),
      };
    }

    // Always ensure hero has contextual photorealistic local asset
    if (!item.hero?.image || item.hero.image.includes("4lotusinterior.in")) {
      if (item.hero) {
        item.hero.image = visuals.hero;
        item.hero.image_alt = visuals.heroAlt;
      }
    }

    // Always ensure concept has contextual local asset
    if (
      item.design_concept &&
      (!item.design_concept.image || item.design_concept.image.includes("4lotusinterior.in"))
    ) {
      item.design_concept.image = visuals.concept;
      item.design_concept.image_alt = visuals.conceptAlt;
    }

    // Always ensure execution cards and gallery have high-res local assets
    if (
      !item.execution_cards ||
      item.execution_cards.length === 0 ||
      item.execution_cards[0]?.image?.includes("4lotusinterior.in")
    ) {
      item.execution_cards = visuals.execution_cards;
    }

    if (
      !item.gallery ||
      item.gallery.length === 0 ||
      item.gallery[0]?.image?.includes("4lotusinterior.in")
    ) {
      item.gallery = visuals.gallery;
    }
  }
});

// Populate rich data for all inventory items (including all Prime Localities)
pageInventory.forEach((item) => {
  if (item.slug && !richPageDataMap[item.slug]) {
    richPageDataMap[item.slug] = createLocalizedRichData(item);
  }
});

