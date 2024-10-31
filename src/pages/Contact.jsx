import React, { useState } from 'react';

const formStyles = {
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '90%',
  width: '400px', // Max width but with flexibility for smaller screens
  margin: '0 auto',
  padding: '1rem',
  borderRadius: '8px',
};

const inputStyles = {
  margin: '0.5rem 0',
  padding: '0.8rem',
  borderRadius: '4px',
  border: 'none',
  width: '100%',  // Full width to fill container
};

const buttonStyles = {
  margin: '0.5rem 0',
  padding: '0.8rem',
  backgroundColor: '#007ACC',
  color: 'white',
  borderRadius: '4px',
  cursor: 'pointer',
};

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.message) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert('Message sent!');
    }
  };

  return (
    <section style={formStyles}>
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          style={inputStyles}
        />
        {errors.name && <p>{errors.name}</p>}

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          style={inputStyles}
        />
        {errors.email && <p>{errors.email}</p>}

        <textarea
          name="message"
          placeholder="Send Jorge a Message"
          value={formData.message}
          onChange={handleChange}
          style={inputStyles}
        />
        {errors.message && <p>{errors.message}</p>}

        <button type="submit" style={buttonStyles}>Send Message</button>
      </form>
    </section>
  );
};

export default Contact;