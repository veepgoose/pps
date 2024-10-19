
import ProfilePic from './ProfilePic';

const MiniAbout = () => {
    return (
        <section className="py-12 text-center bg-gradient-to-b from-light-footer to-light-menuText dark:from-dark-background dark:to-dark-footer">
        <h2 className="text-2xl lg:text-4xl font-bold mb-4">About Me</h2>
        <img src="/path-to-your-image.jpg" alt="Your Image" className="w-32 h-32 mx-auto rounded-full mb-4"/>
        <ProfilePic />
       
      </section>
    );
    }

    export default MiniAbout;