import type { Config } from "tailwindcss";
const plugin = require("tailwindcss/plugin");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#1C1F1C", // Deep forest background
        foreground: "#E5E7E3", // Warm light gray
        primary: {
          "100": "rgba(116, 148, 107, 0.85)", // Soft matcha
          "200": "rgba(89, 122, 82, 0.9)", // Medium matcha
          "300": "rgba(66, 92, 61, 1)", // Deep matcha
        },
        text: {
          "100": "#F1F2EF", // Very light warm gray
          "200": "#E5E7E3", // Light warm gray
          "300": "#A3A69F", // Medium warm gray
          "400": "#737873", // Dark warm gray
        },
      },
    },
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1536px",
    },
  },
  plugins: [
    plugin(function ({ addUtilities }: { addUtilities: any }) {
      addUtilities({
        ".clip-diagonal": {
          clipPath: "polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)",
        },
      });
    }),
    require("tailwind-scrollbar-hide"),
  ],
};
export default config;
