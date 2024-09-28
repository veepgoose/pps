import React, { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import Menu from './Menu';
import LPLogo from './LPLogo';

const LandingHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative">
      {/* Header background color changes based on theme */}
      <div className="bg-light-header dark:bg-dark-header h-36 w-full relative">
        <div className="absolute top-0 left-0 right-0 pt-0 px-4">
          <header className="flex justify-between items-center">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(true)}
              className="bg-transparent p-0 border-none cursor-pointer outline-none"
            >
              {/* Your SVG for the menu */}
              <svg width="60" height="116" viewBox="0 0 104 116" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="62.5" cy="74.5" r="41.5" fill="black" />
                <circle cx="48" cy="48" r="44" fill="#FB6FC6" stroke="black" strokeWidth="6" />
                <rect x="21" y="45" width="54" height="6" fill="black" />
                <rect x="21" y="59" width="54" height="6" fill="black" />
                <rect x="21" y="31" width="54" height="6" fill="black" />
              </svg>
            </button>
          </header>
        </div>
      </div>
      <div className="flex justify-center mt-6">
        <LPLogo />
      </div>
      <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </div>
  );
};

export default LandingHeader;
