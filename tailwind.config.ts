import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    container: { center: true, padding: "1.25rem" },
    extend: {
      colors: {
        brand: {
          DEFAULT: "#1D35E0",
          dark: "#16299E",
        },
        lime: {
          DEFAULT: "#D4F53C",
          dark: "#BEDE2C",
        },
        ink: "#111322",
        muted: "#6B7080",
        border: "#E5E7EB",
      },
      fontFamily: {
        display: ["var(--font-poppins)", "system-ui", "sans-serif"],
        sans: ["var(--font-satoshi)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "24px",
      },
      maxWidth: {
        content: "1200px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
      },
    },
  },
  plugins: [],
} satisfies Config;
