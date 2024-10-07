import { useState } from 'react';
import PackageModal from './PackageModal'; // Import the PackageModal

const packages = [
  { id: 1, name: 'Pixel Pop Jumpstarter', description: 'Your launchpad to stand out online', backgroundColor: '#FF6347' },
  { id: 2, name: 'Pixel Pop Pro', description: 'Description for Package 2', backgroundColor: '#4682B4' },
  { id: 3, name: 'Pixel Pop Shop', description: 'Description for Package 3', backgroundColor: '#3CB371' },
  { id: 4, name: 'Pixel Pop Dominion', description: 'Description for Package 4', backgroundColor: '#FFD700' },
];

export default function PackagesCarousel() {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handlePackageClick = (pkg) => {
    setSelectedPackage(pkg);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedPackage(null);
  };

  const handlePackageSelect = (pkg) => {
    setSelectedPackage(pkg);
  };

  return (
    <div className="relative flex flex-col items-center justify-center mt-16">
      {/* Circle Group */}
      <div className="flex items-center justify-center space-x-20">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            onClick={() => handlePackageClick(pkg)}
            className="relative flex items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-110"
          >
            <svg
              width="250"
              height="250"
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
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && selectedPackage && (
        <PackageModal
          pkg={selectedPackage}
          onClose={closeModal}
          onPackageSelect={handlePackageSelect}
          packages={packages} // Pass all packages to the modal
        />
      )}
    </div>
  );
}
