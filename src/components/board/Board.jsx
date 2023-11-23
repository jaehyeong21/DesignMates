import React, { useRef, useEffect, useState } from 'react';
import './Board.css';
import Draw from './property/Draw';
import Text from './property/Text';

export default function DrawCanvas(){
  const [tool, setTool] = useState(null);
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [selectedColor, setSelectedColor] = useState(["#00000"]);
  const [isDrawing, setIsDrawing] = useState(false);
  const [isFillmode, setIsFillmode] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = 850;
    canvas.height = 550;
    const context = canvas.getContext('2d');
    context.lineCap = 'round';
    context.strokeStyle = 'black';
    context.lineWidth = 5;
    contextRef.current = context;
    console.log(contextRef.current);
  }, []);

  const startDrawing = ({ nativeEvent }) => {
    if(tool === 'draw'){
      const { offsetX, offsetY } = nativeEvent;
      contextRef.current.beginPath();
      contextRef.current.moveTo(offsetX, offsetY);
      setIsDrawing(true);
    }
  };

  const continueDrawing = ({ nativeEvent }) => {
    if(tool === 'draw'){
      if (!isDrawing) return;
      const { offsetX, offsetY } = nativeEvent;
      contextRef.current.lineTo(offsetX, offsetY);
      contextRef.current.stroke();
    }
  };

  const stopDrawing = () => {
    if(tool === 'draw'){
      contextRef.current.closePath();
      setIsDrawing(false);
    }
  };

  const onEraser = () => {
    contextRef.current.strokeStyle = "white";
  }

  const onFill = () => {
    setIsFillmode(!isFillmode);
  }

  const onReset = () => {
    contextRef.current.fillStyle = "white";
    contextRef.current.fillRect(0,0, 850, 550);
  }

  const startFill = () => {
    if(tool === 'draw'){
      if(isFillmode){
      contextRef.current.fillStyle = selectedColor;  
      contextRef.current.fillRect(0,0, 850, 550);
      setIsFillmode(!isFillmode);
      }
    }
  }

  const onWidthSize = (event) => {
    contextRef.current.lineWidth = event.target.value;
  };

  const onColorChange = (event) => {
    setSelectedColor(event.target.value);
    contextRef.current.strokeStyle = selectedColor;
    contextRef.current.fillStyle = selectedColor;
  }

  const onColorChanges = (color) => {
    setSelectedColor(color);
    contextRef.current.strokeStyle = color;
    const colorInputElement = document.querySelector('.board__menu__draw__colorBox__custom');
    colorInputElement.value = color;
  }

  return (
    <div className="board">
      <div className="board__menu">
        <button
          onClick = {() => setTool('draw')}
        >그리기
        </button>
        <button
          onClick = {() => setTool('text')}
        >텍스트
        </button>
        <button>요소</button>
        {tool === 'draw' &&(
        <Draw
          onWidthSize={onWidthSize}
          onFill={onFill}
          onEraser={onEraser}
          onColorChange={onColorChange}
          onColorChanges={onColorChanges}
          onReset = {onReset}
        />
        )}
        {tool === 'text' &&(
        <Text/>
        )}
      </div>
      <canvas
        className="board__box"
        ref={canvasRef}
        onMouseDown={startDrawing}
        onMouseMove={continueDrawing}
        onMouseUp={stopDrawing}
        onMouseOut={stopDrawing}
        onClick={startFill}
      ></canvas>
    </div>
  );
}
