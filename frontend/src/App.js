import React from 'react';
import ChatWindow from './components/ChatWindow';
import TextEditor from './components/TextEditor';
import ContextSection from './components/ContextSection';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>A few things to do</h1>
      <div className="page-container">
      <ChatWindow />
      <TextEditor />
      <ContextSection />
      </div>
    </div>
  );
}

export default App;

