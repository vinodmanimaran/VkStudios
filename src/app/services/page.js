import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import {
  FaDesktop,
  FaMobileAlt,
  FaCheckCircle,
  FaCogs,
  FaChartLine,
} from 'react-icons/fa';

const ServicePage = () => {
  const portfolioItems = [
    {
      title: 'Project 1',
      description: 'Description of project 1.',
      // imageSrc: 'project1.jpg', // Replace with actual image source
    },
    {
      title: 'Project 2',
      description: 'Description of project 2.',
      // imageSrc: 'project2.jpg', // Replace with actual image source
    },
    {
      title: 'Project 3',
      description: 'Description of project 3.',
      // imageSrc: 'project3.jpg', // Replace with actual image source
    },
    // Add more portfolio items as needed
  ];

  const clientTestimonials = [
    {
      name: 'Sara Smith',
      comment: 'He did an exceptional job with my website. His attention to detail and creative skills brought my vision to life. I couldn\'t be happier with the result.',
    },
    {
      name: 'Michael Johnson',
      comment: 'I had the pleasure of working with him on my mobile app project. His expertise and dedication to delivering a user-friendly app were impressive. I highly recommend his services.',
    },
    {
      name: 'Emily Davis',
      comment: 'His custom development work exceeded my expectations. He understood my unique needs and delivered a solution that perfectly suits my business. I\'m grateful for his expertise.',
    },
    {
      name: 'Alex Wilson',
      comment: 'Working with him transformed my online presence. The website he created has attracted more customers and increased my sales.',
    },
    {
      name: 'Sophia Brown',
      comment: 'Working with him on my mobile app project was a smooth and efficient process. His attention to detail and timely delivery made the experience enjoyable and stress-free.',
    },
    {
      name: 'Daniel Clark',
      comment: 'His custom development work streamlined our operations. He took the time to understand our business needs and delivered a solution that improved our efficiency.',
    },
  ];

  return (
    <div className="bg-gray-800 m-8 bg-opacity-50 backdrop-filter backdrop-blur-lg py-8 px-6 rounded-lg text-white">
      {/* Header Section */}
      <header className="text-center mb-8">
        <h1 className="text-3xl font-semibold text-white">Our Services</h1>
        <p className="mt-2 text-lg">
          Elevate your project with our expert services.
        </p>
      </header>

      {/* Service Offerings */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Service 1: Website Development */}
        <div className="p-4 border border-white rounded-lg transition-transform transform hover:scale-105">
          <div className="text-center mb-4">
            <FaDesktop className="text-5xl text-blue-500" />
          </div>
          <h2 className="text-xl font-semibold mb-2">Website Development</h2>
          <p className="text-gray-300">
            Create stunning websites that leave a lasting impression.
          </p>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600">
            Learn More
          </button>
        </div>

        {/* Service 2: Mobile App Development */}
        <div className="p-4 border border-white rounded-lg transition-transform transform hover:scale-105">
          <div className="text-center mb-4">
            <FaMobileAlt className="text-5xl text-green-500" />
          </div>
          <h2 className="text-xl font-semibold mb-2">Mobile App Development</h2>
          <p className="text-gray-300">
            Craft innovative mobile apps for iOS and Android.
          </p>
          <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600">
            Learn More
          </button>
        </div>

        {/* Service 3: Custom Development */}
        <div className="p-4 border border-white rounded-lg transition-transform transform hover:scale-105">
          <div className="text-center mb-4">
            <FaCogs className="text-5xl text-purple-500" />
          </div>
          <h2 className="text-xl font-semibold mb-2">Custom Development</h2>
          <p className="text-gray-300">
            Tailored solutions to meet your unique needs.
          </p>
          <button className="mt-4 bg-purple-500 text-white px-4 py-2 rounded-full hover:bg-purple-600">
            Learn More
          </button>
        </div>
      </section>

      {/* Key Features */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex items-center">
            <FaCheckCircle className="text-3xl text-green-500 mr-2" />
            <p>Responsive and user-friendly designs.</p>
          </div>
          <div className="flex items-center">
            <FaCheckCircle className="text-3xl text-green-500 mr-2" />
            <p>Robust and secure codebase.</p>
          </div>
          <div className="flex items-center">
            <FaCheckCircle className="text-3xl text-green-500 mr-2" />
            <p>Scalable architecture.</p>
          </div>
          <div className="flex items-center">
            <FaCheckCircle className="text-3xl text-green-500 mr-2" />
            <p>Seamless integration with third-party services.</p>
          </div>
          <div className="flex items-center">
            <FaCheckCircle className="text-3xl text-green-500 mr-2" />
            <p>Optimized for search engines (SEO).</p>
          </div>
          <div className="flex items-center">
            <FaCheckCircle className="text-3xl text-green-500 mr-2" />
            <p>Regular updates and maintenance.</p>
          </div>
          <div className="flex items-center">
            <FaCheckCircle className="text-3xl text-green-500 mr-2" />
            <p>24/7 customer support.</p>
          </div>
          <div className="flex items-center">
            <FaCheckCircle className="text-3xl text-green-500 mr-2" />
            <p>Competitive pricing and flexible payment options.</p>
          </div>
        </div>
      </section>

      {/* Portfolio Showcase */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Portfolio Showcase</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="p-4 border border-white rounded-lg transition-transform transform hover:scale-105"
            >
              <Image
                src={item.imageSrc}
                alt={item.title}
                width={500}
                height={300}
                className="w-full h-auto mb-4 rounded-lg"
              />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-300">{item.description}</p>
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Client Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clientTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-4 border border-white rounded-lg"
            >
              <p className="text-gray-300">{testimonial.comment}</p>
              <p className="text-gray-400 mt-2">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="mt-12 text-center">
        <h2 className="text-2xl font-semibold mb-2">Ready to get started?</h2>
        <p className="text-gray-300">
          Contact us today to discuss your project needs.
        </p>
        <Link href="/contact">
          <button className="mt-4 bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600">
            Contact Us
          </button>
        </Link>
      </section>
    </div>
  );
};

export default ServicePage;
