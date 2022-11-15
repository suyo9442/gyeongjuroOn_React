import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./BoardView.css";


function GetData(paramsId) {
//   useEffect(() => {
//     axios
//       .get("https://codingapple1.github.io/shop/data2.json")
//       .then((res) => {
//         setData(() => res.data);
//         window.alert('????')
//       })
//       .catch((error) => {
//         alert(error);
//       });
//   }, []);


//   const item = (
//     <>
//         <h2 align="center">게시글 상세정보</h2>
//         <div className="voc-view-wrapper">
//         <div className="voc-view-row">
//             <label>게시글 번호</label>
//             <div>{console.log(data[0].title)}</div>
//             {/* <label>{data}</label> */}
//         </div>
//         <div className="voc-view-row">
//             <label>제목</label>
//             {/* <label>{data[paramsId].title}</label> */}
//         </div>
//         <div className="voc-view-row">
//             <label>가격</label>
//             {/* <label>{data[paramsId].price}</label> */}
//         </div>
//         <div className="voc-view-row">
//             <label>내용</label>
//             {/* <div>{data[paramsId].content}</div> */}
//         </div>
//         </div>
//     </>
//   );

//     return item;
}

function BoardView() {
    const { itemId } = useParams();
    const [data, setData] = useState({});

    const itemId2 = parseInt(itemId) - 3;
    console.log(itemId2)

    useEffect(() => {
        axios
        .get("https://codingapple1.github.io/shop/data2.json")
        .then((res) => {
            setData(res.data);
            // window.alert('????')
        })
        .catch((error) => {
            alert(error);
        });
    }, []);

    const item = (
        <>
            <h2 align="center">게시글 상세정보</h2>
            <div className="voc-view-wrapper">
            <div className="voc-view-row">
                <label>게시글 번호</label>
                <label>{data[itemId2] && data[itemId2].id}</label>
            </div>
            <div className="voc-view-row">
                <label>제목</label>
                <label>{data[itemId2] && data[itemId2].title}</label>
            </div>
            <div className="voc-view-row">
                <label>가격</label>
                <label>{data[itemId2] && data[itemId2].price}</label>
            </div>
            <div className="voc-view-row">
                <label>내용</label>
                <div>{data[itemId2] && data[itemId2].content}</div>
            </div>
            </div>
        </>
      );
 

    return (
        <div>
            {item}
        </div>
      )
  
  
}

export default BoardView;
