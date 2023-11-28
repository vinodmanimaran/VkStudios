"use client"
import React from 'react';
import Link from 'next/link';
import '../../globals.css'

const Header = () => {



  const headerStyle = {
    backgroundImage: "url('../../assets/header1.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '600px',
  };

  return (
    <header className="relative" style={headerStyle}>
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center text-center mb-12">
          <h1 className="text-4xl text-white font-bold " >Vinod Kumar Studios</h1>
          <p className="text-lg text-white mb-6">Delivering Innovative Software Solutions</p>
          <p className="text-lg text-white mb-8">Transforming Ideas into Digital Success</p>
          <Link href="/contact">
            <span className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg">
              Get Started
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
