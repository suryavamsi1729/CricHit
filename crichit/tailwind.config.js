/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      display: ["Dancing Script", "cursive"],
    },
    borderRadius: {
      round: "50%"
    },
  },
  plugins: [],
}