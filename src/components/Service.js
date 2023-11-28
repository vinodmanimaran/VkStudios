"use client"
import React from 'react';
import { FaDesktop, FaMobile, FaCode } from 'react-icons/fa';
import Link from 'next/link';

const Services = () => {
  return (
    <div className="py-8 px-6 m-10">
      <h2 className="text-white text-2xl font-bold mb-4">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-gray-100 bg-opacity-20 rounded-lg p-6 flex flex-col items-center shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
          <div className="bg-blue-500 bg-opacity-10 rounded-full p-4 mb-4">
            <FaDesktop className="text-blue-500 text-4xl" />
          </div>
          <h3 className="text-white text-lg font-bold mt-2">Web Development</h3>
          <p className="text-white mt-2">Tailored, Stunning Websites for Businesses.</p>
        </div>
        <div className="bg-gray-100 bg-opacity-20 rounded-lg p-6 flex flex-col items-center shadow-lg transition duration-300 ease-in-out transform hover:scale-105"> 
          <div className="bg-blue-500 bg-opacity-10 rounded-full p-4 mb-4">
            <FaMobile className="text-blue-500 text-4xl" />
          </div>
          <h3 className="text-white text-lg font-bold mt-2">Mobile Apps</h3>
          <p className="text-white mt-2">Engaging Mobile Apps for iOS and Android.</p>
        </div>
        <div className="bg-gray-100 bg-opacity-20 rounded-lg p-6 flex flex-col items-center shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
          <div className="bg-blue-500 bg-opacity-10 rounded-full p-4 mb-4">
            <FaCode className="text-blue-500 text-4xl" />
          </div>
          <h3 className="text-white text-lg font-bold mt-2">Custom Development</h3>
          <p className="text-white mt-2">Custom Development Solutions for Your Vision.</p>
        </div>
      </div>
      <Link href="/contact">
        <button className="bg-blue-500 bg-opacity-70 text-white px-4 py-2 rounded-lg mt-8 hover:bg-blue-600">
          Explore More
        </button>
      </Link>
    </div>
  );
};

export default Services;
