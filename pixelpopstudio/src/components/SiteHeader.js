'use client';

import Image from 'next/image';
import { useState } from 'react';
import Menu from './Menu';

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
  //   <div
  //   className="relative bg-[url('/GraphBackground.png')] bg-cover bg-no-repeat bg-center min-h-screen" 
  // >
    <header className="flex justify-between items-center p-5">
      <div className="relative w-[100px] h-[50px]">
        <Image
          src="/P.P.SLogo.png"
          alt="Pixel Pop Studio Logo"
          fill
          className="object-contain"
          priority
        />
      </div>
      <button
            onClick={() => setIsMenuOpen(true)}
            className="bg-transparent p-0 border-none cursor-pointer outline-none"
          >
            <Image
              src="/MenuIcon.png"  
              alt="Open Menu"
              width={50}
              height={50}
              className="hover:opacity-80 transition-opacity duration-300"
            />
          </button>
      <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
    // </div>
  );
}