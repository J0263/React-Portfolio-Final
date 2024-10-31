import React from 'react';
import Project from '../components/Project';

const portfolioStyles = {
  padding: '2rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center', // Center-aligns content within the portfolio section
};

const titleStyles = {
  fontSize: '2rem',
  textAlign: 'center',
  marginBottom: '1.5rem', // Adds space between the title and projects
};

const projectGridStyles = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: '1rem',
  padding: '2rem 5%',
  width: '100%',
  maxWidth: '1000px', // Optional: limits the width of the project grid for better alignment
};

const Portfolio = () => {
  const projects = [
    {
      title: 'Project 1',
      image: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png',
      repoLink: 'https://github.com/J0263/React-Portfolio-Final.git',
    },
    {
      title: 'Project 2',
      image: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png',
      repoLink: 'https://github.com/J0263/React-Portfolio-Final.git',
      // Add more project data here
    },
    {
      title: 'Project 3',
      image: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png',
      repoLink: 'https://github.com/J0263/React-Portfolio-Final.git',
      // Add more project data here
    },
    {
      title: 'Project 4',
      image: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png',
      repoLink: 'https://github.com/J0263/React-Portfolio-Final.git',
      // Add more project data here
    },
    {
      title: 'Project 5',
      image: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png',
      repoLink: 'https://github.com/J0263/React-Portfolio-Final.git',
      // Add more project data here
    },
    {
      title: 'Project 6',
      image: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png',
      repoLink: 'https://github.com/J0263/React-Portfolio-Final.git',
      // Add more project data here
    },
  ];

  return (
    <section style={portfolioStyles}>
      <h2 style={titleStyles}>Jorge's Portfolio</h2>
      <div style={projectGridStyles}>
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;