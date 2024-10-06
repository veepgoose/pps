const AboutText = () => {
    return (
      <div className="relative w-[817px] h-[484px] mx-auto mt-8 mb-28">
        {/* Background rectangles */}
        <div className="absolute w-full h-full bg-[#192A51] border-4 border-black left-[27px] top-[17px]"></div>
        <div className="absolute w-full h-full bg-[#7493AF] border-4 border-black"></div>
  
        {/* Inner text box */}
        <div className="relative w-[90%] h-[80%] bg-[#B1CCE4] border-4 border-black mx-auto mt-10 p-4 flex items-center justify-center">
          <p className="text-black text-lg text-center font-inter font-black leading-relaxed">
            Pixel Pop Studios was founded in 2024 by Victoria Platt, after 11 years of running successful businesses in the Wine industry. Vic decided to make a life-changing career switch into the world of Tech and learned how to code. Utilizing her background in design after graduating from BCU with a degree in Fine Art, Vic offers a unique blend of experience in Design, Business, and Coding.
            Pixel Pop Studios was founded in 2024 by Victoria Platt, after 11 years of running successful businesses in the Wine industry. Vic decided to make a life-changing career switch into the world of Tech and learned how to code. Utilizing her background in design after graduating from BCU with a degree in Fine Art, Vic offers a unique blend of experience in Design, Business, and Coding.          
          </p>
        </div>
      </div>
    );
  };
  
  export default AboutText;
  