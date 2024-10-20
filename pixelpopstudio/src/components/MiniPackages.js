'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Animation Variants for header, text, and packages
const headerVariant = {
  initial: { opacity: 0, y: -50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const textVariant = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const packageVariant = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const MiniPackages = () => {
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
    <section className="relative py-12 text-center flex flex-col min-h-screen overflow-hidden bg-gradient-to-b from-light-footer to-light-menuText dark:from-dark-background dark:to-dark-footer">
      {/* Heading and Text with motion */}
      <div className="relative z-10">
        <motion.h2
          className="text-2xl lg:text-4xl font-mono font-black mt-20 mb-16"
          variants={headerVariant}
          initial="initial"
          animate="animate"
        >
          PIXEL POP PACKAGES
        </motion.h2>
        <motion.p
          className="max-w-xl mx-auto"
          variants={textVariant}
          initial="initial"
          whileInView="animate"
        >
          When it comes to working with Pixel Pop Studio, the stratosphere is the limit! Whether you’re looking for a simple website, or a full E-Commerce store, everything is hand coded, so whatever you dream is possible! Much unlike the limitations of website builders. PPS can cater for your every need, so get in touch for an in-depth chat about how we can help you. Otherwise, we offer some packages which will give you an idea of our process and pricing. {' '}
        </motion.p>
      </div>

      {/* Starry background with animation */}
      <motion.div className="absolute inset-0 w-full h-full flex justify-center items-center z-0 pointer-events-none overflow-hidden">
        <motion.img
          src="/starrySky1.svg"
          alt="Starry background 1"
          className="absolute left-0 w-1/2 h-full object-cover opacity-40"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 2 } }}
        />
        <motion.img
          src="/starrySky2.svg"
          alt="Starry background 2"
          className="absolute right-0 w-1/2 h-full object-cover opacity-40"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 2 } }}
        />
      </motion.div>

      {/* Packages Grid */}
      <div className="relative z-10 grid grid-cols-2 gap-4 md:grid-cols-4 mt-12 pb-16 md:mt-8 lg:mt-16 xl:mt-32 px-4 lg:pb-16">
        {/* Package 1 */}
        <motion.div
          className="flex flex-col items-center"
          variants={packageVariant}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="w-3/4 md:w-2/3 lg:w-2/3">
            <Link href="/jumpstart">
              <Image src="/JumpstartIcon.png" alt="Jumpstart Package" width={150} height={100} layout="responsive" />
            </Link>
          </div>
        </motion.div>

        {/* Package 2 */}
        <motion.div
          className="flex flex-col items-center"
          variants={packageVariant}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="w-3/4 md:w-2/3 lg:w-2/3">
            <Link href="/pro">
              <Image src="/ProIcon.png" alt="Pro Package" width={150} height={100} layout="responsive" />
            </Link>
          </div>
        </motion.div>

        {/* Package 3 */}
        <motion.div
          className="flex flex-col items-center"
          variants={packageVariant}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="w-3/4 md:w-2/3 lg:w-2/3">
            <Link href="/shop">
              <Image src="/ShopIcon.png" alt="Shop Package" width={150} height={100} layout="responsive" />
            </Link>
          </div>
        </motion.div>

        {/* Package 4 */}
        <motion.div
          className="flex flex-col items-center"
          variants={packageVariant}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="w-3/4 md:w-2/3 lg:w-2/3">
            <Link href="/power">
              <Image src="/PowerIcon.png" alt="Power Package" width={150} height={100} layout="responsive" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MiniPackages;




