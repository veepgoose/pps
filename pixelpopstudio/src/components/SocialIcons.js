// components/SocialIcons.js
export default function SocialIcons() {
  return (
      <div className="flex justify-center items-center space-x-4 absolute">
          <a href="https://www.linkedin.com/in/vplatt/" aria-label="LinkedIn">
              <img 
                  src="/LinkedInIcon.svg" 
                  alt="LinkedIn" 
                  className="w-12 h-12" 
              />
          </a>
          <a href="https://www.instagram.com/pixel.pop.studio" aria-label="Instagram">
              <img 
                  src="/InstagramIcon.svg" 
                  alt="Instagram" 
                  className="w-12 h-12" 
              />
          </a>
          <a href="mailto:vic@pixelpopstudio.co.uk" aria-label="Email">
              <img 
                  src="/EmailIcon.svg" 
                  alt="Email" 
                  className="w-12 h-12" 
              />
          </a>
      </div>
  );
}
