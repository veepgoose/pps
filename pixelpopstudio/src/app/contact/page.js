'use client';

import { useState, useEffect } from 'react';
import Footer from '@/components/Footer';
import SiteHeader from '@/components/SiteHeader';
import ContactForm from '@/components/ContactForm';

export default function Contact() {
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

      {/* Adjust the margin to control the gap between the PNG and the header */}
      <div className="flex flex-col items-center justify-start flex-grow mt-6 md:mt-10 lg:mt-20">
        {/* Increase the width of the PNG to 70% or 75% */}
        <img src="/Contact..png" alt="Contact Header Text" className="w-[50%] max-w-xs md:max-w-lg lg:w-[15%]" />

        {/* Contact form with more space between the form and footer on mobile */}
        <ContactForm />
      </div>

      <Footer theme={theme} />
    </div>
  );
}
