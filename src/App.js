import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Home from './pages/Home.js';
import Sessions from './pages/Sessions.js';
import SessionDetail from './pages/SessionDetail.js';
import Rules from './pages/Rules.js';
import GuidePage from './components/GuidePage.js';
import About from './pages/About.js';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sesje" element={<Sessions />} />
            <Route path="/sesje/:sessionId" element={<SessionDetail />} />
            <Route path="/zasady-poradnik" element={<Rules />} />
            <Route path="/o-mnie" element={<About />} />
            <Route path="/guide/:guideId" element={<GuidePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;