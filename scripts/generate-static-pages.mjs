import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { createServer } from "vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const contentDir = path.resolve(rootDir, "src/data/content");
const distDir = path.resolve(rootDir, "dist");

// Read page inventory from TypeScript file via experimental strip or regex
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
    "image": data.seo?.og_image || "https://4lotusinterior.in/assets/images/index-meta.webp",
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
      "image": "https://4lotusinterior.in/assets/images/index-meta.webp",
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
  font-family: 'Plus Jakarta Sans', sans-serif;
  color: #111111;
  background-color: #F8F7F5;
  line-height: 1.6;
}
a { color: inherit; text-decoration: none; }
img { max-width: 100%; height: auto; display: block; }
.container { max-width: 1360px; margin: 0 auto; padding: 0 24px; }

/* Header & Nav */
header.site-nav {
  position: sticky; top: 0; z-index: 50;
  background: rgba(255,255,255,0.95);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(0,0,0,0.08);
}
.nav-inner {
  display: flex; align-items: center; justify-content: space-between;
  height: 80px; position: relative;
}
.brand-logo {
  font-size: 20px; font-weight: 800; letter-spacing: 0.08em;
  text-transform: uppercase; color: #111111; display: flex; align-items: center; gap: 8px;
}
.brand-badge {
  font-size: 9px; font-weight: 700; background: #854d0e; color: #fff;
  padding: 2px 6px; border-radius: 3px; letter-spacing: 0.1em;
}
.nav-links { display: flex; align-items: center; gap: 18px; list-style: none; }
.nav-links a { font-size: 11.5px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; color: #333; transition: color 0.2s; white-space: nowrap; }
.nav-links a:hover { color: #854d0e; }
.cta-btn {
  background: #111111; color: #ffffff !important; padding: 8px 16px;
  font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em;
  border-radius: 9999px; transition: background 0.2s; white-space: nowrap;
}
.cta-btn:hover { background: #333333; }
.mobile-toggle {
  display: none; background: none; border: none; cursor: pointer; padding: 8px; color: #111;
}

/* Breadcrumbs */
.breadcrumb-wrap {
  padding: 20px 0 0; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: #888;
}
.breadcrumb-wrap a { color: #555; }
.breadcrumb-wrap a:hover { color: #000; }
.breadcrumb-sep { margin: 0 8px; color: #bbb; }

/* Hero */
.hero-section { padding: 40px 0 40px; }
.hero-card {
  background: #ffffff; border: 1px solid rgba(0,0,0,0.08); border-radius: 8px;
  padding: 48px; display: grid; grid-template-columns: 1fr 1.2fr; gap: 48px;
  align-items: center; box-shadow: 0 4px 20px rgba(0,0,0,0.03);
}
.hero-img-box {
  position: relative; border-radius: 6px; overflow: hidden;
  border: 1px solid rgba(0,0,0,0.08); background: #FAF9F6;
  aspect-ratio: 4/5;
}
.hero-img-box img { width: 100%; height: 100%; object-fit: cover; }
.hero-text { display: flex; flex-direction: column; gap: 20px; }
.eyebrow { font-size: 11px; font-weight: 700; letter-spacing: 0.25em; text-transform: uppercase; color: #854d0e; }
h1.hero-title { font-size: 38px; font-weight: 800; text-transform: uppercase; line-height: 1.15; letter-spacing: -0.02em; color: #111111; }
p.hero-desc { font-size: 15px; color: #444444; font-weight: 300; line-height: 1.7; }
.hero-btns { display: flex; flex-wrap: wrap; gap: 14px; pt: 10px; }
.btn-primary {
  background: #111111; color: #ffffff; padding: 14px 26px; font-size: 12px;
  font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; border-radius: 4px; display: inline-block;
}
.btn-outline {
  border: 1px solid rgba(0,0,0,0.2); color: #111111; padding: 14px 26px; font-size: 12px;
  font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; border-radius: 4px; display: inline-block;
}

/* Concept Section */
.concept-section { padding: 40px 0; }
.concept-card {
  background: #ffffff; border: 1px solid rgba(0,0,0,0.08); border-radius: 8px;
  padding: 48px; display: grid; grid-template-columns: 1.2fr 1fr; gap: 48px;
  align-items: center;
}
.concept-title { font-size: 28px; font-weight: 800; text-transform: uppercase; margin-bottom: 16px; }
.concept-desc { font-size: 14px; color: #444444; font-weight: 300; line-height: 1.7; margin-bottom: 20px; }
.tags-list { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 16px; }
.tag-item {
  background: #FAF9F6; border: 1px solid rgba(0,0,0,0.08); padding: 8px 14px;
  font-size: 12px; font-weight: 600; border-radius: 4px; color: #333333;
}

/* Quote Section */
.quote-section { padding: 40px 0; }
.quote-box {
  background: #111111; color: #ffffff; border-radius: 8px; padding: 60px 40px;
  text-align: center; max-width: 1000px; margin: 0 auto;
}
.quote-box blockquote { font-size: 20px; font-style: italic; font-weight: 300; line-height: 1.6; margin-bottom: 16px; }
.quote-author { font-size: 10px; font-weight: 700; letter-spacing: 0.25em; text-transform: uppercase; color: #a3a3a3; }

/* Turnkey Services */
.services-section { padding: 60px 0; }
.section-header { text-align: center; max-width: 800px; margin: 0 auto 40px; }
.section-title { font-size: 30px; font-weight: 800; text-transform: uppercase; margin-bottom: 8px; }
.section-subtitle { font-size: 14px; color: #666666; font-weight: 400; }
.cards-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 24px; }
.service-card {
  background: #ffffff; border: 1px solid rgba(0,0,0,0.08); border-radius: 8px;
  padding: 36px; display: flex; flex-direction: column; justify-content: space-between; gap: 20px;
  transition: transform 0.2s, box-shadow 0.2s;
}
.service-card:hover { transform: translateY(-4px); box-shadow: 0 8px 24px rgba(0,0,0,0.06); }
.card-icon-box {
  width: 60px; height: 60px; border-radius: 50%; background: #FAF9F6;
  border: 1px solid rgba(0,0,0,0.08); display: flex; align-items: center; justify-content: center;
  padding: 12px; margin-bottom: 16px;
}
.card-title { font-size: 18px; font-weight: 800; text-transform: uppercase; margin-bottom: 6px; }
.card-subtitle { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: #854d0e; margin-bottom: 12px; }
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
.gallery-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; }
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

// Navigation Bar markup (Without Home, Without Portfolio)
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

// Build standard rich page from migration data
function buildStandardPage(data) {
  const title = data.seo?.title || data.title || `${data.hero?.title || "Luxury Interior"} | 4 Lotus Interior`;
  const metaDesc = data.seo?.meta_description || data.meta?.description || data.hero?.description || "";
  const ogImage = data.seo?.og_image || "https://4lotusinterior.in/assets/images/index-meta.webp";
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
<link rel="shortcut icon" href="https://4lotusinterior.in/assets/images/logo-128x128.png" type="image/x-icon">

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
          <p class="hero-desc">${escapeHtml(data.hero?.description || metaDesc)}</p>
          <div class="hero-btns">
            <a href="#contact" class="btn-primary">Book Consultation</a>
            <a href="tel:+919810698082" class="btn-outline">+91 98106 98082</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Concept Section -->
  ${data.design_concept ? `
  <section class="concept-section">
    <div class="container">
      <div class="concept-card">
        <div>
          <span class="eyebrow">ARCHITECTURAL STRATEGY</span>
          <h2 class="concept-title">${escapeHtml(data.design_concept.title)}</h2>
          <p class="concept-desc">${escapeHtml(data.design_concept.description)}</p>
          ${data.design_concept.links ? `
          <div class="tags-list">
            ${data.design_concept.links.map(l => `<span class="tag-item">${escapeHtml(l)}</span>`).join("\n            ")}
          </div>` : ""}
        </div>
        <div class="hero-img-box" style="aspect-ratio: 4/3;">
          <img src="${escapeHtml(data.design_concept.image)}" alt="${escapeHtml(data.design_concept.image_alt || data.design_concept.title)}" loading="lazy">
        </div>
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

  <!-- Turnkey Services -->
  ${data.turnkey_services ? `
  <section class="services-section">
    <div class="container">
      <div class="section-header">
        <span class="eyebrow">FULL-SPECTRUM EXECUTION</span>
        <h2 class="section-title">${escapeHtml(data.turnkey_services.title)}</h2>
        ${data.turnkey_services.subtitle ? `<p class="section-subtitle">${escapeHtml(data.turnkey_services.subtitle)}</p>` : ""}
      </div>
      <div class="cards-grid">
        ${data.turnkey_services.cards.map(c => `
        <div class="service-card">
          <div>
            <div class="card-icon-box">
              <img src="${escapeHtml(c.icon || "https://4lotusinterior.in/assets/images/130-150x150.webp")}" alt="${escapeHtml(c.title)}">
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
            <img src="${escapeHtml(data.process.image || "https://4lotusinterior.in/assets/images/12-1204x535.webp")}" alt="${escapeHtml(data.process.image_alt || "Delivery Process")}">
          </div>
          <div>
            <div class="tab-buttons">
              ${data.process.tabs.map((t, idx) => `
              <button class="tab-btn ${idx === 0 ? "active" : ""}" onclick="switchTab(this, 'tab-${idx}')">${escapeHtml(t.label)}</button>`).join("")}
            </div>
            ${data.process.tabs.map((t, idx) => `
            <div id="tab-${idx}" class="tab-content" style="${idx !== 0 ? "display: none;" : ""}">
              <p style="font-size: 14px; line-height: 1.7; color: #444;">${escapeHtml(t.content)}</p>
            </div>`).join("")}
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
        <h2 class="section-title">Execution & Craftsmanship</h2>
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
            <span class="eyebrow">HEADQUARTERS & STUDIOS</span>
            <h2 class="section-title">Connect With Us</h2>
            <p class="section-subtitle" style="margin-top: 6px;">Schedule an on-site consultation or visit our Delhi-NCR studios.</p>
          </div>

          <div class="phones-grid">
            <a href="tel:+919810698082" class="phone-item">
              <span class="phone-label">Primary Line</span>
              <span class="phone-val">+91 98106 98082</span>
            </a>
            <a href="tel:+919811363064" class="phone-item">
              <span class="phone-label">Secondary Line</span>
              <span class="phone-val">+91 98113 63064</span>
            </a>
          </div>

          <div class="addr-card">
            <div class="addr-title">Dwarka / Janakpuri Studio</div>
            Plot No-18, 1st Floor, Main Palam Dwarka Road, Near Dabri Police Station, South West Delhi, New Delhi-110045
          </div>

          <div class="addr-card">
            <div class="addr-title">Kirti Nagar Millwork & Factory</div>
            Plot No-57, W.H.S, A Block, 2nd Floor, Kirti Nagar Industrial Area, Timber Market, West Delhi, New Delhi-110015
          </div>

          <div style="font-size: 12px; color: #666; display: flex; gap: 20px;">
            <span>Email: contact@4lotusinterior.in</span>
            <span>Hours: Mon - Sat | 10:00 AM - 06:00 PM</span>
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

// Build localized static page for micro-locations or remaining inventory pages
function buildLocalizedInventoryPage(item) {
  const title = item.metaTitle || `${item.label} | 4 Lotus Interior`;
  const metaDesc = item.metaDescription || "Turnkey interior design and architectural renovation in Delhi-NCR.";
  const canonical = item.url;
  const ogImage = "https://4lotusinterior.in/assets/images/index-meta.webp";

  // Clean locality name
  const locality = item.label
    .replace(/^Interior Designers & Decorators in /i, "")
    .replace(/^Top Interior Designers & Decorators in /i, "")
    .replace(/ Design & Renovation$/i, "");

  const data = {
    title,
    url: canonical,
    canonical,
    seo: {
      title,
      meta_description: metaDesc,
      og_title: title,
      og_image: ogImage,
    },
    hero: {
      title: item.label,
      description: item.metaDescription,
      image: "https://4lotusinterior.in/assets/images/277-480x640.webp",
      image_alt: item.label,
    },
    design_concept: {
      title: `Architectural Excellence in ${locality}`,
      description: `At 4 Lotus Interior, we specialize in luxury spatial planning, 2D/3D schematics, in-house solid wood millwork, and end-to-end civil contracting across ${locality}. Our single-window turnkey approach eliminates contractor overlapping, ensuring project handovers are on time, on budget, and crafted to the highest architectural standards.`,
      image: "https://4lotusinterior.in/assets/images/278-480x780.webp",
      image_alt: `${locality} Interior Architecture`,
      links: [
        `Turnkey Interior Designers in ${locality}`,
        `Luxury Residential Contractors in ${locality}`,
        `Bespoke Modular Kitchens in ${locality}`,
        `Commercial Office Renovations in ${locality}`,
      ],
    },
    quote: `Every residence and workspace in ${locality} deserves an environment engineered for elegance and effortless daily living. Our commitment is to deliver bespoke luxury backed by factory-grade precision.`,
    turnkey_services: {
      title: `Turnkey Interior Services in ${locality}`,
      subtitle: `Full-scope design, procurement, millwork, and contracting under one roof`,
      cards: [
        {
          title: "Spatial Planning & 3D Renderings",
          subtitle: "Architectural Schematics",
          description: `Detailed 2D furniture layouts, MEP schematics, lighting calculations, and photorealistic 3D virtual walkthroughs before civil commencement in ${locality}.`,
          icon: "https://4lotusinterior.in/assets/images/130-150x150.webp",
        },
        {
          title: "Custom Joinery & Millwork",
          subtitle: "Kirti Nagar Factory",
          description: `Direct manufacturing of solid teak sofas, modular wardrobe systems, and premium German-hardware modular kitchens crafted in our West Delhi timber facility.`,
          icon: "https://4lotusinterior.in/assets/images/131-150x150.webp",
        },
        {
          title: "Turnkey Civil & Fitout Execution",
          subtitle: "Dedicated Project Management",
          description: `Demolition, masonry, plaster, false ceiling, sanitary plumbing, VRV air conditioning, and electrical cabling executed with zero contractor disputes.`,
          icon: "https://4lotusinterior.in/assets/images/132-150x150.webp",
        },
      ],
    },
    process: {
      title: "Our Proven Delivery Methodology",
      subtitle: "A systematic roadmap from initial site measurement to keys handover",
      image: "https://4lotusinterior.in/assets/images/12-1204x535.webp",
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
          content: `Production Drawings, Dedicated Site Engineer Supervision, Quality Control Benchmarks, Weekly Progress Reporting, Safety Compliance, and Flawless Handover.`,
        },
      ],
    },
    execution_cards: [
      {
        title: `Curated Living & Dining Sanctuaries in ${locality}`,
        role: "Bespoke Residential Transformation",
        description: `Transforming empty shells and outdated structures into open-plan luxury homes with warm acoustics, hidden storage, and concealed ambient cove illumination.`,
        image: "https://4lotusinterior.in/assets/images/279-640x480.webp",
      },
      {
        title: `High-Performance Workspaces & Retail in ${locality}`,
        role: "Turnkey Commercial Architecture",
        description: `Engineering commercial properties, corporate offices, and boutique retail showrooms designed to maximize space efficiency and client brand prestige.`,
        image: "https://4lotusinterior.in/assets/images/280-640x480.webp",
      },
    ],
    gallery: [
      {
        title: `${locality} Living Suite`,
        image: "https://4lotusinterior.in/assets/images/281-1280x720.webp",
        thumb: "https://4lotusinterior.in/assets/images/281-1280x720-800x450.webp",
        tag: "Residential",
      },
      {
        title: `${locality} Master Bedroom`,
        image: "https://4lotusinterior.in/assets/images/282-1280x720.webp",
        thumb: "https://4lotusinterior.in/assets/images/282-1280x720-800x450.webp",
        tag: "Luxury Fitout",
      },
      {
        title: `${locality} Modular Kitchen`,
        image: "https://4lotusinterior.in/assets/images/283-1280x720.webp",
        thumb: "https://4lotusinterior.in/assets/images/283-1280x720-800x450.webp",
        tag: "Millwork",
      },
      {
        title: `${locality} Corporate Suite`,
        image: "https://4lotusinterior.in/assets/images/284-1280x720.webp",
        thumb: "https://4lotusinterior.in/assets/images/284-1280x720-800x450.webp",
        tag: "Commercial",
      },
    ],
  };

  return buildStandardPage(data);
}

function buildHomepageStaticSeo(data, inventory) {
  const sections = (data.sections || [])
    .filter(section => section.text && section.text.length > 80)
    .map((section, index) => {
      const headings = (section.headings || []).map((heading, headingIndex) => {
        const tag = index === 0 && headingIndex === 0 ? "h1" : headingIndex === 0 ? "h2" : "h3";
        return `<${tag}>${escapeHtml(heading)}</${tag}>`;
      }).join("\n");
      return `<section class="seo-content-section">${headings}<p>${escapeHtml(section.text)}</p></section>`;
    }).join("\n");

  const services = [
    ["Civil Works, Masonry & Plastering", "Masonry & Plastering, RCC Works, Screeding, and all types of Flooring/Cladding (Granite, Marble, Vitrified Tiles)."],
    ["Plumbing & Sanitary Lines", "Complete Fresh Water & Sanitary Line installation, along with high-quality Sanitary Fixtures & Luxury Bath Accessories."],
    ["Electrical & Smart Lighting", "Internal Electrification, Lighting, Power Outlets, DBs, External Electrification, HT Sub-stations, DG sets, and comprehensive electrical fittings."],
    ["False Ceiling Solutions", "Modular Grid, Gypsum Board, POP Decorative, Metal, and Wooden or Glazed Architectural Ceilings."],
    ["Joinery, Carpentry & Storage Units", "Wood and Gypsum Partitions, Paneling, Flush Doors, Custom Furniture, Storage Units, and Built-in Wardrobe Cabinets."],
    ["Flooring & Architectural Surfaces", "False Flooring, Carpets, Hardwood and Engineered Wooden Flooring, Luxury Vinyl, Epoxy, and Imported Stone."],
    ["Fabrication & Structural MS", "MS Structures, Structural Roofing, Stainless Steel and Aluminium Grills, Glass Railings, and Commercial Rolling Shutters."],
    ["HVAC & Ventilation Engineering", "Split, Ductable and VRV air-conditioning, Precision AC for Server Rooms, and Office and Toilet Ventilation Systems."],
    ["Architectural Glass Works", "Toughened Glass Partitions, Lacquered Glass, Anti-reflective Glazing, and Custom Painted Glass solutions."],
    ["Data, Networking & Server Rooms", "Structured Cat-6 Cabling, Server Room Design, Rack Setup, and Wireless Enterprise Network solutions."],
    ["Fire Safety & Electronic Security", "Fire Alarm Systems, Hydrants, Sprinklers, FM-200 Suppression, Biometric Access Control, and CCTV Surveillance."],
    ["Finishing Touches & Artistry", "Painting, Wall Art, Melamine and PU Polishing, Texture Finishing, Signage, Glass Blocks, Indoor Waterfalls, and Artifacts."],
  ];

  const faqs = [
    ["Who leads the architectural and design desk at 4 Lotus Interior?", "4 Lotus Interior is led by Principal Interior Architect Rashid Ali, bringing over 15+ years of design and execution expertise. Our multidisciplinary team includes CAD draftsmen, 3D visualizers, master carpenters, and dedicated site supervisors."],
    ["What services do you provide under turnkey interior execution?", "We provide complete end-to-end turnkey solutions covering architectural spatial planning, 3D photorealistic visualization, structural civil remodeling, electrical and plumbing layouts, false ceiling elevations, modular kitchen installations, luxury bathroom transformations, and custom in-house furniture manufacturing."],
    ["Do you manufacture your own custom furniture and modular fixtures?", "Yes. 4 Lotus operates its own specialized furniture manufacturing facility. We produce bespoke fluted consoles, solid teak dining tables, upholstered headboards, German-hardware modular kitchens, and custom wardrobes."],
    ["Which areas in Delhi-NCR do you provide on-site services?", "We provide on-site visits across Janakpuri, Dwarka, South Delhi, West Delhi, North and East Delhi, Gurgaon, Noida, Faridabad, Ghaziabad, and Sonipat."],
    ["How does the initial design consultation and 3D modeling work?", "The journey begins with an initial spatial consultation. We map lifestyle requirements and prepare 2D layout options, hyper-realistic 3D walkthrough renders, and physical material sample boards before site work begins."],
    ["How do you ensure budget certainty and project timelines?", "Before signing, we provide a fixed-price itemized bill of quantities with zero hidden charges. Each project follows a milestone-linked timeline supervised by an on-site project manager."],
  ];

  const reviews = [
    "It was an absolute pleasure working with 4 Lotus Interior. Very professional and friendly. They renovated our flat, and the process was simple. Highly recommended if you want quality.",
    "My home was renovated by 4 Lotus. They are very professional and highly skilled. They totally changed my home interior as per my needs and within my budget.",
    "4 Lotus Interior designed and decorated our home beautifully. Despite challenges like the lockdown, they completed the work on time and were budget-friendly.",
    "My 4BHK builder floor was well interior designed and renovated in a completely new style. I am satisfied with the service and execution by 4 Lotus Interior.",
    "My company took interior designing and contractor services from 4 Lotus. They have all interior-related solutions under one roof.",
    "Awesome residential interior of my home by Delhi's best interior designers and decorators. Choose them, it will never disappoint you.",
  ];

  const locations = inventory
    .filter(item => item.category === "Availability")
    .map(item => `<li><a href="/${escapeHtml(item.slug)}.html">${escapeHtml(item.label)}</a></li>`)
    .join("");

  const portfolioImages = (data.images || [])
    .filter(image => image.src && image.alt)
    .slice(0, 24)
    .map(image => `<figure><img src="${escapeHtml(image.src)}" alt="${escapeHtml(image.alt)}" loading="lazy"><figcaption>${escapeHtml(image.alt)}</figcaption></figure>`)
    .join("");

  return `
    <header class="seo-fallback-header">
      <a href="/">4 LOTUS INTERIOR · DELHI-NCR</a>
      <nav aria-label="Main navigation">
        <a href="/interior-designers.html">Specialist</a>
        <a href="/residential-interior.html">Residential</a>
        <a href="/commercial-interior.html">Commercial</a>
        <a href="/contact-us.html">Contact</a>
      </nav>
    </header>
    <main class="seo-fallback-main">
      ${sections}

      <section class="seo-content-section" id="services">
        <h2>Turnkey Interior Solutions in Delhi-NCR</h2>
        <p>We handle complete interior design, renovation, and turnkey execution for residential, retail, commercial, corporate, and hospitality spaces across Delhi-NCR, Gurgaon, and Noida.</p>
        <div class="seo-list-grid">
          ${services.map(([title, description]) => `<article><h3>${escapeHtml(title)}</h3><p>${escapeHtml(description)}</p></article>`).join("")}
        </div>
      </section>

      <section class="seo-content-section" id="reviews">
        <h2>What Our Clients Say</h2>
        <p>4.9 Rating from 81 Verified Google Reviews.</p>
        <div class="seo-list-grid">
          ${reviews.map(review => `<blockquote>“${escapeHtml(review)}”<cite>Verified 4 Lotus Interior client</cite></blockquote>`).join("")}
        </div>
      </section>

      <section class="seo-content-section" id="portfolio">
        <h2>Interior Design Portfolio</h2>
        <p>Selected residential, commercial, retail, hospitality, bedroom, living room, bathroom, kitchen, clinic, and shop interior design work by 4 Lotus Interior.</p>
        <div class="seo-image-grid">${portfolioImages}</div>
      </section>

      <section class="seo-content-section" id="faq">
        <h2>Frequently Asked Questions</h2>
        ${faqs.map(([question, answer]) => `<article><h3>${escapeHtml(question)}</h3><p>${escapeHtml(answer)}</p></article>`).join("")}
      </section>

      <section class="seo-content-section" id="locations">
        <h2>Interior Design Service Areas</h2>
        <p>Our architects and execution teams serve residential and commercial clients throughout Delhi-NCR.</p>
        <ul class="seo-location-list">${locations}</ul>
      </section>

      <section class="seo-content-section" id="contact">
        <h2>Contact 4 Lotus Interior</h2>
        <p>Book a consultation with Principal Architect Rashid Ali for your residential, commercial, or turnkey interior project.</p>
        <p><strong>Phone:</strong> <a href="tel:+919810698082">+91 98106 98082</a> · <a href="tel:+919811363064">+91 98113 63064</a></p>
        <p><strong>Studio:</strong> Plot No-18, 1st Floor, Main Palam Dwarka Road, Near Dabri Police Station, South West Delhi, New Delhi-110045.</p>
        <p><strong>Factory:</strong> Plot No-57, W.H.S, A Block, 2nd Floor, Kirti Nagar Industrial Area, Timber Market, West Delhi, New Delhi-110015.</p>
        <p><strong>Email:</strong> contact@4lotusinterior.in · <strong>Hours:</strong> Monday to Saturday, 10:00 AM to 6:00 PM.</p>
      </section>
    </main>
    <footer class="seo-fallback-footer">© 2026 4 Lotus Interior. All Rights Reserved. Turnkey Architecture & Interior Renovation Delhi-NCR.</footer>`;
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

// Build dedicated Contact Us page
function buildContactPage() {
  const data = {
    title: "Contact 4 Lotus Interior | Studio Janakpuri & Factory Kirti Nagar",
    url: "https://4lotusinterior.in/contact-us.html",
    canonical: "https://4lotusinterior.in/contact-us.html",
    seo: {
      title: "Contact 4 Lotus Interior | Studio Janakpuri & Factory Kirti Nagar",
      meta_description: "Connect with Principal Architect Rashid Ali at 4 Lotus Interior. Studio in Janakpuri and joinery facility in Kirti Nagar. Call +91 98106 98082.",
      og_title: "Contact 4 Lotus Interior Delhi",
      og_image: "https://4lotusinterior.in/assets/images/index-meta.webp",
    },
    hero: {
      title: "Contact 4 Lotus Interior",
      description: "Book an architectural spatial consultation with Principal Architect Rashid Ali at our Janakpuri Design Studio or schedule an on-site property audit across Delhi-NCR.",
      image: "https://4lotusinterior.in/assets/images/221-480x640.webp",
      image_alt: "4 Lotus Interior Design Studio",
    },
    design_concept: {
      title: "Direct Architectural Channels",
      description: "Whether you have an architectural blueprint or an idea for a full turnkey makeover, our senior designers are available for direct in-person discussion at our studios or your project site.",
      image: "https://4lotusinterior.in/assets/images/design-build.webp",
      image_alt: "Studio Consultation",
      links: [
        "Architectural Site Audits",
        "Factory Joinery Tours in Kirti Nagar",
        "Material Selection & Sampling",
        "Detailed BOQ & Budget Consultations",
      ],
    },
    quote: "Architecture is not just about making blueprints; it is about listening to how you live, work, and interact with your environment.",
  };

  return buildStandardPage(data);
}

// Build dedicated Sitemap page
function buildSitemapPage(inventory) {
  const data = {
    title: "HTML Sitemap Directory | 4 Lotus Interior Architecture & Design",
    url: "https://4lotusinterior.in/sitemap.html",
    canonical: "https://4lotusinterior.in/sitemap.html",
    seo: {
      title: "HTML Sitemap Directory | 4 Lotus Interior Architecture & Design",
      meta_description: "Complete page inventory, service categories, residential, commercial and regional directory for 4 Lotus Interior in Delhi-NCR.",
      og_title: "4 Lotus Interior Sitemap",
      og_image: "https://4lotusinterior.in/assets/images/index-meta.webp",
    },
    hero: {
      title: "HTML Sitemap Directory",
      description: "Complete directory of architectural services, residential renovations, commercial fitouts, regional hubs, and micro-location availability for 4 Lotus Interior across Delhi-NCR.",
      image: "https://4lotusinterior.in/assets/images/12-1204x535.webp",
      image_alt: "Sitemap Directory",
    },
    design_concept: {
      title: "Complete Delhi-NCR Coverage",
      description: "Browse all official service pages, regional contractor hubs, and micro-location studios across Delhi, Gurgaon, Noida, Faridabad, Sonipat, and Ghaziabad.",
      image: "https://4lotusinterior.in/assets/images/222-480x780.webp",
      image_alt: "Architectural Sitemap",
      links: inventory.slice(0, 12).map(i => i.label),
    },
  };

  return buildStandardPage(data);
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

  // Load available raw JSON content files
  const contentFiles = fs.readdirSync(contentDir).filter(f => f.endsWith(".json"));
  const jsonContentMap = new Map();
  for (const file of contentFiles) {
    const raw = fs.readFileSync(path.join(contentDir, file), "utf-8");
    const parsed = JSON.parse(raw);
    const slug = parsed.slug || file.replace(".json", "");
    jsonContentMap.set(slug, parsed);
  }

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
    console.log("Generated: index.html with complete homepage SEO content.");
  }

  let count = 0;

  for (const item of inventory) {
    if (!item.slug) continue; // Skip root home page (has index.html)

    let html = "";
    if (item.slug === "contact-us") {
      html = buildContactPage();
    } else if (item.slug === "sitemap") {
      html = buildSitemapPage(inventory);
    } else if (jsonContentMap.has(item.slug)) {
      html = buildStandardPage(jsonContentMap.get(item.slug));
    } else {
      // Localized micro-location or flat-interior page
      html = buildLocalizedInventoryPage(item);
    }

    if (!fs.existsSync(distDir)) {
      fs.mkdirSync(distDir, { recursive: true });
    }
    const targetFile = path.join(distDir, `${item.slug}.html`);
    fs.writeFileSync(targetFile, html, "utf-8");

    count++;
    console.log(`[${count}] Generated: ${item.slug}.html`);
  }

  console.log(`\n🎉 Successfully generated ${count} complete static HTML pages!`);
}

main().catch(err => {
  console.error("Error generating pages:", err);
  process.exit(1);
});
