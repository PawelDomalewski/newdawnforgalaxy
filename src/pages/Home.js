import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

// Tymczasowe dane
const temporarySessions = [
  {
    id: 1,
    game: "Terraforming Mars",
    date: "2024-01-15",
    summary: "Intensywna sesja z wieloma strategiami korporacyjnymi."
  },
  {
    id: 2,
    game: "Carcassonne",
    date: "2024-01-10", 
    summary: "Relaksująca sesja budowania średniowiecznego krajobrazu."
  }
];

const Home = () => {
  const latestSessions = temporarySessions.slice(0, 3);

  return (
    <div className="home-page">
      {/* ... reszta kodu pozostaje bez zmian ... */}
    </div>
  );
};

export default Home;