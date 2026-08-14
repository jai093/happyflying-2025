import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        'xs': '375px', // iPhone SE and similar small devices
      },
      colors: {
        ocean: "#0A1320",
        sky: "#8CB7CC",
        sunset: "#EAB308",
        teal: "#9EC2D5",
        mist: "#FFFFFF"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "ui-sans-serif", "system-ui"]
      },
      boxShadow: {
        premium: "0 24px 80px rgba(10, 19, 32, 0.12)",
        glass: "0 24px 80px rgba(140, 183, 204, 0.18)"
      },
      backgroundImage: {
        "luxury-gradient": "linear-gradient(135deg, #0A1320 0%, #8CB7CC 50%, #EAB308 100%)",
        "steel-glow": "linear-gradient(135deg, rgba(140, 183, 204, 0.15) 0%, rgba(10, 19, 32, 0.95) 100%)"
      }
    }
  },
  plugins: []
};

export default config;



