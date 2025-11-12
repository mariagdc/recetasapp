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
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Navbar from './components/layout/Navbar.jsx';
import RecetasListPage from './pages/RecetasListPage';
import RecetaDetallePage from './pages/RecetaDetallePage';
import { RecetasProvider } from './contexts/RecetasContext';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: { main: darkMode ? '#a78bfa' : '#d8b4fe' },
      secondary: { main: darkMode ? '#86efac' : '#bbf7d0' },
      background: {
        default: darkMode ? '#1a1a2e' : '#fef3f2',
        paper: darkMode ? '#16213e' : '#fef8f6'
      },
      success: { main: darkMode ? '#86efac' : '#86c5a8' },
      warning: { main: darkMode ? '#fbbf24' : '#f4a261' },
      error: { main: darkMode ? '#ff9999' : '#e76f51' }
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
          </Routes>
        </Router>
      </RecetasProvider>
    </ThemeProvider>
  );
}

export default App;