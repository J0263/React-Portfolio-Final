import React from 'react';
import Project from '../components/Project';

const portfolioStyles = {
  padding: '2rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const titleStyles = {
  fontSize: '2rem',
  textAlign: 'center',
  marginBottom: '1.5rem',
};

const projectGridStyles = {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)', // Display exactly 2 projects per row
  gap: '1rem',
  padding: '2rem 5%',
  width: '100%',
  maxWidth: '1000px',
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
    },
    {
      title: 'Project 3',
      image: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png',
      repoLink: 'https://github.com/J0263/React-Portfolio-Final.git',
    },
    {
      title: 'Project 4',
      image: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png',
      repoLink: 'https://github.com/J0263/React-Portfolio-Final.git',
    },
    {
      title: 'Project 5',
      image: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png',
      repoLink: 'https://github.com/J0263/React-Portfolio-Final.git',
    },    {
      title: 'Project 6',
      image: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png',
      repoLink: 'https://github.com/J0263/React-Portfolio-Final.git',
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