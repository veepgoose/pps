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
          menuBackground: '#FB6FC6',  // Add custom menu colors
          menuText: '#192A51',
        },
        dark: {
          background: '#7493AF',
          text: '#192A51',
          header: '#7493AF',
          menuBackground: '#192A51',  // Add custom menu colors
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

