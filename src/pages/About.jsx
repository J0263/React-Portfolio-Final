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
      <img src="https://media.licdn.com/dms/image/v2/D4E03AQHm5utRtt51iA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1696876387219?e=1735776000&v=beta&t=2dAYV3Cm8cgLbhbesiHfD-B-E0zlSvqj4I_stv5s5Oo" alt="Jorge Bush" style={imageStyles} />
      <p style={paragraphStyles}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus corporis tempore, nisi, omnis veniam harum eveniet est quasi fugiat numquam laborum, debitis eum iure alias accusamus optio! Unde, dolor dicta?
      </p>
    </section>
  );
};

export default About;