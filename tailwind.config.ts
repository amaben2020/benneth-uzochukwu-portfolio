import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        "black-secondary": "#13171D99",
        "black-tertiary": "rgba(19, 23, 29, 0.60)",
        "black-quaternary": "#13171DEE",
      },
      colors: {
        "blue-base": "#3D8BFF",
        "pink-base": "#AB23FF",
      },
      fontFamily: {
        primary: ["var(--font-inter)"],
        secondary: ["var(--font-roboto)"],
        tertiary: ["var(--font-chelsea-market)"],
      },
    },
  },
  plugins: [],
};
export default config;
