// src/components/PackageSection.js
import SectionNavigator from './SectionNavigator';

export default function PackageSection({ pkg, theme }) {
  const content = [
    pkg.description,
    "Why choose Pixel Pop Studio?",
    "Power-Ups (Add-on services)",
    "Each package includes",
    "Payment terms"
  ];

  const backgroundClass = pkg.id % 2 === 0 
    ? theme === 'dark' ? 'bg-[#7493AF]' : 'bg-[#FFF6E3]'
    : theme === 'dark' ? 'bg-[rgba(25,42,81,0.5)]' : 'bg-[#FB6FC6]';

  return (
    <section
      id={pkg.name.toLowerCase().replace(/\s+/g, '')}
      className={`min-h-screen p-8 flex flex-col items-center pt-32 ${backgroundClass}`}
    >
      <h2 className="text-4xl font-bold text-white mb-6">{pkg.name}</h2>

      <SectionNavigator content={content} theme={theme} />

      <button
        onClick={() => window.location.href = '/contact'}
        className="w-[185px] h-[47px] bg-[#FB6FC6] border-4 border-black font-inter font-black text-xl mt-6"
      >
        Enquire
      </button>
    </section>
  );
}