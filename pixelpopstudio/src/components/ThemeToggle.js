'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    setDarkMode(savedTheme === 'dark');
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  return (
    <motion.div
      className="cursor-pointer"
      onClick={toggleTheme}
      whileTap={{ scale: 1 }}
    >
      <svg width="56.25" height="35.25" viewBox="0 0 75 47" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Black shadow rectangle (stays black) */}
        <rect x="9" y="9" width="64" height="36" rx="18" fill="black" stroke="black" strokeWidth="4" />

        {/* Pink rectangle (changes color based on theme) */}
        <rect x="2" y="2" width="64" height="36" rx="18" fill={darkMode ? '#FB6FC6' : '#FB6FC6'} stroke="black" strokeWidth="4" />

        {/* Moving circle */}
        <motion.circle
          cx={darkMode ? 47 : 20} // Circle moves based on theme
          cy="20"
          r="13"
          fill="black"
          transition={{ duration: 0.5 }}
        />
      </svg>
    </motion.div>
  );
}