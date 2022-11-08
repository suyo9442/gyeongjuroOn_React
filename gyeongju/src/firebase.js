// firebase 인증초기화
import { initializeApp } from 'firebase/app';

//// 기능 메소드
import { 
    getAuth, // 사용자 인증 정보
    createUserWithEmailAndPassword, // 회원가입 
    signInWithEmailAndPassword // 로그인
} from 'firebase/auth';


// api info
const firebaseConfig = {
    apiKey: "AIzaSyBaE0dbhYIKgNzG2xiB7LMmHjHrc-RmnOg",
    authDomain: "gyeongjroon.firebaseapp.com",
    projectId: "gyeongjroon",
    storageBucket: "gyeongjroon.appspot.com",
    messagingSenderId: "G-F1Y3KGXBWM",
    appId: "1:101094794004:web:0abccf6e416bbebfa11801",
    measurementId: "G-F1Y3KGXBWM"
  };
const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);

export { firebaseAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword };
