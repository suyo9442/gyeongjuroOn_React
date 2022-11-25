import axios from "axios";

export const instance = axios.create({
    baseURL: "http://192.168.0.111:10010/",
    method: "post",

    headers: {
        "Content-Type": "application/json",
        // "membership.smartdatacorp.co.kr": localStorage.getItem('accessToken')
    }
});