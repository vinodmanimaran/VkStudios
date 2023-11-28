// Remove 'use client' directive
// import React from 'react';
import './globals.css';
import 'tailwindcss/tailwind.css';
import { Bodoni_Moda, Inter, Merriweather } from 'next/font/google';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';
import { Providers } from './providers';

import Head from 'next/head';

const Meri = Merriweather({ subsets: ['latin'] ,weight:'300'});

// Remove export of 'metadata'
// export const metadata = {
//   title: 'Vinod Kumar Studios | Web and Mobile App Development Freelancer',
//   description: 'Experienced freelancer offering professional web and mobile app development services.',
// };

export default function RootLayout({ children }) {
  const themeClass = ''; // Remove isDarkMode and related code

  return (
    <html lang="en" className={themeClass}>
      <Head>
        <link rel="stylesheet" href="../../public/fonts/font.css" />
      </Head>
      <body className={`${Meri.className} bg-gradient-to-r from-black to-gray-900`}>
        <Navbar />
        <Providers>{children}</Providers>
        <Footer />
      </body>
    </html>
  );
}
