import { Container, CircularProgress, Box, Typography } from '@mui/material';
import { useState, useMemo } from 'react';
import { useRecetas } from '../contexts/RecetasContext';
import SearchBar from '../components/recetas/SearchBar';
import RecetasList from '../components/recetas/RecetasList';

function RecetasListPage({ darkMode }) {
  const { recetas, isLoading } = useRecetas();
  const [searchTerm, setSearchTerm] = useState('');

  const recetasFiltradas = useMemo(() => {
    return recetas.filter(receta =>
      receta.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      receta.descripcion.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [recetas, searchTerm]);

  if (isLoading) {
    return (
      <Container 
        sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          minHeight: '70vh' 
        }}
      >
        <CircularProgress />
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <SearchBar value={searchTerm} onChange={setSearchTerm} />

      {recetasFiltradas.length === 0 ? (
        <Box sx={{ textAlign: 'center', py: 8 }}>
          <Box sx={{ fontSize: 80, mb: 2 }}>🔍</Box>
          <Typography variant="h5" sx={{ color: 'text.secondary' }}>
            No se encontraron recetas para "{searchTerm}"
          </Typography>
        </Box>
      ) : (
        <>
          {searchTerm && (
            <Box sx={{ mb: 3, color: 'text.secondary' }}>
              Se encontraron {recetasFiltradas.length} receta(s)
            </Box>
          )}
          <RecetasList recetas={recetasFiltradas} darkMode={darkMode} />
        </>
      )}
    </Container>
  );
}

export default RecetasListPage;