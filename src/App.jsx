import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import BuildSmarterPage from './components/BuildSmarterPage';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <>
              <Navbar />
              <LandingPage />
            </>
          } />
          <Route path="/build-smarter" element={
            <>
              <Navbar />
              <BuildSmarterPage />
            </>
          } />
        </Routes>
        <div className="popups-rack"></div>
      </div>
    </Router>
  );
}

export default App
