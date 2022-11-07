import './App.css';
import './css/common.css';
import './css/reset.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';

// import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';

function App() {

  return (
    <div className="App">
        {/* <Login /> */}
        <Signup/>
    </div>
  );
}

export default App;
