import React from 'react';

const Project = ({ title, image, repoLink }) => {
  const imageStyles = {
    width: '50%', // Reduce width to 50% of its original size
    height: 'auto', // Maintain aspect ratio
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <img src={image} alt={`${title} screenshot`} style={imageStyles} />
      <h3>{title}</h3>
      <a href={repoLink} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
    </div>
  );
};

export default Project;