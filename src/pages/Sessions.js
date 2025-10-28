import React from 'react';
import SessionCard from '../components/SessionCard.js';
import './Sessions.css';

// Tymczasowe dane bezpośrednio w pliku
const temporarySessions = [
  {
    id: 1,
    game: "Terraforming Mars",
    date: "2024-01-15",
    players: ["Anna", "Bartek", "Czarek", "Daria"],
    rating: 9,
    summary: "Intensywna sesja z wieloma strategiami korporacyjnymi.",
    tags: ["Strategia", "Nauka", "Konkurencyjna"]
  },
  {
    id: 2,
    game: "Carcassonne", 
    date: "2024-01-10",
    players: ["Ewa", "Filip", "Gosia"],
    rating: 8,
    summary: "Relaksująca sesja budowania średniowiecznego krajobrazu.",
    tags: ["Rodzinna", "Tile-laying", "Relaksująca"]
  }
];

const Sessions = () => {
  return (
    <div className="sessions-page">
      <div className="container">
        <h1>Relacje z sesji</h1>
        <div className="sessions-grid">
          {temporarySessions.map(session => (
            <SessionCard key={session.id} session={session} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sessions;