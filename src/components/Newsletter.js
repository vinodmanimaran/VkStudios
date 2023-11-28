"use client"
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform newsletter subscription logic here
    console.log('Subscribed:', email);

    // Send email using EmailJS
    emailjs
      .send(
        'YOUR_SERVICE_ID', // Replace with your Service ID
        'YOUR_TEMPLATE_ID', // Replace with your Template ID
        { email },
        'YOUR_USER_ID' // Replace with your User ID
      )
      .then((response) => {
        console.log('Email sent successfully!', response.text);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });

    setEmail('');
  };

  return (
    <div className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg py-8 px-6 rounded-lg">
      <h2 className="text-white text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
      <p className="text-white mb-4">
        Stay up-to-date with the latest trends and insights in web development. Subscribe to our
        newsletter to receive valuable content, industry news, and special offers.
      </p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
          required
          className="bg-gray-700 bg-opacity-50 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-500 bg-opacity-70 text-white px-4 py-2 rounded-lg mt-4 hover:bg-blue-600 m-5"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
