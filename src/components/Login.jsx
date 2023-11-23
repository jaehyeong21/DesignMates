import React,{useState} from 'react'
import { IoClose } from "react-icons/io5";
import { FaRegUser, FaKey} from "react-icons/fa";
import './Login.css';

export default function Login() {
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
    document.body.style.overflow = 'hidden';
  }
  const closeModal = () => {
    setModal(false);
    document.body.style.overflow = 'unset';
  }
  return (
    <div>
      <span
        className = "loginButton"
        onClick = {openModal}
        >Login</span>
      {modal && (
        <div className = "modal">
          <div className = "modal__content">
            <div className = "modal__content__header">
              <div className = "modal__content__header__title">LOGIN</div>
              <div 
                className = "modal__content__header__title"
                onClick = {closeModal}><IoClose/>
              </div>
            </div>
            <div className = "modal__content__body">
              <div className = "modal__content__body__box">
                <FaRegUser className = "modal__content__body__box__label"/>
                <label className = "modal__content__body__box__label">아이디</label>
              </div>
              <input 
                className = 
                "modal__content__body__input"
                type = "text"
              />
              <div className = "modal__content__body__box">
                <FaKey className = "modal__content__body__box__label"/>
                <label className = "modal__content__body__box__label">비밀번호</label>
              </div>
              <input
                type = "password"
                className = 
                "modal__content__body__input"
              />
              <button className = "modal__content__body__button">확인</button>
            </div>
            <div className = "modal__content__footer">
              <div className = "modal__content__footer__font">회원가입</div>
              <div className = "modal__content__footer__font">비밀번호 찾기</div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
