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
{/* Left Cloud */}
<motion.div
  className="absolute top-[42%] right-[70%] w-[15vw] md:right-[35%] md:top-[7%] sm:w-[15vw] sm:right-[35%] z-10"
  variants={cloudVariant}
  initial="initial"
  animate="animate"
>
  <Image
    src="/Cloud.svg"
    alt="Small Cloud"
    layout="intrinsic" 
    width={160} 
    height={160

    }
    className="object-cover"
  />
</motion.div>

{/* Middle Cloud */}
<motion.div
  className="absolute top-[50%] right-[35%] w-[18vw] sm:w-[12vw] md:w-[10.5vw] sm:top-[30%] sm:right-[8%] md:right-[24%] md:top-[15%] z-10"
  variants={cloudVariantRight}
  initial="initial"
  animate="animate"
>
  <Image
    src="/Cloud.svg"
    alt="Cloud"
    layout="responsive"
    width={200} // SVG width
    height={150} // SVG height
    className="object-cover"
  />
</motion.div>

{/* Right Cloud */}
<motion.div
  className="absolute top-[40%] right-[15%] w-[12vw] sm:w-[8vw] md:w-[8vw] sm:top-[10%] sm:right-[20%] md:right-[8%] md:top-[5%] z-10"
  variants={cloudVariantRight}
  initial="initial"
  animate="animate"
>
  <Image
    src="/Cloud.svg"
    alt="Small Cloud"
    layout="responsive"
    width={150} // SVG width
    height={75} // SVG height
    className="object-cover"
  />
</motion.div>


{/* PPS Logo */}
<motion.div
  className="absolute top-[10%] w-full flex justify-center md:top-[8%] md:justify-start md:left-[6%] z-20"
  variants={h1Variant}
  initial="initial"
  animate="animate"
>
  <div className="w-[85vw] sm:w-[70vw] md:w-[45%] aspect-[1450/850]">
    <Image
      src="/Logo1.svg"
      alt="Pixel Pop Studio Logo"
      layout="responsive"
      width={1450}
      height={850}
      className="object-cover"
    />
  </div>
</motion.div>



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
        width={393.005} // ViewBox width
        height={68.73} // ViewBox height
        layout="responsive"
        className="object-cover"
      />
    </div>
  </motion.div>

  {/* Tablet Grass Layer */}
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

  {/* Desktop Grass Layer */}
  <motion.div
    className="absolute bottom-0 hidden lg:block w-full lg:h-[150px] z-30"
    variants={grassVariant}
    initial="initial"
    animate="animate"
  >
    <div className="w-full h-auto">
      <Image
        src="/Grass.svg"
        alt="Grass Layer for Desktop"
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
