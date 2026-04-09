const PLACE_WEIGHTS = {
  1: 1.0,
  2: 0.75,
  3: 0.5,
  4: 0.25,
  5: 0.1,
  6: 0.05,
};

const buildRaceStats = (data) => {
  const raceMap = {};

  data.forEach((game) => {
    if (!game.race) return;

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
        sixthPlaces: 0,
      };
    }

    const entry = raceMap[game.race];

    entry.totalPoints += game.points;
    entry.gamesPlayed += 1;
    entry.places.push(game.place);

    if (game.place === 1) entry.wins += 1;
    if (game.place === 2) entry.secondPlaces += 1;
    if (game.place === 3) entry.thirdPlaces += 1;
    if (game.place === 4) entry.fourthPlaces += 1;
    if (game.place === 5) entry.fifthPlaces += 1;
    if (game.place === 6) entry.sixthPlaces += 1;

    if (game.playerCount) {
      entry.totalPlayerCount += game.playerCount;
    }
  });

  return Object.values(raceMap)
    .map((race) => {
      const powerRating =
        (race.wins * PLACE_WEIGHTS[1] +
          race.secondPlaces * PLACE_WEIGHTS[2] +
          race.thirdPlaces * PLACE_WEIGHTS[3] +
          race.fourthPlaces * PLACE_WEIGHTS[4] +
          race.fifthPlaces * PLACE_WEIGHTS[5] +
          race.sixthPlaces * PLACE_WEIGHTS[6]) /
        race.gamesPlayed;

      return {
        ...race,
        averagePointsPerGame:
          race.gamesPlayed > 0
            ? (race.totalPoints / race.gamesPlayed).toFixed(2)
            : '0.00',
        averagePlace:
          race.places.length > 0
            ? (
                race.places.reduce((sum, place) => sum + place, 0) /
                race.places.length
              ).toFixed(2)
            : '0.00',
        averagePlayerCount:
          race.gamesPlayed > 0
            ? (race.totalPlayerCount / race.gamesPlayed).toFixed(1)
            : '0',
        winRate:
          race.gamesPlayed > 0
            ? `${((race.wins / race.gamesPlayed) * 100).toFixed(1)}%`
            : '0%',
        powerRating: `${(powerRating * 100).toFixed(1)}%`,
      };
    })
    .sort((a, b) => parseFloat(b.powerRating) - parseFloat(a.powerRating));
};

export const calculateRaceStats = (data) => buildRaceStats(data);

export const calculateEwcStats = (data) => buildRaceStats(data);

export const calculatePlayerStats = (data) => {
  const playerMap = {};

  data.forEach((game) => {
    if (!game.player) return;

    if (!playerMap[game.player]) {
      playerMap[game.player] = {
        player: game.player,
        points: [],
        places: [],
        races: [],
        wins: 0,
      };
    }

    const entry = playerMap[game.player];

    entry.points.push(game.points);
    entry.places.push(game.place);
    entry.races.push(game.race);

    if (game.place === 1) {
      entry.wins += 1;
    }
  });

  return Object.values(playerMap)
    .map((player) => {
      const racesCount = {};

      player.races.forEach((race) => {
        racesCount[race] = (racesCount[race] || 0) + 1;
      });

      const mostCommonRace =
        Object.keys(racesCount).reduce(
          (best, current) =>
            racesCount[best] > racesCount[current] ? best : current,
          player.races[0] || ''
        ) || '';

      const totalPoints = player.points.reduce((sum, points) => sum + points, 0);
      const totalGames = player.points.length;
      const bestScore = totalGames > 0 ? Math.max(...player.points) : 0;

      return {
        player: player.player,
        mostCommonRace,
        totalPoints,
        averagePoints:
          totalGames > 0 ? (totalPoints / totalGames).toFixed(2) : '0.00',
        bestScore,
        averagePlace:
          totalGames > 0
            ? (
                player.places.reduce((sum, place) => sum + place, 0) / totalGames
              ).toFixed(2)
            : '0.00',
        totalGames,
        wins: player.wins,
        winRate:
          totalGames > 0
            ? `${((player.wins / totalGames) * 100).toFixed(1)}%`
            : '0%',
      };
    })
    .sort((a, b) => b.totalPoints - a.totalPoints);
};

export const calculateSummaryStats = (playerData, playerStats, raceStats) => {
  const totalWins = playerData.filter((game) => game.place === 1).length;
  const averagePoints =
    playerData.length > 0
      ? (
          playerData.reduce((sum, game) => sum + game.points, 0) / playerData.length
        ).toFixed(1)
      : '0';

  return {
    totalGames: totalWins,
    uniquePlayers: playerStats.length,
    uniqueRaces: raceStats.length,
    averagePoints,
  };
};