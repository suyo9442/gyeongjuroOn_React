import './App.css';
import './css/common.css';
import './css/reset.css';
import Naviation from './components/Navigation';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Board from './pages/Board';
import BoardView from './pages/BoardView';
import { Routes, Route, Link } from 'react-router-dom';

function App() {

  return (
    <>
        <Naviation/>

        <Routes>
          <Route exact path="/" element={<>Home</>} />
          <Route path='/signin' element={<Signin/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/board' element={<Board/>}/>
          <Route exact path='/board/:itemId' element={<BoardView/>}/>
        </Routes>
      

        {/* <button onClick={navigate('/signin')}>회원기입</button> */}
        {/* <button onClick={}>로그인</button> */}
    </>
  );
}

export default App;
