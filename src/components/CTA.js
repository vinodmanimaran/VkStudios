"use client";

import React from 'react';
import Link from 'next/link';

const CTA = () => {
  return (
    <div className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg py-8 px-6 rounded-lg">
      <h2 className="text-white text-2xl font-bold mb-4">Ready to Start Your Project?</h2>
      <p className="text-white mb-4">
        We&apos;re excited to work with you and bring your vision to life. Let&apos;s discuss your project requirements and goals.
      </p>
      <Link href="/contact">
        <span className="bg-blue-500 bg-opacity-70 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          Get in Touch
        </span>
      </Link>
    </div>
  );
};

export default CTA;
