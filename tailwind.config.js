/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F8F7F5",
        foreground: "#111111",
        muted: "#767571",
        border: "rgba(0, 0, 0, 0.08)",
        "card-bg": "#FFFFFF",
        sand: "#EAE6E1",
        obsidian: "#0C0C0C",
        "obsidian-muted": "#8E8D8A",
        "obsidian-border": "rgba(255, 255, 255, 0.12)",
      },
      fontFamily: {
        sans: ["'Plus Jakarta Sans'", "system-ui", "-apple-system", "sans-serif"],
        display: ["'Plus Jakarta Sans'", "system-ui", "-apple-system", "sans-serif"],
        serif: ["'Cormorant Garamond'", "Georgia", "serif"],
      },
      letterSpacing: {
        tighter: "-0.04em",
        tight: "-0.02em",
        wide: "0.05em",
        wider: "0.1em",
        widest: "0.2em",
        mega: "0.35em",
      },
    },
  },
  plugins: [],
};
