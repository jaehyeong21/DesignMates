import React from 'react'
import './App.css';
import Board from './components/board/Board';
import Header from './components/Header';

function App() {
  return (
    <div className = "body">
      <Header
        className = "header"/>
      <main className = "main">
        <Board/>
      </main>
    </div>
  );
}

export default App;