import "./Signin.css";
import React, { useEffect, useState } from "react";
import {firebaseAuth , createUserWithEmailAndPassword} from "../firebase";

function Signup() {
  // 이메일, 비번 state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // 이메일, 비번 value 업데이트
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePw = (e) => {
    setPassword(e.target.value);
  };

  // 회원가입
  const register = async () => {
    try {
      const createdUser = await createUserWithEmailAndPassword(firebaseAuth, email, password);
      console.log(createdUser)
    } 
    catch(error) {
      console.log(error.message)
    }
  }

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
              <p>회원가입을 해주세요.</p>
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
                회원가입
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* //CONTENT */}
    </div>
  );
}

export default Signup;
