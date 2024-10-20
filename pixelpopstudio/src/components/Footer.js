import SocialIcons from "./SocialIcons";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center w-full h-20 lg:h-32 bg-[#192A51] text-white">
      <div className="flex justify-center items-center mb-4 lg:mb-6">
        <SocialIcons />
      </div>
      <p className="text-sm lg:text-sm text-[#B1CCE4]">Created by Pixel Pop Studios © 2024</p>
    </footer>
  );
};

export default Footer;





