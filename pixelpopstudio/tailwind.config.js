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
        sans: ['Inter', 'sans-serif', 'Karla', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      screens: {
        sm: '768px', // Tablets
        md: '1024px', // Small desktops
        lg: '1428px', // MacBook Air (unchanged)
        macbook: { raw: '(min-width: 1440px) and (max-width: 1529px)' }, // Stops before 1536px
        scaled: { raw: '(min-width: 1536px) and (max-width: 1599px)' }, // Only targets 1536px - 1599px
        xl: '1600px', // MacBook Pro Browser Viewport
        '2xl': '1920px', // Retina 4K, Curved Monitors
        ultrawide: '2560px', // UltraWide
        superwide: '3440px', // 34-inch UltraWide
      },
      
      
      
      colors: {
        light: {
          background: '#FFF6E3',
          text: '#192A51',
          header: '#7493AF',
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
        '60': '0.60',
        '65': '0.65',
        '75': '0.75',
        '85': '0.85',
      },
      backgroundImage: {
        'light-gradient': 'linear-gradient(to bottom, #B1CCE4, #FFF6E3)',
        'dark-gradient': 'linear-gradient(to bottom, #192A51, #7493AF)',
      },
      textShadow: {
        'custom-yellow-mobile': '2px 2px 0 rgba(252, 255, 108, 0.8)', // Mobile shadow
        'custom-yellow': '2px 4px 0 rgba(252, 255, 108, 0.7)', // Desktop shadow
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-custom-yellow-mobile': {
          textShadow: '2px 2px 0 rgba(252, 255, 108, 0.8)', // Mobile shadow
        },
        '.text-shadow-custom-yellow': {
          textShadow: '2px 4px 0 rgba(252, 255, 108, 0.7)', // Desktop shadow
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
