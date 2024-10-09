'use client';

import { useState, useEffect } from 'react';
import { packages } from '@/data/packagesData';
import { getCurrentTheme } from '@/utils/themeUtils';

export default function PackagesCarousel() {
  const [currentTheme, setCurrentTheme] = useState('light');

  useEffect(() => {
    // Set initial theme
    setCurrentTheme(getCurrentTheme());

    // Create a mutation observer to watch for theme changes
    const observer = new MutationObserver(() => {
      setCurrentTheme(getCurrentTheme());
    });

    // Start observing
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    // Cleanup
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`relative flex flex-col items-center justify-center min-h-screen ${
      currentTheme === 'dark' ? 'bg-[#7493AF]' : 'bg-[#FFF6E3]'
    }`}>
      <h1 className="text-4xl font-bold mb-8">Packages</h1>
      
      <div className="flex items-center justify-center space-x-20">
        {packages.map((pkg) => (
          <a
            key={pkg.id}
            href={`#${pkg.name.toLowerCase().replace(/\s+/g, '')}`}
            className="relative flex items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-110"
          >
            <svg
              width="250"
              height="250"
              viewBox="0 0 339 337"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M337 182C337 266.493 268.282 335 183.5 335C98.7182 335 30 266.493 30 182C30 97.5065 98.7182 29 183.5 29C268.282 29 337 97.5065 337 182Z"
                fill="#192A51"
                stroke="black"
                strokeWidth="4"
              />
              <circle
                cx="155"
                cy="155"
                r="152.5"
                fill="#FB6FC6"
                stroke="black"
                strokeWidth="5"
              />
            </svg>
            <span className="absolute text-white text-center font-bold text-lg">
              {pkg.name}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}