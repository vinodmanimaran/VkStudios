"use client"
import React from 'react';
import { FiGithub } from 'react-icons/fi';
import Image from 'next/image'

const ProjectCard = ({ project }) => {
    if (!project) {
        return null; // Render nothing if project prop is not provided
      }
    
  const { name, description, image, githubUrl } = project;


  return (
    <div className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-6">
      <div className="mb-4">
        {/* <Image src={image} alt={name} className="w-full h-auto rounded-lg" width={100} height={100}/> */}
      </div>
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex justify-center">
        <span href={githubUrl} target="_blank" rel="noopener noreferrer">
          <FiGithub className="text-gray-700 hover:text-gray-900 w-8 h-8" />
        </span>
      </div>
    </div>
  );
};

export default ProjectCard;
