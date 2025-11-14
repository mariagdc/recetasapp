import { Container, CircularProgress, Box, Typography,FormControl, InputLabel, Select, MenuItem, Chip, Stack } from '@mui/material';
import { FilterList } from '@mui/icons-material';
import { useState, useMemo } from 'react';
import { useRecetas } from '../contexts/RecetasContext';
import SearchBar from '../components/recetas/SearchBar';
import RecetasList from '../components/recetas/RecetasList';
import FiltrosRecetas from '../components/layout/FiltrosRecetas';

function RecetasListPage({ darkMode }) {
  const { recetas, isLoading } = useRecetas();
  const [searchTerm, setSearchTerm] = useState('');
  const [difficultyFilter, setDifficultyFilter] = useState('todas');

  const recetasFiltradas = useMemo(() => {
    return recetas.filter(receta => {
      const matchesSearch = 
        receta.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
        receta.descripcion.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesDifficulty = 
        difficultyFilter === 'todas' || 
        receta.dificultad === difficultyFilter;
      
      return matchesSearch && matchesDifficulty;
    });
  }, [recetas, searchTerm, difficultyFilter]); // 👈 ¡Agregar difficultyFilter aquí!

  // Función para el mensaje de resultados
  const getResultMessage = () => {
    if (searchTerm && difficultyFilter !== 'todas') {
      return `Se encontraron ${recetasFiltradas.length} receta(s) para "${searchTerm}" con dificultad ${difficultyFilter}`;
    } else if (searchTerm) {
      return `Se encontraron ${recetasFiltradas.length} receta(s) para "${searchTerm}"`;
    } else if (difficultyFilter !== 'todas') {
      return `Se encontraron ${recetasFiltradas.length} receta(s) con dificultad ${difficultyFilter}`;
    }
    return null; // No mostrar mensaje cuando no hay filtros
  };

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

      {/* Filtro de dificultad */}
      <Box sx={{ mt: 3, mb: 2 }}>
        <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap">
          <FilterList color="primary" />
          
          <FormControl sx={{ minWidth: 150 }} size="small">
            <InputLabel>Dificultad</InputLabel>
            <Select
              value={difficultyFilter}
              label="Dificultad"
              onChange={(e) => setDifficultyFilter(e.target.value)}
            >
              <MenuItem value="todas">Todas</MenuItem>
              <MenuItem value="Fácil">Fácil</MenuItem>
              <MenuItem value="Media">Media</MenuItem>
              <MenuItem value="Difícil">Difícil</MenuItem>
            </Select>
          </FormControl>

          {/* Mostrar filtro activo como chip */}
          {difficultyFilter !== 'todas' && (
            <Chip 
              label={`Dificultad: ${difficultyFilter}`}
              onDelete={() => setDifficultyFilter('todas')}
              color="primary"
              variant="outlined"
            />
          )}
        </Stack>
      </Box>

      {recetasFiltradas.length === 0 ? (
        <Box sx={{ textAlign: 'center', py: 8 }}>
          <Box sx={{ fontSize: 80, mb: 2 }}>🔍</Box>
          <Typography variant="h5" sx={{ color: 'text.secondary' }}>
            {searchTerm || difficultyFilter !== 'todas' 
              ? `No se encontraron recetas ${searchTerm ? `para "${searchTerm}"` : ''} ${difficultyFilter !== 'todas' ? `con dificultad ${difficultyFilter}` : ''}`
              : 'No hay recetas disponibles'
            }
          </Typography>
        </Box>
      ) : (
        <>
          {/* Mostrar mensaje de resultados cuando hay filtros activos */}
          {(searchTerm || difficultyFilter !== 'todas') && (
            <Box sx={{ mb: 3, color: 'text.secondary' }}>
              <Typography variant="body1">
                {getResultMessage()}
              </Typography>
            </Box>
          )}
          
          <RecetasList recetas={recetasFiltradas} darkMode={darkMode} />
        </>
      )}
    </Container>
  );
}

export default RecetasListPage;