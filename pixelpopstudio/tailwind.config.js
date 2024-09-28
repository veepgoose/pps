// tailwind.config.js
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Set Inter as the default sans-serif font
      },
      colors: {
        light: {
          background: '#FFF6E3',
          text: '#192A51',
          header: '#B1CCE4',
          footer: '#B1CCE4',  // Added footer color for light mode
          menuBackground: '#FB6FC6',
          menuText: '#192A51',
        },
        dark: {
          background: '#7493AF',
          text: '#192A51',
          header: '#192A51',  // Header color for dark mode
          footer: '#192A51',  // Footer color for dark mode
          menuBackground: '#B1CCE4',
          menuText: '#B1CCE4',
        },
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.clip-path-custom-header': {
          clipPath: 'polygon(0% 0%, 0 98%, 7% 24%, 17% 41%, 21% 12%, 30% 42%, 33% 23%, 46% 76%, 53% 27%, 90% 75%, 69% 17%, 100% 0)',
        },
      }
      addUtilities(newUtilities)
    },
  ],
};
