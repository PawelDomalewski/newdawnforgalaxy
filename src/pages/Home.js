import React from 'react';
import { Link } from 'react-router-dom';
import { sessions } from '../data/sessions.js';
import SessionCard from '../components/SessionCard.js';
import './Home.css';

const Home = () => {
  const latestSessions = sessions.slice(0, 6); // Pokazujemy 6 najnowszych sesji

  return (
    <div className="home-page">
      <div className="hero">
        <h1>Eclipse: New Dawn for the Galaxy</h1>
      </div>
      <div className="container py-5">
        <h2>Dawno, dawno temu...</h2>
        <p>Strona powstawała w celu spisywania tego co się dzieje na sesjach w grze Eclipse</p>
        <h2>...w odległej galaktyce</h2>
        <p>W zakładkach można również znaleźć pomocne opisy ras</p>
      </div>
      <div className="container">
        {/* Sekcja z ostatnimi sesjami */}
        <section className="latest-sessions">
          <div className="section-header">
            <h2>Ostatnie sesje</h2>
            <Link to="/sesje" className="view-all-link">
              Zobacz wszystkie →
            </Link>
          </div>
          
          {latestSessions.length > 0 ? (
            <div className="sessions-grid">
              {latestSessions.map(session => (
                <SessionCard key={session.id} session={session} />
              ))}
            </div>
          ) : (
            <div className="no-sessions">
              <p>Jeszcze nie ma żadnych sesji. </p>
              <Link to="/sesje" className="cta-button">
                Dodaj pierwszą sesję
              </Link>
            </div>
          )}
        </section>

        {/* Dodatkowa sekcja informacyjna */}
        <section className="info-section">
          <div className="info-cards">
            <div className="info-card">
              <h3>🎲 Różnorodne gry</h3>
              <p>Od strategicznych po rodzinne - gramy we wszystko co ciekawe</p>
            </div>
            <div className="info-card">
              <h3>👥 Doświadczeni gracze</h3>
              <p>Gramy regularnie w gronie przyjaciół i pasjonatów planszówek</p>
            </div>
            <div className="info-card">
              <h3>📝 Szczegółowe relacje</h3>
              <p>Dzielimy się naszymi doświadczeniami i strategiami z każdej rozgrywki</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;