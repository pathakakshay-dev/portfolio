import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./hooks/**/*.{js,ts,jsx,tsx,mdx}",
    "./constants/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "Segoe UI", "Arial", "sans-serif"]
      },
      colors: {
        night: "#030712",
        ink: "#050816",
        panel: "#0F172A",
        cyan: "#00F5FF",
        violet: "#7C3AED",
        sky: "#38BDF8"
      },
      boxShadow: {
        glow: "0 0 40px rgba(0,245,255,0.22)",
        violet: "0 0 55px rgba(124,58,237,0.25)"
      },
      backgroundImage: {
        "radial-grid": "radial-gradient(circle at 1px 1px, rgba(56,189,248,.28) 1px, transparent 0)"
      },
      animation: {
        orbit: "orbit 24s linear infinite",
        pulseGlow: "pulseGlow 4s ease-in-out infinite",
        shimmer: "shimmer 2.8s linear infinite"
      },
      keyframes: {
        orbit: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" }
        },
        pulseGlow: {
          "0%, 100%": { opacity: ".55", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.04)" }
        },
        shimmer: {
          from: { backgroundPosition: "200% 0" },
          to: { backgroundPosition: "-200% 0" }
        }
      }
    }
  },
  plugins: []
};

export default config;
