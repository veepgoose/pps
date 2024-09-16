import ThemeToggle from './ThemeToggle';
import Menu from './Menu';
import Image from 'next/image';
import { useState } from 'react';

export default function LandingHeader({ theme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1435 685"
        className="w-full h-auto"
        preserveAspectRatio="none"
      >
       <path
  d="M0.5 0H1439.5V117.5L1042.5 281L1330.5 661L758.5 315L686 592L486 342L362.5 512.5L244.5 390.5L0.5 682.5V0Z"
  className="fill-light-header dark:fill-dark-header" // Dynamically apply fill color for light and dark mode
/>

      </svg>

      <div className="absolute top-0 left-0 right-0 pt-0 px-6">
        <header className={`flex justify-between items-center text-${theme}-header`}>
          <ThemeToggle />
          <button
            onClick={() => setIsMenuOpen(true)}
            className="bg-transparent p-0 border-none cursor-pointer outline-none"
          >
             <Image
              src="/PPSMenuIcon.png"  
              alt="Open Menu"
              width={250} 
              height={250} 
              className="hover:opacity-80 transition-opacity duration-300"
            />
          </button>
        </header>
        <div className="flex justify-center mt-">
          <div className="relative w-[300px] h-[200px] sm:w-[400px] sm:h-[300px] md:w-[500px] md:h-[400px] lg:w-[800px] lg:h-[420px]">
            <Image
              src="/PixelPopStudioLogo.png"
              alt="Pixel Pop Studio Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
      <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </div>
  );
}

