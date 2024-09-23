/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        cinzeldecorative: ['"Cinzel Decorative"', 'serif'], 
        cinzel: ['"Cinzel"', 'serif'],
      },
    },
  },
  plugins: [],
}

