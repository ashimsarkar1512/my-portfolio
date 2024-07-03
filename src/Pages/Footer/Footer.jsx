import { FaLinkedin } from "react-icons/fa";
import { FaTwitter, FaYoutube, FaFacebook } from "react-icons/fa"; // Import other icons if needed

const Footer = () => {
  return (
    <footer className="footer items-center p-4 px-16 bg-black text-white font-Poppins lg:flex lg:justify-between">
      <aside className="items-center grid lg:grid-cols-2">
        <h1 className="text-3xl font-bold">#Ashim</h1>
      </aside>
      <p className="text-center">Copyright © 2023 - All rights reserved</p>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={24} />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <FaYoutube size={24} />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook size={24} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={24} />
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
