'use client';

import { useState, useEffect } from 'react';
import SectionNavigator from '@/components/SectionNavigator';
import { getCurrentTheme } from '@/utils/themeUtils';

export default function PackageSection({ pkg }) {
  const [currentTheme, setCurrentTheme] = useState('light');

  useEffect(() => {
    setCurrentTheme(getCurrentTheme());
    
    const observer = new MutationObserver(() => {
      setCurrentTheme(getCurrentTheme());
    });
    
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);

  const content = [
    pkg.description,
    "Why choose Pixel Pop Studio?",
    "Power-Ups (Add-on services)",
    "Each package includes",
    "Payment terms"
  ];

  const backgroundClass = pkg.id % 2 === 0 
    ? currentTheme === 'dark' ? 'bg-[#7493AF]' : 'bg-[#FFF6E3]'
    : currentTheme === 'dark' ? 'bg-[rgba(25,42,81,0.9)]' : 'bg-[#FB6FC6]';

  return (
    <section
      id={pkg.name.toLowerCase().replace(/\s+/g, '')}
      className={`min-h-screen p-4 md:p-8 flex flex-col items-center pt-16 md:pt-32 ${backgroundClass}`}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6">{pkg.name}</h2>

      <SectionNavigator content={content} />

      <button
        onClick={() => window.location.href = '/contact'}
        className="w-[150px] md:w-[185px] h-[40px] md:h-[47px] bg-[#FB6FC6] border-4 border-black font-inter font-black text-lg md:text-xl mt-4 md:mt-6"
      >
        Enquire
      </button>
    </section>
  );
}