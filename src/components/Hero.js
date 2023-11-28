"use client"
import React from 'react';
import Link from 'next/link';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import header from '../../assets/header1.jpg';
import header2 from '../../assets/header2.jpg';
import header3 from '../../assets/home/solving-problems.svg';
import Image from 'next/image';

const HeroSection = () => {
  const settings = {
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
  };

  const slides = [
    {
      title: 'Web Development Services',
      description: 'We create stunning and responsive websites tailored to your business needs.',
      buttonText: 'Contact Us',
      buttonLink: '/contact',
      imageClass: 'bg-header1', // Add the correct class for header1.jpg
    },
    {
      title: 'Mobile App Development',
      description: 'We build engaging and user-friendly mobile applications for iOS and Android platforms.',
      buttonText: 'Contact Us',
      buttonLink: '/contact',
      imageClass: 'bg-header2', // Add the correct class for header2.jpg
    },
    {
      title: 'Custom Development Solutions',
      description: 'We provide custom development services to turn your unique ideas into reality.',
      buttonText: 'Contact Us',
      buttonLink: '/contact',
      imageClass: 'bg-header3', // Add the correct class for header3.jpg
    },
  ];

  return (
    <div className="relative">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`relative h-screen flex items-center justify-center bg-cover bg-no-repeat  bg-right ${slide.imageClass}`}
          >
            <div className="bg-gray-900 bg-opacity-75 p-4 md:p-8 lg:p-12 rounded-lg my-[10%]  text-center max-w-md mx-auto">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">{slide.title}</h2>
              <p className="text-base md:text-lg lg:text-xl mb-6 text-white">{slide.description}</p>
              <Link href={slide.buttonLink}>
                <span className="bg-blue-500 bg-opacity-70 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                  {slide.buttonText}
                </span>
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSection;
