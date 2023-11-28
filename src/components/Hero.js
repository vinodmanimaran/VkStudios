"use client"
import React from 'react';
import Link from 'next/link';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import header from '../../assets/header1.jpg';
import header2 from '../../assets/header2.jpg';
import header3 from '../../assets/home/solving-problems.svg';
import CTA from './CTA';

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
      image: header,
    },
    {
      title: 'Mobile App Development',
      description: 'We build engaging and user-friendly mobile applications for iOS and Android platforms.',
      buttonText: 'Contact Us',
      buttonLink: '/contact',
      image: header2,
    },
    {
      title: 'Custom Development Solutions',
      description: 'We provide custom development services to turn your unique ideas into reality.',
      buttonText: 'Contact Us',
      buttonLink: '/contact',
      image: header3,
    },
  ];

  return (
    <div className="relative">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className="flex items-center justify-center h-screen bg-cover bg-no-repeat bg-right bg-gray-900"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="bg-gray-900 bg-opacity-75 px-8 py-6 m-8 rounded-lg">
          
              <h2 className="text-4xl font-bold mb-4 text-white">{slide.title}</h2>
              <p className="text-lg mb-6 text-white">{slide.description}</p>
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
