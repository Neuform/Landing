/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      'primary_bright':'#EAF0F1',
      'secondary_bright':'#5d17eb',
      'accent_red':'#FF362E'

      }
    }
  },
  plugins: [],
}