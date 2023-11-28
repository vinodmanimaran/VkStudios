"use client"
import React from 'react';
import { FiGithub } from 'react-icons/fi';
import Link from 'next/link';

const Showcase = () => {
  const projects = [
    {
      id: 1,
      name: 'Project 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      url: 'https://github.com/project1',
    },
    {
      id: 2,
      name: 'Project 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      url: 'https://github.com/project2',
    },
    {
      id: 3,
      name: 'Project 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      url: 'https://github.com/project2',
    },

    // Add more projects as needed
  ];

  return (
    <div className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg py-10">
      <h2 className="text-white text-3xl font-bold mb-6 text-center">Projects Showcase</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 m-5 rounded-lg">
        {projects.map((project) => (
          <div className="bg-gray-100 bg-opacity-20 rounded-lg p-6 flex flex-col items-center shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-opacity-30" key={project.id}>
            <div className="bg-blue-500 bg-opacity-10 rounded-full p-4 mb-4">
              <FiGithub className="text-blue-500 text-4xl" />
            </div>
            <h3 className="text-white text-xl font-bold mb-2">{project.name}</h3>
            <p className="text-white text-gray-300">{project.description}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <Link href="/portfolio">
          <span className="bg-blue-500 bg-opacity-70 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            View More Projects
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Showcase;
