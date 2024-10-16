'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { packages } from '@/data/packagesData';
import { getCurrentTheme } from '@/utils/themeUtils';

export default function PackagesCarousel() {
  const [currentTheme, setCurrentTheme] = useState('light');

  useEffect(() => {
    setCurrentTheme(getCurrentTheme());

    const observer = new MutationObserver(() => {
      setCurrentTheme(getCurrentTheme());
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

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
      className={`relative flex flex-col items-center justify-center min-h-[60vh] md:min-h-[80vh] ${
        currentTheme === 'dark' ? 'bg-[#7493AF]' : 'bg-[#FFF6E3]'
      }`}
    >
      {/* Package Discs */}
      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 lg:gap-20">
        {packages.map((pkg) => (
          <a
            key={pkg.id}
            href={`#${pkg.name.toLowerCase().replace(/\s+/g, '')}`}
            className="relative flex items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-110"
          >
            <Image
              src={getDiscImage(pkg.name)}
              alt={`${pkg.name} Disc`}
              width={150}
              height={150}
              className="object-cover w-[150px] h-[150px] md:w-[200px] md:h-[200px] lg:w-[300px] lg:h-[300px]"
            />
          </a>
        ))}
      </div>
    </div>
  );
}