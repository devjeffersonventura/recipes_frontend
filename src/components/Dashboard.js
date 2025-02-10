// src/components/Dashboard.js
import React from 'react';
import { Button, Container, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2, // Espaçamento entre os botões
        }}
      >
        <Typography component="h1" variant="h5">
          Dashboard
        </Typography>
        <Button
          variant="contained"
          fullWidth
          component={Link}
          to="/cadastro-usuario"
        >
          Cadastro de Usuário
        </Button>
        <Button
          variant="contained"
          fullWidth
          component={Link}
          to="/cadastro-receitas"
        >
          Cadastro de Receitas
        </Button>
      </Box>
    </Container>
  );
}

export default Dashboard;