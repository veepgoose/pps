import { motion } from 'framer-motion';
import Link from 'next/link';


const textVariant = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};


const imageVariant = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};


const MiniAbout = () => {
  return (
    <section className="py-12 bg-gradient-to-b from-light-header to-light-background  flex flex-col lg:flex-row items-center justify-center lg:px-16">
     
      {/* Profile Image */}
      <motion.div
        className="lg:w-1/3 flex justify-center lg:justify-end"
        variants={imageVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <img src="/ProVic.png" alt="Victoria Platt" className="w-64 h-64 rounded-full mb-8 lg:mb-0 lg:mr-36" />
      </motion.div>


      {/* About Text */}
      <motion.div
        className="lg:w-1/2 text-center px-4 lg:text-left lg:ml-8"
        variants={textVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <h2 className="text-2xl lg:text-4xl font-mono font-black mb-4">Behind The Pixels</h2>
     
        <p className="text-lg lg:text-lg mb-4">
  At Pixel Pop, we believe your online presence should be as unique and impactful as your business.
  We focus on creating bespoke, hand-coded websites that capture the essence of your brand and help you stand out in the digital world.
</p>
<p className="text-lg lg:text-lg mb-4">
  Our approach to web design and development combines fresh ideas with solid business understanding. Whether you&apos;re a startup in Digbeth or an established brand in Birmingham&apos;s city centre, we elevate your digital strategy with creativity and technical know-how.
</p>
<p className="text-lg lg:text-lg mb-4 pb-4 ">
  Working with Pixel Pop means collaborating directly with Victoria – a creative problem-solver who combines artistic vision, business acumen, and a strong foundation in modern web development.
</p>


       
        {/* Read More Button */}
        <div className="text-center lg:text-right">
          <Link href="/about">
            <button className="px-6 py-2 bg-[#FB6FC6] text-[#192A51] font-black font-mono rounded-lg hover:bg-[#FCFF6C] hover:text-black transition-all">
              READ MORE
            </button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};


export default MiniAbout;



