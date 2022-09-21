/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        wood: 'url(/wood.jpg)',
        'gradient-brown':
          ' linear-gradient(145deg,rgba(36, 13, 0, 1) 0%,rgba(239, 240, 185, 1) 45%,rgb(56, 49, 26) 100%)',
      },
    },
  },
  plugins: [],
};
