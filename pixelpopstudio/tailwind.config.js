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
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        light: {
          background: '#FFF6E3',
          text: '#192A51',
          header: '#B1CCE4',
          footer: '#B1CCE4',
          menuBackground: '#FB6FC6',
          menuText: '#192A51',
          sectionPrimary: '#FB6FC6',
          sectionSecondary: '#FFF6E3',
        },
        dark: {
          background: '#7493AF',
          text: '#192A51',
          header: '#192A51',
          footer: '#192A51',
          menuBackground: '#192A51',
          menuText: '#7493AF',
          sectionPrimary: 'rgba(25, 42, 81, 0.9)',
          sectionSecondary: '#7493AF',
          packagesBackground: '#B1CCE4',
        },
      },
      scale: {
        '60': '0.60', // 60% of the original size
        '65': '0.65', // 65% of the original size
        '75': '0.75', // 75% of the original size
        '85': '0.85', // 85% of the original size
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.clip-path-custom-header': {
          clipPath: 'polygon(0% 0%, 0 98%, 7% 24%, 17% 41%, 21% 12%, 30% 42%, 33% 23%, 46% 76%, 53% 27%, 90% 75%, 69% 17%, 100% 0)',
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
