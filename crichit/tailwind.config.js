/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      display: ["Dancing Script", "cursive"],
      rubik: ["Rubik", "cursive"]
    },
    borderRadius: {
      round: "50%"
    },
    extend: {
      colors: {
        'primarybgred': '#CB0164',
        'primarybgdark': '#00002E'
      },
    }
  },
  plugins: [],
}