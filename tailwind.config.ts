import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Ściśle 3 kolory marki: ink / accent / bg.
      // Wszystko inne (obramowania, tekst pomocniczy, karty) pochodzi
      // z tych trzech przez opacity - świadomie, żeby paleta nie "rozjechała
      // się" do generycznej gamy szarości.
      colors: {
        ink: "#17181C",
        accent: {
          DEFAULT: "#FF5A36",
          dark: "#E1471F",
        },
        bg: "#F4F2ED",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      borderRadius: {
        DEFAULT: "4px",
      },
    },
  },
  plugins: [],
};
export default config;
