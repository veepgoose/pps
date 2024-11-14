// utils/motion.js

export const starryHeroVariant1 = {
    initial: { opacity: 0, x: -200 },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 2,
        ease: 'easeInOut',
      },
    },
  };
  
  export const starryHeroVariant2 = {
    initial: { opacity: 0, x: 200 },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 2,
        ease: 'easeInOut',
      },
    },
  };
  

export const h1Variant = {
    initial: { opacity: 0, y: -50 },  // Start with the text above and invisible
    animate: {
      opacity: 1,
      y: 0,  // Slide down into its final position
      transition: {
        duration: 1.5,  // Adjust the duration for a smooth animation
        ease: 'easeOut',
      },
    },
  };
  
  // utils/motion.js

export const logoVariant = {
    initial: { opacity: 0, y: 100 },  // Start below the screen and invisible
    animate: {
      opacity: 1,
      y: 0,  // Slide up into its final position
      transition: {
        duration: 1.5,
        ease: 'easeOut',
      },
    },
  };

  export const topLineVariant = {
    open: { rotate: 45, y: 3, transition: { duration: 0.3 } },
    closed: { rotate: 0, y: 0, transition: { duration: 0.3 } }
  };
  
  export const bottomLineVariant = {
    open: { rotate: -45, y: 0, transition: { duration: 0.3 } },
    closed: { rotate: 0, y: 0, transition: { duration: 0.3 } }
  };
  
  // Define animation variants for the hills
  export const hillVariantLeft = {
    initial: { y: '100%', opacity: 0 },
    animate: {
      y: '0%',
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: 'easeOut',
        delay: 0.5, // Slightly earlier delay for the left hill
      },
    },
  };

  // Right Hill Animation Variant
export const hillVariantRight = {
  initial: { y: '100%', opacity: 0 },
  animate: {
    y: '0%',
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: 'easeOut',
      delay: 0.6, // Slightly later delay for the right hill
    },
  },
};

// Grass animation variant
export const grassVariant = {
  initial: { y: '100%', opacity: 0 },
  animate: {
    y: '0%',
    opacity: 1,
    transition: {
      duration: 1.5, // Adjust duration for smoothness
      ease: 'easeInOut',
      delay: 1.5, // Set delay to start after the hills
    },
  },
};
