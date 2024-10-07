'use client';

import { useState, useEffect } from 'react';

import Footer from '@/components/Footer';
import SiteHeader from '@/components/SiteHeader';
import PackagesCarousel from '@/components/PackagesCarousel';

export default function Home() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDarkMode ? 'dark' : 'light');
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col">
      <SiteHeader theme={theme} />

      <div className="flex-grow flex flex-col items-center justify-start pt-24">
      <h1 className="text-4xl font-bold mb-8">Packages</h1>
        <PackagesCarousel />
      </div>

      <Footer theme={theme} />
    </div>
  );
}
