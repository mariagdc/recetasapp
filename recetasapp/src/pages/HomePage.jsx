import { Container, Box, Typography, Button, Paper, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function HomePage({ darkMode }) {
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg" sx={{ py: 10 }}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Box>
            <Typography 
              variant="h2" 
              sx={{ color: 'primary.main', fontWeight: 700, mb: 2 }}
            >
              🧉Regional Recetas
            </Typography>
            <Typography 
              variant="h5" 
              sx={{ color: 'text.secondary', mb: 3 }}
            >
              Descubre las mejores recetas de cocina hechas con amor
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ mb: 4, fontSize: '1.1rem' }}
            >
              Explora nuestro catálogo de recetas deliciosas, fáciles de seguir 
              y perfectas para cualquier ocasión. Desde platos principales hasta 
              postres exquisitos.
            </Typography>
            <Button 
              variant="contained" 
              size="large"
              onClick={() => navigate('/recetas')}
              sx={{
                background: 'linear-gradient(135deg, #d8b4fe 0%, #86efac 100%)',
                color: '#333',
                px: 4
              }}
            >
              Ver Todas las Recetas
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              p: 3,
              backgroundColor: darkMode ? '#0f3460' : '#fff9f7',
              border: `2px solid ${darkMode ? '#2a4a7c' : '#f0e6e6'}`
            }}
          >
            <Box
              component="img"
              src="https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=500"
              alt="Comida deliciosa"
              sx={{ width: '100%', borderRadius: 2 }}
            />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default HomePage;