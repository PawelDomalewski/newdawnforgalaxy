import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './GuidePage.css';

const GuidePage = () => {
  const { guideId } = useParams();

  React.useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Funkcja do renderowania gwiazdek trudności
  const renderDifficultyStars = (difficulty) => {
    return '★'.repeat(difficulty) + '☆'.repeat(5 - difficulty);
  };

  // Dane poradników
  const guidesData = {
    '1': {
      id: 1,
      title: "Kompleksowy poradnik do gry Eclipse",
      description: "Strategie od początku gry do finału",
      author: "Jordan Grahm",
      source: "https://boardgamegeek.com/thread/2264028/general-start-to-finish-guide-to-upping-your-strat",
      sourceName: "BoardGameGeek",
      difficulty: 2,
      image: "/images/pic1974056.jpg"
    },
    '2': {
      id: 2,
      title: "Zaawansowana strategia Eclipse",
      description: "Taktyki i techniki dla doświadczonych graczy",
      author: "Kester 42",
      source: "https://boardgamegeek.com/thread/1163520/advanced-eclipse-strategy",
      sourceName: "BoardGameGeek",
      difficulty: 4,
      image: "/images/strategy.jpg"
    },
    '3': {
      id: 3,
      title: "Podstawy militarne w grze Eclipse",
      description: "Podstawy walki i strategii militarnej",
      author: "Peter O.",
      source: "https://boardgamegeek.com/thread/750430/an-eclipse-military-primer",
      sourceName: "BoardGameGeek",
      difficulty: 3,
      image: "/images/military.jpg"
    },
    '4': {
      id: 4,
      title: "Podstawy skutecznej ekonomii w Eclipse",
      description: "Strategiczne podejście do kolonizacji i gospodarki",
      author: "Peter O.",
      source: "https://boardgamegeek.com/thread/760874/an-eclipse-economic-primer",
      sourceName: "BoardGameGeek",
      difficulty: 3,
      image: "/images/economy.jpg"
    },
    '5': {
      id: 5,
      title: "Sekrety eksploracji galaktyki Eclipse",
      description: "Strategiczne podejście do odkrywania hexów",
      author: "Peter O.",
      source: "https://boardgamegeek.com/thread/804274/an-eclipse-exploration-primer",
      sourceName: "BoardGameGeek",
      difficulty: 2,
      content: "full",
      image: "/images/explore.jpg",
      excerpt: "Eksploracja jest fundamentalnym aspektem Eclipse - nie można wygrać gry tylko przez nią, ale na pewno można przez nią przegrać. Poznaj tajniki efektywnego odkrywania hexów, orientowania ich i podejmowania decyzji które z nich zachować, a które odrzucić."
    },
    '6': {
      id: 6,
      title: "Strategie technologiczne dla ras",
      description: "Optymalne ścieżki rozwoju technologicznego",
      author: "Dymond Kyng",
      source: "https://boardgamegeek.com/thread/1361979/general-tech-strategy-by-race",
      sourceName: "BoardGameGeek",
      difficulty: 3,
      content: "full",
      image: "/images/tech.jpg",
      excerpt: "Po ponad 50 rozgrywkach i doświadczeniu turniejowym, poznaj optymalne ścieżki technologiczne dla każdej rasy w Eclipse. Dowiedz się które rzędy technologii są najlepsze dla twojej rasy i jak maksymalizować korzyści z rabatów naukowych."
    }
  };

  const guide = guidesData[guideId];

  if (!guide) {
    return (
      <div className="guide-page">
        <div className="container">
          <h1>Poradnik nie znaleziony</h1>
          <p>Przepraszamy, ale żądany poradnik nie istnieje. ID: {guideId}</p>
          <Link to="/zasady-poradnik" className="back-button">← Powrót do poradników</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="guide-page">
      <div className="container">
        <Link to="/zasady-poradnik" className="back-button">← Powrót do poradników</Link>

        <article className="guide-full-article">
          <header className="guide-header" idName="#" style={{
            background: guide.image
              ? `linear-gradient(135deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.45) 100%), url(${guide.image}) top/cover`
              : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
          }}>
            <h1 className="guide-title">{guide.title}</h1>
            <p className="guide-description">{guide.description}</p>

            <div className="guide-meta">
              <div className="guide-meta-info">
                <span className="guide-author"><strong>Autor:</strong> {guide.author}</span>
                <a
                  href={guide.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="guide-source-link"
                >
                  <strong>Źródło:</strong> {guide.sourceName}
                </a>
              </div>
            </div>
          </header>

          <div className="guide-content">
            {renderGuideContent(guideId)}
          </div>

          <footer className="guide-footer">
            <Link to="/zasady-poradnik" className="back-button">← Powrót do poradników</Link>
          </footer>
        </article>
      </div>
    </div>
  );
};

// Funkcja do renderowania zawartości poradnika
const renderGuideContent = (guideId) => {
  console.log('Rendering guide content for ID:', guideId); // Debug

  switch (guideId) {
    case '1':
      return <Guide1Content />;
    case '2':
      return <Guide2Content />;
    case '3':
      return <Guide3Content />;
    case '4':
      return <Guide4Content />;
    case '5':
      return <Guide5Content />;
    case '6':
      return <Guide6Content />;
    default:
      return <div>Brak treści dla poradnika o ID: {guideId}</div>;
  }
};


// PORADNIK 1: Kompleksowy poradnik do gry Eclipse
const Guide1Content = () => {
  return (
    <div className="guide-article">
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
          <strong>⚠️ Uwaga:</strong> Gracze nie powinni używać standardowych Strażników Galaktyki (GCDS) - są słabo zbalansowani i dają niektórym rasom znaczną przewagę.
        </div>
      </div>

      <div className="guide-chapters">
        {/* Rozdział 1 */}
        <div className="guide-chapter">
          <h3>Rozpoczęcie gry</h3>
          <div className="guide-content">
            <h4>Pierwsze pytanie strategiczne, jak chcemy grać:</h4>
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
          <h3>Pierwsza runda - eksploracja</h3>
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
          <h3>Druga runda - zmiana planów</h3>
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
              <li>Głównym czynnikiem stają się inni graczy</li>
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
    </div>
  );
};

// PORADNIK 2: Zaawansowana strategia Eclipse
const Guide2Content = () => {
  return (
    <div className="guide-article">
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
    </div>
  );
};

// PORADNIK 3: Podstawy militarne w Eclipse
const Guide3Content = () => {
  return (
    <div className="guide-article">
      <div className="guide-article-header">
        <div className="guide-credits">
          <p><strong>Autor:</strong> Peter O.</p>
          <p>
            <strong>Źródło:</strong>{' '}
            <a
              href="https://boardgamegeek.com/thread/750430/an-eclipse-military-primer"
              target="_blank"
              rel="noopener noreferrer"
              className="guide-source-link"
            >
              BoardGameGeek - An Eclipse Military Primer
            </a>
          </p>
        </div>
      </div>

      <div className="guide-intro">
        <p>To jest mój podstawowy sposób walki. Nie jestem ekspertem od Eclipse, ale radzę sobie wystarczająco dobrze w mojej grupie graczy, plus mam spore doświadczenie w innych grach bitewnych, aby zaoferować to, co poniżej. To w żaden sposób nie jest ostateczne ani koniecznie najlepsze. Istnieje wiele stylów walki i czasami mogą one rozwijać interakcje typu "kamień-papier-nożyce". To jest mój główny sposób i opiera się na podstawowej doktrynie wojny manewrowej.</p>
        <div className="guide-note">
          <strong>⚠️ Uwaga:</strong> To nie jest definitywny przewodnik - istnieje wiele stylów walki, a ten jest tylko jednym z podejść.
        </div>
      </div>

      <div className="guide-chapters">
        {/* Dlaczego warto walczyć? */}
        <div className="guide-chapter">
          <h3>🎯 Dlaczego warto walczyć?</h3>
          <div className="guide-content">
            <p>Walka może przynieść wiele korzyści strategicznych:</p>

            <div className="guide-grid">
              <div className="guide-tip">
                <h5>A) Kontra turtling</h5>
                <p>Jeśli przeciwnicy budują Monolity, a ty nie, najlepiej zmusić ich do wydawania zasobów na coś innego niż struktury za 3VP</p>
              </div>
              <div className="guide-tip">
                <h5>B) Żetony Przeznaczenia</h5>
                <p>Więcej walk poprawia twoje szanse na Przeznaczenie. Średnio zdobywam 12 punktów z żetonów Przeznaczenia przy umiarkowanej walce</p>
              </div>
              <div className="guide-tip">
                <h5>C) Przełomowe punkty</h5>
                <p>Zajęcie pojedynczego hexa za 3 VP od właściwej osoby może dać przewagę 6 VP potrzebną do wygrania</p>
              </div>
            </div>

            <div className="guide-grid">
              <div className="guide-tip">
                <h5>D) Centrum Galaktyki</h5>
                <p>Zajęcie centrum galaktyki to duże punkty, nawet jeśli nie dotarłeś tam pierwszy</p>
              </div>
              <div className="guide-tip">
                <h5>E) Bycie proaktywnym</h5>
                <p>Możesz być proaktywny zamiast reaktywny. Zazwyczaj radzisz sobie lepiej, gdy bardziej się bawisz</p>
              </div>
            </div>
          </div>
        </div>

        {/* Z kim się uczyć walczyć? */}
        <div className="guide-chapter">
          <h3>🎓 Z kim się uczyć walczyć?</h3>
          <div className="guide-content">
            <p><strong>Nie z Orionami ani nawet Eridani. Mechanema to najlepsza rasa do nauki walki.</strong></p>

            <ul>
              <li>Tańsze koszty budowy prowadzą do mniejszej troski o konkretne wyniki bitew</li>
              <li>Wysłanie 2 myśliwców to tylko 4 zasoby i kilka akcji - żaden wielki problem</li>
              <li>Pozwalają na wojnę na wyczerpanie, która wydaje się łatwiejsza do nauki dla wielu osób</li>
              <li>Jednak nie zostawaj tylko przy wojnie na wyczerpanie - nauka wojny manewrowej bardzo ci pomoże</li>
            </ul>

            <div className="guide-warning">
              <strong>⚠️ Uwaga:</strong> Uważaj, aby nie stać się zbyt zależnym od kosztów budowy Mechanemy. Idealnie używasz ich, aby lepiej zrozumieć szanse i taktyki walki.
            </div>
          </div>
        </div>

        {/* Jak walczyć? */}
        <div className="guide-chapter">
          <h3>⚔️ Jak walczyć? - 9 Zasad</h3>
          <div className="guide-content">

            {/* Zasada 1 */}
            <div className="guide-principle">
              <h4>1) Rozmawiaj z ludźmi 🗣️</h4>
              <p>Ludzie widzą pojedynczy mechanik dyplomacji w grze i wydaje im się, że to cała dyplomacja. To bardzo, bardzo błędne.</p>
              <ul>
                <li>Ustawienie ataku na inną osobę dyplomatycznie może okazać się bardziej wartościowe niż atak z zaskoczenia</li>
                <li>Ogłoszenie zamiaru ataku na gracza w "przewodzie" może zapewnić ci wystarczającą osłonę</li>
                <li>Gry takie jak Eclipse idą do ludzi, którzy potrafią najlepiej przekonać innych graczy o "prawdziwym" stanie rzeczy</li>
              </ul>
            </div>

            {/* Zasada 2 */}
            <div className="guide-principle">
              <h4>2) Nie pozwól tworzyć się wąskim gardłom 🗺️</h4>
              <p>Dobrze połączona mapa faworyzuje ludzi, którzy znają wojnę manewrową.</p>
              <ul>
                <li>Zwiąż się z sąsiadami - im więcej połączeń, tym lepiej</li>
                <li>ALE nie rozprzestrzeniaj się zbyt mocno</li>
                <li>W obronie dobre (krótkie) wewnętrzne linie komunikacji oznaczają, że możesz szybko i łatwo skierować siły na potrzebną pozycję</li>
              </ul>
            </div>

            {/* Zasada 3 */}
            <div className="guide-principle">
              <h4>3) Zbuduj ekonomię pieniężną lub rezerwę 💰</h4>
              <p>Zasoby są potrzebne do stworzenia floty, ale pieniądze są wymagane do akcji budowy, ruchu i ulepszeń.</p>
              <ul>
                <li>Twoje szanse poprawiają się, jeśli możesz przewyższyć przeciwnika akcjami w krytycznej turze</li>
                <li>Nawet sama MOŻLIWOŚĆ przewyższenia ich może spowodować, że "nie będą zawracać sobie głowy marnowaniem akcji"</li>
              </ul>
            </div>

            {/* Zasada 4 */}
            <div className="guide-principle">
              <h4>4) Wybieraj technologie pasujące do twojej ekonomii 🔬</h4>
              <ul>
                <li><strong>Silniki</strong> są świetne dla ras bez przewagi pieniężnej</li>
                <li><strong>Dobry napęd</strong> pozwala zagrażać i bronić więcej przestrzeni na akcję</li>
                <li><strong>Nanoboty</strong> są dobre dla ras z przewagą materiałową</li>
                <li>Wybieraj technologie, które współgrają z tym, co już masz</li>
              </ul>
            </div>

            {/* Zasada 5 */}
            <div className="guide-principle">
              <h4>5) Wybieraj klasę statku pasującą do twojej rasy i ekonomy 🚀</h4>
              <ul>
                <li><strong>Terranie</strong> dostają trzy ruchy na akcję ruchu - buduj liczniejszą flotę</li>
                <li><strong>Obcy</strong> powinni skłaniać się ku pancernikom i krążownikom</li>
                <li><strong>Mechanema</strong> produkuje hordy myśliwców</li>
                <li>Trzymaj się dwóch, maksymalnie trzech klas</li>
                <li>Jeśli masz w pełni ulepszone wszystkie 4 klasy statków do końca gry, zmarnowałeś akcje</li>
              </ul>
            </div>

            {/* Zasada 6 */}
            <div className="guide-principle">
              <h4>6) Zacznij wystarczająco wcześnie ⏰</h4>
              <p>Masz tylko około 6 tur relevantnego czasu walki. Czekanie do tury 9 bardzo pomaga żółwiom.</p>
            </div>

            {/* Zasada 7 */}
            <div className="guide-principle">
              <h4>7) Sonduj 🎯</h4>
              <p>Nie bój się celowo stracić kilku myśliwców, aby zbadać przeciwnika.</p>
              <ul>
                <li>Pomaga to dowiedzieć się, jak planują się bronić</li>
                <li>Szczególnie przydatne przeciwko "Wirtualnym Siłom" - jeśli polegają na tym i nie zostawiają wystarczającego pierścienia straży</li>
                <li>Wyślij kilka myśliwców przez ich przestrzeń na drugą stronę - wszelkie obrony, które zbudują, będą z dala od twojej granicy</li>
              </ul>
            </div>

            {/* Zasada 8 */}
            <div className="guide-principle">
              <h4>8) W turze planowanego dużego ataku, prowadź kolejnym sondowaniem 🎪</h4>
              <ul>
                <li>Zmuś ich do obrony wszędzie, a przez to nie będą bronić nigdzie</li>
                <li>Rozprosz ich siły najlepiej jak potrafisz zgodnie z mapą</li>
                <li>Jeśli masw rezerwę pieniężną, możesz zaatakować późno siłami głównymi, stawiając ich w trudnej sytuacji</li>
              </ul>
            </div>

            {/* Zasada 9 */}
            <div className="guide-principle">
              <h4>9) Dziel i rządź 🏹</h4>
              <p>Sondowanie i poruszanie ma na celu podzielenie lepszej siły na mniejsze, pokonalne kawałki.</p>
              <ul>
                <li>Wybierz największy kawałek, na jaki możesz sobie pozwolić, i idź na całego</li>
                <li>Hex jest często nieistotny w porównaniu ze zniszczeniem floty</li>
                <li>Gdy flota zniknie, systemy są twoje do wzięcia</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Zakończenie */}
        <div className="guide-chapter">
          <h3>🎲 Podsumowanie</h3>
          <div className="guide-content">
            <div className="guide-final-tip">
              <h4>Pamiętaj:</h4>
              <p>Poprawisz się tylko próbując, a najlepszy sposób na próbowanie to nie martwienie się porażką. Graj, przegrywaj, ucz się, wygrywaj.</p>
            </div>

            <div className="guide-tips-grid">
              <div className="guide-tip-card">
                <h5>🎯 Praktyka</h5>
                <p>Nie bój się eksperymentować z różnymi taktykami</p>
              </div>
              <div className="guide-tip-card">
                <h5>📚 Nauka</h5>
                <p>Każda przegrana to lekcja na przyszłość</p>
              </div>
              <div className="guide-tip-card">
                <h5>⚡ Adaptacja</h5>
                <p>Dostosowuj strategię do sytuacji na planszy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// PORADNIK 4: Podstawy ekonomii w Eclipse
const Guide4Content = () => {
  return (
    <div className="guide-article">
      <div className="guide-article-header">
        <div className="guide-credits">
          <p><strong>Autor:</strong> Peter O.</p>
          <p>
            <strong>Źródło:</strong>{' '}
            <a
              href="https://boardgamegeek.com/thread/760874/an-eclipse-economic-primer"
              target="_blank"
              rel="noopener noreferrer"
              className="guide-source-link"
            >
              BoardGameGeek - An Eclipse Exploration Primer
            </a>
          </p>
        </div>
      </div>

      <div className="guide-intro">
        <p>W niezliczonych wątkach ludzie dyskutują o tym, że nie wszystkie heksy są dobre, a potem pojawiają się komentarze, że są w porządku i wymagają po prostu innych strategii. Rzadko rozmawiamy o takich strategiach, a po części dlatego, że jest to coś więcej niż tylko heksy, jest to powiązane z całym systemem ekonomicznym.</p>
        <div className="guide-note">
          <strong>🎯 Kluczowa zasada:</strong> Ekspansja twojego imperium może być dla ciebie zła - wiele gier planszowych uczy nas zdobywać jak najwięcej terytorium, ale w Eclipse to nie zawsze się opłaca.
        </div>
      </div>

      <div className="guide-chapters">
        <div className="guide-chapter">
          <h3>🐒 Nie bądź małpą!</h3>
          <div className="guide-content">
            <p>Krótka dygresja zanim przejdziemy dalej. Istnieje genialna mała pułapka na łapanie małp. Składa się z ciężkiego drewnianego pudełka z otworem wystarczająco dużym, aby małpa mogła włożyć rękę. W środku jest banan. Kiedy małpa bada i chwyta banana, nie może go wyjąć (banan nie mieści się przez otwór trzymany w łapie małpy). Małpa jednak nie wypuszcza banana i zostaje złapana. Nie bądź małpą!</p>

            <p>System ekonomiczny, pomimo swojej "euronowości", nie jest tak prosty, jak wygląda, głównie dlatego, że koszty dysków wpływów rosną w nieco szybszym tempie niż produkcja kostek pieniędzy. Przejście z 3 na 4, 10 na 12 i 21 na 24 na ścieżce pieniędzy nie generuje pełnej dodatkowej akcji, dając tylko część akcji. Oznacza to, że umieszczenie dysku wpływów na heksie, aby zyskać pojedynczą kostkę pieniędzy, jest zasadniczo stratą netto.</p>
          </div>
        </div>

        <div className="guide-chapter">
          <h3>💰 Jak wygląda zwycięska ekonomia?</h3>
          <div className="guide-content">
            <p>Wygrywałem lub prawie wygrywałem wystarczająco często, aby wiedzieć, jak wygląda konkurencyjna ekonomia. Jest mocno nastawiona na pieniądze z pewną mieszanką materiałów i badań. Poniższe liczby to przybliżony przykład:</p>

            <div className="guide-grid">
              <div className="guide-tip">
                <h5>Użyteczne dyski wpływów</h5>
                <p>5-7 (bez potrzeby sięgania do rezerw)</p>
              </div>
              <div className="guide-tip">
                <h5>Ścieżka pieniędzy</h5>
                <p>na 21 (lub wyżej)</p>
              </div>
              <div className="guide-tip">
                <h5>Ścieżka badań</h5>
                <p>na 10 (lub wyżej)</p>
              </div>
              <div className="guide-tip">
                <h5>Ścieżka materiałów</h5>
                <p>na 10 (lub wyżej)</p>
              </div>
            </div>

            <p>Weźmy niskie liczby (5,21,10,10) i zobaczmy, co to oznacza w heksach i planetach:</p>
            <ul>
              <li><strong>Dyski wpływów:</strong> Ścieżka pieniędzy 21 oznacza 11 dysków bez technologii specjalnych. Przy 5 akcjach zostaje nam imperium z 6 heksów</li>
              <li><strong>Ścieżka pieniędzy:</strong> 21 pieniędzy osiąga się z 9 kostek na planetach</li>
              <li><strong>Ścieżka badań:</strong> 10 badań osiąga się z 5 kostek na planetach</li>
              <li><strong>Ścieżka materiałów:</strong> 10 materiałów osiąga się z 5 kostek na planetach</li>
            </ul>

            <p>Podsumowując, potrzebujemy 19 kostek planet rozmieszczonych na 6 heksach, co daje nam potrzebę średnio ponad 3 planet na heks. Teraz spójrz na swoje heksy w pudełku. Dość trzeźwiące, prawda? Większość heksów ma dwie planety, a wiele z nich to planety zaawansowane. Oznacza to również, że rdzeń galaktyki jest wart 2-3 heksy samej produkcji!</p>
          </div>
        </div>

        <div className="guide-chapter">
          <h3>🎯 Klasyfikacja heksów</h3>
          <div className="guide-content">
            <p>Dzielę heksy na trzy różne grupy:</p>

            <div className="guide-grid">
              <div className="guide-tip">
                <h5>Natychmiastowa kolonizacja</h5>
                <p>Wszystkie systemy z 2+ natychmiast użytecznymi planetami</p>
              </div>
              <div className="guide-tip">
                <h5>Ostateczna kolonizacja</h5>
                <p>Heksy z planetami zaawansowanymi, które ostatecznie dadzą nam 2 lub więcej użytecznych planet</p>
              </div>
              <div className="guide-tip">
                <h5>Krótkotrwała kolonizacja</h5>
                <p>Heksy z żetonami odkryć i jedną lub żadną planetą</p>
              </div>
            </div>

            <h4>Strategia "krótkotrwałej kolonizacji"</h4>
            <p>Heksy "krótkotrwałej kolonizacji" to miejsca, gdzie chcesz zdobyć odkrycie, ale nie heks. Istnieje powszechnie omawiana strategia zwana "Strategicznym Bankructwem", ale wolę nazywać ją "strategią ujemnego bilansu". Jest to strategia, w której celowo wydajesz więcej niż twoje rezerwy gotówki, tak aby mechanika gry zmusiła cię do usunięcia dysku. Zapobiega to konieczności wydania akcji wpływów na odzyskanie dysku.</p>

            <h4>Prawdziwa sztuka z planetami "ostatecznej kolonizacji"</h4>
            <p>Akcja eksploracji zawiera darmowe wpływanie na heks, który właśnie odkryto. Ale jak wiemy z powyższego, systemy z jedną planetą generują dla nas niewielką stratę. Pytanie brzmi: czy kolonizujemy teraz, ponosząc krótkoterminową stratę, aż do momentu, gdy będziemy mogli kupić odpowiednią zaawansowaną technologię, ryzykując, że nigdy tego nie zrobimy, czy rezygnujemy z kolonizacji teraz i czekamy, aż faktycznie zdobędziemy zaawansowaną technologię, która następnie wymaga pełnej lub pół (wpływowej) akcji?</p>

            <div className="guide-warning">
              <strong>⚠️ Odpowiedź: "to zależy"</strong> Ale wiemy, że wpływanie na system oznacza, że przygotowujesz się do zdobycia tej zaawansowanej technologii i powinniśmy wpływać tylko z tym na uwadze. Jeśli nie masz zamiaru rozwijać zaawansowanej technologii, odrzuć płytkę.
            </div>
          </div>
        </div>

        <div className="guide-chapter">
          <h3>🔬 Technologie zaawansowane i ich rola</h3>
          <div className="guide-content">
            <p>Wiemy, że odpowiednia zaawansowana technologia zmienia nasze systemy ze złych na dobre, pozwalając nam odejść od idealnego losowania kosztem technologii. Każde dwie włączone zaawansowane planety (w systemach z dwiema użytecznymi planetami) zmniejszają naszą liczbę heksów o jeden, a zatem zyskujemy akcję. Dlatego chcemy zmaksymalizować nasze zaawansowane technologie.</p>

            <p>Na początku mamy do rozważenia tylko nasz rodzimy świat. Pierwsze kilka heksów z zaawansowanymi, które wylosujemy, możemy spokojnie zachować. Ale kiedy zaczynamy rozwijać serię w określonym kolorze zaawansowanym, każdy dodatkowy heks z tym samym kolorem zyskuje na wartości, a heksy w innych kolorach tracą na wartości do tego stopnia, że możesz zacząć odrzucać KILKA heksów, nie dużo.</p>

            <h4>Orbitale</h4>
            <p>Orbitale mogą zamienić dowolny heks z jedną planetą w opłacalny system i poprawić już dobre systemy. Każde dwa orbitale zmniejszają potrzebę kolejnego heksu, obniżając naszą liczbę heksów. To powiedziawszy, jeszcze nie pokryłem swojej domeny orbitalami. Zapotrzebowanie na materiały jest tak duże, że są one praktycznie przydatne tylko dla rasy, która wylosowała duży ładunek materiałów.</p>

            <div className="guide-note">
              <strong>🏆 Must-have technologie:</strong> Zaawansowana Robotyka i Siatka Kwantowa są po prostu dobre. Kupuj je.
            </div>
          </div>
        </div>

        <div className="guide-chapter">
          <h3>⚖️ Bilans zasobów</h3>
          <div className="guide-content">
            <p>Priorytetowo traktuję pieniądze, z badaniami na bliskim drugim miejscu. Wczesne pieniądze pozwalają na eksplorację, później pozwalają skutecznie walczyć. Badania są bliskim drugim, ponieważ zbyt wiele badań może łatwo rozwiązać problem zbyt małych pieniędzy, a nawet zbyt małych materiałów. Materiały są dla mnie odległym trzecim (wiem, że wywoła to pewną krytykę).</p>

            <ul>
              <li><strong>Pieniądze:</strong> Pozwalają na eksplorację i efektywną walkę</li>
              <li><strong>Badania:</strong> Mogą rozwiązać problemy z pieniędzmi i materiałami</li>
              <li><strong>Materiały:</strong> Przydatne do budowy floty, ale flota nie będzie dobra, jeśli nie masz pieniędzy na ruch i ulepszenia lub nauki, aby była dobra</li>
            </ul>

            <p>Mała, ale zaawansowana technologicznie flota może skutkować brakiem strat, co czyni strategię niskich materiałów opłacalną. Z pewnością wezmę tyle materiałów, ile będę mógł, po prostu priorytetowo traktuję najpierw Pieniądze i Badania. Jeśli mam za dużo materiałów, podejmę orbitale, jeśli to możliwe, i spróbuję wyniszczyć wrogów w walce, jeśli mają mało materiałów.</p>

            <div className="guide-final-tip">
              <h4>🎯 Ostateczna rada</h4>
              <p>Kiedy losujesz płytki, pomyśl, zanim wpłyniesz. Miej plan, kiedy i jak ten system działa dla ciebie. Jakie rzeczy musisz zrobić, aby był dobry, jeśli już nie jest. Czy zrobisz lub zdobędziesz te rzeczy w najbliższym czasie? Jeśli nie, możesz chcieć to wyrzucić. Pomyśl, jak osiągniesz swoją idealną ekonomię. Następnie wykonaj kroki, aby ją uzyskać.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// PORADNIK 5: Technologie które zmieniają grę
const Guide5Content = () => {
  return (
    <div className="guide-article">
      <div className="guide-article-header">
        <div className="guide-credits">
          <p><strong>Autor:</strong> Peter O.</p>
          <p>
            <strong>Źródło:</strong>{' '}
            <a
              href="https://boardgamegeek.com/thread/804274/an-eclipse-exploration-primer"
              target="_blank"
              rel="noopener noreferrer"
              className="guide-source-link"
            >
              BoardGameGeek - An Eclipse Exploration Primer
            </a>
          </p>
        </div>
      </div>

      <div className="guide-intro">
        <p>Eksploracja jest fundamentalnym aspektem Eclipse - nie można wygrać gry tylko przez nią, ale na pewno można przez nią przegrać. Wiedza kiedy zachować płytki, kiedy je odrzucić i jaka może być twoja przyszła ścieżka jest kluczowa dla sukcesu.</p>
        <div className="guide-note">
          <strong>🎯 Cel poradnika:</strong> Pomóc zmniejszyć złożoność i zgadywanie związane z eksploracją. Poradnik jest napisany z perspektywy 6-osobowej gry z samymi Terranami, ale uwzględnia również różnice rasowe.
        </div>
      </div>

      <div className="guide-chapters">
        {/* Cel gry */}
        <div className="guide-chapter">
          <h3>🎯 Cel gry i ekonomia</h3>
          <div className="guide-content">
            <p>Celem gry jest zdobycie najwięcej punktów, ale wczesna gra koncentruje się na zbudowaniu najlepszej możliwej ekonomii.</p>

            <div className="guide-grid">
              <div className="guide-tip">
                <h5>Cel ekonomiczny</h5>
                <p>21 Pieniędzy (9 planet), 10 Badań (5 planet), 10 Materiałów (5 planet) na 6-8 systemach</p>
              </div>
              <div className="guide-tip">
                <h5>Osiągalność</h5>
                <p>Nie ma idealnego losowania które osiągnie to bez pokonania Starożytnych lub badań technologii</p>
              </div>
            </div>

            <h4>Oś agresja/żółw</h4>
            <p>Wszystkie strategie w Eclipse znajdują się gdzieś na osi agresja/żółw:</p>
            <ul>
              <li><strong>Agresja:</strong> Orion i Eridani atakujący Centrum Galaktyki lub systemy domowe w 2. rundzie</li>
              <li><strong>Żółw:</strong> Planta budująca do III poziomu z jednym (lub żadnym) dostępem do swojej przestrzeni</li>
            </ul>
            <p>Twoje położenie na tej osi zależy od mocy rasowych i początkowych eksploracji.</p>
          </div>
        </div>

        {/* Runda 1 */}
        <div className="guide-chapter">
          <h3>🚀 Pierwsza runda - kluczowe decyzje</h3>
          <div className="guide-content">
            <h4>Badania czy eksploracja?</h4>
            <p>Pierwsza tura Eclipse powinna być jedną z dwóch rzeczy: badaniem Ulepszonego Kadłuba albo przeklinaniem graczy przed tobą w kolejce tur za zrobienie tego.</p>

            <div className="guide-warning">
              <strong>⚠️ Ulepszony Kadłub:</strong> Jeśli jest dostępny - weź go. Koniec dyskusji. Jest zbyt ważny i elastyczny aby go pominąć, niezależnie od strategii.
            </div>

            <h4>Reszta akcji: eksploracja</h4>
            <p>To tutaj prowadzisz "dyskusję" z grą dotyczącą twojej ogólnej strategii. Jest to dyskusja, ponieważ chociaż możesz na nią wpływać, najbardziej efektywne akcyjnie jest brać to co przychodzi i budować strategię wokół tego.</p>
          </div>
        </div>

        {/* Gdzie eksplorować pierwsze */}
        <div className="guide-chapter">
          <h3>🔍 Gdzie eksplorować pierwsze?</h3>
          <div className="guide-content">
            <p>Liczba graczy może wpłynąć na decyzję, ale w 6-osobowej grze Pierścień 1 jest zwykle poprawny.</p>

            <div className="guide-grid">
              <div className="guide-tip">
                <h5>Pierścień 1</h5>
                <p>Twój drugi najważniejszy hex (po systemie domowym). Najszybszy sposób na granicę z sąsiadami, lepszej jakości niż Pierścienie 2-3</p>
              </div>
              <div className="guide-tip">
                <h5>Ryzyko</h5>
                <p>Jeśli ktoś inny zagra "twój" hex Pierścienia 1, może to być poważny cios - będzie zorientowany najmniej użytecznie dla ciebie</p>
              </div>
            </div>

            <h4>Podwójni Starożytni w Pierścieniu 1</h4>
            <p>Podwójni Starożytni mają taką samą siłę ognia jak Centrum Galaktyki (z lepszą inicjatywą) ale bez jego punktów życia. To świetny sektor do podbicia, ale nie zalecany chyba że wiesz co robisz w walce.</p>
            <div className="guide-note">
              <strong>Decyzja:</strong> Kiedyś odrzucałbym bez wahania, teraz prawdopodobnie zachowam. Możesz być bardziej selektywny jeśli obaj sąsiedzi jeszcze nie zeksplorowali swojego Pierścienia 1.
            </div>
          </div>
        </div>

        {/* Orientacja hexa Pierścienia 1 */}
        <div className="guide-chapter">
          <h3>🧭 Orientacja hexa Pierścienia 1</h3>
          <div className="guide-content">
            <p>Orientacja hexa zależy od oceny sąsiadów i ich agresywności. Chyba że grasz przeciwko Orionom lub Eridani, najlepiej łączyć się z jak największą liczbą osób.</p>

            <div className="guide-grid">
              <div className="guide-tip">
                <h5>Połączenia defensywne</h5>
                <p>Hex Pierścienia 1 może być twoją bramą i punktem obronnym - więc łącz się</p>
              </div>
              <div className="guide-tip">
                <h5>Wewnętrzne linie komunikacji</h5>
                <p>Gracze defensywni mogą utrzymywać połączenie z Pierścieniem 2 dla zwartego imperium zamiast rozciągniętego</p>
              </div>
            </div>

            <h4>Specjalny przypadek: Hex 106</h4>
            <p>Jeśli masz hex z 4 tunelami czasoprzestrzennymi w rzędzie z 2 nie-tunelowymi stronami obok siebie, może warto zablokować gracza. Jeśli sąsiedzi są równi, najlepiej zablokować gracza po lewej.</p>
          </div>
        </div>

        {/* Pierścienie 2 i 3 */}
        <div className="guide-chapter">
          <h3>🌌 Pierścienie 2 i 3 - klasyfikacja hexów</h3>
          <div className="guide-content">
            <p>Zacznij od hexów Pierścienia 2 i przejdź do Pierścienia 3. Ta kolejność jest mniej ważna i bardziej zależna od tego co robi reszta stołu.</p>

            <div className="guide-grid">
              <div className="guide-tip">
                <h5>Podwójni Starożytni (203, 301)</h5>
                <p>Albo dar niebios albo coś do czego nigdy nie wyślesz floty. Generalnie zachowaj ze względu na dobre planety</p>
              </div>
              <div className="guide-tip">
                <h5>Pojedynczy Starożytni (204, 211, 302, 305)</h5>
                <p>Prawie wszyscy do zachowania. Wyjątkiem może być hex z tylko jedną podstawową planetą</p>
              </div>
            </div>

            <div className="guide-grid">
              <div className="guide-tip">
                <h5>Podwójne podstawowe planety (201, 210, 306, 310)</h5>
                <p>Wyraźnie dobre hexy bez wad. To hexy które ludzie narzekający na szczęście w losowaniu prawdopodobnie pożądają</p>
              </div>
              <div className="guide-tip">
                <h5>Pojedyncza podstawowa + 1-2 zaawansowane (202, 205, 209, 304, 307-309, 317-318)</h5>
                <p>Najliczniejszy typ hexa i zmora narzekających na szczęście. Dobre tylko jeśli pasują do twojego typu zaawansowanych</p>
              </div>
            </div>

            <div className="guide-grid">
              <div className="guide-tip">
                <h5>Żeton Odkrycia + 1 lub 0 planet (206-208, 311-316)</h5>
                <p>Zazwyczaj natychmiastowo wpływasz, zdobywasz odkrycie i wchodzisz w deficyt aby usunąć żeton "za darmo"</p>
              </div>
            </div>
          </div>
        </div>

        {/* Odkrycia */}
        <div className="guide-chapter">
          <h3>💎 Odkrycia - dzika karta</h3>
          <div className="guide-content">
            <p>Odkrycia mogą być niesamowitym atutem i odgrywać główną rolę w twojej strategii.</p>

            <div className="guide-grid">
              <div className="guide-tip">
                <h5>Materiały</h5>
                <p>Mogą prowadzić do wczesnych pancerników lub orbituli - pomaga strategii agresywnej</p>
              </div>
              <div className="guide-tip">
                <h5>Nauka lub darmowa technologia</h5>
                <p>Może być albo agresywna albo żółwia w zależności od dostępnych technologii</p>
              </div>
            </div>

            <h4>Darmowa technologia za 2 VP</h4>
            <p>Niektórzy biorą darmową technologię za 2 VP. Zachowanie często oznacza przynajmniej 1 VP (z pomocy w zaawansowaniu ścieżki) + 2+ punkty wolnej nauki + 1 darmową akcję. Dla mnie to warte więcej niż 2 VP.</p>

            <div className="guide-note">
              <strong>W rundach 1-2</strong> prawdopodobnie chcesz używać odkrycia (jeśli jest w jakikolwiek sposób użyteczne) zamiast zachowywać 2VP.
            </div>
          </div>
        </div>

        {/* Uwagi o rasach */}
        <div className="guide-chapter">
          <h3>👽 Specyficzne uwagi o rasach</h3>
          <div className="guide-content">
            <div className="guide-grid">
              <div className="guide-tip">
                <h5>Orion i Eridani</h5>
                <p>Możesz generalnie pominąć Pierścień 3. Potrzebujesz najwyższej jakości hexów i generalnie chcesz znaleźć Starożytnych</p>
              </div>
              <div className="guide-tip">
                <h5>Hydranie</h5>
                <p>Start z Zaawansowanymi Laboratoriami jest OGROMNY. Włącza trzecią część zaawansowanych planet. Zalecane bardziej agresywne odrzucanie Starożytnych</p>
              </div>
            </div>

            <div className="guide-grid">
              <div className="guide-tip">
                <h5>Draco</h5>
                <p>Dość jasne czego szukać. Obserwuj liczbę zaawansowanych planet. Możesz też budować orbitale gdy niektórzy unikają Starożytnych</p>
              </div>
              <div className="guide-tip">
                <h5>Planta</h5>
                <p>Chcesz orbituli i zamknięcia zewnętrznych połączeń. Jeden punkt kontroli to twoja mantra</p>
              </div>
            </div>

            <div className="guide-grid">
              <div className="guide-tip">
                <h5>Mechanema</h5>
                <p>Trzecia najbardziej agresywna rasa. Nie lekceważ startowego komputera. Jeśli płytki prowadzą do żółwia, zabezpiecz więcej hexów materiałów i buduj orbitale</p>
              </div>
            </div>
          </div>
        </div>

        {/* Wnioski */}
        <div className="guide-chapter">
          <h3>💭 Wnioski końcowe</h3>
          <div className="guide-content">
            <p>Podczas losowania hexów zadawaj sobie następujące pytania:</p>

            <div className="guide-principles">
              <div className="guide-principle">
                <h4>1. W jakim kierunku prowadzi mnie ten hex?</h4>
                <p>Czy dalsza moja ścieżka będzie agresywna czy defensywna?</p>
              </div>

              <div className="guide-principle">
                <h4>2. Czy ten hex wspiera mój cel w kontekście innych hexów i mocy rasowych?</h4>
                <p>Czy pasuje do mojej rozwijającej się strategii?</p>
              </div>

              <div className="guide-principle">
                <h4>3. Czy kiedykolwiek użyję tego hexa?</h4>
                <p>Jeśli nie - odrzuć go i szukaj czegoś bardziej użytecznego</p>
              </div>
            </div>

            <div className="guide-final-note">
              <h4>🎯 Pamiętaj:</h4>
              <p><strong>Starożytni</strong> generalnie prowadzą cię do agresji. <strong>Zaawansowane planety</strong> generalnie prowadzą do żółwia. <strong>Odkrycia</strong> są dziką kartą która może pomóc (lub dać VP) w obu celach.</p>
              <p><strong>Nie odrzucaj zbyt często, ale odrzucaj wystarczająco!</strong></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// PORADNIK 6: Strategie technologiczne dla ras
const Guide6Content = () => {
  return (
    <div className="guide-article">
      <div className="guide-article-header">
        <div className="guide-credits">
          <p><strong>Autor:</strong> Dymond Kyng</p>
          <p>
            <strong>Źródło:</strong>{' '}
            <a 
              href="https://boardgamegeek.com/thread/1361979/general-tech-strategy-by-race" 
              target="_blank" 
              rel="noopener noreferrer"
              className="guide-source-link"
            >
              BoardGameGeek - General Tech Strategy by Race
            </a>
          </p>
        </div>
      </div>

      <div className="guide-intro">
        <p>Po ponad 50 rozgrywkach i kilku turniejach, pomyślałem że może być pomocne przedstawienie ogólnych strategii technologicznych dla różnych ras. Jednak bez podstawowych strategii, wybór technologii nie będzie miał znaczenia, więc zacznę od ogólnych wskazówek korzystnych dla wszystkich ras.</p>
        <div className="guide-note">
          <strong>🎯 Doświadczenie:</strong> Poradnik oparty na ponad 50 rozgrywkach i doświadczeniu turniejowym.
        </div>
      </div>

      <div className="guide-chapters">
        {/* Ogólne strategie */}
        <div className="guide-chapter">
          <h3>🌐 Ogólne zasady dla wszystkich ras</h3>
          <div className="guide-content">
            <div className="guide-principles">
              <div className="guide-principle">
                <h4>🧭 Orientacja hexów</h4>
                <p>Eclipse to gra dyplomacji i strategii (przynajmniej w grach 4+ osobowych).</p>
                <ul>
                  <li><strong>Rasy agresywne:</strong> Staraj się mieć kilka opcji wejścia na terytorium wroga szybko</li>
                  <li><strong>Rasy późnej gry:</strong> Staraj się mieć 1 punkt wejścia na swoje terytorium, lub 2 jeśli sąsiad może zostać sojusznikiem</li>
                </ul>
              </div>

              <div className="guide-principle">
                <h4>📊 Które hexy zachować</h4>
                <p>W większości przypadków, jeśli wylosujesz hex z tylko jedną planetą do skolonizowania:</p>
                <ul>
                  <li><strong>Taktyczne bankructwo:</strong> Celowo wydaj więcej niż masz na koniec rundy aby odzyskać dysk</li>
                  <li><strong>Lub po prostu nie przejmuj kontroli</strong> nad hexem od razu</li>
                  <li>Jeden dysk jest BARDZIEJ wartościowy niż jedna planeta, szczególnie ekonomiczna</li>
                </ul>
                <div className="guide-warning">
                  <strong>⚠️ Ważne:</strong> Nie kolonizuj planet statkami kolonizacyjnymi dopóki nie zamierzasz spasować. To daje ci elastyczność, szczególnie z białymi planetami.
                </div>
              </div>

              <div className="guide-principle">
                <h4>🚀 Koncentracja na typach statków</h4>
                <p>Masz wystarczająco tur i budowy by skupić się tylko na 2 typach statków (Mechanema to wyjątek).</p>
                <ul>
                  <li><strong>Nie ulepszaj wszystkiego</strong></li>
                  <li>Uczyń jeden lub dwa projekty statków bardzo śmiercionośnymi</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Terranie */}
        <div className="guide-chapter">
          <h3>👨‍🚀 Terranie (Ludzie)</h3>
          <div className="guide-content">
            <div className="guide-race-strategy">
              <div className="guide-race-info">
                <h4>Główna zaleta: +1 do ruchu</h4>
                <p>Bomby neutronowe powinny być dużym priorytetem - możesz rozprzestrzeniać wiele myśliwców w środkowej/późnej grze.</p>
              </div>

              <div className="guide-tech-focus">
                <h5>🎯 Skupienie: Górny rząd technologii</h5>
                <ul>
                  <li>Zacznij od bomb neutronowych i utrzymuj momentum kupując tylko technologie z górnego rzędu</li>
                  <li>Rakiety są nadal śmiercionośne mimo nerfów z RotA</li>
                  <li>Ogranicz się do 1-2 wymian w grze - tracisz zasoby długoterminowo</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Mechanema */}
        <div className="guide-chapter">
          <h3>🤖 Mechanema</h3>
          <div className="guide-content">
            <div className="guide-race-strategy">
              <div className="guide-race-info">
                <h4>Start: +2 do komputera, 3 nauki</h4>
                <p>Ulepszony kadłub od razu to śmiertelna kombinacja z 3 ulepszeniami.</p>
              </div>

              <div className="guide-tech-focus">
                <h5>🎯 Skupienie: Środkowy rząd technologii</h5>
                <ul>
                  <li>Środkowy rząd świetnie współgra z Mechanemą</li>
                  <li>Siatka kwantowa (podwójny dysk) to klejnot koronny dla ekonomii</li>
                  <li>Unikaj tarczy -1 chyba że nie masz innych opcji</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Orion */}
        <div className="guide-chapter">
          <h3>👑 Hegemonia Oriona</h3>
          <div className="guide-content">
            <div className="guide-race-strategy">
              <div className="guide-race-info">
                <h4>Start: 2 technologie, 3 nauki</h4>
                <p>Ulepszony kadłub idealnie pasuje do wbudowanej energii w projektach statków Oriona.</p>
              </div>

              <div className="guide-tech-focus">
                <h5>🎯 Skupienie: Środkowy rząd technologii</h5>
                <ul>
                  <li>Możesz stworzyć śmiercionośny krążownik już w drugiej akcji 1. rundy</li>
                  <li>Zaawansowana ekonomia powinna być twoim celem</li>
                  <li>Twój świat macierzysty zaczyna z zaawansowaną planetą ekonomiczną</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Eridani */}
        <div className="guide-chapter">
          <h3>💎 Imperium Eridani</h3>
          <div className="guide-content">
            <div className="guide-race-strategy">
              <div className="guide-race-info">
                <h4>Start: 3 technologie, przewaga ekonomiczna</h4>
                <p>Masz wiele opcji, ale długoterminowa przewaga ekonomiczna jest kluczowa.</p>
              </div>

              <div className="guide-tech-focus">
                <h5>🎯 Skupienie: Środkowy rząd technologii</h5>
                <ul>
                  <li>Potrzebujesz zaawansowanej ekonomii i siatki kwantowej</li>
                  <li>Skupienie na jednym rzędzie ułatwi budowanie momentum</li>
                  <li>Długoterminowa strategia wymaga silnej bazy ekonomicznej</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Hydranie */}
        <div className="guide-chapter">
          <h3>🔬 Postępowi Hydranie</h3>
          <div className="guide-content">
            <div className="guide-race-strategy">
              <div className="guide-race-info">
                <h4>Start: 5 nauki, 2 akcje badań</h4>
                <p>Największa elastyczność technologiczna ze wszystkich ras.</p>
              </div>

              <div className="guide-tech-focus">
                <h5>🎯 Skupienie: Górny rząd technologii</h5>
                <ul>
                  <li>Jeśli dostępne: bomby neutronowe i bazy gwiezdne od razu</li>
                  <li>Bazy gwiezdne potrzebne do obrony przed agresywnymi graczami</li>
                  <li>Alternatywa: -1 tarcza i ulepszony kadłub</li>
                  <li><strong>Badaj tylko gdy masz 2 technologie do wzięcia</strong> - oszczędzaj akcje</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Planta */}
        <div className="guide-chapter">
          <h3>🌿 Planta</h3>
          <div className="guide-content">
            <div className="guide-race-strategy">
              <div className="guide-race-info">
                <h4>Największe możliwości, słaba inicjatywa</h4>
                <p>Rakiety pomagają obejść problem słabej inicjatywy.</p>
              </div>

              <div className="guide-tech-focus">
                <h5>🎯 Skupienie: Górny lub dolny rząd</h5>
                <ul>
                  <li><strong>Górny rząd:</strong> Rakiety dla ominięcia słabej inicjatywy</li>
                  <li><strong>Dolny rząd:</strong> Orbitale jeśli masz wiele planet budowy</li>
                  <li>Rekord autora: 67 punktów z strategią orbitali</li>
                  <li>Używaj przewagi eksploracji i twórz ściany przeciw przeciwnikom</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Draco */}
        <div className="guide-chapter">
          <h3>🐉 Potomkowie Draco</h3>
          <div className="guide-content">
            <div className="guide-race-strategy">
              <div className="guide-race-info">
                <h4>Mniej znaczy więcej - brak startowych technologii</h4>
                <p>Musisz być bardziej wybredny w wyborze technologii.</p>
              </div>

              <div className="guide-tech-focus">
                <h5>🎯 Skupienie: Górny lub środkowy rząd</h5>
                <ul>
                  <li>Staraj się odciąć od przeciwników</li>
                  <li>Zaawansowane górnictwo + orbitale = trudny do zatrzymania</li>
                  <li>4 nauki startowe kuszą ulepszonym kadłubem, ale lepsze bomby neutronowe</li>
                  <li>Płać pełną cenę za technologie - planuj ostrożnie</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Rho Indi */}
        <div className="guide-chapter">
          <h3>🏴‍☠️ Syndykat Rho Indi</h3>
          <div className="guide-content">
            <div className="guide-race-strategy">
              <div className="guide-race-info">
                <h4>+1 do ruchu, brak zaufania innych</h4>
                <p>Dyplomacja jest trudniejsza - zwykle jesteś zdany na siebie.</p>
              </div>

              <div className="guide-tech-focus">
                <h5>🎯 Skupienie: Urządzenia maskujące + górny rząd</h5>
                <ul>
                  <li><strong>Urządzenia maskujące:</strong> Statki przechodzą przez obronę, unikają pinowania</li>
                  <li>Bomby neutronowe + napędy = flota bombowców</li>
                  <li>Alternatywa: środkowy rząd dla dział z antymaterii</li>
                  <li>Wykorzystaj wysoką inicjatywę</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Lyra */}
        <div className="guide-chapter">
          <h3>🕊️ Oświeceni Lyry</h3>
          <div className="guide-content">
            <div className="guide-race-strategy">
              <div className="guide-race-info">
                <h4>Świątynie i generator tuneli czasoprzestrzennych</h4>
                <p>Mniej znaczy więcej - wydajesz na świątynie.</p>
              </div>

              <div className="guide-tech-focus">
                <h5>🎯 Skupienie: Selektywne technologie</h5>
                <ul>
                  <li>Cel: całkowicie odciąć się od przeciwników</li>
                  <li>Wybierz kilka technologii i oszczędzaj na nie</li>
                  <li>Przerzut statku kolonizacyjnego przydatny w walkach ze Starożytnymi</li>
                  <li>Oszczędzaj naukę na duże zakupy</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Wygnańcy */}
        <div className="guide-chapter">
          <h3>🏰 Wygnańcy</h3>
          <div className="guide-content">
            <div className="guide-race-strategy">
              <div className="guide-race-info">
                <h4>Niedoceniana rasa - start z urządzeniami maskującymi</h4>
                <p>Orbitale działają jak bazy gwiezdne.</p>
              </div>

              <div className="guide-tech-focus">
                <h5>🎯 Skupienie: Górny rząd technologii</h5>
                <ul>
                  <li>Bomby neutronowe + dobry napęd = flota bombowców (jak Rho Indi)</li>
                  <li>Zaawansowane górnictwo potrzebne dla więcej orbitali</li>
                  <li>Potencjał do zaskakujących strategii</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Magellan */}
        <div className="guide-chapter">
          <h3>🧭 Magellanie</h3>
          <div className="guide-content">
            <div className="guide-race-strategy">
              <div className="guide-race-info">
                <h4>Najbardziej wszechstronna rasa</h4>
                <p>Zdolność statku kolonizacyjnego daje ogromną elastyczność.</p>
              </div>

              <div className="guide-tech-focus">
                <h5>🎯 Skupienie: Środkowy rząd technologii</h5>
                <ul>
                  <li>Start z technologią 6 energii wskazuje na środkowy rząd</li>
                  <li>Bonusowy żeton odkrycia po 4 technologiach w rzędzie</li>
                  <li>Potrzebujesz tylko 3 więcej technologii dla bonusu</li>
                  <li>Wykorzystaj tę przewagę</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Podsumowanie */}
        <div className="guide-chapter">
          <h3>🎯 Podsumowanie strategii</h3>
          <div className="guide-content">
            <div className="guide-summary">
              <h4>Kluczowe wnioski:</h4>
              
              <div className="guide-grid">
                <div className="guide-tip">
                  <h5>Większość ras</h5>
                  <p>Górny lub środkowy rząd technologii</p>
                </div>
                <div className="guide-tip">
                  <h5>Skupienie na rzędzie</h5>
                  <p>Korzystaj z rabatów naukowych</p>
                </div>
                <div className="guide-tip">
                  <h5>Dostosowanie do rasy</h5>
                  <p>Każda rasa ma unikalne mocne strony</p>
                </div>
              </div>

              <div className="guide-final-tip">
                <h4>🏆 Ostateczna rada</h4>
                <p>Większość ras powinna skupić się na górnym lub środkowym rzędzie technologii, ale ogólnie staraj się koncentrować na jednym rzędzie aby w pełni wykorzystać rabaty naukowe. W połączeniu z innymi strategiami, te taktyki technologiczne powinny uczynić cię godnym przeciwnikiem w większości meczów.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuidePage;