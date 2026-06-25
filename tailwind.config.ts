import type { Config } from "tailwindcss";

/**
 * DAIRY INSURANCE — Pastoral Agribusiness design system (Worker B/A overflow, CCA batch).
 *
 * Brand direction: deep pastoral meadow green (verdant dairy pasture, agribusiness authority),
 * warm amber CTA (harvest/straw warmth — pops against green), warm off-white canvas.
 * "Dairy farm insurance — established, expert, agri-specialist."
 *
 * Two layers:
 *  1. CCA foundation tokens + Dairy niche signature (meadow green brand ramp).
 *  2. LEGACY ALIASES mapped → new palette so C-owned files auto-retheme.
 */
const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // ── CCA SHARED FOUNDATION ────────────────────────────────────────────
        canvas: "#FBF8F3",
        card: "#FFFFFF",
        panel: "#F3EEE6",
        ink: "#16201C",
        "ink-soft": "#3A4540",
        muted: "#5E6862",
        line: "#E7DFD3",
        "line-soft": "#F0EAE0",

        cta: {
          DEFAULT: "#E8821A",
          dark: "#C2690B",
          soft: "#FCE7CF",
        },

        // ── BRAND: pastoral meadow green (Dairy / Agribusiness niche) ────────
        // Evokes lush dairy pasture, green field mornings, agri-authority.
        // Distinct from SSV trail green (#1A4B2E) — warmer, richer mid-tones.
        brand: {
          DEFAULT: "#1B5E34",
          bright: "#278C4E",
          ink: "#092011",
          50:  "#E9F7EE",
          100: "#C4EDD4",
          200: "#8ED4AC",
          300: "#56B985",
          400: "#2E9F61",
          500: "#278C4E",
          600: "#1F7341",
          700: "#1B5E34",
          800: "#113D21",
          900: "#092011",
        },

        // ── LEGACY ALIASES → new palette ────────────────────────────────────
        "forest-green": {
          DEFAULT: "#1B5E34",
          dark: "#113D21",
          50: "#E9F7EE",
          light: "#278C4E",
        },
        "ember-orange": {
          DEFAULT: "#E8821A",
          dark: "#C2690B",
          light: "#F0943A",
        },
        "warm-white": "#FBF8F3",
        bark: {
          DEFAULT: "#16201C",
          light: "#3A4540",
        },
        timber: {
          DEFAULT: "#3A4540",
          light: "#5E6862",
        },
        border: "#E7DFD3",
      },

      fontFamily: {
        heading: ["var(--font-heading)", "Plus Jakarta Sans", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "Inter", "system-ui", "sans-serif"],
      },

      boxShadow: {
        soft:         "0 1px 2px rgba(22,32,28,.04)",
        card:         "0 1px 2px rgba(22,32,28,.04), 0 10px 30px -12px rgba(22,32,28,.12)",
        "card-hover": "0 4px 8px rgba(22,32,28,.06), 0 24px 48px -16px rgba(27,94,52,.20)",
        cta:          "0 12px 28px -8px rgba(232,130,26,.45)",
        float:        "0 24px 64px -24px rgba(22,32,28,.30)",
      },
    },
  },
  plugins: [],
};
export default config;
