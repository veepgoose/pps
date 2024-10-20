import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link'; // Import Link from Next.js
import MenuAlt from './MenuAlt';
import { topLineVariant, bottomLineVariant } from '@/utils/motion';

const SiteHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative">
      {/* Navigation Bar */}
      <div className="min-h-20 w-full lg:min-h-28"> {/* Adjust height for shorter header */}
        <div className="absolute inset-x-0 top-3 px-4">
          <header className="flex justify-between items-center">
            {/* Logo */}
            <motion.div
              className="w-2/5 lg:w-1/6 z-20" // Larger size for desktop
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
            >
              <Link href="/"> {/* Wrap Image with Link */}
                <Image 
                  src="/PIXEL.POP.STUDIO.png" 
                  alt="Pixel Pop Studio Logo"
                  width={500} // Adjust the size to make it larger
                  height={100}
                  layout="responsive"
                />
              </Link>
            </motion.div>

            {/* Nav Links (Desktop) */}
            <nav className="hidden lg:flex space-x-10 text-lg font-black font-mono">
              <a href="/#services" className="hover:text-[#FCFF6C] transition-colors">Services</a>
              <a href="/#about" className="hover:text-[#FCFF6C] transition-colors">About</a>
              <a href="/#packages" className="hover:text-[#FCFF6C] transition-colors">Packages</a>
              <a href="/#contact" className="hover:text-[#FCFF6C] transition-colors">Contact</a>
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

      {/* Mobile Menu handled by Menu.js */}
      <MenuAlt isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </div>
  );
};

export default SiteHeader;
