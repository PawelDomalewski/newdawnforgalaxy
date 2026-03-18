import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BackToTop from './components/BackToTop.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
const Home = lazy(() => import('./pages/Home.js'));
const Sessions = lazy(() => import('./pages/Sessions.js'));
const SessionDetail = lazy(() => import('./pages/SessionDetail.js'));
const Rules = lazy(() => import('./pages/Rules.js'));
const GuidePage = lazy(() => import('./components/GuidePage.js'));
const Statistics = lazy(() => import('./pages/Statistics.js'));
import About from './pages/About.js';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Suspense fallback={<div className='eclipse'>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sesje" element={<Sessions />} />
              <Route path="/sesje/:sessionId" element={<SessionDetail />} />
              <Route path="/zasady-poradnik" element={<Rules />} />
              <Route path="/statystyki" element={<Statistics />} />
              <Route path="/o-mnie" element={<About />} />
              <Route path="/guide/:guideId" element={<GuidePage />} />
            </Routes>
          </Suspense>
        </main>
        <BackToTop />
        <Footer />
      </div>
    </Router>
  );
}

export default App;