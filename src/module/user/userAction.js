import authService from './userService';
import {
    USER_LOGIN_PENDING, USER_LOGIN_LOGIN, USER_LOGIN_SUCESS,
    USER_REGISTER_PENDING, USER_REGISTER,
    USER_REGISTER_SUCCESS, USER_REGISTER_ERROR
} from './userActionTypes';

export const loginAction = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: USER_LOGIN_PENDING });

        // issue axios request to login api
        const response = await authService.login(email, password);

        //save jwt token local storage
        window.localStorage.setItem('bookstore-token', response.data.token);

        //dispatch redux action
        dispatch({
            type: USER_LOGIN_LOGIN,
            payload: response.data
        });
        dispatch({ type: USER_LOGIN_SUCESS });

    } catch (error) {
        dispatch({ type: 'USER_ERROR' });

    }


};
export const registerAction = (user) => async (dispatch) => {

    try {
        dispatch({ type: USER_REGISTER_PENDING });

        const response = await authService.register(user);

        dispatch({
            type: USER_REGISTER,
            payload: {
                id: response.data,
                ...user,
            }

        });
        dispatch({ type: USER_REGISTER_SUCCESS });
    } catch (error) {
        dispatch({ type: USER_REGISTER_ERROR });
    }

};