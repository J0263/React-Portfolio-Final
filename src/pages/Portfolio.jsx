import React from 'react';
import Project from '../components/Project';

const portfolioStyles = {
  padding: '2rem',
};

const projectGridStyles = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: '1rem',
  padding: '2rem 5%',
};

const Portfolio = () => {
  const projects = [
    {
      title: 'Project 1',
      image: '/path-to-project-image.jpg',
      appLink: 'https://live-app-link.com',
      repoLink: 'https://github.com/yourusername/project1',
    },
    // Add more project data here
  ];

  return (
    <section style={portfolioStyles}>
      <h2>Portfolio</h2>
      <div style={projectGridStyles}>
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;