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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          "100": "rgba(103, 58, 183, 0.7)",
          "200": "#8B008B",
          "300": "rgba(75, 0, 130, 1)",
        },
        text: {
          "100": "rgb(77,77,77)",
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
