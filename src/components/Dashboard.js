import React from 'react';
import { Typography, Container, Box } from '@mui/material';

function Dashboard() {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Olá, {user ? user.name : 'Usuário'}!
        </Typography>
      </Box>
    </Container>
  );
}

export default Dashboard;