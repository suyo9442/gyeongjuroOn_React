import { instance } from './customAxios';

function loginPost (authData) {
    return instance.post('/account/login', authData);
}

export default loginPost;