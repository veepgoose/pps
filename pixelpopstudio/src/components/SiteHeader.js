'use client';

import Image from 'next/image';
import { useState } from 'react';
import Menu from './Menu';

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex justify-between items-center p-5">
      <div className="relative w-[100px] h-[50px]">
        <Image
          src="/PixelPopStudioLogo.png"
          alt="Pixel Pop Studio Logo"
          fill
          className="object-contain"
          priority
        />
      </div>
      <button 
        onClick={() => setIsMenuOpen(true)} 
        className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-md cursor-pointer"
      >
        Open Menu
      </button>
      <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
}