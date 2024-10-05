'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Footer from '@/components/Footer';
import SiteHeader from '@/components/SiteHeader';

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

        {/* Profile Image */}
        <Image
          src="/ProfilePic.png" // Replace with actual image path
          alt="Profile Image"
          width={250}
          height={250}
          className="rounded-full mt-8"
        />

        {/* Text Box */}
        <div className="bg-dark-background border-4 border-black p-6 mt-8 mb-16 max-w-3xl">
          <div className="p-8 text-center bg-light-header dark:bg-menu-background text-light-text dark:text-dark-text border-4 border-black">
            <p className="text-l">
              Pixel Pop Studios was founded in 2024 by Victoria Platt, after 11 years of running successful businesses in the Wine industry. Vic decided to make a life-changing career switch into the world of Tech and learned how to code. Utilizing her background in design after graduating from BCU with a degree in Fine Art, Vic offers a unique blend of experience in Design, Business, and Coding.
              Pixel Pop Studios was founded in 2024 by Victoria Platt, after 11 years of running successful businesses in the Wine industry. Vic decided to make a life-changing career switch into the world of Tech and learned how to code. Utilizing her background in design after graduating from BCU with a degree in Fine Art, Vic offers a unique blend of experience in Design, Business, and Coding.
              Pixel Pop Studios was founded in 2024 by Victoria Platt, after 11 years of running successful businesses in the Wine industry. Vic decided to make a life-changing career switch into the world of Tech and learned how to code. Utilizing her background in design after graduating from BCU with a degree in Fine Art, Vic offers a unique blend of experience in Design, Business, and Coding.
              {/* ... (rest of the text) ... */}
            </p>
          </div>
        </div>
      </div>
      <Footer theme={theme} />
    </div>
  );
}
