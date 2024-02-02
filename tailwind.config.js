/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        kanit: ['Kanit', 'sans-serif']
      },
      screens:{
        '3xl': '1620px',
      }
    },
  },
  plugins: [],
}