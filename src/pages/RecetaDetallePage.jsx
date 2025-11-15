import { Container, Typography, Button } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import { useRecetas } from '../contexts/RecetasContext';
import RecetaDetalle from '../components/recetas/RecetaDetalle';

function RecetaDetallePage({ darkMode }) {
  const { id } = useParams();
  const { getRecetaById } = useRecetas();
  const navigate = useNavigate();
  const receta = getRecetaById(id);

  if (!receta) {
    return (
      <Container sx={{ py: 8, textAlign: 'center' }}>
        <Typography variant="h4" sx={{ mb: 2 }}>
          😕 Receta no encontrada
        </Typography>
        <Button 
          variant="contained" 
          onClick={() => navigate('/')}
        >
          Volver al Listado
        </Button>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <RecetaDetalle receta={receta} darkMode={darkMode} />
    </Container>
  );
}

export default RecetaDetallePage;