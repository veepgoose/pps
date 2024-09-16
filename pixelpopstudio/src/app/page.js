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
  
    </div>
  );
}