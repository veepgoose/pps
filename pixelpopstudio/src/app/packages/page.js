'use client';

import { useState, useEffect } from 'react';
import Footer from '@/components/Footer';
import SiteHeader from '@/components/SiteHeader';
import ThemeToggle from '@/components/ThemeToggle';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-light-background dark:bg-dark-background">
      <SiteHeader>
        <ThemeToggle darkMode={theme === 'dark'} toggleTheme={toggleTheme} />
      </SiteHeader>

      {/* Header Section */}
      <div className="flex flex-col items-center justify-start flex-grow pt-16 md:pt-24 lg:-mt-6">
  <div className="w-2/4 md:w-2/3 lg:w-1/6">
    <Image 
      src="/Packages.png" 
      alt="Packages Header" 
      width={150} 
      height={100} 
      layout="responsive" 
    />
  </div>
</div>

<div className="grid grid-cols-2 gap-4 md:grid-cols-4 mt-12 pb-16 md:mt-8 lg:mt-16 xl:mt-20 px-4 lg:pb-16">
  {/* Package 1 */}
  <div className="flex flex-col items-center">
    <div className="w-3/4 md:w-2/3 lg:w-2/3">
      <Image src="/JumpstartIcon.png" alt="Jumpstart Package" width={150} height={100} layout="responsive" />
    </div>
    <Link href="/jumpstart">
      <p className="mt-4 text-center cursor-pointer text-blue-600 hover:underline">Learn More...</p>
    </Link>
  </div>

  {/* Package 2 */}
  <div className="flex flex-col items-center">
    <div className="w-3/4 md:w-2/3 lg:w-2/3">
      <Image src="/ProIcon.png" alt="Pro Package" width={150} height={100} layout="responsive" />
    </div>
    <Link href="/pro">
      <p className="mt-4 text-center cursor-pointer text-blue-600 hover:underline">Learn More...</p>
    </Link>
  </div>

  {/* Package 3 */}
  <div className="flex flex-col items-center">
    <div className="w-3/4 md:w-2/3 lg:w-2/3">
      <Image src="/ShopIcon.png" alt="Shop Package" width={150} height={100} layout="responsive" />
    </div>
    <Link href="/shop">
      <p className="mt-4 text-center cursor-pointer text-blue-600 hover:underline">Learn More...</p>
    </Link>
  </div>

  {/* Package 4 */}
  <div className="flex flex-col items-center">
    <div className="w-3/4 md:w-2/3 lg:w-2/3">
      <Image src="/PowerIcon.png" alt="Power Package" width={150} height={100} layout="responsive" />
    </div>
    <Link href="/">
      <p className="mt-4 text-center cursor-pointer text-blue-600 hover:underline">Learn More...</p>
    </Link>
  </div>
</div>

<Footer theme={theme} />

    </div>
  );
}














// 'use client';

// import { useState, useEffect } from 'react';
// import Footer from '@/components/Footer';
// import SiteHeader from '@/components/SiteHeader';
// import PackageSection from '@/components/PackageSection';
// import PackagesCarousel from '@/components/PackagesCarousel';
// import ThemeToggle from '@/components/ThemeToggle';
// import { packages } from '@/data/packagesData';
// import Image from 'next/image';

// export default function Home() {
//   const [theme, setTheme] = useState('light');

//   useEffect(() => {
//     const savedTheme = localStorage.getItem('theme') || 'light';
//     setTheme(savedTheme);
//     if (savedTheme === 'dark') {
//       document.documentElement.classList.add('dark');
//     }
//   }, []);

//   const toggleTheme = () => {
//     const newTheme = theme === 'light' ? 'dark' : 'light';
//     setTheme(newTheme);
//     document.documentElement.classList.toggle('dark', newTheme === 'dark');
//     localStorage.setItem('theme', newTheme);
//   };

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   return (
//     <div className="relative min-h-screen flex flex-col bg-light-background dark:bg-dark-background">
//       <SiteHeader>
//         <ThemeToggle darkMode={theme === 'dark'} toggleTheme={toggleTheme} />
//       </SiteHeader>

//       {/* Header Section */}
//       <div className="flex flex-col items-center justify-start flex-grow pt-16 md:pt-24">
//         <div className="bg-light-background dark:bg-dark-background w-full max-w-sm md:max-w-md lg:max-w-lg">
//           <Image src="/Packages.png" alt="Packages Header" width={350} height={100} layout="responsive" />
//         </div>
//       </div>

//       {/* Packages Carousel */}
//       <PackagesCarousel theme={theme} />
      
//       {/* Sticky Navigation */}
//       <div className="sticky top-0 z-50 bg-[#B1CCE4] p-2 md:p-4">
//         <div className="flex items-center w-full max-w-screen-lg mx-auto relative">
//           {/* Centered Navigation Links */}
//           <div className="w-full flex justify-center space-x-2 md:space-x-8 text-sm md:text-lg">
//             <a href="#pixelpopjumpstart" className="font-bold hover:underline">Jumpstart</a>
//             <a href="#pixelpoppro" className="font-bold hover:underline">Pro</a>
//             <a href="#pixelpopshop" className="font-bold hover:underline">Shop</a>
//             <a href="#pixelpoppower" className="font-bold hover:underline">Power</a>
//           </div>

//           {/* Top Icon positioned on the far right */}
//           <div className="absolute right-0">
//             <button
//               onClick={scrollToTop}
//               className="bg-transparent p-0 border-none cursor-pointer outline-none"
//             >
//               <Image src="/TopIcon.svg" alt="Top Icon" width={30} height={30} />
//             </button>
//           </div>
//         </div>
//       </div>

//       {packages.map((pkg) => (
//         <PackageSection key={pkg.id} pkg={pkg} theme={theme} />
//       ))}

//       <Footer theme={theme} />
//     </div>
//   );
// }
