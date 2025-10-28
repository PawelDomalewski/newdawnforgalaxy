import React from 'react';
import './Rules.css';

const Rules = () => {
  // Dane ras - możesz je później przenieść do osobnego pliku data/races.js
  const racesData = [
    {
      id: 1,
      name: "Ludzie",
      image: "/images/races/terranie.jpg",
      description: "Zrównoważona rasa o wszechstronnych zdolnościach",
      features: ["+1 do ruchu", "Tania rozbudowa", "Elastyczność"],
      technologies: ["Baza Gwiezdna"],
      resources: {
        orange: 3,
        pink: 2,
        brown: 1
      },
      difficulty: 2,
      gamesPlayed: 15,
      firstPlaces: 3,
      secondPlaces: 4
    },
    {
      id: 2,
      name: "Planta",
      image: "/images/races/planta.jpg",
      description: "Rasa roślinna specjalizująca się w ekspansji",
      features: ["Darmowe kolonie", "Bonus do planet", "Szybki rozwój"],
      technologies: ["Baza Gwiezdna"],
      resources: {
        orange: 2,
        pink: 4,
        brown: 1
      },
      difficulty: 3,
      gamesPlayed: 12,
      firstPlaces: 5,
      secondPlaces: 2
    },
    {
      id: 3,
      name: "Mechanicy",
      image: "/images/races/mechanema.jpg",
      description: "Mechaniczna rasa o potężnej technologii",
      features: ["Bonus do badań", "Tanie ulepszenia", "Silne statki"],
      technologies: ["Komputer Pozytronowy +2"],
      resources: {
        orange: 4,
        pink: 1,
        brown: 2
      },
      difficulty: 4,
      gamesPlayed: 10,
      firstPlaces: 2,
      secondPlaces: 3
    },
    {
      id: 4,
      name: "Orionowie",
      image: "/images/races/orion.jpg",
      description: "Starożytna rasa o mistrzostwie w dyplomacji",
      features: ["Bonus do wpływów", "Sojusze", "Specjalne traktaty"],
      technologies: ["Tarcza Gaussa -1", "Bomby Neutronowe"],
      resources: {
        orange: 2,
        pink: 3,
        brown: 2
      },
      difficulty: 3,
      gamesPlayed: 8,
      firstPlaces: 1,
      secondPlaces: 2
    }
  ];

  // Funkcja do renderowania gwiazdek trudności
  const renderDifficultyStars = (difficulty) => {
    return '★'.repeat(difficulty) + '☆'.repeat(5 - difficulty);
  };

  return (
    <div className="games-page">
      {/* Sekcja Instrukcji */}
      <div className="container">
        <h1>Instrukcje</h1>
      </div>
      <div className="container grid">
        <div>
          <h2>Eclipse</h2>
          <a href="/images/Eclipse.pdf" className='rule'><img src="/images/eclipse.jpg" alt="Instrukcja Eclipse"></img></a>
        </div>
        <div>
          <h2>Eclipse - Rise of the Ancients</h2>
          <a href='/images/eclipse_rota.pdf' className='rule'><img src='/images/eclipse_rota.jpg' alt="Instrukcja Eclipse ROTA"></img></a>
        </div>
        <div>
          <h2>Eclipse - Shadow of the Rift</h2>
          <a href='/images/eclipse_sotr.pdf' className='rule'><img src='/images/eclipse_sotr.jpg' alt="Instrukcja Eclipse SOTR"></img></a>
        </div>
      </div>

      {/* Nowa Sekcja Ras */}
      <div className="container">
        <h1 className="races-title">Rasy</h1>
        <p className="races-subtitle">Poznaj dostępne rasy w grze Eclipse</p>
      </div>
      
      <div className="container races-container">
        {racesData.map(race => (
          <div key={race.id} className="race-card">
            {/* Portret rasy */}
            <div className="race-portrait">
              <img src={race.image} alt={`Portret rasy ${race.name}`} />
            </div>
            
            {/* Informacje o rasie */}
            <div className="race-info">
              <div className="race-header">
                <h2 className="race-name">{race.name}</h2>
                <div className="race-stats">
                  <span className="difficulty">
                    Poziom trudności: {renderDifficultyStars(race.difficulty)}
                  </span>
                </div>
              </div>
              
              <p className="race-description">{race.description}</p>
              
              <div className="race-details">
                <div className="detail-section">
                  <h4>Najważniejsze cechy:</h4>
                  <ul className="features-list">
                    {race.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="detail-section">
                  <h4>Startowe technologie:</h4>
                  <div className="technologies">
                    {race.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
                
                <div className="detail-section">
                  <h4>Startowe surowce:</h4>
                  <div className="resources">
                    <span className="resource orange">🟠 {race.resources.orange}</span>
                    <span className="resource pink">🟣 {race.resources.pink}</span>
                    <span className="resource brown">🟤 {race.resources.brown}</span>
                  </div>
                </div>
              </div>
              
              <div className="race-stats-detailed">
                <div className="stat">
                  <span className="stat-value">{race.gamesPlayed}</span>
                  <span className="stat-label">Rozegrane gry</span>
                </div>
                <div className="stat">
                  <span className="stat-value">🥇 {race.firstPlaces}</span>
                  <span className="stat-label">Zwycięstwa</span>
                </div>
                <div className="stat">
                  <span className="stat-value">🥈 {race.secondPlaces}</span>
                  <span className="stat-label">Drugie miejsca</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rules;