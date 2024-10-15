'use client';

import { useState, useEffect } from 'react';
import LandingHeader from '@/components/LandingHeader';
import Footer from '@/components/Footer';
import LandingPageGraphic from '@/components/LandingPageGraphic';
import ECommerce from '@/components/ECommerce';
import BrandIdentity from '@/components/BrandIdentity';

export default function Home() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDarkMode ? 'dark' : 'light');
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <LandingHeader theme={theme} />

      {/* Main content should grow to push footer to the bottom */}
      <div className="flex flex-col lg:flex-row flex-grow justify-center items-center lg:items-stretch bg-light-background dark:bg-dark-background">
  {/* Hide ECommerce and BrandIdentity on mobile */}
  <ECommerce />
  <LandingPageGraphic />
  <BrandIdentity />
</div>

      {/* Footer naturally placed at the bottom */}
      <Footer theme={theme} />
    </div>
  );
}
