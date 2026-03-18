import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#FFFDF9",
          100: "#FAF7F2",
          200: "#F3EDE4",
          300: "#E8DFD2",
        },
        teal: {
          50: "#EFF8F5",
          100: "#D4EDE6",
          200: "#A8DBCC",
          300: "#6EC4AD",
          400: "#3EA88E",
          500: "#2A7D6E",
          600: "#1F6358",
          700: "#184D44",
          800: "#123A34",
          900: "#0D2A26",
        },
        sage: {
          50: "#F2F7F4",
          100: "#E0ECE5",
          200: "#C1D9CC",
          300: "#8BB5A2",
          400: "#6A9E87",
          500: "#4F856E",
        },
        coral: {
          50: "#FDF3EE",
          100: "#FADDD0",
          200: "#F4BDA6",
          300: "#ED9A78",
          400: "#E8835C",
          500: "#D4623B",
          600: "#B84E2D",
        },
        charcoal: {
          50: "#F5F4F3",
          100: "#E0DEDC",
          200: "#B8B4AF",
          300: "#8A8580",
          400: "#5C5752",
          500: "#3D3935",
          600: "#2D2A26",
          700: "#1E1C19",
          800: "#141210",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
