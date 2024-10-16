
const PackageMenu = ({ currentPackage, setCurrentPackage }) => {
  const packageCount = 5; // Total number of packages

  return (
    <div className="relative flex flex-col items-center mb-4">
      <Rectangles /> {/* Include the background rectangles */}

      <div className="flex justify-center space-x-2 md:space-x-4 absolute">
        {[...Array(packageCount)].map((_, index) => (
          <div
            key={index}
            className={`relative cursor-pointer transition-transform duration-300 ${
              currentPackage === index + 1 ? "scale-100" : "scale-75"
            }`}
            onClick={() => setCurrentPackage(index + 1)}
          >
            <svg width="40" height="44" viewBox="0 0 52 58" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-[52px] md:h-[58px]">
              <circle cx="30.5617" cy="36.5411" r="20.5959" fill="#192A51" />
              <circle cx="23.5856" cy="23.5856" r="22.0856" fill="#FB6FC6" stroke="black" strokeWidth="3" />
            </svg>
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-sm md:text-base">
              {index + 1}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PackageMenu;