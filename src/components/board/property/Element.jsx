import React from 'react';
import './Element.css';
import { FaRegCircle } from "react-icons/fa";
import { FaRegSquare } from "react-icons/fa6";

export default function Element({setShape,handleFileChange }) {

  const Circle = () => {
    setShape("circle");
  }

  const Square = () => {
    setShape("square");
  }

  return (
    <div className = "element">
      <div>
        <div className = "text__box__font">도형선택</div>
        <button 
          onClick={Circle}
          className = "element__button">
            <FaRegCircle className = "element__button__circle"/>
        </button>
        <button 
          onClick={Square}
          className = "element__button">
            <FaRegSquare className = "element__button__square"/>
        </button>
      </div>
      <div>
        <div className = "text__box__font">이미지 선택</div>
        <input 
          type = "file"
          accept = "image/*"
          id = "file"
          onChange={handleFileChange}
          className="text__box__file"/>
      </div>
    </div>
  );
}