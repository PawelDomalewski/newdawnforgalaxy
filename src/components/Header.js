import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
          🎲 Blog Planszówkowy
        </Link>
        <nav>
          <Link to="/">Strona główna</Link>
          <Link to="/sesje">Relacje</Link>
          <Link to="/gry">Gry</Link>
          <Link to="/o-mnie">O mnie</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;