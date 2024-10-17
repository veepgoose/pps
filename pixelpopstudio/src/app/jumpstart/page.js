'use client';

import { useState, useEffect } from 'react';
import Footer from '@/components/Footer';
import SiteHeader from '@/components/SiteHeader';
import ThemeToggle from '@/components/ThemeToggle';
import Image from 'next/image';

export default function JumpstartPackage() {

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
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-light-header to-light-background dark:from-dark-footer dark:to-dark-background">
      <SiteHeader>
        <ThemeToggle darkMode={theme === 'dark'} toggleTheme={toggleTheme} />
      </SiteHeader>
      
      {/* Header Section */}
      <div className="flex flex-col items-center justify-start flex-grow pt-16 pb-2 md:pt-24 lg:-mt-6 lg:pb-8">
        <div className="w-2/6 md:w-2/3 lg:w-1/6">
          <Image 
            src="/JumpstartIcon.png" 
            alt="Jumpstart Package" 
            width={150} 
            height={100} 
            layout="responsive" 
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="px-0 md:px-16 lg:px-24"> {/* Remove padding on small screens */}
        <h1 className="text-2xl font-bold text-center mb-8">Pixel Pop Jumpstart</h1>
        <p className="text-center mb-4 italic">Your launchpad to a standout online presence</p>
        <p className="text-center text-2xl font-bold mb-8">£749</p>
        
        {/* Grid Layout for Package Details */}
        <div className="grid grid-cols-1 gap-0 md:grid-cols-2 lg:grid-cols-4"> {/* Removed gap */}
          
          {/* Package Details */}
          <div className="w-full p-4 bg-light-menuBackground dark:bg-dark-packagesBackground bg-opacity-20 dark:bg-opacity-20 lg:bg-transparent lg:dark:bg-transparent">
            <h2 className="font-semibold mb-2">Package Details</h2>
            <ul className="list-disc ml-4">
              <li>Custom-coded 5-page responsive website</li>
              <li>Mobile-friendly design</li>
              <li>Contact form integration</li>
              <li>Basic SEO optimization</li>
              <li>Social media integration</li>
              <li>1 round of revisions</li>
              <li>1-week aftercare for minor changes</li>
            </ul>
          </div>

                  {/* Why Choose Us */}
                  <div className="w-full p-4 bg-light-menuBackground dark:bg-dark-packagesBackground bg-opacity-40 dark:bg-opacity-40 lg:bg-transparent lg:dark:bg-transparent">
            <h2 className="font-semibold mb-2">Why Choose Pixel Pop Studio?</h2>
            <p className="text-sm">
              We create websites that break free from templates, giving you unlimited creative freedom to express your brand exactly how you envision it. Our founder brings over a decade of successful business experience, including building a thriving e-commerce wine business from the ground up. We don&apos;t just build websites - we create digital solutions that drive real business growth.
            </p>
          </div>

          {/* Power-Ups */}
          <div className="w-full p-4 bg-light-menuBackground dark:bg-dark-packagesBackground bg-opacity-55 dark:bg-opacity-60 lg:bg-transparent lg:dark:bg-transparent">
            <h2 className="font-semibold mb-2">Power-Ups (Add-On Services)</h2>
            <ul className="list-disc ml-4">
              <li>Extra Design Boost: £200 per revision round</li>
              <li>Monthly Pixel Maintenance: £199/month</li>
              <li>Social Media Amplifier: From £499/month</li>
              <li>Content Creation Magic: From £299/month</li>
              <li>Power User Training: £150/hour</li>
              <li>Brand Identity Blast: From £999</li>
              <li>UX/UI Power Session: £499/day</li>
            </ul>
          </div>

          {/* Package Inclusions */}
          <div className="w-full p-4 bg-light-menuBackground dark:bg-dark-packagesBackground bg-opacity-70 dark:bg-opacity-70 lg:bg-transparent lg:dark:bg-transparent">
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
    {/* Payment Terms Section */}
<div className="w-full p-4 bg-light-background dark:bg-dark-background bg-opacity-90 dark:bg-opacity-90 mt-4 pb-24">
  <p className="text-sm text-center lg:text-center"> {/* Align right on large screens */}
    <strong>Payment terms:</strong> 50% deposit, 50% upon completion.
    <br />
    Domain and hosting costs are additional: Approximately £150/year.
  </p>
</div>


      </div>

      <Footer theme={theme} />
    </div>
  );
}
