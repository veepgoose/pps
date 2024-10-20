import { motion } from 'framer-motion';
import SocialIcons from './SocialIcons';

export default function Menu({ isOpen, onClose }) {
  if (!isOpen) return null;

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      onClose();  // Close the menu after navigating to the section
    }
  };

  return (
    <div
      className="fixed inset-0 p-5 shadow-lg z-50 bg-gradient-to-r from-[#FB6FC6] to-[#FCFF6C] text-[#192A51] px-4 lg:px-16"
    >
      {/* Improved X for closing the menu */}
      <div className="absolute top-4 right-4">
        <motion.div
          className="w-8 h-8 bg-transparent cursor-pointer flex flex-col justify-center items-center"
          onClick={onClose}
        >
          {/* Top line */}
          <motion.span
            className="block h-0.5 w-full bg-[#192A51]"
            animate={isOpen ? "open" : "closed"}
          />
          {/* Bottom line */}
          <motion.span
            className="block h-0.5 w-full bg-[#192A51]"
            animate={isOpen ? "open" : "closed"}
          />
        </motion.div>
      </div>

      {/* Menu Items */}
      <nav className="mt-10">
        <ul className="space-y-4">
          <li>
            <button 
              onClick={() => scrollToSection('services')} 
              className="block p-6 py-8 text-5xl text-left font-bold">
              Services
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('about')} 
              className="block p-6 py-8 text-5xl text-left font-bold">
              About
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('packages')} 
              className="block p-6 py-8 text-5xl text-left font-bold">
              Packages
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="block p-6 py-8 text-5xl text-left font-bold">
              Contact
            </button>
          </li>
        </ul>
      </nav>

      {/* Social Icons positioned higher */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center items-center">
        <SocialIcons />
      </div>
    </div>
  );
}
