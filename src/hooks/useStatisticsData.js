import { useCallback, useEffect, useState } from 'react';
import { parseCSV } from '../utils/parseCsv.js';
import {
  calculateRaceStats,
  calculatePlayerStats,
  calculateEwcStats,
} from '../utils/statistics.js';

const loadCsvFile = async (path) => {
  const response = await fetch(path);

  if (!response.ok) {
    throw new Error(`Nie znaleziono pliku CSV. Status: ${response.status}`);
  }

  return response.text();
};

export const useStatisticsData = () => {
  const [playerData, setPlayerData] = useState([]);
  const [raceStats, setRaceStats] = useState([]);
  const [ewcStats, setEwcStats] = useState([]);
  const [playerStats, setPlayerStats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const applyParsedData = useCallback((parsedData) => {
    setPlayerData(parsedData);
    setRaceStats(calculateRaceStats(parsedData));
    setPlayerStats(calculatePlayerStats(parsedData));
  }, []);

  const loadEwcData = useCallback(async () => {
    try {
      const csvText = await loadCsvFile('images/sesje/ewc.csv');
      const parsedData = parseCSV(csvText);

      if (parsedData.length === 0) {
        setEwcStats([]);
        return;
      }

      setEwcStats(calculateEwcStats(parsedData));
    } catch (err) {
      setEwcStats([]);
    }
  }, []);

  const refreshData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const csvText = await loadCsvFile('images/sesje/stat.csv');
      const parsedData = parseCSV(csvText);

      if (parsedData.length === 0) {
        throw new Error('Plik CSV jest pusty lub zawiera nieprawidłowe dane');
      }

      applyParsedData(parsedData);
      await loadEwcData();
    } catch (err) {
      setError(`Błąd wczytywania danych: ${err.message}`);
    } finally {
      setLoading(false);
    }
  }, [applyParsedData, loadEwcData]);

  const handleFileUpload = useCallback(
    (event) => {
      const file = event.target.files[0];

      if (!file) return;

      const reader = new FileReader();

      reader.onload = (e) => {
        try {
          const csvText = e.target.result;
          const parsedData = parseCSV(csvText);

          applyParsedData(parsedData);
          setError(null);
        } catch (err) {
          setError(`Błąd parsowania pliku: ${err.message}`);
        }
      };

      reader.onerror = () => {
        setError('Błąd odczytu pliku');
      };

      reader.readAsText(file);
    },
    [applyParsedData]
  );

  useEffect(() => {
    refreshData();
  }, [refreshData]);

  return {
    playerData,
    raceStats,
    ewcStats,
    playerStats,
    loading,
    error,
    refreshData,
    handleFileUpload,
  };
};