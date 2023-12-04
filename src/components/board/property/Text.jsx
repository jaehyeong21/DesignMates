import React, { useState } from 'react';
import './Text.css';

export default function Text({ onTextInput, changeText,setSelectedFont, selectedFont, fontSize, setFontSize}) {

  const handleFontChange = (font) => {
    setSelectedFont(font);
  };

  const handleFontSize = (e) => {
    setFontSize(e.target.value);
  }

  return (
    <div className="text">
      <div className = "text__box">
        <div className = "text__box__font">Font style: {selectedFont}</div>
        <div className = "text__box__font">Font size: {fontSize}</div>
          <input
            className = "Draw__colorMu__bar"
            onChange={handleFontSize}
            type="range"
            min="10"
            step = "1"
            max="50"
          />
        <input
          className = "text__box__input"
          type="text"
          onChange={changeText}
          placeholder="Write and double click"
          onDoubleClick={onTextInput}
        />
          <div className = "text__box__button">
            <label className = "text__box__font">Text Style</label>
            <button 
              onClick={() => handleFontChange('serif')}
              className = "text__box__button__serif">serif
            </button>
            <button
              onClick={() => handleFontChange('sans-serif')}
              className = "text__box__button__sans-serif">Sans-serif
            </button>
            <button
              onClick={() => handleFontChange('monospace')}
              className = "text__box__button__monospace">Monospace
            </button>
            <button
              onClick={() => handleFontChange('cursive')}
              className = "text__box__button__Cursive">Cursive
            </button>
            <button
              onClick={() => handleFontChange('script')}
              className = "text__box__button__script">Script
            </button>
          </div>
      </div>
    </div>
  );
}