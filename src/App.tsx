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
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/process" element={<Process />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/contact-us.html" element={<Contact />} />
        <Route path="/sitemap" element={<HtmlSitemap />} />
        <Route path="/sitemap.html" element={<HtmlSitemap />} />

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
