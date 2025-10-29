import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        
        {/* Przycisk hamburger menu */}
        <button 
          className={`hamburger ${isMenuOpen ? 'hamburger--active' : ''}`}
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Menu nawigacyjne */}
        <nav className={`nav ${isMenuOpen ? 'nav--active' : ''}`}>
          <Link to="/" onClick={closeMenu}>Strona główna</Link>
          <Link to="/sesje" onClick={closeMenu}>Relacje</Link>
          <Link to="/zasady-poradnik" onClick={closeMenu}>Zasady i Poradnik</Link>
        </nav>

        {/* Overlay do zamknięcia menu po kliknięciu w tło */}
        {isMenuOpen && (
          <div className="nav-overlay" onClick={closeMenu}></div>
        )}
      </div>
    </header>
  );
};

export default Header;