import SocialIcons from "./SocialIcons";
import Rectangles from "./Rectangles";

const Footer = () => {
  return (
    <footer className="flex justify-center items-center w-full bg-[#B1CCE4] h-24 absolute bottom-0">
      <div className="relative -mt-16">
        {/* Rectangle and SocialIcons */}
        <div className="relative flex justify-center items-center">
          <Rectangles />
          <div className="absolute inset-0 flex justify-center items-center">
            <SocialIcons />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
