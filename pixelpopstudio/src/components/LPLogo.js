import Image from 'next/image';

const LPLogo = ({ className }) => {
    return (
        <div className={`relative -mt-32 ${className} h-96`}> {/* Adjust height as needed */}
            <div className="relative w-full h-full">
                <Image
                    src="/PPSLogo.png" // Updated to your new logo file
                    alt="Pixel Pop Studio Logo"
                    layout="fill" // Maintain aspect ratio
                    objectFit="none" // Adjust to fill the container while keeping the aspect ratio
                    priority
                />
            </div>
        </div>
    );
};

export default LPLogo;
