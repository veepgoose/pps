import { useState, useEffect } from 'react';
import Image from 'next/image';

const LPLogo = ({ className }) => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  // Detect screen size to adjust the rectangle's attributes
  useEffect(() => {
    const updateScreenSize = () => {
      if (window.innerWidth >= 1024) {
        setIsLargeScreen(true); // Large screen
      } else {
        setIsLargeScreen(false); // Mobile screen
      }
    };

    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);

    return () => {
      window.removeEventListener('resize', updateScreenSize);
    };
  }, []);

  return (
    <div className={`relative -my-6 md:-mt-28 lg:-mt-36 ${className} h-32 md:h-64 lg:h-72 w-3/4 mx-auto`}>
      {/* SVG for the yellow rectangle */}
      <svg
        width="100%"
        height="100%"
        viewBox={isLargeScreen ? "0 0 745 200" : "0 20 990 220"} // Adjust viewBox based on screen size
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-0 left-0 w-full h-full hidden lg:block"
      >
        <rect
          x={isLargeScreen ? 90 : 35}       // Adjust X position based on screen size
          y={isLargeScreen ? 22 : 0}       // Adjust Y position based on screen size
          width={isLargeScreen ? 560 : 910} // Adjust width based on screen size
          height={isLargeScreen ? 125 : 200} // Adjust height based on screen size
          fill="#FCFF6C"
          stroke="black"
          strokeWidth={isLargeScreen ? 4 : 6} // Adjust stroke width based on screen size
        />
      </svg>

      {/* PNG for the logo text on top */}
      <div className="absolute inset-0 flex justify-center items-center h-32 w-full md:h-64 lg:h-72 w-3/4 mx-auto">
        <div className="flex items-center justify-center h-full">
          <Image
            src="/PPSLogoMainBlack.png"
            alt="Pixel Pop Studio Logo Text"
            width={isLargeScreen ? 700 : 200} // Adjust logo width based on screen size
            height={0}
            style={{ objectFit: 'contain', height: 'auto' }}
            className="w-full"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default LPLogo;







