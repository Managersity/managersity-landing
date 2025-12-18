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
        green: {
          dark: "#1a4d2e",
          medium: "#2d6a4f",
          light: "#40916c",
        },
        gold: {
          dark: "#b8860b",
          medium: "#d4a012",
          light: "#f4c430",
        },
        cream: "#faf8f5",
        charcoal: "#1a1a1a",
      },
      animation: {
        "float": "float 20s ease-in-out infinite",
        "pulse-slow": "pulse-slow 4s ease-in-out infinite",
        "bounce-slow": "bounce-slow 2s ease-in-out infinite",
        "shimmer": "shimmer 2s infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translate(0, 0) rotate(0deg)" },
          "33%": { transform: "translate(30px, -30px) rotate(5deg)" },
          "66%": { transform: "translate(-20px, 20px) rotate(-5deg)" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "0.5", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.1)" },
        },
        "bounce-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
