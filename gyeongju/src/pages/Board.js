import React, { useEffect, useState } from "react";
import "../css/App.css";
import axios from "axios";

// axios 모듈
// import { boardAxios } from '../api/boardAxios';

// Table 컴포넌트
import Table from "../components/table/Table";
import { async } from "@firebase/util";

function Board() {
  const [initData, setInitData] = useState({});
  const [pageIdx, setPageIdx] = useState(1);
  const [clickIs, setClickIs] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const [usrName, setUsrName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');


function postPage(){
    axios.post('http://192.168.0.111:10010/test/selectuser', {
        "perPage": 10,
        "currentPage": 1,  
    }).then((res)=>{
        console.log(res.data.userList);
        // return res.data;
    })
}
useEffect(()=>{
    const tester = async() => {
        const res = await postPage();
        setInitData(res)
    }
    tester();
    // console.log(initData)
}, [])


// 페이지 번호를 post로 보내고, 해당 데이터 게시판에 뿌리기
// function pagePost(e) {
//     setPageIdx(parseInt(e.target.innerText));

//     axios.post('http://192.168.0.111:10010/test/selectuser', {
//         "perPage": 10,
//         "currentPage": pageIdx,  
//     })
//     .then((res)=>{
//         const stringiFy = JSON.stringify(res.data.userList);
//         localStorage.setItem('initData', stringiFy);
//         console.log(pageIdx)
//     })
// }


// 📍 클릭한 게시글의 id를 받아와 해당 데이터를 모달창에 뿌림
function detailPost(num) {
return axios
    .post("http://192.168.0.111:10010/test/getuser", { usrId: num })
    .then((res) => {
    const stringiFy = JSON.stringify(res.data);
    localStorage.setItem('userId', stringiFy);

    return res.data;
    });
}
// 모달창이 띄어진 후 로컬스토리지가 업뎃되는 문제 해결 ❗️
async function modal(num) {
const info = await detailPost(num);

if (info && modalOpen) {
    setModalOpen(false);
} else setModalOpen(true);
}
// 모달창에 뿌릴 데이터
const local2 = JSON.parse(localStorage.getItem("userId"));


// 📍 등록을 누르면 폼창이 열리고, input value를 넣어서 post요청
function addPost(e) {
e.preventDefault();
const {target: {name, value}} = e;

if(name === 'name') {
    setUsrName(value);
    console.log(usrName)
} else if (name === 'email') {
    setEmail(value)
    console.log(email)
} else if (name === 'password') {
    setpassword(value)
    console.log(password)
}
}
// 폼을 제출하면 이름, 아이디, 비번을 post 요청
function addSubmit(e) {
e.preventDefault();

if(usrName && email && password) {
    axios.post('http://192.168.0.111:10010/test/insertuser', {
        "usrNm": usrName,
        "usrId": email,
        "usrPw": password,
    }).then((res)=>{ console.log(res) })
    console.log('제출성공 !')
} else {
    console.log('실패 !')
}
}


  return (
    <>
      <div className="addBtn">
        <button className="btn_blue" onClick={()=>setFormOpen(true)}>등록</button>
      </div>

      <Table
        headerName={[
          "사용자아이디",
          "사용자명",
          "사용유무",
          "생성일",
          "수정일",
          "수정자",
        ]}
      >
        {/* {initData.data.map((item, index) => {
          return (
            <tr
              key={index}
              onClick={() => {
                modal(item.USR_ID);
              }}
            >
              <td>{item.USR_ID}</td>
              <td>{item.RGST_BY}</td>
              <td>{item.USE_YN}</td>
              <td>{item.RGST_DATE}</td>
              <td>준비중</td>
              <td>준비중</td>
            </tr>
          );
        })} */}
      </Table>

      <ul className="pageIdx">
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
      </ul>

      {modalOpen === true ? (
        <div className="detailModal_wrap modal_wrap">
          <div className="detailModal modal_inner">
            <button className="closeBtn" onClick={() => setModalOpen(false)}>
              X
            </button>
            
            <ul className="modal_list">
                <li>
                    <span>사용자 아이디: </span>
                    <span className="modal_cont">{local2.usrId}</span>
                </li>
                <li>
                    <span>사용자명: </span>
                    <span className="modal_cont">{local2.rgstBy}</span>
                </li>
                <li>
                    <span>사용유무: </span>
                    <span className="modal_cont">{local2.useYn}</span>
                </li>
                <li>
                    <span>생성일: </span>
                    <span className="modal_cont">{local2.rgstDate}</span>
                </li>
            </ul>
          </div>
        </div>
      ) : null}

      {
        formOpen === true ? (
            <div className="addForm_wrap modal_wrap">
                <div className="addForm modal_inner">
                    <button className="closeBtn" onClick={() => setFormOpen(false)}>
                    X
                    </button>
        
                    <form className="add_form" onSubmit={addSubmit}>
                        <p>
                            <span>이름</span>
                            <input 
                            type="text"
                            name="name" 
                            defaultValue={usrName}
                            required
                            onChange={addPost}
                            />
                        </p>

                        <p>
                            <span>아이디</span>
                            <input 
                            type="text"
                            name="email"
                            defaultValue={email}
                            required 
                            onChange={addPost}
                            />
                        </p>

                        <p>
                            <span>패스워드</span>
                            <input 
                            type="password"
                            name="password"
                            defaultValue={password}
                            required
                            onChange={addPost}
                            />
                        </p>
                            <input className="btn_blue" type="submit" value="등록" />
                    </form>
                </div>
            </div>
        ) 
        : null
      }
    </>
  );
}

export default Board;
