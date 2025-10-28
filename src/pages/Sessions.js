import React from 'react';
import SessionCard from '../components/SessionCard';
import { sessions } from '../data/sessions';
import './Sessions.css';

const Sessions = () => {
  return (
    <div className="sessions-page">
      <div className="container">
        <h1>Relacje z sesji</h1>
        <div className="sessions-grid">
          {sessions.map(session => (
            <SessionCard key={session.id} session={session} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sessions;