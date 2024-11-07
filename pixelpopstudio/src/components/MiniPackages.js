'use client';

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
  
  return (
    <section className="relative py-12 text-center flex flex-col min-h-screen overflow-hidden bg-gradient-to-b from-light-footer to-light-header dark:from-dark-background dark:to-dark-footer">
      {/* Heading and Text with motion */}
      <div className="relative z-10">
        <motion.h2
          className="text-2xl lg:text-4xl font-mono font-black mt-20 mb-16"
          variants={headerVariant}
          initial="initial"
          animate="animate"
        >
          Pixel Pop Packages
        </motion.h2>
        <motion.p
          className="max-w-xl mx-auto font-bold p-4"
          variants={textVariant}
          initial="initial"
          whileInView="animate"
        >
          Elevate Your Online Presence with Pixel Pop Studio
        </motion.p>
        <motion.p
          className="max-w-3xl mx-auto p-4"
          variants={textVariant}
          initial="initial"
          whileInView="animate"
        >
          At Pixel Pop Studio, we blend creativity with technical expertise to craft websites that truly represent your brand. While we excel in creating bespoke, hand-coded solutions, we understand that you might be looking for a starting point. That&apos;s why we&apos;ve developed four distinct packages: Pixel Pop Jumpstart, Pixel Pop Pro, Pixel Pop Shop, and Pixel Pop Power.
        </motion.p>
        <motion.p
          className="max-w-3xl mx-auto p-4"
          variants={textVariant}
          initial="initial"
          whileInView="animate"
        >
          These packages offer a glimpse into our process and pricing, but remember - they&apos;re just the beginning. Whether you find a package that fits or need something completely unique, we&apos;re here to help. Explore our options below, and don&apos;t hesitate to reach out for an in-depth discussion on how we can elevate your digital presence and propel your business to new heights.
        </motion.p>
      </div>


      {/* Starry background with animation */}
      <motion.div className="absolute inset-0 w-full h-full flex justify-center items-center z-0 pointer-events-none overflow-hidden">
        <motion.img
          src="/starrySky1.svg"
          alt="Starry background 1"
          className="absolute left-0 w-1/2 h-full object-cover opacity-40"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 0.5, x: 0, transition: { duration: 2 } }}
        />
        <motion.img
          src="/starrySky2.svg"
          alt="Starry background 2"
          className="absolute right-0 w-1/2 h-full object-cover opacity-40"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 0.5, x: 0, transition: { duration: 2 } }}
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





