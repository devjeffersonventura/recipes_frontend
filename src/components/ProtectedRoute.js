// src/components/ProtectedRoute.js
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Importe o useAuth

const ProtectedRoute = () => {
  const { user } = useAuth(); // Use o contexto para acessar o estado do usuário

  // Se o usuário não estiver logado, redireciona para a página de login
  if (!user) {
    return <Navigate to="/login" />;
  }

  // Se o usuário estiver logado, renderiza o componente solicitado
  return <Outlet />;
};

export default ProtectedRoute;