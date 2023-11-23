import React from 'react'
import './App.css';
import Login from './components/Login';
import Board from './components/board/Board';

function App() {
  return (
    <div className = "body">
      <header className = "header">
        <div className = "header__left">
          <img
            src = ""
            alt = ""></img>
          <span className = "header__left__menu">DesignMates</span>
        </div>
        <div className = "header__right">
          <Login/>
          <span className = "header__right__menu">share</span>
        </div>
      </header>
      <main className = "main">
        <Board/>
        <div className = "main__prev"></div>
      </main>
    </div>
  );
}

export default App;