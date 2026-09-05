/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
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
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "-apple-system", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
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
