'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
import Image from 'next/image'; // Import Image component
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Services from '@/components/Services';
import MiniAbout from '@/components/MiniAbout';
import MiniPackages from '@/components/MiniPackages';
import CallToAction from '@/components/CallToAction';
import ContactForm from '@/components/ContactForm';
import { starryHeroVariant1, starryHeroVariant2, logoVariant } from '@/utils/motion'; // Import motion variants

// Animation variants for the clouds
const cloudVariant = {
  initial: { opacity: 0, x: '-100vw' },
  animate: { opacity: 1, x: 0, transition: { duration: 2, ease: 'easeInOut' } }
};

const cloudVariantRight = {
  initial: { opacity: 0, x: '100vw' },
  animate: { opacity: 1, x: 0, transition: { duration: 2, ease: 'easeInOut' } }
};

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
      <div className="relative flex flex-col flex-grow min-h-screen bg-gradient-to-b from-light-header to-light-sectionPrimary dark:from-dark-background dark:to-dark-footer">
        {/* Header */}
        <Header theme={theme} />

        {/* Animated Clouds */}
        <motion.div
  className="absolute top-[20%] left-[2%] w-1/4 sm:top-[30%] sm:left-[5%] md:left-[10%] z-10" // Changes only on mobile
  variants={cloudVariant}
  initial="initial"
  animate="animate"
>
  <Image src="/Cloud.svg" alt="Cloud" width={300} height={150} />
</motion.div>

<motion.div
  className="absolute top-[7%] left-[17%] w-1/6 sm:top-[10%] sm:left-[15%] md:left-[30%] z-10" // Adjusted only for mobile
  variants={cloudVariant}
  initial="initial"
  animate="animate"
>
  <Image src="/Cloud.svg" alt="Small Cloud" width={150} height={75} />
</motion.div>

<motion.div
  className="absolute top-[20%] right-[2%] w-1/4 sm:top-[30%] sm:right-[8%] md:right-[5%] z-10" // Preserves desktop, changes mobile
  variants={cloudVariantRight}
  initial="initial"
  animate="animate"
>
  <Image src="/Cloud.svg" alt="Cloud" width={300} height={150} />
</motion.div>

<motion.div
  className="absolute top-[7%] right-[17%] w-1/6 sm:top-[10%] sm:right-[20%] md:right-[24%] z-10" // Mobile-specific changes
  variants={cloudVariantRight}
  initial="initial"
  animate="animate"
>
  <Image src="/Cloud.svg" alt="Small Cloud" width={150} height={75} />
</motion.div>

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
