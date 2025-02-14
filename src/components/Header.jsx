import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/theme.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1 className="neon-text">PakNodes Army</h1>
      </div>
      <nav>
        <Link to="/" className="neon-text">Home</Link>
        <Link to="/dashboard" className="neon-text">Dashboard</Link>
        <Link to="/validator-info" className="neon-text">Validator Info</Link>
        <Link to="/documentation" className="neon-text">Documentation</Link>
      </nav>
    </header>
  );
};

export default Header;
