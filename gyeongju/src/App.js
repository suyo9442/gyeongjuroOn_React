import './App.css';
import './css/common.css';
import './css/reset.css';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import { Routes, Route, Link } from 'react-router-dom';

function App() {

  return (
    <div className="App">
        <Routes>
          <Route exact path="/" element={<>Home</>} />
          <Route path='/signin' element={<Signin/>}/>
          <Route path='/signup' element={<Signup/>}/>
        </Routes>

        <Link to="signin">로그인</Link>
        <Link to="signup">회원가입</Link>
        {/* <button onClick={navigate('/signin')}>회원기입</button> */}
        {/* <button onClick={}>로그인</button> */}
    </div>
  );
}

export default App;
