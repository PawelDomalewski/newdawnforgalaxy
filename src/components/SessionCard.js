import React from 'react';
import { Link } from 'react-router-dom';
import './SessionCard.css';

const SessionCard = ({ session }) => {
  return (
    <Link to={`/sesje/${session.id}`} className="session-card-link">
      <article className="session-card">
        <div className="session-image">
          {session.image ? (
            <img 
              src={session.image}
              loading="lazy" 
              alt={`Sesja gry ${session.game}`}
              className="session-image-real"
              onError={(e) => {
                // Fallback jeśli zdjęcie się nie ładuje
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
          ) : null}
          <div className="image-placeholder">
            🎲 {session.game}
          </div>
        </div>
        <div className="session-content">
          <h3>{session.game}</h3>
          <div className="session-meta">
            <span>📅 {session.date}</span>
            <span>👥 {session.players.join(', ')}</span>
            <span>🕓 Czas: {session.rating}</span>
          </div>
          <p>{session.summary}</p>
          
          <div className="read-more">Czytaj więcej →</div>
        </div>
      </article>
    </Link>
  );
};

export default SessionCard;