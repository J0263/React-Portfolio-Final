import React from 'react';

const projectStyles = {
  backgroundColor: '#004080',
  padding: '1rem',
  borderRadius: '8px',
  textAlign: 'center',
};

const imageStyles = {
  width: '100%',
  height: 'auto',
  borderRadius: '8px',
};

const titleStyles = {
  fontSize: '1.1rem',
  margin: '0.5rem 0',
};

const Project = ({ title, image, appLink, repoLink }) => {
  return (
    <div style={projectStyles}>
      <img src={image} alt={title} style={imageStyles} />
      <h3 style={titleStyles}>{title}</h3>
      <a href={appLink} target="_blank" rel="noopener noreferrer">Live App</a> | 
      <a href={repoLink} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
    </div>
  );
};

export default Project;