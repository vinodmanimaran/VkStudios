"use client"

import React from 'react';
import Image from 'next/image';
import Contact2 from '../../../assets/Pricing/payments.svg';

const Pricing = () => {
  const pricingTiers = [
    {
      title: 'Basic',
      price: '$99/month',
      features: ['10GB Storage', 'Basic Support', 'Limited Features'],
    },
    {
      title: 'Pro',
      price: '$199/month',
      features: ['50GB Storage', 'Priority Support', 'Advanced Features'],
    },
    {
      title: 'Enterprise',
      price: 'Custom',
      features: ['Unlimited Storage', 'Dedicated Support', 'Customizable Features'],
    },
  ];

  const renderFeatures = (features) => (
    <ul className="pricing-features mt-4">
      {features.map((feature, index) => (
        <li key={index} className="text-gray-300">{feature}</li>
      ))}
    </ul>
  );

  return (
    <div className="bg-gray-800 m-8 bg-opacity-50 backdrop-filter backdrop-blur-lg py-8 px-6 rounded-lg text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Choose the Right Plan for Your Business</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <div className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg py-8 px-6 rounded-lg transition-transform transform hover:scale-105" key={index}>
              <h2 className="text-2xl font-bold text-center mb-4">{tier.title}</h2>
              <div className="text-3xl font-bold text-center mb-6">{tier.price}</div>
              {renderFeatures(tier.features)}
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 mt-8 block mx-auto rounded">
                Get Started
              </button>
            </div>
          ))}
        </div>
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-4">What Our Clients Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg py-8 px-6 rounded-lg">
              <p className="text-lg text-gray-300">&ldquo;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed lobortis arcu.&rdquo;</p>
              <p className="text-gray-600 mt-4">- John Doe, CEO of Company A</p>
            </div>
            <div className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg py-8 px-6 rounded-lg">
              <p className="text-lg text-gray-300">&ldquo;Vestibulum at luctus metus. Ut tempus diam sit amet metus semper, vel efficitur neque commodo.&rdquo;</p>
              <p className="text-gray-600 mt-4">- Jane Smith, CTO of Company B</p>
            </div>
          </div>
        </div>
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-4">Why Choose Our Pricing Plans?</h3>
          <ul className="list-disc list-inside text-gray-300">
            <li>Quality and reliable web and app development services</li>
            <li>Flexible customization options to meet your specific needs</li>
            <li>Transparent pricing structure with no hidden costs</li>
            <li>Dedicated support from our expert team</li>
            <li>Proven track record with satisfied clients</li>
          </ul>
        </div>
        <div className="flex justify-end mt-8">
          <Image src={Contact2} alt="contact-us" width={600} height={400} />
        </div>
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-2">Ready to Get Started?</h3>
          <p>Contact our sales team for a personalized quote or to discuss your project requirements.</p>
          <div className="mt-4 text-gray-300">
            <p>Phone: 123-456-7890</p>
            <p>Email: sales@yourcompany.com</p>
          </div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 mt-8 rounded">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
