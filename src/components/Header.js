import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Sprawdź pozycję scrolla
      const scrollPosition = window.scrollY;
      setIsSticky(scrollPosition > 60);
    };

    // Dodaj nasłuchiwanie na scroll
    window.addEventListener('scroll', handleScroll);

    // Sprawdź początkową pozycję scrolla
    handleScroll();

    // Cleanup - usuń nasłuchiwanie przy odmontowaniu komponentu
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Pusta tablica zależności - efekt uruchomi się tylko raz

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`header ${isSticky ? 'sticky-menu' : ''}`}>
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
          <NavLink to="/" end onClick={closeMenu}
            className={({ isActive }) => isActive ? 'active' : ''}>
            Strona główna
          </NavLink>

          <NavLink to="/sesje" onClick={closeMenu}
            className={({ isActive }) => isActive ? 'active' : ''}>
            Relacje
          </NavLink>

          <NavLink to="/zasady-poradnik" onClick={closeMenu}
            className={({ isActive }) => isActive ? 'active' : ''}>
            Zasady i Poradnik
          </NavLink>

          <NavLink to="/statystyki" onClick={closeMenu}
            className={({ isActive }) => isActive ? 'active' : ''}>
            Statystyki
          </NavLink>
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