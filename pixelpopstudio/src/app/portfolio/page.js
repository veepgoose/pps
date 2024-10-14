'use client';

import { useState, useEffect } from 'react';
import Footer from '@/components/Footer';
import SiteHeader from '@/components/SiteHeader';
import PortfolioSection from '@/components/PortfolioSection';
import PortfolioCarousel from '@/components/PortfolioCarousel';
import ThemeToggle from '@/components/ThemeToggle';
import { portfolio } from '@/data/portfolioData';
import Image from 'next/image';

export default function Portfolio() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
  };

  // Function to scroll to top of the page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`relative min-h-screen flex flex-col bg-light-background dark:bg-dark-background`}>
      <SiteHeader>
        <ThemeToggle darkMode={theme === 'dark'} toggleTheme={toggleTheme} />
      </SiteHeader>

      <div className="flex flex-col items-center justify-start flex-grow pt-24">
        <div className={`bg-light-background dark:bg-dark-background`}>
          <img src="/Portfolio..png" alt="Portfolio Header" width={350} />
        </div>
      </div>

      {/* Portfolio Carousel */}
      <PortfolioCarousel theme={theme} />

      {/* Sticky Navigation with Top Icon */}
      <div className="sticky top-0 z-50 bg-[#B1CCE4] p-4">
        <div className="flex items-center w-full max-w-screen-lg mx-auto relative">
          {/* Centered Navigation Links */}
          <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-8">
            <a href="#example1" className="text-lg font-bold hover:underline">Example</a>
            <a href="#example2" className="text-lg font-bold hover:underline">Example</a>
            <a href="#example3" className="text-lg font-bold hover:underline">Example</a>
            <a href="#example4" className="text-lg font-bold hover:underline">Example</a>
          </div>

          {/* Top Icon positioned on the far right */}
          <div className="ml-auto">
            <button
              onClick={scrollToTop}
              className="bg-transparent p-0 border-none cursor-pointer outline-none mt-1"
            >
              <Image src="/TopIcon.svg" alt="Top Icon" width={40} height={40} />
            </button>
          </div>
        </div>
      </div>

      {/* Portfolio Sections */}
      {portfolio.map((portfolio) => (
        <PortfolioSection key={portfolio.id} pkg={portfolio} theme={theme} />
      ))}

      <Footer theme={theme} />
    </div>
  );
}
