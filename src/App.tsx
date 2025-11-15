import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Negocio from './pages/Negocio';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/negocio" element={<Negocio />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
