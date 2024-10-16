'use client';

import { useState, useEffect } from 'react';
import Footer from '@/components/Footer';
import SiteHeader from '@/components/SiteHeader';
import AboutText from '@/components/AboutText';
import ProfilePic from '@/components/ProfilePic';

export default function About() {
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
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-light-header to-light-background dark:from-dark-footer dark:to-dark-background">
      <SiteHeader theme={theme} setTheme={setTheme} />

      <div className="flex flex-col items-center justify-start flex-grow pt-12 md:pt-24">
        <img 
          src="/About..png" 
          alt="About Header Text" 
          className="w-2/5 max-w-xs md:max-w-lg lg:max-w-60"
        />
        <ProfilePic />
        <AboutText />
      </div>

      <Footer theme={theme} />
    </div>
  );
}
