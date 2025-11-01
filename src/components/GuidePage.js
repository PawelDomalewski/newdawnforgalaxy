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
      title: "🚀 Kompleksowy poradnik do gry Eclipse",
      description: "Strategie od początku gry do finału",
      author: "Jordan Grahm",
      source: "https://boardgamegeek.com/thread/2264028/general-start-to-finish-guide-to-upping-your-strat",
      sourceName: "BoardGameGeek",
      difficulty: 2,
      image: "/images/pic1974056.jpg"
    },
    '2': {
      id: 2,
      title: "🧠 Zaawansowana strategia Eclipse",
      description: "Taktyki i techniki dla doświadczonych graczy",
      author: "Kester 42",
      source: "https://boardgamegeek.com/thread/1163520/advanced-eclipse-strategy",
      sourceName: "BoardGameGeek",
      difficulty: 4,
      image: "/images/guides/advanced-strategy.jpg"
    },
    '3': {
      id: 3,
      title: "⚔️ Podstawy militarne w Eclipse",
      description: "Podstawy walki i strategii militarnej",
      author: "Peter O.",
      source: "https://boardgamegeek.com/thread/750430/an-eclipse-military-primer",
      sourceName: "BoardGameGeek",
      difficulty: 3,
      image: "/images/guides/military-guide.jpg"
    },
    '4': {
      id: 4,
      title: "🌌 Sekrety eksploracji galaktyki",
      description: "Jak efektywnie odkrywać i kolonizować systemy",
      author: "Eclipse Masters",
      source: "https://boardgamegeek.com",
      sourceName: "BoardGameGeek",
      difficulty: 2,
      image: "/images/guides/exploration-guide.jpg"
    },
    '5': {
      id: 5,
      title: "💡 Technologie które zmieniają grę",
      description: "Przewodnik po drzewku technologicznym",
      author: "Tech Guru",
      source: "https://boardgamegeek.com",
      sourceName: "BoardGameGeek",
      difficulty: 3,
      image: "/images/guides/technology-guide.jpg"
    },
    '6': {
      id: 6,
      title: "🏆 Mistrzowska dyplomacja",
      description: "Sztuka negocjacji i sojuszy w Eclipse",
      author: "Diplomat Expert",
      source: "https://boardgamegeek.com",
      sourceName: "BoardGameGeek",
      difficulty: 4,
      image: "/images/guides/diplomacy-guide.jpg"
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
                <span className="guide-difficulty"><strong>Poziom trudności:</strong> {renderDifficultyStars(guide.difficulty)}</span>
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
                <p>Bądź selektywny. Odrzucaj gdy masw za dużo systemów ze Starożytnymi</p>
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
// PORADNIK 4: Sekrety eksploracji galaktyki
const Guide4Content = () => {
  return (
    <div className="guide-article">
      <div className="guide-intro">
        <p>Poradnik 4 - Sekrety eksploracji galaktyki.</p>
      </div>
    </div>
  );
};

// PORADNIK 5: Technologie które zmieniają grę
const Guide5Content = () => {
  return (
    <div className="guide-article">
      <div className="guide-intro">
        <p>Poradnik 5 - Technologie które zmieniają grę.</p>
      </div>
    </div>
  );
};

// PORADNIK 6: Mistrzowska dyplomacja
const Guide6Content = () => {
  return (
    <div className="guide-article">
      <div className="guide-intro">
        <p>Poradnik 6 - Mistrzowska dyplomacja.</p>
      </div>
    </div>
  );
};

export default GuidePage;