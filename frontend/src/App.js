import React from 'react';
import ChatWindow from './components/ChatWindow';
import TextEditor from './components/TextEditor';
import ContextSection from './components/ContextSection';
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme(); // Default MUI theme (customize later if desired)

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <h1>Chat me up!</h1>
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