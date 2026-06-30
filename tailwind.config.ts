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
        brand: {
          green: "#1D9E75",
          "green-dark": "#178a64",
          "green-light": "#e8f7f2",
          text: "#2C2C2A",
        },
      },
    },
  },
  plugins: [],
};
export default config;
