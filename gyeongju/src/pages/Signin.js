import React, { useState } from "react";
import "../css/App.css";
import "./Signin.css";
import loginPost from "../api/auth"
import { userInfo } from "../api/userInfo";
import { selectUser, getUser, insertUser, updateUser, deleteUser } from '../api/board';

const LoginForm = (e) => {
  const [usrId, setUsrId] = useState("");
  const [usrPw, setUsrPw] = useState("");
  const [usrToken, setUsrToken] = useState("");

  const onChange = (e) => {
    const {
      target: { name, value },
    } = e;

    if (name === "id") {
      setUsrId(value);
    } else if (name === "pw") {
      setUsrPw(value);
    }
  };

  // 📍 해당 아이디와 비밀번호가 일치하면 로그인 OK
  const onSubmit = (e) => {
    e.preventDefault();

    const find = userInfo.find(info => info.accntId === usrId & info.accntPw === usrPw);

    if(find === undefined) {
      alert('아이디와 비빌번호가 일치하지 않습니다.')
    } else {
      alert(`${usrId}님 환영합니다 !`)
      
      // 📍 동시에 post로 토큰을 받아와 state에 저장해줌
      // axios.post('http://192.168.0.111:10010/account/login', {"accntId": usrId, "accntPw": usrPw})
      loginPost({"accntId": usrId, "accntPw": usrPw})
      .then((res)=>{

        console.log(res)
        console.log(res.headers['membership.smartdatacorp.co.kr'])
        localStorage.setItem('Access_Token', res.data['membership.smartdatacorp.co.kr'])
      });
    }


  };


  return (
    <>
      <form className="form" onSubmit={onSubmit}>
        <p>
          <span>아이디</span>
          <input
            type="text"
            name="id"
            value={usrId}
            required
            onChange={onChange}
          />
        </p>
        <p>
          <span>비밀번호</span>
          <input
            type="text"
            name="pw"
            defaultValue={usrPw}
            required
            onChange={onChange}
          />
        </p>
        <input className="btn_blue" type="submit" value="로그인" />
      </form>
    </>
  );
}

function Signin() {
  selectUser({perPage: 10, currentPage: 1}).then((res)=>console.log(res))

  return (
    <div className="loginForm">
      <LoginForm />
    </div>
  );
}

export default Signin;
