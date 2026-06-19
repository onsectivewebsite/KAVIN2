import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0A0A0B",
          900: "#0A0A0B",
          800: "#121214",
          700: "#1A1A1D",
          600: "#242428",
        },
        gold: {
          DEFAULT: "#C9A14A",
          light: "#E8C87E",
          deep: "#A67C2E",
          glow: "#F4DDA0",
        },
        ivory: "#F4F1EA",
        muted: "#9B968C",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        gold: "0 0 0 1px rgba(201,161,74,0.25), 0 20px 60px -20px rgba(201,161,74,0.35)",
        lift: "0 30px 80px -30px rgba(0,0,0,0.8)",
      },
      backgroundImage: {
        "gold-gradient":
          "linear-gradient(135deg, #E8C87E 0%, #C9A14A 45%, #A67C2E 100%)",
        "radial-gold":
          "radial-gradient(circle at 50% 0%, rgba(201,161,74,0.18), transparent 60%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "float": {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s cubic-bezier(0.22,1,0.36,1) forwards",
        "shimmer": "shimmer 3s linear infinite",
        "float": "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
