"use client ";

import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import CTA from '../components/CTA';
import Workflow from '../components/Workflow';
import Skill from '../components/Skills';
import Showcase from '../components/Showcase';
import Service from '../components/Service';
import NewsLetter from '../components/Newsletter';

const Page = () => {
  return (
    <div className="container mx-auto px-4">
      <Header />
      <Hero />
      <div className="mt-12">
        <Workflow />
      </div>
      <div className="mt-12">
        <Skill />
      </div>
      <div className="mt-12">
        <Showcase />
      </div>
      <div className="mt-12">
        <Service />
      </div>
      <div className="mt-12">
        <NewsLetter />
      </div>
    </div>
  );
};

export default Page;
