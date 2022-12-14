import React, { useState } from "react";
import "../css/App.css";
import "./Signin.css";
import loginPost from "../api/auth"
import { userInfo } from "../api/userInfo";

const LoginForm = (e) => {
  const [usrId, setUsrId] = useState("");
  const [usrPw, setUsrPw] = useState("");

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

  // ๐ ํด๋น ์์ด๋์ ๋น๋ฐ๋ฒํธ๊ฐ ์ผ์นํ๋ฉด ๋ก๊ทธ์ธ OK
  const onSubmit = (e) => {
    e.preventDefault();

    const find = userInfo.find(info => info.accntId === usrId & info.accntPw === usrPw);

    if(find === undefined) {
      alert('์์ด๋์ ๋น๋น๋ฒํธ๊ฐ ์ผ์นํ์ง ์์ต๋๋ค.')
    } else {
      alert(`${usrId}๋ ํ์ํฉ๋๋ค !`)
      
      // ๐ ๋์์ post๋ก ํ ํฐ์ ๋ฐ์์ state์ ์ ์ฅํด์ค
      // axios.post('http://192.168.0.111:10010/account/login', {"accntId": usrId, "accntPw": usrPw})
      loginPost({"accntId": usrId, "accntPw": usrPw})
      .then((res)=>{

        console.log(res)
        localStorage.setItem('accessToken', res.data['membership.smartdatacorp.co.kr'])
      });
    }


  };


  return (
    <>
      <form className="form" onSubmit={onSubmit}>
        <p>
          <span>์์ด๋</span>
          <input
            type="text"
            name="id"
            value={usrId}
            required
            onChange={onChange}
          />
        </p>
        <p>
          <span>๋น๋ฐ๋ฒํธ</span>
          <input
            type="text"
            name="pw"
            defaultValue={usrPw}
            required
            onChange={onChange}
          />
        </p>
        <input className="btn_blue" type="submit" value="๋ก๊ทธ์ธ" />
      </form>
    </>
  );
}

function Signin() {

  return (
    <div className="loginForm">
      <LoginForm />
    </div>
  );
}

export default Signin;
