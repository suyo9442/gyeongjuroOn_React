import axios from "axios";

export const instance = axios.create({
    baseURL: "http://192.168.0.111:10010/",
    method: "post",

    // api 요청할 때마다 local에 저장된 토큰을 보내줌
    headers: {
        "Content-Type": "application/json",
        // "membership.smartdatacorp.co.kr": localStorage.getItem('accessToken')
    }
});


instance.interceptors.request.use(
    function(config) {
        // 2️⃣ 응답직전 로컬에 저장된 토큰을 헤더에 넣어줌 
        config.headers["membership.smartdatacorp.co.kr"] = localStorage.getItem('accessToken');
        
        // console.log(config)
        return config;
    },
    function(error) {
        return Promise.reject(error)
    }
)


// 응답 후 
instance.interceptors.response.use(
    function(res) {
        console.log(res);

        // ⛔️ 토큰 만료 시 👉 로그인으로 redirect
        if(res.headers['tokencode'] === '511') {
            alert('토큰이 만료되었습니당 !');
            localStorage.removeItem("accessToken");
        } else if (res.headers['tokencode'] === '200') {
            // 1️⃣ 응답직후 받은 토큰 로컬에 저장
            localStorage.setItem('accessToken', res.config.headers['membership.smartdatacorp.co.kr']);
            console.log('토큰 갱신 !')
        }
        return res;
    },
    function(error){
        // 에러는 tokenCode값으로 처리 (토큰 만료 시) 

        return Promise.reject(error);
    }
)
