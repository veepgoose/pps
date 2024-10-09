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
    "More info",
    "Even more info!",
    "Imagine a photo of a website!",
    "You love this website! Yay!"
  ];

  const backgroundClass = pkg.id % 2 === 0 
    ? currentTheme === 'dark' ? 'bg-[#7493AF]' : 'bg-[#FFF6E3]'
    : currentTheme === 'dark' ? 'bg-[rgba(25,42,81,0.9)]' : 'bg-[#FB6FC6]';

  return (
    <section
      id={pkg.name.toLowerCase().replace(/\s+/g, '')}
      className={`min-h-screen p-8 flex flex-col items-center pt-32 ${backgroundClass}`}
    >
      <h2 className="text-4xl font-bold text-white mb-6">{pkg.name}</h2>

      <SectionNavigator content={content} />

      <button
        onClick={() => window.location.href = '/contact'}
        className="w-[185px] h-[47px] bg-[#FB6FC6] border-4 border-black font-inter font-black text-xl mt-6"
      >
        Visit Site
      </button>
    </section>
  );
}