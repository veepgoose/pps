import React from 'react';
import ThemeToggle from './ThemeToggle';
import Menu from './Menu';
import LPLogo from './LPLogo';
import { useState } from 'react';

const LandingHeader = ({ theme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative">
      {/* Blue header - increased height to h-48 (12rem or 192px) */}
      <div className="bg-[#B1CCE4] h-48 w-full relative">
        {/* Header content */}
        <div className="absolute top-3 left-0 right-0 pt-0 px-6">
          <header className="flex justify-between items-center">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(true)}
              className="bg-transparent p-0 border-none cursor-pointer outline-none"
            >
              <svg width="104" height="116" viewBox="0 0 104 116" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="62.5" cy="74.5" r="41.5" fill="#192A51" />
                <circle cx="48" cy="48" r="44" fill="#FB6FC6" stroke="black" strokeWidth="8" />
                <rect x="21" y="45" width="54" height="6" fill="black" />
                <rect x="21" y="59" width="54" height="6" fill="black" />
                <rect x="21" y="31" width="54" height="6" fill="black" />
              </svg>
            </button>
          </header>
        </div>
      </div>

      {/* Adjust LPLogo position with negative margin */}
      <div className="flex justify-center -mt-6"> {/* Adjust the -mt-* value as needed */}
        <LPLogo className="w-full h-auto" />
      </div>
      <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </div>
  );
};

export default LandingHeader;








