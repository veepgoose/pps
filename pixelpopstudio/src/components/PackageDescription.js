const PackageDescription = ({ description }) => {
    return (
      <div className="relative w-[817px] h-[484px] mx-auto mt-16 mb-28">
        {/* Background rectangles */}
        <div className="absolute w-full h-full bg-[#192A51] border-4 border-black left-[27px] top-[17px]"></div>
        <div className="absolute w-full h-full bg-[#7493AF] border-4 border-black"></div>
  
        {/* Inner text box */}
        <div className="relative w-[90%] h-[80%] bg-[#B1CCE4] border-4 border-black mx-auto mt-10 p-4 flex items-center justify-center">
          <p className="text-black text-lg text-center font-inter font-black leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    );
  };
  
  export default PackageDescription;
  