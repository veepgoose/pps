import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import Menu from './Menu';
import Image from 'next/image';  // Import Image component
import { h1Variant } from '@/utils/motion';

// Animation for the two-line burger menu icon
const topLineVariant = {
  open: { rotate: 45, y: 6, transition: { duration: 0.3 } },
  closed: { rotate: 0, y: 0, transition: { duration: 0.3 } }
};

const bottomLineVariant = {
  open: { rotate: -45, y: -6, transition: { duration: 0.3 } },
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
          <header className="flex justify-end items-center"> {/* Align everything to the right */}
            {/* Nav Links (Desktop) */}
            <nav className="hidden lg:flex space-x-10 text-lg font-black font-mono">
              <a href="#services" className="hover:text-[#FCFF6C] transition-colors">Services</a>
              <a href="#about" className="hover:text-[#FCFF6C] transition-colors">About</a>
              <a href="#packages" className="hover:text-[#FCFF6C] transition-colors">Packages</a>
              <a href="#contact" className="hover:text-[#FCFF6C] transition-colors">Contact</a>
            </nav>

            {/* Burger Menu Icon (Mobile) */}
            <div className="lg:hidden flex items-center ml-4">
              <motion.div
                className="w-8 h-3 bg-transparent cursor-pointer flex flex-col justify-between"
                onClick={toggleMenu}
              >
                {/* Top line */}
                <motion.span
                  className="block h-0.5 w-full bg-[#192A51]"
                  animate={isMenuOpen ? "open" : "closed"}
                  variants={topLineVariant}
                />
                {/* Bottom line */}
                <motion.span
                  className="block h-0.5 w-full bg-[#192A51]"
                  animate={isMenuOpen ? "open" : "closed"}
                  variants={bottomLineVariant}
                />
              </motion.div>
            </div>
          </header>
        </div>
      </div>

      <div className="flex justify-center mt-6">
        {/* Replace the h1 text with the image (centered with motion animation) */}
        <motion.div
  className="w-2/3 lg:w-2/6 z-20"
  variants={h1Variant}
  initial="initial"
  animate="animate"
>
  <h1 className="text-6xl lg:text-9xl leading-loose lg:tracking-widest lg:leading-snug text-center font-extrabold font-karla text-[#192A51]">
    PIXEL POP STUDIO
  </h1>
</motion.div>

      </div>

      {/* Mobile Menu (Shown when burger is clicked) */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-80 flex flex-col items-center justify-center z-50">
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







