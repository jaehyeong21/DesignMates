import React, { useRef, useEffect, useState } from 'react';
import './Board.css';
import Draw from './property/Draw';
import Text from './property/Text';
import Element from './property/Element';

export default function DrawCanvas(){
  const [tool, setTool] = useState(null);
  const [selectedFont, setSelectedFont] = useState("serif"); //폰트
  const [fontSize, setFontSize] = useState("50"); //폰트 사이즈
  const canvasRef = useRef(null); //그림 객체
  const contextRef = useRef(null); // 그림 객체
  const [text, setText] = useState(""); // 들어 갈 텍스트
  const [shape, setShape] = useState(""); //
  const [selectedColor, setSelectedColor] = useState(["#00000"]);
  const [isDrawing, setIsDrawing] = useState(false);
  const [isFillmode, setIsFillmode] = useState(false);


  // 이미지 삽입
  const handleFileChange = (e) => {
    const fileInput = e.target;
    const file = fileInput.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (event) => {
        const image = new Image();
        image.src = event.target.result;

        image.onload = () => {
          contextRef.current.drawImage(image, 0, 0);
        };
      };
      reader.readAsDataURL(file);
    }
  };


  const handleCanvasClick = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;
  
    if (tool === 'draw') {
      startFill();
    } else if (tool === 'element') {
      if(shape === "circle"){
      onCircle(e, offsetX, offsetY);
      }
      else if(shape === "square"){
      onSquare(offsetX, offsetY);
      }
    }
  };

  /* -------------------그림 그리기--------------------- */

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = 850;
    canvas.height = 550;
    const context = canvas.getContext('2d');
    context.lineCap = 'round';
    context.strokeStyle = 'black';
    context.lineWidth = 5;
    contextRef.current = context;
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

/* -------------------그림 도구--------------------- */

  const onEraser = () => {
    contextRef.current.strokeStyle = "white";
  }

  const onFill = () => {
    setIsFillmode(!isFillmode);
  }

  const onReset = () => {
    contextRef.current.fillStyle = "white";
    contextRef.current.fillRect(0,0, 850, 550);
    contextRef.current.fillStyle = "black";
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

/* -------------------텍스트 도구--------------------- */

  const changeText = (e) => {
    setText(e.target.value);
  }

  // 여기에 더블 클릭 했을 때 텍스트 삽입
  const onTextInput = (e) => {
    const tempContext = canvasRef.current.getContext('2d');
    tempContext.save();
    tempContext.lineWidth = 3;
    tempContext.font = `${fontSize}px ${selectedFont}`;
    tempContext.fillStyle = selectedColor;
    tempContext.fillText(text, e.nativeEvent.offsetX, e.nativeEvent.offsetY);
  }

  /* -------------------요소 도구--------------------- */
  const onCircle = (e, offsetX, offsetY) => {
    contextRef.current.beginPath();
    contextRef.current.arc(offsetX, offsetY, 50, 0, 2 * Math.PI);
    contextRef.current.strokeStyle = selectedColor;
    contextRef.current.stroke();
    contextRef.current.closePath();
  };

  const onSquare = (offsetX, offsetY) => {
    const width = 100; // 사각형 가로 크기
    const height = 80; // 사각형 세로 크기
  
    contextRef.current.beginPath();
    contextRef.current.rect(offsetX, offsetY, width, height);
    contextRef.current.stroke();
    contextRef.current.closePath();
  };



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
        <button
          onClick = {() => setTool('element')}
        >요소
        </button>
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
        <Text
          onTextInput = {onTextInput}
          changeText = {changeText}
          setSelectedFont = {setSelectedFont}
          selectedFont = {selectedFont}
          setFontSize = {setFontSize}
          fontSize = {fontSize}
        />
        )}
         {tool === 'element' && (
          <Element shape={shape} setShape={setShape} handleFileChange={handleFileChange} />
        )}
      </div>
      <canvas
        className="board__box"
        ref={canvasRef}
        onMouseDown={startDrawing}
        onMouseMove={continueDrawing}
        onMouseUp={stopDrawing}
        onMouseOut={stopDrawing}
        onClick={handleCanvasClick}
        onDoubleClick = {onTextInput}
      ></canvas>
    </div>
  );
}
