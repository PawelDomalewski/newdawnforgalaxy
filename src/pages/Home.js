import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { sessions } from '../data/sessions.js';
import SessionCard from '../components/SessionCard.js';
import './Home.css';
import { sortSessionsByDateDesc } from '../utils/sessions.js';

const Home = () => {
  const [activeX, setActiveX] = useState(null);

  const xData = [
    { id: 'explore', title: 'eXplore', letter: 'X', description: 'Wyrusz w nieznane rejony galaktyki, odkrywaj nowe systemy gwiezdne, planety i tajemnicze anomalie. Każda eksploracja otwiera nowe możliwości i niebezpieczeństwa. Badaj niezbadane, znajdź cenne zasoby i przygotuj grunt pod ekspansję swojego imperium.' },
    { id: 'expand', title: 'eXpand', letter: 'X', description: 'Rozszerzaj swoje wpływy poprzez kolonizację nowych światów i budowę stacji kosmicznych. Twórz sieć placówek, które będą stanowić podstawę twojej potęgi. Każda nowa kolonia to dodatkowe zasoby, ale też nowe wyzwania logistyczne i strategiczne.' },
    { id: 'exploit', title: 'eXploit', letter: 'X', description: 'Wykorzystuj zdobyte zasoby w pełni efektywnie. Rozwijaj zaawansowane technologie, optymalizuj produkcję i wydobycie. Każda planeta i system ma unikalne bogactwa - naucz się je wykorzystywać, by zbudować najpotężniejszą gospodarkę w galaktyce.' },
    { id: 'exterminate', title: 'eXterminate', letter: 'X', description: 'Eliminuj zagrożenia i konkurencję. Czy to poprzez dyplomację, szpiegostwo, czy otwarty konflikt - zapewnij dominację swojemu imperium. Pamiętaj, że w mroku kosmosu czają się nie tylko inne rasy, ale też pradawne zagrożenia gotowe zniszczyć wszystko.' }
  ];
  const sesjeRef = useRef(null);
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const latestSessions = sortSessionsByDateDesc(sessions).slice(0, 6);

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
        <div>
          <button className="button" onClick={() => scrollToSection(sesjeRef)}>Sesje</button>
          <Link to="/zasady-poradnik" className="button second">
            Zasady
          </Link>
        </div>
      </div>


      <div className="container intro">
        <h2>Eclipse</h2>
        <p>Eclipse to rozbudowana gra strategiczna, w której prowadzisz jedną z galaktycznych ras, eksplorujesz kosmos, rozwijasz technologie i budujesz potężne floty. Twoja ekspansja wymaga zarówno dyplomacji, jak i gotowości do starć z innymi imperiami oraz tajemniczym zagrożeniem czającym się w przestrzeni. Każda rozgrywka jest unikalna dzięki losowej mapie, a zwycięstwo zależy od twoich decyzji, zarządzania zasobami i strategii.</p>
      </div>
      <div className="container intro">
        <section ref={sesjeRef} className="latest-sessions">
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