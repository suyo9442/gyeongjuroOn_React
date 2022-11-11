import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// Table 컴포넌트 
// import Table from '../components/table/Table';
import TableRow from '../components/table/TableRow';
import TableColumn from '../components/table/TableColumn';
import Table from '../components/table/Table';

function GetData() {
    const [data,setData] = useState({});

    useEffect(()=>{
        axios.get('https://codingapple1.github.io/shop/data2.json')
        .then((res)=>{
            setData(res.data);
            console.log(res.data)
        })
        .catch(()=>{
            console.log('데이터 요청 실패!')
        });  
    },[])

    // map 축약문은 just괄호 ! : map((i)=>())
    const item = (Object.values(data)).map((item)=>{
        
        return (
            <TableRow key={item.id}>
                <TableColumn>{item.id}</TableColumn>
                <TableColumn>
                    {/* useParams를 통해 매개변수를 넘겨줄게 */}
                    <Link to={`/board/${item.id}`}>
                        {item.title}
                    </Link>
                </TableColumn>
                <TableColumn>{item.price}</TableColumn>
                <TableColumn>{item.content}</TableColumn>
            </TableRow>
        )
    })
    return item;
}


function Board () {
    const item = GetData();

    return(
        <>
            <Table headerName={['글번호', '제목', '가격', '내용']}>
                {item}
            </Table>
        </>
    )
};

export default Board;