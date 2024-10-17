export default function SocialIcons() {
    return (
      <div className="flex justify-center items-center space-x-4">
        <a href="https://www.linkedin.com/in/vplatt/" aria-label="LinkedIn">
          <img
            src="/LinkedInIcon.svg"
            alt="LinkedIn"
            className="w-16 h-16"
          />
        </a>
        <a href="https://www.instagram.com/pixel.pop.studio" aria-label="Instagram">
          <img
            src="/InstagramIcon.svg"
            alt="Instagram"
            className="w-16 h-16"
          />
        </a>
        <a href="mailto:vic@pixelpopstudio.co.uk" aria-label="Email">
          <img
            src="/EmailIcon.svg"
            alt="Email"
            className="w-16 h-16"
          />
        </a>
      </div>
    );
  }
  
