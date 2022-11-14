import './css/App.css';
import './css/common.css';
import './css/reset.css';
import React, { useState, useEffect } from 'react'
import Naviation from './components/Navigation';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Board from './pages/Board';
import BoardView from './pages/BoardView';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
        <Naviation/>

        <Routes>
          <Route exact path="/" element={<>Home입니다.</>} />
          <Route path='/signin' element={<Signin/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/board' element={<Board/>}/>
          <Route exact path='/board/:itemId' element={<BoardView/>}/>
        </Routes>
      

        {/* <button onClick={navigate('/signin')}>회원기입</button> */}
        {/* <button onClick={TestData}>데이터</button> */}
    </>
  );
}

export default App;
