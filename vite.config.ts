import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import fs from "fs";

function staticHtmlServingPlugin(): Plugin {
  const distDir = path.resolve(__dirname, "dist");

  const handleStaticHtml = (req: any, res: any, next: () => void) => {
    if (req.method !== "GET" && req.method !== "HEAD") {
      return next();
    }

    const url = new URL(req.url || "/", "http://localhost");
    const pathname = decodeURIComponent(url.pathname);

    // Skip Vite internal URLs and source files
    if (
      pathname.startsWith("/@") ||
      pathname.startsWith("/src/") ||
      pathname.startsWith("/node_modules/")
    ) {
      return next();
    }

    // Serve built assets from dist/assets if requested
    if (pathname.startsWith("/assets/")) {
      const assetPath = path.join(distDir, pathname);
      if (fs.existsSync(assetPath) && fs.statSync(assetPath).isFile()) {
        const ext = path.extname(assetPath).toLowerCase();
        const mimeTypes: Record<string, string> = {
          ".js": "application/javascript",
          ".css": "text/css",
          ".png": "image/png",
          ".jpg": "image/jpeg",
          ".jpeg": "image/jpeg",
          ".webp": "image/webp",
          ".svg": "image/svg+xml",
          ".ico": "image/x-icon",
          ".json": "application/json",
        };
        if (mimeTypes[ext]) {
          res.setHeader("Content-Type", mimeTypes[ext]);
        }
        res.statusCode = 200;
        fs.createReadStream(assetPath).pipe(res);
        return;
      }
    }

    // Skip static assets with extensions other than html/htm
    const ext = path.extname(pathname).toLowerCase();
    if (ext && ext !== ".html" && ext !== ".htm") {
      return next();
    }

    let cleanSlug = pathname.replace(/^\/+/, "").replace(/\/+$/, "");
    if (cleanSlug.endsWith(".html")) {
      cleanSlug = cleanSlug.slice(0, -5);
    }

    // Root route "/" or "/index.html"
    if (cleanSlug === "" || cleanSlug === "index") {
      const indexPath = path.join(distDir, "index.html");
      if (fs.existsSync(indexPath)) {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html; charset=utf-8");
        const content = fs.readFileSync(indexPath, "utf-8");
        res.setHeader("Content-Length", Buffer.byteLength(content));
        res.end(content);
        return;
      }
      return next();
    }

    // Check if matching static HTML file exists in dist/
    const targetFile = path.join(distDir, `${cleanSlug}.html`);
    if (fs.existsSync(targetFile) && fs.statSync(targetFile).isFile()) {
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html; charset=utf-8");
      const content = fs.readFileSync(targetFile, "utf-8");
      res.setHeader("Content-Length", Buffer.byteLength(content));
      res.end(content);
      return;
    }

    return next();
  };

  return {
    name: "static-html-serving",
    configureServer(server) {
      server.middlewares.use(handleStaticHtml);
    },
    configurePreviewServer(server) {
      server.middlewares.use(handleStaticHtml);
    },
  };
}

export default defineConfig({
  plugins: [react(), staticHtmlServingPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});

