'use client';

import { useState, useEffect } from 'react';
import FooterAlt from '@/components/FooterAlt';
import SiteHeader from '@/components/SiteHeader';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

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

export default function JumpstartPackage() {
  const packages = [
    { name: 'Jumpstart', path: '/jumpstart', icon: '/JumpstartIcon.png' },
    { name: 'Pro', path: '/pro', icon: '/ProIcon.png' },
    { name: 'Shop', path: '/shop', icon: '/ShopIcon.png' },
    { name: 'Power', path: '/power', icon: '/PowerIcon.png' },
  ];

  const currentIndex = packages.findIndex((pkg) => pkg.path === '/jumpstart');
  const nextIndex = (currentIndex + 1) % packages.length;
  const prevIndex = (currentIndex - 1 + packages.length) % packages.length;

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-light-header to-light-footer">
      <SiteHeader />

      <div className="relative flex flex-col items-center justify-start flex-grow pt-16 pb-2 md:pt-24 lg:-mt-6 lg:pb-8">
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

        <motion.div className="relative z-10 w-2/6 md:w-2/3 lg:w-1/6" variants={iconVariant} initial="initial" animate="animate">
          <Image src="/JumpstartIcon.png" alt="Jumpstart Package" width={150} height={100} layout="responsive" />
        </motion.div>

        <motion.div className="relative z-10 text-center mt-8 px-4 md:px-12 lg:px-16" variants={contentVariant} initial="initial" animate="animate">
          <h1 className="text-2xl font-bold mb-4">Pixel Pop Jumpstart</h1>
          <p className="italic mb-2">Your launchpad to a standout online presence</p>
          <p className="text-sm leading-relaxed text-center max-w-[600px] mx-auto">
            ✨ Just getting started? The Jumpstart package is your perfect launchpad. With a beautifully designed, custom&ndash;coded website and all the essentials baked in, you&apos;ll have everything you need to make a bold, professional entrance online. It&apos;s lean, clean, and built to grow with you.
          </p>
          <p className="text-2xl font-bold mt-4">£2,499</p>
        </motion.div>
      </div>

      <motion.div
  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-8xl mx-auto px-4 mt-8"
  variants={contentVariant}
  initial="initial"
  animate="animate"
>
  {/* Column 1 – Package Features */}
  <div className="w-full p-4">
    <h2 className="font-bold text-xl mb-2">Package Features</h2>
    <ul className="list-disc ml-5 text-sm leading-relaxed">
      <li>Custom-coded 5-page responsive website</li>
      <li>Mobile-first design implementation</li>
      <li>Performance-optimised codebase</li>
      <li>30-minute business alignment call</li>
      <li>Clean, semantic HTML &amp; advanced CSS</li>
      <li>Basic SEO optimisation</li>
      <li>2 rounds of revisions</li>
      <li>2 weeks of launch support</li>
    </ul>
  </div>

  {/* Column 2 – Why Choose */}
  <div className="w-full p-4">
    <h2 className="font-bold text-xl mb-2">Why Choose Pixel Pop Studio?</h2>
    <p className="text-sm leading-relaxed">
      We create websites that break free from templates, giving you unlimited creative freedom to express your brand exactly how you envision it. We don&apos;t just build websites &mdash; we create digital solutions that drive real business growth.
      <br /><br />
      Our unique design approach combines creative flair with a deep understanding of user experience, ensuring that every project is as visually stunning as it is functional.
    </p>
  </div>

  {/* Column 3 – Inclusions */}
  <div className="w-full p-4">
    <h2 className="font-bold text-xl mb-2">Every Package Includes</h2>
    <ul className="list-disc ml-5 text-sm leading-relaxed">
      <li>Unlimited creative freedom with custom coding</li>
      <li>Lightning-fast, secure hosting setup</li>
      <li>SSL certificate setup</li>
      <li>Basic analytics implementation</li>
      <li>Responsive design across all devices</li>
      <li>Robust security features</li>
      <li>Smart contact form integration</li>
    </ul>
  </div>

  {/* Column 4 – Power-Ups */}
  <div className="w-full p-4">
    <h2 className="font-bold text-xl mb-2">Power-Ups (Add-On Services)</h2>
    <ul className="list-disc ml-5 text-sm leading-relaxed">
      <li>Extra Design Boost: £350 per revision round</li>
      <li>Website Care &amp; Maintenance: £199/month</li>
      <li>Social Media Branding Pack: £299–£499 (one-time)</li>
      <li>Website Content Strategy: £299 (one-time)</li>
      <li>Power User Training: £200/hour</li>
      <li>Brand Identity &amp; Style Guide: From £999</li>
      <li>Website UX Audit: £699 (one-time)</li>
      <li>Website Speed &amp; Performance Boost: £499 (one-time)</li>
    </ul>
  </div>
</motion.div>


      <div className="flex justify-between items-center mt-8 p-4">
        <Link href={packages[prevIndex].path} className="text-blue-600 hover:underline">
          ← {packages[prevIndex].name}
        </Link>
        <Link href={packages[nextIndex].path} className="text-blue-600 hover:underline">
          {packages[nextIndex].name} →
        </Link>
      </div>

      <div className="w-full p-4 mt-4 pb-24">
        <p className="text-sm text-center">
          <strong>Payment terms:</strong> 50% deposit, 50% upon completion.
          <br />
          Domain and hosting costs are additional: Approximately £150/year.
        </p>
      </div>

      <FooterAlt />
    </div>
  );
}
