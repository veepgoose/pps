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
     
        <motion.div
          className="absolute top-[20%] right-[2%] w-1/4 sm:top-[30%] sm:right-[8%] md:right-[25%] md:top-[7%] z-10"
          variants={cloudVariant}
          initial="initial"
          animate="animate"
        >
          <Image src="/Cloud.svg" alt="Small Cloud" width={160} height={75} />
        </motion.div>

          <motion.div
          className="absolute top-[20%] right-[2%] w-1/4 sm:top-[30%] sm:right-[8%] md:right-[10%] md:top-[15%] z-10"
          variants={cloudVariantRight}
          initial="initial"
          animate="animate"
        >
          <Image src="/Cloud.svg" alt="Cloud" width={200} height={150} />
        </motion.div>
        <motion.div
          className="absolute top-[10%] right-[17%] w-1/6 sm:top-[10%] sm:right-[20%] md:right-[0%] md:top-[5%] z-10"
          variants={cloudVariantRight}
          initial="initial"
          animate="animate"
        >
          <Image src="/Cloud.svg" alt="Small Cloud" width={150} height={75} />
        </motion.div>

         {/* PPS Logo */}
         <motion.div
          className="absolute top-[20%] left-1/2 transform -translate-x-1/2 w-1/2 md:w-[80%] md:left-[6%] md:top-[8%] z-20"
          variants={h1Variant}
          initial="initial"
          animate="animate"
        >
          <Image
            src="/Logo1.svg"
            alt="Pixel Pop Studio Logo"
            width={850}
            height={800}
          />
        </motion.div>

           {/* Animated Illustrations */}
           <motion.div
          className="absolute bottom-[9%] left-[7%] w-[20%] sm:w-[15%] md:w-1/2 z-40"
          variants={bullVariant}
          initial="initial"
          animate="animate"
        >
          <Image src="/Bull.png" alt="Bull" width={400} height={400} />
        </motion.div>

        <motion.div
          className="absolute bottom-[0%] right-[7%] w-[25%] sm:w-[20%] md:w-[70%] md:right-[-33%] z-40"
          variants={kongVariant}
          initial="initial"
          animate="animate"
        >
          <Image src="/KongStatue.png" alt="King Kong Statue" width={600} height={600} />
        </motion.div>

        <motion.div
          className="absolute bottom-[12%] right-[5%] w-[15%] sm:w-[12%] md:w-[17%] md:right-[3%] z-20"
          variants={rotundaVariant}
          initial="initial"
          animate="animate"
        >
          <Image src="/Rotunda.png" alt="Rotunda" width={350} height={350} />
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
        <motion.div
          className="absolute bottom-0 left-0 w-2/3 lg:w-2/3 z-10 scale-110 md:scale-100"
          variants={hillVariantLeft}
          initial="initial"
          animate="animate"
        >
          <Image
            src="/HillLeft.png"
            alt="Hill 1"
            width={1920}
            height={400}
            className="object-cover"
          />
        </motion.div>

        {/* Right Hill */}
        <motion.div
          className="absolute bottom-0 right-0 w-3/4 lg:w-3/4 z-20 scale-110 md:scale-100"
          variants={hillVariantRight}
          initial="initial"
          animate="animate"
        >
          <Image
            src="/HillRight.png"
            alt="Hill 2"
            width={1920}
            height={400}
            className="object-cover"
          />
        </motion.div>

         {/* Grass Layer */}
         <motion.div
          className="absolute bottom-0 w-full scale-110 md:w-full z-30" // Ensures it overlaps the hills
          variants={grassVariant}
          initial="initial"
          animate="animate"
        >
          <Image
            src="/Grass.png"
            alt="Grass Layer"
            width={1920}
            height={150} // Adjust height as needed
            className="object-cover"
          />
        </motion.div>
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
