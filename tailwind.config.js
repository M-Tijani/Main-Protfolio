/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#197278",
        primary_glow: "#21a7ab",
        secondary: "#175358",
        dark: "#252525",
        light: "#F0F0F0",
        box: "#131313",
      },
      fontFamily: {
        Jetbrain: ["JetBrainsMono", "sans-serif"],
      },
    },
  },
  plugins: [],
};
