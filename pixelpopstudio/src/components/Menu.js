import { motion } from 'framer-motion';
import SocialIcons from './SocialIcons';

// Animation for the burger icon and the X icon
const xIconVariant = {
  open: { rotate: 45, y: 5, transition: { duration: 0.3 } },
  closed: { rotate: 0, y: 0, transition: { duration: 0.3 } }
};

const middleIconVariant = {
  open: { opacity: 0 },
  closed: { opacity: 1 }
};

const bottomIconVariant = {
  open: { rotate: -45, y: -5, transition: { duration: 0.3 } },
  closed: { rotate: 0, y: 0, transition: { duration: 0.3 } }
};

export default function Menu({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 p-5 shadow-lg z-50 bg-gradient-to-r from-[#FB6FC6] to-[#FCFF6C] opacity-90 text-[#192A51] px-4 lg:px-16"
    >
      {/* Improved X for closing the menu */}
      <div className="absolute top-4 right-4">
        <motion.div
          className="w-8 h-8 bg-transparent cursor-pointer flex flex-col justify-between"
          onClick={onClose}
        >
          {/* Top line */}
          <motion.span
            className="block h-1 bg-black"
            animate={isOpen ? "open" : "closed"}
            variants={xIconVariant}
          />
          {/* Middle line */}
          <motion.span
            className="block h-1 bg-black"
            animate={isOpen ? "open" : "closed"}
            variants={middleIconVariant}
          />
          {/* Bottom line */}
          <motion.span
            className="block h-1 bg-black"
            animate={isOpen ? "open" : "closed"}
            variants={bottomIconVariant}
          />
        </motion.div>
      </div>

      {/* Menu Items */}
      <nav className="mt-10">
        <ul className="space-y-4">
          <li>
            <a href="/about" className="block p-6 py-8 text-5xl text-left font-bold">
              About
            </a>
          </li>
          <li>
            <a href="/portfolio" className="block p-6 py-8 text-5xl text-left font-bold">
              Portfolio
            </a>
          </li>
          <li>
            <a href="/packages" className="block p-6 py-8 text-5xl text-left font-bold">
              Packages
            </a>
          </li>
          <li>
            <a href="/blog" className="block p-6 py-8 text-5xl text-left font-bold">
              Blog
            </a>
          </li>
          <li>
            <a href="/contact" className="block p-6 py-8 text-5xl text-left font-bold">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* Social Icons at the bottom */}
      <div className="flex justify-center items-center mt-12">
        <SocialIcons />
      </div>
    </div>
  );
}
