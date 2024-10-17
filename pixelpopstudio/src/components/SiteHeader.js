import React, { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import Menu from './Menu';
import HeaderLogo from './HeaderLogo';

const SiteHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative">
      <div className=" h-36 w-full relative">
        <div className="absolute inset-x-0 top-3 px-4">
          <header className="flex justify-between items-start">
            <div className="flex flex-col items-start">
              <HeaderLogo className="-ml-1" />
              <div className="h-2"></div> {/* Adjustable spacer */}
              <ThemeToggle />
            </div>  
            <button
              onClick={() => setIsMenuOpen(true)}
              className="bg-transparent p-0 border-none cursor-pointer outline-none mt-1"
            >
              <svg width="60" height="60" viewBox="0 0 104 116" fill="none" xmlns="http://www.w3.org/2000/svg">
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
      <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </div>
  );
};

export default SiteHeader;