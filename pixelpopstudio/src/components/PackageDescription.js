const PackageDescription = ({ description }) => {
  return (
    <div className="relative w-full max-w-[817px] mx-auto mt-8 mb-12 md:mt-16 md:mb-28 px-4">
      {/* Background rectangles */}
      <div className="absolute w-full h-full bg-[#192A51] border-4 border-black left-2 top-2 md:left-[27px] md:top-[17px]"></div>
      <div className="absolute w-full h-full bg-[#7493AF] border-4 border-black"></div>

      {/* Inner text box */}
      <div className="relative w-[90%] bg-[#B1CCE4] border-4 border-black mx-auto mt-6 md:mt-10 p-4 flex items-center justify-center">
        <p className="text-black text-base md:text-lg text-center font-inter font-black leading-relaxed py-8 md:py-16">
          {description}
        </p>
      </div>
    </div>
  );
};

export default PackageDescription;