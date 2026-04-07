import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="container">
        <h1>O mnie</h1>
        <div className="about-content">
          <div className="about-text">
            <p>
              Cześć! Jestem pasjonatem gier planszowych i przez ten blog 
              chcę dzielić się z Wami relacjami z naszych sesji.
            </p>
            <p>
              Gram regularnie z grupą przyjaciół, odkrywając zarówno klasyki 
              jak i nowości ze świata board games.
            </p>
            <h2>Moje ulubione gry:</h2>
            <ul>
              <li>Eclipse</li>
              <li>Scythe</li>
              <li>Twilight Imperium</li>
              <li>Carcassonne</li>
              <li>7 Wonders</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;