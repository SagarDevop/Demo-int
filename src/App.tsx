import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import InitialLoader from "./components/InitialLoader";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Process from "./pages/Process";
import Reviews from "./pages/Reviews";
import Locations from "./pages/Locations";
import Contact from "./pages/Contact";
import HtmlSitemap from "./pages/HtmlSitemap";
import NotFound from "./pages/NotFound";
import DynamicPageTemplate from "./components/DynamicPageTemplate";
import { pageInventory } from "./data/pageInventory";

export default function App() {
  // Inventory pages that use DynamicPageTemplate (excluding core pages that have full custom views)
  const templatePages = pageInventory.filter(
    (item) => item.category !== "Core" && item.category !== "Sitemap"
  );

  return (
    <BrowserRouter>
      {/* Editorial Opening Loader */}
      <InitialLoader />
      {/* Scroll restoration */}
      <ScrollToTop />

      <Routes>
        {/* Core Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/index.html" element={<Home />} />
        <Route path="/index" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about.html" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services.html" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio.html" element={<Portfolio />} />
        <Route path="/process" element={<Process />} />
        <Route path="/process.html" element={<Process />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/reviews.html" element={<Reviews />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/locations.html" element={<Locations />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact.html" element={<Contact />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/contact-us.html" element={<Contact />} />
        <Route path="/sitemap" element={<HtmlSitemap />} />
        <Route path="/sitemap.html" element={<HtmlSitemap />} />

        {/* Regional Hub Short Aliases */}
        <Route path="/interior-designers-noida" element={<Navigate to="/interior-designers-decorators-in-noida" replace />} />
        <Route path="/interior-designers-noida.html" element={<Navigate to="/interior-designers-decorators-in-noida.html" replace />} />
        <Route path="/interior-designers-delhi" element={<Navigate to="/interior-designers-decorators-in-delhi" replace />} />
        <Route path="/interior-designers-delhi.html" element={<Navigate to="/interior-designers-decorators-in-delhi.html" replace />} />
        <Route path="/interior-designers-gurgaon" element={<Navigate to="/interior-designers-decorators-in-gurgaon" replace />} />
        <Route path="/interior-designers-gurgaon.html" element={<Navigate to="/interior-designers-decorators-in-gurgaon.html" replace />} />
        <Route path="/interior-designers-faridabad" element={<Navigate to="/interior-designers-decorators-in-faridabad" replace />} />
        <Route path="/interior-designers-faridabad.html" element={<Navigate to="/interior-designers-decorators-in-faridabad.html" replace />} />
        <Route path="/interior-designers-sonipat" element={<Navigate to="/interior-designers-decorators-in-sonipat" replace />} />
        <Route path="/interior-designers-sonipat.html" element={<Navigate to="/interior-designers-decorators-in-sonipat.html" replace />} />
        <Route path="/interior-designers-ghaziabad" element={<Navigate to="/interior-designers-decorators-in-ghaziabad" replace />} />
        <Route path="/interior-designers-ghaziabad.html" element={<Navigate to="/interior-designers-decorators-in-ghaziabad.html" replace />} />

        {/* Dynamic Inventory Routes (supporting both clean slug and .html extension) */}
        {templatePages.map((page) => (
          <React.Fragment key={page.slug}>
            <Route
              path={`/${page.slug}`}
              element={<DynamicPageTemplate page={page} />}
            />
            <Route
              path={`/${page.slug}.html`}
              element={<DynamicPageTemplate page={page} />}
            />
          </React.Fragment>
        ))}

        {/* 404 Catch-All */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
