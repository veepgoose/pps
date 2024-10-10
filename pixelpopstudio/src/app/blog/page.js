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
    className="relative bg-[url('/GraphBackground.png')] bg-cover bg-no-repeat bg-center min-h-screen" 
  >
      <SiteHeader theme={theme} />
      {/* <div className="flex justify-center my-10">
      <img src="/Blog..png" alt="About Header Text"/>
      </div> */}

      <main className="flex flex-col items-center justify-center min-h-screen">   
      <div className="flex justify-center my-10">
      <img src="/Coming Soon..png" alt="About Header Text"/>
      </div>
      </main>
      


      <Footer theme={theme} />
    </div>
  );
}
