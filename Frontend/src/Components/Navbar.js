import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';
function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsSmallScreen(true);
      } else {
        setIsSmallScreen(false);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <AppBar position="static" sx={{ backgroundColor: 'white' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'black', textAlign: 'left' }}>
          <img
            src="https://sherise.vercel.app/static/media/logo.de65ad16d0c1c7071226bec80fbe99a4.svg"
            alt="SheRise Logo"
            style={{ height: '40px', marginRight: '10px' }}
          />
        </Typography>
        {isSmallScreen ? (
          <IconButton edge="end" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
            <MenuIcon sx={{ color: 'black' }} />
          </IconButton>
        ) : (
          <div>
            <Button color="inherit" sx={{ color: 'black' }} component={Link} to="/">
              Home
            </Button>
            <Button color="inherit" sx={{ color: 'black' }} component={Link} to="/scholarship">
              Scholarship
            </Button>
            <Button color="inherit" sx={{ color: 'black' }} component={Link} to="/developers">
              Developers
            </Button>
            <Button color="inherit" sx={{ color: 'black' }} component={Link} to="/contact-us">
              Contact Us
            </Button>
            <Button
              color="inherit"
              sx={{ color: 'black', border: '2px solid pink', marginRight: '10px' }}
              component={Link}
              to="/login"
            >
              Login
            </Button>
            <Button color="inherit" sx={{ color: 'black', border: '2px solid pink' }} component={Link} to="/register">
              Register
            </Button>
          </div>
        )}
      </Toolbar>
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <List>
          <ListItem component={Link} to="/" onClick={toggleDrawer(false)}>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem component={Link} to="/scholarship" onClick={toggleDrawer(false)}>
            <ListItemText primary="Scholarship" />
          </ListItem>
          <ListItem component={Link} to="/developers" onClick={toggleDrawer(false)}>
            <ListItemText primary="Developers" />
          </ListItem>
          <ListItem component={Link} to="/contact-us" onClick={toggleDrawer(false)}>
            <ListItemText primary="Contact Us" />
          </ListItem>
          <ListItem component={Link} to="/login" onClick={toggleDrawer(false)}>
            <ListItemText primary="Login" />
          </ListItem>
          <ListItem component={Link} to="/register" onClick={toggleDrawer(false)}>
            <ListItemText primary="Register" />
          </ListItem>
        </List>
      </Drawer>
    </AppBar>
  );
}
export default Navbar;