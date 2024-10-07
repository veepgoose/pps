// PackageModal.js
import React from 'react';
import { motion } from 'framer-motion';


const PackageModal = ({ pkg, onClose, onPackageSelect, packages }) => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-between bg-black bg-opacity-80">
      <motion.div
        className={`relative flex flex-col items-center justify-center w-full h-full`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }} // Animation duration
        style={{ backgroundColor: pkg.backgroundColor }}
      >
        <motion.div
          className="flex items-center justify-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          transition={{ duration: 0.5 }} // Circle scale animation
        >
          <svg
            width="339"
            height="337"
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
          <span className="absolute text-white text-center font-bold text-lg">
            {pkg.name}
          </span>
        </motion.div>

        <p className="text-white mt-4 text-center">{pkg.description}</p>

        <button onClick={onClose} className="absolute top-5 right-5 text-white">
          X
        </button>
      </motion.div>

    </div>
  );
};

export default PackageModal;
