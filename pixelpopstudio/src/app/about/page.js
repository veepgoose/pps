'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
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
    <div className="flex flex-col min-h-screen bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text">
      <SiteHeader theme={theme} setTheme={setTheme} />
      <div className="flex flex-col items-center justify-start flex-grow pt-24">
        <h1 className="text-4xl font-bold">About Page</h1>

        <ProfilePic />

        <AboutText />
      </div>
      <Footer theme={theme} />
    </div>
  );
}



//   {/* Profile Image */}
//   <Image
//   src="/ProfilePic.png" // Replace with actual image path
//   alt="Profile Image"
//   width={250}
//   height={250}
//   className="rounded-full mt-8"
// />