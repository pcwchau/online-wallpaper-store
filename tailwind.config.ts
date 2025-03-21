import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // Change default setting of container class
    container: {
      center: true,
      padding: "4rem",
    },
    // Add custom styles
    extend: {
      colors: {
        primary: "#ffffff",
        "primary-text": "#000000",
        secondary: "#000000",
        "secondary-text": "#ffffff",
      },
      fontFamily: {
        primary: "serif",
      },
      fontSize: {
        "title-sm": ["2rem", { lineHeight: "2.5rem" }],
        "title-md": ["4rem", { lineHeight: "4.5rem" }],
      },
      keyframes: {
        enlargeSmall: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.1)" },
        },
      },
      animation: {
        "enlarge-small-in-4s": "enlargeSmall 4s ease-in-out forwards",
      },
    },
  },
  plugins: [],
} satisfies Config;
