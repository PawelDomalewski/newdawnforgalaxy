import React from 'react';
import './Statistics.css';
import { useStatisticsData } from '../hooks/useStatisticsData.js';
import { calculateSummaryStats } from '../utils/statistics.js';

const Statistics = () => {
  const {
    playerData,
    raceStats,
    ewcStats,
    playerStats,
    loading,
    error,
    refreshData,
    handleFileUpload,
  } = useStatisticsData();

  const summary = calculateSummaryStats(playerData, playerStats, raceStats);

  if (loading) {
    return <div className="statistics-loading">Wczytywanie danych z pliku CSV...</div>;
  }

  return (
    <div className="stat-section">
      <div className="container">
        <h1>Statystyki</h1>

        <div className="statistics-actions">
          <button type="button" onClick={refreshData}>
            ⟳ Odśwież dane
          </button>

          <label className="statistics-upload">
            <span>Wczytaj własny plik CSV</span>
            <input type="file" accept=".csv" onChange={handleFileUpload} />
          </label>
        </div>

        {error && <div className="statistics-error">{error}</div>}

        <div className="statistics-summary">
          <div className="statistics-card">
            <h3>Łącznie gier</h3>
            <p>{summary.totalGames}</p>
          </div>
          <div className="statistics-card">
            <h3>Unikalnych graczy</h3>
            <p>{summary.uniquePlayers}</p>
          </div>
          <div className="statistics-card">
            <h3>Unikalnych ras</h3>
            <p>{summary.uniqueRaces}</p>
          </div>
          <div className="statistics-card">
            <h3>Średnia punktów</h3>
            <p>{summary.averagePoints}</p>
          </div>
        </div>

        <section>
          <h2>Statystyki Ras</h2>

          {raceStats.length === 0 ? (
            <p>Brak danych do wyświetlenia</p>
          ) : (
            <div className="table-wrapper">
              <table>
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
                  {raceStats.map((race) => (
                    <tr key={race.race}>
                      <td>{race.race}</td>
                      <td>{race.powerRating}</td>
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
        </section>

        <section>
          <h2>Eclipse World Championship - 2013-2019 i inne</h2>
          <p>
            Statystyki, które udało mi się wyciągnąć z forum boardgamegeek.com,
            zawierają dane turniejów Eclipse jak i prywatnych partii graczy z forum.
          </p>

          {ewcStats.length === 0 ? (
            <p>Brak danych do wyświetlenia</p>
          ) : (
            <div className="table-wrapper">
              <table>
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
                  {ewcStats.map((race) => (
                    <tr key={`ewc-${race.race}`}>
                      <td>{race.race}</td>
                      <td>{race.powerRating}</td>
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
        </section>

        <section>
          <h2>Statystyki Graczy</h2>

          {playerStats.length === 0 ? (
            <p>Brak danych do wyświetlenia</p>
          ) : (
            <div className="table-wrapper">
              <table>
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
                  {playerStats.map((player) => (
                    <tr key={player.player}>
                      <td>{player.player}</td>
                      <td>{player.mostCommonRace}</td>
                      <td>{player.totalPoints}</td>
                      <td>{player.averagePoints}</td>
                      <td>{player.bestScore}</td>
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
        </section>
      </div>
    </div>
  );
};

export default Statistics;