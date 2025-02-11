// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Login from './components/Login'; // Importe o componente Login correto
import Dashboard from './components/Dashboard';
import ProtectedRoute from './components/ProtectedRoute'; // Importe o ProtectedRoute
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext'; // Importe o AuthProvider

function App() {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} /> {/* Use o componente Login importado */}
            <Route path="/receitas" element={<Receitas />} />

            <Route element={<ProtectedRoute />}>
              <Route path="/dashboard" element={<Dashboard />} /> {/* Rota do Dashboard */}
              <Route path="/cadastro-usuario" element={<CadastroUsuario />} /> {/* Rota de Cadastro de Usuário */}
              <Route path="/cadastro-receitas" element={<CadastroReceitas />} /> {/* Rota de Cadastro de Receitas */}
            </Route>
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

function Home() {
  return <h1>Página Inicial</h1>;
}

function Receitas() {
  return <h1>Receitas</h1>;
}

function CadastroUsuario() {
  return <h1>Cadastro de Usuário</h1>; // Página de Cadastro de Usuário
}

function CadastroReceitas() {
  return <h1>Cadastro de Receitas</h1>; // Página de Cadastro de Receitas
}

export default App;