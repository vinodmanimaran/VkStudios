import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import Image from 'next/image'
import logo from '../../assets/Logo/Logo.png'


const Footer = () => {
  return (
<footer className="bg-gradient-to-r from-2312f0 to-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <div className="mb-4 md:mb-0">
            <Image src={logo} alt="logo" width={80}/>
        </div>
        <div className="flex space-x-4">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
