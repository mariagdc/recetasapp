import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import { MenuBook, Brightness4, Brightness7 } from '@mui/icons-material';

function Navbar({ darkMode, onToggleDarkMode }) {
  return (
    <AppBar 
      position="sticky" 
      elevation={2}
      sx={{
        background: darkMode ? '#16213e' : '#ffffff',
        color: darkMode ? '#fff' : '#333'
      }}
    >
      <Toolbar>
        <MenuBook sx={{ mr: 2, color: 'primary.main', fontSize: 28 }} />
        <Typography 
          variant="h6" 
          sx={{ flexGrow: 1, fontWeight: 700 }}
        >
          🍽️ Mis Recetas
        </Typography>
        <IconButton 
          onClick={onToggleDarkMode} 
          color="inherit"
        >
          {darkMode ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;