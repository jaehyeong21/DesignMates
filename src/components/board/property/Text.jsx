import React, { useState } from 'react';

export default function Text({ onTextInput, changeText,setSelectedFont, selectedFont, fontSize, setFontSize}) {

  const handleFontChange = (font) => {
    setSelectedFont(font);
  };

  const handleFontSize = (e) => {
    setFontSize(e.target.value);
  }

  return (
    <div className="text">
      <div>
        <input
          type="text"
          onChange={changeText}
          placeholder="Write and double click"
          onDoubleClick={onTextInput}
        />
        <span>
          <div>
            <button onClick={() => handleFontChange('serif')}>serif</button>
            <button onClick={() => handleFontChange('sans-serif')}>sans-serif</button>
            <button onClick={() => handleFontChange('monospace')}>monospace</button>
          </div>
          <div>Font style: {selectedFont}</div>
          <input
            onChange={handleFontSize}
            type="range"
            min="10"
            step = "1"
            max="50"
            />
            <div>Font size: {fontSize}</div>
        </span>
      </div>
    </div>
  );
}