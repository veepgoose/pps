import SocialIcons from "./SocialIcons";

const Footer = () => {
  return (
    <footer className="relative flex flex-col justify-center items-center w-full min-h-[90px] lg:min-h-[128px] bg-[#192A51]">
      <div className="flex justify-center items-center mb-4 lg:mb-2">
        <SocialIcons />
      </div>
      <p className="absolute bottom-4 lg:bottom-2 text-sm lg:text-sm text-[#B1CCE4]">
        Created by Pixel Pop Studios © 2024
      </p>
    </footer>
  );
};


export default Footer;





