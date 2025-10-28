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
      features: ["+1 do ruchu", "Elastyczność", "Wymiana handlowa 2 do 1"],
      technologies: ["Baza Gwiezdna"],
      resources: {
        orange: 2,
        pink: 3,
        brown: 3
      },
      difficulty: 1,
      gamesPlayed: 1,
      firstPlaces: 0,
      secondPlaces: 0
    },
    {
      id: 2,
      name: "Planta",
      image: "/images/races/planta.jpg",
      description: "Rasa roślinna specjalizująca się w ekspansji",
      features: ["Cztery statki kolonizacyjne", "Jedną akcją eksploracja mogą eksplorować dwa heksy", "+1 pkt za każdy posiadany hex na koniec gry"],
      technologies: ["Baza Gwiezdna"],
      resources: {
        orange: 4,
        pink: 4,
        brown: 4
      },
      difficulty: 2,
      gamesPlayed: 2,
      firstPlaces: 1,
      secondPlaces: 0
    },
    {
      id: 3,
      name: "Mechanema",
      image: "/images/races/mechanema.jpg",
      description: "Mechaniczna rasa o potężnej technologii",
      features: ["3 Upgrade w jednym ruchu", "3 Budowy w jednym ruchu", "Tanie Statki"],
      technologies: ["Komputer Pozytronowy +2"],
      resources: {
        orange: 3,
        pink: 3,
        brown: 3
      },
      difficulty: 4,
      gamesPlayed: 10,
      firstPlaces: 2,
      secondPlaces: 3
    },
    {
      id: 4,
      name: "Hegemonia Oriona",
      image: "/images/races/orion.jpg",
      description: "Starożytna rasa o mistrzostwie w dyplomacji",
      features: ["Krążownik od początku gry", "Lepsza inicjatywa i energia na statkach", "Wymiana handlowa 4 do 1"],
      technologies: ["Tarcza Gaussa -1", "Bomby Neutronowe"],
      resources: {
        orange: 3,
        pink: 3,
        brown: 5
      },
      difficulty: 3,
      gamesPlayed: 8,
      firstPlaces: 1,
      secondPlaces: 2
    },
    {
      id: 5,
      name: "Imperium Eridani",
      image: "/images/races/eridani.jpg",
      description: "Bogata rasa, której chciwość doprowadziła do upadku",
      features: ["-2 Dyski Wpływów", "26 Pieniędzy od początku gry", "Losuje dwa żetony reputacji na początku gry"],
      technologies: ["Tarcza Gaussa -1", "Plasma Cannon", "Fusion Drive"],
      resources: {
        orange: 26,
        pink: 2,
        brown: 4
      },
      difficulty: 3,
      gamesPlayed: 8,
      firstPlaces: 1,
      secondPlaces: 2
    },
    {
      id: 6,
      name: "Postępowi Hydranie",
      image: "/images/races/hydran.jpg",
      description: "Rasa wysoko zaawansowana technologicznie",
      features: ["Wynajduje dwie technologie w jednym ruchu", "Mało surowców od początku gry", "5 Nauki od początku gry"],
      technologies: ["Zaawansowane Laboratoria"],
      resources: {
        orange: 2,
        pink: 5,
        brown: 2
      },
      difficulty: 3,
      gamesPlayed: 8,
      firstPlaces: 1,
      secondPlaces: 2
    },
    {
      id: 7,
      name: "Potomkowie Draco",
      image: "/images/races/draco.jpg",
      description: "Tajemnicza rasa o nieznanej przeszłości",
      features: ["Nie walczą ze starożytnymi", "Jedną akcją eksploracja mogą wziąć dwa heksy i wybrać jeden", "+1 pkt na koniec gry za każdy żeton Starożytnych"],
      technologies: [],
      resources: {
        orange: 2,
        pink: 4,
        brown: 3
      },
      difficulty: 3,
      gamesPlayed: 8,
      firstPlaces: 1,
      secondPlaces: 2
    },
    {
      id: 8,
      name: "Magellanie",
      image: "/images/races/magellan.jpg",
      description: "Wszechstronna rasa przemierzająca Galaktykę",
      features: ["Żeton Odkrycia za awans technologiczny", "Mogą zużyć statek kolonizacyjny na surowiec", "1 pkt za każdy wkorzystany żeton odkrycia"],
      technologies: ["Fusion Source"],
      resources: {
        orange: 2,
        pink: 2,
        brown: 3
      },
      difficulty: 3,
      gamesPlayed: 8,
      firstPlaces: 1,
      secondPlaces: 2
    },
    {
      id: 9,
      name: "Wygnańcy",
      image: "/images/races/exiles.jpg",
      description: "Rasa zamieszkująca Orbitale",
      features: ["Orbitale działają jak Bazy Gwiezdne", "1 pkt za każdy posiadany Orbital na koniec gry"],
      technologies: ["Urządzenia maskujące", "Orbitale"],
      resources: {
        orange: 3,
        pink: 2,
        brown: 4
      },
      difficulty: 3,
      gamesPlayed: 8,
      firstPlaces: 1,
      secondPlaces: 2
    },
    {
      id: 10,
      name: "Syndykat Rho Indi",
      image: "/images/races/rhoindi.jpg",
      description: "Kosmicznie piraci i grabieżcy",
      features: ["Zaczyna dwoma myśliwcami", "4 aktywacje ruchu", "Otrzymuje pieniądze za zniszczone statki"],
      technologies: ["Baza Gwiezdna", "Tarcza Gaussa -1"],
      resources: {
        orange: 2,
        pink: 3,
        brown: 3
      },
      difficulty: 3,
      gamesPlayed: 8,
      firstPlaces: 1,
      secondPlaces: 2
    },
    {
      id: 11,
      name: "Oświeceni Lyry",
      image: "/images/races/lyra.jpg",
      description: "Rasa oświecona, budująca świątynie",
      features: ["Może budować świątynie", "Mogą statku kolonizacyjnego aby przerzucić jedną własną kostkę w walce", "1 pkt za każdą świątynię"],
      technologies: ["Osłona zniekształcająca"],
      resources: {
        orange: 2,
        pink: 4,
        brown: 3
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
              <div className="detail-section">
                  <h4>Najważniejsze cechy:</h4>
                  <ol className="features-list">
                    {race.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ol>
                </div>
              <div className="race-details">
                
                
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