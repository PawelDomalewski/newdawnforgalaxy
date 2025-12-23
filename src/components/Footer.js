import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {currentYear} <a href="https://domalewski.it/">domalewski.it</a></p>
      </div>
    </footer>
  );
};

export default Footer;