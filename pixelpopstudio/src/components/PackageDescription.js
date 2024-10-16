const PackageDescription = ({ description }) => {
  return (
    <div className="relative w-full sm:w-[90%] md:w-[817px] h-auto min-h-[200px] md:min-h-[300px] mx-auto mt-8 md:mt-16 mb-12 md:mb-28">
      {/* Background rectangles */}
      <div className="absolute w-full h-full bg-[#192A51] border-4 border-black left-1 sm:left-[10px] md:left-[27px] top-1 sm:top-[10px] md:top-[17px]"></div>
      <div className="absolute w-full h-full bg-[#7493AF] border-4 border-black"></div>

      {/* Inner text box */}
      <div className="relative w-[95%] sm:w-[90%] h-auto min-h-[150px] md:min-h-[260px] bg-[#B1CCE4] border-4 border-black mx-auto mt-4 sm:mt-6 md:mt-10 p-4 md:p-6 flex items-center justify-center">
        <p className="text-sm sm:text-base md:text-lg text-center font-inter font-black leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default PackageDescription;
