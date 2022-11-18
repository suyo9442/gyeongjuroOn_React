import axios from "axios";

export const boardAxios = axios.create({
    baseURL: "http://192.168.0.111:10010/test/",
    method: "post",
});