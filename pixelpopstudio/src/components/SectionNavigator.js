import { useState } from 'react';

const SectionNavigator = ({ content }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % content.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? content.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-[817px] h-[484px] mx-auto mt-8 mb-28">
      {/* Background rectangles */}
      <div className="absolute w-full h-full bg-[#192A51] border-4 border-black left-[27px] top-[17px]"></div>
      <div className="absolute w-full h-full bg-[#7493AF] border-4 border-black"></div>

      {/* Inner text box */}
      <div className="relative w-[90%] h-[80%] bg-[#B1CCE4] border-4 border-black mx-auto mt-10 p-4 flex items-center justify-center">
        <p className="text-black text-lg text-center font-inter font-black leading-relaxed">
          {content[currentIndex]}
        </p>
      </div>

      {/* Navigation buttons */}
      <div className="flex space-x-4 mt-4 justify-center">
        <button onClick={handlePrevious} className="text-white text-2xl">
          ←
        </button>
        <button onClick={handleNext} className="text-white text-2xl">
          →
        </button>
      </div>
    </div>
  );
};

export default SectionNavigator;
