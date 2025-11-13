import React, { useLayoutEffect } from 'react';
import SessionCard from '../components/SessionCard.js';
import { sessions } from '../data/sessions.js';
import './Sessions.css';

const Sessions = () => {
  // Sortowanie sesji od najnowszej do najstarszej
  const sortedSessions = [...sessions].sort((a, b) => {
    // Konwersja dat na obiekty Date i porównanie
    return new Date(b.date) - new Date(a.date);
  });
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="sessions-page">
      <div className="container">
        <h1>Relacje z sesji</h1>
        <div className="sessions-grid">
          {sortedSessions.map(session => (
            <SessionCard key={session.id} session={session} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sessions;