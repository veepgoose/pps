'use client';

import { useState, useEffect } from 'react';
import FooterAlt from '@/components/FooterAlt';
import SiteHeader from '@/components/SiteHeader';
import ThemeToggle from '@/components/ThemeToggle';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Motion Variants for the starry background, heading, and icon animation
const starryHeroVariant1 = {
  initial: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0, transition: { duration: 2 } },
};

const starryHeroVariant2 = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0, transition: { duration: 2 } },
};

const contentVariant = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const iconVariant = {
  initial: { opacity: 0, y: -100 },
  animate: { opacity: 1, y: 0, transition: { duration: 1.5 } },
};

export default function ShopPackage() {

  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-light-header to-light-footer">
      <SiteHeader>
        <ThemeToggle darkMode={theme === 'dark'} toggleTheme={toggleTheme} />
      </SiteHeader>
      
      {/* Starry Background Section */}
      <div className="relative flex flex-col items-center justify-start flex-grow pt-16 pb-2 md:pt-24 lg:-mt-6 lg:pb-8">
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

        {/* Shop Icon with animation */}
        <motion.div
          className="relative z-10 w-2/6 md:w-2/3 lg:w-1/6"
          variants={iconVariant}
          initial="initial"
          animate="animate"
        >
          <Image 
            src="/ShopIcon.png" 
            alt="Pixel Pop Shop Package" 
            width={150} 
            height={100} 
            layout="responsive" 
          />
        </motion.div>

        {/* Heading, subtext, and pricing */}
        <motion.div
          className="relative z-10 text-center mt-8"
          variants={contentVariant}
          initial="initial"
          animate="animate"
        >
          <h1 className="text-2xl font-bold mb-4">Pixel Pop Shop</h1>
          <p className="italic mb-2">Bring your store online with a powerful e-commerce solution</p>
          <p className="text-2xl font-bold">£2,499</p>
        </motion.div>
      </div>

      {/* Main Content Section */}
      <motion.div 
        className="px-0 md:px-16 lg:px-24"
        variants={contentVariant}
        initial="initial"
        animate="animate"
      >
        {/* Grid Layout for Package Details */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Package Details */}
          <div className="w-full p-4">
            <h2 className="font-semibold mb-2">Package Details</h2>
            <ul className="list-disc ml-4">
              <li>Custom-coded e-commerce website</li>
              <li>Up to 12 product listings</li>
              <li>Integration with a payment gateway</li>
              <li>Shopping cart functionality</li>
              <li>SEO optimization for product pages</li>
              <li>2 rounds of revisions</li>
              <li>2 weeks of aftercare</li>
              <li>1-hour training session</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="w-full p-4">
            <h2 className="font-semibold mb-2">Why Choose Pixel Pop Studio?</h2>
            <p className="text-sm">
              We create websites that break free from templates, giving you unlimited creative freedom to express your brand exactly how you envision it. Our founder brings over a decade of successful business experience, including building a thriving e-commerce wine business from the ground up. We don&apos;t just build websites - we create digital solutions that drive real business growth.
            </p>
          </div>

          {/* Power-Ups */}
          <div className="w-full p-4">
            <h2 className="font-semibold mb-2">Power-Ups (Add-On Services)</h2>
            <ul className="list-disc ml-4">
              <li>Extra Product Listings: £100 per 5 products</li>
              <li>Monthly Pixel Maintenance: £199/month</li>
              <li>Social Media Amplifier: From £499/month</li>
              <li>Content Creation Magic: From £299/month</li>
              <li>Power User Training: £150/hour</li>
              <li>Brand Identity Blast: From £999</li>
              <li>UX/UI Power Session: £499/day</li>
            </ul>
          </div>

          {/* Package Inclusions */}
          <div className="w-full p-4">
            <h2 className="font-semibold mb-2">Every Package Includes</h2>
            <ul className="list-disc ml-4">
              <li>Unlimited creative freedom with custom coding</li>
              <li>Lightning-fast, secure hosting setup</li>
              <li>SSL certificate</li>
              <li>Analytics dashboard</li>
              <li>Mobile responsiveness</li>
              <li>Rock-solid security features</li>
              <li>Smart contact form integration</li>
            </ul>
          </div>
        </div>

        {/* Payment Terms Section */}
        <div className="w-full p-4 mt-4 pb-24">
          <p className="text-sm text-center lg:text-center">
            <strong>Payment terms:</strong> 50% deposit, 50% upon completion.
            <br />
            Domain and hosting costs are additional: Approximately £150/year.
          </p>
        </div>
      </motion.div>

      <FooterAlt theme={theme} />
    </div>
  );
}
