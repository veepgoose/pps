import React, { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import Menu from './Menu';
import LPLogo from './LPLogo';

const LandingHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative">
      <div className="bg-light-header dark:bg-dark-header min-h-20 w-full lg:min-h-36">
        <div className="absolute top-3 inset-x-0 px-4">
          <header className="flex justify-between items-center">
            <ThemeToggle className="self-start -mt-4" />
            <button
              onClick={() => setIsMenuOpen(true)}
              className="bg-transparent p-0 border-none cursor-pointer outline-none"
            >
              <svg width="50" height="50" viewBox="0 0 104 116" fill="none" xmlns="http://www.w3.org/2000/svg">
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
