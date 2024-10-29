import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

const appStyles = {
  fontFamily: 'Arial, sans-serif',
  backgroundColor: '#333',
  color: 'white',
  backgroundImage: 'url("/path-to-your-background-image.jpg")',
  backgroundSize: 'cover',
  backgroundAttachment: 'fixed',
  backgroundPosition: 'center',
  height: '100vh', // Exact viewport height
  display: 'flex',
  flexDirection: 'column',
  overflowX: 'hidden', // Prevents any horizontal overflow
};

const mainStyles = {
  flex: 1, // Expands to take remaining space between header and footer
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%', // Ensures it doesn’t overflow horizontally
  overflowY: 'auto', // Enables scrolling within the main content if needed
};

function App() {
  return (
    <Router>
      <div style={appStyles}>
        <Header />
        <main style={mainStyles}>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;