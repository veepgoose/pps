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
           <motion.div
  className="absolute bottom-[8%] left-[6%] w-[20vw] sm:w-[22vw] z-40 aspect-[962/728]"
  variants={bullVariant}
  initial="initial"
  animate="animate"
>
  <Image
    src="/Bull.svg"
    alt="Bull Illustration"
    layout="responsive" // Makes it scale responsively
    width={962} // Width from viewBox
    height={728} // Height from viewBox
    className="object-cover"
  />
</motion.div>


<motion.div
  className="absolute bottom-[0.5%] right-[5.5%] w-[30vw] sm:w-[50vw] md:w-[31vw] z-40 aspect-[618/756]"
  variants={kongVariant}
  initial="initial"
  animate="animate"
>
  <Image
    src="/Kong.svg"
    alt="King Kong Statue"
    layout="responsive" 
    width={618} 
    height={756} 
    className="object-cover"
  />
</motion.div>


        <motion.div
  className="absolute bottom-[20%] right-[4.5%] w-[13vw] sm:w-[13vw] aspect-[331/606] z-20"
  variants={rotundaVariant}
  initial="initial"
  animate="animate"
>
  <Image
    src="/Rotunda.svg"
    alt="Rotunda Illustration"
    layout="responsive" 
    width={331} 
    height={606} 
    className="object-cover"
  />
</motion.div>



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
    variants={hillVariantLeft}
    initial="initial"
    animate="animate"
  >
    <div className="w-full h-auto">
      <Image
        src="/LeftHillMobile.svg"
        alt="Left Hill for Mobile"
        width={393.005} // ViewBox width of the mobile SVG
        height={68.73} // ViewBox height of the mobile SVG
        layout="responsive"
        className="object-cover"
      />
    </div>
  </motion.div>

  {/* Desktop Left Hill */}
  <motion.div
    className="absolute bottom-0 left-0 w-2/3 lg:w-2/3 hidden md:block z-10 scale-110 md:scale-100"
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
        width={393.005} // ViewBox width of the mobile SVG
        height={68.73} // ViewBox height of the mobile SVG
        layout="responsive"
        className="object-cover"
      />
    </div>
  </motion.div>

  {/* Desktop Right Hill */}
  <motion.div
    className="absolute bottom-0 right-0 w-3/4 lg:w-3/4 hidden md:block z-20 scale-110 md:scale-100"
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
    className="absolute bottom-0 w-full h-auto md:hidden z-30"
    variants={grassVariant}
    initial="initial"
    animate="animate"
  >
    <div className="w-full h-auto">
      <Image
        src="/GrassMobile.svg"
        alt="Grass Layer for Mobile"
        width={393.005} // ViewBox width of the mobile SVG
        height={68.73} // ViewBox height of the mobile SVG
        layout="responsive" // Makes it responsive
        className="object-cover"
      />
    </div>
  </motion.div>

  {/* Desktop Grass Layer */}
  <motion.div
    className="absolute bottom-0 w-full h-[150px] hidden md:block lg:h-[150px] z-30"
    variants={grassVariant}
    initial="initial"
    animate="animate"
  >
    <div className="w-full h-auto">
      <Image
        src="/Grass.svg"
        alt="Grass Layer for Desktop"
        layout="fill" // Fills its parent container
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
