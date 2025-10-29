import React, { useState, useRef } from 'react';
import './Rules.css';

const Rules = () => {
  const [selectedRace, setSelectedRace] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expandedGuide, setExpandedGuide] = useState(null); // Zmieniamy na expandedGuide

  // Refs do przewijania sekcji
  const instructionsRef = useRef(null);
  const racesRef = useRef(null);
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

  // Funkcja do przełączania poradników
  const toggleGuide = (guideId) => {
    setExpandedGuide(expandedGuide === guideId ? null : guideId);
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
      difficulty: 2,
      gamesPlayed: 1,
      firstPlaces: 0,
      secondPlaces: 1
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
      gamesPlayed: 2,
      firstPlaces: 2,
      secondPlaces: 0
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
      gamesPlayed: 1,
      firstPlaces: 0,
      secondPlaces: 0
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
      gamesPlayed: 2,
      firstPlaces: 0,
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
      gamesPlayed: 1,
      firstPlaces: 0,
      secondPlaces: 0
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
      gamesPlayed: 2,
      firstPlaces: 0,
      secondPlaces: 0
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
      secondPlaces: 0
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
      secondPlaces: 0
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
      gamesPlayed: 1,
      firstPlaces: 0,
      secondPlaces: 1
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
      secondPlaces: 0
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
      gamesPlayed: 0,
      firstPlaces: 0,
      secondPlaces: 0
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
      secondPlaces: 0
    }
  ];

  // Funkcja do renderowania gwiazdek trudności
  const renderDifficultyStars = (difficulty) => {
    return '★'.repeat(difficulty) + '☆'.repeat(5 - difficulty);
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

        {/* Sekcja Ras */}
        <section ref={racesRef} className="section">
          <div className="container">
            <h1 className="races-title">Rasy</h1>
            <p className="races-subtitle">Kliknij na rasę aby zobaczyć szczegóły</p>
          </div>
          
          <div className="container races-grid">
            {racesData.map(race => (
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
                      {renderDifficultyStars(race.difficulty)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sekcja Poradniki (placeholder) */}
<section ref={guidesRef} className="section">
          <div className="container">
            <h1>Poradniki</h1>
            <p className="guides-subtitle">Strategie i taktyki dla zaawansowanych graczy</p>
          </div>

          <div className="container guides-container">
            {/* Pierwszy poradnik - Jordan Grahm */}
            <div className="guide-wrapper">
              <div className={`guide-header ${expandedGuide === 1 ? 'guide-header--expanded' : ''}`} onClick={() => toggleGuide(1)}>
                <h2 className="guide-title">
                  🚀 Kompleksowy poradnik do gry Eclipse
                  <span className="guide-toggle-icon">
                    {expandedGuide === 1 ? '−' : '+'}
                  </span>
                </h2>
                <div className="guide-meta">
                  <p className="guide-description">
                    Strategie od początku gry do finału - kliknij aby {expandedGuide === 1 ? 'zwinąć' : 'rozwinąć'}
                  </p>
                  <div className="guide-source">
                    <span className="guide-author">Autor: Jordan Grahm</span>
                    <a 
                      href="https://boardgamegeek.com/thread/2264028/general-start-to-finish-guide-to-upping-your-strat" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="guide-source-link"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Źródło: BoardGameGeek
                    </a>
                  </div>
                </div>
              </div>

              <div className={`guide-content-wrapper ${expandedGuide === 1 ? 'guide-content-wrapper--expanded' : ''}`}>
                {expandedGuide === 1 && (
                  <article className="guide-article">
                    <div className="guide-article-header">
                      <div className="guide-credits">
                        <p><strong>Autor:</strong> Jordan Grahm</p>
                        <p>
                          <strong>Źródło:</strong>{' '}
                          <a 
                            href="https://boardgamegeek.com/thread/2264028/general-start-to-finish-guide-to-upping-your-strat" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="guide-source-link"
                          >
                            BoardGameGeek - General start to finish guide to upping your strategy
                          </a>
                        </p>
                      </div>
                    </div>

                    <div className="guide-intro">
                      <p>Wielu graczy nie wie, jak wydostać się z trudnej sytuacji lub brakuje im umiejętności długoterminowego planowania i adaptacji wymaganych do bycia biegłym w Eclipse.</p>
                      <div className="guide-note">
                        <strong>⚠️ Uwaga:</strong> Gracze nie powinni używać standardowych Strażników Galaktyki (GCDS) - są słabo zbalansowane i dają niektórym rasom znaczną przewagę.
                      </div>
                    </div>

                                      <div className="guide-chapters">
                    {/* Rozdział 1 */}
                    <div className="guide-chapter">
                      <h3>🎯 Rozpoczęcie gry</h3>
                      <div className="guide-content">
                        <h4>Pierwsze pytanie strategiczne:</h4>
                        <ul>
                          <li><strong>Agresywnie (PvP)</strong> - atakowanie innych graczy</li>
                          <li><strong>PvE</strong> - tylko walka ze Starożytnymi i GCDS</li>
                          <li><strong>Mieszany</strong> - kombinacja obu strategii</li>
                          <li><strong>Defensywnie</strong> - unikanie konfliktów</li>
                        </ul>

                        <h4>Dla graczy agresywnych:</h4>
                        <ul>
                          <li><strong>Sprawdź dostępne technologie</strong> - czy pozwolą ci ulepszyć statki do walki ze Starożytnymi w rundzie 1-2</li>
                          <li><strong>Nie licz na pojawienie się potrzebnych technologii w rundzie 2!</strong></li>
                          <li><strong>Do PvP</strong> wybierz rasy z 3+ aktywacjami statków (Terranie, Rho Indi)</li>
                          <li><strong>Pancernik</strong> to często najtańszy i najskuteczniejszy sposób na zastraszenie Starożytnych</li>
                        </ul>

                        <h4>Dla graczy defensywnych:</h4>
                        <ul>
                          <li>Wybierz rasy z unikalnymi bonusami niezależnymi od interakcji</li>
                          <li>Przykłady: Świątynie Lyry, podwójna eksploracja Planta/Draco, podwójne badania Hydran</li>
                        </ul>
                      </div>
                    </div>

                    {/* Rozdział 2 */}
                    <div className="guide-chapter">
                      <h3>🔍 Pierwsza runda - eksploracja</h3>
                      <div className="guide-content">
                        <h4>Pierwsza akcja:</h4>
                        <ul>
                          <li><strong>Badania</strong> lub <strong>Eksploracja</strong></li>
                          <li>Priorytet: technologie militarne kluczowe dla twoich planów lub wczesne korzyści ekonomiczne</li>
                          <li>Przykłady: Ulepszony kadłub, Zaawansowana robotyka, Działa plazmowe</li>
                        </ul>

                        <h4>Strategia eksploracji:</h4>
                        <ul>
                          <li><strong>Nie pozwól, by ktoś zeksplorował twój Heks 1!</strong></li>
                          <li>Postaraj się zdobyć część Heksów 3 zanim znikną</li>
                          <li>Atak w rundzie 1 tylko jeśli możesz skolonizować system po zwycięstwie</li>
                        </ul>

                        <h4>Kluczowe umiejętności eksploracji:</h4>
                        <div className="guide-grid">
                          <div className="guide-tip">
                            <h5>Heks 3</h5>
                            <p>Prawie nigdy nie odrzucaj (wyjątki: ule, portale warp, czasem Starożytni)</p>
                          </div>
                          <div className="guide-tip">
                            <h5>Heks 2</h5>
                            <p>Bądź selektywny. Odrzucaj gdy masz za dużo systemów ze Starożytnymi</p>
                          </div>
                          <div className="guide-tip">
                            <h5>Heks 1</h5>
                            <p>Możesz odrzucać częściej, szukając systemów pasujących do strategii</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Rozdział 3 */}
                    <div className="guide-chapter">
                      <h3>⚡ Druga runda - zmiana planów</h3>
                      <div className="guide-content">
                        <h4>Przemyśl strategię na nowo:</h4>
                        <ul>
                          <li>Oceń swoje zasoby, Starożytnych, nowe technologie</li>
                          <li><strong>Dostosuj strategię do tego, co dała ci gra, nie na odwrót</strong></li>
                          <li>Sprawdź czy możesz efektywnie walczyć ze Starożytnymi</li>
                        </ul>

                        <h4>Przykłady zmian strategii:</h4>
                        <ul>
                          <li><strong>Mało materiałów do agresji?</strong> Oszczędzaj na pancernika, ulepszaj statki, lub porzuć plany militarne</li>
                          <li><strong>Złe planety?</strong> Rozważ orbitule i żonglerkę szarymi planetami</li>
                        </ul>

                        <div className="guide-warning">
                          <strong>💡 Ważne:</strong> Nie wydawaj wszystkich zasobów każdej tury! Czasami najlepiej przejść wcześniej, oszczędzając na duże inwestycje.
                        </div>
                      </div>
                    </div>

                    {/* Rozdział 4 */}
                    <div className="guide-chapter">
                      <h3>🎮 Trzecia runda - decyzja na resztę gry</h3>
                      <div className="guide-content">
                        <h4>Plan na środek gry:</h4>
                        <ul>
                          <li>Oceń technologie, miejsca bitew, zasoby, planety, projekty statków</li>
                          <li><strong>Dostosuj się do dostępnych technologii</strong> - w małych grach może ich zabraknąć</li>
                          <li><strong>Bądź ekstremalny w militaryzacji</strong> - albo unikaj, albo inwestuj mocno</li>
                        </ul>

                        <h4>Gospodarka:</h4>
                        <div className="guide-grid">
                          <div className="guide-tip">
                            <h5>Materiały</h5>
                            <p>Pancerniki, zaawansowane górnictwo, lub unikanie militaryzacji</p>
                          </div>
                          <div className="guide-tip">
                            <h5>Nauka</h5>
                            <p>Statki agresywne lub rozwój ekonomii</p>
                          </div>
                          <div className="guide-tip">
                            <h5>Pieniądze</h5>
                            <p>Agresja lub systemy bez planet pieniężnych</p>
                          </div>
                        </div>

                        <div className="guide-note">
                          <strong>🔄 Możesz odzyskać po błędach</strong> - to dopiero 3. runda! Uważaj na pinowanie i zawsze wiedz, jakie statki mogą wejść do twoich hexów.
                        </div>
                      </div>
                    </div>

                    {/* Rozdział 5 */}
                    <div className="guide-chapter">
                      <h3>⚔️ Piąta i szósta runda - początek PvP</h3>
                      <div className="guide-content">
                        <h4>Dynamika gry się zmienia:</h4>
                        <ul>
                          <li>Głównym czynnikiem stają się inni gracze</li>
                          <li>Dostosowuj plany by nie być wrażliwym</li>
                          <li>Oceń potencjał innych graczy</li>
                        </ul>

                        <h4>Obserwacja przeciwników:</h4>
                        <ul>
                          <li><strong>Rho Indi</strong> - nękanie gospodarki, brak pancerników</li>
                          <li><strong>Planta/Hydran</strong> - potrzebują "wybojów" w postaci ataków</li>
                          <li><strong>Szukaj sojuszników</strong> i odpowiedniego momentu na pokój</li>
                        </ul>
                      </div>
                    </div>

                    {/* Rozdział 6 */}
                    <div className="guide-chapter">
                      <h3>🌟 Siódma runda - późna gra</h3>
                      <div className="guide-content">
                        <h4>Ocena pozycji:</h4>
                        <ul>
                          <li>Albo przegrywasz i liczysz na błąd przeciwnika</li>
                          <li>Albo wyglądasz dobrze i dyplomacja staje się kluczowa</li>
                        </ul>

                        <h4>Strategie późnej gry:</h4>
                        <ul>
                          <li>Przejdź od planów "około" do "głównie"</li>
                          <li>Bądź gotowy na zmiany projektów statków</li>
                          <li><strong>Dyplomacja jest kluczowa</strong> - wiedz kiedy NIE zadziała</li>
                          <li>Skup się na: orbitulach, monolitach, kluczach artefaktów</li>
                          <li><strong>Planuj oszczędzanie akcji na rundy 8-9</strong></li>
                        </ul>
                      </div>
                    </div>

                    {/* Rozdział 7 */}
                    <div className="guide-chapter">
                      <h3>🏆 Finał - rundy 8 i 9</h3>
                      <div className="guide-content">
                        <h4>Ósma runda - przygotowanie:</h4>
                        <ul>
                          <li><strong>Przygotuj się na rundę 9</strong></li>
                          <li>Zaplanuj z góry co będziesz mógł kupić</li>
                          <li>Zostaw jak najwięcej akcji na ostatnią rundę</li>
                        </ul>

                        <h4>Dziewiąta runda - finał:</h4>
                        <ul>
                          <li>Gracze którzy planowali z wyprzedzeniem mają przewagę</li>
                          <li>Używaj akcji wpływów by zwalniać dyski z systemów 1VP</li>
                          <li><strong>Wykorzystuj pinowanie maksymalnie</strong></li>
                          <li>Kolonizuj systemy gdzie spodziewasz się przegrać - zwolnią się po walce</li>
                        </ul>
                      </div>
                    </div>

                    {/* Refleksje końcowe */}
                    <div className="guide-conclusion">
                      <h3>💭 Refleksje końcowe</h3>
                      <div className="guide-tips">
                        <div className="guide-tip-card">
                          <h4>🎲 Graj dla przyjemności</h4>
                          <p>Nie zawsze musisz wygrywać, by dobrze się bawić</p>
                        </div>
                        <div className="guide-tip-card">
                          <h4>👥 Wspólna zabawa</h4>
                          <p>Eclipse nie jest fajne bez ludzi do gry - pomóż innym dobrze się bawić</p>
                        </div>
                        <div className="guide-tip-card">
                          <h4>🔥 Twórz chaos</h4>
                          <p>Jeśli twoja grupa jest zbyt pasywna - prowokuj PvP lub znajdź sojuszników</p>
                        </div>
                      </div>
                      <div className="guide-final-note">
                        <strong>Powodzenia w podboju galaktyki! 🚀</strong>
                      </div>
                    </div>
                  </div>
                </article>
                )}
              </div>
            </div>

            {/* Drugi poradnik - Kester 42 */}
            <div className="guide-wrapper">
              <div className={`guide-header ${expandedGuide === 2 ? 'guide-header--expanded' : ''}`} onClick={() => toggleGuide(2)}>
                <h2 className="guide-title">
                  🧠 Zaawansowana strategia Eclipse
                  <span className="guide-toggle-icon">
                    {expandedGuide === 2 ? '−' : '+'}
                  </span>
                </h2>
                <div className="guide-meta">
                  <p className="guide-description">
                    Taktyki i techniki dla doświadczonych graczy - kliknij aby {expandedGuide === 2 ? 'zwinąć' : 'rozwinąć'}
                  </p>
                  <div className="guide-source">
                    <span className="guide-author">Autor: Kester 42</span>
                    <a 
                      href="https://boardgamegeek.com/thread/1163520/advanced-eclipse-strategy" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="guide-source-link"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Źródło: BoardGameGeek
                    </a>
                  </div>
                </div>
              </div>

              <div className={`guide-content-wrapper ${expandedGuide === 2 ? 'guide-content-wrapper--expanded' : ''}`}>
                {expandedGuide === 2 && (
                  <article className="guide-article">
                    <div className="guide-article-header">
                      <div className="guide-credits">
                        <p><strong>Autor:</strong> Kester 42</p>
                        <p>
                          <strong>Źródło:</strong>{' '}
                          <a 
                            href="https://boardgamegeek.com/thread/1163520/advanced-eclipse-strategy" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="guide-source-link"
                          >
                            BoardGameGeek - Advanced Eclipse Strategy
                          </a>
                        </p>
                      </div>
                    </div>

                    <div className="guide-intro">
                      <p>Uwielbiam Eclipse. Ta gra ma interesujące mechaniki i dynamikę, które pasują do specjalnej niszy w mojej grupie graczy. Moim zamiarem przy pisaniu tego jest otwarcie dialogu w celu zbadania zaawansowanych taktyk i strategii dla tej wspaniałej gry.</p>
                      <div className="guide-note">
                        <strong>🎯 Cel:</strong> To nie ma być formuła "zrób dokładnie to aby wygrać", ale raczej eksploracja kluczowych rzeczy, o których należy myśleć, aby podnieść poziom swojej gry.
                      </div>
                    </div>

<div className="guide-chapters">
              {/* Polityka */}
              <div className="guide-chapter">
                <h3>🗳️ Polityka</h3>
                <div className="guide-content">
                  <p>Eclipse to gra w dużym stopniu zależna od polityki. Charakter gry zachęca do rozmów przy stole, nieformalnych sojuszy i strategicznej manipulacji werbalnej przeciwników.</p>
                  <ul>
                    <li>Często możesz wpływać na działania przeciwnika, wskazując mu korzystny manewr lub zagrożenie ze strony innego przeciwnika</li>
                    <li>Uwaga: nie daj się oznaczyć jako "ringier" w swojej grupie, bo przeciwnicy będą się często na ciebie rzucać</li>
                  </ul>
                  <div className="guide-tip">
                    <h5>Wskazówki dla ras:</h5>
                    <p><strong>Hydranie</strong> chcą być pozostawieni w spokoju we wczesnej grze. <strong>Mechanema</strong> to najlepsza rasa do gry w odpowiedzi na częste ataki grupy.</p>
                  </div>
                </div>
              </div>

              {/* Wczesna eksploracja */}
              <div className="guide-chapter">
                <h3>🔍 Wczesna eksploracja</h3>
                <div className="guide-content">
                  <p>Wczesne rundy Eclipse są w dużej mierze poświęcone eksploracji hexów. Oto kluczowe zasady:</p>
                  
                  <div className="guide-grid">
                    <div className="guide-tip">
                      <h5>1. Sojusze</h5>
                      <p>W grach 4+ graczy, łączenie się z sąsiadami jest bardzo korzystne dla dodatkowej produkcji</p>
                    </div>
                    <div className="guide-tip">
                      <h5>2. Ring 1</h5>
                      <p>Nigdy nie pozwól komuś umieścić twojego Hexa Pierścienia 1 podłączonego do centrum</p>
                    </div>
                    <div className="guide-tip">
                      <h5>3. Ring 3</h5>
                      <p>Hexy Pierścienia 3 są ograniczone - nie pozwól wszystkim je zabrać</p>
                    </div>
                  </div>

                  <div className="guide-warning">
                    <strong>⚠️ Ważne:</strong> Nie rozszerzaj się niepotrzebnie - akcje stają się bardzo drogie. Ostatnie hexy Pierścienia 2 mogą poczekać w mniejszych grach.
                  </div>
                </div>
              </div>

              {/* Wirtualne floty */}
              <div className="guide-chapter">
                <h3>⚡ Wirtualne floty</h3>
                <div className="guide-content">
                  <p>W pozycji obronnej może być niezwykle cenne maksymalizowanie efektywności akcji poprzez czekanie jak najdłużej z budową statków.</p>
                  <ul>
                    <li>Dopóki masz wystarczające materiały, możesz wywierać presję "wirtualnej floty"</li>
                    <li>Szczególnie pomocne dla baz gwiezdnych, ponieważ nie mogą się poruszać</li>
                    <li>Uwaga: wirtualne floty nie pomagają w pinowaniu</li>
                  </ul>
                </div>
              </div>

              {/* Akcje atakującego */}
              <div className="guide-chapter">
                <h3>⚔️ Akcje atakującego</h3>
                <div className="guide-content">
                  <p>Atakujący ma wyraźną wadę w akcjach. Zajmuje stosunkowo dużo akcji, aby zbudować i przesunąć statki na terytorium wroga.</p>
                  <ul>
                    <li>Atakuj jak najpóźniej w rundzie, idealnie po tym jak obrońca spasował</li>
                    <li>Trzymaj plany w tajemnicy</li>
                    <li>Czasami czekanie pozwala obrońcy stworzyć lepszą pozycję do pinowania</li>
                  </ul>
                  <div className="guide-note">
                    <strong>Eridani:</strong> Skutecznie okaleczeni z dwoma dyskami akcji usuniętymi - zalecani tylko dla zaawansowanych graczy.
                  </div>
                </div>
              </div>

              {/* Pinowanie statków */}
              <div className="guide-chapter">
                <h3>📌 Pinowanie statków</h3>
                <div className="guide-content">
                  <p>Ta technika może oddzielić świetnych graczy od dobrych. Podstawowe strategie pinowania:</p>
                  <ul>
                    <li>Zasypuj swoje terytorium tańszymi statkami lub bazami gwiezdnymi</li>
                    <li>Zaawansowani gracze agresywnie pinują statki wroga na ICH terytorium</li>
                    <li>Używaj poświęcających się myśliwców do pinowania pancerników</li>
                    <li>Ataki samobójcze mogą być korzystne dla zdobycia żetonów reputacji</li>
                  </ul>
                  <div className="guide-tip">
                    <h5>Protip:</h5>
                    <p>Statki używane wyłącznie do pinowania mogą być ulepszane pancerzami zamiast broni, aby lepiej przetrwać odwrót.</p>
                  </div>
                </div>
              </div>

              {/* Kontra plazmowe rakiety */}
              <div className="guide-chapter">
                <h3>🛡️ Kontra plazmowe rakiety</h3>
                <div className="guide-content">
                  <p>Build oparty wyłącznie na rakietach plazmowych wydaje się złamany początkującym graczom. Oto jak go kontrować:</p>
                  <ul>
                    <li><strong>Podstawowy kontr:</strong> Ulepszone kadłuby i fazowe tarcze z jednym działem</li>
                    <li><strong>Alternatywa:</strong> Pinuj statki rakietowe i najedź na terytorium atakującego</li>
                    <li>Unikaj pozwalania graczowi rakietowemu gromadzić masywne liczby statków</li>
                  </ul>
                  <div className="guide-note">
                    <strong>Pamiętaj:</strong> Rakiety nie niszczą punktów zwycięstwa zdobytych przez żetony odkryć, reputacji lub technologie.
                  </div>
                </div>
              </div>

              {/* Technologia */}
              <div className="guide-chapter">
                <h3>🔬 Technologia - ranking</h3>
                <div className="guide-content">
                  <p>Nie wszystkie technologie są równe. Oto proponowany podział na tiery:</p>
                  
                  <div className="guide-tech-tier">
                    <h5>🏆 Ekstremalnie cenne (auto-kup w większości sytuacji):</h5>
                    <ul>
                      <li>Ulepszony kadłub</li>
                      <li>Zaawansowana robotyka</li>
                      <li>Bomby neutronowe</li>
                    </ul>
                  </div>

                  <div className="guide-tech-tier">
                    <h5>⭐ Bardzo dobre (pomocne w większości gier):</h5>
                    <ul>
                      <li>Rakieta plazmowa</li>
                      <li>Zaawansowana ekonomia</li>
                      <li>Źródło fuzji</li>
                      <li>Komputer pozytronowy</li>
                      <li>Siatka kwantowa</li>
                      <li>Napęd fuzji</li>
                    </ul>
                  </div>

                  <div className="guide-tech-tier">
                    <h5>⚠️ Słabe lub wysoce sytuacyjne (powinny być rzadko badane):</h5>
                    <ul>
                      <li>Działo antymaterii</li>
                      <li>Orbitale</li>
                      <li>Napęd tachionowy</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Manewr Draco */}
              <div className="guide-chapter">
                <h3>🎯 Manewr Draco</h3>
                <div className="guide-content">
                  <p>Zasady pozwalają na wpływanie na hex przylegający do hexa zawierającego spięty statek. Prowadzi to do interesującego manewru najlepiej wykorzystywanego przez rasę Draco:</p>
                  <ol>
                    <li>Przeciwnik eksploruje swój hex Pierścienia 1, znajduje starożytnych i nie atakuje w tej rundzie</li>
                    <li>Gracz Draco przesuwa myśliwiec do centrum galaktyki, gdzie jest spięty</li>
                    <li>Gracz Draco używa akcji wpływu, aby umieścić dysk wpływu na hexie Pierścienia 1 przeciwnika</li>
                  </ol>
                  <div className="guide-warning">
                    <strong>Uwaga:</strong> Ten manewr będzie postrzegany jako bardzo agresywna gra i może wywołać reakcję innych graczy.
                  </div>
                </div>
              </div>

              {/* Finałowe manewry */}
              <div className="guide-chapter">
                <h3>🏁 Finałowe manewry</h3>
                <div className="guide-content">
                  <p>W ostatnich 1-2 rundach skupienie przesuwa się całkowicie na zdobywanie natychmiastowych punktów zwycięstwa.</p>
                  <ul>
                    <li>Każda akcja statku powinna być podjęta w celu zdobycia lub uniknięcia utraty punktów</li>
                    <li>Ostateczne akcje stają się bardzo cenne</li>
                    <li>Wszystkie pozostałe materiały, pieniądze i nauka powinny być wydane na punkty zwycięstwa</li>
                  </ul>
                  <div className="guide-grid">
                    <div className="guide-tip">
                      <h5>Mechanema</h5>
                      <p>Mogą zamienić wirtualną flotę w druzgocącą budowę czterech monolitów jedną akcją</p>
                    </div>
                    <div className="guide-tip">
                      <h5>Hydranie</h5>
                      <p>Często badają, aby wypełnić swoją ścieżkę technologiczną i mogą zrobić niespodziewaną budowlę monolitów</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="guide-conclusion">
              <h3>🎲 Powodzenia!</h3>
              <p>Proszę, podziel się swoimi kluczowymi strategiami/taktykami i przemyśleniami.</p>
            </div>
          </article>
                )}
              </div>
            </div>
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