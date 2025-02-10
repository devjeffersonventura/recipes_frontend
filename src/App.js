// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Login from './components/Login'; // Importe o componente Login correto
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/receitas" element={<Receitas />} />
          <Route path="/login" element={<Login />} /> {/* Use o componente Login importado */}
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return <h1>Página Inicial</h1>;
}

function Receitas() {
  return <h1>Receitas</h1>;
}

export default App;