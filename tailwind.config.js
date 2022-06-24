/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'serif'],
      },
      colors: {
        'jade-100': 'rgba(223,248,232)',
        'jade-600': 'rgba(89,176,138)',
        'jade-700': 'rgba(88,165,137)',
        'jade-800': 'rgba(74, 140, 116)',
        'olive-400': 'rgba(183,199,107)',
        'carbon-100': 'rgba(219,219,219)',
        'carbon-200': 'rgba(188,188,188)',
        'carbon-400': 'rgba(150, 150, 150)',
        'carbon-500': 'rgba(112, 112, 112)',
        'carbon-700': 'rgba(49, 49, 49)',
      },
    },
  },
  plugins: [],
};
