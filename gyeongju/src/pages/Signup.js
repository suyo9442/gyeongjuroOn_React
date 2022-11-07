import "./Login.css";
import React, { useEffect, useState } from "react";
import {firebaseAuth , createUserWithEmailAndPassword, signInWithEmailAndPassword} from "../firebase";

function Login() {

  // 이메일, 비번 value를 state에 저장
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [authInfo, setAuthInfo] = useState("");

  const register = async () => {
    try {
        const user = await createUserWithEmailAndPassword(
            firebaseAuth,
            email,
            password
        );
        console.log(user);
    } catch (error) {
        console.log(error.message);
    }
};

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePw = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="login">
      {/* CONTENT */}
      <div id="content" className="sub">
        <div className="sub-content" id="member">
          <div className="container">
            <div className="title">
              <h2>
                함께 <br />
                여행을 떠나볼까요?
              </h2>
              <p>로그인이 필요한 서비스에요.</p>
            </div>
            <div className="form">
              <div className="form-row">
                <div className="form-label">아이디</div>
                <div className="row">
                  <div className="col">
                    <input
                      type="text"
                      className="inp line"
                      placeholder="이메일을 입력해주세요"
                      value={email}
                      onChange={handleEmail}
                    />
                  </div>
                </div>
                <div className="info-text warning">
                      이메일 형식을 정확히 입력해 주세요.(소문자,숫자, @, _, -
                      만 가능
                </div>
              </div>
              <div className="form-row">
                <div className="form-label">비밀번호</div>
                <div className="row">
                  <div className="col">
                    <input
                      type="text"
                      className="inp line"
                      placeholder="비밀번호를 입력해주세요"
                      onChange={handlePw}
                    />
                  </div>
                </div>
                <div className="info-text">
                  8자 이상의 영문,숫자,특수문자(!@#$%^&*?) 사용
                </div>
              </div>
              <div className="join-link">
                <a href="">아이디 찾기</a> ㅣ <a href="">비밀번호 변경</a>
                <b>
                  <a href="#">회원가입</a>
                </b>
              </div>
            </div>
            <div className="btn-box fixed">
              <button
                type="button"
                className="btn blue"
                onClick={register}
              >
                로그인
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* //CONTENT */}
    </div>
  );
}

export default Login;
