import React from 'react';
import { Link } from 'react-router-dom';
import { sessions } from '../data/sessions.js';
import SessionCard from '../components/SessionCard.js';
import './Home.css';

const Home = () => {
  // Sortowanie sesji od najnowszej do najstarszej i pobranie 3 najnowszych
  const latestSessions = sessions
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 6);

  return (
    <div className="home-page">
      <div className="hero">
        <h1>Eclipse: New Dawn for the Galaxy</h1>
      </div>
      <div className="container intro">
        <h2>Eclipse</h2>
        <p>Wciel się w przywódcę jednej z potężnych ras galaktyki i wyrusz na podbój kosmosu w tej niezwykle głębokiej grze strategicznej. Twoja przygoda zaczyna się od odkrywania tajemniczych gwiazd, rozwoju zaawansowanych technologii i projektowania własnych, potężnych flot kosmicznych. Pamiętaj jednak, że twoja ekspansja nie pozostanie niezauważona – będziesz musiał prowadzić finezyjne rozgrywki dyplomatyczne lub szykować się na nieuniknione starcia z innymi imperiami. W mroku przestrzeni czyha jednak starsze i śmiertelne zagrożenie, gotowe wystawić na próbę wszystkie twoje strategiczne umiejętności. "Eclipse" doskonale łączy w sobie elementy eksploracji, rozwoju i taktycznych bitew na ogromną skalę, a każda rozgrywka jest unikalna dzięki losowo generowanej mapie. Podejmuj kluczowe decyzje, zarządzaj zasobami i doświadczaj epickich, widowiskowych starć, w których wynik zależy od twojego planu. Weź udział w tej niezapomnianej kosmicznej symfonii władzy i napisz swoją własną historię dominacji w galaktyce!</p>
      </div>
      <div className="container intro">
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

{/*       
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
        </section>*/}
      </div>
    </div>
  );
};

export default Home;