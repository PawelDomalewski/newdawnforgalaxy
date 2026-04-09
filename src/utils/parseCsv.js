export const parseCSV = (csvText) => {
  const lines = csvText.split('\n').filter((line) => line.trim() !== '');

  if (lines.length === 0) {
    return [];
  }

  const headers = lines[0].split(',').map((header) => header.trim());
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
          game.points = parseInt(value, 10) || 0;
          break;
        case 'Miejsce':
          game.place = parseInt(value, 10) || 0;
          break;
        case 'Wygrany':
          game.winner = value;
          break;
        case 'Liczba Graczy':
          game.playerCount = parseInt(value, 10) || 0;
          break;
        case 'Data':
          game.date = value;
          break;
        case 'Czas':
          game.time = value;
          break;
        case 'Hexy':
          game.hexy = parseInt(value, 10) || 0;
          break;
        case 'Technologia':
          game.technology = parseInt(value, 10) || 0;
          break;
        case 'Reputacja':
          game.reputation = parseInt(value, 10) || 0;
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