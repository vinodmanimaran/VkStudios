"use client"
import React from 'react';
import { FaCode, FaPaintBrush, FaMobileAlt, FaRocket } from 'react-icons/fa';
import Process from '../../assets/services/web-development.svg';

import Image from 'next/image';

const Workflow = () => {
  const workflowItems = [
    {
      icon: <FaCode className="text-blue-500 text-4xl" />,
      title: 'Development',
      description: 'Write clean and efficient code using modern web technologies.',
    },
    {
      icon: <FaPaintBrush className="text-blue-500 text-4xl" />,
      title: 'Design',
      description: 'Create visually appealing and user-friendly web and app interfaces.',
    },
    {
      icon: <FaMobileAlt className="text-blue-500 text-4xl" />,
      title: 'Mobile Optimization',
      description: 'Ensure seamless and responsive experiences on mobile devices.',
    },
    {
      icon: <FaRocket className="text-blue-500 text-4xl" />,
      title: 'Deployment',
      description: 'Deploy applications to production environments for live usage.',
    },
  ];

  return (
    <div>
      <h2 className="text-white text-2xl font-bold mb-4 m-5" >Our Workflow</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 place-content-center gap-8">
  {workflowItems.map((item, index) => (
    <div key={item.title} className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg py-8 px-6 rounded-lg">
      <div className={`flex flex-col items-center ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'}`}>
        <div className="bg-white rounded-full text-center p-4 flex mx-auto ml-[55%]">
          {item.icon}
        </div>
        <h3 className="text-white text-lg font-bold mt-4 text-center ml-[50%] mr-[30%]">{item.title}</h3>
        <p className="text-white mt-2 text-center">{item.description}</p>
      </div>
    </div>
  ))}
</div>

    </div>
  );
};

export default Workflow;
