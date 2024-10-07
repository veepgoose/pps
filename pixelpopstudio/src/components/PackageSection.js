import SectionNavigator from '@/components/SectionNavigator'; // Ensure correct import path for SectionNavigator

export default function PackageSection({ pkg, theme }) {
  const content = [
    pkg.description,
    "Why choose Pixel Pop Studio?",
    "Power-Ups (Add-on services)",
    "Each package includes",
    "Payment terms"
  ];

  const backgroundColor = theme === "dark" ? "#192A51" : "#FB6FC6";
  const secondaryBackgroundColor = theme === "dark" ? "#7493AF" : "#FFF6E3";

  return (
    <section
      id={pkg.name.toLowerCase().replace(/\s+/g, '')} // Dynamically generate IDs for each package
      className="min-h-screen p-8 flex flex-col items-center pt-32" // Added pt-32 to prevent header overlap
      style={{
        backgroundColor: pkg.id % 2 === 0 ? secondaryBackgroundColor : backgroundColor,
      }}
    >
      <h2 className="text-4xl font-bold text-white mb-6">{pkg.name}</h2>

      <SectionNavigator content={content} />

      <button
        onClick={() => window.location.href = '/contact'}
        className="w-[185px] h-[47px] bg-[#FB6FC6] border-4 border-black font-inter font-black text-xl mt-6"
      >
        Enquire
      </button>
    </section>
  );
}
