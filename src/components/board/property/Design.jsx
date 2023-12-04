import React, { useState } from 'react';
import './Design.css';

export default function Design({ offsetXY, setOffsetXY, information, setInformation,setBack,setFront,front,back,template1,template2, template3}) {
  const [template, setTemplate] = useState();

  const frontTemplate = () => {
    setFront(true);
    setBack(false);
  }

  const backTemplate = () => {
    setBack(true)
    setFront(false);
  }

  const onTemplate1 = () => {
    setTemplate("template1");
    setOffsetXY({ x: 100, y: 100 });
  }

  const onTemplate2 = () => {
    setTemplate("template2");
    setOffsetXY({ x: 100, y: 100 });
  }

  const onTemplate3 = () => {
    setTemplate("template3");
    setOffsetXY({ x: 100, y: 100 });
  }

  const onInformation = (e) => {
    const { name, value } = e.target;
    setInformation((prevInformation) => ({
      ...prevInformation,
      [name]: value,
    }));
  }

  return (
    <div className="design">
      <div className="design__type">
      <div className="" onClick={onTemplate1}>
          <div className = "design__type__templatebox">
            <div
              className="template1front"
              onClick={() => {onTemplate1(); frontTemplate();}}
            >
            </div>
            <div
              className = "template1back"
              onClick = {backTemplate}
            > 
          </div>
        </div>
        </div>
        <div className="" onClick={onTemplate2}>
          <div className = "design__type__templatebox">
            <div
              className="template2front"
              onClick={() => {onTemplate2(); frontTemplate();}}
            >
            </div>
            <div
              className = "template2back"
              onClick = {backTemplate}
            >
            </div>
          </div>
        </div>
        <div className="" onClick={onTemplate3}>
          <div className = "design__type__templatebox">
            <div
              className="template3front"
              onClick={() => {onTemplate3(); frontTemplate();}}
            >
            </div>
            <div
              className = "template3back"
              onClick = {backTemplate}
            >
            </div>
          </div>
        </div>
      </div>
      {(template === 'template1' && front) && (
        <div className = "template">
          <div></div>
          <div
            className = "temp__button"
          >
            <button
              className = "template__button"
              onClick = {template1}
            >
              Apply!
            </button>
          </div>
        </div>
      )}
      {(template === 'template1' && back) && (
        <div className = "template">
          <div className = "template__inputBox">
            <input
              className = "template__input"
              type="text"
              name="job"
              placeholder="job"
              onChange={onInformation}
            />
            <input
              className = "template__input"
              type="text"
              name="name"
              placeholder="name"
              onChange={onInformation}
            />
            <input
              className = "template__input"
              type="text"
              name="phone"
              placeholder="phone"
              onChange={onInformation}
            />
            <input
              className = "template__input"
              type="text"
              name="email"
              placeholder="email"
              onChange={onInformation}
            />
          </div>
          <div
            className = "temp__button"
          >
            <button
              className = "template__button"
              onClick = {template1}
            >
              Apply!
            </button>
          </div>
        </div>
      )}
      {(template === 'template2' && front) && (
      <div className = "template">
        <div className = "template__inputBox">
          <input
            className = "template__input"
            type="text"
            name="job"
            placeholder="job"
            onChange={onInformation}
          />
          <input
            className = "template__input"
            type="text"
            name="name"
            placeholder="name"
            onChange={onInformation}
            />
        </div>
        <div
            className = "temp__button"
        >
          <button
            className = "template__button"
            onClick = {template2}>
            Apply!
          </button>
        </div>
      </div>
      )}
      {(template === 'template2' && back) && (
        <div className = "template">
          <div className = "template__inputBox">
            <input
              className = "template__input"
              type="text"
              name="job"
              placeholder="job"
              onChange={onInformation}
            />
            <input
              className = "template__input"
              type="text"
              name="name"
              placeholder="name"
              onChange={onInformation}
            />
            <input
              className = "template__input"
              type="text"
              name="phone"
              placeholder="phone"
              onChange={onInformation}
            />
            <input
              className = "template__input"
              type="text"
              name="email"
              placeholder="email"
              onChange={onInformation}
            />
            <input
              className = "template__input"
              type="text"
              name="address"
              placeholder="address"
              onChange={onInformation}
            />
          </div>
          <div
            className = "temp__button"
          >
            <button
              className = "template__button"
              onClick = {template2}
            >
            Apply!
            </button>
          </div>
        </div>
      )}
      {(template === 'template3' && front) &&(
        <div className = "template">
          <div className = "template__inputBox">
            <input
              className = "template__input"
              type="text"
              name="job"
              placeholder="job"
              onChange={onInformation}
            />
          </div>
          <div
            className = "temp__button"
          >
            <button
              className = "template__button"
              onClick = {template3}
            >
            Apply!
            </button>
          </div>
        </div>
      )}
      {(template === 'template3' && back) &&(
        <div className = "template">
          <div className = "template__inputBox">
            <input
              className = "template__input"
              type="text"
              name="job"
              placeholder="job"
              onChange={onInformation}
            />
            <input
              className = "template__input"
              type="text"
              name="name"
              placeholder="name"
              onChange={onInformation}
            />
            <input
              className = "template__input"
              type="text"
              name="phone"
              placeholder="phone"
              onChange={onInformation}
            />
            <input
              className = "template__input"
              type="text"
              name="email"
              placeholder="email"
              onChange={onInformation}
            />
            <input
              className = "template__input"
              type="text"
              name="address"
              placeholder="address"
              onChange={onInformation}
            />
            <input
              className = "template__input"
              type="text"
              name="website"
              placeholder="website"
              onChange={onInformation}
            />
          </div>
          <div className = "temp__button">
            <button
              className = "template__button"
              onClick = {template3}
            >
            Apply!
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

