import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "4rem",
    },
    extend: {
      colors: {
        primary: "var(--primary-color)",
        "primary-text": "var(--primary-text-color)",
        secondary: "var(--secondary-color)",
        "secondary-text": "var(--secondary-text-color)",
      },
      fontFamily: {
        primary: "var(--primary-font)",
      },
      fontSize: {
        "title-sm": ["2rem", { lineHeight: "2.5rem" }],
        "title-md": ["4rem", { lineHeight: "4.5rem" }],
      },
      keyframes: {
        enlargeSmall: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.1)" }, // Scale to 1.1
        },
      },
      animation: {
        "enlarge-small-in-4s": "enlargeSmall 4s ease-in-out forwards",
      },
    },
  },
  plugins: [],
} satisfies Config;
