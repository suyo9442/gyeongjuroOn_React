import { boardAxios } from "./boardAxios";

function selectUser (boardData) {
    return boardAxios.post('/selectuser', boardData);
}

function getUser (boardData) {
    return boardAxios.post('/getuser', boardData);
}

function insertUser (boardData) {
    return boardAxios.post('/insertuser', boardData);
}

function updateUser (boardData) {
    return boardAxios.post('/updateuser', boardData);
}

function deleteUser (boardData) {
    return boardAxios.post('/deleteuser', boardData);
}

export { selectUser, getUser, insertUser, updateUser, deleteUser };