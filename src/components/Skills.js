"use client"
import React from 'react';
import { DiMongodb, DiReact, DiNodejs, DiCss3, DiJavascript1, DiSass, DiBootstrap, DiGithubBadge, DiHtml5 } from 'react-icons/di';

const Skill = () => {
  const skills = [
    { id: 1, name: 'MongoDB', icon: <DiMongodb /> },
    { id: 2, name: 'React', icon: <DiReact /> },
    { id: 3, name: 'Nodejs', icon: <DiNodejs /> },
    { id: 4, name: 'CSS', icon: <DiCss3 /> },
    { id: 5, name: 'Javascript', icon: <DiJavascript1 /> },
    { id: 6, name: 'Express.js', icon: <DiNodejs /> },
    { id: 7, name: 'HTML', icon: <DiHtml5 /> },
    { id: 8, name: 'CSS', icon: <DiCss3 /> },
    { id: 9, name: 'JavaScript', icon: <DiJavascript1 /> },
    { id: 10, name: 'Sass', icon: <DiSass /> },
    { id: 11, name: 'Bootstrap', icon: <DiBootstrap /> },
    { id: 12, name: 'GitHub', icon: <DiGithubBadge /> },
  ];

  return (
    <div className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg m-10 py-10" >
      <h2 className="text-white text-3xl font-bold mb-6 text-center">Tech Stack</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {skills.map((skill) => (
          <div key={skill.id} className="flex flex-col items-center text-white">
            {skill.icon}
            <span className="mt-2">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
