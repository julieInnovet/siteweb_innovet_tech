const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eef8f7",
          100: "#d5eeeb",
          200: "#aee3de",
          300: "#87d7cf",
          400: "#5bbbab", // Couleur principale turquoise
          500: "#4aa394",
          600: "#3d8679",
          700: "#336b62",
          800: "#2c574f",
          900: "#264943",
        },
        secondary: {
          50: "#f3f5f8",
          100: "#e2e7ed",
          200: "#c5cfdc",
          300: "#9dadc3",
          400: "#7085a3",
          500: "#526785",
          600: "#3f506a",
          700: "#1b2e4d", // Couleur secondaire bleu foncé
          800: "#1a2640",
          900: "#182236",
        },
        neutral: {
          50: "#f9f9f9", // Couleur de fond principale
          100: "#f4f4f4",
          200: "#e9e9e9",
          300: "#d9d9d9",
          400: "#a3a3a3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
        },
      },
      fontFamily: {
        sans: ["Poppins", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
