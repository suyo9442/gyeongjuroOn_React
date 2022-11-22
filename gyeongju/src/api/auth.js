import { instance } from './axiosSet';

function loginPost (authData) {
    return instance.post('/account/login', authData);
}

export default loginPost;