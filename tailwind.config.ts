import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontSize: {
        "custom-small-title": ["2rem", { lineHeight: "2.5rem" }],
        "custom-medium-title": ["4rem", { lineHeight: "4.5rem" }],
      },
      keyframes: {
        enlargeSmall: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.1)" }, // Scale to 1.1
        },
      },
      animation: {
        enlargeSmallIn4s: "enlargeSmall 4s ease-in-out forwards",
      },
    },
  },
  plugins: [],
} satisfies Config;
