import Image from 'next/image';
import Link from 'next/link';

const HeaderLogo = ({ className }) => {
    return (
        <Link href="/" className={`relative block ${className} cursor-pointer`}>
            <div className="relative">
                <svg
                    width="190"
                    height="80"
                    viewBox="0 0 190 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-1"
                >
                    <rect
                        x="10"
                        y="10"
                        width="170"
                        height="66"
                        fill="#FCFF6C"
                        stroke="#000000"
                        strokeWidth="4"
                    />
                </svg>
                
                <div className="absolute inset-0 flex justify-center items-center">
                    <Image
                        src="/P.P.SLogo.png"
                        alt="Pixel Pop Studio Logo Text"
                        width={140}
                        height={54}
                        style={{ objectFit: 'contain' }}
                        priority
                    />
                </div>
            </div>
        </Link>
    );
};

export default HeaderLogo;








