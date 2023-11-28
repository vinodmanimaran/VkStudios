"use client"

import React, { useState,useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image'
import logo from '../../assets/Logo/Logo.png'

import { FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaSun, FaMoon } from 'react-icons/fa';
import { RiMenu2Line, RiCloseLine } from 'react-icons/ri';

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };


  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };



  return (
    <nav className={` py-4 px-8 text-white`}>
      <div className="flex items-center justify-between">
        {/* Brand logo */}
        <Link href="/"> 
        <Image src={logo} alt="logo" width={80}/>  
        </Link>

        {/* Social media links */}
        <div className="flex items-center space-x-4  mx-5">
          <span
            className={`nav-link-icon hover:text-white`}
          >
            <FaFacebook />
          </span>
          <span
            className={`nav-link-icon hover:text-white`}
          >
            <FaInstagram />
          </span>
          <span
            className={`nav-link-icon hover:text-white`}
          >
            <FaLinkedin />
          </span>
          <span
            className={`nav-link-icon hover:text-white`}
          >
            <FaGithub />
          </span>
        </div>

        {/* Dark/Light mode button */}
        <button
          className={`nav-link-icon ${isDarkMode ? 'dark' : 'light'}`}
          onClick={toggleDarkMode}
        >
          {isDarkMode ? <FaMoon /> : <FaSun />}
        </button>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            className={`hamburger-icon ${isMobileMenuOpen ? 'is-active' : ''}`}
            type="button"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <RiCloseLine /> : <RiMenu2Line />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <ul className="md:hidden my-3">
          <li>
            <Link href="/home">
              <span className="nav-link" onClick={toggleMobileMenu}>
                Home
              </span>
            </Link>
          </li>
          <li>
            <Link href="/portfolio">
              <span className="nav-link" onClick={toggleMobileMenu}>
                Projects
              </span>
            </Link>
          </li>
          <li>
            <Link href="/services">
              <span className="nav-link" onClick={toggleMobileMenu}>
                Services
              </span>
            </Link>
          </li>
          {/* <li>
            <Link href="/blogs">
              <span className="nav-link" onClick={toggleMobileMenu}>
                Blogs
              </span>
            </Link>
          </li>  */}
          <li>
            <Link href="/pricing">
              <span className="nav-link" onClick={toggleMobileMenu}>
                Pricing
              </span>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <span className="nav-link" onClick={toggleMobileMenu}>
                Contact Us
              </span>
            </Link>
          </li>
        </ul>
      )}

      {/* Desktop menu */}
      <ul className="hidden md:flex space-x-4 my-4">
        <li>
          <Link href="/">
            <span className="nav-link">Home</span>
          </Link>
        </li>
        <li>
          <Link href="/portfolio">
            <span className="nav-link">Projects</span>
          </Link>
        </li>
        <li>
          <Link href="/services">
            <span className="nav-link">Services</span>
          </Link>
        </li>
        {/* <li>
          <Link href="/blogs">
            <span className="nav-link">Blogs</span>
          </Link>
        </li> */}
        <li>
          <Link href="/pricing">
            <span className="nav-link">Pricing</span>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <span className="nav-link">Contact Us</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
