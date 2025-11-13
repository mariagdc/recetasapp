import { Container, Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ArrowBack } from '@mui/icons-material';

function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <Container sx={{ py: 10, textAlign: 'center' }}>
      <Typography variant="h1" sx={{ fontSize: 80, mb: 2 }}>
        404
      </Typography>
      <Typography variant="h4" sx={{ color: 'primary.main', mb: 2 }}>
        🧐🍽 Página no encontrada
      </Typography>
      <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary' }}>
        Lo sentimos, la receta que buscas no existe o fue eliminada.
      </Typography>
      <Button 
        variant="contained" 
        startIcon={<ArrowBack />}
        onClick={() => navigate('/')}
      >
        Volver al Inicio
      </Button>
    </Container>
  );
}

export default NotFoundPage;