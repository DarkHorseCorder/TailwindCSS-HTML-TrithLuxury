/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/index.html', './src/faq.html', './src/services.html'],
  theme: {
    extend: {
      colors: {
        'logo-green': '#3EB27B',
      },
      screens: {
        'mobile-nav': { max: '830px' },
        // => @media (max-width: 830px) { ... }
        'mobile-hero': { max: '1000px' },
        // => @media (max-width: 1000px) { ... }
        'mobile': { max: '1150px' },
        // => @media (max-width: 1150px) { ... }
        'md': { max: '600px' },
        // => @media (max-width: 1150px) { ... }
        'footer': { max: '800px' },
        // => @media (max-width: 1150px) { ... }
      },
    },
  },
  plugins: [],
}