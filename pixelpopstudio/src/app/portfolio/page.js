'use client';

import { useState, useEffect } from 'react';
import Footer from '@/components/Footer';
import SiteHeader from '@/components/SiteHeader';
import PortfolioSection from '@/components/PortfolioSection';
import PortfolioCarousel from '@/components/PortfolioCarousel';
import ThemeToggle from '@/components/ThemeToggle';
import { portfolio } from '@/data/portfolioData';
import Menu from '@/components/Menu';


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    setDarkMode(savedTheme === 'dark');
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  

  return (
    <div className={`relative min-h-screen flex flex-col ${darkMode ? 'bg-[#7493AF]' : 'bg-[#FFF6E3]'}`}>
      <SiteHeader>
        <ThemeToggle darkMode={darkMode} toggleTheme={toggleTheme} />
      </SiteHeader>

      <PortfolioCarousel theme={darkMode ? 'dark' : 'light'} />

      <div className="sticky top-0 z-50 bg-[#B1CCE4] p-4">
  <div className="flex items-center w-full max-w-screen-lg mx-auto relative">
    
    {/* Centered Navigation Links */}
    <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-8">
      <a href="#example1" className="text-lg font-bold hover:underline">Example</a>
      <a href="#example2" className="text-lg font-bold hover:underline">Example</a>
      <a href="#example3" className="text-lg font-bold hover:underline">Example</a>
      <a href="#example4" className="text-lg font-bold hover:underline">Example</a>
    </div>

    {/* Menu button positioned on the far right */}
    <button
      onClick={() => setIsMenuOpen(true)}
      className="bg-transparent p-0 border-none cursor-pointer outline-none mt-1 ml-auto"
    >
      <svg width="60" height="60" viewBox="0 0 104 116" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="62.5" cy="74.5" r="41.5" fill="black" />
        <circle cx="48" cy="48" r="44" fill="#FB6FC6" stroke="black" strokeWidth="6" />
        <rect x="21" y="45" width="54" height="6" fill="black" />
        <rect x="21" y="59" width="54" height="6" fill="black" />
        <rect x="21" y="31" width="54" height="6" fill="black" />
      </svg>
    </button>
    
  </div>
</div>

<Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />



      {portfolio.map((portfolio) => (
        <PortfolioSection key={portfolio.id} pkg={portfolio} theme={darkMode ? 'dark' : 'light'} />
      ))}

      <Footer theme={darkMode ? 'dark' : 'light'} />
    </div>
  );
}
