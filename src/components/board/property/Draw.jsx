import React, {useState}from 'react';
import './Draw.css';
import { BsEraser } from "react-icons/bs";
import { BiColorFill } from "react-icons/bi";
import { GrPowerReset } from "react-icons/gr";
import { MdOutlineColorLens } from "react-icons/md";

export default function DrawMenu({ onWidthSize, onFill, onEraser, onColorChange, onColorChanges, onReset, fontWidth}){
  const [colorMu, setColorMu] = useState(false);

  const handleColorMu = () => {
    setColorMu(!colorMu);
  }
  return (
    <div className="Draw">
      <div className = "Draw__buttonBox">
        <button
          className="Draw__buttonBox__button"
          onClick={onFill}>
          <BiColorFill />
        </button>
        <button
          className="Draw__buttonBox__button"
          onClick={onEraser}>
          <BsEraser/>
        </button>
        <button
          className="Draw__buttonBox__button"
          onClick={onReset}>
          <GrPowerReset/>
        </button>
        <button
          className="Draw__buttonBox__button"
          onClick={handleColorMu}>
          <MdOutlineColorLens/>
        </button>
      </div>
      <div className={`Draw__colorMu ${colorMu ? 'visible' : ''}`}>
        <div className = "Draw__colorMu__width">굵기 : {fontWidth}</div>
        <input
          onChange={onWidthSize}
          className="Draw__colorMu__bar"
          type="range"
          min="1"
          max="100"
        />
        <div className="Draw__colorMu__colorBox">
          <input
            onChange={onColorChange}
            type="color"
            className="Draw__colorMu__colorBox__custom"
          />
          {['#1abc9c', '#9b59b6', '#f1c40f', '#e74c3c', '#ecf0f1', '#7f8c8d', '#2c3e50', '#f39c12'].map(color => (
            <div
              key={color}
              className="Draw__colorMu__colorBox__select"
              data-color={color}
              style={{ backgroundColor: color, display : 'inline-block'}}
              onClick={() => onColorChanges(color)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}