import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex justify-center items-center w-full p-4 absolute bottom-0">
      <div className="flex space-x-8">
        <a href="https://www.linkedin.com/in/vplatt/" aria-label="LinkedIn">
          <img src="/LinkedInLogo.png" alt="LinkedIn" width="60" height="50" />
        </a>
        <a href="https://www.instagram.com/pixel.pop.studio" aria-label="Instagram">
          <img src="/InstagramIcon.png" alt="Instagram" width="60" height="50" />
        </a>
        <a href="mailto:vic@pixelpopstudio.co.uk" aria-label="Email">
          <img src="/EmailIcon.png" alt="Email" width="70" height="60" />
        </a>
      </div>
    </footer>
  );
}
