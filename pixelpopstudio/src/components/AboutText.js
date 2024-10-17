const AboutText = () => {
  return (
    <div className="relative w-11/12 md:w-[817px] h-auto min-h-[450px] md:h-[484px] mx-auto mt-8 mb-16 md:mb-32">
      {/* Background rectangles */}
      <div className="absolute w-full h-full bg-[#192A51] border-4 border-black left-1 md:left-[27px] top-1 md:top-[17px]"></div> {/* Smaller values for mobile */}
      <div className="absolute w-full h-full bg-[#7493AF] border-4 border-black"></div>

      {/* Inner text box */}
      <div className="relative w-[90%] md:w-[90%] h-auto md:h-[80%] min-h-[260px] bg-[#B1CCE4] border-4 border-black mx-auto mt-4 md:mt-10 p-6 md:p-4 flex items-center justify-center">
        <p className="text-black text-sm md:text-base lg:text-lg text-center font-mono font-normal leading-relaxed">
        Pixel Pop Studios was founded in 2024 by Victoria Platt, after 11 years of running successful businesses in the Wine industry. Vic decided to make a life-changing career switch into the world of Tech and learned how to code. Utilizing her background in design after graduating from BCU with a degree in Fine Art, Vic offers a unique blend of experience in Design, Business, and Coding.
          Utilizing her background in design after graduating from BCU with a degree in Fine Art, Vic offers a unique blend of experience in Design, Business, and Coding.
        </p>
      </div>
    </div>
  );
};

export default AboutText;

