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
import { starryHeroVariant1, starryHeroVariant2, hillVariantLeft, hillVariantRight, grassVariant } from '@/utils/motion';

// Animation variants for the clouds
const cloudVariant = {
  initial: { opacity: 0, x: '-100vw' },
  animate: { opacity: 1, x: 0, transition: { duration: 2, ease: 'easeInOut' } }
};

const cloudVariantRight = {
  initial: { opacity: 0, x: '100vw' },
  animate: { opacity: 1, x: 0, transition: { duration: 2, ease: 'easeInOut' } }
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden relative">
      {/* Hero Section */}
      <div className="relative flex flex-col flex-grow w-full min-h-screen bg-gradient-to-b from-light-header to-light-sectionPrimary">
        {/* Header */}
        <Header />

        {/* Animated Clouds */}
        <motion.div
          className="absolute top-[20%] left-[2%] w-1/4 sm:top-[30%] sm:left-[5%] md:left-[10%] z-10"
          variants={cloudVariant}
          initial="initial"
          animate="animate"
        >
          <Image src="/Cloud.svg" alt="Cloud" width={300} height={150} />
        </motion.div>
        <motion.div
          className="absolute top-[7%] left-[17%] w-1/6 sm:top-[10%] sm:left-[15%] md:left-[30%] z-10"
          variants={cloudVariant}
          initial="initial"
          animate="animate"
        >
          <Image src="/Cloud.svg" alt="Small Cloud" width={150} height={75} />
        </motion.div>
        <motion.div
          className="absolute top-[20%] right-[2%] w-1/4 sm:top-[30%] sm:right-[8%] md:right-[5%] z-10"
          variants={cloudVariantRight}
          initial="initial"
          animate="animate"
        >
          <Image src="/Cloud.svg" alt="Cloud" width={300} height={150} />
        </motion.div>
        <motion.div
          className="absolute top-[7%] right-[17%] w-1/6 sm:top-[10%] sm:right-[20%] md:right-[24%] z-10"
          variants={cloudVariantRight}
          initial="initial"
          animate="animate"
        >
          <Image src="/Cloud.svg" alt="Small Cloud" width={150} height={75} />
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
            src="/HillLeft.svg"
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
            src="/HillRight.svg"
            alt="Hill 2"
            width={1920}
            height={400}
            className="object-cover"
          />
        </motion.div>

         {/* Grass Layer */}
         <motion.div
          className="absolute bottom-0 w-full md:w-full z-30" // Ensures it overlaps the hills
          variants={grassVariant}
          initial="initial"
          animate="animate"
        >
          <Image
            src="/Grass.svg"
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
