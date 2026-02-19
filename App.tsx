
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home.tsx';
import ProjectDetail from './components/ProjectDetail.tsx';
import HobbyDetail from './components/HobbyDetail.tsx';

const App: React.FC = () => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      return saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return true;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(prev => !prev);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home isDark={isDark} toggleTheme={toggleTheme} />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="/hobby/:name" element={<HobbyDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
