import { useState } from 'react';
import { motion } from 'framer-motion';
import PackageDescription from './PackageDescription';

// Example package data
const packages = [
  { id: 1, name: 'Package 1', description: 'Description for Package 1' },
  { id: 2, name: 'Package 2', description: 'Description for Package 2' },
  { id: 3, name: 'Package 3', description: 'Description for Package 3' },
];

export default function PackagesCarousel() {
  const [selectedPackage, setSelectedPackage] = useState(2); // Start with the center circle selected

  return (
    <div className="relative flex flex-col items-center justify-center mt-16">
      {/* Circle Group */}
      <div className="flex items-center justify-center space-x-8">
        {packages.map((pkg, index) => (
          <motion.div
            key={pkg.id}
            onClick={() => setSelectedPackage(pkg.id)}
            className="relative flex items-center justify-center cursor-pointer"
            initial={false}
            animate={{
              width: selectedPackage === pkg.id ? 339 : 250, // Center one larger
              height: selectedPackage === pkg.id ? 337 : 250, // Center one larger
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              width={selectedPackage === pkg.id ? '339' : '250'}
              height={selectedPackage === pkg.id ? '337' : '250'}
              viewBox="0 0 339 337"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M337 182C337 266.493 268.282 335 183.5 335C98.7182 335 30 266.493 30 182C30 97.5065 98.7182 29 183.5 29C268.282 29 337 97.5065 337 182Z"
                fill="#192A51"
                stroke="black"
                strokeWidth="4"
              />
              <circle
                cx="155"
                cy="155"
                r="152.5"
                fill="#FB6FC6"
                stroke="black"
                strokeWidth="5"
              />
            </svg>
            {/* Package name inside the circle */}
            <span className="absolute text-white text-center font-bold text-lg">
              {pkg.name}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Package description */}
      {selectedPackage && (
        <PackageDescription
          description={packages.find((pkg) => pkg.id === selectedPackage)?.description}
        />
      )}
    </div>
  );
}
