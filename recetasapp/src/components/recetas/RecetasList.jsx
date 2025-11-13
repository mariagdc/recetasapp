import { Grid, Box, Typography } from '@mui/material';
import RecetaCard from './RecetaCard';

function RecetasList({ recetas, darkMode }) {
  return (
    <Box sx={{ mb: 4 }}>
      <Box sx={{ mb: 4, textAlign: 'center' }}>
        <Typography 
          variant="h3" 
          sx={{ color: 'primary.main', fontWeight: 700, mb: 1 }}
        >
           ¿Qué comemos hoy?
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
          Descubre deliciosas recetas para preparar en casa
        </Typography>
      </Box>
      
      <Grid container spacing={3} alignItems="stretch">
        {recetas.map(receta => (
          <Grid item xs={12} sm={6} md={4} key={receta.id}>
            <RecetaCard receta={receta} darkMode={darkMode} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default RecetasList;