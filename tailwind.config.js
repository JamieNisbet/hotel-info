/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        backgroundImage: {
          'hero-pattern': "url('/img/hotel-pierpont-welcome.jpeg')",
          'footer-texture': "url('/img/footer-texture.png')",
        }
    },
  },
  plugins: [],
}