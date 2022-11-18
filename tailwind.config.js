/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'order-card': "url('/images/bg-ordercard.png')",
      },
      colors: {
        'pink-caption': '#F4894A',
      },
    },
  },
  plugins: [],
}