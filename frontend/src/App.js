import React from 'react';
import ChatWindow from './components/ChatWindow';
import MainSection from './components/MainSection';
import ContextSection from './components/ContextSection';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>A few things to do</h1>
      <div className="page-container">
      <ChatWindow />
      <MainSection />
      <ContextSection />
      </div>
    </div>
  );
}

export default App;

