// src/context/AuthContext.js
import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null);

  const login = (userData) => {
    localStorage.setItem('user', JSON.stringify(userData)); // Armazena os dados do usuário
    setUser(userData); // Atualiza o estado do usuário
  };

  const logout = () => {
    localStorage.removeItem('user'); // Remove os dados do usuário
    setUser(null); // Limpa o estado do usuário
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);