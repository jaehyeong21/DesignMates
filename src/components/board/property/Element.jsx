import React from 'react';

export default function Element({setShape,handleFileChange }) {

  const Circle = () => {
    setShape("circle");
  }

  const Square = () => {
    setShape("square");
  }

  return (
    <div>
      <button onClick={Circle}>원</button>
      <button onClick={Square}>사각형</button>
      <input type = "file" accept = "image/*" id = "file" onChange={handleFileChange}/>
    </div>
  );
}