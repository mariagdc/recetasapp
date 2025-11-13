import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import { MenuBook, Brightness4, Brightness7 } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

function Navbar({ darkMode, onToggleDarkMode }) {
  const navigate = useNavigate(); 

  // Función para manejar el clic en el título
  const handleTitleClick = () => {
    // Redirige a la ruta principal de la aplicación, que es generalmente '/'
    navigate('/'); 
  };
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
        <IconButton
        color="inherit" 
          onClick={handleTitleClick} // 3. Aplicamos el evento de clic
          sx={{ mr: 0 }} // Puedes ajustar el margen si es necesario
          >
          <MenuBook sx={{ mr: 2, color: 'primary.main', fontSize: 28 }} />
          </IconButton>
        <Typography 
          variant="h6" 
          sx={{ flexGrow: 1, fontWeight: 700, cursor: 'pointer' }}
          onClick={handleTitleClick} // 4. Aplicamos el evento de clic al título
        >
         🧉 Regional Recetas
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