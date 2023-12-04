import React from 'react'
import Login from './Login';
import './Header.css';

export default function header() {
  return (
    <header>
      <div className = "header__box">
        <div className = "header__box__title">DesignMates</div>
        <div className = "header__box__menu">
          <Login/>
          <div className = "header__box__menu__font">share</div>
        </div>
      </div>
    </header>
  )
}
