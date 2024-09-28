import Image from 'next/image';

const LPLogo = ({ className }) => {
    return (
        <div className={`relative -mt-32 ${className} h-52 w-1/2`}> {/* Adjust height and width here */}
            <div className="relative w-full h-full">
                <Image
                    src="/PPSLogo.png"
                    alt="Pixel Pop Studio Logo"
                    layout="fill" 
                    objectFit="contain" 
                    priority
                />
            </div>
        </div>
    );
};

export default LPLogo;

