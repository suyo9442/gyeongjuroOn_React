import React, { useState, useEffect } from 'react';
import { instance } from "./customAxios";
import { useNavigate } from 'react-router-dom';

// export const useAxiosInterceptor = () => {
//     const navigate = useNavigate();
//     const [tokenExp, setTokenExp] = useState(false); 

//     console.log(props)

//     // 🧩 response inner
//     const responseHandler = (response) => {
//         console.log(response)

//         // 1️⃣ 응답 후 받은 토큰 '로컬에 저장'
//         localStorage.setItem('accessToken', response.config.headers['membership.smartdatacorp.co.kr']);

//         // ⛔️ 토큰 만료 시 👉 로그인으로 redirect
//         if(response.headers['tokencode'] === '511') {
//             localStorage.removeItem("accessToken");
//             alert('토큰이 만료 !');
//             navigate('/');
//         } 
//         else if (response.headers['tokencode'] === '200') {
//             localStorage.setItem('accessToken', response.config.headers['membership.smartdatacorp.co.kr']);
//             alert('토큰이 갱신 !');
//         }

//         return response;         
//     }
//     // 🧩 request inner
//     const requestHandler = (config) => {
//         // 2️⃣ 요청 전 '로컬에 저장'된 토큰을 헤더에 보내줌
//         config.headers["membership.smartdatacorp.co.kr"] = localStorage.getItem('accessToken');
    
//         return config;
//     }
//     // 🧩 error inner
//     const errorHandler = (error) => {
//         return Promise.reject(error);
//     }


//     // 🖼 response 인터셉터 
//     const responseInterceptor = instance.interceptors.response.use(responseHandler);

//     // 🖼 request 인터셉터
//     const requestInterceptor = instance.interceptors.request.use(requestHandler);
    

//     // ✨ useEffect
//     // ❌
//     // 새로고침 시 토큰갱신 안됨 (토큰코드 511뜸) 👉 문제는 훅이다
//     // 훅안에서 인터셉터 함수를 사용했더니,,
//     // 지금 '토큰 만료' 가 뜨지도 않은 걸 보니 마운트 돼고나서 바로 포스트 요청을 해야하는데 안하는 상황같음
//     // 훅을 사용하면 이럼
//     // useEffect(()=>{
//     //     responseInterceptor();
//     //     requestInterceptor();
//     // },[responseInterceptor, requestInterceptor])

//     // ⭕️
//     // useEffect / return / eject / 의존성배열 ❓
//     // 👉 인터셉터 함수가 업데이트되면 (= 토큰을 가져와 갱신시키면) 인터셉터 함수를 멈출게요
//     // 만약 인터셉터 함수가 반복적으로 실행되면,,, 갱신 + 갱신 + 갱신 여러번 반복되기때문
//     useEffect(() => {
//         return () => {
//             // 인터셉터 함수가 업뎃되면 인터셉터 함수 stop!
//             instance.interceptors.request.eject(requestInterceptor);
//             instance.interceptors.response.eject(responseInterceptor);

//             console.log('인터셉터 삭제합니다')
//             setTokenExp(true);
//         };
//       }, [responseInterceptor, requestInterceptor]);


//       // 스테이트는 부모 => 자식에게만 전달이됨
//       // 부모에서 스테이트를 생성하고 props로 전달해주고
//       // 자식에서 스테이트를 변경하는 근데 리드온리라서 변경사항이 반영이,,,음 아니다 일케안댐
//       // 왜냐면 지금 스테이트는 자식에서 컨트롤이 되어야하는 코드임
//       // 그래서 리덕스를 사용하는구나?

//       // 




    
    
    
    
//       // 가만히 있어도 자동으로 만료 알림이 뜨도록 하고싶어요
//       // 일단, 셋타임아웃을 실행하기엔,,,정확하게 토근 유지 시간이 셋타임아웃 시간과 동일할까?
//       // 아니면, 아 이래서 유즈이펙트 !? 만약 함수동작이 사라지면 자동으로 콘솔이 찍힐까? 안찍히네
//       // 알겠다 !! modal을 생각해보셈 
//       // 1. state false 을 생성  2. state가 트루면 모달 뿅 




// }


export default function ExpModal(props) {
    const useAxiosInterceptor = () => {
        const navigate = useNavigate();
        // const [opneIs, setOpenIs] = useState(false);

        console.log(props.모달)
    
        // 🧩 response inner
        const responseHandler = (response) => {
            console.log(response)
    
            // 1️⃣ 응답 후 받은 토큰 '로컬에 저장'
            localStorage.setItem('accessToken', response.config.headers['membership.smartdatacorp.co.kr']);
    
            // ⛔️ 토큰 만료 시 👉 로그인으로 redirect
            if(response.headers['tokencode'] === '511') {
                localStorage.removeItem("accessToken");
                alert('토큰이 만료 !');
                navigate('/');
            } 
            else if (response.headers['tokencode'] === '200') {
                localStorage.setItem('accessToken', response.config.headers['membership.smartdatacorp.co.kr']);
                alert('토큰이 갱신 !');
            }
    
            return response;         
        }
        // 🧩 request inner
        const requestHandler = (config) => {
            // 2️⃣ 요청 전 '로컬에 저장'된 토큰을 헤더에 보내줌
            config.headers["membership.smartdatacorp.co.kr"] = localStorage.getItem('accessToken');
        
            return config;
        }
        // 🧩 error inner
        const errorHandler = (error) => {
            return Promise.reject(error);
        }
    
    
        // 🖼 response 인터셉터 
        const responseInterceptor = instance.interceptors.response.use(responseHandler);
    
        // 🖼 request 인터셉터
        const requestInterceptor = instance.interceptors.request.use(requestHandler);
        
    
        // ✨ useEffect
        useEffect(() => {
            return () => {
                // 인터셉터 함수가 업뎃되면 인터셉터 함수 stop!
                instance.interceptors.request.eject(requestInterceptor);
                instance.interceptors.response.eject(responseInterceptor);
    
                props.모달();
                console.log('인터셉터 삭제합니다')
            };
          }, [responseInterceptor, requestInterceptor]);
    }
    useAxiosInterceptor();

    return (
        <div>
            <p>안냥하세양</p>
        </div>
    )
}

// 1. 훅을 컴포넌트처럼 만들어? 이유는,,프랍스 전달받아야하니까
// 2. 그럼 부모에서 껐다 켜졌다 하는 스테이트 함수를 생성해
// 3. 그 함수를 state에 넣어주면 됭?


// 훅을 컴포넌트로 만들어서 부모에서 사용한다음 프랍스를 전달해준다고함
