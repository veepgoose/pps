import React, { useState } from 'react';
import { motion } from 'framer-motion';  // Import Framer Motion
import ThemeToggle from './ThemeToggle';
import Menu from './Menu';
import LPLogo from './LPLogo';
import { h1Variant } from '@/utils/motion';  // Import the h1 animation variant

// Animation for the burger menu icon
const burgerVariant = {
  open: { rotate: 45, y: 5, transition: { duration: 0.3 } },
  closed: { rotate: 0, y: 0, transition: { duration: 0.3 } }
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative">
      {/* Navigation Bar */}
      <div className="min-h-20 w-full lg:min-h-36">
        <div className="absolute top-3 inset-x-0 px-4">
          <header className="flex justify-between items-center">
            {/* Logo */}
            <div className="text-xl font-bold">
              <a href="#home">PIXEL.POP.STUDIO</a>
            </div>
            
            {/* Nav Links (Desktop) */}
            <nav className="hidden lg:flex space-x-6 text-lg font-black font-mono">
              <a href="#services" className="hover:underline">Services</a>
              <a href="#about" className="hover:underline">About</a>
              <a href="#packages" className="hover:underline">Packages</a>
              <a href="#contact" className="hover:underline">Contact</a>
            </nav>

            {/* Burger Menu Icon (Mobile) */}
            <div className="lg:hidden flex items-center">
              <motion.div
                className="w-8 h-8 bg-transparent cursor-pointer flex flex-col justify-between"
                onClick={toggleMenu}
              >
                <motion.span
                  className="block h-1 bg-black"
                  animate={isMenuOpen ? "open" : "closed"}
                  variants={burgerVariant}
                />
                <motion.span
                  className="block h-1 bg-black"
                  animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="block h-1 bg-black"
                  animate={isMenuOpen ? "open" : "closed"}
                  variants={burgerVariant}
                />
              </motion.div>
            </div>
          </header>
        </div>
      </div>
      
      <div className="flex justify-center mt-6">
        {/* Animate the h1 text */}
        <motion.h1
          className="text-3xl lg:text-6xl font-mono font-black text-center text-[#FB6FC6] drop-shadow-2xl text-shadow-custom-yellow-mobile lg:text-shadow-custom-yellow"
          variants={h1Variant}  // Apply the motion variant
          initial="initial"
          animate="animate"
        >
          PIXEL.POP.STUDIO
        </motion.h1>
      </div>
      
      {/* Mobile Menu (Shown when burger is clicked) */}
      {isMenuOpen && (
        <div className="absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-80 flex flex-col items-center justify-center z-50">
          <nav className="space-y-8 text-white font-mono font-black text-2xl">
            <a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#packages" onClick={() => setIsMenuOpen(false)}>Packages</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
          </nav>
        </div>
      )}
      
      <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </div>
  );
};

export default Header;


