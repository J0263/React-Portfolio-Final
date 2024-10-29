import React from 'react';

const aboutStyles = {
  padding: '2rem 5%',
  color: 'white',
  textAlign: 'center',
  width: '100vw', // Full width of the viewport
  minHeight: 'calc(100vh - 100px)', // Adjust for header and footer height
};

const headingStyles = {
  fontSize: '1.5rem',
  marginBottom: '1rem',
  textTransform: 'uppercase',
};

const imageStyles = {
  borderRadius: '50%',
  width: 'clamp(60px, 15vw, 80px)', // Scales between 60px and 80px based on viewport
  height: 'clamp(60px, 15vw, 80px)',
  marginBottom: '1rem',
};

const paragraphStyles = {
  fontSize: '1rem',
  lineHeight: '1.5',
  maxWidth: '800px',
  margin: '0 auto',
  padding: '0 1rem',
};

const About = () => {
  return (
    <section style={aboutStyles}>
      <h2 style={headingStyles}>About Me</h2>
      <img src="/path-to-your-photo.jpg" alt="Jorge Bush" style={imageStyles} />
      <p style={paragraphStyles}>
        Brief bio text goes here, adding some description of who you are, your skills, and your interests.
      </p>
    </section>
  );
};

export default About;