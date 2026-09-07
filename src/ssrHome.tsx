import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import Home from "./pages/Home";

export function renderHome() {
  return renderToStaticMarkup(
    <StaticRouter location="/">
      <Home />
    </StaticRouter>
  );
}
