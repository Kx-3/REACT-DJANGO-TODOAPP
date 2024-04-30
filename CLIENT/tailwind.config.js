/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'ddr': 'Degular Display Regular, sans-serif',
        'dtm': 'Degular Text Medium, sans-serif',
        'dtr': 'Degular Text Regular, sans-serif',
      }
    },
  },
  plugins: [],
}

