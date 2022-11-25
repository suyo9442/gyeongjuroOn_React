import './css/App.css';
import './css/common.css';
import './css/reset.css';
import React, { useState } from 'react'
import Naviation from './components/Navigation';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Board from './pages/Board';
import BoardView from './pages/BoardView';
import { Routes, Route } from 'react-router-dom';
import { useAxiosInterceptor } from './api/useAxiosInterceptor';
import ExpModal from './api/useAxiosInterceptor';

function App() {
  // useAxiosInterceptor();

  const [openIs, setOpenIs] = useState(false);

  function 모달(control, setControl) {
    if(control) {
      setControl(false)
    } else {
      setControl(true)
    }

    console.log(2)
  }

  // 클릭해서 변하는 걸루 했었는데,,,
  // 자식에서 변하는 것이 부모에 반영이 되게 하려면,,,,
  // 부모가 함수를 전달해서 

  return (
    <>
        <Naviation/>

        <Routes>
          <Route exact path="/" element={<>Home입니다.</>} />
          <Route path='/signin' element={<Signin/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route 
            path='/board' 
            element={<Board/>}
            
          />
          <Route exact path='/board/:itemId' element={<BoardView/>}/>
        </Routes>

        { openIs ? <ExpModal 모달={모달}/> : null}
      
        {/* <button onClick={navigate('/signin')}>회원기입</button> */}
        {/* <button onClick={TestData}>데이터</button> */}
    </>
  );
}

export default App;
