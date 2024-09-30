import Image from 'next/image';

const LPLogo = ({ className }) => {
    return (
        <div className={`relative -mt-28 ${className} h-64 w-full`}>
            {/* SVG for the yellow rectangle */}
            <svg 
                width="100%" 
                height="100%" 
                viewBox="0 0 745 200" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-0 left-0 w-full h-full"
            >
                <rect 
                    x="3" 
                    y="3" 
                    width="739" 
                    height="155" 
                    fill="#FCFF6C" 
                    stroke="black" 
                    strokeWidth="4" 
                />
            </svg>

            {/* PNG for the logo text on top */}
            <div className="absolute inset-0 flex justify-center items-center">
                <div className="flex items-center justify-center h-full">
                    <Image
                        src="/PPSLogoMainBlack.png"  // Use the PNG for the text here
                        alt="Pixel Pop Studio Logo Text"
                        width={700}  // Set the width, adjust as needed
                        height={0}  // Set height to 0 to allow auto height adjustment
                        style={{ objectFit: 'contain', height: 'auto' }}  // Allow height to adjust automatically
                        priority
                    />
                </div>
            </div>
        </div>
    );
};

export default LPLogo;



