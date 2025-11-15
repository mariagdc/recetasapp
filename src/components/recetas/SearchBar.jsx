import { TextField, Box, InputAdornment } from '@mui/material';
import { Search } from '@mui/icons-material';

function SearchBar({ value, onChange }) {
  return (
    <Box sx={{ mb: 4 }}>
      <TextField
        fullWidth
        placeholder="🔍 Buscar recetas por nombre o descripción..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search sx={{ color: 'primary.main', mr: 1 }} />
            </InputAdornment>
          ),
        }}
        sx={{
          '& .MuiOutlinedInput-root': {
            borderRadius: 2,
            transition: 'all 0.3s ease',
            '&:hover': {
              boxShadow: '0 4px 12px rgba(216, 180, 254, 0.2)',
            },
            '&.Mui-focused': {
              boxShadow: '0 4px 20px rgba(216, 180, 254, 0.3)',
            },
          },
        }}
      />
    </Box>
  );
}

export default SearchBar;