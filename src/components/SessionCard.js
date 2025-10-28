import React from 'react';
import './SessionCard.css';

const SessionCard = ({ session }) => {
  return (
    <article className="session-card">
      <div className="session-image">
        {/* Tymczasowy placeholder zamiast obrazka */}
        <div className="image-placeholder">
          🎲 {session.game}
        </div>
      </div>
      <div className="session-content">
        <h3>{session.game}</h3>
        <div className="session-meta">
          <span>📅 {session.date}</span>
          <span>👥 {session.players.join(', ')}</span>
          <span>⭐ Ocena: {session.rating}/10</span>
        </div>
        <p>{session.summary}</p>
        <div className="session-tags">
          {session.tags.map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default SessionCard;