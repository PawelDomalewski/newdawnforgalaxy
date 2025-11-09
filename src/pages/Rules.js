import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Rules.css';

const Rules = () => {
  const [selectedRace, setSelectedRace] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Refs do przewijania sekcji
  const instructionsRef = useRef(null);
  const racesRef = useRef(null);
  const topRacesRef = useRef(null);
  const guidesRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const openRaceModal = (race) => {
    setSelectedRace(race);
    setIsModalOpen(true);
  };

  const closeRaceModal = () => {
    setIsModalOpen(false);
    setSelectedRace(null);
  };

  // Dane ras
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
      gamesPlayed: 2,
      firstPlaces: 0,
      secondPlaces: 0,
      thirdPlaces: 1,
      fourthPlaces: 1,
      fifthPlaces: 0,
      sixthPlaces: 0
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
      secondPlaces: 0,
      thirdPlaces: 0,
      fourthPlaces: 0,
      fifthPlaces: 1,
      sixthPlaces: 0
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
      difficulty: 2,
      gamesPlayed: 3,
      firstPlaces: 0,
      secondPlaces: 2,
      thirdPlaces: 0,
      fourthPlaces: 1,
      fifthPlaces: 0,
      sixthPlaces: 0
    },
    {
      id: 4,
      name: "Hegemonia Oriona",
      image: "/images/races/orion.jpg",
      description: "Starożytna rasa o mistrzostwie w sztuce wojennej",
      features: ["Krążownik od początku gry", "Lepsza inicjatywa i energia na statkach", "Wymiana handlowa 4 do 1"],
      technologies: ["Tarcza Gaussa -1", "Bomby Neutronowe"],
      resources: {
        orange: 3,
        pink: 3,
        brown: 5
      },
      difficulty: 3,
      gamesPlayed: 4,
      firstPlaces: 3,
      secondPlaces: 0,
      thirdPlaces: 0,
      fourthPlaces: 0,
      fifthPlaces: 0,
      sixthPlaces: 1
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
      difficulty: 5,
      gamesPlayed: 2,
      firstPlaces: 0,
      secondPlaces: 0,
      thirdPlaces: 1,
      fourthPlaces: 1,
      fifthPlaces: 0,
      sixthPlaces: 0
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
      difficulty: 2,
      gamesPlayed: 5,
      firstPlaces: 1,
      secondPlaces: 2,
      thirdPlaces: 1,
      fourthPlaces: 0,
      fifthPlaces: 0,
      sixthPlaces: 1
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
      gamesPlayed: 2,
      firstPlaces: 0,
      secondPlaces: 1,
      thirdPlaces: 1,
      fourthPlaces: 0,
      fifthPlaces: 0,
      sixthPlaces: 0
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
      difficulty: 1,
      gamesPlayed: 3,
      firstPlaces: 0,
      secondPlaces: 0,
      thirdPlaces: 2,
      fourthPlaces: 0,
      fifthPlaces: 1,
      sixthPlaces: 0
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
      gamesPlayed: 0,
      firstPlaces: 0,
      secondPlaces: 0,
      thirdPlaces: 0,
      fourthPlaces: 0,
      fifthPlaces: 0,
      sixthPlaces: 0
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
      gamesPlayed: 1,
      firstPlaces: 0,
      secondPlaces: 0,
      thirdPlaces: 1,
      fourthPlaces: 0,
      fifthPlaces: 0,
      sixthPlaces: 0
    },
    {
      id: 11,
      name: "Oświeceni Lyry",
      image: "/images/races/lyra.jpg",
      description: "Rasa oświecona, budująca świątynie",
      features: ["Może budować świątynie", "Mogą użyć statek kolonizacyjny aby przerzucić jedną własną kostkę w walce", "1 pkt za każdą świątynię"],
      technologies: ["Osłona zniekształcająca"],
      resources: {
        orange: 2,
        pink: 4,
        brown: 3
      },
      difficulty: 4,
      gamesPlayed: 3,
      firstPlaces: 0,
      secondPlaces: 1,
      thirdPlaces: 1,
      fourthPlaces: 1,
      fifthPlaces: 0,
      sixthPlaces: 0
    },
    {
      id: 12,
      name: "Octanis",
      image: "/images/races/octanis.jpg",
      description: "Rasa wszechstronna, adaptująca się do warunków i ewoluująca",
      features: ["Ewolucje i mutacje", "Dodatkowy surowiec - mutagen (4 na początku gry, +2 co rundę)", "Może użyć statku kolonizacyjnego by wymienić żeton ewolucji w swojej puli"],
      technologies: ["Fusion Drive"],
      resources: {
        orange: 2,
        pink: 3,
        brown: 3
      },
      difficulty: 4,
      gamesPlayed: 2,
      firstPlaces: 2,
      secondPlaces: 0,
      thirdPlaces: 0,
      fourthPlaces: 0,
      fifthPlaces: 0,
      sixthPlaces: 0
    },
    {
      id: 13,
      name: "Shaperzy z Dorado",
      image: "/images/races/dorado.jpg",
      description: "Rasa manipulująca czasem i przestrzenią",
      features: ["Zniekształcanie czasu", "+1 pkt za każde wypełnione zniekształcenie czasu", "Może użyć statku kolonizacyjnego by wymienić żeton zniekształcenia czasu w swojej puli"],
      technologies: ["Soliton Cannon"],
      resources: {
        orange: 3,
        pink: 4,
        brown: 2
      },
      difficulty: 4,
      gamesPlayed: 2,
      firstPlaces: 0,
      secondPlaces: 1,
      thirdPlaces: 0,
      fourthPlaces: 0,
      fifthPlaces: 1,
      sixthPlaces: 0
    },
    {
      id: 14,
      name: "Jedność Pyxis",
      image: "/images/races/pyxis.jpg",
      description: "Rasa nanomaszyn korzystająca z transmaterii",
      features: ["Połączone akcje", "Tylko jeden surowiec - transmateria (8 na początku gry)", "Mogą łączyć mniejsze statki w większy lub na odwrót"],
      technologies: ["Advanced Robotics"],
      resources: {
        orange: 0,
        pink: 0,
        brown: 0
      },
      difficulty: 5,
      gamesPlayed: 2,
      firstPlaces: 1,
      secondPlaces: 1,
      thirdPlaces: 0,
      fourthPlaces: 0,
      fifthPlaces: 0,
      sixthPlaces: 0
    }
  ];

  // Obliczanie top 3 ras na podstawie win ratio
  const topRaces = racesData
    .filter(race => race.gamesPlayed > 0) // Filtruj rasy z co najmniej jedną rozegraną grą
    .map(race => ({
      ...race,
      winRatio: race.firstPlaces / race.gamesPlayed // Oblicz win ratio
    }))
    .sort((a, b) => b.winRatio - a.winRatio) // Sortuj malejąco według win ratio
    .slice(0, 3); // Weź pierwsze 3 pozycje

  // Zaktualizowane dane poradników
  const guidesData = [
    {
      id: 1,
      title: "Kompleksowy poradnik do gry Eclipse",
      description: "Strategie od początku gry do finału",
      author: "Jordan Grahm",
      source: "https://boardgamegeek.com/thread/2264028/general-start-to-finish-guide-to-upping-your-strat",
      sourceName: "BoardGameGeek",
      difficulty: 2,
      content: "full",
      image: "/images/pic1974056.jpg",
      excerpt: "Wielu graczy nie wie, jak wydostać się z trudnej sytuacji lub brakuje im umiejętności długoterminowego planowania i adaptacji wymaganych do bycia biegłym w Eclipse. Ten poradnik przeprowadzi cię przez każdą fazę gry - od wyboru rasy po finałowe rundy."
    },
    {
      id: 2,
      title: "Zaawansowana strategia Eclipse",
      description: "Taktyki i techniki dla doświadczonych graczy",
      author: "Kester 42",
      source: "https://boardgamegeek.com/thread/1163520/advanced-eclipse-strategy",
      sourceName: "BoardGameGeek",
      difficulty: 4,
      content: "full",
      image: "/images/strategy.jpg",
      excerpt: "Uwielbiam Eclipse. Ta gra ma interesujące mechaniki i dynamikę, które pasują do specjalnej niszy w mojej grupie graczy. Ten przewodnik eksploruje zaawansowane taktyki i strategie dla tej wspaniałej gry."
    },
    {
      id: 3,
      title: "Podstawy militarne w grze Eclipse",
      description: "Podstawy walki i strategii militarnej",
      author: "Peter O.",
      source: "https://boardgamegeek.com/thread/750430/an-eclipse-military-primer",
      sourceName: "BoardGameGeek",
      difficulty: 3,
      content: "full",
      image: "/images/military.jpg",
      excerpt: "To jest mój podstawowy sposób walki. Nie jestem ekspertem od Eclipse, ale radzę sobie wystarczająco dobrze w mojej grupie graczy. Ten przewodnik opiera się na podstawowej doktrynie wojny manewrowej."
    },
    {
      id: 4,
      title: "Podstawy skutecznej ekonomii w Eclipse",
      description: "Strategiczne podejście do gospodarki",
      author: "Peter O.",
      source: "https://boardgamegeek.com/thread/760874/an-eclipse-economic-primer",
      sourceName: "BoardGameGeek",
      difficulty: 2,
      content: "full",
      image: "/images/economy.jpg",
      excerpt: "Ekonomia jest kluczowa do sukcesu w Eclipse. Poznaj tajniki efektywnego zarządzania ekonomią i maksymalizacji zysków."
    },
    {
      id: 5,
      title: "Sekrety eksploracji galaktyki Eclipse",
      description: "Strategiczne podejście do odkrywania hexów",
      author: "Peter O.",
      source: "https://boardgamegeek.com/thread/804274/an-eclipse-exploration-primer",
      sourceName: "BoardGameGeek",
      difficulty: 3,
      content: "full",
      image: "/images/explore.jpg",
      excerpt: "Eksploracja jest fundamentalnym aspektem Eclipse - nie można wygrać gry tylko przez nią, ale na pewno można przez nią przegrać. Poznaj tajniki efektywnego odkrywania hexów, orientowania ich i podejmowania decyzji które z nich zachować, a które odrzucić."
    },
    {
      id: 6,
      title: "Strategie technologiczne dla ras",
      description: "Optymalne ścieżki rozwoju technologicznego",
      author: "Dymond Kyng",
      source: "https://boardgamegeek.com/thread/1361979/general-tech-strategy-by-race",
      sourceName: "BoardGameGeek",
      difficulty: 4,
      content: "full",
      image: "/images/tech.jpg",
      excerpt: "Po ponad 50 rozgrywkach i doświadczeniu turniejowym, poznaj optymalne ścieżki technologiczne dla każdej rasy w Eclipse. Dowiedz się które rzędy technologii są najlepsze dla twojej rasy i jak maksymalizować korzyści z rabatów naukowych."
    }
  ];

  // Funkcja do renderowania gwiazdek trudności
  const renderDifficultyStars = (difficulty) => {
    return '★'.repeat(difficulty) + '☆'.repeat(5 - difficulty);
  };

  // Funkcja do formatowania win ratio w procentach
  const formatWinRatio = (ratio) => {
    return `${(ratio * 100).toFixed(0)}%`;
  };

  return (
    <div className="rules-page">
      {/* Główna zawartość */}
      <div className="rules-content">
        {/* Sekcja Instrukcji */}
        <section ref={instructionsRef} className="section">
          <div className="container">
            <h1>Instrukcje</h1>
          </div>
          <div className="container grid">
            <div>
              <h2>Eclipse</h2>
              <a href="/images/Eclipse.pdf" className='rule' target="_blank" rel="noopener noreferrer">
                <img src="/images/eclipse.jpg" alt="Instrukcja Eclipse" />
              </a>
            </div>
            <div>
              <h2>Eclipse - Rise of the Ancients</h2>
              <a href='/images/eclipse_rota.pdf' className='rule' target="_blank" rel="noopener noreferrer">
                <img src='/images/eclipse_rota.jpg' alt="Instrukcja Eclipse ROTA" />
              </a>
            </div>
            <div>
              <h2>Eclipse - Shadow of the Rift</h2>
              <a href='/images/eclipse_sotr.pdf' className='rule' target="_blank" rel="noopener noreferrer">
                <img src='/images/eclipse_sotr.jpg' alt="Instrukcja Eclipse SOTR" />
              </a>
            </div>
          </div>
        </section>

        // Sekcja Ras
        <section ref={racesRef} className="section">
          <div className="container">
            <h1 className="races-title">Rasy</h1>
            <p className="races-subtitle">Kliknij na rasę aby zobaczyć szczegóły</p>
          </div>

          <div className="container races-grid">
            {racesData.map(race => {
              // Oblicz winRatio dla każdej rasy
              const winRatio = race.gamesPlayed > 0 ? (race.firstPlaces + (race.secondPlaces * 0.75) + (race.thirdPlaces * 0.5) + (race.fourthPlaces * 0.25) + (race.fifthPlaces * 0.1) + (race.sixthPlaces * 0.05)) / race.gamesPlayed : 0;

              return (
                <div
                  key={race.id}
                  className="race-tile"
                  onClick={() => openRaceModal(race)}
                >
                  <div className="race-tile-image">
                    <img src={race.image} alt={`Portret rasy ${race.name}`} />
                    <div className="race-tile-overlay">
                      <h3 className="race-tile-name">{race.name}</h3>
                      <span className="race-tile-difficulty">
                        Trudność: {renderDifficultyStars(race.difficulty)}
                      </span>
                      <span className="race-tile-difficulty">
                Power Rating: {formatWinRatio(winRatio)}
              </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* NOWA SEKCJA: Top 3 Rasy */}
        <section ref={topRacesRef} className="section top-races-section">
          <div className="container">
            <h1>Top 3 Rasy</h1>
            <p className="top-races-subtitle">Najlepsze rasy według współczynnika zwycięstw</p>
          </div>

          <div className="container top-races-table">
            <div className="top-races-header">
              <div className="top-race-rank">#</div>
              <div className="top-race-name">Rasa</div>
              <div className="top-race-stats">Wygrane</div>
              <div className="top-race-stats">Rozegrane</div>
              <div className="top-race-ratio">Win Ratio</div>
            </div>

            {topRaces.map((race, index) => (
              <div
                key={race.id}
                className="top-race-row"
                onClick={() => openRaceModal(race)}
              >
                <div className="top-race-rank">
                  <span className={`rank-badge rank-${index + 1}`}>
                    {index + 1}
                  </span>
                </div>
                <div className="top-race-name">
                  <div className="top-race-name-content">
                    <img src={race.image} alt={race.name} className="top-race-image" />
                    <span>{race.name}</span>
                  </div>
                </div>
                <div className="top-race-stats">
                  <span className="stat-value">🥇 {race.firstPlaces}</span>
                </div>
                <div className="top-race-stats">
                  <span className="stat-value">{race.gamesPlayed}</span>
                </div>
                <div className="top-race-ratio">
                  <span className="ratio-value">{formatWinRatio(race.winRatio)}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sekcja Poradniki - NOWA WERSJA */}
        <section ref={guidesRef} className="section">
          <div className="container">
            <h1>Poradniki</h1>
            <p className="guides-subtitle">Strategie i taktyki dla zaawansowanych graczy</p>
          </div>

          <div className="container guides-grid">
            {guidesData.map(guide => (
              <Link
                key={guide.id}
                to={`/guide/${guide.id}/#`}
                className="guide-tile"
              >
                <div className="guide-tile-content">
                  {guide.image && (
                    <div className="guide-tile-image">
                      <img src={guide.image} alt={guide.title} />
                    </div>
                  )}
                  <div className="guide-tile-info">
                    <h3 className="guide-tile-title">{guide.title}</h3>
                    <p className="guide-tile-description">{guide.description}</p>
                    <div className="guide-tile-excerpt">
                      {/*<p>{guide.excerpt}</p>*/}
                    </div>
                    <div className="guide-tile-meta">
                      <div className="guide-tile-author">
                        Autor: {guide.author}
                      </div>
                      <div className="guide-tile-source">
                        Źródło: {guide.sourceName}
                      </div>
                    </div>
                    <div className="guide-tile-cta">
                      <span className="guide-tile-link">Czytaj więcej →</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>

      {/* Modal z szczegółami rasy */}
      {isModalOpen && selectedRace && (
        <div className="modal-overlay" onClick={closeRaceModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeRaceModal}>×</button>

            <div className="modal-race-card">
              {/* Portret rasy w modal */}
              <div className="modal-race-portrait">
                <img src={selectedRace.image} alt={`Portret rasy ${selectedRace.name}`} />
              </div>

              {/* Informacje o rasie w modal */}
              <div className="modal-race-info">
                <div className="modal-race-header">
                  <h2 className="modal-race-name">{selectedRace.name}</h2>
                  <div className="modal-race-stats">
                    <span className="modal-difficulty">
                      Poziom trudności: {renderDifficultyStars(selectedRace.difficulty)}
                    </span>
                    
                  </div>
                </div>

                <p className="modal-race-description">{selectedRace.description}</p>

                <div className="modal-detail-section">
                  <h4>Najważniejsze cechy:</h4>
                  <ol className="modal-features-list">
                    {selectedRace.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ol>
                </div>

                <div className="modal-race-details">
                  <div className="modal-detail-section">
                    <h4>Startowe technologie:</h4>
                    <div className="modal-technologies">
                      {selectedRace.technologies.map((tech, index) => (
                        <span key={index} className="modal-tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>

                  <div className="modal-detail-section">
                    <h4>Startowe surowce:</h4>
                    <div className="modal-resources">
                      <span className="modal-resource orange">🟠 {selectedRace.resources.orange}</span>
                      <span className="modal-resource pink">🟣 {selectedRace.resources.pink}</span>
                      <span className="modal-resource brown">🟤 {selectedRace.resources.brown}</span>
                    </div>
                  </div>
                </div>

                <div className="modal-race-stats-detailed">
                  <div className="modal-stat">
                    <span className="modal-stat-value">{selectedRace.gamesPlayed}</span>
                    <span className="modal-stat-label">Rozegrane gry</span>
                  </div>
                  <div className="modal-stat">
                    <span className="modal-stat-value">🥇 {selectedRace.firstPlaces}</span>
                    <span className="modal-stat-label">Zwycięstwa</span>
                  </div>
                  <div className="modal-stat">
                    <span className="modal-stat-value">🥈 {selectedRace.secondPlaces}</span>
                    <span className="modal-stat-label">Drugie miejsca</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Rules;