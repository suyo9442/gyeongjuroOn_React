import axios from "axios";

export const instance = axios.create({
    baseURL: "http://192.168.0.111:10010/",
    method: "post",
});


// instance.interceptors.request.use(
//     function(config) {
//         config.headers["Content-Type"] = "application/json";
//         config.headers["membership.smartdatacorp.co.kr"] = localStorage.getItem('Access_Token');

//         return config;
//     },
//     function(error) {
//         console.log(error);
//         return Promise.reject(error)
//     }
// )