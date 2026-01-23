import React, { useState, useEffect } from 'react';
import './Statistics.css';

const Statistics = () => {
  const [playerData, setPlayerData] = useState([]);
  const [raceStats, setRaceStats] = useState([]);
  const [ewcStats, setEwcStats] = useState([]);
  const [playerStats, setPlayerStats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadCSVData();
  }, []);

  const loadCSVData = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch('images/sesje/stat.csv');

      if (!response.ok) {
        throw new Error(`Nie znaleziono pliku CSV. Status: ${response.status}`);
      }

      const csvText = await response.text();
      const parsedData = parseCSV(csvText);

      if (parsedData.length === 0) {
        throw new Error('Plik CSV jest pusty lub zawiera nieprawidłowe dane');
      }

      setPlayerData(parsedData);
      calculateStats(parsedData);

      await loadEWCData();

      setLoading(false);
    } catch (err) {
      console.error('Błąd wczytywania CSV:', err);
      setError(`Błąd wczytywania danych: ${err.message}`);
      setLoading(false);
    }
  };

  const loadEWCData = async () => {
    try {
      const response = await fetch('images/sesje/ewc.csv');

      if (!response.ok) {
        console.warn('Nie znaleziono pliku EWC.csv. Pomijam dane EWC.');
        setEwcStats([]);
        return;
      }

      const csvText = await response.text();
      const parsedData = parseCSV(csvText);

      if (parsedData.length === 0) {
        console.warn('Plik EWC.csv jest pusty lub zawiera nieprawidłowe dane');
        setEwcStats([]);
        return;
      }

      calculateEWCStats(parsedData);
    } catch (err) {
      console.error('Błąd wczytywania EWC.csv:', err);
      setEwcStats([]);
    }
  };

  const parseCSV = (csvText) => {
    const lines = csvText.split('\n').filter(line => line.trim() !== '');

    if (lines.length === 0) {
      return [];
    }

    const headers = lines[0].split(',').map(header => header.trim());
    const data = [];

    for (let i = 1; i < lines.length; i++) {
      const line = lines[i];
      if (!line.trim()) continue;

      const values = [];
      let current = '';
      let inQuotes = false;

      for (let j = 0; j < line.length; j++) {
        const char = line[j];

        if (char === '"') {
          inQuotes = !inQuotes;
        } else if (char === ',' && !inQuotes) {
          values.push(current.trim());
          current = '';
        } else {
          current += char;
        }
      }
      values.push(current.trim());

      const game = {};

      headers.forEach((header, index) => {
        let value = values[index] || '';

        if (value.startsWith('"') && value.endsWith('"')) {
          value = value.slice(1, -1);
        }

        switch (header) {
          case 'Gracz':
            game.player = value;
            break;
          case 'Rasa':
            game.race = value;
            break;
          case 'Suma':
            game.points = parseInt(value) || 0;
            break;
          case 'Miejsce':
            game.place = parseInt(value) || 0;
            break;
          case 'Wygrany':
            game.winner = value;
            break;
          case 'Liczba Graczy':
            game.playerCount = parseInt(value) || 0;
            break;
          case 'Data':
            game.date = value;
            break;
          case 'Czas':
            game.time = value;
            break;
          case 'Hexy':
            game.hexy = parseInt(value) || 0;
            break;
          case 'Technologia':
            game.technology = parseInt(value) || 0;
            break;
          case 'Reputacja':
            game.reputation = parseInt(value) || 0;
            break;
          default:
            game[header] = value;
        }
      });

      if (game.player && game.race) {
        data.push(game);
      }
    }

    return data;
  };

  const calculateStats = (data) => {
    calculateRaceStats(data);
    calculatePlayerStats(data);
  };

  const calculateRaceStats = (data) => {
    const raceMap = {};

    data.forEach(game => {
      if (!game.race || game.race === '') return;

      if (!raceMap[game.race]) {
        raceMap[game.race] = {
          race: game.race,
          totalPoints: 0,
          gamesPlayed: 0,
          places: [],
          totalPlayerCount: 0,
          wins: 0,
          secondPlaces: 0,
          thirdPlaces: 0,
          fourthPlaces: 0,
          fifthPlaces: 0,
          sixthPlaces: 0
        };
      }

      raceMap[game.race].totalPoints += game.points;
      raceMap[game.race].gamesPlayed += 1;
      raceMap[game.race].places.push(game.place);

      if (game.place === 1) raceMap[game.race].wins += 1;
      else if (game.place === 2) raceMap[game.race].secondPlaces += 1;
      else if (game.place === 3) raceMap[game.race].thirdPlaces += 1;
      else if (game.place === 4) raceMap[game.race].fourthPlaces += 1;
      else if (game.place === 5) raceMap[game.race].fifthPlaces += 1;
      else if (game.place === 6) raceMap[game.race].sixthPlaces += 1;

      if (game.playerCount) {
        raceMap[game.race].totalPlayerCount += game.playerCount;
      }
    });

    const stats = Object.values(raceMap).map(race => {
      const powerRating = (
        race.wins * 1.0 +
        race.secondPlaces * 0.75 +
        race.thirdPlaces * 0.50 +
        race.fourthPlaces * 0.25 +
        race.fifthPlaces * 0.10 +
        race.sixthPlaces * 0.05
      ) / race.gamesPlayed;

      const powerRatingPercent = (powerRating * 100);

      return {
        ...race,
        averagePointsPerGame: race.gamesPlayed > 0
          ? (race.totalPoints / race.gamesPlayed).toFixed(2)
          : '0.00',
        averagePlace: race.places.length > 0
          ? (race.places.reduce((a, b) => a + b, 0) / race.places.length).toFixed(2)
          : '0.00',
        averagePlayerCount: race.gamesPlayed > 0
          ? (race.totalPlayerCount / race.gamesPlayed).toFixed(1)
          : '0',
        winRate: race.gamesPlayed > 0
          ? ((race.wins / race.gamesPlayed) * 100).toFixed(1) + '%'
          : '0%',
        powerRating: powerRatingPercent.toFixed(1) + '%'
      };
    });

    setRaceStats(stats.sort((a, b) => {
      const aValue = parseFloat(a.powerRating);
      const bValue = parseFloat(b.powerRating);
      return bValue - aValue;
    }));
  };

  const calculateEWCStats = (data) => {
    const raceMap = {};

    data.forEach(game => {
      if (!game.race || game.race === '') return;

      if (!raceMap[game.race]) {
        raceMap[game.race] = {
          race: game.race,
          totalPoints: 0,
          gamesPlayed: 0,
          places: [],
          totalPlayerCount: 0,
          wins: 0,
          secondPlaces: 0,
          thirdPlaces: 0,
          fourthPlaces: 0,
          fifthPlaces: 0,
          sixthPlaces: 0
        };
      }

      raceMap[game.race].totalPoints += game.points;
      raceMap[game.race].gamesPlayed += 1;
      raceMap[game.race].places.push(game.place);

      if (game.place === 1) raceMap[game.race].wins += 1;
      else if (game.place === 2) raceMap[game.race].secondPlaces += 1;
      else if (game.place === 3) raceMap[game.race].thirdPlaces += 1;
      else if (game.place === 4) raceMap[game.race].fourthPlaces += 1;
      else if (game.place === 5) raceMap[game.race].fifthPlaces += 1;
      else if (game.place === 6) raceMap[game.race].sixthPlaces += 1;

      if (game.playerCount) {
        raceMap[game.race].totalPlayerCount += game.playerCount;
      }
    });

    const stats = Object.values(raceMap).map(race => {
      const powerRating = (
        race.wins * 1.0 +
        race.secondPlaces * 0.75 +
        race.thirdPlaces * 0.50 +
        race.fourthPlaces * 0.25 +
        race.fifthPlaces * 0.10 +
        race.sixthPlaces * 0.05
      ) / race.gamesPlayed;

      const powerRatingPercent = (powerRating * 100);

      return {
        ...race,
        averagePointsPerGame: race.gamesPlayed > 0
          ? (race.totalPoints / race.gamesPlayed).toFixed(2)
          : '0.00',
        averagePlace: race.places.length > 0
          ? (race.places.reduce((a, b) => a + b, 0) / race.places.length).toFixed(2)
          : '0.00',
        averagePlayerCount: race.gamesPlayed > 0
          ? (race.totalPlayerCount / race.gamesPlayed).toFixed(1)
          : '0',
        winRate: race.gamesPlayed > 0
          ? ((race.wins / race.gamesPlayed) * 100).toFixed(1) + '%'
          : '0%',
        powerRating: powerRatingPercent.toFixed(1) + '%'
      };
    });

    setEwcStats(stats.sort((a, b) => {
      const aValue = parseFloat(a.powerRating);
      const bValue = parseFloat(b.powerRating);
      return bValue - aValue;
    }));
  };

  const calculatePlayerStats = (data) => {
    const playerMap = {};

    data.forEach(game => {
      if (!game.player || game.player === '') return;

      if (!playerMap[game.player]) {
        playerMap[game.player] = {
          player: game.player,
          points: [],
          places: [],
          races: [],
          wins: 0
        };
      }

      playerMap[game.player].points.push(game.points);
      playerMap[game.player].places.push(game.place);
      playerMap[game.player].races.push(game.race);

      if (game.place === 1) {
        playerMap[game.player].wins += 1;
      }
    });

    const stats = Object.values(playerMap).map(player => {
      const racesCount = {};
      player.races.forEach(race => {
        racesCount[race] = (racesCount[race] || 0) + 1;
      });

      const mostCommonRace = Object.keys(racesCount).reduce((a, b) =>
        racesCount[a] > racesCount[b] ? a : b, player.races[0] || ''
      );

      const totalPoints = player.points.reduce((a, b) => a + b, 0);
      const totalGames = player.points.length;
      const bestScore = Math.max(...player.points);

      return {
        player: player.player,
        mostCommonRace: mostCommonRace,
        totalPoints: totalPoints,
        averagePoints: totalGames > 0 ? (totalPoints / totalGames).toFixed(2) : '0.00',
        bestScore: bestScore,
        averagePlace: totalGames > 0 ? (player.places.reduce((a, b) => a + b, 0) / totalGames).toFixed(2) : '0.00',
        totalGames: totalGames,
        wins: player.wins,
        winRate: totalGames > 0 ? ((player.wins / totalGames) * 100).toFixed(1) + '%' : '0%'
      };
    });

    setPlayerStats(stats.sort((a, b) => b.totalPoints - a.totalPoints));
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const csvText = e.target.result;
          const parsedData = parseCSV(csvText);
          setPlayerData(parsedData);
          calculateStats(parsedData);
          setError(null);
        } catch (err) {
          setError(`Błąd parsowania pliku: ${err.message}`);
        }
      };
      reader.onerror = () => {
        setError('Błąd odczytu pliku');
      };
      reader.readAsText(file);
    }
  };

  const refreshData = () => {
    loadCSVData();
  };

  const totalWins = playerData.filter(game => game.place === 1).length;

  if (loading) {
    return (
      <div className="statistics-container">
        <div className="loading">
          <div className="spinner"></div>
          Wczytywanie danych z pliku CSV...
        </div>
      </div>
    );
  }

  return (
    <div className="statistics-container intro">
      <div className='eclipse'><h1>Eclipse</h1></div>

      <div className="header-section">
        <h1>Statystyki</h1>
        <button onClick={refreshData} className="refresh-btn">
          ⟳ Odśwież dane
        </button>
      </div>

      {error && (
        <div className="error-message">
          {error}
          <div className="error-actions">
            <button className="retry-btn" onClick={refreshData}>Spróbuj ponownie</button>
          </div>
        </div>
      )}

      <div className="stats-grid">
        <div className="stat-card">
          <h3>Łącznie gier</h3>
          <div className="stat-number">{totalWins}</div>
        </div>
        <div className="stat-card">
          <h3>Unikalnych graczy</h3>
          <div className="stat-number">{playerStats.length}</div>
        </div>
        <div className="stat-card">
          <h3>Unikalnych ras</h3>
          <div className="stat-number">{raceStats.length}</div>
        </div>
        <div className="stat-card">
          <h3>Średnia punktów</h3>
          <div className="stat-number">
            {playerData.length > 0
              ? (playerData.reduce((sum, game) => sum + game.points, 0) / playerData.length).toFixed(1)
              : '0'
            }
          </div>
        </div>
      </div>

      <div className="stats-section">
        <h2>Statystyki Ras</h2>
        {raceStats.length === 0 ? (
          <p className="no-data">Brak danych do wyświetlenia</p>
        ) : (
          <div className="table-container">
            <table className="stats-table">
              <thead>
                <tr>
                  <th>Rasa</th>
                  <th>Power Rating</th>
                  <th>Średnie Punkty</th>
                  <th>Ilość Gier</th>
                  <th>Wygrane</th>
                  <th>% Wygranych</th>
                  <th>Średnie Miejsce</th>
                </tr>
              </thead>
              <tbody>
                {raceStats.map((race, index) => (
                  <tr key={index}>
                    <td><strong>{race.race}</strong></td>
                    <td className="power-rating">{race.powerRating}</td>
                    <td>{race.averagePointsPerGame}</td>
                    <td>{race.gamesPlayed}</td>
                    <td>{race.wins}</td>
                    <td>{race.winRate}</td>
                    <td>{race.averagePlace}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
{/*
      <div className="stats-section">
        <h2>Eclipse World Championship - 2013-2019 i inne</h2>
        <p className="info-stat">
          Statystyki, które udało mi się wyciągnąć z forum BGG.com, zawierają dane turniejów Eclipse jak i prywatnych partii graczy z forum.
        </p>

        {ewcStats.length === 0 ? (
          <p className="no-data">Brak danych do wyświetlenia</p>
        ) : (
          <div className="table-container">
            <table className="stats-table">
              <thead>
                <tr>
                  <th>Rasa</th>
                  <th>Power Rating</th>
                  <th>Średnie Punkty</th>
                  <th>Ilość Gier</th>
                  <th>Wygrane</th>
                  <th>% Wygranych</th>
                  <th>Średnie Miejsce</th>
                </tr>
              </thead>
              <tbody>
                {ewcStats.map((race, index) => (
                  <tr key={index}>
                    <td><strong>{race.race}</strong></td>
                    <td className="power-rating">{race.powerRating}</td>
                    <td>{race.averagePointsPerGame}</td>
                    <td>{race.gamesPlayed}</td>
                    <td>{race.wins}</td>
                    <td>{race.winRate}</td>
                    <td>{race.averagePlace}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
*/}
      <div className="stats-section">
        <h2>Statystyki Graczy</h2>
        {playerStats.length === 0 ? (
          <p className="no-data">Brak danych do wyświetlenia</p>
        ) : (
          <div className="table-container">
            <table className="stats-table">
              <thead>
                <tr>
                  <th>Gracz</th>
                  <th>Najczęstsza Rasa</th>
                  <th>Łączne Punkty</th>
                  <th>Średnie Punkty</th>
                  <th>Najlepszy Wynik</th>
                  <th>Średnie Miejsce</th>
                  <th>Ilość Gier</th>
                  <th>Wygrane</th>
                  <th>% Wygranych</th>
                </tr>
              </thead>
              <tbody>
                {playerStats.map((player, index) => (
                  <tr key={index}>
                    <td><strong>{player.player}</strong></td>
                    <td>{player.mostCommonRace}</td>
                    <td>{player.totalPoints}</td>
                    <td>{player.averagePoints}</td>
                    <td className="best-score">{player.bestScore}</td>
                    <td>{player.averagePlace}</td>
                    <td>{player.totalGames}</td>
                    <td>{player.wins}</td>
                    <td>{player.winRate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <div className="stats-section">
        <h2>Profil Gracza - Podsumowanie</h2>
        {playerStats.length === 0 ? (
          <p className="no-data">Brak danych do wyświetlenia</p>
        ) : (
          <div className="player-profiles-container">
            {(() => {
              const allRaces = [...new Set(playerData.map(game => game.race))].filter(race => race);

              const playerProfiles = playerStats.map(player => {
                const playerGames = playerData.filter(game => game.player === player.player);

                const bestGame = playerGames.reduce((prev, current) =>
                  (prev.points > current.points) ? prev : current
                );

                const worstGame = playerGames.reduce((prev, current) =>
                  (prev.points < current.points) ? prev : current
                );

                const playedRaces = [...new Set(
                  playerGames.map(game => game.race).filter(race => race)
                )];

                const ungracedRaces = allRaces.filter(race => !playedRaces.includes(race));

                const hasPlayedAllRaces = ungracedRaces.length === 0 && allRaces.length > 0;

                const wins = playerGames.filter(game => game.place === 1).length;

                const averagePoints = playerGames.length > 0
                  ? (playerGames.reduce((sum, game) => sum + game.points, 0) / playerGames.length).toFixed(1)
                  : '0';

                const averagePlace = playerGames.length > 0
                  ? (playerGames.reduce((sum, game) => sum + game.place, 0) / playerGames.length).toFixed(2)
                  : '0.00';

                return {
                  player: player.player,
                  totalGames: playerGames.length,
                  playedRaces: playedRaces,
                  ungracedRaces: ungracedRaces,
                  totalPlayedRaces: playedRaces.length,
                  totalUngracedRaces: ungracedRaces.length,
                  hasPlayedAllRaces: hasPlayedAllRaces,
                  bestGame: {
                    points: bestGame?.points ?? 0,
                    race: bestGame?.race ?? '',
                    date: bestGame?.date ?? ''
                  },
                  worstGame: {
                    points: worstGame?.points ?? 0,
                    race: worstGame?.race ?? '',
                    date: worstGame?.date ?? ''
                  },
                  averagePoints: averagePoints,
                  averagePlace: averagePlace,
                  wins: wins,
                  winRate: playerGames.length > 0 ? ((wins / playerGames.length) * 100).toFixed(1) + '%' : '0%'
                };
              });

              return (
                <PlayerProfilesCarousel
                  profiles={playerProfiles}
                  renderCard={(profile) => (
                    <div className="player-profile-card">
                      <div className="profile-header">
                        <h3 className="player-name">{profile.player}</h3>
                        <div className="player-summary">
                          <span className="games-count">🎮 {profile.totalGames} gier</span>
                          <span className="wins-count">🏆 {profile.wins} wygranych</span>
                          <span className="win-rate">📊 {profile.winRate}</span>
                        </div>
                      </div>

                      <div className="profile-stats-grid">
                        <div className="stat-box best-game">
                          <h4>Najlepszy wynik</h4>
                          <div className="stat-value highlight">{profile.bestGame.points} pkt</div>
                          <div className="stat-detail">
                            <span className="race-badge">{profile.bestGame.race}</span>
                            {profile.bestGame.date && (
                              <span className="date-badge">{profile.bestGame.date}</span>
                            )}
                          </div>
                        </div>

                        <div className="stat-box worst-game">
                          <h4>Najniższy wynik</h4>
                          <div className="stat-value lowlight">{profile.worstGame.points} pkt</div>
                          <div className="stat-detail">
                            <span className="race-badge">{profile.worstGame.race}</span>
                            {profile.worstGame.date && (
                              <span className="date-badge">{profile.worstGame.date}</span>
                            )}
                          </div>
                        </div>

                        <div className="stat-box average-stats">
                          <h4>Średnie statystyki</h4>
                          <div className="average-grid">
                            <div className="average-item">
                              <span className="avg-label">Punkty/game:</span>
                              <span className="avg-value">{profile.averagePoints}</span>
                            </div>
                            <div className="average-item">
                              <span className="avg-label">Miejsce:</span>
                              <span className="avg-value">{profile.averagePlace}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {profile.hasPlayedAllRaces ? (
                        <div className="full-completion-achievement">
                          <div className="achievement-content">
                            <div className="achievement-icon">🏆</div>
                            <div className="achievement-text">
                              <h4>Komplet Ras!</h4>
                              <p>Gracz zagrał wszystkimi {profile.totalPlayedRaces} rasami!</p>
                            </div>
                            <div className="achievement-badge">
                              <span className="badge-text">100%</span>
                            </div>
                          </div>
                          <div className="achievement-stats">
                            <span className="stat-item">🎮 {profile.totalGames} gier</span>
                            <span className="stat-item">🏆 {profile.wins} wygranych</span>
                            <span className="stat-item">📊 {profile.winRate} skuteczność</span>
                          </div>
                        </div>
                      ) : (
                        <div className="races-section">
                          <div className="races-column">
                            <h4>Zagrane rasy ({profile.totalPlayedRaces})</h4>
                            {profile.playedRaces.length > 0 ? (
                              <div className="race-tags">
                                {profile.playedRaces.map((race, idx) => (
                                  <span key={idx} className="race-tag played">{race}</span>
                                ))}
                              </div>
                            ) : (
                              <p className="no-races">Brak danych</p>
                            )}
                          </div>

                          <div className="races-column">
                            <h4>Rasy niegrane ({profile.totalUngracedRaces})</h4>
                            {profile.ungracedRaces.length > 0 ? (
                              <div className="race-tags">
                                {profile.ungracedRaces.map((race, idx) => (
                                  <span key={idx} className="race-tag ungraced">{race}</span>
                                ))}
                              </div>
                            ) : (
                              <div className="all-races-achievement">
                                <span className="achievement-icon">🎯</span>
                                <span className="achievement-text">Zagrał wszystkimi rasami!</span>
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                />
              );
            })()}
          </div>
        )}
      </div>
    </div>
  );
};

export default Statistics;

/* =========================================================
   Karuzela bez bibliotek: loop + strzałki + drag/swipe
   ========================================================= */
const PlayerProfilesCarousel = ({ profiles, renderCard }) => {
  const viewportRef = React.useRef(null);

  const [index, setIndex] = React.useState(1); // 1 = pierwszy prawdziwy (bo mamy klona na 0)
  const [animating, setAnimating] = React.useState(false);
  const [noTransition, setNoTransition] = React.useState(false);

  // Drag / swipe
  const pointerIdRef = React.useRef(null);
  const isDraggingRef = React.useRef(false);
  const startXRef = React.useRef(0);
  const deltaXRef = React.useRef(0);

  const [dragOffset, setDragOffset] = React.useState(0); // px

  // Klony do zapętlenia: [last, ...real, first]
  const extended = React.useMemo(() => {
    if (!profiles || profiles.length === 0) return [];
    if (profiles.length === 1) return [profiles[0], profiles[0], profiles[0]];
    return [profiles[profiles.length - 1], ...profiles, profiles[0]];
  }, [profiles]);

  const realCount = profiles?.length || 0;
  const lastRealIndexInExtended = realCount; // 1..realCount (real), 0/realCount+1 (klony)

  React.useEffect(() => {
    if (!extended.length) return;
    setNoTransition(true);
    setIndex(1);
    setDragOffset(0);
    requestAnimationFrame(() => setNoTransition(false));
  }, [extended.length]);

  const goNext = () => {
    if (!extended.length || animating) return;
    setAnimating(true);
    setDragOffset(0);
    setIndex((prev) => prev + 1);
  };

  const goPrev = () => {
    if (!extended.length || animating) return;
    setAnimating(true);
    setDragOffset(0);
    setIndex((prev) => prev - 1);
  };

  const onTransitionEnd = () => {
    // dobijamy do klonów -> przeskok bez animacji
    if (index === lastRealIndexInExtended + 1) {
      setNoTransition(true);
      setIndex(1);
      requestAnimationFrame(() => {
        setNoTransition(false);
        setAnimating(false);
      });
      return;
    }

    if (index === 0) {
      setNoTransition(true);
      setIndex(lastRealIndexInExtended);
      requestAnimationFrame(() => {
        setNoTransition(false);
        setAnimating(false);
      });
      return;
    }

    setAnimating(false);
  };

  // Obsługa klawiatury
  React.useEffect(() => {
    const handler = (e) => {
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [animating, extended.length]);


  // Helper: szerokość slajdu + gap z CSS (zmienne)
  const getStepPx = () => {
    const el = viewportRef.current;
    if (!el) return 420 + 22;

    const styles = getComputedStyle(el);
    const cardWidth = parseFloat(styles.getPropertyValue('--card-width')) || 420;
    const gap = parseFloat(styles.getPropertyValue('--gap')) || 22;
    return cardWidth + gap;
  };

  const snapByDrag = () => {
    const step = getStepPx();
    const threshold = Math.min(140, step * 0.25); // próg przesunięcia

    if (deltaXRef.current <= -threshold) {
      goNext();
    } else if (deltaXRef.current >= threshold) {
      goPrev();
    } else {
      // wróć na miejsce
      setAnimating(true);
      setDragOffset(0);
    }

    // wyczyść
    deltaXRef.current = 0;
  };

  const onPointerDown = (e) => {
    if (!viewportRef.current) return;
    if (animating) return;

    // tylko primary button dla myszy
    if (e.pointerType === 'mouse' && e.button !== 0) return;

    pointerIdRef.current = e.pointerId;
    isDraggingRef.current = true;
    startXRef.current = e.clientX;
    deltaXRef.current = 0;

    // przechwyt
    viewportRef.current.setPointerCapture(e.pointerId);

    // podczas dragu wyłączamy animację, żeby „ciągnęło”
    setNoTransition(true);
  };

  const onPointerMove = (e) => {
    if (!isDraggingRef.current) return;
    if (pointerIdRef.current !== e.pointerId) return;

    const dx = e.clientX - startXRef.current;
    deltaXRef.current = dx;

    // lekkie tłumienie, żeby nie latało jak szalone
    const damp = 0.9;
    setDragOffset(dx * damp);
  };

  const endDrag = (e) => {
    if (!isDraggingRef.current) return;
    if (pointerIdRef.current !== e.pointerId) return;

    isDraggingRef.current = false;
    pointerIdRef.current = null;

    // przywracamy transition (ale w kolejnej klatce, żeby nie zadziałał podczas odpuszczania)
    requestAnimationFrame(() => {
      setNoTransition(false);
      snapByDrag();
    });
  };

  if (!profiles || profiles.length === 0) return null;

  return (
    <div className="profiles-carousel">
      <button className="carousel-arrow left" onClick={goPrev} aria-label="Poprzedni gracz">
        ‹
      </button>

      <div
        className="carousel-viewport"
        ref={viewportRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        style={{ touchAction: 'pan-y' }} // pozwala przewijać stronę w pionie, a w poziomie robimy swipe
      >
        <div
          className={`carousel-track ${noTransition ? 'no-transition' : ''}`}
          style={{
            '--slide': index,
            '--drag': `${dragOffset}px`,
          }}
          onTransitionEnd={onTransitionEnd}
        >
          {extended.map((profile, i) => {
            const diff = i - index;
            const posClass =
              diff === 0 ? 'is-active'
                : diff === -1 ? 'is-prev'
                  : diff === 1 ? 'is-next'
                    : 'is-far';

            return (
              <div key={`${profile.player}-${i}`} className={`carousel-slide ${posClass}`}>
                {renderCard(profile)}
              </div>
            );
          })}
        </div>
      </div>

      <button className="carousel-arrow right" onClick={goNext} aria-label="Następny gracz">
        ›
      </button>
    </div>
  );
};
