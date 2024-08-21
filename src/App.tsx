import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import Sidebar from './components/desktop/Sidebar';

import MobileHeader from './components/mobile/MobileHeader';
import MobileMenu from './components/mobile/MobileMenu';
import MobileLanding from './pages/mobile/MobileLanding';
import MobileProjects from './pages/mobile/MobileProjects';

import LandingPage from './pages/desktop/LandingPage';
import ProjectsPage from './pages/desktop/ProjectsPage';
import PortfolioPage from './pages/desktop/PortfolioPage';
import './App.css';

function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [currentPage, setCurrentPage] = useState('landing');

  // --------- LOGIC AND HELPER FUNCTIONS ---------
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= window.innerHeight);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
  }, []);

  const changePage = (page: string) => {
    setCurrentPage(page);
  }

  // --------- GENERAL STYLING ---------
  const highlightStyle: React.CSSProperties = {
    backgroundColor: '#DD5746',
    color: '#ffffff',
    padding: '0.5em',
    maxWidth: '75vw'
  };

  const contentStyle: React.CSSProperties = {
      display: 'flex',
      flexDirection: 'row',
      height: '100vh', // Ensures that the layout takes up the full height of the viewport
  };

  const mainContentStyle: React.CSSProperties = {
      flex: '1', // The content div takes up the remaining width
      overflowY: 'auto', // Allows scrolling if content overflows vertically
      background: 'white',
  };

  return (
    <div>
      {isMobile ? (
        <div className="App">
          <MobileHeader />
          
            <MobileMenu 
              changePage={changePage}
              currentPage={currentPage}
            />

            {currentPage === 'landing' && <MobileLanding />}
            {currentPage === 'projects' && <MobileProjects />}
          
        </div>
      ) : (
        <div className="App">
          <div style={contentStyle}>
            <Sidebar changePage={changePage} />

            <div className="content" style={mainContentStyle}>
              {currentPage === 'landing' && <LandingPage />}
              {currentPage === 'projects' && <ProjectsPage />}
              {currentPage === 'portfolio' && <PortfolioPage />}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
