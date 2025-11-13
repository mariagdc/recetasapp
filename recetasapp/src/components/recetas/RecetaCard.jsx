import {
  Card, CardMedia, CardContent, CardActions, Button,
  Typography, Chip, Stack
} from '@mui/material';
import { AccessTime, People } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

function RecetaCard({ receta, darkMode }) {
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
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: darkMode 
            ? '0 12px 20px rgba(167, 139, 250, 0.3)' 
            : '0 12px 20px rgba(216, 180, 254, 0.4)'
        },
        backgroundColor: darkMode ? '#0f3460' : '#fff9f7',
        border: `1px solid ${darkMode ? '#2a4a7c' : '#f0e6e6'}`
      }}
    >
      <CardMedia
        component="img"
        height="180"
        image={receta.imagen}
        alt={receta.titulo}
        sx={{ objectFit: 'cover' }}
      />
      <CardContent sx={{ flexGrow: 1, display: 'flex', // 👈 ¡NUEVO! Hace que CardContent sea un contenedor Flex
    flexDirection: 'column', }}>
        <Typography 
          variant="h5" 
          gutterBottom 
          sx={{ color: 'primary.main', fontWeight: 700 }}
        >
          {receta.titulo}
        </Typography>
        <Typography 
          variant="body2" 
          sx={{ color: 'text.secondary', mb: 2 , flexGrow: 1}}
        >
          {receta.descripcion}
        </Typography>
        <Stack direction="row" spacing={1} sx={{ mb: 1, flexWrap: 'wrap', gap: 1 }}>
          <Chip
            icon={<AccessTime />}
            label={receta.tiempoPreparacion}
            size="small"
            variant="outlined"
          />
          <Chip
            label={receta.dificultad}
            size="small"
            color={getDifficultyColor(receta.dificultad)}
          />
        </Stack>
        <Chip
          icon={<People />}
          label={`${receta.porciones} porciones`}
          size="small"
          variant="outlined"
        />
      </CardContent>
      <CardActions>
        <Button
          fullWidth
          variant="contained"
          onClick={() => navigate(`/recetas/${receta.id}`)}
          sx={{
            background: 'linear-gradient(135deg, #d8b4fe 0%, #86efac 100%)',
            color: '#333'
          }}
        >
          Ver Receta
        </Button>
      </CardActions>
    </Card>
  );
}

export default RecetaCard;