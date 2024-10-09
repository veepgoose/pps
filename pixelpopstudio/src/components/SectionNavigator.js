import { useState } from 'react';

const SectionNavigator = ({ content, theme }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % content.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? content.length - 1 : prevIndex - 1
    );
  };

  const backgroundColor1 = theme === 'dark' ? 'bg-[#192A51]' : 'bg-[#192A51]';
  const backgroundColor2 = theme === 'dark' ? 'bg-[#7493AF]' : 'bg-[#7493AF]';
  const textBoxBackground = theme === 'dark' ? 'bg-[#B1CCE4]' : 'bg-[#B1CCE4]';
  const buttonBackground = theme === 'dark' ? 'bg-[#192A51]' : 'bg-[#192A51]';

  return (
    <div className="relative w-[817px] h-[484px] mx-auto mt-8 mb-28">
      {/* Background rectangles */}
      <div className={`absolute w-full h-full ${backgroundColor1} border-4 border-black left-[27px] top-[17px]`}></div>
      <div className={`absolute w-full h-full ${backgroundColor2} border-4 border-black`}></div>

      {/* Inner text box */}
      <div className={`relative w-[90%] h-[80%] ${textBoxBackground} border-4 border-black mx-auto mt-10 p-4 flex items-center justify-center`}>
        <p className="text-black text-lg text-center font-inter font-black leading-relaxed">
          {content[currentIndex]}
        </p>
      </div>

      {/* Navigation buttons */}
      <div className="absolute inset-0 flex justify-between items-center px-4">
        {/* Left Arrow */}
        <button 
          onClick={handlePrevious} 
          className={`text-white text-4xl ${buttonBackground} rounded-full w-12 h-12 flex items-center justify-center`}
        >
          ←
        </button>
        
        {/* Right Arrow */}
        <button 
          onClick={handleNext} 
          className={`text-white text-4xl ${buttonBackground} rounded-full w-12 h-12 flex items-center justify-center`}
        >
          →
        </button>
      </div>
    </div>
  );
};

export default SectionNavigator;
