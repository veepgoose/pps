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

export default function PowerPackage() {
  const packages = [
    { name: 'Jumpstart', path: '/jumpstart', icon: '/JumpstartIcon.png' },
    { name: 'Pro', path: '/pro', icon: '/ProIcon.png' },
    { name: 'Shop', path: '/shop', icon: '/ShopIcon.png' },
    { name: 'Power', path: '/power', icon: '/PowerIcon.png' },
  ];

  const currentIndex = packages.findIndex((pkg) => pkg.path === '/power');
  const nextIndex = (currentIndex + 1) % packages.length;
  const prevIndex = (currentIndex - 1 + packages.length) % packages.length;

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-light-header to-light-footer">
      <SiteHeader />

      {/* Starry Background Section */}
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

        <motion.div
          className="relative z-10 w-2/6 md:w-2/3 lg:w-1/6"
          variants={iconVariant}
          initial="initial"
          animate="animate"
        >
          <Image
            src="/PowerIcon.png"
            alt="Pixel Pop Power Package"
            width={150}
            height={100}
            layout="responsive"
          />
        </motion.div>

        <motion.div
          className="relative z-10 mt-8 px-4 md:px-8 text-center"
          variants={contentVariant}
          initial="initial"
          animate="animate"
        >
          <div className="max-w-2xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">Pixel Pop Power</h1>
            <p className="italic mb-2">
              Full digital transformation for visionary businesses
            </p>
            <p className="text-sm leading-relaxed">
              ✨ This is the full works — designed for established businesses ready to elevate their online game to elite level. With completely bespoke functionality, advanced integrations, and brand storytelling woven into every detail, Pixel Pop Power turns your website into a high-impact digital ecosystem. Ideal for serious scale-ups and bold rebrands.
            </p>
            <p className="text-2xl font-bold mt-4">Starting at £12,999</p>
          </div>
        </motion.div>
      </div>

      {/* Main Content Section */}
      <motion.div
        className="relative z-10 w-full max-w-screen-2xl mx-auto mt-8 px-4 md:px-8 lg:px-36"
        variants={contentVariant}
        initial="initial"
        animate="animate"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl mx-auto px-4 mt-8">
          {/* Row 1 */}
          <div className="w-full p-4">
            <h2 className="font-bold text-xl mb-2">Package Features</h2>
            <ul className="list-disc ml-5 text-sm leading-relaxed">
              <li>Everything in Pixel Pop Shop, plus:</li>
              <li>Comprehensive brand strategy</li>
              <li>In-depth market research</li>
              <li>Custom e-commerce integration</li>
              <li>Advanced features and functionality</li>
              <li>Ongoing support and maintenance</li>
              <li>Advanced SEO for e-commerce</li>
              <li>3 rounds of revisions</li>
              <li>Monthly strategy meetings</li>
            </ul>
          </div>

          <div className="w-full p-4">
            <h2 className="font-bold text-xl mb-2">Customisation & Strategy</h2>
            <ul className="list-disc text-sm ml-4">
              <li>Fully bespoke design & development</li>
              <li>CRM and 3rd-party tool integration</li>
              <li>Complex product filtering or configuration</li>
              <li>Conversion strategy implementation</li>
              <li>Brand storytelling & copy guidance</li>
            </ul>
          </div>

          <div className="w-full p-4">
            <h2 className="font-bold text-xl mb-2">Technical Features</h2>
            <ul className="list-disc text-sm ml-4">
              <li>Advanced performance optimisation</li>
              <li>Custom animations and motion UX</li>
              <li>Enhanced security features</li>
              <li>Tailored contact and lead gen forms</li>
              <li>Scalable architecture</li>
            </ul>
          </div>

          {/* Row 2 */}
          <div className="w-full p-4">
            <h2 className="font-bold text-xl mb-2">Why Choose Pixel Pop Studio?</h2>
            <p className="text-sm leading-relaxed">
              We create websites that break free from templates, giving you unlimited creative freedom to express your brand exactly how you envision it. We don&apos;t just build websites — we create digital solutions that drive real business growth.
              <br />
              <br />
              Our unique design approach combines creative flair with a deep understanding of user experience, ensuring that every project is as visually stunning as it is functional.
            </p>
          </div>

          <div className="w-full p-4">
            <h2 className="font-bold text-xl mb-2">Power–Ups (Add–On Services)</h2>
            <ul className="list-disc ml-5 text-sm leading-relaxed">
              <li>Extra Design Boost: £350 per revision round</li>
              <li>Website Care & Maintenance: £199/month</li>
              <li>Social Media Branding Pack: £299–£499 (one-time)</li>
              <li>Website UX Audit: £699 (one–time)</li>
            </ul>
          </div>

          <div className="w-full p-4">
            <h2 className="font-bold text-xl mb-2">Every Package Includes</h2>
            <ul className="list-disc ml-5 text-sm leading-relaxed">
              <li>Unlimited creative freedom with custom coding</li>
              <li>SSL certificate setup</li>
              <li>Basic analytics implementation</li>
              <li>Responsive design across all devices</li>
            </ul>
          </div>
        </div>

        {/* Package Navigation */}
        <div className="flex justify-between items-center mt-8 p-4">
          <Link href={packages[prevIndex].path} className="text-blue-600 hover:underline">
            ← {packages[prevIndex].name}
          </Link>
          <Link href={packages[nextIndex].path} className="text-blue-600 hover:underline">
            {packages[nextIndex].name} →
          </Link>
        </div>

        <div className="w-full p-4 mt-4 pb-24">
          <p className="text-sm text-center lg:text-center">
            <strong>Payment terms:</strong> 50% deposit, 50% upon completion.
            <br />
            Domain and hosting costs are additional: Approximately £150/year.
          </p>
        </div>
      </motion.div>

      <FooterAlt />
    </div>
  );
}
