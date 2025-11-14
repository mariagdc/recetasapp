/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default <App></App>*/
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage.jsx';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Navbar from './components/layout/Navbar.jsx';
import Footer from './components/layout/Footer.jsx';
import RecetasListPage from './pages/RecetasListPage';
import RecetaDetallePage from './pages/RecetaDetallePage';
import { RecetasProvider } from './contexts/RecetasContext';



function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
     primary: { 
          // Verde de Palmera (Color principal de la marca)
        main: darkMode ? '#66BB6A' : '#388E3C' // Verde más suave / Verde más intenso
      },
      secondary: { 
          // Arena / Tostado (Acento)
        main: darkMode ? '#FFCC80' : '#FFB74D' // Naranja claro / Naranja medio
      },
      
      background: {
          // Fondo de la página (crema claro / verde oscuro)
        default: darkMode ? '#1E3F27' : '#F8F0E3', 
          // Fondo de tarjetas (tono más oscuro / tono de papel limpio)
        paper: darkMode ? '#2E5D3F' : '#FFFFFF' 
      },

      // El texto se ajustará automáticamente, pero podemos forzar un contraste fuerte:
      text: {
          primary: darkMode ? '#FFFFFF' : '#333333',
          secondary: darkMode ? '#CCCCCC' : '#555555',
      },
      
      // Colores de Estado (Ajustados al nuevo esquema)
      success: { 
          // Fácil (Verde suave)
        main: darkMode ? '#A5D6A7' : '#4CAF50' 
      },
      warning: { 
          // Media (Amarillo/Ocre)
        main: darkMode ? '#FFD54F' : '#FF9800' 
      },
      error: { 
          // Difícil (Rojo ladrillo)
        main: darkMode ? '#E57373' : '#D32F2F' 
      }
    },
    typography: {
      fontFamily: '"Segoe UI", "Roboto", "Oxygen"',
      h3: { fontWeight: 600 },
      h5: { fontWeight: 600 }
    },
    shape: { borderRadius: 12 }
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RecetasProvider>
        <Router>
          <Navbar 
            darkMode={darkMode} 
            onToggleDarkMode={() => setDarkMode(!darkMode)} 
          />
          <Routes>
            <Route 
              path="/" 
              element={<HomePage darkMode={darkMode} />} 
            />
            <Route 
              path="/recetas" 
              element={<RecetasListPage darkMode={darkMode} />} 
            />
            <Route 
              path="/" 
              element={<RecetasListPage darkMode={darkMode} />} 
            />
            <Route 
              path="/recetas" 
              element={<RecetasListPage darkMode={darkMode} />} 
            />
            <Route 
              path="/recetas/:id" 
              element={<RecetaDetallePage darkMode={darkMode} />} 
            />
            <Route 
              path="*" 
              element={<NotFoundPage darkMode={darkMode} />} 
            />
          </Routes>
          <Footer darkMode={darkMode} />
        </Router>
      </RecetasProvider>
    </ThemeProvider>
  );
}

export default App;