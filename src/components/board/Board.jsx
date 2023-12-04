import React, { useRef, useEffect, useState } from 'react';
import './Board.css';
import Draw from './property/Draw';
import { GrPowerReset } from "react-icons/gr";
import Text from './property/Text';
import Design from './property/Design';
import Element from './property/Element';
import { RxText } from "react-icons/rx";
import { MdShapeLine } from "react-icons/md";
import { GoPencil } from "react-icons/go";
import { CiSaveUp2,CiViewBoard } from "react-icons/ci";
import { FaArrowRotateRight, FaArrowRotateLeft} from "react-icons/fa6";

export default function DrawCanvas(){
  const [tool, setTool] = useState(null);
  const [selectedFont, setSelectedFont] = useState("serif"); //폰트
  const [fontSize, setFontSize] = useState("50"); //폰트 사이즈
  const [fontWidth, setFontWidth] = useState("50");
  const canvasRef = useRef(null); //그림 객체
  const contextRef = useRef(null); // 그림 객체
  const [text, setText] = useState(""); // 들어 갈 텍스트
  const [shape, setShape] = useState(""); //
  const [selectedColor, setSelectedColor] = useState(["#00000"]);
  const [isDrawing, setIsDrawing] = useState(false);
  const [isFillmode, setIsFillmode] = useState(false);
  const [offsetXY, setOffsetXY] = useState({x : 0, y : 0});//좌표
  const [information, setInformation] = useState({
    name : "", phone : "", email : "", address : "", job : "",website : "",
  });
  const [front, setFront] = useState(true);
  const [back, setBack] = useState(false);

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
    context.fillStyle = 'white';
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.lineCap = 'round';
    context.strokeStyle = 'white';
    context.lineWidth = 5;
    contextRef.current = context;
  }, []);

  //템플릿 1
  const template1 = () => {
    const context = contextRef.current;
    const baseFont = `${fontSize}px ${selectedFont}`;
    if(front === true){
      contextRef.current.fillStyle = "#24212A";
      contextRef.current.fillRect(0,0, 850, 550);
      const centerX = 425;
      const centerY = 275; 
      const radius = 275; 

      context.beginPath();
      context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
      context.fillStyle = "white";
      context.fill();
      context.closePath();

      context.fillStyle = "black";
      context.font = `bold ${70}px sans-serif`;
      context.fillText('DEVELOPER', offsetXY.x + 125, offsetXY.y + 200);
    }
    else{
      context.fillStyle = "#24212A";
      context.fillRect(0,0, 850, 550);

      context.beginPath();
      context.strokeStyle = "yellow";
      context.lineWidth = "3px";
      context.moveTo(100, 275);
      context.lineTo(770, 275);
      context.stroke();
      context.closePath();

      context.fillStyle = "white";
      context.font = `bold ${20}px sans-serif`;
      context.fillText('DEVELOPER', offsetXY.x + 120, offsetXY.y + 165);
      context.font = `bold ${20}px sans-serif`;
      context.fillText(information.job, offsetXY.x + 10, offsetXY.y + 165);
      context.font = `bold ${20}px ${selectedFont}`;
      context.fillText(information.name, offsetXY.x + 580, offsetXY.y + 165);
      context.font = `bold ${20}px sans-serif`;
      context.fillText('mobile : ', offsetXY.x + 10, offsetXY.y + 200);
      context.font = `bold ${20}px ${selectedFont}`;
      context.fillText(information.phone, offsetXY.x + 95, offsetXY.y + 200);
      context.font = `bold ${20}px sans-serif`;
      context.fillText('email : ', offsetXY.x + 400, offsetXY.y + 200);
      context.font = `bold ${20}px ${selectedFont}`;
      context.fillText(information.email, offsetXY.x + 470, offsetXY.y + 200);
    }
  };

  //템플릿 2
  const template2 = () => {
    const context = contextRef.current;
    const baseFont = `${fontSize}px ${selectedFont}`;
    if(front === true){
      contextRef.current.fillStyle = "#F3C843";  
      contextRef.current.fillRect(0,0, 850, 550);
      
    
      context.beginPath();
      context.moveTo(100, 180) ; // 왼쪽 아래
      context.lineTo(600, 180);
      context.lineTo(600, 280);
      context.lineTo(100, 280);
      context.lineTo(100, 180);
      context.fillStyle = "black";
      context.fill();
      context.closePath();
    
      context.beginPath();
      context.moveTo(100, 305) ; // 왼쪽 아래
      context.lineTo(600, 305);
      context.lineTo(600, 360);
      context.lineTo(100, 360);
      context.lineTo(100, 360);
      context.fillStyle = "black";
      context.fill();
      context.closePath();
      
      // 직업 정보
      context.fillStyle = "#F3C843";
      context.font = `bold ${40}px sans-serif`;
      context.fillText(information.job, offsetXY.x + 20, offsetXY.y + 150);
  
      // 이름 정보
      context.fillStyle = "#F3C843";
      context.font = `bold ${25}px ${selectedFont}`;
      context.fillText(information.name, offsetXY.x + 20, offsetXY.y + 240);
    }
    else{
    contextRef.current.fillStyle = "#F3C843";  
    contextRef.current.fillRect(0,0, 850, 550);
    context.beginPath();
    context.moveTo(100, 100) ; // 왼쪽 아래
    context.lineTo(600, 100);
    context.lineTo(600, 200);
    context.lineTo(100, 200);
    context.lineTo(100, 100);
    context.fillStyle = "black";
    context.fill();
    context.closePath();
  
    context.beginPath();
    context.moveTo(100, 225) ; // 왼쪽 아래
    context.lineTo(600, 225);
    context.lineTo(600, 280);
    context.lineTo(100, 280);
    context.lineTo(100, 280);
    context.fillStyle = "black";
    context.fill();
    context.closePath();
    // 직업 정보
    context.fillStyle = "#F3C843";
    context.font = `bold ${40}px ${selectedFont}`;
    context.fillText(information.job, offsetXY.x + 20, offsetXY.y + 65);
  
    // 이름 정보
    context.fillStyle = "#F3C843";
    context.font = `bold ${25}px ${selectedFont}`;
    context.fillText(information.name, offsetXY.x + 20, offsetXY.y + 160);
  
    // 전화번호 정보
    context.fillStyle = "black";
    context.font = `${20}px ${selectedFont}`;
    context.fillText('전화번호 : ', offsetXY.x + 20, offsetXY.y + 240);
    context.fillText(information.phone, offsetXY.x + 120, offsetXY.y + 240);
  
    // 이메일 정보
    context.font = `${20}px ${selectedFont}`;
    context.fillText('이메일 : ', offsetXY.x + 20, offsetXY.y + 270);
    context.fillText(information.email, offsetXY.x + 100, offsetXY.y + 270);
  
    // 주소 정보
    context.font = `${20}px ${selectedFont}`;
    context.fillText('주소 : ', offsetXY.x + 20, offsetXY.y + 300);
    context.fillText(information.address, offsetXY.x + 80, offsetXY.y + 300);
    }
  };

  //템플릿 3
  const template3 = () => {
    const context = contextRef.current;
    const baseFont = `${fontSize}px ${selectedFont}`;
    if(front === true){
      contextRef.current.fillStyle = "#E8DED5";  
      contextRef.current.fillRect(0,0, 850, 550);
  
      context.beginPath();
      context.moveTo(0, 550); // 왼쪽 아래
      context.lineTo(150, 550);
      context.lineTo(0, 400);
      context.fillStyle = "black";
      context.fill();
      context.closePath();

      context.beginPath();
      context.moveTo(850,0); // 오른쪽 끝
      context.lineTo( 700, 0);
      context.lineTo(850, 150);
      context.fillStyle = "black";
      context.fill();
      context.closePath();

      context.fillStyle = "black";
      context.font = `bold ${50}px ${selectedFont}`;
      context.fillText(information.job, offsetXY.x + 220, offsetXY.y + 200);

      }
    else{
      contextRef.current.fillStyle = "#E8DED5";  
      contextRef.current.fillRect(0,0, 850, 550);
  
      context.beginPath();
      context.moveTo(0, 550); // 왼쪽 아래
      context.lineTo(150, 550);
      context.lineTo(0, 400);
      context.fillStyle = "black";
      context.fill();
      context.closePath();
  
    // 맨 오른쪽 끝 직각삼각형
      context.beginPath();
      context.moveTo(850,0); // 오른쪽 끝
      context.lineTo( 700, 0);
      context.lineTo(850, 150);
      context.fillStyle = "black";
      context.fill();
      context.closePath();
    // 직업 정보
      context.fillStyle = "black";
      context.font = `${20}px ${selectedFont}`;
      context.fillText(information.job, offsetXY.x + 262, offsetXY.y + 30);
  
    // 이름 정보
      context.fillStyle = "black";
      context.font = `bold ${40}px ${selectedFont}`;
      context.fillText(information.name, offsetXY.x + 245, offsetXY.y + 80);
  
    // 전화기 아이콘
      context.fillStyle = "red";
      context.font = `bold ${30}px ${selectedFont}`;
      context.fillText('📞', offsetXY.x + 200, offsetXY.y + 240);
  
    // 전화번호 정보
      context.fillStyle = "black";
      context.font = `bold ${25}px ${selectedFont}`;
      context.fillText(information.phone, offsetXY.x + 240, offsetXY.y + 240);
  
    // 이메일 아이콘
      context.font = `bold ${30}px ${selectedFont}`;
      context.fillText('✉️', offsetXY.x + 200, offsetXY.y + 280);
  
    // 이메일 정보
      context.font = `bold ${25}px ${selectedFont}`;
      context.fillText(information.email, offsetXY.x + 240, offsetXY.y + 280);
  
    // 주소 아이콘
      context.font = `bold ${30}px ${selectedFont}`;
      context.fillText('🗺️', offsetXY.x + 200, offsetXY.y + 320);
    // 주소 정보
      context.font = `bold ${25}px ${selectedFont}`;
      context.fillText(information.address, offsetXY.x + 240, offsetXY.y + 320);
    }
  };


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
    setFontWidth(event.target.value);
  };

  const onColorChange = (event) => {
    setSelectedColor(event.target.value);
    contextRef.current.strokeStyle = selectedColor;
    contextRef.current.fillStyle = selectedColor;
  }

  const onColorChanges = (color) => {
    setSelectedColor(color);
    contextRef.current.strokeStyle = color;
    const colorInputElement = document.querySelector('.Draw__colorMu__colorBox__select');
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

/* -----------------템플릿 도구--------------------- */
  
// save 저장하기
const saveCanvas = () => {
  const canvas = canvasRef.current;
  const dataUrl = canvas.toDataURL('image/png');

  // Create a link element
  const link = document.createElement('a');

  // Set the href attribute to the data URL
  link.href = dataUrl;

  // Prompt the user to download the image with a specific file name
  link.download = prompt('Enter file name', 'myDrawing') + '.png';

  // Simulate a click on the link element to trigger the download
  link.click();
};


  return (
    <div className="board">
      <div className="board__menu">
        <div className = "board__menu__buttonBox">
          <button
            className={`board__menu__buttonBox__button ${tool === 'design' ? 'selected' : ''}`}
            onClick = {() => setTool('design')}
          ><CiViewBoard
              className={`board__menu__buttonBox__button__icon ${tool === 'design' ? 'selected' : ''}`}/>
          </button>
          <button
            className={`board__menu__buttonBox__button ${tool === 'draw' ? 'selected' : ''}`}
            onClick = {() => setTool('draw')}
          ><GoPencil
              className={`board__menu__buttonBox__button__icon ${tool === 'draw' ? 'selected' : ''}`}/>
          </button>
          <button
            className={`board__menu__buttonBox__button ${tool === 'text' ? 'selected' : ''}`}
            onClick = {() => setTool('text')}
          ><RxText
              className={`board__menu__buttonBox__button__icon ${tool === 'text' ? 'selected' : ''}`}/>
          </button>
          <button
            className={`board__menu__buttonBox__button ${tool === 'element' ? 'selected' : ''}`}
            onClick = {() => setTool('element')}
          ><MdShapeLine
          className={`board__menu__buttonBox__button__icon ${tool === 'element' ? 'selected' : ''}`}/>
          </button>
          <button
            className = "board__menu__buttonBox__button">
            <FaArrowRotateLeft
              className = "board__menu__buttonBox__button__icon"/>
          </button>
          <button
            className = "board__menu__buttonBox__button"
            onClick = {onReset}>
            <GrPowerReset
              className = "board__menu__buttonBox__button__icon"/>
          </button>
          <button
            className = "board__menu__buttonBox__button"
            onClick = {saveCanvas}>
            <CiSaveUp2
              className = "board__menu__buttonBox__button__icon"/>
          </button>
        </div>
        {tool === 'draw' &&(
        <div className = "board__menu__element">
          <Draw
            fontWidth = {fontWidth}
            onWidthSize={onWidthSize}
            onFill={onFill}
            onEraser={onEraser}
            onColorChange={onColorChange}
            onColorChanges={onColorChanges}
            onReset = {onReset}
          />
        </div>
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
          <Element
            shape={shape}
            setShape={setShape}
            handleFileChange={handleFileChange} />
        )}
        {tool === 'design' && (
          <Design
            offsetXY={offsetXY}
            setOffsetXY={setOffsetXY}
            information={information}
            setInformation={setInformation}
            setFront = {setFront}
            setBack = {setBack}
            front = {front}
            back = {back}
            template1={template1}
            template2={template2}
            template3={template3}
          />
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
