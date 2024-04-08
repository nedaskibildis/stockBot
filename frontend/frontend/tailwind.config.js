/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainWhite: '#ccc5b9',
        mainBlack: '#252422',
        mainPurple: '#3a0ca3',
      }
    },
  },
  plugins: [],
}

