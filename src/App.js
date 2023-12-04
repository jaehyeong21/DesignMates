import React from 'react'
import './App.css';
import Board from './components/board/Board';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className = "body">
      <Header
        className = "header"/>
      <main className = "main">
        <Board/>
      </main>
      {/* <Footer/> */}
    </div>
  );
}

export default App;