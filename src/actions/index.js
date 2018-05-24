import types from './types';
import axios from 'axios';

// export function changeAuth(auth){
//     return {
//         type: types.CHANGE_AUTH,
//         auth: auth
//     }
// }

const BASE_URL = "http://api.reactprototypes.com"

export function signUp(cred) {
    return async (dispatch) =>{
        const response = await axios.post(`${BASE_URL}/signup`, cred)

        console.log('Sing up Response:', response);


        localStorage.setItem('token', response.data.token);

        dispatch({
            type: types.SIGN_UP
        });
    }
}

export function signIn(cred) {
    return async dispatch => {
        const response = await axios.post(`${BASE_URL}/signin`, cred)

        console.log('Sign In res', response);

        localStorage.setItem('token', response.data.token);

        dispatch({
            type: types.SIGN_IN
        });
    }
}
