// src/components/Navbar.js
import React from 'react';
import { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem, Box } from '@mui/material';
import { Link } from 'react-router-dom'; // Se estiver usando React Router
import { useAuth } from '../context/AuthContext'; // Importe o useAuth

function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null); // Estado para controlar o submenu
  const { user, logout } = useAuth(); // Use o contexto para acessar o usuário e o logout

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget); // Abre o submenu
  };

  const handleMenuClose = () => {
    setAnchorEl(null); // Fecha o submenu
  };

  const handleLogout = () => {
    logout(); // Chama o método de logout do contexto
  };  

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Meu Site
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/receitas">
          Receitas
        </Button>
        {user ? (
          <Box>
            <Button color="inherit" onClick={handleMenuOpen}>
              {user.name}
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </Box>
        ) : (
          <Button color="inherit" component={Link} to="/login">
            Login
          </Button>
        )}        
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;