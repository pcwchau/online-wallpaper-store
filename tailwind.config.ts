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
        lg: "6rem",
      },
    },
    // Add custom styles
    extend: {
      colors: {
        primary: "#ffffff",
        "primary-text": "#000000",
        "primary-text-disabled": "#e5e7eb",
        "primary-border": "#e5e7eb",
        "primary-border-selected": "#000000",
        "primary-border-disabled": "#e5e7eb",
        secondary: "#000000",
        "secondary-text": "#ffffff",
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
