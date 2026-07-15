import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta pod jasny, modernistyczny landing (etap 2/3)
        brand: {
          50: "#f5f7fa",
          100: "#e9edf3",
          200: "#cfd9e5",
          400: "#8fa3bd",
          600: "#4a6a94",
          700: "#38537a",
          900: "#1c2b40",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
