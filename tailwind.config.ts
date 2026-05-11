import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "SF Pro Display",
          "SF Pro Text",
          "Segoe UI",
          "system-ui",
          "sans-serif"
        ]
      },
      boxShadow: {
        glass: "0 28px 80px rgba(24, 32, 44, 0.10)",
        glow: "0 0 44px rgba(84, 186, 165, 0.22)"
      }
    }
  },
  plugins: []
};

export default config;
