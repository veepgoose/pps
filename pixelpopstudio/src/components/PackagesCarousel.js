'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image'; // Import the Next.js Image component
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
      attributeFilter: ['class'],
    });

    // Cleanup
    return () => observer.disconnect();
  }, []);

  const getDiscImage = (packageName) => {
    switch (packageName) {
      case 'Pixel Pop Jumpstart':
        return '/JumpstartDisc.svg';
      case 'Pixel Pop Pro':
        return '/ProDisc.svg';
      case 'Pixel Pop Shop':
        return '/ShopDisc.svg';
      case 'Pixel Pop Power':
        return '/PowerDisc.svg';
    }
  };

  return (
    <div
      className={`relative flex flex-col items-center justify-center min-h-[80vh] ${
        currentTheme === 'dark' ? 'bg-[#7493AF]' : 'bg-[#FFF6E3]'
      }`}
    >
      {/* Package Discs */}
      <div className="flex items-center justify-center space-x-20">
        {packages.map((pkg) => (
          <a
            key={pkg.id}
            href={`#${pkg.name.toLowerCase().replace(/\s+/g, '')}`}
            className="relative flex items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-110"
          >
            <Image
              src={getDiscImage(pkg.name)}
              alt={`${pkg.name} Disc`}
              width={300}
              height={300}
              className="object-cover"
            />
          </a>
        ))}
      </div>
    </div>
  );
}

