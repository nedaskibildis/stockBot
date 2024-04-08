/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainWhite: '#FBFAFD',
        mainBlack: '#0C0221',
        mainPurple: '#3a0ca3',
        secondaryPurple: '#C4B6E3',
        borderPurple: '#8871BD'
      }
    },
  },
  plugins: [],
}

