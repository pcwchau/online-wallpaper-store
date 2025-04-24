import type { Config } from "tailwindcss";

export default {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // Change default setting of container class
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        lg: "8rem",
      },
    },
    // Add custom styles
    extend: {
      colors: {
        primary: "#ffffff", // white
        "primary-text": "#1f1a17", // black
        "primary-text-highlight": "#ffc500", // yellow
        "primary-text-hover": "#ffc500", // yellow
        "primary-text-disabled": "#e5e7eb", // gray
        "primary-border": "#e5e7eb", // gray
        "primary-border-selected": "#1f1a17", // black
        "primary-border-disabled": "#e5e7eb", // gray
        secondary: "#1f1a17", // black
        "secondary-text": "#ffffff", // white
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
