import React from 'react';
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
  backgroundSize: 'cover',
  backgroundAttachment: 'fixed',
  backgroundPosition: 'center',
  width: '100vw',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  overflowX: 'hidden',
  scrollBehavior: 'smooth',
};

const mainStyles = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  paddingTop: '60px', // Adds space for the collapsed header
};

const sectionStyles = {
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  padding: '1rem',
};

function App() {
  return (
    <div style={appStyles}>
      <Header />
      <main style={mainStyles}>
        <section id="about" style={sectionStyles}>
          <About />
        </section>
        <section id="portfolio" style={sectionStyles}>
          <Portfolio />
        </section>
        <section id="contact" style={sectionStyles}>
          <Contact />
        </section>
        <section id="resume" style={sectionStyles}>
          <Resume />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;