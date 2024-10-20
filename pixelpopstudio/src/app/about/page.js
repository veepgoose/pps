'use client';

import { useState, useEffect } from 'react';
import FooterAlt from '@/components/FooterAlt';
import SiteHeader from '@/components/SiteHeader';
import ThemeToggle from '@/components/ThemeToggle';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Motion Variants for the starry background, heading, and icon animation
const starryHeroVariant1 = {
  initial: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0, transition: { duration: 2 } },
};

const starryHeroVariant2 = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0, transition: { duration: 2 } },
};

const contentVariant = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const imageVariant = {
  initial: { opacity: 0, y: -100 },
  animate: { opacity: 1, y: 0, transition: { duration: 1.5 } },
};

export default function AboutPage() {
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

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-light-header to-light-footer ">
      <SiteHeader>
        <ThemeToggle darkMode={theme === 'dark'} toggleTheme={toggleTheme} />
      </SiteHeader>

      {/* Starry Background Section */}
      <div className="relative flex flex-col items-center justify-start flex-grow pt-16 pb-2 md:pt-24 lg:-mt-6 lg:pb-8">
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

        {/* Profile Image with animation */}
        <motion.div
          className="relative z-10 w-2/6 md:w-2/3 lg:w-1/6"
          variants={imageVariant}
          initial="initial"
          animate="animate"
        >
          <Image
            src="/ProVic.png"
            alt="Victoria Platt"
            width={150}
            height={100}
            layout="responsive"
          />
        </motion.div>

        {/* Heading and Intro Text */}
        <motion.div
          className="relative z-10 text-center mt-8"
          variants={contentVariant}
          initial="initial"
          animate="animate"
        >
          <h1 className="text-3xl font-mono font-black mb-4">THE PERSON BEHIND THE PIXELS</h1>
          <p className="italic mb-2">Creative Web Designer and Developer in Birmingham</p>
        </motion.div>
      </div>

      {/* Main Content Section */}
      <motion.div 
        className="px-6 md:px-16 lg:px-24"
        variants={contentVariant}
        initial="initial"
        animate="animate"
      >
        {/* About Section */}
        <div className="w-full p-4">
          <p className="text-lg mb-4">
            I'm Victoria Platt, founder and creative director of Pixel Pop Studio, a fresh face in the web design and development scene in Birmingham, UK. My journey to web design and development has been an exciting blend of creativity and business acumen, shaping a unique approach to digital solutions.
          </p>
          <p className="text-lg mb-4">
            With a background in fine art and filmmaking from Birmingham City University, I've always been passionate about visual storytelling and creative problem-solving. This artistic foundation, combined with over two decades of business experience in Birmingham, informs my approach to web design and development at Pixel Pop Studio.
          </p>
          <p className="text-lg mb-4">
            Before embarking on my journey as a web developer, I co-founded and ran Loki Wine for a decade. This venture allowed me to wear multiple hats - from brand strategist to venue designer, and from team manager to e-commerce developer. Following my success with Loki Wine, I went on to consult for other well-known wine brands, including Wine Freedom and Vagabond. These experiences honed my skills in identifying business strengths, overcoming industry-specific challenges, and crafting innovative solutions to drive growth across various business models.
          </p>
          <p className="text-lg mb-4">
            In 2023, I made the exciting decision to fully immerse myself in software development. I completed an intensive FullStack Development bootcamp with the School of Code, adding technical skills to my creative and business background. This transition wasn't just a career change; it was a way to fully utilise my skill set and merge my passion for design with modern web technology, all to benefit businesses in Birmingham and beyond.
          </p>
        </div>

        {/* Linking to Pixel Pop Studio */}
        <div className="w-full p-4 mt-8">
          <h3 className="text-2xl font-bold mb-4">Bringing Experience to Life at Pixel Pop Studio</h3>
          <p className="text-lg mb-4">
            At Pixel Pop Studio, I bring this diverse experience to every web project. Whether it's designing an engaging website, developing a functional e-commerce platform, or crafting a digital strategy, my approach is always holistic. I consider not just the aesthetic and technical aspects of web development, but also the broader business implications and user experience.
          </p>
          <p className="text-lg mb-4">
            My goal is to create digital solutions that are as unique and effective as the Birmingham businesses they represent. By combining custom web designs with strategic business insights, I aim to provide more than just a website - but a valuable tool for digital success in the competitive Birmingham market.
          </p>
          <p className="text-lg">
            Curious about how we can bring your digital vision to life? Check out our <a href="/#packages" className="text-blue-600 hover:underline">packages</a> or get in touch to start your journey with Pixel Pop Studio.
          </p>
        </div>

        {/* Closing Statement */}
        <div className="w-full p-4 mt-4 pb-24">
          <p className="text-lg text-center font-bold">
            Let's work together to create something that truly represents your brand in the digital space!
          </p>
        </div>
      </motion.div>

      <FooterAlt theme={theme} />
    </div>
  );
}