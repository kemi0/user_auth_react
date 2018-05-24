import types from '../actions/types';

const DEFAULT_STATE = {
    auth: false
};

export default (state = DEFAULT_STATE, action) => {
    switch(action.type){
        // case types.CHANGE_AUTH:
        //     return {...state, auth: action.auth};
        case types.SIGN_IN:
        case types.SIGN_UP:
            return { ...state, auth: true };
        default:
            return state;
    }
}
