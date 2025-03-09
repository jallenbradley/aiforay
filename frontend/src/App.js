import React from 'react';
import ChatWindow from './components/ChatWindow';
import TextEditor from './components/TextEditor';
import ContextSection from './components/ContextSection';
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';

//const theme = createTheme(); // Default MUI theme (customize later if desired)
const minimalTheme = createTheme({
  palette: {
    primary: { main: '#1976d2' }, // Blue
    secondary: { main: '#dc004e' }, // Red-pink
    background: { default: '#fafafa', paper: '#fff' },
  },
  typography: {
    fontFamily: "'Lato', sans-serif", // Optional: Google Fonts
  },
  components: {
    MuiCard: { styleOverrides: { root: { borderRadius: 12, boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)' } } },
    MuiButton: { styleOverrides: { root: { borderRadius: 8, padding: '8px 16px' } } },
  },
});


function App() {
  return (
    <ThemeProvider theme={minimalTheme}>
      <div className="App">
        <div className="page-container">
          <ChatWindow />
          <TextEditor />
          <ContextSection />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;