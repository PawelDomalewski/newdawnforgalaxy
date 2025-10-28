import React from 'react';
import { Link } from 'react-router-dom';
import { sessions } from '../data/sessions';
import './Home.css';

const Home = () => {
  const latestSessions = sessions.slice(0, 3); // 3 najnowsze sesje

  return (
    <div className="home-page">
      <div className="hero">
        <div className="container">
          <h1>Witaj na blogu planszówkowym!</h1>
          <p>Relacje z sesji, recenzje gier i planszówkowe przygody</p>
          <Link to="/sesje" className="cta-button">
            Zobacz relacje
          </Link>
        </div>
      </div>

      <div className="container">
        <section className="latest-sessions">
          <h2>Ostatnie sesje</h2>
          <div className="sessions-preview">
            {latestSessions.map(session => (
              <div key={session.id} className="session-preview">
                <h3>{session.game}</h3>
                <p>{session.date}</p>
                <p className="summary">{session.summary}</p>
                <Link to="/sesje" className="read-more">
                  Czytaj więcej →
                </Link>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;