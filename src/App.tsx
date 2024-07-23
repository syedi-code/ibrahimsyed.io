import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import Sidebar from './components/Sidebar';
import SidebarSketch from './components/SidebarSketch';
import LandingPage from './pages/LandingPage';
import ProjectsPage from './pages/ProjectsPage';
import PortfolioPage from './pages/PortfolioPage';
import './App.css';

function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [currentPage, setCurrentPage] = useState('landing');

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
  }, []);

  const changePage = (page: string) => {
    setCurrentPage(page);
  }

  const mobileMessageStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: 'DM Sans, sans-serif',
    color: '#ffffff', // Add color for better text visibility
    textAlign: 'center',
    fontSize: '48px',
    fontWeight: 'bold'
  };

  const highlightStyle: React.CSSProperties = {
    backgroundColor: '#a83e32',
    color: '#ffffff',
    padding: '0.5em 0 0.5em 0',
    maxWidth: '75vw'
  };

  return (
    <div>
      {isMobile ? (
        <div style={mobileMessageStyle}>
          <span style={highlightStyle}>
            FOR THE BEST EXPERIENCE, PLEASE VIEW ON DESKTOP.
          </span>
        </div>
      ) : (
        <div className="App">
          <SidebarSketch />
          <Sidebar changePage={changePage} />

          <div className="content">
            {currentPage === 'landing' && <LandingPage />}
            {currentPage === 'projects' && <ProjectsPage />}
            {currentPage === 'portfolio' && <PortfolioPage />}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
