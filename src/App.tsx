import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import Sidebar from './components/Sidebar';
import SidebarSketch from './components/SidebarSketch';

import MobileHeader from './components/MobileHeader';
import MobilePageSelector from './components/MobilePageSelector';
import MobileLanding from './pages/MobileLanding';
import MobileProjects from './pages/MobileProjects';

import LandingPage from './pages/LandingPage';
import ProjectsPage from './pages/ProjectsPage';
import PortfolioPage from './pages/PortfolioPage';
import './App.css';

function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [currentPage, setCurrentPage] = useState('landing');

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

  const highlightStyle: React.CSSProperties = {
    backgroundColor: '#DD5746',
    color: '#ffffff',
    padding: '0.5em',
    maxWidth: '75vw'
  };

  return (
    <div>
      {isMobile ? (
        <div className="App">
          <MobileHeader />
          
            <MobilePageSelector 
              changePage={changePage}
              currentPage={currentPage}
            />

            {currentPage === 'landing' && <MobileLanding />}
            {currentPage === 'projects' && <MobileProjects />}
          
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
