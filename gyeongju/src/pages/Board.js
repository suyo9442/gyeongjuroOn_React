import React, { useState, useEffect } from 'react';
import '../css/App.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

// axios 모듈
import { boardAxios } from '../api/boardAxios';

// Table 컴포넌트 
import Table from '../components/table/Table';



// function GetData() {
//     const [data,setData] = useState({});

//     useEffect(()=>{
//         axios.post('http://192.168.0.111:10010/test/selectuser', {"perPage": 10, "currentPage": 1} )
//         .then((res)=>{
//             setData(res.data);
//             console.log(res.data)
//         })
//         .catch(()=>{
//             console.log('데이터 요청 실패!')
//         });  
//     },[])

//     // map 축약문은 just괄호 ! : map((i)=>())
//     const item = (Object.values(data)).map((item)=>{
//         return (
//             <TableRow key={item.id}>
//                 <TableColumn>{item.id}</TableColumn>
//                 <TableColumn>
//                     {/* useParams를 통해 매개변수를 넘겨줄게 */}
//                     <Link to={`/board/${item.id}`}>
//                         {item.title}
//                     </Link>
//                 </TableColumn>
//                 <TableColumn>{item.price}</TableColumn>
//                 <TableColumn>{item.content}</TableColumn>
//             </TableRow>
//         )
//     })
//     return item;
// }


function Board () {
    const [ pageIdx, setpageIdx ] = useState('');
    const [ clickIs,  setClickIs ] = useState(0);
    const [ selectUser, setSelectUser ] = useState({});
    const [ modalOpen, setModalOpen ] = useState(false);
    

    function postData() {
        axios.post('http://192.168.0.111:10010/test/selectuser', {"perPage": 10, "currentPage": 1})
        .then((res)=>{
            // console.log(res.config.data.currentPage)
            const stringiFy = JSON.stringify(res.data.userList);
            localStorage.setItem('user',stringiFy);
        })
        .catch((err)=>alert(err));
    }
    
    function test(e) {
        e.preventDefault();
        setClickIs(clickIs + 1);
        
        if(clickIs >= 0) {
            setpageIdx(e.target.value + 1);
            console.log('페이지 번호를 업데이트 : ' + pageIdx);
            postData();
        
        } else {
            console.log('조건 실패')
        }
    }

    const local = JSON.parse(localStorage.getItem('user'));

    function modal(num) {
        if(modalOpen) {
            setModalOpen(false)
        } else (
            setModalOpen(true)
        )

        axios.post('http://192.168.0.111:10010/test/getuser', {"usrId": local.data[num].USR_ID})
        .then((res)=>{
            console.log(res)
        })
        .catch((err)=>{console.log(err.massage)})
    }

    // console.log(local.data[0].USR_ID)



    return(
        <>  
            <div className='addBtn'>
                {/* <button onClick={setModalOpen(false)}>등록</button> */}
            </div>

            <Table headerName={['사용자아이디', '사용자명', '사용유무', '생성일', '수정일', '수정자']}>
                {
                    local.data.map((item, index)=>{
                        return(
                            <tr key={index} onClick={() => {modal(index)}}>
                                <td>{item.USR_ID}</td>
                                <td>{item.RGST_BY}</td>
                                <td>{item.USE_YN}</td>
                                <td>{item.RGST_DATE}</td>
                                <td>준비중</td>
                                <td>준비중</td>
                            </tr>
                        )
                    })
                }
            </Table>

            <ul className='pageIdx'>
                <li onClick={(e)=>{test(e)}}>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
            </ul>

            {
                modalOpen === true ? (            
                <div className='detailModal_wrap'>
                    <div className='detailModal'>
                        <button className='closeBtn' onClick={() => {modal()}}>X</button>
                        <ul className='modal_list'>
                            <li>
                                <span>사용자 아이디: </span>
                                <span>123</span>
                            </li>
                            <li>
                                <span>사용자명: </span>
                                <span>123</span>
                            </li>
                            <li>
                                <span>사용유무: </span>
                                <span>123</span>
                            </li>
                            <li>
                                <span>생성일: </span>
                                <span>123</span>
                            </li>
                            <li>
                                <span>수정일: </span>
                                <span>준비중</span>
                            </li>
                            <li>
                                <span>수정자: </span>
                                <span>준비중</span>
                            </li>
                        </ul>
                    </div>
                </div>
                ) : null
            }

        </>
    )
};

export default Board;