import SocialIcons from "./SocialIcons";

const FooterAlt = () => {
  return (
    <footer className="flex flex-col justify-center items-center w-full min-h-[90px] lg:min-h-[128px] py-4">
      <div className="flex justify-center items-center mb-4 lg:mb-2">
        <SocialIcons />
      </div>
      <p className="text-sm lg:text-sm text-[#192A51] mt-4 lg:mt-2">
        Created by Pixel Pop Studios © 2024
      </p>
    </footer>
  );
};

export default FooterAlt;

