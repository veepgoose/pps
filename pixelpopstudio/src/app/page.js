// app/page.js
'use client';

import { useState, useEffect } from 'react';
import LandingHeader from '@/components/LandingHeader';


export default function Home() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDarkMode ? 'dark' : 'light');
  }, []);

  return (
    <div className={`min-h-screen bg-light-background dark:bg-dark-background`}>
      <LandingHeader theme={theme} />
      <main className="p-40">
        <h1 className={`text-8xl font-bold text-right mt-0 mb-5 text-light-text dark:text-dark-text`}>
          Creative<br />Web<br />Design
        </h1>

        {/* Add more content as needed */}
      </main>
    </div>
  );
}