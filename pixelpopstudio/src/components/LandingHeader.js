import ThemeToggle from './ThemeToggle';
import Menu from './Menu';
import Image from 'next/image';
import { useState } from 'react';
import Footer from './Footer';
import AnimatedText from './AnimatedText';

export default function LandingHeader({ theme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div
      className="relative bg-[url('/GraphBackground.png')] bg-cover bg-no-repeat bg-center min-h-screen" 
    >
  

      <div className="absolute top-4 left-0 right-0 pt-0 px-6">
        <header className={`flex justify-between items-center text-${theme}-header`}>
          <ThemeToggle />
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
        </header>

        <div className="flex justify-center mt-">
          <div className="relative w-[300px] h-[200px] sm:w-[400px] sm:h-[300px] md:w-[500px] md:h-[400px] lg:w-[800px] lg:h-[420px]">
            <Image
              src="/PPSLogoMain.png"
              alt="Pixel Pop Studio Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
      <div className="absolute top-1/2 left-0 right-0">
        <AnimatedText />
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <Footer />
      </div>
      
      <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </div>
  );
}
