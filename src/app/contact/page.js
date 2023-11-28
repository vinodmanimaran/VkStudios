"use client"
import React, { useState } from 'react';
import Contact1 from '../../../assets/Contact/social-media-notifications.svg';
import Contact2 from '../../../assets/Contact/socialmedia-marketing.svg';

import Image from 'next/image';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Your email submission logic here
    console.log('Submitted:', name, email, message);

    // Send email using EmailJS
    emailjs
      .send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
        from_name: name,
        from_email: email,
        message: message,
      }, 'YOUR_USER_ID')
      .then((response) => {
        console.log('Email sent successfully!', response.text);
        setSent(true);
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  };

  return (
    <div>
      <div className="bg-gray-800 m-8 bg-opacity-50 backdrop-filter backdrop-blur-lg py-8 px-6 rounded-lg">
        <h1 className="text-3xl font-bold mb-6 text-white">Contact Us</h1>
        <p className="text-lg mb-6 text-white">Have a project in mind or need more information? Get in touch with us!</p>
        <form className="max-w-md w-full" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="text-lg font-medium text-white">Name</label>
            <input type="text" id="name" className="border rounded-lg px-4 py-2 mt-1 w-full" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="text-lg font-medium text-white">Email</label>
            <input type="email" id="email" className="border rounded-lg px-4 py-2 mt-1 w-full" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="text-lg font-medium text-white">Message</label>
            <textarea id="message" className="border rounded-lg px-4 py-2 mt-1 w-full" rows="4" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white font-medium py-2 px-6 rounded-lg">
            Send Message
          </button>
        </form>
        <div className="flex justify-end mt-[-35%]">
          <Image src={Contact1} alt="contact-us" width={600} />
        </div>
        {sent && <p className="text-green-500 mt-4">Message sent successfully!</p>}
      </div>

      <div className="bg-gray-800 m-8 bg-opacity-50 backdrop-filter backdrop-blur-lg py-8 px-6 rounded-lg">
        <h2 className="text-3xl font-bold mb-6 text-white">Our Location</h2>
        <p className="text-lg mb-6 text-white">
          We are located in Chennai, Tamil Nadu, India. Please feel free to visit us during our working hours or contact us using the form above.
        </p>
        <div className="flex justify-end">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.9577646596314!2d80.21369681535574!3d13.082680990785673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267e3c5cb9f59%3A0x989d0ed4ee04b849!2sChennai%2C%20Tamil%20Nadu%2C%20India!5e0!3m2!1sen!2sus!4v1627081265553!5m2!1sen!2sus"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Google Maps"
          ></iframe>
        </div>
        <div className="flex justify-start mt-[-35%]">
          <Image src={Contact2} alt="contact-us" width={600} />
        </div>

      </div>

      {/* <div className="bg-gray-800 m-8 bg-opacity-50 backdrop-filter backdrop-blur-lg py-8 px-6 max-w-full  rounded-lg">
        <h2 className="text-3xl font-bold mb-6 text-white">Business Hours</h2>
        <ul className="text-lg text-white">
          <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
          <li>Saturday: 10:00 AM - 4:00 PM</li>
          <li>Sunday: Closed</li>
        </ul>
        <div className="flex justify-end mt-[-35%] w-full max-w-[600px]">
          <Image src={Contact1} alt="contact-us" width={600} />
        </div>

      </div> */}
    </div>
  );
};

export default Contact;
