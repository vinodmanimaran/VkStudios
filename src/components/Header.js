"use client";
import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import Link from 'next/link';
import '../../globals.css';
import {Bodoni_Moda}  from 'next/font/google'
import hero from '../../assets/home/hero.jpg'


const BodoniModa=Bodoni_Moda({ subsets: ['latin'] })

const Header = () => {

  const containerStyle = {
    backgroundImage: 'url(../../assets/home/hero.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '300px',
  };


  const taglineStyle = {
    fontSize: '1.5rem',
    color: '#fff',
    marginBottom: '1.5rem',
    fontFamily: 'Montserrat, sans-serif',
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)',
  };

  const ctaButtonStyle = {
    backgroundColor: '#3182CE',
    color: '#fff',
    padding: '0.75rem 2rem',
    borderRadius: '0.375rem',
    fontSize: '1.25rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease-in-out',
    fontFamily: 'Montserrat, sans-serif',
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)',
  };

  const [typedText, setTypedText] = useState('');

  const props = useSpring({
    opacity: 1,
    transform: 'translate3d(0,0,0)',
    from: { opacity: 0, transform: 'translate3d(0,-10px,0)' },
    reset: true,
    onRest: () => {
      setTypedText((prev) => prev + 'Vinod Kumar Studios'.charAt(prev.length));
    },
  });

  useEffect(() => {
    setTypedText('');
  }, []);

  return (
    <header className="relative" style={containerStyle}>
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center text-center mb-12">
          {/* Use react-spring for the title */}
          <animated.div style={{ ...props, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <animated.div className="text-center perspective-1000 transform-style-preserve-3d">
  <animated.h1 className="text-5xl font-extrabold mb-4 uppercase rounded-lg relative z-10 bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-3 px-6 inline-block shadow-2xl transform border border-gray-800 tracking-wide rotate-x-10">
    {typedText}
  </animated.h1>
</animated.div>

          </animated.div>
          <p style={taglineStyle} className={`${BodoniModa.className}`}>Transforming Ideas into Digital Success</p>
          <Link href="/contact">
            <span style={ctaButtonStyle}>
              Get Started
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
