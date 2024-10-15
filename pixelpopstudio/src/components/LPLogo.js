import Image from 'next/image';

const LPLogo = ({ className }) => {
    return (
        <div className={`relative -my-6 md:-mt-28 lg:-mt-36 ${className} h-32 md:h-64 lg:h-72 w-3/4 mx-auto`}>
            {/* SVG for the yellow rectangle */}
            <svg 
                width="100%" 
                height="100%" 
                viewBox="0 0 745 200" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-0 left-0 w-full h-full hidden lg:block"
            >
                <rect 
                    x="90" 
                    y="22" 
                    width="560"
                    height="125" 
                    fill="#FCFF6C" 
                    stroke="black" 
                    strokeWidth="4" 
                />
            </svg>

            {/* PNG for the logo text on top */}
            <div className="absolute inset-0 flex justify-center items-center h-32 w-full md:h-64 lg:h-72 w-3/4 mx-auto ">
                <div className="flex items-center justify-center h-full">
                    <Image
                        src="/PPSLogoMainBlack.png"
                        alt="Pixel Pop Studio Logo Text"
                        width={700}  // Set for larger screens
                        height={0}
                        style={{ objectFit: 'contain', height: 'auto' }}
                        className="w-full"
                        priority
                    />
                </div>
            </div>
        </div>
    );
};

export default LPLogo;





