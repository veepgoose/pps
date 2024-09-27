'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

import Footer from '@/components/Footer';
import SiteHeader from '@/components/SiteHeader';

export default function Home() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDarkMode ? 'dark' : 'light');
  }, []);

  return (
    <div
      className={`relative bg-cover bg-no-repeat bg-center min-h-screen font-sans 
      ${theme === 'dark' ? 'bg-dark-background text-dark-text' : 'bg-light-background text-light-text'} 
      bg-[url('/GraphBackground.png')]`}
    >
      <SiteHeader theme={theme} />
      <div className="flex flex-col items-center justify-start min-h-screen pt-24">
        <h1 className="text-4xl font-bold">About Page</h1>

        {/* Profile Image */}
        <Image
          src="/ProfilePic.png" // Replace with actual image path
          alt="Profile Image"
          width={250}
          height={250}
          className="rounded-full mt-8"
        />

        {/* Text Box */}
        <div className="mt-8 p-6 rounded-lg shadow-lg max-w-4xl text-center
          bg-dark-background 800 dark:bg-dark-background text-dark-text dark:text-light-text">
          <p className="text-2xl">
          Pixel Pop Studios was founded in 2024 by Victoria Platt, after 11 years of running successful businesses in the Wine industry,  Vic decided to make a life changing career switch into the world of Tech, and learned how to code. Utilising her background in design after graduating from BCU with a degree in Fine Art. Vic offers a unique blend of  experience in Design, Business, and Coding. 
          </p>
        </div>

      </div>
      <Footer theme={theme} />
    </div>
  );
}
