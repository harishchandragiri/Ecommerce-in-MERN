/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sps': '400px',
        'mps': '500px',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}