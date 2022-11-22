import { instance } from "./axiosSet";

function selectUser (boardData) {
    return instance.post('test/selectuser', boardData);
}

function getUser (boardData) {
    return instance.post('test/getuser', boardData);
}

function insertUser (boardData) {
    return instance.post('test/insertuser', boardData);
}

function updateUser (boardData) {
    return instance.post('test/updateuser', boardData);
}

function deleteUser (boardData) {
    return instance.post('test/deleteuser', boardData);
}

export { selectUser, getUser, insertUser, updateUser, deleteUser };