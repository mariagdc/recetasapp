import { Box, Container, Typography, Stack } from '@mui/material';
import { Email, Phone } from '@mui/icons-material';

function Footer({ darkMode }) {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      sx={{
        backgroundColor: darkMode ? '#0f3460' : '#f5e6e1',
        color: 'text.primary',
        py: 4,
        mt: 8,
        borderTop: `1px solid ${darkMode ? '#2a4a7c' : '#f0e6e6'}`
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={2} sx={{ textAlign: 'center' }}>
          <Typography variant="h6">
            🧉 Recetas
          </Typography>
          <Stack direction="row" spacing={2} justifyContent="center">
            <Typography variant="body2">
              <Email sx={{ mr: 1, verticalAlign: 'middle', fontSize: 18 }} />
              regionalesrecetas@gmail.com
            </Typography>
            <Typography variant="body2">
              <Phone sx={{ mr: 1, verticalAlign: 'middle', fontSize: 18 }} />
              +54 376 4074121
            </Typography>
          </Stack>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            © {currentYear} RegionalesRecetas 
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}

export default Footer;