import React from 'react';
import '../styles/Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">
        <span className="logo-icon">🎵</span>
        <h1>MoodMusic</h1>
      </div>
      <p className="tagline">AI-powered music recommendations for every mood</p>
    </header>
  );
};

export default Header;