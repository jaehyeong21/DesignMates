import React from 'react';

export default function DrawMenu({ onWidthSize, onFill, onEraser, onColorChange, onColorChanges, onReset}) {
  return (
    <div className="board__menu__draw">
      <input
        onChange={onWidthSize}
        className="board__menu__draw__pensize"
        type="range"
        min="1"
        max="10"
      />
      <button
        className="board__menu__draw__fill"
        onClick={onFill}>
        채우기
      </button>
      <button
        className="board__menu__draw__eraser"
        onClick={onEraser}>
        지우개
      </button>
      <button
        className="board__menu__draw__eraser"
        onClick={onReset}>
        초기화
      </button>
      <div className="board__menu__draw__colorBox">
        <input
          onChange={onColorChange}
          type="color"
          className="board__menu__draw__colorBox__custom"
        />
        {['#1abc9c', '#9b59b6', '#f1c40f', '#e74c3c', '#ecf0f1', '#7f8c8d', '#2c3e50', '#f39c12'].map(color => (
          <div
            key={color}
            className="board__menu__draw__colorBox__select"
            data-color={color}
            style={{ backgroundColor: color }}
            onClick={() => onColorChanges(color)}
          />
        ))}
      </div>
    </div>
  );
}