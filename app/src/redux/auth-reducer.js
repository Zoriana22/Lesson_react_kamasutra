import { authAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';

let initialState = {
    Id: null,
    email: null,
    login: null,
    isAuth: false,
};


const authReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true,

            }


        default: return state;
    }
}


export const setAuthUserData = (Id, email, login) => ({ type: SET_USER_DATA, data: { Id, email, login } });
export const getAuthUserData = () => (dispatch) => {
    return authAPI.me().then(response => {

        if (response.data.resultCode === 0) {
            let { id, email, login } = response.data.data;
            dispatch(setAuthUserData(id, email, login));
        }
        ;
    });
}


export default authReducer;