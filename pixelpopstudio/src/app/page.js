'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';  // Import Framer Motion
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Services from '@/components/Services';
import MiniAbout from '@/components/MiniAbout';
import MiniPackages from '@/components/MiniPackages';
import CallToAction from '@/components/CallToAction';
import ContactForm from '@/components/ContactForm';
import { starryHeroVariant1, starryHeroVariant2, logoVariant } from '@/utils/motion';  // Import motion variants

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
    <div className="flex flex-col min-h-screen overflow-hidden relative">
      
      {/* Hero Section */}
      <div className="relative flex flex-col flex-grow min-h-screen bg-gradient-to-b from-light-footer to-light-menuText dark:from-dark-background dark:to-dark-footer">
        {/* Header */}
        <Header theme={theme} />
        
        <div className="flex flex-col lg:flex-row flex-grow justify-center items-center space-y-8 lg:space-y-0 relative z-10">
          {/* Animate the logo */}
          <motion.img 
            src="/LandingPageLogo.png" 
            alt="Landing page graphic" 
            className="w-1/2 lg:w-1/6 lg:h-auto"
            variants={logoVariant}  // Apply the motion variant
            initial="initial"
            animate="animate"
          />
        </div>

        {/* Starry background with animation */}
        <motion.div className="absolute inset-0 w-full h-full flex justify-center items-center z-0 pointer-events-none overflow-hidden">
          <motion.img
            src="/starrySky1.svg"
            alt="Starry background 1"
            className="absolute left-0 w-1/2 h-full object-cover opacity-40"
            variants={starryHeroVariant1}
            initial="initial"
            animate="animate"
          />
          <motion.img
            src="/starrySky2.svg"
            alt="Starry background 2"
            className="absolute right-0 w-1/2 h-full object-cover opacity-40"
            variants={starryHeroVariant2}
            initial="initial"
            animate="animate"
          />
        </motion.div>
      </div>

    
       {/* Services Section */}
       <div id="services">
        <Services />
      </div>
     
       {/* About Section */}
       <div id="about">
        <MiniAbout />
      </div>

        {/* Packages Section */}
      <div id="packages">
        <MiniPackages />
      </div>
      
      <CallToAction />

       {/* Contact */}
       <div id="contact">
       <ContactForm />
      </div>
     

      {/* Footer */}
      <Footer theme={theme} />
    </div>
  );
}
