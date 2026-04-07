import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { racesData } from '../data/racesData.js';
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
      id: 9,
      title: "Wybór rasy - praktyczny przewodnik",
      description: "Opis mocnych i słabych stron z każdej z ras",
      author: "Paweł",
      source: "https://eclipsegalaxy.netlify.app",
      sourceName: "Eclipse Galaxy",
      difficulty: 2,
      content: "full",
      image: "/images/raceguide.webp",
      excerpt: ""
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
    },
    {
      id: 7,
      title: "Otoczeni przez Starożytnych – przewodnik strategiczny",
      description: "Jak zamienić pozornie złą sytuację w zwycięstwo",
      author: "Chris T.",
      source: "https://boardgamegeek.com/thread/1527958/surrounded-by-ancients-a-strategy-guide",
      sourceName: "BoardGameGeek",
      difficulty: 3,
      content: "full",
      image: "/images/alien.png", // Możesz dodać odpowiedni obrazek
      excerpt: "Jednym z najczęstszych pytań i skarg jakie słyszę o Eclipse jest 'Totalnie zniszczył mnie losowy dobór, bo dostałem same Starożytnych.' Ten poradnik pokazuje, jak zamienić tę pozornie złą sytuację w jedną z najsilniejszych pozycji startowych w grze."
    },
    {
      id: 8,
      title: "Krzywa uczenia się w Eclipse",
      description: "Etapy rozwoju umiejętności od nowicjusza do eksperta",
      author: "Chris T.",
      source: "https://boardgamegeek.com/thread/2614358/the-learning-curve-in-eclipse",
      sourceName: "BoardGameGeek",
      difficulty: 2,
      content: "full",
      image: "/images/learn.png",
      excerpt: "Z czasem towarzyszyłem wielu graczom w ich krzywych uczenia się w Eclipse. Ten poradnik pokazuje typowe etapy rozwoju umiejętności - od pierwszej gry przez wczesne nieporozumienia, aż do zaawansowanych strategii i mistrzostwa w grze."
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

        {/* NOWA SEKCJA: Przyciski nawigacyjne */}
        <section className="navigation-section">
          <div className="container">
            <h1>Zasady i Poradniki Eclipse</h1>
            <p className="navigation-subtitle">Szybki dostęp do wszystkich sekcji</p>
            <div className="navigation-buttons">
              <button
                className="button"
                onClick={() => scrollToSection(instructionsRef)}
              >
                Instrukcje
              </button>

              <button
                className="button"
                onClick={() => scrollToSection(racesRef)}
              >
                Opis Ras
              </button>

              <button
                className="button"
                onClick={() => scrollToSection(guidesRef)}
              >
                Poradniki
              </button>
            </div>
          </div>
        </section>

        {/* Sekcja Instrukcji */}
        <section ref={instructionsRef} className="section">
          <div className="container">
            <h1>Instrukcje</h1>
          </div>
          <div className="container grid">
            <div>
              <h2>Eclipse</h2>
              <a href="/images/Eclipse.pdf" className='rule' target="_blank" rel="noopener noreferrer">
                <img src="/images/eclipse.jpg" loading="lazy" alt="Instrukcja Eclipse" />
              </a>
            </div>
            <div>
              <h2>Rise of the Ancients</h2>
              <a href='/images/eclipse_rota.pdf' className='rule' target="_blank" rel="noopener noreferrer">
                <img src='/images/eclipse_rota.jpg' loading="lazy" alt="Instrukcja Eclipse ROTA" />
              </a>
            </div>
            <div>
              <h2>Shadow of the Rift</h2>
              <a href='/images/eclipse_sotr.pdf' className='rule' target="_blank" rel="noopener noreferrer">
                <img src='/images/eclipse_sotr.jpg' loading="lazy" alt="Instrukcja Eclipse SOTR" />
              </a>
            </div>
          </div>
        </section>

        {/*Sekcja Ras*/}
        <section ref={racesRef} className="section">
          <div className="container">
            <h1 className="races-title">Rasy</h1>
            <p className="races-subtitle">Kliknij na rasę aby zobaczyć szczegóły</p>
            <p className="race-info"><strong>Objaśnienia:</strong><br></br>
              <b>Trudność</b> - oznacza poziom skomplikowania rasy, im wyższa ilość gwiazdek, tym dla bardziej doświadczonego gracza jest przeznaczona rasa.<br></br>
              <b>Power Rating</b> - oznacza szacunkową siłę rasy, wyliczoną na podstawię średniej ważonej zajętych miejsc. Nie jest to wskaźnik arbitralny, bardziej jako ciekawoska. Szczególnie, że jest spora dysproporcja w ilości rozegranych partii przez każdą z ras, np. Hydranie pojawiali się już 6 razy, Syndykat czy Wygnańcy tylko 1 raz.</p>
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
                    <img src={race.image} loading="lazy" alt={`Portret rasy ${race.name}`} />
                    <div className="race-tile-overlay">
                      <h3 className="race-tile-name">{race.name}</h3>
                      <span className="race-tile-difficulty">
                        Trudność: {renderDifficultyStars(race.difficulty)}
                      </span>
                      <span className="race-tile-difficulty1">
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
                    <img src={race.image} loading="lazy" alt={race.name} className="top-race-image" />
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
                      <img src={guide.image} loading="lazy" alt={guide.title} />
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
                      <span className="button">Czytaj więcej</span>
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
                <img src={selectedRace.image} loading="lazy" alt={`Portret rasy ${selectedRace.name}`} />
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
                      {selectedRace.id === 14 ? (
                        <span className="modal-resource white">
                          ⚪ {selectedRace.resources.trnsm}
                        </span>
                      ) : selectedRace.id === 12 ? (
                        <>
                          <span className="modal-resource orange">
                            🟠 {selectedRace.resources.orange}
                          </span>
                          <span className="modal-resource pink">
                            🟣 {selectedRace.resources.pink}
                          </span>
                          <span className="modal-resource brown">
                            🟤 {selectedRace.resources.brown}
                          </span>
                          <span className="modal-resource green">
                            🟢 {selectedRace.resources.mutagen}
                          </span>
                        </>
                      ) : (
                        <>
                          <span className="modal-resource orange">
                            🟠 {selectedRace.resources.orange}
                          </span>
                          <span className="modal-resource pink">
                            🟣 {selectedRace.resources.pink}
                          </span>
                          <span className="modal-resource brown">
                            🟤 {selectedRace.resources.brown}
                          </span>
                        </>
                      )}
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