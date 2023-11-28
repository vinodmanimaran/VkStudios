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
    <div className="bg-gray-900 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-8">Our Workflow</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {workflowItems.map((item, index) => (
            <div key={item.title} className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg py-8 px-6 rounded-lg">
              <div className="flex flex-col items-center">
                <div className="bg-white rounded-full text-center p-4 flex mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="text-white text-lg font-bold">{item.title}</h3>
                <p className="text-white mt-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workflow;
