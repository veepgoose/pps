import { motion } from 'framer-motion';

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
    <section className="py-12 bg-gradient-to-b from-light-background to-light-header dark:from-dark-background dark:to-dark-footer flex flex-col lg:flex-row items-center justify-center lg:px-16">
      <h2 className="text-2xl lg:text-4xl font-bold mb-8 lg:mb-0 text-center lg:text-left lg:hidden">
        About Me
      </h2>

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
        className="lg:w-1/2 text-center lg:text-left lg:ml-8"
        variants={textVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <h2 className="text-2xl lg:text-4xl font-bold mb-4 hidden lg:block">About Me</h2>
        <p className="text-lg lg:text-xl mb-4">
          Pixel Pop Studios was founded in 2024 by Victoria Platt, after 11 years of running successful businesses in the Wine industry. Vic decided to make a life-changing career switch into the world of Tech and learned how to code. Utilizing her background in design after graduating from BCU with a degree in Fine Art, Vic offers a unique blend of experience in Design, Business, and Coding.
        </p>
        <p className="text-lg lg:text-xl mb-4">
          Pixel Pop Studios was founded in 2024 by Victoria Platt, after 11 years of running successful businesses in the Wine industry. Vic decided to make a life-changing career switch into the world of Tech and learned how to code. Utilizing her background in design after graduating from BCU with a degree in Fine Art, Vic offers a unique blend of experience in Design, Business, and Coding.
        </p>
        
        {/* Read More Button */}
        <div className="text-right">
          <button className="px-6 py-2 bg-[#FB6FC6] text-[#FFF6E3] font-black font-mono rounded-lg hover:bg-[#FCFF6C] hover:text-black transition-all">
            Read More
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default MiniAbout;

