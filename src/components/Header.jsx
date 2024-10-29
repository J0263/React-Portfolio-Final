import React from 'react';
import { NavLink } from 'react-router-dom';

const headerStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem 5%', // Use viewport-relative padding to avoid shrinking
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  width: '100vw', // Exact viewport width to prevent gaps
  boxSizing: 'border-box',
  flexWrap: 'wrap', // Allows items to wrap if the window is resized
  margin: 0, // Ensures no margin around the header
};

const navStyles = {
  display: 'flex',
  gap: '1rem',
  flexWrap: 'wrap',
};

const linkStyles = {
  color: '#FFF',
  textDecoration: 'none',
  fontSize: '1.1rem',
  margin: '0.5rem',
};

const Header = () => {
  return (
    <header style={headerStyles}>
      <h1 style={{ fontSize: '2rem', margin: 0 }}>Jorge Bush</h1>
      <nav style={navStyles}>
        <NavLink to="/" style={linkStyles}>About Me</NavLink>
        <NavLink to="/portfolio" style={linkStyles}>Portfolio</NavLink>
        <NavLink to="/contact" style={linkStyles}>Contact</NavLink>
        <NavLink to="/resume" style={linkStyles}>Resume</NavLink>
      </nav>
    </header>
  );
};

export default Header;