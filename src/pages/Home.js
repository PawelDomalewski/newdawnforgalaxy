import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { sessions } from '../data/sessions.js';
import SessionCard from '../components/SessionCard.js';
import './Home.css';

const Home = () => {
  const [activeX, setActiveX] = useState(null);
  
  const xData = [
    { id: 'explore', title: 'eXplore', letter: 'X', description: 'Wyrusz w nieznane rejony galaktyki, odkrywaj nowe systemy gwiezdne, planety i tajemnicze anomalie. Każda eksploracja otwiera nowe możliwości i niebezpieczeństwa. Badaj niezbadane, znajdź cenne zasoby i przygotuj grunt pod ekspansję swojego imperium.' },
    { id: 'expand', title: 'eXpand', letter: 'X', description: 'Rozszerzaj swoje wpływy poprzez kolonizację nowych światów i budowę stacji kosmicznych. Twórz sieć placówek, które będą stanowić podstawę twojej potęgi. Każda nowa kolonia to dodatkowe zasoby, ale też nowe wyzwania logistyczne i strategiczne.' },
    { id: 'exploit', title: 'eXploit', letter: 'X', description: 'Wykorzystuj zdobyte zasoby w pełni efektywnie. Rozwijaj zaawansowane technologie, optymalizuj produkcję i wydobycie. Każda planeta i system ma unikalne bogactwa - naucz się je wykorzystywać, by zbudować najpotężniejszą gospodarkę w galaktyce.' },
    { id: 'exterminate', title: 'eXterminate', letter: 'X', description: 'Eliminuj zagrożenia i konkurencję. Czy to poprzez dyplomację, szpiegostwo, czy otwarty konflikt - zapewnij dominację swojemu imperium. Pamiętaj, że w mroku kosmosu czają się nie tylko inne rasy, ale też pradawne zagrożenia gotowe zniszczyć wszystko.' }
  ];

  const latestSessions = sessions
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 6);

  const handleXClick = (id) => {
    setActiveX(id);
  };

  const handleXHover = (id) => {
    // Tylko pokazuje label na hover, nie zmienia stanu
  };

  return (
    <div className="home-page">
      <div className="hero">
        <h1>Eclipse: New Dawn for the Galaxy</h1>
      </div>
      
      <div className="container intro">
        <h2>Eclipse</h2>
        <p>Wciel się w przywódcę jednej z potężnych ras galaktyki i wyrusz na podbój kosmosu w tej niezwykle głębokiej grze strategicznej. Twoja przygoda zaczyna się od odkrywania tajemniczych gwiazd, rozwoju zaawansowanych technologii i projektowania własnych, potężnych flot kosmicznych. Pamiętaj jednak, że twoja ekspansja nie pozostanie niezauważona – będziesz musiał prowadzić finezyjne rozgrywki dyplomatyczne lub szykować się na nieuniknione starcia z innymi imperiami. W mroku przestrzeni czyha jednak starsze i śmiertelne zagrożenie, gotowe wystawić na próbę wszystkie twoje strategiczne umiejętności. "Eclipse" doskonale łączy w sobie elementy eksploracji, rozwoju i taktycznych bitew na ogromną skalę, a każda rozgrywka jest unikalna dzięki losowo generowanej mapie. Podejmuj kluczowe decyzje, zarządzaj zasobami i doświadczaj epickich, widowiskowych starć, w których wynik zależy od twojego planu. Weź udział w tej niezapomnianej kosmicznej symfonii władzy i napisz swoją własną historię dominacji w galaktyce!</p>
      </div>

      {/* Sekcja 4X - Interactive 
      <section className="x4-section intro container">
        <h1>Poznaj strategię 4X:</h1>
        <div className="container">
          {!activeX ? (
            // Widok główny z 4 X
            <div className="x4-grid">
              {xData.map((item) => (
                <div 
                  key={item.id}
                  className="x4-item"
                  onMouseEnter={() => handleXHover(item.id)}
                  onMouseLeave={() => handleXHover(null)}
                  onClick={() => handleXClick(item.id)}
                >
                  <div className="x4-circle">
                    <div className="x4-x">{item.letter}</div>
                  </div>
                  <div className="x4-label">{item.title}</div>
                </div>
              ))}
            </div>
          ) : (
            // Widok szczegółowy
            <div className="x4-detail-view">
              <button 
                className="x4-back-button"
                onClick={() => setActiveX(null)}
              >
                ← Powrót
              </button>
              
              <div className="x4-detail-container">
                <div className="x4-list">
                  {xData.map((item) => (
                    <div 
                      key={item.id}
                      className={`x4-list-item ${activeX === item.id ? 'active' : ''}`}
                      onClick={() => setActiveX(item.id)}
                    >
                      <div className="x4-list-circle">
                        <div className="x4-list-x">{item.letter}</div>
                      </div>
                      <span>{item.title}</span>
                    </div>
                  ))}
                </div>
                
                <div className="x4-description">
                  <div className="x4-description-header">
                    <div className="x4-description-circle">
                      <div className="x4-description-x">
                        {xData.find(x => x.id === activeX)?.letter}
                      </div>
                    </div>
                    <h3>{xData.find(x => x.id === activeX)?.title}</h3>
                  </div>
                  <p>{xData.find(x => x.id === activeX)?.description}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
*/}
      <div className="container intro">
        <section className="latest-sessions">
          <div className="section-header">
            <h2>Ostatnie sesje</h2>
            <Link to="/sesje" className="button">
              Zobacz wszystkie
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
      </div>
    </div>
  );
};

export default Home;