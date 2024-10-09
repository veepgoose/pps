'use client';

import { useState, useEffect } from 'react';
import Footer from '@/components/Footer';
import SiteHeader from '@/components/SiteHeader';
import PackageSection from '@/components/PackageSection';
import PackagesCarousel from '@/components/PackagesCarousel';
import ThemeToggle from '@/components/ThemeToggle';
import { packages } from '@/data/packagesData';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

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

      <PackagesCarousel theme={darkMode ? 'dark' : 'light'} />

      <div className="sticky top-0 z-50 bg-[#B1CCE4] p-4">
        <div className="flex justify-center space-x-8">
          <a href="#pixelpopjumpstart" className="text-lg font-bold hover:underline">Jumpstart</a>
          <a href="#pixelpoppro" className="text-lg font-bold hover:underline">Pro</a>
          <a href="#pixelpopshop" className="text-lg font-bold hover:underline">Shop</a>
          <a href="#pixelpoppower" className="text-lg font-bold hover:underline">Power</a>
        </div>
      </div>

      {packages.map((pkg) => (
        <PackageSection key={pkg.id} pkg={pkg} theme={darkMode ? 'dark' : 'light'} />
      ))}

      <Footer theme={darkMode ? 'dark' : 'light'} />
    </div>
  );
}
