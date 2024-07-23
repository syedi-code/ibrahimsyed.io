import React, { useState } from 'react';
import logo from './logo.svg';
import Sidebar from './components/Sidebar';
import SidebarSketch from './components/SidebarSketch';
import LandingPage from './pages/LandingPage';
import ProjectsPage from './pages/ProjectsPage';
import PortfolioPage from './pages/PortfolioPage';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('landing');

  const changePage = (page: string) => {
    setCurrentPage(page);
  }

  return (
    <div className="App">
      <SidebarSketch />
      <Sidebar changePage={changePage}/>

      <div className="content">
        {currentPage === 'landing' && <LandingPage />}
        {currentPage === 'projects' && <ProjectsPage />}
        {currentPage === 'portfolio' && <PortfolioPage />}
      </div>
    </div>
  );
}

export default App;
