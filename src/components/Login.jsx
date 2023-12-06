import React,{useState} from 'react'
import { IoClose } from "react-icons/io5";
import { FaRegUser, FaKey} from "react-icons/fa";
import './Login.css';
import './Signup.css';

export default function Login() {
  const [loginModal, setLoginModal] = useState(false);
  const [signup, setSignup] = useState(false);
  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");
  const [email, setEmail] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const onLogin = () => {
    setLoggedIn(true);
  }

  const openModal = () => {
    setLoginModal(true);
    document.body.style.overflow = 'hidden';
  }

  const closeModal = () => {
    setLoginModal(false);
    document.body.style.overflow = 'unset';
  }

  const openSignup = () => {
    setSignup(true);
    document.body.style.overflow = 'hidden';
  }

  const closeSignup = () => {
    setSignup(false);
    document.body.style.overflow = 'unset';
  }

  const onSubmit1 = async (e) => {
    try {
      e.preventDefault();

      const response = await fetch("http://localhost:8081/designmates/login", {
        method: "POST",
        body: JSON.stringify({
          userId: id,
          password: pwd,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("로그인 실패");
      }

      const result = await response.json();
      console.log(result);

      if (result) {
        closeModal();
        alert("로그인 성공");
      }
    } catch (error) {
      console.error(error);
    }
  };


  const onSubmit2 = (e) => {
    e.preventDefault();
    
    const signupURL = "http://localhost:8081/designmates/signup";
  
    fetch(signupURL, {
      method: "POST",
      body: JSON.stringify({
        userId: id,
        password: pwd,
        userEmail: email,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("회원가입 실패");
        }
        return response.json();
      })
      .then((result) => {
        onLogin();
        closeSignup();
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      {loggedIn ? (
        <span className="loginButton">{`Welcome, ${id}!`}</span>
      ) : (
        <span className="loginButton" onClick={openModal}>Login</span>
      )}
      {loginModal && (
        <div className = "modal">
          <div className = "modal__content">
            <div className = "modal__content__header">
              <div className = "modal__content__header__title">LOGIN</div>
              <div 
                className = "modal__content__header__title"
                onClick = {closeModal}><IoClose/>
              </div>
            </div>
            <form
              className = "modal__content__body"
              onSubmit = {onSubmit1}
            >
              <div className = "modal__content__body__box">
                <FaRegUser className = "modal__content__body__box__label"/>
                <label className = "modal__content__body__box__label">아이디</label>
              </div>
              <input
                className = 
                "modal__content__body__input"
                type = "text"
                onChange = {(e) => {setId(e.target.value)}}
                id = "userid"
              />
              <div className = "modal__content__body__box">
                <FaKey className = "modal__content__body__box__label"/>
                <label className = "modal__content__body__box__label">비밀번호</label>
              </div>
              <input
                type = "password"
                className = 
                "modal__content__body__input"
                id = "userpwd"
                onChange = {(e) => {setPwd(e.target.value)}}
              />
                <button 
                  className = "modal__content__body__button"
                  type = "submit">
                  확인
                </button>
            </form>
            <div className = "modal__content__footer">
              <div
                className = "modal__content__footer__font"
                onClick = {openSignup}>
                회원가입
              </div>
              {signup && (
                <div className = "signup">
                  <div className = "signup__content">
                    <div className = "signup__content__header">
                      <div className = "signup__content__header__title">Sign Up</div>
                      <div
                        onClick = {closeSignup}
                        className = "signup__content__header__title">
                          <IoClose/>
                      </div>
                    </div>
                    <form className = "signup__content__form"
                      onSubmit = {onSubmit2}>
                      <label className = "signup__content__form__label">아이디</label>
                      <input
                        className = "signup__content__form__input"
                        type = "text"
                        onChange = {(e) => {setId(e.target.value)}}
                        id = "userid"
                      />
                      <label className = "signup__content__form__label">비밀번호</label>
                      <input
                        className = "signup__content__form__input"
                        type = "password"
                        onChange = {(e) => {setPwd(e.target.value)}}
                        id = "userpwd"
                      />
                      <label className = "signup__content__form__label">이메일</label>
                      <input
                        className = "signup__content__form__input"
                        type = "email"
                        onChange = {(e) => {setEmail(e.target.value)}}
                        id = "userpwd"
                      />
                      <div className = "signup__content__form__butbox">
                        <button className = "signup__content__form__button">가입완료</button>
                      </div>
                    </form>
                  </div>
                </div>
              )}
              <div className = "modal__content__footer__font">비밀번호 찾기</div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
