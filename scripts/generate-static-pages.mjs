import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { createServer } from "vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const contentDir = path.resolve(rootDir, "src/data/content");
const distDir = path.resolve(rootDir, "dist");

// Read page inventory from TypeScript file
function loadInventory() {
  const tsContent = fs.readFileSync(path.resolve(rootDir, "src/data/pageInventory.ts"), "utf-8");
  const items = [];
  const regex = /{\s*url:\s*"([^"]+)",\s*slug:\s*"([^"]*)",\s*label:\s*"([^"]+)",\s*category:\s*"([^"]+)",\s*parentCategory:\s*"([^"]+)",\s*hasFullExtractedBody:\s*(true|false),\s*metaTitle:\s*"([^"]+)",\s*metaDescription:\s*"([^"]+)"\s*,?\s*}/g;
  let match;
  while ((match = regex.exec(tsContent)) !== null) {
    items.push({
      url: match[1],
      slug: match[2],
      label: match[3],
      category: match[4],
      parentCategory: match[5],
      hasFullExtractedBody: match[6] === "true",
      metaTitle: match[7],
      metaDescription: match[8],
    });
  }
  return items;
}

// Global Schema.org JSON-LD generator
function generateSchemaJson(data) {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "4 Lotus Interior",
    "image": data.seo?.og_image || "/assets/images/index-meta.webp",
    "@id": "https://4lotusinterior.in/",
    "url": data.url || "https://4lotusinterior.in/",
    "telephone": "+919810698082",
    "priceRange": "INR ((50-350)-(1000-7500))",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Plot No-18, 1st Floor, Main Palam Dwarka Road, Near Dabri Police Station, South West Delhi",
      "addressLocality": "New Delhi, Delhi",
      "postalCode": "110045",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 28.613026,
      "longitude": 77.085945
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "10:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "10:00",
        "closes": "14:00"
      }
    ],
    "sameAs": [
      "https://x.com/4lotusinterior",
      "https://www.facebook.com/4lotusinterior/",
      "https://4lotusinterior.in/"
    ],
    "department": {
      "@type": "LocalBusiness",
      "name": "4 Lotus Interior - Kirti Nagar Millwork & Studio",
      "image": "/assets/images/index-meta.webp",
      "@id": "https://4lotusinterior.in/",
      "url": "https://4lotusinterior.in/",
      "telephone": "+919811363064",
      "priceRange": "INR ((50-350)-(1000-7500))",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Plot No-57, W.h.s, A Block, 2nd Floor, Kirti Nagar Industrial Area, Timber Market, West Delhi",
        "addressLocality": "New Delhi, Delhi",
        "postalCode": "110015",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 28.636430,
        "longitude": 77.134442
      }
    }
  }, null, 2);
}

// Shared CSS styles for all generated static HTML pages
function getSharedStyles() {
  return `
* { box-sizing: border-box; margin: 0; padding: 0; }
body {
  font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  background-color: #F8F7F5;
  color: #111111;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}
a { color: inherit; text-decoration: none; }
img { max-width: 100%; height: auto; display: block; }

.container {
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 24px;
}
@media (min-width: 768px) {
  .container { padding: 0 40px; }
}

/* Header / Nav */
header.site-nav {
  position: sticky; top: 0; z-index: 50;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(0,0,0,0.08);
}
.nav-inner {
  height: 80px; display: flex; align-items: center; justify-content: space-between;
}
.brand-logo { font-size: 18px; font-weight: 800; letter-spacing: -0.03em; color: #111111; display: flex; align-items: center; gap: 8px; }
.brand-badge { font-size: 9px; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; background: #111; color: #fff; padding: 3px 8px; border-radius: 4px; }
.nav-links { display: flex; align-items: center; gap: 24px; list-style: none; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; }
.nav-links a:hover { color: #854d0e; }
.cta-btn { background: #111111; color: #ffffff !important; padding: 10px 18px; border-radius: 4px; transition: opacity 0.2s; white-space: nowrap; }
.cta-btn:hover { opacity: 0.9; }
.cta-btn-outline { background: transparent !important; color: #111111 !important; border: 1px solid rgba(0,0,0,0.2) !important; }
.cta-btn-outline:hover { border-color: #111111 !important; }
.mobile-toggle { display: none; background: none; border: none; cursor: pointer; padding: 8px; }

/* Hero Section */
.hero-section { padding: 40px 0 20px; }
.hero-card {
  background: #ffffff; border: 1px solid rgba(0,0,0,0.08); border-radius: 8px;
  padding: 40px; display: grid; grid-template-columns: 1fr 1.2fr; gap: 48px; align-items: center;
  box-shadow: 0 4px 20px rgba(0,0,0,0.03);
}
.hero-img-box {
  position: relative; border-radius: 6px; overflow: hidden; border: 1px solid rgba(0,0,0,0.1);
  aspect-ratio: 4/3; max-height: 500px; background: #FAF9F6;
}
.hero-img-box img { width: 100%; height: 100%; object-fit: cover; }
.eyebrow { font-size: 11px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: #777777; margin-bottom: 12px; display: block; }
h1.hero-title { font-size: 36px; font-weight: 800; line-height: 1.15; text-transform: uppercase; letter-spacing: -0.02em; margin-bottom: 16px; color: #111111; }
.hero-desc { font-size: 15px; color: #444444; font-weight: 300; line-height: 1.7; margin-bottom: 24px; }
.hero-btns { display: flex; flex-wrap: wrap; gap: 12px; }
.btn-primary { background: #111111; color: #fff; padding: 14px 28px; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; border-radius: 4px; }
.btn-outline { border: 1px solid rgba(0,0,0,0.2); color: #111; padding: 14px 28px; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; border-radius: 4px; }

/* Concept Card */
.concept-section { padding: 40px 0; }
.concept-card {
  background: #ffffff; border: 1px solid rgba(0,0,0,0.08); border-radius: 8px;
  padding: 48px; display: grid; grid-template-columns: 1.3fr 1fr; gap: 48px; align-items: center;
}
.concept-title { font-size: 26px; font-weight: 800; text-transform: uppercase; margin-bottom: 16px; }
.concept-desc { font-size: 14px; color: #444; font-weight: 300; line-height: 1.7; margin-bottom: 24px; }
.tags-list { display: flex; flex-wrap: wrap; gap: 8px; }
.tag-item { background: #FAF9F6; border: 1px solid rgba(0,0,0,0.08); padding: 6px 14px; border-radius: 4px; font-size: 11px; font-weight: 600; color: #333; }

/* Quote Box */
.quote-section { padding: 30px 0; }
.quote-box {
  background: #111111; color: #ffffff; border-radius: 8px; padding: 48px 32px;
  text-align: center; max-width: 1000px; margin: 0 auto;
}
.quote-box blockquote { font-size: 20px; font-style: italic; font-weight: 300; line-height: 1.6; margin-bottom: 16px; }
.quote-author { font-size: 10px; font-weight: 700; letter-spacing: 0.25em; text-transform: uppercase; color: #a3a3a3; }

/* Turnkey Services */
.services-section { padding: 40px 0; }
.section-header { text-align: center; max-width: 800px; margin: 0 auto 36px; }
.section-title { font-size: 28px; font-weight: 800; text-transform: uppercase; margin-bottom: 8px; }
.section-subtitle { font-size: 14px; color: #666666; font-weight: 400; }
.cards-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px; }
.service-card {
  background: #ffffff; border: 1px solid rgba(0,0,0,0.08); border-radius: 8px;
  padding: 32px; display: flex; flex-direction: column; justify-content: space-between; gap: 16px;
  transition: transform 0.2s, box-shadow 0.2s;
}
.service-card:hover { transform: translateY(-4px); box-shadow: 0 8px 24px rgba(0,0,0,0.06); }
.card-icon-box {
  width: 54px; height: 54px; border-radius: 50%; background: #FAF9F6;
  border: 1px solid rgba(0,0,0,0.08); display: flex; align-items: center; justify-content: center;
  padding: 10px; margin-bottom: 14px;
}
.card-title { font-size: 17px; font-weight: 800; text-transform: uppercase; margin-bottom: 6px; }
.card-subtitle { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: #854d0e; margin-bottom: 10px; }
.card-desc { font-size: 13px; color: #555555; font-weight: 300; line-height: 1.6; }

/* Process Section */
.process-section { padding: 40px 0; }
.process-box {
  background: #ffffff; border: 1px solid rgba(0,0,0,0.08); border-radius: 8px;
  padding: 48px;
}
.process-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: center; }
.process-img-wrap { border-radius: 6px; overflow: hidden; border: 1px solid rgba(0,0,0,0.08); padding: 16px; background: #FAF9F6; }
.tab-buttons { display: flex; border-bottom: 2px solid rgba(0,0,0,0.06); gap: 16px; margin-bottom: 24px; }
.tab-btn {
  padding: 10px 16px; font-size: 12px; font-weight: 700; text-transform: uppercase;
  border: none; background: transparent; cursor: pointer; border-bottom: 2px solid transparent; margin-bottom: -2px;
}
.tab-btn.active { border-color: #111111; color: #111111; }
.tab-content { background: #FAF9F6; border: 1px solid rgba(0,0,0,0.06); border-radius: 6px; padding: 24px; }

/* Execution & Reality */
.execution-section { padding: 40px 0; }
.execution-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 32px; }
.execution-card {
  background: #ffffff; border: 1px solid rgba(0,0,0,0.08); border-radius: 8px; overflow: hidden;
}
.execution-card-img { position: relative; aspect-ratio: 16/10; }
.execution-card-img img { width: 100%; height: 100%; object-fit: cover; }
.execution-role {
  position: absolute; top: 16px; left: 16px; background: rgba(0,0,0,0.8); color: #fff;
  font-size: 10px; font-weight: 700; text-transform: uppercase; padding: 4px 10px; border-radius: 4px;
}
.execution-card-body { padding: 28px; }

/* Gallery Section */
.gallery-section { padding: 40px 0; }
.gallery-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 18px; }
.gallery-card {
  position: relative; border-radius: 6px; overflow: hidden; border: 1px solid rgba(0,0,0,0.08);
  aspect-ratio: 16/10; cursor: pointer; background: #FAF9F6;
}
.gallery-card img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s; }
.gallery-card:hover img { transform: scale(1.06); }
.gallery-tag {
  position: absolute; bottom: 12px; left: 12px; background: rgba(0,0,0,0.75); color: #fff;
  font-size: 9px; font-weight: 700; text-transform: uppercase; padding: 3px 8px; border-radius: 3px;
}

/* Lightbox Modal */
.lightbox-modal {
  display: none; position: fixed; inset: 0; z-index: 100; background: rgba(0,0,0,0.9);
  align-items: center; justify-content: center; padding: 20px; backdrop-filter: blur(6px);
}
.lightbox-modal.active { display: flex; }
.lightbox-modal img { max-width: 90vw; max-height: 85vh; object-fit: contain; border-radius: 6px; box-shadow: 0 20px 50px rgba(0,0,0,0.5); }
.lightbox-close { position: absolute; top: 24px; right: 32px; font-size: 36px; color: #fff; cursor: pointer; line-height: 1; }

/* Contact Section */
.contact-section { padding: 40px 0 80px; }
.contact-card {
  background: #ffffff; border: 1px solid rgba(0,0,0,0.08); border-radius: 8px;
  padding: 48px; display: grid; grid-template-columns: 1.1fr 1fr; gap: 48px;
}
.contact-info { display: flex; flex-direction: column; gap: 24px; }
.phones-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.phone-item {
  background: #FAF9F6; border: 1px solid rgba(0,0,0,0.08); border-radius: 6px; padding: 16px;
  display: flex; flex-direction: column; gap: 4px;
}
.phone-label { font-size: 10px; font-weight: 700; text-transform: uppercase; color: #777; }
.phone-val { font-size: 14px; font-weight: 700; color: #111; }
.addr-card {
  background: #FAF9F6; border: 1px solid rgba(0,0,0,0.06); border-radius: 6px; padding: 16px;
  font-size: 13px; line-height: 1.5; color: #444;
}
.addr-title { font-weight: 700; text-transform: uppercase; color: #111; margin-bottom: 4px; }
.form-box {
  background: #FAF9F6; border: 1px solid rgba(0,0,0,0.08); border-radius: 6px; padding: 32px;
}
.form-group { margin-bottom: 16px; }
.form-group label { display: block; font-size: 11px; font-weight: 700; text-transform: uppercase; color: #555; margin-bottom: 6px; }
.form-control {
  width: 100%; padding: 12px 14px; font-size: 13px; border: 1px solid rgba(0,0,0,0.15);
  border-radius: 4px; background: #fff; font-family: inherit;
}
.form-control:focus { outline: none; border-color: #111111; }
.btn-submit {
  width: 100%; padding: 14px; background: #111111; color: #fff; font-size: 12px;
  font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; border: none; border-radius: 4px; cursor: pointer;
}

/* Footer */
footer.site-footer {
  background: #111111; color: #ffffff; padding: 60px 0 30px;
}
.footer-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 32px; margin-bottom: 40px; }
.footer-col h4 { font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 16px; color: #a3a3a3; }
.footer-col ul { list-style: none; display: flex; flex-direction: column; gap: 8px; }
.footer-col a { font-size: 12px; color: #cccccc; transition: color 0.2s; }
.footer-col a:hover { color: #ffffff; }
.footer-bottom { border-top: 1px solid rgba(255,255,255,0.1); padding-top: 24px; text-align: center; font-size: 11px; color: #777; }

/* Responsive */
@media (max-width: 991px) {
  .hero-card, .concept-card, .process-grid, .contact-card, .execution-grid { grid-template-columns: 1fr; gap: 32px; }
  h1.hero-title { font-size: 28px; }
  .mobile-toggle { display: block; }
  .nav-links {
    display: none; flex-direction: column; position: absolute; top: 80px; left: 0; right: 0;
    background: #ffffff; padding: 24px; border-bottom: 1px solid rgba(0,0,0,0.1);
    box-shadow: 0 10px 30px rgba(0,0,0,0.08); gap: 16px;
  }
  .nav-links.active { display: flex; }
  .phones-grid { grid-template-columns: 1fr; }
}
`;
}

// Navigation Bar markup
function getNavMarkup() {
  return `
<header class="site-nav">
  <div class="container nav-inner">
    <a href="/" class="brand-logo">
      <span>4 LOTUS INTERIOR</span>
      <span class="brand-badge">DELHI-NCR</span>
    </a>
    <button class="mobile-toggle" aria-label="Toggle Navigation" onclick="document.querySelector('.nav-links').classList.toggle('active')">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
    </button>
    <ul class="nav-links">
      <li><a href="/interior-designers.html">Specialist</a></li>
      <li><a href="/residential-interior.html">Residential</a></li>
      <li><a href="/commercial-interior.html">Commercial</a></li>
      <li><a href="/interior-designers-decorators-in-delhi.html">Regions</a></li>
      <li><a href="/interior-designers-dwarka.html">Availability</a></li>
      <li><a href="/contact-us.html">Contact</a></li>
      <li><a href="/sitemap.html">Source</a></li>
      <li><a href="tel:+919810698082" class="cta-btn">+91 98106 98082</a></li>
      <li><a href="tel:+919811363064" class="cta-btn cta-btn-outline">+91 98113 63064</a></li>
    </ul>
  </div>
</header>
`;
}

// Footer markup
function getFooterMarkup() {
  return `
<footer class="site-footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-col">
        <h4>4 Lotus Interior</h4>
        <p style="font-size: 12px; color: #999; line-height: 1.6;">
          Leading luxury architectural, interior design and turnkey renovation firm delivering exceptional spaces across Delhi-NCR.
        </p>
      </div>
      <div class="footer-col">
        <h4>Specialist</h4>
        <ul>
          <li><a href="/interior-designers.html">Interior Design & Decoration</a></li>
          <li><a href="/bathroom-remodelers.html">Bathroom Renovation</a></li>
          <li><a href="/kitchen-remodelers.html">Kitchen Remodeling</a></li>
          <li><a href="/furniture-manufacturer.html">Furniture Manufacturing</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Commercial</h4>
        <ul>
          <li><a href="/office-interior.html">Office Interior</a></li>
          <li><a href="/restaurant-interior.html">Restaurant Interior</a></li>
          <li><a href="/banquet-hall-interior.html">Banquet Hall Interior</a></li>
          <li><a href="/school-interior.html">Play School Interior</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Contact</h4>
        <ul>
          <li><a href="tel:+919810698082">+91 98106 98082</a></li>
          <li><a href="tel:+919811363064">+91 98113 63064</a></li>
          <li><a href="mailto:contact@4lotusinterior.in">contact@4lotusinterior.in</a></li>
          <li><a href="/contact-us.html">Studio Coordinates</a></li>
          <li><a href="/sitemap.html">Sitemap Directory</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      &copy; 2026 4 Lotus Interior. All Rights Reserved. Turnkey Architecture & Interior Renovation Delhi-NCR.
    </div>
  </div>
</footer>

<!-- Lightbox Modal -->
<div id="lightbox-modal" class="lightbox-modal" onclick="closeLightbox()">
  <span class="lightbox-close">&times;</span>
  <img id="lightbox-img" src="" alt="Enlarged view" onclick="event.stopPropagation()">
</div>

<script>
function switchTab(btn, tabId) {
  var parent = btn.closest('.process-box');
  var btns = parent.querySelectorAll('.tab-btn');
  var contents = parent.querySelectorAll('.tab-content');
  btns.forEach(function(b) { b.classList.remove('active'); });
  contents.forEach(function(c) { c.style.display = 'none'; });
  btn.classList.add('active');
  var target = document.getElementById(tabId);
  if (target) target.style.display = 'block';
}

function openLightbox(src) {
  var modal = document.getElementById('lightbox-modal');
  var img = document.getElementById('lightbox-img');
  img.src = src;
  modal.classList.add('active');
}

function closeLightbox() {
  document.getElementById('lightbox-modal').classList.remove('active');
}
</script>
`;
}

// Normalizer to align with React contentLoader
function normalizePageData(raw, slug) {
  const item = JSON.parse(JSON.stringify(raw));

  // 1. Concept normalization
  if (!item.design_concept) {
    const sourceConcept =
      item.bespoke_design ||
      item.exclusive_design ||
      item.inspired_design ||
      item.service_decor ||
      item.modern_solutions ||
      item.complete_solutions ||
      item.we_do ||
      item.decorator_section ||
      item.feature_section;

    if (sourceConcept) {
      item.design_concept = {
        title: sourceConcept.title || "Architectural Design Concept",
        description: sourceConcept.description || "",
        image: sourceConcept.image,
        image_alt: sourceConcept.image_alt || sourceConcept.title,
        links: Array.isArray(sourceConcept.links)
          ? sourceConcept.links.map(l => typeof l === "string" ? l : l.label || l.text || "")
          : [],
      };
    }
  }

  // 2. Turnkey services normalization
  if (!item.turnkey_services) {
    if (item.turnkey_solutions && item.turnkey_solutions.pillars) {
      item.turnkey_services = {
        title: item.turnkey_solutions.title || "Turnkey Interior Solutions",
        subtitle: item.turnkey_solutions.subtitle,
        cards: item.turnkey_solutions.pillars.map(p => ({
          title: p.title,
          subtitle: p.role,
          role: p.role,
          description: p.description,
          icon: p.icon || "/assets/blueprint_sketch.svg",
        })),
      };
    } else if (item.turnkey_home_interior && item.turnkey_home_interior.pillars) {
      item.turnkey_services = {
        title: item.turnkey_home_interior.title || "Turnkey Home Interior",
        subtitle: item.turnkey_home_interior.subtitle,
        cards: item.turnkey_home_interior.pillars.map(p => ({
          title: p.title,
          subtitle: p.role,
          role: p.role,
          description: p.description,
          icon: p.icon || "/assets/blueprint_sketch.svg",
        })),
      };
    } else if (item.complete_solutions && item.complete_solutions.cards) {
      item.turnkey_services = {
        title: item.complete_solutions.title || "Complete Furniture Solutions",
        subtitle: item.complete_solutions.subtitle,
        cards: item.complete_solutions.cards.map(c => ({
          title: c.title,
          subtitle: c.role,
          role: c.role,
          description: c.description,
          image: c.image,
          icon: "/assets/blueprint_sketch.svg",
        })),
      };
    } else if (item.service_pillars && Array.isArray(item.service_pillars)) {
      item.turnkey_services = {
        title: "Service Pillars & Capabilities",
        cards: item.service_pillars.map(p => ({
          title: p.title,
          subtitle: p.role,
          role: p.role,
          description: p.description,
          icon: p.icon || "/assets/blueprint_sketch.svg",
        })),
      };
    } else if (item.core_services && item.core_services.items) {
      item.turnkey_services = {
        title: item.core_services.title || "Core Services",
        subtitle: item.core_services.subtitle,
        cards: item.core_services.items.map(it => ({
          title: it.title,
          description: it.description,
          icon: "/assets/blueprint_sketch.svg",
        })),
      };
    } else if (item.expertise && item.expertise.items) {
      item.turnkey_services = {
        title: item.expertise.title || "Our Expertise",
        subtitle: item.expertise.subtitle,
        cards: item.expertise.items.map(it => ({
          title: it.title,
          description: it.description,
          icon: "/assets/blueprint_sketch.svg",
        })),
      };
    }
  }

  // 3. Process normalization
  if (!item.process) {
    const sourceProcess = item.design_and_make || item.renovation_process;
    if (sourceProcess) {
      item.process = sourceProcess;
    }
  }

  // 4. Quote normalization
  if (!item.quote && item.callout) {
    item.quote = item.callout;
  }

  // 5. Execution cards
  if (!item.execution_cards && item.team_approach) {
    item.execution_cards = item.team_approach;
  }

  return item;
}

// Build standard rich page from authoritative JSON data
function buildStandardPage(rawJson) {
  const data = normalizePageData(rawJson, rawJson.slug);

  const title = data.seo?.title || data.title || `${data.hero?.title || "Luxury Interior"} | 4 Lotus Interior`;
  const metaDesc = data.seo?.meta_description || data.meta?.description || data.hero?.description || "";
  const ogImage = data.seo?.og_image || "/assets/images/index-meta.webp";
  const ogTitle = data.seo?.og_title || title;
  const canonical = data.canonical || data.url || `https://4lotusinterior.in/${data.slug}.html`;

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1">
<title>${escapeHtml(title)}</title>
<meta name="description" content="${escapeHtml(metaDesc)}">
<meta name="robots" content="index, follow">
<link rel="canonical" href="${escapeHtml(canonical)}">
<link rel="shortcut icon" href="/assets/images/logo-128x128.png" type="image/x-icon">

<!-- Open Graph -->
<meta property="og:card" content="summary_large_image">
<meta property="og:title" content="${escapeHtml(ogTitle)}">
<meta property="og:description" content="${escapeHtml(metaDesc)}">
<meta property="og:image" content="${escapeHtml(ogImage)}">
<meta property="og:url" content="${escapeHtml(canonical)}">

<!-- Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">

<style>
${getSharedStyles()}
</style>

<!-- Schema.org -->
<script type="application/ld+json">
${generateSchemaJson(data)}
</script>
</head>
<body>

${getNavMarkup()}

<main>
  <!-- Hero Section -->
  <section class="hero-section">
    <div class="container">
      <div class="hero-card">
        <div class="hero-img-box">
          <img src="${escapeHtml(data.hero?.image || ogImage)}" alt="${escapeHtml(data.hero?.image_alt || title)}" loading="eager">
        </div>
        <div class="hero-text">
          <span class="eyebrow">TURNKEY ARCHITECTURAL SERVICE · DELHI-NCR</span>
          <h1 class="hero-title">${escapeHtml(data.hero?.title || title)}</h1>
          ${data.hero?.subtitle ? `<div style="font-size: 13px; font-weight: 700; text-transform: uppercase; color: #854d0e; margin-bottom: 12px;">${escapeHtml(data.hero.subtitle)}</div>` : ""}
          <p class="hero-desc">${escapeHtml(data.hero?.description || metaDesc)}</p>
          <div class="hero-btns">
            <a href="#contact" class="btn-primary">Book Consultation</a>
            <a href="tel:+919810698082" class="btn-outline">+91 98106 98082</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Hero Sub Cards -->
  ${data.hero_sub_cards && data.hero_sub_cards.length > 0 ? `
  <section class="concept-section" style="padding-top: 0;">
    <div class="container">
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px;">
        ${data.hero_sub_cards.map(sc => `
        <div style="background: #FAF9F6; border: 1px solid rgba(0,0,0,0.08); padding: 24px; border-radius: 6px;">
          <h3 style="font-size: 15px; font-weight: bold; text-transform: uppercase; margin-bottom: 8px;">${escapeHtml(sc.title)}</h3>
          <p style="font-size: 13px; color: #555; line-height: 1.6;">${escapeHtml(sc.description)}</p>
        </div>`).join("")}
      </div>
    </div>
  </section>` : ""}

  <!-- Concept Section -->
  ${data.design_concept ? `
  <section class="concept-section">
    <div class="container">
      <div class="concept-card">
        <div>
          <span class="eyebrow">ARCHITECTURAL STRATEGY</span>
          <h2 class="concept-title">${escapeHtml(data.design_concept.title)}</h2>
          <p class="concept-desc">${escapeHtml(data.design_concept.description)}</p>
          ${data.design_concept.links && data.design_concept.links.length > 0 ? `
          <div class="tags-list">
            ${data.design_concept.links.map(l => `<span class="tag-item">${escapeHtml(typeof l === "string" ? l : l.label || "")}</span>`).join("\n            ")}
          </div>` : ""}
        </div>
        ${data.design_concept.image ? `
        <div class="hero-img-box" style="aspect-ratio: 4/3;">
          <img src="${escapeHtml(data.design_concept.image)}" alt="${escapeHtml(data.design_concept.image_alt || data.design_concept.title)}" loading="lazy">
        </div>` : ""}
      </div>
    </div>
  </section>` : ""}

  <!-- Advantages (Bathroom Remodelers) -->
  ${data.advantages ? `
  <section class="services-section">
    <div class="container">
      <div class="concept-card">
        ${data.advantages.image ? `
        <div class="hero-img-box" style="aspect-ratio: 4/3;">
          <img src="${escapeHtml(data.advantages.image)}" alt="${escapeHtml(data.advantages.image_alt || data.advantages.title)}" loading="lazy">
        </div>` : ""}
        <div>
          <span class="eyebrow">PROVEN ADVANTAGE</span>
          <h2 class="concept-title">${escapeHtml(data.advantages.title)}</h2>
          ${data.advantages.subtitle ? `<p style="font-size: 14px; color: #666; margin-bottom: 16px;">${escapeHtml(data.advantages.subtitle)}</p>` : ""}
          ${data.advantages.items ? `
          <div style="display: flex; flex-direction: column; gap: 14px;">
            ${data.advantages.items.map(adv => `
            <div style="background: #FAF9F6; border: 1px solid rgba(0,0,0,0.06); padding: 16px; border-radius: 6px;">
              <h3 style="font-size: 14px; font-weight: bold; text-transform: uppercase; margin-bottom: 4px;">${escapeHtml(adv.title)}</h3>
              <p style="font-size: 13px; color: #555;">${escapeHtml(adv.description)}</p>
            </div>`).join("")}
          </div>` : ""}
        </div>
      </div>
    </div>
  </section>` : ""}

  <!-- Expertise (Bathroom & Furniture) -->
  ${data.expertise ? `
  <section class="services-section">
    <div class="container">
      <div class="concept-card">
        <div>
          <span class="eyebrow">SPECIALIZED CRAFTSMANSHIP</span>
          <h2 class="concept-title">${escapeHtml(data.expertise.title)}</h2>
          ${data.expertise.subtitle ? `<p style="font-size: 14px; color: #666; margin-bottom: 16px;">${escapeHtml(data.expertise.subtitle)}</p>` : ""}
          ${data.expertise.items ? `
          <div style="display: flex; flex-direction: column; gap: 14px;">
            ${data.expertise.items.map((exp, idx) => `
            <div style="background: #FAF9F6; border: 1px solid rgba(0,0,0,0.06); padding: 16px; border-radius: 6px;">
              <span style="font-size: 11px; font-weight: bold; color: #854d0e; text-transform: uppercase;">0${exp.number || idx + 1}</span>
              <h3 style="font-size: 14px; font-weight: bold; text-transform: uppercase; margin: 4px 0;">${escapeHtml(exp.title)}</h3>
              <p style="font-size: 13px; color: #555;">${escapeHtml(exp.description)}</p>
            </div>`).join("")}
          </div>` : ""}
        </div>
        ${data.expertise.image ? `
        <div class="hero-img-box" style="aspect-ratio: 4/3;">
          <img src="${escapeHtml(data.expertise.image)}" alt="${escapeHtml(data.expertise.image_alt || data.expertise.title)}" loading="lazy">
        </div>` : ""}
      </div>
    </div>
  </section>` : ""}

  <!-- We Do (Kitchen Remodelers) -->
  ${data.we_do ? `
  <section class="services-section">
    <div class="container">
      <div class="concept-card">
        <div>
          <span class="eyebrow">WHAT WE DO</span>
          <h2 class="concept-title">${escapeHtml(data.we_do.title)}</h2>
          ${data.we_do.subtitle ? `<p style="font-size: 14px; color: #666; margin-bottom: 16px;">${escapeHtml(data.we_do.subtitle)}</p>` : ""}
          ${data.we_do.items ? `
          <div style="display: flex; flex-direction: column; gap: 14px;">
            ${data.we_do.items.map((it, idx) => `
            <div style="background: #FAF9F6; border: 1px solid rgba(0,0,0,0.06); padding: 16px; border-radius: 6px;">
              <span style="font-size: 11px; font-weight: bold; color: #854d0e; text-transform: uppercase;">0${it.number || idx + 1}</span>
              <h3 style="font-size: 14px; font-weight: bold; text-transform: uppercase; margin: 4px 0;">${escapeHtml(it.title)}</h3>
              <p style="font-size: 13px; color: #555;">${escapeHtml(it.description)}</p>
            </div>`).join("")}
          </div>` : ""}
        </div>
        ${data.we_do.image ? `
        <div class="hero-img-box" style="aspect-ratio: 4/3;">
          <img src="${escapeHtml(data.we_do.image)}" alt="${escapeHtml(data.we_do.image_alt || data.we_do.title)}" loading="lazy">
        </div>` : ""}
      </div>
    </div>
  </section>` : ""}

  <!-- Kitchen Reconstruction -->
  ${data.reconstruction ? `
  <section class="services-section">
    <div class="container">
      <div class="section-header" style="text-align: left;">
        <span class="eyebrow">RECONSTRUCTION & REMODELING</span>
        <h2 class="section-title">${escapeHtml(data.reconstruction.title)}</h2>
        ${data.reconstruction.subtitle ? `<p class="section-subtitle">${escapeHtml(data.reconstruction.subtitle)}</p>` : ""}
      </div>
      ${data.reconstruction.items ? `
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px;">
        ${data.reconstruction.items.map(rc => `
        <div style="background: #ffffff; border: 1px solid rgba(0,0,0,0.08); padding: 24px; border-radius: 8px;">
          <h3 style="font-size: 15px; font-weight: bold; text-transform: uppercase; margin-bottom: 8px;">${escapeHtml(rc.title)}</h3>
          <p style="font-size: 13px; color: #555; line-height: 1.6;">${escapeHtml(rc.description)}</p>
        </div>`).join("")}
      </div>` : ""}
    </div>
  </section>` : ""}

  <!-- Kitchen Types Timeline -->
  ${data.kitchen_types_timeline ? `
  <section class="services-section">
    <div class="container">
      <div class="section-header">
        <span class="eyebrow">MODULAR SPECS</span>
        <h2 class="section-title">${escapeHtml(data.kitchen_types_timeline.title)}</h2>
        ${data.kitchen_types_timeline.subtitle ? `<p class="section-subtitle">${escapeHtml(data.kitchen_types_timeline.subtitle)}</p>` : ""}
      </div>
      ${data.kitchen_types_timeline.items ? `
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 20px;">
        ${data.kitchen_types_timeline.items.map((kt, idx) => `
        <div style="background: #ffffff; border: 1px solid rgba(0,0,0,0.08); padding: 24px; border-radius: 8px;">
          <span style="font-size: 10px; font-weight: bold; color: #854d0e; text-transform: uppercase;">Type 0${idx + 1}</span>
          <h3 style="font-size: 16px; font-weight: bold; text-transform: uppercase; margin: 6px 0 8px;">${escapeHtml(kt.title)}</h3>
          <p style="font-size: 13px; color: #555; line-height: 1.6;">${escapeHtml(kt.description)}</p>
        </div>`).join("")}
      </div>` : ""}
    </div>
  </section>` : ""}

  <!-- Partner Banner -->
  ${data.partner_banner ? `
  <section class="quote-section">
    <div class="container">
      <div class="quote-box">
        <h2 style="font-size: 22px; font-weight: 800; text-transform: uppercase; margin-bottom: 12px;">${escapeHtml(data.partner_banner.title)}</h2>
        <p style="font-size: 14px; font-weight: 300; line-height: 1.7; color: #ddd;">${escapeHtml(data.partner_banner.description)}</p>
      </div>
    </div>
  </section>` : ""}

  <!-- Styles Slider -->
  ${data.styles_slider && data.styles_slider.length > 0 ? `
  <section class="services-section">
    <div class="container">
      <div class="section-header">
        <span class="eyebrow">DESIGN VOCABULARY</span>
        <h2 class="section-title">Furniture Styles & Aesthetics</h2>
      </div>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px;">
        ${data.styles_slider.map(st => `
        <div style="background: #fff; border: 1px solid rgba(0,0,0,0.08); border-radius: 8px; overflow: hidden;">
          <div style="aspect-ratio: 16/10; overflow: hidden;">
            <img src="${escapeHtml(st.image)}" alt="${escapeHtml(st.image_alt || st.title)}" style="width: 100%; height: 100%; object-fit: cover;" loading="lazy">
          </div>
          <div style="padding: 24px;">
            <h3 style="font-size: 16px; font-weight: bold; text-transform: uppercase; margin-bottom: 6px;">${escapeHtml(st.title)}</h3>
            ${st.subtitle ? `<p style="font-size: 13px; color: #666;">${escapeHtml(st.subtitle)}</p>` : ""}
          </div>
        </div>`).join("")}
      </div>
    </div>
  </section>` : ""}

  <!-- Typologies (Commercial Interior) -->
  ${data.typologies && data.typologies.length > 0 ? `
  <section class="services-section">
    <div class="container">
      <div class="section-header">
        <span class="eyebrow">COMMERCIAL DOMAINS</span>
        <h2 class="section-title">Commercial Typologies & Sectors</h2>
        <p class="section-subtitle">Specialized commercial architecture and turnkey fitouts tailored for operational efficiency.</p>
      </div>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px;">
        ${data.typologies.map(t => `
        <div style="background: #fff; border: 1px solid rgba(0,0,0,0.08); border-radius: 8px; overflow: hidden; display: flex; flex-direction: column;">
          ${t.image ? `<div style="aspect-ratio: 16/10; overflow: hidden;"><img src="${escapeHtml(t.image)}" alt="${escapeHtml(t.title)}" style="width: 100%; height: 100%; object-fit: cover;" loading="lazy"></div>` : ""}
          <div style="padding: 24px; flex: 1;">
            <h3 style="font-size: 16px; font-weight: bold; text-transform: uppercase; margin-bottom: 4px;">${escapeHtml(t.title)}</h3>
            ${t.subtitle ? `<div style="font-size: 11px; font-weight: bold; color: #854d0e; text-transform: uppercase; margin-bottom: 8px;">${escapeHtml(t.subtitle)}</div>` : ""}
            <p style="font-size: 13px; color: #555; line-height: 1.6;">${escapeHtml(t.description)}</p>
          </div>
        </div>`).join("")}
      </div>
    </div>
  </section>` : ""}

  <!-- Specialized Services (Commercial Interior) -->
  ${data.specialized_services && data.specialized_services.length > 0 ? `
  <section class="services-section">
    <div class="container">
      <div class="section-header" style="text-align: left;">
        <span class="eyebrow">SPECIALIZED SCOPE</span>
        <h2 class="section-title">Specialized Commercial Services</h2>
      </div>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px;">
        ${data.specialized_services.map((ss, idx) => `
        <div style="background: #FAF9F6; border: 1px solid rgba(0,0,0,0.06); padding: 24px; border-radius: 6px;">
          <span style="font-size: 11px; font-weight: bold; color: #854d0e; text-transform: uppercase;">Phase 0${ss.step || idx + 1}</span>
          <h3 style="font-size: 15px; font-weight: bold; text-transform: uppercase; margin: 6px 0 8px;">${escapeHtml(ss.title)}</h3>
          <p style="font-size: 13px; color: #555; line-height: 1.6;">${escapeHtml(ss.description)}</p>
        </div>`).join("")}
      </div>
    </div>
  </section>` : ""}

  <!-- Scope (Commercial Interior) -->
  ${data.scope ? `
  <section class="concept-section">
    <div class="container">
      <div style="background: #fff; border: 1px solid rgba(0,0,0,0.08); border-radius: 8px; padding: 40px;">
        <span class="eyebrow">COMMERCIAL SCOPE</span>
        <h2 class="section-title" style="text-align: left; margin-bottom: 12px;">Planning & Execution Scope</h2>
        ${data.scope.statement ? `<p style="font-size: 14px; color: #555; line-height: 1.7; margin-bottom: 24px;">${escapeHtml(data.scope.statement)}</p>` : ""}
        ${data.scope.pillars ? `
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 20px;">
          ${data.scope.pillars.map(p => `
          <div style="background: #FAF9F6; border: 1px solid rgba(0,0,0,0.06); padding: 20px; border-radius: 6px;">
            <h3 style="font-size: 14px; font-weight: bold; text-transform: uppercase; margin-bottom: 6px;">${escapeHtml(p.title)}</h3>
            <p style="font-size: 13px; color: #555; line-height: 1.6;">${escapeHtml(p.description)}</p>
          </div>`).join("")}
        </div>` : ""}
      </div>
    </div>
  </section>` : ""}

  <!-- Residential Typologies (Residential Interior) -->
  ${data.residential_categories && data.residential_categories.length > 0 ? `
  <section class="services-section">
    <div class="container">
      <div class="section-header">
        <span class="eyebrow">RESIDENTIAL DOMAINS</span>
        <h2 class="section-title">Residential Typologies</h2>
      </div>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 24px;">
        ${data.residential_categories.map(rc => `
        <div style="background: #fff; border: 1px solid rgba(0,0,0,0.08); border-radius: 8px; overflow: hidden; display: flex; flex-direction: column;">
          ${rc.image ? `<div style="aspect-ratio: 16/10; overflow: hidden;"><img src="${escapeHtml(rc.image)}" alt="${escapeHtml(rc.image_alt || rc.name)}" style="width: 100%; height: 100%; object-fit: cover;" loading="lazy"></div>` : ""}
          <div style="padding: 24px; flex: 1;">
            <h3 style="font-size: 16px; font-weight: bold; text-transform: uppercase; margin-bottom: 4px;">${escapeHtml(rc.name)}</h3>
            ${rc.tagline ? `<div style="font-size: 11px; font-weight: bold; color: #854d0e; text-transform: uppercase; margin-bottom: 8px;">${escapeHtml(rc.tagline)}</div>` : ""}
            <p style="font-size: 13px; color: #555; line-height: 1.6;">${escapeHtml(rc.description)}</p>
          </div>
        </div>`).join("")}
      </div>
    </div>
  </section>` : ""}

  <!-- Four Steps (Residential Interior) -->
  ${data.four_steps ? `
  <section class="services-section">
    <div class="container">
      <div class="section-header" style="text-align: left;">
        <span class="eyebrow">METHODICAL EXECUTION</span>
        <h2 class="section-title">${escapeHtml(data.four_steps.title)}</h2>
        ${data.four_steps.subtitle ? `<p class="section-subtitle">${escapeHtml(data.four_steps.subtitle)}</p>` : ""}
      </div>
      ${data.four_steps.steps ? `
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 20px;">
        ${data.four_steps.steps.map((st, idx) => `
        <div style="background: #FAF9F6; border: 1px solid rgba(0,0,0,0.06); padding: 24px; border-radius: 6px;">
          <span style="font-size: 11px; font-weight: bold; color: #854d0e; text-transform: uppercase;">Step 0${st.step || idx + 1}</span>
          <h3 style="font-size: 15px; font-weight: bold; text-transform: uppercase; margin: 6px 0 8px;">${escapeHtml(st.title)}</h3>
          <p style="font-size: 13px; color: #555; line-height: 1.6;">${escapeHtml(st.description)}</p>
        </div>`).join("")}
      </div>` : ""}
    </div>
  </section>` : ""}

  <!-- Service Pillars (Regional Hubs) -->
  ${data.service_pillars && Array.isArray(data.service_pillars) ? `
  <section class="services-section">
    <div class="container">
      <div class="section-header">
        <span class="eyebrow">REGIONAL CAPABILITIES</span>
        <h2 class="section-title">Turnkey Service Pillars</h2>
      </div>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px;">
        ${data.service_pillars.map(sp => `
        <div style="background: #ffffff; border: 1px solid rgba(0,0,0,0.08); padding: 28px; border-radius: 8px;">
          <h3 style="font-size: 16px; font-weight: bold; text-transform: uppercase; margin-bottom: 4px;">${escapeHtml(sp.title)}</h3>
          ${sp.role ? `<div style="font-size: 11px; font-weight: bold; color: #854d0e; text-transform: uppercase; margin-bottom: 8px;">${escapeHtml(sp.role)}</div>` : ""}
          <p style="font-size: 13px; color: #555; line-height: 1.6;">${escapeHtml(sp.description)}</p>
        </div>`).join("")}
      </div>
    </div>
  </section>` : ""}

  <!-- Expertise Breakdown (Regional Hubs) -->
  ${data.expertise_breakdown ? `
  <section class="concept-section">
    <div class="container">
      <div style="background: #fff; border: 1px solid rgba(0,0,0,0.08); border-radius: 8px; padding: 40px;">
        <span class="eyebrow">DOMAIN EXPERTISE</span>
        <h2 class="section-title" style="text-align: left; margin-bottom: 24px;">Comprehensive Interior &amp; Decorator Scope</h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px;">
          ${data.expertise_breakdown.residential ? `
          <div style="background: #FAF9F6; border: 1px solid rgba(0,0,0,0.06); padding: 24px; border-radius: 6px;">
            <h3 style="font-size: 15px; font-weight: bold; text-transform: uppercase; margin-bottom: 8px;">Residential Expertise</h3>
            <p style="font-size: 13px; color: #555; line-height: 1.7;">${escapeHtml(String(data.expertise_breakdown.residential).replace(/^Residential Expertise:\s*/i, ""))}</p>
          </div>` : ""}
          ${data.expertise_breakdown.commercial ? `
          <div style="background: #FAF9F6; border: 1px solid rgba(0,0,0,0.06); padding: 24px; border-radius: 6px;">
            <h3 style="font-size: 15px; font-weight: bold; text-transform: uppercase; margin-bottom: 8px;">Commercial Expertise</h3>
            <p style="font-size: 13px; color: #555; line-height: 1.7;">${escapeHtml(String(data.expertise_breakdown.commercial).replace(/^Commercial Expertise:\s*/i, ""))}</p>
          </div>` : ""}
        </div>
      </div>
    </div>
  </section>` : ""}

  <!-- Specialties Carousel (Regional Hubs) -->
  ${data.specialties_carousel && data.specialties_carousel.length > 0 ? `
  <section class="services-section">
    <div class="container">
      <div class="section-header">
        <span class="eyebrow">REGIONAL SPECIALTIES</span>
        <h2 class="section-title">Specialized Spatial Capabilities</h2>
      </div>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 24px;">
        ${data.specialties_carousel.map(sc => `
        <div style="background: #fff; border: 1px solid rgba(0,0,0,0.08); border-radius: 8px; overflow: hidden;">
          ${sc.image ? `<div style="aspect-ratio: 16/10; overflow: hidden;"><img src="${escapeHtml(sc.image)}" alt="${escapeHtml(sc.title)}" style="width: 100%; height: 100%; object-fit: cover;" loading="lazy"></div>` : ""}
          <div style="padding: 20px;">
            <h3 style="font-size: 15px; font-weight: bold; text-transform: uppercase; margin-bottom: 4px;">${escapeHtml(sc.title)}</h3>
            ${sc.subtitle ? `<p style="font-size: 12px; color: #666;">${escapeHtml(sc.subtitle)}</p>` : ""}
          </div>
        </div>`).join("")}
      </div>
    </div>
  </section>` : ""}

  <!-- Luxury Style -->
  ${data.luxury_style ? `
  <section class="concept-section">
    <div class="container">
      <div style="background: #fff; border: 1px solid rgba(0,0,0,0.08); border-radius: 8px; padding: 40px;">
        <span class="eyebrow">HIGH-END DESIGN</span>
        <h2 class="section-title" style="text-align: left; margin-bottom: 12px;">${escapeHtml(data.luxury_style.title)}</h2>
        ${data.luxury_style.description ? `<p style="font-size: 14px; color: #555; line-height: 1.7; margin-bottom: 24px;">${escapeHtml(data.luxury_style.description)}</p>` : ""}
        ${data.luxury_style.cards ? `
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px;">
          ${data.luxury_style.cards.map(c => `
          <div style="border-radius: 8px; overflow: hidden; border: 1px solid rgba(0,0,0,0.1); position: relative; aspect-ratio: 16/10;">
            <img src="${escapeHtml(c.image)}" alt="${escapeHtml(c.alt || c.title)}" style="width: 100%; height: 100%; object-fit: cover;" loading="lazy">
            <div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.7), transparent); display: flex; align-items: flex-end; padding: 24px;">
              <h3 style="color: #fff; font-size: 18px; font-weight: bold; text-transform: uppercase;">${escapeHtml(c.title)}</h3>
            </div>
          </div>`).join("")}
        </div>` : ""}
      </div>
    </div>
  </section>` : ""}

  <!-- Project Gallery Section (Interior Designers) -->
  ${data.project_gallery_section ? `
  <section class="services-section">
    <div class="container">
      <div class="section-header">
        <span class="eyebrow">PROJECT SHOWCASE</span>
        <h2 class="section-title">${escapeHtml(data.project_gallery_section.title)}</h2>
        ${data.project_gallery_section.subtitle ? `<p class="section-subtitle">${escapeHtml(data.project_gallery_section.subtitle)}</p>` : ""}
      </div>
      ${data.project_gallery_section.cards ? `
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 24px;">
        ${data.project_gallery_section.cards.map(c => `
        <div style="background: #fff; border: 1px solid rgba(0,0,0,0.08); border-radius: 8px; overflow: hidden;">
          ${c.image ? `<div style="aspect-ratio: 16/10; overflow: hidden;"><img src="${escapeHtml(c.image)}" alt="${escapeHtml(c.alt || c.title)}" style="width: 100%; height: 100%; object-fit: cover;" loading="lazy"></div>` : ""}
          <div style="padding: 20px;">
            <h3 style="font-size: 15px; font-weight: bold; text-transform: uppercase;">${escapeHtml(c.title)}</h3>
          </div>
        </div>`).join("")}
      </div>` : ""}
    </div>
  </section>` : ""}

  <!-- Interior Philosophy -->
  ${data.interior_philosophy ? `
  <section class="concept-section">
    <div class="container">
      <div style="background: #fff; border: 1px solid rgba(0,0,0,0.08); border-radius: 8px; padding: 40px;">
        <span class="eyebrow">STRATEGIC PHILOSOPHY</span>
        ${data.interior_philosophy.quote ? `<blockquote style="font-size: 16px; font-style: italic; color: #444; line-height: 1.7; border-left: 3px solid #854d0e; padding-left: 16px; margin-bottom: 24px;">&ldquo;${escapeHtml(data.interior_philosophy.quote)}&rdquo;</blockquote>` : ""}
        ${data.interior_philosophy.pillars ? `
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 20px;">
          ${data.interior_philosophy.pillars.map(p => `
          <div style="background: #FAF9F6; border: 1px solid rgba(0,0,0,0.06); padding: 20px; border-radius: 6px;">
            <h3 style="font-size: 14px; font-weight: bold; text-transform: uppercase; margin-bottom: 6px;">${escapeHtml(p.term || p.title)}</h3>
            <p style="font-size: 13px; color: #555; line-height: 1.6;">${escapeHtml(p.description)}</p>
          </div>`).join("")}
        </div>` : ""}
      </div>
    </div>
  </section>` : ""}

  <!-- Showcase Duo -->
  ${data.showcase_duo && data.showcase_duo.length > 0 ? `
  <section class="concept-section">
    <div class="container">
      <div class="section-header">
        <span class="eyebrow">SPATIAL PORTFOLIOS</span>
        <h2 class="section-title">Residential &amp; Commercial Design</h2>
      </div>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px;">
        ${data.showcase_duo.map(sd => `
        <div style="border-radius: 8px; overflow: hidden; border: 1px solid rgba(0,0,0,0.08); position: relative; aspect-ratio: 16/10;">
          <img src="${escapeHtml(sd.image)}" alt="${escapeHtml(sd.alt || sd.title)}" style="width: 100%; height: 100%; object-fit: cover;" loading="lazy">
          <div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.8), transparent); display: flex; align-items: flex-end; padding: 24px;">
            <h3 style="color: #fff; font-size: 20px; font-weight: bold; text-transform: uppercase;">${escapeHtml(sd.title)}</h3>
          </div>
        </div>`).join("")}
      </div>
    </div>
  </section>` : ""}

  <!-- Accordion Sections -->
  ${data.accordion_sections && data.accordion_sections.length > 0 ? `
  <section class="concept-section">
    <div class="container">
      <div style="background: #fff; border: 1px solid rgba(0,0,0,0.08); border-radius: 8px; padding: 32px;">
        <div class="section-header" style="text-align: left; margin-bottom: 24px;">
          <span class="eyebrow">DETAILED CAPABILITIES</span>
          <h2 class="section-title">Scope &amp; Specifications</h2>
        </div>
        <div style="display: flex; flex-direction: column; gap: 16px;">
          ${data.accordion_sections.map((acc, idx) => `
          <div style="border: 1px solid rgba(0,0,0,0.08); border-radius: 6px; overflow: hidden;">
            <div style="background: #FAF9F6; padding: 18px 24px; font-weight: bold; text-transform: uppercase; font-size: 15px;">${escapeHtml(acc.title)}</div>
            <div style="padding: 20px 24px; font-size: 13px; color: #444; line-height: 1.7; border-top: 1px solid rgba(0,0,0,0.06);">${escapeHtml(acc.content)}</div>
          </div>`).join("")}
        </div>
      </div>
    </div>
  </section>` : ""}

  <!-- Flip Cards -->
  ${data.flip_cards && data.flip_cards.cards ? `
  <section class="services-section">
    <div class="container">
      <div class="section-header">
        <span class="eyebrow">CAPABILITY SPECTRUM</span>
        <h2 class="section-title">${escapeHtml(data.flip_cards.title)}</h2>
      </div>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 24px;">
        ${data.flip_cards.cards.map(fc => `
        <div class="service-card" style="padding: 0; overflow: hidden;">
          ${fc.image ? `<img src="${escapeHtml(fc.image)}" alt="${escapeHtml(fc.title)}" style="width: 100%; aspect-ratio: 4/3; object-fit: cover;" loading="lazy">` : ""}
          <div style="padding: 24px;">
            <h3 class="card-title">${escapeHtml(fc.title)}</h3>
            <p class="card-desc">${escapeHtml(fc.description)}</p>
          </div>
        </div>`).join("")}
      </div>
    </div>
  </section>` : ""}

  <!-- Core Services -->
  ${data.core_services ? `
  <section class="services-section">
    <div class="container">
      <div class="section-header">
        <span class="eyebrow">METHODICAL PROCESS &amp; EXPERTISE</span>
        <h2 class="section-title">${escapeHtml(data.core_services.title || "Our Design Philosophy &amp; Pillars")}</h2>
      </div>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 20px;">
        ${(Array.isArray(data.core_services) ? data.core_services : data.core_services.items || []).map((cs, idx) => `
        <div style="background: #FAF9F6; border: 1px solid rgba(0,0,0,0.06); padding: 24px; border-radius: 6px;">
          <span style="font-size: 11px; font-weight: bold; color: #888; text-transform: uppercase;">${cs.number ? `Step 0${cs.number}` : `Pillar 0${idx + 1}`}</span>
          <h3 style="font-size: 16px; font-weight: bold; text-transform: uppercase; margin: 6px 0 8px;">${escapeHtml(cs.title)}</h3>
          <p style="font-size: 13px; color: #555; line-height: 1.6;">${escapeHtml(cs.description)}</p>
        </div>`).join("")}
      </div>
    </div>
  </section>` : ""}

  <!-- Quote Section -->
  ${data.quote ? `
  <section class="quote-section">
    <div class="container">
      <div class="quote-box">
        <blockquote>&ldquo;${escapeHtml(data.quote.replace(/^"|"$/g, ""))}&rdquo;</blockquote>
        <span class="quote-author">4 LOTUS INTERIOR · PRINCIPAL DESIGN STATEMENT</span>
      </div>
    </div>
  </section>` : ""}

  <!-- Callout (When distinct from quote) -->
  ${data.callout && data.callout !== data.quote ? `
  <section class="quote-section">
    <div class="container">
      <div class="quote-box">
        <blockquote>&ldquo;${escapeHtml(data.callout.replace(/^"|"$/g, ""))}&rdquo;</blockquote>
        <span class="quote-author">4 LOTUS INTERIOR · CLIENT COMMITMENT</span>
      </div>
    </div>
  </section>` : ""}

  <!-- Turnkey Services -->
  ${data.turnkey_services ? `
  <section class="services-section">
    <div class="container">
      <div class="section-header">
        <span class="eyebrow">FULL-SPECTRUM EXECUTION</span>
        <h2 class="section-title">${escapeHtml(data.turnkey_services.title || "Turnkey Interior Execution")}</h2>
        ${data.turnkey_services.subtitle ? `<p class="section-subtitle">${escapeHtml(data.turnkey_services.subtitle)}</p>` : ""}
      </div>
      <div class="cards-grid">
        ${(Array.isArray(data.turnkey_services.cards) ? data.turnkey_services.cards : Array.isArray(data.turnkey_services) ? data.turnkey_services : []).map(c => `
        <div class="service-card">
          <div>
            <div class="card-icon-box">
              <img src="${escapeHtml(c.icon || "/assets/images/expert-interior-designers-icon.webp")}" alt="${escapeHtml(c.title)}">
            </div>
            <h3 class="card-title">${escapeHtml(c.title)}</h3>
            ${c.subtitle ? `<div class="card-subtitle">${escapeHtml(c.subtitle)}</div>` : ""}
            <p class="card-desc">${escapeHtml(c.description)}</p>
          </div>
        </div>`).join("")}
      </div>
    </div>
  </section>` : ""}

  <!-- Process Section -->
  ${data.process ? `
  <section class="process-section">
    <div class="container">
      <div class="process-box">
        <div class="section-header" style="text-align: left; margin-bottom: 28px;">
          <span class="eyebrow">PROJECT METHODOLOGY</span>
          <h2 class="section-title">${escapeHtml(data.process.title)}</h2>
          ${data.process.subtitle ? `<p class="section-subtitle">${escapeHtml(data.process.subtitle)}</p>` : ""}
        </div>
        <div class="process-grid">
          <div class="process-img-wrap">
            <img src="${escapeHtml(data.process.image || "/assets/images/turnkey-interior-execution-process.webp")}" alt="${escapeHtml(data.process.image_alt || "Delivery Process")}">
          </div>
          <div>
            <div class="tab-buttons">
              ${data.process.tabs ? data.process.tabs.map((t, idx) => `
              <button class="tab-btn ${idx === 0 ? "active" : ""}" onclick="switchTab(this, 'tab-${idx}')">${escapeHtml(t.label)}</button>`).join("") : ""}
            </div>
            ${data.process.tabs ? data.process.tabs.map((t, idx) => `
            <div id="tab-${idx}" class="tab-content" style="${idx !== 0 ? "display: none;" : ""}">
              <p style="font-size: 14px; line-height: 1.7; color: #444;">${escapeHtml(t.content)}</p>
            </div>`).join("") : ""}
          </div>
        </div>
      </div>
    </div>
  </section>` : ""}

  <!-- Execution & Reality -->
  ${data.execution_cards && data.execution_cards.length > 0 ? `
  <section class="execution-section">
    <div class="container">
      <div class="section-header" style="text-align: left; margin-bottom: 32px;">
        <span class="eyebrow">PHYSICAL TRANSFORMATION</span>
        <h2 class="section-title">Execution &amp; Craftsmanship</h2>
      </div>
      <div class="execution-grid">
        ${data.execution_cards.map(ec => `
        <div class="execution-card">
          <div class="execution-card-img">
            <img src="${escapeHtml(ec.image)}" alt="${escapeHtml(ec.title)}" loading="lazy">
            ${ec.role ? `<span class="execution-role">${escapeHtml(ec.role)}</span>` : ""}
          </div>
          <div class="execution-card-body">
            <h3 style="font-size: 18px; font-weight: 800; text-transform: uppercase; margin-bottom: 8px;">${escapeHtml(ec.title)}</h3>
            <p style="font-size: 13px; color: #555; line-height: 1.6;">${escapeHtml(ec.description)}</p>
          </div>
        </div>`).join("")}
      </div>
    </div>
  </section>` : ""}

  <!-- Project Gallery -->
  ${data.gallery && data.gallery.length > 0 ? `
  <section class="gallery-section">
    <div class="container">
      <div class="section-header" style="text-align: left; margin-bottom: 28px;">
        <span class="eyebrow">PORTFOLIO ARCHIVE</span>
        <h2 class="section-title">Design Gallery</h2>
      </div>
      <div class="gallery-grid">
        ${data.gallery.map(g => `
        <div class="gallery-card" onclick="openLightbox('${escapeHtml(g.image)}')">
          <img src="${escapeHtml(g.thumb || g.image)}" alt="${escapeHtml(g.title)}" loading="lazy">
          ${g.tag ? `<span class="gallery-tag">${escapeHtml(g.tag)}</span>` : ""}
        </div>`).join("")}
      </div>
    </div>
  </section>` : ""}

  <!-- Contact Section -->
  <section id="contact" class="contact-section">
    <div class="container">
      <div class="contact-card">
        <div class="contact-info">
          <div>
            <span class="eyebrow">HEADQUARTERS &amp; STUDIOS</span>
            <h2 class="section-title">${escapeHtml(data.contact?.title || "Connect With Us")}</h2>
            <p class="section-subtitle" style="margin-top: 6px;">Schedule an on-site consultation or visit our Delhi-NCR studios.</p>
          </div>

          <div class="phones-grid">
            <a href="tel:${escapeHtml((data.contact?.phones?.[0] || "+919810698082").replace(/\\s+/g, ""))}" class="phone-item">
              <span class="phone-label">Primary Line</span>
              <span class="phone-val">${escapeHtml(data.contact?.phones?.[0] || "+91 98106 98082")}</span>
            </a>
            <a href="tel:${escapeHtml((data.contact?.phones?.[1] || "+919811363064").replace(/\\s+/g, ""))}" class="phone-item">
              <span class="phone-label">Secondary Line</span>
              <span class="phone-val">${escapeHtml(data.contact?.phones?.[1] || "+91 98113 63064")}</span>
            </a>
          </div>

          <div class="addr-card">
            <div class="addr-title">Janakpuri Studio &amp; Head Office</div>
            ${escapeHtml(data.contact?.addresses?.[0] || "Plot No-18, 1st Floor, Main Palam Dwarka Road, Near Dabri Police Station, South West Delhi, New Delhi-110045")}
          </div>

          <div class="addr-card">
            <div class="addr-title">Kirti Nagar Millwork &amp; Factory</div>
            ${escapeHtml(data.contact?.addresses?.[1] || "Plot No-57, W.H.S, A Block, 2nd Floor, Kirti Nagar Industrial Area, Timber Market, West Delhi, New Delhi-110015")}
          </div>

          <div style="font-size: 12px; color: #666; display: flex; gap: 20px;">
            <span>Email: ${escapeHtml(data.contact?.email || "contact@4lotusinterior.in")}</span>
            <span>Hours: ${escapeHtml(data.contact?.timings || "Mon - Sat | 10:00 AM - 06:00 PM")}</span>
          </div>
        </div>

        <div class="form-box">
          <h3 style="font-size: 16px; font-weight: 800; text-transform: uppercase; margin-bottom: 16px;">Request Consultation</h3>
          <form onsubmit="event.preventDefault(); alert('Thank you for contacting 4 Lotus Interior. Our architect will reach out shortly.');">
            <div class="form-group">
              <label>Full Name *</label>
              <input type="text" required class="form-control" placeholder="Your Name">
            </div>
            <div class="form-group">
              <label>Phone Number *</label>
              <input type="tel" required class="form-control" placeholder="+91 98100 XXXXX">
            </div>
            <div class="form-group">
              <label>Email Address</label>
              <input type="email" class="form-control" placeholder="name@domain.com">
            </div>
            <div class="form-group">
              <label>Project Scope / Message</label>
              <textarea rows="3" class="form-control" placeholder="Tell us about your project requirements..."></textarea>
            </div>
            <button type="submit" class="btn-submit">Submit Consultation Inquiry</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</main>

${getFooterMarkup()}
</body>
</html>`;
}

async function renderReactHomepage() {
  const vite = await createServer({
    root: rootDir,
    configFile: path.resolve(rootDir, "vite.config.ts"),
    server: { middlewareMode: true },
    appType: "custom",
  });

  try {
    const ssrModule = await vite.ssrLoadModule("/src/ssrHome.tsx");
    return ssrModule.renderHome();
  } finally {
    await vite.close();
  }
}

function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Main execution
async function main() {
  const inventory = loadInventory();
  console.log(`Loaded ${inventory.length} pages from pageInventory.`);

  // Load all 61 JSON content files
  const contentFiles = fs.readdirSync(contentDir).filter(f => f.endsWith(".json"));
  const jsonContentMap = new Map();
  for (const file of contentFiles) {
    const raw = fs.readFileSync(path.join(contentDir, file), "utf-8");
    const parsed = JSON.parse(raw);
    const baseName = file.replace(/\.json$/i, "");
    jsonContentMap.set(baseName, parsed);
    if (parsed.slug) {
      jsonContentMap.set(parsed.slug, parsed);
    }
    if (baseName === "homepage") {
      jsonContentMap.set("", parsed);
    }
  }

  console.log(`Loaded ${contentFiles.length} JSON sources into map.`);

  // Ensure distDir exists
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
  }

  // 1. Generate index.html from React SSR with homepage.json data
  const homepageData = jsonContentMap.get("homepage");
  const indexFile = path.join(distDir, "index.html");
  if (homepageData && fs.existsSync(indexFile)) {
    const indexHtml = fs.readFileSync(indexFile, "utf-8");
    const staticHomepage = await renderReactHomepage();
    const updatedIndexHtml = indexHtml.replace(
      /<!-- STATIC_SEO_FALLBACK_START -->[\s\S]*?<!-- STATIC_SEO_FALLBACK_END -->/,
      staticHomepage
    );
    fs.writeFileSync(indexFile, updatedIndexHtml, "utf-8");
    console.log("Generated: index.html with complete homepage SSR content.");
  }

  // 2. Generate all 60 other pages from their authoritative JSON
  let count = 0;

  for (const item of inventory) {
    if (!item.slug) continue; // Skip root home page (has index.html)

    const rawData = jsonContentMap.get(item.slug);
    if (!rawData) {
      throw new Error(`CRITICAL: No authoritative JSON found for slug: ${item.slug}`);
    }

    const html = buildStandardPage(rawData);
    const targetFile = path.join(distDir, `${item.slug}.html`);
    fs.writeFileSync(targetFile, html, "utf-8");

    count++;
    console.log(`[${count}] Generated: ${item.slug}.html from authoritative JSON`);
  }

  // Generate shorthand alias files for regional hubs
  const regionalAliases = {
    "interior-designers-noida.html": "interior-designers-decorators-in-noida.html",
    "interior-designers-delhi.html": "interior-designers-decorators-in-delhi.html",
    "interior-designers-gurgaon.html": "interior-designers-decorators-in-gurgaon.html",
    "interior-designers-faridabad.html": "interior-designers-decorators-in-faridabad.html",
    "interior-designers-sonipat.html": "interior-designers-decorators-in-sonipat.html",
    "interior-designers-ghaziabad.html": "interior-designers-decorators-in-ghaziabad.html",
  };

  for (const [aliasFile, srcFile] of Object.entries(regionalAliases)) {
    const srcPath = path.join(distDir, srcFile);
    const aliasPath = path.join(distDir, aliasFile);
    if (fs.existsSync(srcPath)) {
      fs.copyFileSync(srcPath, aliasPath);
      console.log(`Aliased: ${aliasFile} -> ${srcFile}`);
    }
  }

  console.log(`\n🎉 Successfully generated ${count} complete static HTML pages directly from JSON!`);
}

main().catch(err => {
  console.error("Error generating pages:", err);
  process.exit(1);
});
