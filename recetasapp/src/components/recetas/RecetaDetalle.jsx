import {
  Paper, Box, Typography, Stack, Chip, Divider, Button
} from '@mui/material';
import { AccessTime, People, ArrowBack } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import IngredientesList from './IngredientesList';

function RecetaDetalle({ receta, darkMode }) {
  const navigate = useNavigate();

  const getDifficultyColor = (dificultad) => {
    switch(dificultad) {
      case 'Fácil': return 'success';
      case 'Media': return 'warning';
      case 'Difícil': return 'error';
      default: return 'default';
    }
  };

  return (
    <>
      <Button 
        startIcon={<ArrowBack />} 
        onClick={() => navigate('/')} 
        sx={{ mb: 3, color: 'primary.main' }}
      >
        Volver al Listado
      </Button>

      <Paper 
        sx={{ 
          overflow: 'hidden', 
          mb: 3,
          backgroundColor: darkMode ? '#0f3460' : '#fff9f7'
        }}
      >
        <Box
          component="img"
          src={receta.imagen}
          alt={receta.titulo}
          sx={{ width: '100%', height: 400, objectFit: 'cover' }}
        />
      </Paper>

      <Box sx={{ mb: 4 }}>
        <Typography 
          variant="h3" 
          sx={{ color: 'primary.main', fontWeight: 700, mb: 2 }}
        >
          {receta.titulo}
        </Typography>
        <Typography 
          variant="body1" 
          sx={{ color: 'text.secondary', mb: 3, fontSize: '1.1rem' }}
        >
          {receta.descripcion}
        </Typography>

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 3 }}>
          <Chip
            icon={<AccessTime />}
            label={receta.tiempoPreparacion}
            size="medium"
            variant="outlined"
          />
          <Chip
            label={receta.dificultad}
            size="medium"
            color={getDifficultyColor(receta.dificultad)}
          />
          <Chip
            icon={<People />}
            label={`${receta.porciones} porciones`}
            size="medium"
            variant="outlined"
          />
        </Stack>
      </Box>

      <Divider sx={{ my: 3 }} />

      <IngredientesList ingredientes={receta.ingredientes} darkMode={darkMode} />

      <Box>
        <Typography 
          variant="h5" 
          sx={{ color: 'primary.main', fontWeight: 700, mb: 2 }}
        >
          👨‍🍳 Preparación
        </Typography>
        <Stack spacing={2}>
          {receta.pasos.map((paso, idx) => (
            <Paper
              key={idx}
              sx={{
                p: 2,
                backgroundColor: darkMode ? '#0f3460' : '#fff9f7',
                border: `2px solid ${darkMode ? '#2a4a7c' : '#f0e6e6'}`,
                display: 'flex',
                gap: 2
              }}
            >
              <Box
                sx={{
                  minWidth: 40,
                  height: 40,
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #d8b4fe 0%, #86efac 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  color: '#333'
                }}
              >
                {idx + 1}
              </Box>
              <Typography variant="body1" sx={{ alignSelf: 'center' }}>
                {paso}
              </Typography>
            </Paper>
          ))}
        </Stack>
      </Box>
    </>
  );
}

export default RecetaDetalle;