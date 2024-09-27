'use client';

import { useState, useEffect } from 'react';
import LandingHeader from '@/components/LandingHeader';
import Footer from '@/components/Footer';
import LandingPageGraphic from '@/components/LandingPageGraphic';

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
      <div className="flex-grow p-40 bg-light-background dark:bg-dark-background">
        <LandingPageGraphic />
      </div>

      {/* Footer naturally placed at the bottom */}
      <Footer theme={theme} />
    </div>
  );
}
