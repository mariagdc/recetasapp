import { 
  List, ListItem, ListItemText, Divider, Box, Typography 
} from '@mui/material';
import { Check } from '@mui/icons-material';

function IngredientesList({ ingredientes, darkMode }) {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography 
        variant="h5" 
        sx={{ color: 'primary.main', fontWeight: 700, mb: 2 }}
      >
        🥘 Ingredientes
      </Typography>
      <List 
        sx={{ 
          backgroundColor: darkMode ? '#0f3460' : '#fff9f7',
          borderRadius: 2
        }}
      >
        {ingredientes.map((ing, idx) => (
          <Box key={idx}>
            <ListItem>
              <Check sx={{ mr: 2, color: 'secondary.main' }} />
              <ListItemText
                primary={`${ing.cantidad} ${ing.unidad}`}
                secondary={ing.nombre}
              />
            </ListItem>
            {idx < ingredientes.length - 1 && <Divider />}
          </Box>
        ))}
      </List>
    </Box>
  );
}

export default IngredientesList;