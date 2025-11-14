import React, { useState, useEffect } from 'react';
import './Statistics.css';

const Statistics = () => {
  const [playerData, setPlayerData] = useState([]);
  const [raceStats, setRaceStats] = useState([]);
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
      setLoading(false);
      
    } catch (err) {
      console.error('Błąd wczytywania CSV:', err);
      setError(`Błąd wczytywania danych: ${err.message}`);
      setLoading(false);
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
        
        switch(header) {
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
      
      // Liczenie miejsc
      if (game.place === 1) {
        raceMap[game.race].wins += 1;
      } else if (game.place === 2) {
        raceMap[game.race].secondPlaces += 1;
      } else if (game.place === 3) {
        raceMap[game.race].thirdPlaces += 1;
      } else if (game.place === 4) {
        raceMap[game.race].fourthPlaces += 1;
      } else if (game.place === 5) {
        raceMap[game.race].fifthPlaces += 1;
      } else if (game.place === 6) {
        raceMap[game.race].sixthPlaces += 1;
      }
      
      if (game.playerCount) {
        raceMap[game.race].totalPlayerCount += game.playerCount;
      }
    });

    const stats = Object.values(raceMap).map(race => {
      // Obliczanie Power Rating w procentach
      const powerRating = (
        race.wins * 1.0 + 
        race.secondPlaces * 0.75 + 
        race.thirdPlaces * 0.50 + 
        race.fourthPlaces * 0.25 + 
        race.fifthPlaces * 0.10 + 
        race.sixthPlaces * 0.05
      ) / race.gamesPlayed;

      // Konwersja na procenty (mnożymy przez 100)
      const powerRatingPercent = (powerRating * 100);

      return {
        ...race,
        averagePointsPerGame: race.gamesPlayed > 0 ? 
          (race.totalPoints / race.gamesPlayed).toFixed(2) : '0.00',
        averagePlace: race.places.length > 0 ? 
          (race.places.reduce((a, b) => a + b, 0) / race.places.length).toFixed(2) : '0.00',
        averagePlayerCount: race.gamesPlayed > 0 ? 
          (race.totalPlayerCount / race.gamesPlayed).toFixed(1) : '0',
        winRate: race.gamesPlayed > 0 ? 
          ((race.wins / race.gamesPlayed) * 100).toFixed(1) + '%' : '0%',
        powerRating: powerRatingPercent.toFixed(1) + '%'
      };
    });

    // Sortowanie według Power Rating (malejąco)
    setRaceStats(stats.sort((a, b) => {
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
      
      // Liczenie wygranych (miejsce 1)
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

      return {
        player: player.player,
        mostCommonRace: mostCommonRace,
        totalPoints: totalPoints,
        averagePoints: totalGames > 0 ? (totalPoints / totalGames).toFixed(2) : '0.00',
        bestPlace: Math.min(...player.places),
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

  // Obliczanie łącznej liczby pierwszych miejsc
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
      <div className="header-section">
        <h1>Statystyki Eclipse: New Dawn for the Galaxy</h1>
        <button onClick={refreshData} className="refresh-btn">
          ⟳ Odśwież dane
        </button>
      </div>

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
                  <th>Najlepsze Miejsce</th>
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
                    <td>{player.bestPlace}</td>
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
    </div>
  );
};

export default Statistics;