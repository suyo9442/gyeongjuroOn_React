import React, { useEffect, useState } from "react";
import "../css/App.css";
// Table 컴포넌트
import Table from "../components/table/Table";
// axios 모듈
import { selectUser, getUser, insertUser, updateUser, deleteUser } from '../api/board';


// 등록 & 수정
const Addpost = (props) => {
  const [usrName, setUsrName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  // 📍 input value를 state에 저장
  const onChange = (e) => {
    e.preventDefault();
    const {
      target: { name, value },
    } = e;

    if (name === "name") {
      setUsrName(value);
      console.log(usrName);
    } else if (name === "email") {
      setEmail(value);
      console.log(email);
    } else if (name === "password") {
      setpassword(value);
      console.log(password);
    }
  };

  // 📍 폼을 제출하면 이름, 아이디, 비번을 post 요청
  const addSubmit = (e) => {
    e.preventDefault();

    if (usrName && email && password) {
      insertUser({usrNm: usrName, usrId: email, usrPw: password})
      .then((res) => {
        console.log(res);
      });
      alert('등록되었습니다');
    }
  };

  return (
    <div className="addForm_wrap modal_wrap">
      <div className="addForm modal_inner">
        <button className="closeBtn" onClick={props.open}>
          X
        </button>

        <form className="form" onSubmit={addSubmit}>
          <p>
            <span>이름</span>
            <input
              type="text"
              name="name"
              required
              defaultValue={usrName}
              onChange={onChange}
            />
          </p>

          <p>
            <span>아이디</span>
            <input
              type="text"
              name="email"
              required
              defaultValue={email}
              onChange={onChange}
            />
          </p>

          <p>
            <span>패스워드</span>
            <input
              type="password"
              name="password"
              required
              defaultValue={password}
              onChange={onChange}
            />
          </p>
          <input className="btn_blue" type="submit" value="등록" />
        </form>
      </div>
    </div>
  );
};
// 상세정보
const DetailPost = (props) => {
  const [data, setData] = useState({});
  const [openIs, setOpenIs] = useState(false);
  const [editName, setEditName] = useState('');
  const [editYn, setEditYn] = useState('');


  // 📍 클릭한 게시글의 id를 받아와 해당 데이터를 요청
  useEffect(() => {
    async function detailPost() {
      getUser(props.id)
      .then((res) => {
        setData((prev) => res.data);
        console.log(`${res.data.usrId} 불러오기 성공`);
      });
    }
    detailPost();
  }, []);

  // 📍input value를 state에 업데이트
  const onChange = (e) => {
    e.preventDefault();
    const {
      target: { name, value },
    } = e;

    if (name === "name") {
      setEditName(value);
      console.log(editName);
    } else if (name === "useyn") {
      setEditYn(value);
      console.log(editYn);
    } 
  }

  // 📍 수정을 누르면 데이터를 넣어 post 요청
  const updateSubmit = (e) => {
    e.preventDefault();
    // 이거 값들어왔는지 체크하고 포스트해야하는지 확인하셈 !⭐️⭐️

    if(editName && editYn) {
      updateUser({"usrNm" : editName, "useYn" : editYn, "usrId" : data.usrId})
      .then((res)=>{console.log(res)})
    } else {
      console.log('값이 없습니다 !')
    }
  }

  return (
    <div className="detailModal_wrap modal_wrap">
      <div className="detailModal modal_inner">
        <button className="closeBtn" onClick={props.open2}>
          X
        </button>

        <form className="form" onSubmit={updateSubmit}>
          <p>
            <span>사용자 아이디:</span>
            <input
              type="text"
              placeholder={data.usrId}
              disabled />
          </p>
          <p>
            <span>사용자명:</span>
            <input
              type="text"
              name="name"
              placeholder={data.rgstBy}
              defaultValue={editName}
              required
              onChange={onChange}/>
          </p>
          <p>
            <span>사용유무:</span>
            <input
              type="text"
              name="useyn"
              placeholder={data.useYn}
              defaultValue={editYn}
              required
              onChange={onChange}/>
          </p>
          <p>
            <span>생성일:</span>
            <input
              type="text"
              placeholder={data.rgstDate}
              disabled/>
          </p>
          <input className="btn_blue" type="submit" value="수정" />
        </form>

        {/* <ul className="modal_list">
          <li>
            <span>사용자 아이디: </span>
            
            <span className="modal_cont">{data.usrId}</span>
          </li>
          <li>
            <span>사용자명: </span>
            <span className="modal_cont">{data.rgstBy}</span>
          </li>
          <li>
            <span>사용유무: </span>
            <span className="modal_cont">{data.useYn}</span>
          </li>
          <li>
            <span>생성일: </span>
            <span className="modal_cont">{data.rgstDate}</span>
          </li>
        </ul> */}
      </div>
    </div>
  );
};

function Board() {
  const [initData, setInitData] = useState([]);
  const [formOpen, setFormOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [usrId, setUsrId] = useState("");

  // 📍 렌더링 되자마자 페이지 1의 게시물을 요청해서 뿌려줌
  useEffect(() => {
    selectUser({perPage: 10, currentPage: 1})
    .then((res) => {
      setInitData((prev) => res.data.userList.data);
      console.log("페이지 불러오기 성공");
    })
    .catch((err) => console.log(err));
  }, []);

  // 📍 게시글을 누르면 해당 아이디로 삭제 요청을 보냄 
  const deletePost = async(e, id) => {
    e.stopPropagation();
    
    deleteUser({"usrId": id})
    .then((res)=>{
      console.log(res)
    })
  }



  // 재사용성해주세요 ⭐️
  function open() {
    if (formOpen) {
      setFormOpen(false);
    } else {
      setFormOpen(true);
    }
  }
  function open2() {
    if (modalOpen) {
      setModalOpen(false);
    } else {
      setModalOpen(true);
    }
  }



  return (
    <>
      <div className="addBtn">
        <button className="btn_blue" onClick={() => setFormOpen(true)}>
          등록
        </button>
      </div>

      <Table
        headerName={[
          "사용자아이디",
          "사용자명",
          "사용유무",
          "생성일",
          "수정일",
          "수정자",
          " ",
        ]}
      >
        {initData.map((item, index) => {
          return (
            <tr
              key={index}
              onClick={() => {
                setUsrId((prev) => ({ usrId: item.USR_ID }));
                open2();
              }}
            >
              <td>{item.USR_ID}</td>
              <td>{item.RGST_BY}</td>
              <td>{item.USE_YN}</td>
              <td>{item.RGST_DATE}</td>
              <td>준비중</td>
              <td>준비중</td>
              <td><button 
              className="btn_blue" 
              children="삭제"
              onClick={(e)=>deletePost(e, item.USR_ID)}
              /></td>
            </tr>
          );
        })}
      </Table>

      <ul className="pageIdx">
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
      </ul>

      {modalOpen === true ? <DetailPost open2={open2} id={usrId} /> : null}
      {formOpen === true ? <Addpost open={open} /> : null}
    </>
  );
}

export default Board;
