import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta landing page: jasne chłodne tło + granat + jeden akcent
        ink: {
          DEFAULT: "#10192B",
          muted: "#5E6B7E",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          soft: "#F7F8FA",
        },
        line: "#E4E8EE",
        accent: {
          DEFAULT: "#FF5A36",
          soft: "#FFE8E0",
          dark: "#E14620",
        },
        // Zachowane dla kompatybilności z Etapem 1
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
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
