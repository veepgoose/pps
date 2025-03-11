'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Services from '@/components/Services';
import MiniAbout from '@/components/MiniAbout';
import MiniPackages from '@/components/MiniPackages';
import CallToAction from '@/components/CallToAction';
import ContactForm from '@/components/ContactForm';
import { starryHeroVariant1, starryHeroVariant2, hillVariantLeft, hillVariantRight, grassVariant, bullVariant, kongVariant, rotundaVariant, h1Variant } from '@/utils/motion';

// Animation variants for the clouds
const cloudVariant = {
  initial: { opacity: 0, x: '-100vw' },
  animate: { opacity: 1, x: 0, transition: { duration: 2, ease: 'easeInOut', delay: 1.8 } }
};

const cloudVariantRight = {
  initial: { opacity: 0, x: '100vw' },
  animate: { opacity: 1, x: 0, transition: { duration: 2, ease: 'easeInOut', delay: 1.8 } }
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen  overflow-hidden relative">
      {/* Hero Section */}
      <div className="relative flex flex-col flex-grow w-full min-h-screen bg-gradient-to-b from-light-header to-light-sectionPrimary">
        {/* Header */}
        <Header />

       {/* Animated Clouds */}
<div>
  {/* Left Cloud */}
  <motion.div
    className="absolute top-[42%] right-[70%] w-[15vw] sm:hidden z-10"
    variants={cloudVariant}
    initial="initial"
    animate="animate"
  >
    <Image
      src="/Cloud.svg"
      alt="Small Cloud for Mobile"
      layout="intrinsic"
      width={160}
      height={160}
      className="object-cover"
    />
  </motion.div>

  <motion.div
    className="absolute top-[38%] left-[13%] hidden sm:block lg:hidden w-[11vw] z-10"
    variants={cloudVariant}
    initial="initial"
    animate="animate"
  >
    <Image
      src="/Cloud.svg"
      alt="Small Cloud for Tablet"
      layout="intrinsic"
      width={160}
      height={160}
      className="object-cover"
    />
  </motion.div>

  <motion.div
    className="absolute top-[7%] right-[35%] hidden lg:block w-[15vw] z-10"
    variants={cloudVariant}
    initial="initial"
    animate="animate"
  >
    <Image
      src="/Cloud.svg"
      alt="Small Cloud for Desktop"
      layout="intrinsic"
      width={160}
      height={160}
      className="object-cover"
    />
  </motion.div>
</div>

<div>
  {/* Middle Cloud */}
  <motion.div
    className="absolute top-[50%] right-[35%] w-[18vw] sm:hidden z-10"
    variants={cloudVariantRight}
    initial="initial"
    animate="animate"
  >
    <Image
      src="/Cloud.svg"
      alt="Cloud for Mobile"
      layout="responsive"
      width={200}
      height={150}
      className="object-cover"
    />
  </motion.div>

  <motion.div
    className="absolute top-[38%] right-[35%] hidden sm:block lg:hidden w-[23vw] z-10"
    variants={cloudVariantRight}
    initial="initial"
    animate="animate"
  >
    <Image
      src="/Cloud.svg"
      alt="Cloud for Tablet"
      layout="responsive"
      width={200}
      height={150}
      className="object-cover"
    />
  </motion.div>

  <motion.div
    className="absolute top-[15%] right-[24%] hidden lg:block w-[10.5vw] z-10"
    variants={cloudVariantRight}
    initial="initial"
    animate="animate"
  >
    <Image
      src="/Cloud.svg"
      alt="Cloud for Desktop"
      layout="responsive"
      width={200}
      height={150}
      className="object-cover"
    />
  </motion.div>
</div>

<div>
  {/* Right Cloud */}
  <motion.div
    className="absolute top-[40%] right-[15%] w-[12vw] sm:hidden z-10"
    variants={cloudVariantRight}
    initial="initial"
    animate="animate"
  >
    <Image
      src="/Cloud.svg"
      alt="Right Cloud for Mobile"
      layout="responsive"
      width={150}
      height={75}
      className="object-cover"
    />
  </motion.div>

  <motion.div
    className="absolute top-[34%] right-[14%] hidden sm:block lg:hidden w-[10vw] z-10"
    variants={cloudVariantRight}
    initial="initial"
    animate="animate"
  >
    <Image
      src="/Cloud.svg"
      alt="Right Cloud for Tablet"
      layout="responsive"
      width={150}
      height={75}
      className="object-cover"
    />
  </motion.div>

  <motion.div
    className="absolute top-[5%] right-[8%] hidden lg:block w-[8vw] z-10"
    variants={cloudVariantRight}
    initial="initial"
    animate="animate"
  >
    <Image
      src="/Cloud.svg"
      alt="Right Cloud for Desktop"
      layout="responsive"
      width={150}
      height={75}
      className="object-cover"
    />
  </motion.div>
</div>

{/* PPS Logo */}
<div>
  {/* Mobile Logo */}
  <motion.div
    className="absolute top-[7%] w-full flex justify-center sm:hidden z-20"
    variants={h1Variant}
    initial="initial"
    animate="animate"
  >
    <div className="w-[85vw] aspect-[1450/850]">
      <Image
        src="/Logo1.svg"
        alt="Pixel Pop Studio Logo for Mobile"
        layout="responsive"
        width={1450}
        height={850}
        className="object-cover"
      />
    </div>
  </motion.div>

  {/* Tablet Logo (iPads) */}
  <motion.div
    className="absolute top-[5%] left-[7%] w-[75vw] hidden sm:block md:hidden z-20"
    variants={h1Variant}
    initial="initial"
    animate="animate"
  >
    <div className="aspect-[1450/850]">
      <Image
        src="/Logo1.svg"
        alt="Pixel Pop Studio Logo for Tablet"
        layout="responsive"
        width={1450}
        height={850}
        className="object-cover"
      />
    </div>
  </motion.div>

  {/* Medium Screens (1024px - 1099px, Fix for 1024x680) */}
<motion.div
  className="absolute top-[8%] left-[7%] w-[50vw] hidden md:block lg:hidden scaled:hidden macbook:hidden z-20"
  variants={h1Variant}
  initial="initial"
  animate="animate"
>
  <div className="aspect-[1450/850]">
    <Image
      src="/Logo1.svg"
      alt="Pixel Pop Studio Logo for Medium Screens (1024px - 1099px)"
      layout="responsive"
      width={1450}
      height={850}
      className="object-cover"
    />
  </div>
</motion.div>


  {/* Scaled Display (1536px only) */}
  <motion.div
    className="absolute top-[8%] left-[5%] w-[45vw] hidden scaled:block macbook:hidden lg:hidden z-20"
    variants={h1Variant}
    initial="initial"
    animate="animate"
  >
    <div className="aspect-[1450/850]">
      <Image
        src="/Logo1.svg"
        alt="Pixel Pop Studio Logo for Scaled Display (1536px)"
        layout="responsive"
        width={1450}
        height={850}
        className="object-cover"
      />
    </div>
  </motion.div>

  {/* Desktop Logo (MacBook Air 1428px & Small Desktops) */}
  <motion.div
    className="absolute top-[9%] left-[6%] w-[45%] hidden lg:block xl:hidden macbook:hidden scaled:hidden z-20"
    variants={h1Variant}
    initial="initial"
    animate="animate"
  >
    <div className="aspect-[1450/850]">
      <Image
        src="/Logo1.svg"
        alt="Pixel Pop Studio Logo for Desktop (MacBook Air & Small Desktops)"
        layout="responsive"
        width={1450}
        height={850}
        className="object-cover"
      />
    </div>
  </motion.div>

  {/* MacBook Pro (1440px only) */}
  <motion.div
    className="absolute top-[8%] left-[6%] w-[55%] hidden macbook:block lg:hidden xl:hidden scaled:hidden z-20"
    variants={h1Variant}
    initial="initial"
    animate="animate"
  >
    <div className="aspect-[1450/850]">
      <Image
        src="/Logo1.svg"
        alt="Pixel Pop Studio Logo for MacBook Pro (1440px only)"
        layout="responsive"
        width={1450}
        height={850}
        className="object-cover"
      />
    </div>
  </motion.div>

  {/* XL Screens (MacBook Pro Browser Viewport, 1680px) */}
  <motion.div
    className="absolute top-[8%] left-[6%] w-[50%] hidden xl:block 2xl:hidden z-20"
    variants={h1Variant}
    initial="initial"
    animate="animate"
  >
    <div className="aspect-[1450/850]">
      <Image
        src="/Logo1.svg"
        alt="Pixel Pop Studio Logo for XL Screens"
        layout="responsive"
        width={1450}
        height={850}
        className="object-cover"
      />
    </div>
  </motion.div>

  {/* 2XL Screens (Retina 4K, 1920px, Curved Monitor) */}
  <motion.div
    className="absolute top-[8%] left-[6%] w-[45%] hidden 2xl:block ultrawide:hidden z-20"
    variants={h1Variant}
    initial="initial"
    animate="animate"
  >
    <div className="aspect-[1450/850]">
      <Image
        src="/Logo1.svg"
        alt="Pixel Pop Studio Logo for 2XL Screens (Retina 4K & 1920px)"
        layout="responsive"
        width={1450}
        height={850}
        className="object-cover"
      />
    </div>
  </motion.div>

  {/* UltraWide Screens (2560px) */}
  <motion.div
    className="absolute top-[9%] left-[5%] w-[45%] hidden ultrawide:block superwide:hidden z-20"
    variants={h1Variant}
    initial="initial"
    animate="animate"
  >
    <div className="aspect-[1450/850]">
      <Image
        src="/Logo1.svg"
        alt="Pixel Pop Studio Logo for UltraWide Screens (2560px)"
        layout="responsive"
        width={1450}
        height={850}
        className="object-cover"
      />
    </div>
  </motion.div>

  {/* SuperWide Screens (3440px) */}
  <motion.div
    className="absolute top-[9%] left-[5%] w-[35%] hidden superwide:block z-20"
    variants={h1Variant}
    initial="initial"
    animate="animate"
  >
    <div className="aspect-[1450/850]">
      <Image
        src="/Logo1.svg"
        alt="Pixel Pop Studio Logo for SuperWide Screens (3440px)"
        layout="responsive"
        width={1450}
        height={850}
        className="object-cover"
      />
    </div>
  </motion.div>
</div>







           {/* Animated Illustrations */}
{/* Bull */}
<div>
  {/* Mobile Bull */}
  <motion.div
    className="absolute bottom-[6%] left-[5%] w-[44vw] sm:hidden z-40 aspect-[962/728]"
    variants={bullVariant}
    initial="initial"
    animate="animate"
  >
    <Image
      src="/Bull.svg"
      alt="Bull Illustration for Mobile"
      layout="responsive"
      width={962}
      height={728}
      className="object-cover"
    />
  </motion.div>

  {/* Tablet Bull */}
  <motion.div
    className="absolute bottom-[9.5%] left-[6%] hidden sm:block lg:hidden w-[42vw] z-40 aspect-[962/728]"
    variants={bullVariant}
    initial="initial"
    animate="animate"
  >
    <Image
      src="/Bull.svg"
      alt="Bull Illustration for Tablet"
      layout="responsive"
      width={962}
      height={728}
      className="object-cover"
    />
  </motion.div>

  {/* Desktop Bull */}
  <motion.div
    className="absolute bottom-[8%] left-[6%] hidden lg:block w-[22vw] z-40 aspect-[962/728]"
    variants={bullVariant}
    initial="initial"
    animate="animate"
  >
    <Image
      src="/Bull.svg"
      alt="Bull Illustration for Desktop"
      layout="responsive"
      width={962}
      height={728}
      className="object-cover"
    />
  </motion.div>
</div>

{/* Kong */}
<div>
  {/* Mobile Kong */}
  <motion.div
    className="absolute bottom-[3%] right-[3%] w-[65vw] sm:hidden z-40 aspect-[618/756]"
    variants={kongVariant}
    initial="initial"
    animate="animate"
  >
    <Image
      src="/Kong.svg"
      alt="King Kong Statue for Mobile"
      layout="responsive"
      width={618}
      height={756}
      className="object-cover"
    />
  </motion.div>

  {/* Tablet Kong */}
  <motion.div
    className="absolute bottom-[5%] right-[5%] hidden sm:block lg:hidden w-[60vw] z-40 aspect-[618/756]"
    variants={kongVariant}
    initial="initial"
    animate="animate"
  >
    <Image
      src="/Kong.svg"
      alt="King Kong Statue for Tablet"
      layout="responsive"
      width={618}
      height={756}
      className="object-cover"
    />
  </motion.div>

  {/* Desktop Kong */}
  <motion.div
    className="absolute bottom-[0.5%] right-[5.5%] hidden lg:block w-[31vw] z-40 aspect-[618/756]"
    variants={kongVariant}
    initial="initial"
    animate="animate"
  >
    <Image
      src="/Kong.svg"
      alt="King Kong Statue for Desktop"
      layout="responsive"
      width={618}
      height={756}
      className="object-cover"
    />
  </motion.div>
</div>

{/* Rotunda */}
<div>
  {/* Mobile Rotunda */}
  <motion.div
    className="absolute bottom-[9%] right-[1.5%] w-[30vw] sm:hidden z-20 aspect-[331/606]"
    variants={rotundaVariant}
    initial="initial"
    animate="animate"
  >
    <Image
      src="/Rotunda.svg"
      alt="Rotunda Illustration for Mobile"
      layout="responsive"
      width={331}
      height={606}
      className="object-cover"
    />
  </motion.div>

  {/* Tablet Rotunda */}
  <motion.div
    className="absolute bottom-[15%] right-[3%] hidden sm:block lg:hidden w-[25vw] z-20 aspect-[331/606]"
    variants={rotundaVariant}
    initial="initial"
    animate="animate"
  >
    <Image
      src="/Rotunda.svg"
      alt="Rotunda Illustration for Tablet"
      layout="responsive"
      width={331}
      height={606}
      className="object-cover"
    />
  </motion.div>

  {/* Desktop Rotunda */}
  <motion.div
    className="absolute bottom-[20%] right-[4.5%] hidden lg:block w-[13vw] z-20 aspect-[331/606]"
    variants={rotundaVariant}
    initial="initial"
    animate="animate"
  >
    <Image
      src="/Rotunda.svg"
      alt="Rotunda Illustration for Desktop"
      layout="responsive"
      width={331}
      height={606}
      className="object-cover"
    />
  </motion.div>
</div>




        {/* Starry background with animation */}
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
{/* Left Hill */}
<div>
  {/* Mobile Left Hill */}
  <motion.div
    className="absolute bottom-0 left-0 w-full h-auto md:hidden z-10"
    style={{
      marginLeft: '-1px', // Prevent gaps for mobile
    }}
    variants={hillVariantLeft}
    initial="initial"
    animate="animate"
  >
    <div className="w-full h-auto">
      <Image
        src="/LeftHillMobile.svg"
        alt="Left Hill for Mobile"
        width={393}
        height={93}
        layout="responsive"
        className="object-cover"
      />
    </div>
  </motion.div>

  {/* Tablet Left Hill */}
  <motion.div
    className="absolute bottom-0 left-0 hidden md:block lg:hidden w-full h-auto z-10"
    style={{
      marginLeft: '-1px', // Prevent gaps for tablet
    }}
    variants={hillVariantLeft}
    initial="initial"
    animate="animate"
  >
    <div className="w-full h-auto">
      <Image
        src="/LeftHillMobile.svg"
        alt="Left Hill for Tablets"
        width={393}
        height={93}
        layout="responsive"
        className="object-cover"
      />
    </div>
  </motion.div>

  {/* Desktop Left Hill */}
  <motion.div
    className="absolute bottom-0 left-0 hidden lg:block w-2/3 lg:w-2/3 z-10 scale-110"
    variants={hillVariantLeft}
    initial="initial"
    animate="animate"
  >
    <div className="w-full h-auto">
      <Image
        src="/HillLeft.svg"
        alt="Left Hill for Desktop"
        layout="responsive"
        width={1920} // ViewBox width of the desktop SVG
        height={400} // ViewBox height of the desktop SVG
        className="object-cover"
      />
    </div>
  </motion.div>
</div>

{/* Right Hill */}
<div>
  {/* Mobile Right Hill */}
  <motion.div
    className="absolute bottom-0 right-0 w-full h-auto md:hidden z-20"
    variants={hillVariantRight}
    initial="initial"
    animate="animate"
  >
    <div className="w-full h-auto">
      <Image
        src="/RightHillMobile.svg"
        alt="Right Hill for Mobile"
        width={390}
        height={98}
        layout="responsive"
        className="object-cover"
      />
    </div>
  </motion.div>

  {/* Tablet Right Hill */}
  <motion.div
    className="absolute bottom-0 right-0 hidden md:block lg:hidden w-full h-auto z-20"
    variants={hillVariantRight}
    initial="initial"
    animate="animate"
  >
    <div className="w-full h-auto">
      <Image
        src="/RightHillMobile.svg"
        alt="Right Hill for Tablets"
        width={390}
        height={98}
        layout="responsive"
        className="object-cover"
      />
    </div>
  </motion.div>

  {/* Desktop Right Hill */}
  <motion.div
    className="absolute bottom-0 right-0 hidden lg:block w-3/4 lg:w-3/4 z-20 scale-110"
    variants={hillVariantRight}
    initial="initial"
    animate="animate"
  >
    <div className="w-full h-auto">
      <Image
        src="/HillRight.svg"
        alt="Right Hill for Desktop"
        layout="responsive"
        width={1920} // ViewBox width of the desktop SVG
        height={400} // ViewBox height of the desktop SVG
        className="object-cover"
      />
    </div>
  </motion.div>
</div>


{/* Grass Layer */}
<div>
  {/* Mobile Grass Layer */}
  <motion.div
    className="absolute bottom-0 w-full sm:w-[130%] sm:scale-110 md:hidden z-30"
    style={{
      marginLeft: '-2px', // Prevent gaps for tablets
    }}
    variants={grassVariant}
    initial="initial"
    animate="animate"
  >
    <div className="w-full h-auto">
      <Image
        src="/GrassMobile.svg"
        alt="Grass Layer for Mobile"
        width={393.005}
        height={68.73}
        layout="responsive"
        className="object-cover"
      />
    </div>
  </motion.div>

  {/* Tablet Grass Layer (iPads) */}
  <motion.div
    className="absolute bottom-0 hidden md:block lg:hidden w-full h-auto z-30"
    style={{
      marginLeft: '-2px', // Prevent gaps for tablets
    }}
    variants={grassVariant}
    initial="initial"
    animate="animate"
  >
    <div className="w-full h-auto">
      <Image
        src="/GrassMobile.svg"
        alt="Grass Layer for Tablets"
        width={393.005}
        height={68.73}
        layout="responsive"
        className="object-cover"
      />
    </div>
  </motion.div>

  {/* Scaled Display (1536px only) */}
  <motion.div
    className="absolute bottom-0 hidden scaled:block lg:hidden macbook:hidden w-full h-auto z-30"
    variants={grassVariant}
    initial="initial"
    animate="animate"
  >
    <div className="w-full h-auto">
      <Image
        src="/Grass.svg"
        alt="Grass Layer for Scaled Display (1536px)"
        layout="fill"
        className="object-cover"
      />
    </div>
  </motion.div>

  {/* Desktop Grass Layer (MacBook Air & Small Desktops) */}
  <motion.div
    className="absolute bottom-0 hidden lg:block xl:hidden macbook:hidden scaled:hidden w-full lg:h-[150px] z-30"
    variants={grassVariant}
    initial="initial"
    animate="animate"
  >
    <div className="w-full h-auto">
      <Image
        src="/Grass.svg"
        alt="Grass Layer for Desktop (MacBook Air & Small Desktops)"
        layout="fill"
        className="object-cover"
      />
    </div>
  </motion.div>

  {/* MacBook Pro (1440px only) */}
  <motion.div
    className="absolute bottom-0 hidden macbook:block lg:hidden xl:hidden scaled:hidden w-full h-auto z-30"
    variants={grassVariant}
    initial="initial"
    animate="animate"
  >
    <div className="w-full h-auto">
      <Image
        src="/Grass.svg"
        alt="Grass Layer for MacBook Pro (1440px)"
        layout="fill"
        className="object-cover"
      />
    </div>
  </motion.div>

  {/* XL Screens (MacBook Pro Browser Viewport, 1680px) */}
  <motion.div
    className="absolute bottom-0 hidden xl:block 2xl:hidden w-full h-auto z-30"
    variants={grassVariant}
    initial="initial"
    animate="animate"
  >
    <div className="w-full h-auto">
      <Image
        src="/Grass.svg"
        alt="Grass Layer for XL Screens (MacBook Pro Browser 1680px)"
        layout="fill"
        className="object-cover"
      />
    </div>
  </motion.div>

  {/* 2XL Screens (Retina 4K, 1920px, Curved Monitor) */}
  <motion.div
    className="absolute bottom-0 hidden 2xl:block ultrawide:hidden w-full h-auto z-30"
    variants={grassVariant}
    initial="initial"
    animate="animate"
  >
    <div className="w-full h-auto">
      <Image
        src="/Grass.svg"
        alt="Grass Layer for 2XL Screens (Retina 4K, 1920px, Curved Monitor)"
        layout="fill"
        className="object-cover"
      />
    </div>
  </motion.div>

  {/* UltraWide Screens (2560px) */}
  <motion.div
    className="absolute bottom-0 hidden ultrawide:block superwide:hidden w-full h-auto z-30"
    variants={grassVariant}
    initial="initial"
    animate="animate"
  >
    <div className="w-full h-auto">
      <Image
        src="/Grass.svg"
        alt="Grass Layer for UltraWide Screens (2560px)"
        layout="fill"
        className="object-cover"
      />
    </div>
  </motion.div>

  {/* SuperWide Screens (3440px) */}
  <motion.div
    className="absolute bottom-0 hidden superwide:block w-full h-auto z-30"
    variants={grassVariant}
    initial="initial"
    animate="animate"
  >
    <div className="w-full h-auto">
      <Image
        src="/Grass.svg"
        alt="Grass Layer for SuperWide Screens (3440px)"
        layout="fill"
        className="object-cover"
      />
    </div>
  </motion.div>
</div>





      </div>

      {/* Services Section */}
      <div id="services">
        <Services />
      </div>

      {/* About Section */}
      <div id="about">
        <MiniAbout />
      </div>

      {/* Packages Section */}
      <div id="packages">
        <MiniPackages />
      </div>

      <CallToAction />

      {/* Contact */}
      <div id="contact">
        <ContactForm />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
