import SocialIcons from "./SocialIcons";

export default function Menu({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 p-5 shadow-lg z-50 bg-light-menuBackground text-light-menuText dark:bg-dark-menuBackground dark:text-dark-menuText"
    >
      <button 
        onClick={onClose} 
        className="absolute top-4 right-4 focus:outline-none text-light-header dark:text-dark-header"
      >
        Close
      </button>

      <nav className="mt-10">
        <ul className="space-y-4"> {/* Adds spacing between list items */}
          <li>
            <a href="/about" className="block p-6  py-8 text-6xl text-left font-bold"> {/* Adjust text size and centering */}
              About
            </a>
          </li>
          <li>
            <a href="/work" className="block p-6 py-8 text-6xl text-left font-bold"> {/* Adjust text size and centering */}
              Work
            </a>
          </li>
          <li>
            <a href="/packages" className="block p-6 py-8 text-6xl text-left font-bold">
              Packages
            </a>
          </li>
          <li>
            <a href="/blog" className="block p-6 py-8 text-6xl text-left font-bold">
              Blog
            </a>
          </li>
          <li>
            <a href="/contact" className="block p-6 py-8 text-6xl text-left font-bold">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div className="mt-10">
        <SocialIcons />
      </div>
    </div>
  );
}
