import SocialIcons from "./SocialIcons";
import Rectangles from "./Rectangles";

const Footer = () => {
  return (
<footer className="flex justify-center items-center w-full bg-light-footer dark:bg-dark-footer h-14 lg:h-24">
  <div className="relative -mt-16 scale-65 lg:scale-100"> {/* Change scale-50 to scale-75 */}
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


