'use client';

import { useState, useEffect } from 'react';

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
    className="relative bg-[url('/GraphBackground.png')] bg-cover bg-no-repeat bg-center min-h-screen" 
  >
      <SiteHeader theme={theme} />

      <main className="flex flex-col items-center justify-center min-h-screen">   
        <h1 className="text-4xl font-bold mb-8">Pixel Pop Studio Blog</h1>
        <p className="text-xl text-center">
          Coming soon!
        </p>
      </main>
      


      <Footer theme={theme} />
    </div>
  );
}
