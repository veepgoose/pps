'use client';

import { useState, useEffect } from 'react';
import Footer from '@/components/Footer';
import SiteHeader from '@/components/SiteHeader';
import PackageSection from '@/components/PackageSection';
import PackagesCarousel from '@/components/PackagesCarousel';
import { packages } from '@/data/packagesData';

export default function Home() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDarkMode ? 'dark' : 'light');
  }, []);

  return (
    <div className={`relative min-h-screen flex flex-col ${theme === 'dark' ? 'bg-[#7493AF]' : 'bg-[#FFF6E3]'}`}>
      <SiteHeader theme={theme} />

      <PackagesCarousel /> {/* Keep PackagesCarousel at the top */}

      <div className="sticky top-0 z-50 bg-white p-4">
        <div className="flex justify-center space-x-8">
          {/* Nav links - matching section IDs */}
          <a href="#pixelpopjumpstart" className="text-lg font-bold hover:underline">Jumpstart</a>
          <a href="#pixelpoppro" className="text-lg font-bold hover:underline">Pro</a>
          <a href="#pixelpopshop" className="text-lg font-bold hover:underline">Shop</a>
          <a href="#pixelpoppower" className="text-lg font-bold hover:underline">Power</a>
        </div>
      </div>

      {/* Package sections */}
      {packages.map((pkg) => (
        <PackageSection key={pkg.id} pkg={pkg} theme={theme} />
      ))}

      <Footer theme={theme} />
    </div>
  );
}
