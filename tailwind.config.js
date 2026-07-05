/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter Variable", "Inter", "system-ui", "sans-serif"],
        display: ["Bricolage Grotesque Variable", "Bricolage Grotesque", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};