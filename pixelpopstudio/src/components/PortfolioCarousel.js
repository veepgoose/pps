'use client';

import { useState, useEffect } from 'react';
import { portfolio } from '@/data/portfolioData';
import { getCurrentTheme } from '@/utils/themeUtils';

export default function PortfolioCarousel() {
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
    <div className={`relative flex flex-col items-center justify-center min-h-[80vh] ${
      currentTheme === 'dark' ? 'bg-[#7493AF]' : 'bg-[#FFF6E3]'
    }`}>
      <div className="flex items-center justify-center space-x-20">
        {portfolio.map((portfolio) => (
          <a
            key={portfolio.id}
            href={`#${portfolio.name.toLowerCase().replace(/\s+/g, '')}`}
            className="relative flex items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-110"
          >
           <svg width="299" height="224" viewBox="0 0 299 224" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="18" y="15" width="279" height="207" fill="#192A51" stroke="black" stroke-width="4"/>
<rect x="2" y="2" width="279" height="207" fill="#FB6FC6" stroke="black" stroke-width="4"/>
</svg>

            <span className="absolute text-white text-center font-bold text-lg">
              {portfolio.name}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}