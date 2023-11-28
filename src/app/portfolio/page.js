"use client"

import React, { useState } from 'react';
import ProjectCard from '../../components/ProjectCard';

const ProjectPage = ({ project }) => {
  const projects = [
    {
      id: 1,
      name: 'MERN Stack Stock Website',
      description: 'A stock trading platform built with the MERN stack.',
      image: '/path/to/mern-stock-image.jpg',
      githubUrl: 'https://github.com/mern-stock-website',
    },
    {
      id: 2,
      name: 'User Interfaces with React',
      description: 'A collection of user interface components created using React.',
      image: '/path/to/react-ui-image.jpg',
      githubUrl: 'https://github.com/react-ui-interfaces',
    },
    {
      id: 3,
      name: 'Restaurant Website',
      description: 'A modern and responsive website for a restaurant.',
      image: '/path/to/restaurant-website-image.jpg',
      githubUrl: 'https://github.com/restaurant-website',
    },
    {
      id: 4,
      name: 'Metaverse Product',
      description: 'Explore a virtual metaverse with immersive experiences.',
      image: '/path/to/metaverse-image.jpg',
      githubUrl: 'https://github.com/metaverse-product',
    },
    {
      id: 5,
      name: 'Fintech Product',
      description: 'A financial technology product for managing investments.',
      image: '/path/to/fintech-image.jpg',
      githubUrl: 'https://github.com/fintech-product',
    },
  ];

  const [sortBy, setSortBy] = useState('default');
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  const sortedProjects = [...projects].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'date') {
      return new Date(b.date) - new Date(a.date);
    }
    return 0;
  });

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = sortedProjects.slice(indexOfFirstProject, indexOfLastProject);
  const totalPages = Math.ceil(sortedProjects.length / projectsPerPage);

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="bg-gray-800 m-8 bg-opacity-50 backdrop-filter backdrop-blur-lg py-8 px-6 rounded-lg text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-white mb-8">Project Showcase</h1>

        {/* Sorting Options */}
        <div className="flex justify-center mb-4">
          <label className="mr-2 text-white">Sort By:</label>
          <select
            value={sortBy}
            onChange={handleSortChange}
            className="bg-gray-700 text-white border rounded p-2"
          >
            <option value="default">Default</option>
            <option value="name">Name</option>
            <option value="date">Date</option>
          </select>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {currentProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-8">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                className={`mx-1 px-3 py-2 rounded ${
                  currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
                }`}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectPage;
