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
    },
    '7': {
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
    '8': {
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
    },
    '9': {
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
    }

  };

  const guide = guidesData[guideId];

  if (!guide) {
    return (
      <div className="guide-page">
        <div className="container">
          <h1>Poradnik nie znaleziony</h1>
          <p>Przepraszamy, ale żądany poradnik nie istnieje. ID: {guideId}</p>
          <Link to="/zasady-poradnik" className="button">← Powrót do poradników</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="guide-page">
      <div className="container">
        <Link to="/zasady-poradnik" className="button">Powrót do poradników</Link>

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
                  className="button"
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
            <Link to="/zasady-poradnik" className="button">Powrót do poradników</Link>
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
    case '9':
      return <Guide9Content />
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
    case '7':
      return <Guide7Content />;
    case '8':
      return <Guide8Content />;
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
        <p>Wielu graczy, z którymi gram, nie wie, jak wydostać się z trudnej sytuacji lub brakuje im umiejętności długoterminowego planowania i adaptacji wymaganych do bycia biegłym w Eclipse. Tak na marginesie, gracze nie powinni używać standardowych GCDS... jest to słabo zbalansowane i daje niektórym rasom dużą przewagę nad innymi.</p>
        <div className="guide-note">
          <strong>⚠️ Uwaga:</strong> Oryginalnie opublikowałem to na forach RotA bez świadomości tego. Kilka lat później poprawiam mój błąd.
        </div>
      </div>

      <div className="guide-chapters">
        {/* Rozpoczęcie gry */}
        <div className="guide-chapter">
          <h3> Rozpoczęcie gry </h3>
          <div className="guide-content">
            <p className='guide-tip'><b>Pierwsze pytanie</b>, które powinieneś sobie zadać to: czy chcę być agresywny PvP (atakowanie graczy), PvE (tylko walka ze Starożytnymi i GCDS), lub mieszanką obu; czy chcesz usiąść z tyłu i pilnować własnego interesu i mieć nadzieję, że nikt cię nie zaatakuje?</p>
            <p className='guide-tip'><b>Teraz</b>, jeśli odpowiedziałeś na to pytanie po stronie agresywnej, spójrz na dostępne technologie i zobacz, czy technologia jest tam, aby pozwolić ci ulepszyć twoje statki do punktu, w którym czujesz się komfortowo podejmując się starożytnych krążowników w rundzie 1 lub 2. NIE POLEGAJ na tym, że te technologie pojawią się na początku rundy 2! Jeśli nie widzisz właściwych technologii, albo zmień swoją agresywną strategię na mniej agresywną, albo wybierz rasę, która twoim zdaniem pozwoli ci zacząć tępić starożytnych do końca rundy 2.</p>
            <p className='guide-tip'><b>Jeśli</b> chcesz przyjąć bardziej PvP rolę, rozważ niektóre rasy, które sprzyjają przewagom w walkach PvP i pomyśl o wybraniu rasy z 3 lub więcej aktywacjami statków (Terranie i Rho Indi) jako aktywacje statków mogą być bardzo kluczowe w strategii PvP. Miej na uwadze, że pojedynczy pancernik może często być najtańszym i najbardziej efektywnym sposobem na zastraszenie starożytnych z istnienia (Orion i Rho Indi są wyjątkiem).</p>
            <p className='guide-tip'><b>Jeśli</b> chodzi o strategię żółwia, sugerowałbym rasę z unikalnymi bonusami, które nie polegają na interakcji (Świątynie Lyry, podwójna eksploracja Planta/Draco, podwójne badania Hydran, etc). Chociaż prawie każda rasa może być grana defensywnie, niektóre rasy jak Rho Indi mają znaczące wady, jeśli nie są używane agresywnie.</p>
          </div>
        </div>

        {/* Pierwsza runda */}
        <div className="guide-chapter">
          <h3> Pierwsza runda (Cóż, głównie eksploracja) </h3>
          <div className="guide-content">
            <p className='guide-tip'><b>Po</b> pierwsze, szanse są, że twoja pierwsza akcja będzie albo Badaniami albo Eksploracją. Technologia militarna, która jest kluczowa dla twoich planów, albo wczesna przewaga ekonomiczna/akcyjna jest twoim PRIORYTETEM, inaczej Eksploruj. Niektóre przykłady to Ulepszony Kadłub, Zaawansowana Robotyka, Działa Plazmowe. Nie badaj niczego, co albo nie pomoże ci natychmiast, albo jest krytyczne, aby zdobyć i może być zbadane przez innych graczy przed twoją kolejną turą.</p>
            <p className='guide-tip'><b>Kiedy</b> już wejdziesz w eksplorację, powinna to być reszta twojej tury, chyba że jesteś zdolny do ataku, wtedy możesz mieć scenariusze, gdzie atakujesz i/lub budujesz statki po tylko 1 lub 2 akcjach eksploracji. Pamiętaj, nigdy nie chcesz pozwolić komuś na zeksplorowanie twojego Heksa 1 za ciebie i zawsze chcesz zdobyć trochę Heksów 3 zanim znikną. Atakowanie w rundzie 1 powinno się zdarzyć tylko jeśli naprawdę lubisz zasoby, które otrzymasz i możesz skolonizować to po zwycięstwie. Zwykle lepiej jest eksplorować więcej systemów w rundzie 1 i wykonać wszystkie akcje dla twojego ataku w rundzie 2, jeśli nie będziesz w stanie zebrać zasobów z tego systemu pod koniec rundy.</p>
            <p className='guide-tip'><b>Eksplorowanie</b> hexów jest najbardziej krytyczną umiejętnością w grze!!! Tak, trzy wykrzykniki krytyczne. Każdy może narzekać na "szczęście" w ciągnięciu hexów, ale wykwalifikowany gracz nauczy się adaptować swoją grę do hexów, które eksploruje i wiedzieć, kiedy warto odrzucić hex. W Rundzie pierwszej, będziesz chciał eksplorować przynajmniej dwa hexy jakiegoś dla ciebie pożytku (żeton odkrycia, system, który możesz natychmiast skolonizować 2 planety, starożytni jeśli atakujesz w rundzie 1).</p>
            <p className='guide-tip'><b>Są</b> prawie żadne scenariusze, gdzie chcesz odrzucić Heks 3 (systemy uli, systemy portali warp, i czasami starożytni są wyjątkami). Powód tego jest prosty, jeśli nie blokuje ci to od eksplorowania więcej Heksów 3 w przyszłości, twoi przeciwnicy nie dostaną szansy na zeksplorowanie tego hexa i możesz po prostu zostawić go bez wpływania. Jeśli zatrzymuje to twoją eksplorację martwą w twoich śladach, możesz potrzebować odrzucić to jako niezdolność do eksploracji może być ogromną stratą! Nie zapomnij, że zawsze możesz wpłynąć na system, aby eksplorować z niego (lub wziąć odkrycie) z planami bankructwa i usunięcia tego dysku pod koniec tury.</p>
            <p className='guide-tip'><b>Kiedy</b> chodzi o systemy Heks 2, będziesz chciał być nieco selektywny. Zwykle możesz zachować system, nawet jeśli nie jest idealny, ale jest kilka przypadków, gdzie będziesz chciał rozważyć odrzucenie go. (a) Jeśli wylosowałeś więcej hexów ze starożytnymi niż możesz obsłużyć. Nie pozwól, aby twoje jedyne opcje na następne kilka rund były bitwą. Wciąż potrzebujesz mieć system lub dwa, które dodadzą do twojej ekonomii i opcję kontynuowania eksploracji. (b) To jest ul lub system portalu warp i jest bardzo zły dla twojej strategii (żółw i buduj mało lub zero floty wcześnie). Zwykle sugeruję eksplorowanie twojego Heksa 1 przed Heksem 2, więc wiesz, czy możesz zachować starożytnych lub potrzebujesz odrzucić starożytnych (starożytni na obu Heks 1 i 2 mogą zamknąć twoją grę, jeśli nie jesteś w stanie ich pokonać do końca następnej rundy).</p>
            <p className='guide-tip'><b>Dla</b> eksploracji Heks 1, jestem trochę bardziej otwarty na odrzucanie jakiegokolwiek hexa, aby spróbować i zdobyć hex, który pasuje do mojej strategii. Zwykle nie wyrzucę Heksa 1, jeśli chciałem starożytnych, ale nie dostałem żadnych... większość czasu po prostu polecam na znalezienie kolejnego starożytnego lub dwóch w sektorach Heks 2. Ale rozważę wyrzucenie starożytnych na eksploracji Heks 1, jeśli nie chcę starożytnych. Lubię też wyrzucać sektory Heks 1, których nie mogę skolonizować 2 planet bez badań (chyba że wiem, że dostanę to badanie bardzo soon i mam przynajmniej jeden inny system z tą zaawansowaną planetą).</p>
            <p className='guide-tip'><b>Eksploruj</b> tak bardzo, jak to możliwe bez bankructwa i NIE kolonizuj systemów pojedynczych hexów, chyba że jest to krytyczna nauka lub materiał, którego będziesz potrzebować następnej rundy, aby zdobyć konkretne badania lub zbudować właściwą liczbę statków do walki. W niektórych scenariuszach, dostaniesz parę niesamowitych hexów i możesz po prostu wpłynąć na 2-3 systemy, przejść wcześnie, i skorzystać z zasobów i pierwszego wyboru technologii. Większość czasu nie będziesz tak szczęśliwy.</p>
            <p className='guide-tip'><b>Atakowanie</b> będzie opcją dla niektórych ras z zaawansowanymi projektami statków lub dobrą startową technologią. Po 1 lub 2 eksploracjach i znalezieniu odpowiedniego systemu starożytnych do ataku, zadaj sobie następujące przed jakimikolwiek kolejnymi akcjami (a) Ile akcji zajmie mi wygranie tej bitwy pod koniec tej rundy... czy mogę sobie na to pozwolić bez bankructwa i czy dostanę odpowiednie zasoby podczas mojego utrzymania, aby zrekompensować nieeksplorowanie i kolonizowanie systemów bez wrogów? NIE RÓB NIC, aby ulepszać lub budować statki w pierwszej rundzie, chyba że szanse na wygraną są na twoją korzyść i systemy wewnątrz są korzystne.</p>
            <p className='guide-tip'><b>Żetony</b> odkrycia wrzucają interesujący klucz francuski do pierwszej rundy eksploracji. Zawsze możesz wpłynąć dla odkrycia i zbankrutować planetę, ale jeśli natkniesz się na +8 pieniędzy, to może się przerodzić w 3-4 więcej eksploracji niż inni gracze w pierwszej rundzie, skutkując dodatkowymi znaleziskami odkryć. To od ciebie zależy, jak chcesz hazardować z eksplorowaniem dla odkryć w pierwszej rundzie, ale miej na uwadze, że Heks 3 ma najwięcej odkryć, ale w mniejszych grach często będą one usunięte z talii ciągnięcia, i 3 z 11 płytek Heks 2 ma niechronione odkrycie.</p>
          </div>
        </div>

        {/* Druga runda */}
        <div className="guide-chapter">
          <h3> Druga runda, Zmień swoje plany </h3>
          <div className="guide-content">
            <p className='guide-tip'><b>Czy</b> zauważyłeś, że nie mówiłem dużo o odrzucaniu hexów na podstawie ich zasobów? To dlatego, że to zły pomysł w większości scenariuszy, na które trafisz (prawdopodobnie więcej niż 9 w 10 gier się zgodzi). Teraz, gdy masz pojęcie, jakie hexy masz, jakie zasoby będziesz mieć dostępne, jakich starożytnych musisz walczyć, jakie nowe technologie są dostępne na rundę 2, etc.... będziesz chciał całkowicie przemyśleć swoją strategię (cóż, może nie całkowicie). Musisz wziąć silny rzut oka i powiedzieć "Mogę odnieść sukces w walce ze starożytnymi w bardzo efektywnym terminowym sposób" lub złomować plany, które obejmują dużo wydatków (akcji) na military! Następnie, spójrz, czy masz zasoby, aby wspierać twój obecny plan gry, jeśli nie, poważnie rozważ zmianę twojego planu gry na coś, co pasuje do hexów, które masz. Na marginesie, gracz, który jest bardziej defensywny i zorientowany na eksplorację, będzie kontynuował eksplorację podczas rundy 2 przed wprowadzeniem jakichkolwiek większych zmian do swoich planów. Niektóre przykłady, kiedy potrzebujesz zmienić swoją strategię:</p>
            <p className='guide-tip'><b>Jesteś</b> niski w planetach materiałowych i chciałeś być agresywny, ale nie masz świetnych statków startowych: Spójrz na oszczędzanie na pancernika (wyższa szansa przetrwania, stąd nie potrzebując odbudowywać statków), ulepszaj swój statek aż zwycięstwo jest w 90% pewne, lub złomuj plany militarne i skup się na nauce lub eksploracji ASAP</p>
            <p className='guide-tip'><b>Nie</b> dostajesz planet zasobów, które chciałeś: Zacznij myśleć o orbitalach i czy ta strategia jest opłacalna. Also spójrz na użycie szarych planet do żonglowania twoimi zasobami (tj. przesuń naukę na, odłóż z powrotem na tor materiałów)</p>
            <p className='guide-tip'><b>Nie</b> daj się zwariować w zmianie planów, ale miej to z przodu i w centrum. Czasami najlepszą rzeczą, jaką możesz zrobić, jest trzymanie się tylko twoich najlepszych kilku systemów, przejście wcześnie, gromadzenie zasobów i oszczędzanie na dużą turę, która wyrzuci cię do przodu. Nie myśl, że musisz wydawać swoje zasoby każdej tury! Nigdy nie oszczędzanie zasobów na duże zakupy i wpływanie/kolonizowanie zbyt wielu systemów są częstymi błędami!</p>
            <p className='guide-tip'><b>Teraz</b>, gdy zdecydowałeś o swoim planie na turę, wykonaj go. Skup się tak bardzo, jak możesz i nie próbuj robić "wszystkiego" w jednej turze. Upewnij się, że twoje zasoby są wydawane efektywnie i że korzystasz z twoich akcji za rundę. To tylko druga runda, więc nie jest tak, że inni gracze też mogą robić tony akcji.</p>
          </div>
        </div>

        {/* Trzecia runda */}
        <div className="guide-chapter">
          <h3> Trzecia runda, Zdecyduj o reszcie gry</h3>
          <div className="guide-content">
            <p className='guide-tip'><b>Technicznie</b> nie wybierasz planu, który będzie ci służył przez resztę gry, ale teraz jesteś w stanie zacząć poważnie planować. Jesteśmy w punkcie, gdzie skończysz większość swojej eksploracji, wiesz, jak twoje bitwy (starożytni) pójdą, wyczerpiesz podstawowe opcje startowych technologii, i dostaniesz wyczucie, jak inni gracze grają. W tym momencie są dwie krytyczne rzeczy do zaplanowania przed wzięciem twojej tury.</p>
            <p className='guide-tip'><b>Plan</b> środkowej gry! Weź dobry rzut oka na tablicę technologii, gdzie spodziewasz się mieć bitwy (albo defensywne albo agresywne), jakie zasoby masz, jakie zaawansowane planety masz, i jakie statki chcesz ulepszać. Czasami technologia, której potrzebujesz, aby plan zadziałał, nie ma... im mniejsza gra, tym mniejsza szansa, że pojawi się na czas. Więc weź dobry, trudny rzut oka na przerywanie twojego planu i zmianę go, aby pasował do dostępnych technologii i pracował z tym, co masz. Teraz, czy będziesz potrzebować mieć bazy gwiezdne do obrony, jak silni są wrogowie, których zaatakujesz, jak silne będą potrzebować być twoje statki? To będzie mocno wpływać na to, jakie akcje podejmujesz w kierunku military, jak może całkowicie pominiesz military środkowej gry tak długo, jak to możliwe i skupisz się na ekonomii i poprawianiu tego, co już masz. Zawsze próbuj być tak ekstremalnym, jak możesz w kierunku twojego military, albo unikając go tak bardzo, jak to możliwe, albo idąc za nim tak bardzo, jak to możliwe w środkowej grze. Branie środka drogi nie daje ci przewagi nad innymi graczami. Teraz, czy twoje zasoby wspierają twoje cele?</p>
            <p className='guide-tip'><b>Jeśli</b> jesteś dobry w materiale budowlanym, czy będziesz dostawać orbitule lub budować statki i angażować się w bitwy, gdzie spodziewasz się ofiar? Jeśli nie masz wystarczająco, czy projektujesz statki, aby miały miażdżące zwycięstwo w bitwie (pamiętaj, pancernik może być najlepszym wczesnym statkiem gry dla większości ras), patrzysz na badanie zaawansowanego górnictwa, lub po prostu próbujesz unikać konieczności budowania jakiegokolwiek military?</p>
            <p className='guide-tip'><b>Jeśli</b> jesteś dobry w nauce, czy będzie ona używana do wspierania agresywnych statków środkowej gry (myśl działa plazmowe, komputer, energia, może dodatkowy kadłub) lub do wspierania posuwania twojej ekonomii nawet dalej (więcej zaawansowanych planet, siatka kwantowa, zaawansowana robotyka)? Jeśli nie masz dobrej nauki, czy zamierzasz po prostu oszczędzać na najbardziej krytycznej broni statków i ulepszeniach, które będą ci służyć przez resztę gry, czy będziesz patrzeć na zaawansowane laboratoria?</p>
            <p className='guide-tip'><b>Jeśli</b> jesteś dobry w pieniądzach, czy będziesz bardziej agresywny i atakujący w więcej miejsc, czy weźmiesz systemy bez planet pieniężnych, abyś mógł dostać naukę lub materiały? Jeśli jesteś niski w pieniądzach, czy będziesz brał minimalne akcje, przechodził więcej, badał zaawansowaną ekonomię, badał Zaawansowaną robotykę/siatkę kwantową?</p>
            <p className='guide-tip'><b>Ważną</b> rzeczą jest PRACA Z TYM, CO GRA CI DAJE, i nie próbowanie wymuszać, aby to, co masz, pracowało z twoją strategią. Zmień swoją strategię, jeśli gra wysrała się na ciebie podczas eksploracji hexów. Also, rozważ długo i ciężko efektywność jakichkolwiek ulepszeń statków, które robisz w tym momencie. Czy nadal będziesz używać tych statków pod koniec gry, jak często możesz tylko zmaksymalizować 2 projekty statków, czy twoje ulepszenia statków środkowej gry nadal pozostawią cię z dość łatwym przejściem w projekt statku późnej gry, czy jakiekolwiek ulepszenia statków teraz przyniosą ci znaczącą korzyść przed rundą 6? Po prostu miej na uwadze, że "zmarnowane" akcje w pierwszych 3-4 rundach kosztują cię WIELE akcji w rundzie 7-9.</p>
            <p className='guide-tip'><b>Ten</b> ostatni kawałek prowadzi mnie do późnej gry. Chcesz mieć ogólne pojęcie, gdzie planujesz być w późnej grze, aby twoje akcje środkowej gry pozostawiły cię z rozsądnym przejściem w twoją późną grę. Na przykład, spędzanie dużo czasu na ulepszaniu twojego military środkowej gry i wtedy musząc badać "zduplikowaną" technologię dla późnej gry (tj. lepsza wersja twojego napędu, lepsza wersja twojego źródła energii, ulepszanie i budowanie myśliwców i nie używanie ich późnej gry). Dla bardziej defensywnego gracza, chcesz mieć dobre pojęcie, jak bardzo możesz przesunąć granicę z nieinwestowaniem w military i planować na bycie zaatakowanym wcześniej niż oczekiwano. Jaki jest twój plan zapasowy, aby obronić siebie? Co może być ulepszone z najmniejszym kosztem, aby odstraszyć lub obronić? Bądź BARDZO uważny na pinowanie, szczególnie gdy używasz wirtualnych flot. Zawsze wiedz, jakie statki mogą wejść do jakichkolwiek twoich hexów przed twoją kolejną turą i upewnij się, że masz coś, aby spiąć te statki, zanim będą mogły przejść przez twój najbardziej zewnętrzny system. Czasami to oznacza budowanie w odpowiedzi na ich ruch do systemu, inne razy oznacza budowanie defensywnie przed ich ruchem. Jeśli mają statki, które mogą poruszać się głębiej w twoje terytorium niż twoje najbardziej zewnętrzne hexy, powinieneś poważnie rozważyć mieć statki zbudowane, aby spiąć je na twoich granicach. Nie potrzebują być ulepszone, chyba że zaatakowane.</p>
            <p className='guide-tip'><b>Pamiętaj</b>, że MOŻESZ odzyskać po błędach. To tylko 3. runda. Możesz zrobić kilka błędów i nadal odzyskać. Nie przeciążaj się, jeśli to możliwe, i jeśli to zrobisz, spróbuj znaleźć sposób, aby to zrekompensować w następnej rundzie lub dwóch (tj. pomiń inwestycje military, aby zwiększyć twoją ekonomię), ale nie wyrzucaj statków na ryzykowne bitwy, aby wrócić do przodu.</p>
            <p className='guide-tip'><b>Więc</b>, teraz, gdy omówiliśmy to wszystko, zagrajmy 3. rundę! może być trochę eksploracji (w zależności od twojej rasy i defensywnej postawy) left dla ciebie, lub niektóre bitwy do stoczenia i wygrania. Czasami wpadniesz w pozycję, gdzie lepiej jest po prostu zrobić mało i przejść wcześnie, oszczędzając twoje zasoby. To nie jest zła rzecz! W tym momencie gry, prawdopodobnie nie będziesz miał żadnych elementów PvP, ale będziesz bardzo blisko i możliwie mieć otwarte opcje dyplomatyczne pod koniec walki.</p>
          </div>
        </div>

        {/* Czwarta runda */}
        <div className="guide-chapter">
          <h3> Czwarta runda, Czy możemy utrzymać kurs?</h3>
          <div className="guide-content">
            <p className='guide-tip'><b>Czas</b> zobaczyć, jak rzeczy ułożyły się po trzeciej rundzie! Spójrz, jak twoje plany poszły, etc. Pamiętaj, nadal możesz odzyskać, jeśli rzeczy nie poszły dobrze! Jeśli byłeś po agresywnej stronie, albo popraw swoje military i zapewnij zwycięstwo, albo wstrzymaj się od wszystkich planów military za rundę i odzyskaj. Jeśli jesteś po defensywnej stronie, czy potrzebujesz wejść w jakieś military, czy potrzebujesz zbadać nową technologię dla twojej ekonomii? Ogólnie, powinieneś być w stanie trzymać się Twoich planów, które zrobiłeś w rundzie 3 lub dostosować je nieznacznie. Po prostu pamiętaj, że tracenie statków i nie wygrywanie systemu jest jednym z najszybszych sposobów, aby postawić siebie za, więc po twojej pierwszej druzgocącej porażce, graj ostrożnie.</p>
            <p className='guide-tip'><b>Kiedy</b> twoja ekonomia po prostu nie działa, potrzebujesz rozważyć kilka rzeczy, które możesz zmienić, aby pracować z tym, co masz. (a) Zredukuj liczbę systemów, na które wpłynąłeś, aby być najbardziej efektywnym. (b) Jeśli jakakolwiek wspierająca ekonomię technologia może pomóc ci wyjść z tej koleiny. Jeśli nie ma jej tej rundy, prawdopodobnie nie będzie jej następnej rundy i bądź bardzo niechętny do robienia planów opartych wokół technologii przychodzącej następnej rundy. (c) Jeśli potrzebujesz zbudować statek i coś zaatakować.</p>
            <p className='guide-tip'><b>Dyplomacja</b> powinna też być dobrze przemyślanym aspektem twojej gry teraz. Co możesz zrobić, aby zapobiec graczom w atakowaniu ciebie i co możesz zrobić, aby silni gracze byli atakowani?</p>
            <p className='guide-tip'><b>Zwykle</b> czwarta runda jest rundą dla ataku na Centrum Galaktyki (znowu, nawet nie rozważ używania słabych standardowych GCDS) i gracze powinni być świadomi tego i jak to zmieni pozycję planszy. Czasami możesz czekać, aż zaczną przesuwać statki do środka i wtedy rzucić statek do środka, aby spróbować osłabić ich siłę atakującą do punktu ich przegranej, a inne razy nie możesz zrobić squata. Jeśli jesteś tym, który atakuje rdzeń, upewnij się, że możesz obronić się przed nienawiścią, którą to przyniesie twoją drogę (lub zazdrością, jeśli wolisz to tak nazywać).</p>
          </div>
        </div>

        {/* Piąta i szósta runda */}
        <div className="guide-chapter">
          <h3> Piąta i Szósta runda, PvP zaczyna się? </h3>
          <div className="guide-content">
            <p className='guide-tip'><b>Cóż</b>, w tym momencie, głównym kluczem francuskim do twoich planów będą inni gracze. Dostosuj i dostrajaj swoje plany zgodnie z wymaganiami, aby nie zostawić siebie wrażliwego na innych graczy. Gra staje się tak dynamiczna w tym momencie, że nie mogę zaoferować tak specyficznej rady, ponieważ jest to tak sytuacyjne. Czasami jesteś z tyłu i potrzebujesz po prostu oszczędzać na szybkie "duże uderzenie" badanie, które pozwoli ci wrócić do walki, inne razy po prostu chcesz utwardzić swoje obrony i ukucnąć. W tym momencie, naprawdę powinieneś wziąć swoje rdzeniowe systemy i zdecydować, jak chcesz wchodzić w interakcję z/atakować innych graczy. Jest kilka rzeczy, które chcesz ocenić i mieć na górze umysłu, gdy gracze zaczynają przechodzić w kierunku późnej gry. Runda szósta może czasami być przejściem w Późną grę, inne razy runda siódma.</p>
            <p className='guide-tip'><b>Miej</b> oko na to, co inni gracze MOGĄ zrobić i ich potencjał. Na przykład, Rho Indi nie dostają pancerników, więc chcą nękać i uszkadzać ekonomię gracza i (miejmy nadzieję) zabijać niektóre statki, aby powstrzymać ich od bycia zdolnymi do pozwolenia sobie na pancernika późnej gry. Rasy jak Planta i Hydran Progress mogą potrzebować agresywnego "wyboju drogowego" w formie kilku statków zabierających sektory od nich. Zrobienie właściwego sojusznika lub bycie "pokojowym" w właśnie właściwy sposób może pozwolić ci rozkwitnąć i być walczącym konkurentem (nawet jeśli to oznacza defensywnie), gdy późna gra nadejdzie. Naprawdę potrzebujesz być świadomy, jacy gracze mogliby zrujnować twój dzień i przygotować się najlepiej, jak możesz, aby kontrować lub bronić.</p>
            <p className='guide-tip'><b>Zobacz</b>, czy ludzie zaczynają pokazywać swoje projekty statków na późną grę. Chociaż większość graczy nie zdradzi swojego projektu późnej gry zbyt wcześnie, chcesz mieć oko na wskazówkę, abyś mógł zobaczyć, czy wysoce agresywne statki oparte na działach, floty rakiet, defensywny kadłub, lub statki ciężkie w tarcze są drogą do pójścia. Na szczęście RotA zapewnia dużo rzadkich technologii, które sprawiają, że nie-rakietowe projekty są opłacalne vs projekty rakiet... ale tylko jeśli wyjdą i gracz z rakietami nie może ich zbadać!</p>
          </div>
        </div>

        {/* Siódma runda */}
        <div className="guide-chapter">
          <h3> Siódma Runda, więc wchodzi Późna gra </h3>
          <div className="guide-content">
            <p className='guide-tip'><b>W</b> tym momencie gry, albo już przegrałeś i masz nadzieję (a) ktoś zrobi błąd lub (b) aspekt PvP zadziała na twoją korzyść, albo wyglądasz całkiem nieźle. Dyplomacja staje się kluczowa w wielu grach, jeśli nie jesteś jednym z militarnych liderów (notka, nie musisz mieć najlepszych statków teraz, jeśli zbudowałeś ekonomię, aby wspierać szybkie przejście w statki późnej gry).</p>
            <p className='guide-tip'><b>Podczas</b> tej rundy, chcesz być ponownie oceniającym twoje plany późnej gry i zamieniać je z "w przybliżeniu" na "głównie." Powód, dla którego mówię "głównie" jest taki, że wciąż jest dużo czasu dla graczy, aby zmienić swoje projekty statków i ktokolwiek, kto kończy walcząc w ostatnich 3 rundach, potrzebuje być zdolnym do dostosowania swojego kierunku działania w odniesieniu do budowania statków, aby kontrować tych, z którymi będziesz walczyć. Oczywiście, zawsze jest opcja po prostu próbowania wejścia z jak największą liczbą statków z bombami neutronowymi i nie obchodzi cię wygrywanie walk.</p>
            <p className='guide-tip'><b>Dyplomacja</b> jest kluczowa, i nie tylko w konwencjonalnym sensie, ale także w sensie wiedzy, jak dyplomacja NIE zadziała z! (Albo może ty jesteś tym, który nie chce dyplomacji i po prostu chce zaatakować KAŻDEGO!)</p>
            <p className='guide-tip'><b>Nie</b> powinno być dużego skupienia na ekonomii, ponieważ powinieneś mieć ją ustawioną na resztę gry, ale będziesz myślał o rzeczach takich jak Orbitule, Monolity, Klucz Artefaktów, i (najważniejsze) jak oszczędzać/gromadzić akcje na Rundę 8 i 9. Tak, potrzebujesz planować na rundę 8 i 9, ponieważ będzie się działo DUŻO i możesz zostać złapany w ten wir galaktyki. Zacznij myśleć o maksymalizowaniu dysków wpływów, które masz dostępne na początku twojej tury i gromadzeniu zasobów na najbardziej efektywne zakupy lub dodatkowe akcje.</p>
          </div>
        </div>

        {/* Ósma runda */}
        <div className="guide-chapter">
          <h3> Ósma Runda, Przygotuj się na dziewiątą </h3>
          <div className="guide-content">
            <p className='guide-tip'><b>Po</b> prostu, ósma runda jest cała o przygotowaniu na ostatnią rundę (dziewiątą). Są niektóre wyjątki i niektóre strategie, ale ogólnie, próbuj zostawić sobie tak wiele akcji na rundę 9, planuj Z WYPRZEDZENIEM, na co możesz sobie pozwolić, aby kupić (technologie i statki), więc nie robisz planów tylko po to, aby odkryć, że nie możesz sobie na nie pozwolić.</p>
            <p className='guide-tip'><b>Nawet</b> jeśli jesteś po agresywnej stronie, nie przeciążaj siebie w rundzie 8 tak, że stracisz to, co zyskałeś. Na odwrót, jeśli możesz okaleczyć swojego przeciwnika w rundzie 8 (lub 7), to może często być dużo tańsze i bardziej udane niż czekanie do rundy 9. Jako bardziej defensywny gracz, tylko musząc bronić siebie powinno wykoleić jakiekolwiek plany, aby wziąć to łatwo i przygotować się na dziewiątą. Bardzo ważną strategią jest pinowanie statków i nie bój się pinować statków wroga w ich WŁASNYM terytorium! Zamiast czekać na walkę, która przyjdzie do ciebie, wyślij statki w ich przestrzenie, aby je spiąć i zapobiec ruchowi w twoją przestrzeń. Twoje statki mogą być słabe i cierpieć szybką porażkę, ale jeśli walczą w swoim własnym systemie, nie mogą wziąć twojego!</p>
          </div>
        </div>

        {/* Dziewiąta runda */}
        <div className="guide-chapter">
          <h3> Ósma Dziewiąta, Zwycięzca się pojawia </h3>
          <div className="guide-content">
            <p className='guide-tip'><b>Gracze</b>, którzy planowali na rundę 9 z wyprzedzeniem, są często tymi, którzy korzystają najbardziej (lub po prostu głupi szczęśliwy farciarz, który rzuca 6ki cały czas i dostał niesamowite hexy, ale większość czasu nie grałeś wystarczająco dobrze). Prosta rada na rundę dziewiątą i wtedy reszta zależy od ciebie, aby grać, jak uznasz za stosowne.</p>
            <p className='guide-tip'><b>Używaj</b> akcji wpływów zgodnie z wymaganiami, aby zrzucić systemy 1PV, aby uwolnić akcje, i brać bardziej wartościowe systemy.</p>
            <p className='guide-tip'><b>Systemy</b>, gdzie spodziewasz się przegrać walki, uwolnią dyski wpływów pod koniec walki, więc idź i przeciąż się tylko trochę...</p>
            <p className='guide-tip'><b>Używaj</b> pinowania statków na twoją korzyść tak bardzo, jak to możliwe!</p>
          </div>
        </div>

        {/* Refleksje końcowe */}
        <div className="guide-chapter">
          <h3></h3>
          <div className="guide-conclusion">
            <p>Po pewnym namyśle, poczułem, jak dodanie małej osobistej notki na końcu.</p>
            <p>-Zawsze rozważ granie w Eclipse, aby cieszyć się graniem w to. Jeśli nie potrzebujesz wygrywać, aby cieszyć się, wtedy nie czuj, że musisz grać, aby wygrać.</p>
            <p>-Zawsze rozważ, że Eclipse nie jest zabawne, jeśli nie masz z kim grać, więc upewnij się, że pomagasz innym ludziom też bawić się grając (nawet jeśli to oznacza przegrywanie)</p>
            <p>-Jeśli znajdziesz, że twoja grupa jest zbyt pasywna PvE, wtedy prowokuj trochę PvP lub znajdź osobę lub dwie w twojej grupie, aby pomóc ci stworzyć chaos w galaktyce!</p>
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

// PORADNIK 7: Dlaczego wiele Starożytnych to dobry początek
const Guide7Content = () => {
  return (
    <div className="guide-article">
      <div className="guide-article-header">
        <div className="guide-credits">
          <p><strong>Autor:</strong> Anonimowy ekspert Eclipse</p>
          <p>
            <strong>Źródło:</strong>{' '}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="guide-source-link"
            >
              BoardGameGeek - Why many Ancients is a good start
            </a>
          </p>
        </div>
      </div>

      <div className="guide-intro">
        <p>Jednym z najczęstszych pytań i skarg jakie słyszę o Eclipse jest "Totalnie zniszczył mnie losowy dobór, bo dostałem same Starożytnych.". Początkujący zwykle wpadają w desperację w tym momencie i bardziej lub mniej rezygnują lub zaczynają popełniać błędy które sprawiają, że ta myśl staje się samospełniającą się przepowiednią.</p>
        <div className="guide-note">
          <strong>🎯 Cel poradnika:</strong> Ponieważ w tej sytuacji prawdopodobnie będziesz musiał zrobić kilka kontrintuicyjnych rzeczy, aby faktycznie zamienić grę w zwycięstwo, chciałem spisać moje przemyślenia dla Ciebie.
        </div>
      </div>

      <div className="guide-chapters">
        {/* Założenia */}
        <div className="guide-chapter">
          <h3>🎯 Założenia poradnika</h3>
          <div className="guide-content">
            <p>Podczas gdy wiele z tych rad działa przy większości liczby graczy i kombinacji materiałów z dodatków, Twoje doświadczenie może się różnić w przypadku niektórych z nich. Dla celów poradnika zakładam, że używasz:</p>

            <div className="guide-grid">
              <div className="guide-tip">
                <h5>Gra</h5>
                <p>6 graczy, wszystkie rasy</p>
              </div>
              <div className="guide-tip">
                <h5>Hexy</h5>
                <p>Wszystkie oprócz Krążowników Starożytnych i Ulów Starożytnych</p>
              </div>
              <div className="guide-tip">
                <h5>Technologie</h5>
                <p>Wszystkie rzadkie technologie i odkrycia</p>
              </div>
              <div className="guide-tip">
                <h5>Warianty</h5>
                <p>Wariant kolejności tur i sektorów warp przy mniejszej liczbie graczy</p>
              </div>
            </div>
          </div>
        </div>

        {/* Częste błędne przekonania */}
        <div className="guide-chapter">
          <h3>🚫 Częste błędne przekonania</h3>
          <div className="guide-content">
            <p>Eclipse to wyjątkowa gra pod wieloma względami i niektóre rzeczy nie wydają się oczywiste, gdy jesteś przyzwyczajony do innych gier strategicznych.</p>

            <div className="guide-principles">
              <div className="guide-principle">
                <h4>1. To gra wzrostu 🚫</h4>
                <p><strong>Błędne przekonanie:</strong> "W grach wzrostu przegrasz, jeśli rozpoczniesz swój wzrost rundę później niż inni"</p>
                <p><strong>Prawda:</strong> Eclipse ma silniki ekonomiczne z malejącymi zwrotami. Kupujesz więcej produkcji kosztem większej liczby dysków na planszy i większych kosztów utrzymania. Prawie wszystkie sposoby punktowania mają maksymalny możliwy wynik.</p>
                <div className="guide-note">
                  Twoje punkty w pewnym momencie osiągną maksimum i niewiele znaczy, czy udało Ci się zdobyć górne 30 punktów w rundzie 7, czy dołączyłeś później i zdobyłeś swoje końcowe punkty dopiero w rundzie 9.
                </div>
              </div>

              <div className="guide-principle">
                <h4>2. Więcej akcji = zawsze lepiej 🚫</h4>
                <p><strong>Błędne przekonanie:</strong> "Musisz maksymalizować liczbę akcji w każdej rundzie"</p>
                <p><strong>Prawda:</strong> W Eclipse znacznie ważniejsze jest wykonywanie akcji we właściwym momencie gry i w pełnym efektem. Ważne jest, aby nie marnować akcji. Jeśli na przykład użyjesz akcji budowy, aby zbudować tylko jeden statek, prawdopodobnie jesteś rozrzutny i powinieneś dobrze rozumieć, dlaczego warto zmarnować tę akcję.</p>
              </div>

              <div className="guide-principle">
                <h4>3. Istnieje zwycięska strategia 🚫</h4>
                <p><strong>Błędne przekonanie:</strong> "Mogę przyjść do gry z gotowym planem i go zrealizować"</p>
                <p><strong>Prawda:</strong> W Eclipse jest to bardzo mało prawdopodobne. Nigdy nie powinieneś zamykać się w planie gry, zanim nie poznasz swojej sytuacji w zakresie systemów, zasobów i połączeń. Informacje te zwykle nie są kompletne przed rundą 2 lub nawet 3.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Główna strategia */}
        <div className="guide-chapter">
          <h3>🎯 Główna strategia - konkretne porady</h3>
          <div className="guide-content">
            <p><strong>Sytuacja:</strong> Właśnie wykonałeś swoje cztery bezpośrednio dostępne eksploracje i w czwartej wylosowałeś Starożytnego, tak jak w trzech pierwszych. Co powinieneś zrobić?</p>

            <div className="guide-steps">
              {/* Krok 0 */}
              <div className="guide-step">
                <h4>Krok 0 (opcjonalny)</h4>
                <p>Zatańcz mały szczęśliwy taniec w swojej głowie. Chyba że Twoi sąsiedzi są ekstremalnie dobrzy lub chciwi na polowanie na "Twoich" Starożytnych, właśnie wygrałeś grę i nikt jeszcze o tym nie wie.</p>
              </div>

              {/* Krok 1 */}
              <div className="guide-step">
                <h4>Krok 1 - Decyzja o odrzuceniu</h4>
                <p>Zdecyduj, czy chcesz odrzucić tego czwartego Starożytnego, czy nie. Wszystkie rasy mogą łatwo poradzić sobie z 3 Starożytnymi, niektóre nie mogą sobie pozwolić na radzenie sobie z czterema.</p>

                <div className="guide-grid">
                  <div className="guide-tip">
                    <h5>Gram Planta?</h5>
                    <p>Jeśli tak i to blokuje twoje ostatnie wyjście eksploracji Pierścienia III, powinieneś odrzucić. Planta wymaga dużego "podwórka" systemów Pierścienia III.</p>
                  </div>
                  <div className="guide-tip">
                    <h5>Mam wystarczającą produkcję?</h5>
                    <p>Potrzebujesz 6-12 nauki od rundy 2 i możliwość zbudowania 2 krążowników do rundy 3. Jeśli możesz to zrobić, zachowaj czwartego Starożytnego.</p>
                  </div>
                </div>
              </div>

              {/* Krok 2 */}
              <div className="guide-step">
                <h4>Krok 2 - Wczesne pasowanie</h4>
                <p><strong>Przejdź wcześniej i bądź cierpliwy.</strong> Absolutnie potrzebujesz technologii, aby poradzić sobie ze Starożytnymi. Oznacza to, że musisz być pierwszym, który spasuje, aby dostać pierwszy wybór technologii w następnej rundzie.</p>
                <div className="guide-warning">
                  Miałem gry, w których nigdy nie wykonałem więcej niż jednej akcji w rundach 2, 3 i 4 i nadal je wygrywałem. Później docenisz mały dodatkowy zapas pieniędzy, który to dla Ciebie zbuduje.
                </div>
              </div>

              {/* Krok 3 */}
              <div className="guide-step">
                <h4>Krok 3 - Święta Trójca Technologii</h4>
                <p>Kupuj technologię w tej kolejności priorytetów:</p>

                <div className="guide-grid">
                  <div className="guide-tip">
                    <h5>3a - Technologie</h5>
                    <p><strong>Święta Trójca:</strong> "Ulepszony Kadłub", "Tarcza Gaussa" i "Działa Plazmowe" - w tej kolejności. Absolutnie potrzebujesz jednej z trzech.</p>
                  </div>
                  <div className="guide-tip">
                    <h5>3b - Budowa</h5>
                    <p><strong>2 krążowniki</strong> - najlepiej w jednej akcji. Większość ras powinna być w stanie zbudować jeden krążownik w rundzie 2, 2 z nich do rundy 3.</p>
                  </div>
                  <div className="guide-tip">
                    <h5>3c - Ulepszenia</h5>
                    <p><strong>Ulepsz projekty statków</strong> z nowymi technologiami - najlepiej w jednej akcji.</p>
                  </div>
                </div>

                <div className="guide-note">
                  <strong>Szanse walki:</strong><br />
                  • 2 krążowniki bez ulepszeń: 70% szans przeciw Starożytnemu<br />
                  • 2 krążowniki z tarczą Gaussa i ulepszonym kadłubem: 98% szans<br />
                  • 1 krążownik ze wszystkimi trzema technologiami: 96% szans
                </div>
              </div>

              {/* Krok 4 */}
              <div className="guide-step">
                <h4>Krok 4 - Priorytetyzacja systemów</h4>
                <p>Zacznij eliminować Starożytnych w tej kolejności:</p>
                <ol>
                  <li><strong>Najpierw</strong> te, które dają Ci największą bezpośrednią korzyść produkcyjną</li>
                  <li><strong>Następnie</strong> te najbardziej zagrożone przez sąsiadów</li>
                  <li><strong>Potem</strong> te, które pozostawiają najkrótszą drogę do następnego systemu</li>
                  <li><strong>Na końcu</strong> pojedynczych Starożytnych przed podwójnymi</li>
                </ol>
                <p>W porządku jest, jeśli nie zaczniesz tego przed rundą 3 i jeśli uda Ci się zająć tylko jednego na rundę na początku.</p>
              </div>

              {/* Krok 5 */}
              <div className="guide-step">
                <h4>Krok 5 - Odkrycia</h4>
                <p>Prawdopodobnie będzie tura 4 lub 5, czasami nawet 6 lub 7, zanim wyeliminujesz ostatniego ze Starożytnych. Prawie żadne skarby odkryć nie są warte więcej niż 2 PV w tym momencie.</p>
                <div className="guide-note">
                  Istnieją wyjątkowe sytuacje, ale generalnie chcesz 2 PV.
                </div>
              </div>

              {/* Krok 6 */}
              <div className="guide-step">
                <h4>Krok 6 - Ciesz się korzyściami</h4>
                <p>Oprócz systemu macierzystego zyskujesz:</p>

                <div className="guide-grid">
                  <div className="guide-tip">
                    <h5>8 PV</h5>
                    <p>w odkryciach (20% przyzwoitego zwycięskiego wyniku)</p>
                  </div>
                  <div className="guide-tip">
                    <h5>8+ PV</h5>
                    <p>w terytorium (kolejne 20%)</p>
                  </div>
                  <div className="guide-tip">
                    <h5>8-12 PV</h5>
                    <p>z walk (kolejne 20%)</p>
                  </div>
                  <div className="guide-tip">
                    <h5>Imperium 5-hexów</h5>
                    <p>składające się głównie z systemów 2+ planet</p>
                  </div>
                </div>

                <div className="guide-final-note">
                  <strong>Łącznie:</strong> Około 30 PV tylko z tego. Tylko 5-10 PV z nauki da Ci wynik, który ma szansę na wygraną w większości gier.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Opcjonalne ulepszenia */}
        <div className="guide-chapter">
          <h3>⚡ Opcjonalne ulepszenia</h3>
          <div className="guide-content">
            <p>Możesz chcieć zainwestować w tani napęd lub nawet tanie źródło energii, aby być bardziej wydajnym w przemieszczaniu krążowników do wykańczania Starożytnych, a także móc strzelać pierwszy.</p>
            <div className="guide-warning">
              Ale to tylko wtedy, gdy masz jakieś zasoby i akcje do wydania na to.
            </div>

            <p>Oczywiście cały poradnik opiera się na tym, że Twoi przeciwnicy nie doceniają Twoich szans i pozostawiają Cię tu samemu sobie. W przypadku kompetentnych przeciwników spodziewaj się, że ukradną Ci przynajmniej jeden z hexów.</p>

            <div className="guide-tip">
              <h5>Strategia obronna</h5>
              <p>Możesz utrudnić im tę kradzież, umieszczając swoje połączenia w sposób, który blokuje sąsiadów, którzy mogą być w stanie i chętni do sięgnięcia po "Twoich" Starożytnych.</p>
            </div>
          </div>
        </div>

        {/* Specyfika ras */}
        <div className="guide-chapter">
          <h3>👽 Specyfika rasowa</h3>
          <div className="guide-content">
            <p>Przyjrzyjmy się niektórym bardziej zależnym od rasy punktom.</p>

            <div className="guide-grid">
              <div className="guide-tip">
                <h5>Potomkowie Draco</h5>
                <p>Oczywiście uwielbiasz ten start. Nic więcej do powiedzenia.</p>
              </div>

              <div className="guide-tip">
                <h5>Oświeceni Lyry</h5>
                <p>Jesteś wśród bardziej poszkodowanych tym startem. Musisz wyeliminować przynajmniej jednego ze Starożytnych do końca rundy 4 lub zabraknie Ci planet pod twoje świątynie.</p>
              </div>

              <div className="guide-tip">
                <h5>Imperium Eridani</h5>
                <p>Zaczynasz z 2 technologiami Świętej Trójcy. Prawdopodobnie jest to jeden z najsilniejszych startów, jakie możesz dostać. Rozważ nawet handel pieniędzmi za materiały, aby zbudować pancernika i zacząć sprzątać w rundzie 1.</p>
              </div>

              <div className="guide-tip">
                <h5>Wygnańcy</h5>
                <p>Dzięki urządzeniom maskującym masz opcję umieszczenia myśliwca w systemie z "Pojedynczym Starożytnym" i eksploracji poza nim, a nawet uratowania myśliwca. To kosztowne.</p>
              </div>
            </div>

            <div className="guide-grid">
              <div className="guide-tip">
                <h5>Magellanie</h5>
                <p>Z zasobami statku kolonizacyjnego możesz łatwo mieć 2 krążowniki na planszy w rundzie 2 i czerpać wielkie korzyści z odkryć.</p>
              </div>

              <div className="guide-tip">
                <h5>Postępowi Hydranie</h5>
                <p>Z tylko 2 materiałami startowymi i 2 na rundę będziesz miał trudności z postawieniem drugiego krążownika wystarczająco wcześnie. Ale z łatwością zdobędziesz 2 lub nawet 3 technologie Świętej Trójcy, aby to zrównoważyć.</p>
              </div>

              <div className="guide-tip">
                <h5>Mechanema</h5>
                <p>Nawet bez zdobywania jakiejkolwiek technologii, możesz mieć dwa krążowniki w turze 3 i zacząć sprzątać. Twój +2 do komputera daje dwóm krążownikom 93% szans na pokonanie Starożytnego.</p>
              </div>

              <div className="guide-tip">
                <h5>Hegemonia Oriona</h5>
                <p>Zaczynasz z prawie wszystkim, czego potrzebujesz, aby zacząć sprzątać Starożytnych w rundzie 1. Możesz rozważyć zatańczenie szczęśliwego tańca w rzeczywistości, a nie w głowie, gdy wylosujesz tego czwartego Starożytnego.</p>
              </div>
            </div>

            <div className="guide-grid">
              <div className="guide-tip">
                <h5>Planta</h5>
                <p>Jak wspomniano, jesteś jedyną rasą, która prawdopodobnie zostanie bardziej poszkodowana niż zyska na tym starcie. Więc prawdopodobnie chcesz odrzucić swojego czwartego Starożytnego.</p>
              </div>

              <div className="guide-tip">
                <h5>Syndykat Rho Indi</h5>
                <p>Zaczynasz z dodatkową inicjatywą i jedną trzecią Świętej Trójcy już zawartą w twoich planach. Prawdopodobnie będziesz potrzebować kolejnej, ponieważ będziesz miał trudności z postawieniem drugiego krążownika do rundy 3.</p>
              </div>

              <div className="guide-tip">
                <h5>Terranie</h5>
                <p>Cóż, z łatwością masz dwa krążowniki na planszy do rundy 3 i masz naukę, aby mieć dowolne 2 technologie Świętej Trójcy do tego czasu, więc po prostu trzymaj się planu.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Podsumowanie */}
        <div className="guide-chapter">
          <h3>💭 Zakończenie</h3>
          <div className="guide-content">
            <div className="guide-final-tip">
              <h4>Uwielbiam dostawać wielu Starożytnych na start</h4>
              <p>Wierzę, że jest to jeden z najsilniejszych startów w grze. Jeśli jestem w grze i ktoś narzeka na ten start, zawsze oferuję zamianę miejsc z nimi, jeśli są niezadowoleni. Niewiele osób jest skłonnych dokonać tej wymiany po raz drugi.</p>
            </div>

            <div className="guide-conclusion">
              <h3>🏆 Powodzenia w podboju galaktyki!</h3>
              <p>Pamiętaj - Starożytni to nie przekleństwo, ale błogosławieństwo w przebraniu. Naucz się wykorzystywać tę sytuację na swoją korzyść!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// PORADNIK 8: Krzywa uczenia się w Eclipse
const Guide8Content = () => {
  return (
    <div className="guide-article">
      <div className="guide-article-header">
        <div className="guide-credits">
          <p><strong>Autor:</strong> Doświadczony gracz Eclipse</p>
          <p>
            <strong>Źródło:</strong>{' '}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="guide-source-link"
            >
              BoardGameGeek - The Eclipse Learning Curve
            </a>
          </p>
        </div>
      </div>

      <div className="guide-intro">
        <p>Z czasem towarzyszyłem wielu graczom w ich krzywych uczenia się w Eclipse i miałem okazję grać z niektórymi osobami z innych grup, które były na tyle miłe, że podzieliły się ze mną swoimi doświadczeniami w nauce.</p>
        <div className="guide-note">
          <strong>🎯 Cel poradnika:</strong> Podzielić się przemyśleniami na temat typowych krzywych uczenia się i etapów w Eclipse na podstawie obserwacji wielu graczy.
        </div>
      </div>

      <div className="guide-chapters">
        {/* Wprowadzenie */}
        <div className="guide-chapter">
          <h3>📈 Krzywa uczenia się - przegląd</h3>
          <div className="guide-content">
            <p>Zgrubnie sortuję etapy nauki na "Pierwszą Grę", "Wczesną Krzywą", "Środkową Krzywą" i "Wypłaszczenie".</p>

            <div className="guide-grid">
              <div className="guide-tip">
                <h5>Pierwsza Gra</h5>
                <p>Zapoznanie z mechanikami i podstawowymi zasadami</p>
              </div>
              <div className="guide-tip">
                <h5>Wczesna Krzywa</h5>
                <p>Oduczanie błędnych przekonań z innych gier</p>
              </div>
              <div className="guide-tip">
                <h5>Środkowa Krzywa</h5>
                <p>Zrozumienie zaawansowanych strategii</p>
              </div>
              <div className="guide-tip">
                <h5>Wypłaszczenie</h5>
                <p>Mistrzostwo i finezyjna gra</p>
              </div>
            </div>

            <div className="guide-warning">
              <strong>⚠️ Uwaga:</strong> Twoje doświadczenie może się różnić, ponieważ gracze mają różne preferencje i osobowości, a grupy gry są tak zróżnicowane i unikalne, jak są liczne.
            </div>
          </div>
        </div>

        {/* Pierwsza Gra */}
        <div className="guide-chapter">
          <h3>🎮 Pierwsza Gra</h3>
          <div className="guide-content">
            <p>Największa zmienność tutaj będzie, jeśli jesteś częścią grupy, która jest w większości lub całkowicie nowa w grze, lub jeśli jesteś jedynym nowym graczem w grupie, która jest bardziej zaawansowana.</p>

            <div className="guide-grid">
              <div className="guide-tip">
                <h5>Nowa Grupa</h5>
                <p>Spodziewaj się dużego przeszukiwania zasad i dyskusji. Na pewno popełnicie kilka błędów zasad między sobą.</p>
              </div>
              <div className="guide-tip">
                <h5>Samotny Nowicjusz</h5>
                <p>Gra może być nieco przytłaczająca. Zwłaszcza z co najmniej 30 minutami wyjaśnień zasad rzeczy będą wydawać się dużo.</p>
              </div>
            </div>

            <h4>Wskaźniki dobrej pierwszej gry:</h4>
            <ul>
              <li><strong>20 punktów</strong> - dobre pierwsze zrozumienie gry</li>
              <li><strong>30+ punktów</strong> - wyjątkowo dobra pierwsza gra</li>
            </ul>

            <div className="guide-note">
              <strong>💡 Zalecenie:</strong> Zawsze wprowadzam nowych graczy do gry "Wszyscy Terranie", ponieważ daje im to najwięcej okazji do uczenia się nie tylko z własnych działań i konsekwencji, ale także obserwowania, jak inni radzą sobie z porównywalnymi umiejętnościami.
            </div>
          </div>
        </div>

        {/* Wczesna Krzywa */}
        <div className="guide-chapter">
          <h3>📚 Wczesna Krzywa</h3>
          <div className="guide-content">
            <p>Wczesna krzywa uczenia się charakteryzuje się wieloma bardzo zrozumiałymi nieporozumieniami na temat tego, czym jest Eclipse jako gra, i powolnym oduczaniem kawałek po kawałku, jak doświadczenia z innych gier mogą nie przenosić się tak łatwo, jak mogłoby się początkowo wydawać.</p>

            <div className="guide-principles">
              <div className="guide-principle">
                <h4>Eclipse jako Gra Ekonomiczna 💰</h4>
                <p><strong>Typowe przekonania:</strong></p>
                <ul>
                  <li>Wygrywasz i przegrywasz na podstawie swojego silnika ekonomicznego</li>
                  <li>Dostawanie Starożytnych to pech</li>
                  <li>Atakowanie Graczy to marnowanie zasobów</li>
                  <li>Atakuj tylko z idealnymi projektami statków</li>
                </ul>
                <p><strong>Rezultat:</strong> Gry, w których turtling jest powszechny i gdzie połączenia z innymi graczami są unikane, gdziekolwiek to możliwe. Większość walk PVP zdarza się tylko w ostatniej rundzie.</p>
              </div>

              <div className="guide-principle">
                <h4>Uczenie się o Rasach 👽</h4>
                <p><strong>Typowe przekonania:</strong></p>
                <ul>
                  <li>Każda rasa ma określony styl gry i jeśli chcesz wygrać, musisz go przestrzegać</li>
                  <li>Szczęście w losowaniu decyduje o grze</li>
                </ul>
                <p><strong>Rezultat:</strong> Gracze zaczynają myśleć o grze jako o zagadce do rozwiązania. Gdyby tylko odkryli idealny styl gry dla rasy i mieli szczęście zdobyć do niego narzędzia, wygrają grę.</p>
              </div>

              <div className="guide-principle">
                <h4>Wojna, po co to komu? ⚔️</h4>
                <p><strong>Typowe przekonania:</strong></p>
                <ul>
                  <li>Nie zaczynaj wojny, jeśli nie jesteś w stanie jej zakończyć</li>
                  <li>Przytłaczające liczby są konieczne</li>
                  <li>Wojna prowadzi tylko do wygranej śmiejącego się trzeciego gracza</li>
                  <li>Mobilność to marnowanie czasu</li>
                  <li>Rakiety są przeładowane</li>
                </ul>
                <p><strong>Rezultat:</strong> Faza ta często widzi więcej wczesnych prób walk PVP niż wcześniej. Jednak obie strony zgadzają się, że każda wojna jest wojną na wyniszczenie.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Środkowa Krzywa */}
        <div className="guide-chapter">
          <h3>🎯 Środkowa Krzywa</h3>
          <div className="guide-content">
            <p>Do tego punktu wiele rozwoju umiejętności i zrozumienia jest napędzanych głównie przez popełnianie błędów i uczenie się na nich. Duża różnica w stosunku do wczesnej krzywej polega na tym, że ogólnie "podstawowe przekonania", które pojawiają się w tych fazach, uważam za "dokładne".</p>

            <div className="guide-principles">
              <div className="guide-principle">
                <h4>Zrozumienie Wczesnej Gry 🚀</h4>
                <p><strong>Typowe przekonania:</strong></p>
                <ul>
                  <li>Ważne jest tworzenie połączeń dla relacji dyplomatycznych</li>
                  <li>Zdobywanie systemów Starożytnych to dobra rzecz</li>
                  <li>Ważniejsze jest wykonanie akcji dla pełnego efektu niż wczesne jej wykonanie</li>
                  <li>Odkrycia są sytuacyjne</li>
                </ul>
                <p><strong>Rezultat:</strong> Gracze podejmują dobre decyzje dotyczące przygotowania do atakowania Starożytnych i zwykle widzi się tylko próby podejmowania ich, które mają dobrze ponad 90% wskaźników sukcesu.</p>
              </div>

              <div className="guide-principle">
                <h4>Zrozumienie Ograniczonych Starć 🤝</h4>
                <p>Eclipse robi wszystko, aby "utrata systemu" nie była wielką sprawą. Nadal otrzymujesz produkcję z systemu w tej rundzie i oszczędzasz koszt utrzymania dysku.</p>
                <p><strong>Typowe przekonania:</strong></p>
                <ul>
                  <li>Utarta systemu to nic wielkiego</li>
                  <li>Mściwość jest przeciwieństwem gry do wygrania</li>
                  <li>Dążenie do eliminacji gracza to marnowanie</li>
                  <li>Cięcie strat jest akceptowalną strategią</li>
                </ul>
              </div>

              <div className="guide-principle">
                <h4>Zrozumienie Tymczasowych Przewag ⚡</h4>
                <p>W pewnym momencie niektórzy gracze zaczynają zdawać sobie sprawę, że czasami mają przewagę. Może mają lepszą broń, a sąsiad nie ma jeszcze dobrego kadłuba, może akurat mają kilka dodatkowych statków, których drugi nie może jeszcze dorównać liczebnie.</p>
                <p><strong>Typowe przekonania:</strong></p>
                <ul>
                  <li>Posiadanie niektórych statków już na planszy jest ważne</li>
                  <li>Posiadanie niektórych ulepszeń już na planach jest ważne</li>
                  <li>Napędy są ważne, ponieważ ułatwiają dotarcie tam, gdzie można uzyskać przewagę</li>
                  <li>Jeśli mam przewagę, muszę jej użyć TEJ rundy</li>
                </ul>
              </div>

              <div className="guide-principle">
                <h4>Zrozumienie "Kopania w Górę" 🎯</h4>
                <p>Wcześnie w krzywej uczenia się ludzie będą mieli tendencję do "kopania w dół" w wyborze celów. Wierzą, że atakują innego gracza głównie po to, aby samemu uzyskać dostęp do zasobów.</p>
                <p><strong>Typowe przekonania:</strong></p>
                <ul>
                  <li>Punkty netto są ważne (tj. kopanie w górę zamiast kopania w dół)</li>
                  <li>Dobre umiejętności czytania planszy są ważne</li>
                </ul>
                <div className="guide-note">
                  <strong>Matematyka punktów netto:</strong> Każdy punkt, który zabierasz graczowi, który radzi sobie gorzej niż ty, to 1 PV w kierunku twojej wygranej. Każdy punkt, który zabierasz osobie, która radzi sobie lepiej niż ty, to 2 PV w kierunku twojej wygranej.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wypłaszczenie */}
        <div className="guide-chapter">
          <h3>🏆 Wypłaszczenie</h3>
          <div className="guide-content">
            <p>Gdy gracz lub grupa ma dobre zrozumienie wszystkich faz i przekonań środkowej krzywej, czuję, że krzywa uczenia się znacząco się spłaszcza i wygrywanie gier staje się dużo bardziej ćwiczeniem z gry niż wykorzystywaniem różnic w zrozumieniu gry.</p>

            <div className="guide-final-tip">
              <h4>Ostateczne podstawowe przekonania:</h4>
              <ul>
                <li><strong>Nie ma szczęścia w losowaniu</strong>, są tylko złe wybory dotyczące adaptacji do twojej sytuacji</li>
                <li><strong>Nie ma szczęścia w kościach</strong>, jest tylko złe przygotowanie do walki i nad/podzaangażowanie</li>
                <li><strong>Jedna na dwadzieścia gier</strong> całkowicie wyrzuci te dwa przekonania przez okno i sprawi, że zdobędziesz mniej niż 20 punktów, gdy absolutnie wszystko pójdzie tak źle, jak tylko może</li>
              </ul>
            </div>

            <div className="guide-grid">
              <div className="guide-tip">
                <h5>Doświadczenie vs Szczęście</h5>
                <p>Doświadczeni gracze rozumieją, że adaptacja jest kluczowa, a nie ślepe podążanie za strategią</p>
              </div>
              <div className="guide-tip">
                <h5>Przygotowanie vs Losowość</h5>
                <p>Dobre przygotowanie do walk minimalizuje wpływ losowości kości</p>
              </div>
              <div className="guide-tip">
                <h5>Rzadkie Katastrofy</h5>
                <p>Nawet najlepsi gracze czasami mają gry, gdzie wszystko idzie nie tak</p>
              </div>
            </div>
          </div>
        </div>

        {/* Podsumowanie */}
        <div className="guide-chapter">
          <h3>💭 Podsumowanie</h3>
          <div className="guide-content">
            <div className="guide-conclusion">
              <h3>🎲 Refleksje końcowe</h3>
              <p>Mam nadzieję, że znajdziesz coś interesującego w tych rozmyślaniach i zastanawiam się:</p>

              <div className="guide-questions">
                <div className="guide-question">
                  <h5>Co sądzisz na ten temat?</h5>
                  <p>Czy to odpowiada Twojemu doświadczeniu w grze?</p>
                </div>

                <div className="guide-question">
                  <h5>Gdzie umieściłbyś siebie lub swoją grupę na krzywej uczenia się?</h5>
                  <p>Czy rozpoznajesz któryś z tych etapów u siebie?</p>
                </div>

                <div className="guide-question">
                  <h5>Na jakie inne tematy chciałbyś, żebym podzielił się przemyśleniami?</h5>
                  <p>Jakie aspekty Eclipse chciałbyś zgłębić?</p>
                </div>
              </div>

              <div className="guide-final-note">
                <h4>🚀 Kontynuuj naukę!</h4>
                <p>Pamiętaj, że każdy gracz rozwija się w swoim własnym tempie. Najważniejsze to cieszyć się grą i ciągle się uczyć!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Guide9Content = () => {
  return (
    <div className="guide-article">
      <div className="guide-article-header">
        <div className="guide-credits">
          <p><strong>Autor:</strong> Paweł</p>
          <p>
            <strong>Źródło:</strong>{' '}
            <a
              href="https://eclipsegalaxy.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="guide-source-link"
            >
              Eclipse Galaxy - Race Guide
            </a>
          </p>
        </div>
      </div>

      <div className="guide-intro race-list">
        <h3>Rasy podstawowe</h3>
        <ul>
          <li><a href="#ludzie">Ludzie</a></li>
          <li><a href="#planta">Planta</a></li>
          <li><a href="#mechanema">Mechanema</a></li>
          <li><a href="#orion">Hegemonia Oriona</a></li>
          <li><a href="#eridani">Imperium Eridani</a></li>
          <li><a href="#hydran">Postępowi Hydranie</a></li>
          <li><a href="#draco">Potomkowie Draco</a></li>
        </ul>
        <h3>Rasy Rise of the Ancients</h3>
        <ul>
          <li><a href="#magellan" className="">Magellan</a></li>
          <li><a href="#exiles" className="">Wygnańcy</a></li>
          <li><a href="#rhoindi" className="">Syndykat Rho Indi</a></li>
          <li><a href="#lyra" className="">Oświeceni Lyry</a></li>
        </ul>
        <h3>Rasy Shadow of the Rift</h3>
        <ul>
          <li><a href="#octanis" className="">Octanis</a></li>
          <li><a href="#dorado" className="">Shaperzy z Dorado</a></li>
          <li><a href="#pyxis" className="">Jedność Pyxis</a></li>
        </ul>
      </div>

      <div className="guide-chapters">
        {/* Dlaczego warto walczyć? */}
        <div className="guide-chapter">
          <h3>Rasy podstawowe</h3>
          <div className="guide-content" id="ludzie">
            <div className="guide-race-intro">
              <img src="/images/races/terranie.jpg" className="guide-race"></img>
              <div>
                <h3>Ludzie</h3>
                <p>Wszechstronna rasa, z łatwością dostosowująca się do aktualnej sytuacji. Najważniejsza umiejętność jaką potrzebują gracze w Eclipse, to bez wątpienia zdolność do adaptacji, dostosywania się do aktualnej sytuacji na planszy. Analizowanie na bieżąco czy obrany kierunek strategiczny ma jeszcze sens. Rasa Ludzi nadaje się do tego idealnie.</p>
                <p>Nie posiadają żadnych poważnych wad i ograniczeń, natomiast mają plusy, które nie można zignorować, tj.:</p>
                <ul>
                  <li>3 Aktywacje ruchu <br></br>Duża mobilność, której nie posiadają inne rasy, daje przewagę w działaniach militarnych</li>

                  <li>Handel 2:1 <br></br>W połączeniu z trzema planetami startowymi, daje dużą elastyczność w początkowej fazie gry, gdy czasem może nam zabraknąć tego jednego punktu nauki lub surowca by wykonać kluczową akcję.</li>
                </ul>
                <p>Bardzo dobra rasa dla początkujących (wybacza błędy) oraz dla najbardziej doświadczonych (którzy zrobią użytek z elastyczności).<br></br>Wadą na pewno jest brak dodatkowych źródeł punktów.</p>
                <p></p>
              </div>
            </div>
          </div>
        </div>

        {/* Z kim się uczyć walczyć? */}
        <div className="guide-chapter">
          <div className="guide-content" id="planta">
            <div className="guide-race-intro">
              <img src="/images/races/planta.jpg" className="guide-race"></img>
              <div>
                <h3>Planta</h3>
                <p>Rasa, która szybko eksploruje kosmos. Ma świetną pozycję startową, po 4 z każdego zasobów oraz +3 co rundę na dzień dobry. Dodatkowo posiadają 4 statki kolonizacyjne, a więc są jedyną rasą, która może zająć 4 planety w pierwszej rundzie, bez odświeżania statków kolonizacyjnych za pomocą akcji Influence. Na koniec gry dostają też jeden dodatkowy punkt za każdy posiadany heks</p>
                <p>Łatwi do zrozumienia, prości do grania i silni w dobrych rękach. Ich statki posiadają jedno miejsce na upgrade mniej, to eliminuje myśliwce z użycia (ciężko jest ułożyć coś sensownego), natomiast pancerniki są całkiem dobre, ponieważ posiadają komputer +1 i energię +2 poza schematem, co pozwala dobrze sobie radzić gdy nie mamy technologii energii, a zamontowanie komputera +2 daje łącznie +3 do trafienia. Dodać do tego fakt, że w drugiej rundzie mamy gwarancję na posiadanie 7 surowców, to daje nam możliwość już w drugiej rundzie zbnudować pancernik i ruszyć na podbój.</p>
                <p>Dobry wybór dla początkującego.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="guide-chapter">
          <div className="guide-content" id="mechanema">
            <div className="guide-race-intro">
              <img src="/images/races/mechanema.jpg" className="guide-race"></img>
              <div>
                <h3>Mechanema</h3>
                <p>Rasa specjalizująca się w budowie i ulepszeniach statków. Wszystkie statki są tańsze o 1 surowiec. Monolity kosztują 8 surowców zamiast 10, co daje potencjał na zbudowanie wielu monolitów, szczególnie, że w jednej akcji mogą zbudować trzy rzeczy.</p>
                <p>Niestety startują z małą ilością (3) i przyrostem (+2) surowców, co nie pozwala w pełni od początku wykorzystać rabaty produkcyjne.</p>
                <p>Posiadają bardzo dobrą technologię startową, Komputer Pozytronowy +2, dzięki czemu nie muszą się martwić o dostęp do technologii ułatwiających trafienie.</p>
                <p>To w czym Mechanema błyszczy to szybkość upgrade'owania statków, trzy żetony w jednym ruchu. Dzięki temu można zaskoczyć przeciwnika szybką zmianą koncepcji statków i ten nie zdąży zareagować na to.</p>
                <p>Rasa dla nieco bardziej zaawansowanych graczy, ale nadaje się też dla początkujących</p>
              </div>
            </div>
          </div>
        </div>
        <div className="guide-chapter">
          <div className="guide-content" id="orion">
            <div className="guide-race-intro">
              <img src="/images/races/orion.jpg" className="guide-race"></img>
              <div>
                <h3>Hegemonia Oriona</h3>
                <p>Rasa z mocnym startem militarnym. Startują z krążownikiem zamiast standardowego myśliwca. Zaczynają z 5 (+3) surowcami, co pozwala im już w pierwszej rundzie kupić drugi krążownik lub pancernik w drugiej rundzie.</p>
                <p>Posiadają dwie, bardzo przydatne technologie startowe:</p>
                <ul>
                  <li>Bomby neutronowe <br></br>Niezbędna technologia w walce z innymi graczami</li>
                  <li>Tarcze Gaussa -1 <br></br>Bardzo przydatna technologia do czyszczenia heksów ze Starożytnych</li>
                </ul>
                <p>Ich statki są jednymi z najmocniejszych startowo statkami. Mają zamontowanie tarcze -1, dodatkową inicjatywę oraz dodatkową energię poza schematem, więc mogą bardzo szybko zacząć czyścić mapę.</p>
                <p>Mają mocny start (statki, surowce) i końcówkę gry (dodatkowa energia i inicjatywa trudna do nadrobienia technologiami), ale słabszy środek gry, gdy znaczenie ma rozwój technologiczny i inne rasy mogą mieć moment przewagi technologicznej, którą mogą wykorzystać.</p>
                <p>Ich słabym punktem jest natomiast handel 4:1, więc potencjalny błąd w obliczeniach ruchów może skończyć się tragicznie. Brak planety ekonomicznej na start, przez co mają mniej ruchów na początku.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="guide-chapter">
          <div className="guide-content" id="eridani">
            <div className="guide-race-intro">
              <img src="/images/races/eridani.jpg" className="guide-race"></img>
              <div>
                <h3>Imperium Eridani</h3>
                <p>Rasa dla zaawansowanych i ambitnych graczy. Posiadają trzy mocne i przydatne technologie startowe. 26 pięniedzy na start, losują dwa żetony reputacji przed rozpoczęciem gry.</p>
                <p>Te wszystkie mocne plusy bledną wobec poważnej wady: brak dwóch dysków wpływów.</p>
                <p>Oznacza to, że nawet mając dużo pieniędzy, może nam zabraknąć dysków by wykonać akcję, tak samo też nie będziemy mogli zająć tyle heksów co inni gracze. Dlatego ważne dla nich jest by grać wydajnie, zajmować tylko dobre heksy, wykorzystać początkową przewagę technologiczną, czyścić heksy ze Starożytnych. Dobrze jest też skorzystać z rozwinięć dających +12 nauki (szybkie kupno technologii dwóch dysków w pierwszej rundzie) lub surowców (budowa dwóch pancerników już w pierwszej rundzie)</p>
                <p>Jedna z najtrudniejszych ras do grania, przeznaczona dla zaawansownych graczy szukających wyzwań.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="guide-chapter">
          <div className="guide-content" id="hydran">
            <div className="guide-race-intro">
              <img src="/images/races/hydran.jpg" className="guide-race"></img>
              <div>
                <h3>Postępowi Hydranie</h3>
                <p>Rasa skupiająca się na rozwoju technologicznym.</p>
                <p>Zaczynają mocną sytuacją jeśli chodzi o naukę, 5 pkt nauki na start i +4 przyrostu co rundę, do tego mogą kupować dwie technologie w jednej akcji. Technologie są niezwykle ważne w Eclipse, często decyduja o wygranej lub przegranej. Hydranie są rasą, która ma szanse wypełnić wszystkie trzy tory technologii.</p>
                <p>Mają słabą sytuację jeśli chodzi o początkowe surowce, tylko 2 i +2 przyrostu, dlatego każdy surowiec jest dla nich na wagę złota i nie mogą pozwolić sobie na stratę statku, szczególnie w początkowej fazie gry.</p>
                <p>Z tego względu mają powolny start, ale gdy już się rozwiną stają się trudni do zatrzymania.</p>
                <p>Rasa dobra dla każdego.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="guide-chapter">
          <div className="guide-content" id="draco">
            <div className="guide-race-intro">
              <img src="/images/races/draco.jpg" className="guide-race"></img>
              <div>
                <h3>Potomkowie Draco</h3>
                <p>Kumple Starożytnych</p>
                <p>W akcji eksploracji biorą dwa heksy i wybierają jeden. Świetna cecha, pozwala im maksymalizować ilość statków starożytnych w galaktyce, a każdy statek Starożytny na koniec gry daje +1 pkt.</p>
                <p>Możliwość zajmowania heksów Starożytnych bez walki z nimi pozwala szybko rozwinąć ekonomię, akcja Influence pozwoli też skraść takie heksy odkryte przez innych graczy.</p>
                <p>Niestety Draco posiadają minusy mniej i bardziej oczywiste. Z oczywistych minusów, nie posiadają żadnej technologii startowej, mają co prawda 4 pkt nauki na start, ale wciąż będą musieli wykonać dużo akcji by nakupować technologii.</p>
                <p>Z mniej oczywistych minusów, inni gracze będą chcieli zabić wszystkich Starożytnych, więc stajemy się dla nich oczywistym celem.<br></br> Tutaj może zajść też nietypowa sytuacja: Jeśli Draco będzie posiadał technologię Anty Bomby Neutronowe, a inny gracz zniszczy statki Starożytnych na naszym obszarze i nie uda mu się usunąć kostek populacji (czyli nie tracimy kontroli nad heksem) to grający Draco może wziąć żeton Odkrycia, który był pod Starożytnymi.</p>
                <p>Rasa dobra dla każdego, szczególnie dla tych, którzy nie boją się ataków ze strony innych graczy.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="guide-chapter">
          <h3>Rasy Rise of the Ancients</h3>
          <div className="guide-intro">
            <p>Rasy z pierwszego dodatku do Eclipse. Posiadają własne, unikalne mechaniki, dlatego sugerowane są dla nieco bardziej doświadczonych graczy.</p>
          </div>
          <div className="guide-content" id="magellan">
            <div className="guide-race-intro">
              <img src="/images/races/magellan.jpg" className="guide-race"></img>
              <div>
                <h3>Magellanie</h3>
                <p>Ludzie na sterydach.</p>
                <p>Przyzwoite zasoby startowe i dobry przyrost na rundę, dobra bo uniwersalna technologia startowa, Energia 6, a to tylko początek zalet.</p>
                <p>Najmocniejszą stroną Magellan jest możliwość "zużycia" statku kolonizacyjnego by uzyskać +1 pieniędzy, nauki lub surowca. To zapewnia dużą elastyczność, szczególnie w sytuacjach gdy dosłownie brakuje nam 1 nauki do kupna technologii. W środkowej fazie gry, gdy nie kolonizujemy zbyt wielu planet, zawsze wykorzystujemy wszystkie statki kolonizacyjne by dodać sobie to co akurat potrzebujemy. Świetna cecha.</p>
                <p>Magellanie dostają 1 pkt za każdy żeton Odkrycia, który wykorzystali jako część statku bądź inny efekt, to też jest świetna cecha, która ułatwia nam wybór między 2 punktami a bonusem. Dodatkowo, gdy na jednym z torów technologii dojdą do 4 żetonów, otrzymują jednorazowo jeden żeton odkrycia.</p>
                <p>Bardzo dobra, uniwersalna rasa, dobra i dla początkującego jak i dla doświadczonego.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="guide-chapter">
          <div className="guide-content" id="exiles">
            <div className="guide-race-intro">
              <img src="/images/races/exiles.jpg" className="guide-race"></img>
              <div>
                <h3>Wygnańcy</h3>
                <p>Rasa skupiająca się na budowie Orbitali.</p>
                <p>Wygnańcy od początku gry mają dostęp do technologii budowania Orbitali oraz mają jeden zbudowany na heksie startowym, mogą zdecydować, czy skolonizować go jako planetę naukową czy ekonomiczną. Orbitale zastępują Bazy Gwiezdne. Mają dość skromny schemat i kosztują sporo, ale za to są niezniszczalne i póki mają kostkę populacji to są traktowane jako statek. Można mieć tylko jeden Orbital na heks. Za każdy zbudowany i kontrolowany Orbital Wygnańcy dostają +1 pkt.</p>
                <p>Drugą technologią jaką posiadają to Urządzenie Maskujące, sprawia, że potrzeba dwóch statków by związać walką jeden statek Wygnańców. Dość dobra, rzadka technologia, daje przewagę przy manewrowaniu flotą.</p>
                <p>Mają przyzwoitą ilość surowców na start, co pozwala im na wczesne budowanie kolejnych Orbitali</p>
                <p>Rasa nie jest najłatwiejszą rasą do grania, zalecana raczej dla doświadczonych.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="guide-chapter">
          <div className="guide-content" id="rhoindi">
            <div className="guide-race-intro">
              <img src="/images/races/rhoindi.jpg" className="guide-race"></img>
              <div>
                <h3>Syndykat Rho Indi</h3>
                <p>Kosmiczni piraci.</p>
                <p>Podobnie jak Hegemonia Oriona, posiadają mocny militarnie start. Posiadają dwa myśliwce zamiast jednego. Nie mogą budować pancerników, a ich krążowniki i myśliwce są droższe o 1 surowiec niż standardowo. Schematy ich statków natomiast mogą konkurować z Orionem. Mają dodatkową inicjatywę i osłony -1 poza schematem, to sprawia, że ich myśliwce są jednymi z najlepszych w grze.</p>
                <p>Dużym plusem jest też posiadanie 4 aktywacji ruchu w jednej akcji, to oznacza, że posiadając całą flotę 8 myśliwców i 4 krążowników wystarczy im tylko 3 akcje by wszystkie statki przenieść. Dla porównania przy standardowych 2 aktywacjach przeniesienie takiej floty zajęłoby 6 akcji.</p>
                <p>Kolejną ciekawą zdolnością jest "złomowanie" zniszczonych statków, po każdej walce zyskują pieniądze w ilości równej ilość losowanych żetonów reputacji -1, czyli maksymalnie 4 pieniędzy na heks. Zgrywa się to dobrze z kolejnym plusem Rho Indi czyli wymianą pieniędzy (i tylko ich) w stosunku 3 do 2. Innymi słowy walcząc i zyskując pieniądze mogą finansować swój rozwój technologiczny lub odbudowwać stracone statki.</p>
                <p>Z wad, ich heks startowy jest warty 0 pkt, mają tylko dwa statki kolonizacyjne, tylko dwóch ambasadorów. To są rzeczy, które prowokują do agresywnej gry.</p>
                <p>Rasa dla zaawansowanych graczy, lubiących grać agresywnie,</p>
              </div>
            </div>
          </div>
        </div>
        <div className="guide-chapter">
          <div className="guide-content" id="lyra">
            <div className="guide-race-intro">
              <img src="/images/races/lyra.jpg" className="guide-race"></img>
              <div>
                <h3>Oświeceni Lyry</h3>
                <p>Oświecona rasa budująca świątynie.</p>
                <p>Mają dobry start jeśli chodzi o planety początkowe, po jednej każdego typu. W trakcie walki mogą zużyć statek kolonizacji by przerzucić jedną kość. Posiadają technologię Osłon zniekształcających, które dają osłony -2 przeciw rakietom wszystkim statkom (nie wymaga montażu na statku). Jest to sytuacyjne, ale gdy już dojdzie do takiej sytuacji, to robi dużą różnicę.</p>
                <p>Na koniec każdej rundy, po fazie Walki, a przed fazą Rozliczenia, mogą zbudować jedną świątynię. Muszą wtedy opłacić koszt świątyni i położyć na planecie w odpowiednim kolorze. Jest łącznie 9 świątyń, które można podzielić wg kosztu. tj: trzy różne świątynie o koszcie 2, o koszcie 4 i o koszcie 6.</p>
                <p>Zbudowanie jednego zestawu 3 różnych świątyń o tym samym koszcie daje nam bonusowy żeton.</p>
                <ul>
                  <li>Zestaw o koszcie 2 - Technologię Wormhole Generator</li>
                  <li>Zestaw o koszcie 4 - Dodatkowy, purpurowy dysk wpływów</li>
                  <li>Zestaw o koszcie 6 - 3 punkty</li>
                </ul>
                <p>Każda świątynia na kontrolowanym przez nas heksie, daje 1 punkt na koniec gry.</p>
                <p>Rasa dla zaawansowanych graczy, którzy lubią planować mocno na przód i powoli, konsekwentnie realizować swoje cele.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="guide-chapter">
          <h3>Rasy Shadow of the Rift</h3>
          <div className="guide-intro">
            <p>Rasy z drugiego dodatku do Eclipse. Posiadają własne, unikalne mechaniki, wymagające dobrej znajomości mechanik gry, dlatego sugerowane są dla bardzo doświadczonych graczy.</p>
          </div>
          <div className="guide-content" id="octanis">
            <div className="guide-race-intro">
              <img src="/images/races/octanis.jpg" className="guide-race"></img>
              <div>
                <h3>Octanis</h3>
                <p>Rasa mutująca by rozwijać swoje możliwości i zdolności.</p>
                <p>Posiadają zdolność ewolucji. Mają pulę 5 żetonów, które mogą wykupić za pomocą czwartego surowca, mutagenu, który produkują. Robią to w akcji technologii zamiast kupowania technologii. Po kupieniu mutacji uzupełniają pulę żetonów, tak by zawsze mieć ich 5 do wyboru. Mogą zużyć statek kolonizacyjny by wymienić żeton z puli na losowy z woreczka z mutacjami.</p>
                <p>Zdolność ewolucji jest bardzo dobra, choć Octanis mają raczej spokojny start, to wraz z upływem rund stają się silniejsi, dzięki mutacjom mogą stać się każdą inną rasą obcych lub nawet mieszanką innych ras. Mutacje mogą wzmocnić nasze akcje, np. pozwalają wykonać 3 aktywacje ruchu zamiast 2, są mutacje, które dają miejsce na kostkę populacji, zwiększając dochód, możliwości jest mnóstwo. Wszechstronne możliwości oraz mutacje dające punkty to mocne strony tej rasy.</p>
                <p>Rasa dla zdecydowanie zaawansowanych graczy, którzy posiadają dobre zrozumienie gry i jej mechanik.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="guide-chapter">
          <div className="guide-content" id="dorado">
            <div className="guide-race-intro">
              <img src="/images/races/dorado.jpg" className="guide-race"></img>
              <div>
                <h3>Shaperzy z Dorado</h3>
                <p>Rasa posiadająca zdolność zniekształcania czasu.</p>
                <p>Startują z mocną technologią Soltion Cannon, która może wystarczyć nawet do końca gry, jeśli chodzi o uzbrojenie statków. Statki posiadają jedno miejsce mniej na żeton upgradu, ale za to mają 5 energii poza schematem.</p>
                <p>Dorado posiadają zdolność zniekształcania czasu, która pozwalają im zyskać różne rzeczy w obecnej rundzie, a zapłacić za nie w przyszłych rundach. Jeśli nie opłacą tego, to dostają minusowe punkty, jednak za opłacony żeton jest +1 pkt. Startują pulą 2 żeton zniekształcenia czasu i co rundę mogą dolosować do puli maksymalnie jeden żeton. Sama pula może miec maksymalnie 3 żetony. Mogą zyżyć statek kolonizacyjny by wymienić jeden z żetonów w puli na losowy z woreczka.</p>
                <p>Zniekształcenia Czasu pozwalają uzyskać im dużą przewagę w odpowiednim momencie, a dopiero potem zapłacić za nią, to bardzo dobra zdolność.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="guide-chapter">
          <div className="guide-content" id="pyxis">
            <div className="guide-race-intro">
              <img src="/images/races/pyxis.jpg" className="guide-race"></img>
              <div>
                <h3>Jedność Pyxis</h3>

              </div>
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

export default GuidePage;