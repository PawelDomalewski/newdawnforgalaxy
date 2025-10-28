import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { sessions } from '../data/sessions.js';
import './SessionDetail.css';

const SessionDetail = () => {
  const { sessionId } = useParams();
  const navigate = useNavigate();
  const session = sessions.find(s => s.id === parseInt(sessionId));

  if (!session) {
    return (
      <div className="session-detail">
        <div className="container">
          <div className="not-found">
            <h1>Sesja nie znaleziona</h1>
            <p>Przepraszamy, ta sesja nie istnieje.</p>
            <Link to="/sesje" className="back-button">
              ← Wróć do wszystkich sesji
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="session-detail">
      <div className="container">
        <nav className="breadcrumb">
          <Link to="/">Strona główna</Link>
          <span> / </span>
          <Link to="/sesje">Relacje</Link>
          <span> / </span>
          <span>{session.game}</span>
        </nav>

        <article className="session-article">
          <header className="session-header">
            <button onClick={() => navigate(-1)} className="back-button">
              ← Wróć
            </button>
            <h1>{session.game}</h1>
            <div className="session-meta-large">
              <div className="meta-item">
                <span className="meta-label">📅 Data sesji:</span>
                <span className="meta-value">{session.date}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">👥 Gracze:</span>
                <span className="meta-value">{session.players.join(', ')}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">🕓 Czas:</span>
                <span className="meta-value">{session.rating}</span>
              </div>
            </div>
          </header>

          <div className="session-image-large">
            {session.image ? (
              <img 
                src={session.image} 
                alt={`Sesja gry ${session.game}`}
                className="session-image-real-large"
              />
            ) : (
              <div className="image-placeholder-large">
                🎲 {session.game}
              </div>
            )}
          </div>

          {/* Reszta kodu pozostaje bez zmian */}
          <div className="session-content-detailed">
            <section className="summary-section">
              <h2>Podsumowanie</h2>
              <p className="session-summary">{session.summary}</p>
            </section>

            <section className="full-content-section">
              <h2>Pełny opis sesji</h2>
              <div className="full-content">
                {session.fullContent ? (
                  <div dangerouslySetInnerHTML={{ __html: session.fullContent }} />
                ) : (
                  <p>Pełny opis tej sesji wkrótce się pojawi...</p>
                )}
              </div>
            </section>

            <section className="tags-section">
              <h2>Tagi</h2>
              <div className="session-tags-large">
                {session.tags.map(tag => (
                  <span key={tag} className="tag-large">{tag}</span>
                ))}
              </div>
            </section>
          </div>

          <footer className="session-footer">
            <Link to="/sesje" className="cta-button">
              ← Wróć do wszystkich sesji
            </Link>
          </footer>
        </article>
      </div>
    </div>
  );
};

export default SessionDetail;