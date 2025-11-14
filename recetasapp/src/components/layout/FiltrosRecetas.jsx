import { Box, FormControl, InputLabel, Select, MenuItem, Chip, Stack } from '@mui/material';
import { FilterList } from '@mui/icons-material';

function FiltrosRecetas({ difficultyFilter, setDifficultyFilter }) {
  return (
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
  );
}

export default FiltrosRecetas;