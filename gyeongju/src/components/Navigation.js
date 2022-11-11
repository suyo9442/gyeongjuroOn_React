import React from "react";
import { Link } from 'react-router-dom';

const Naviation = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/signin">로그인</Link>
                </li>
                <li>
                    <Link to="/signup">회원가입</Link>
                </li>
                <li>
                    <Link to="/board">게시판</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Naviation;