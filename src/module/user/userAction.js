import authService from './userService';
import * as types from './userActionTypes';

export const loginAction = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: types.USER_LOGIN_PENDING });

        // issue axios request to login api
        const response = await authService.login(email, password);

        //save jwt token local storage
        window.localStorage.setItem('bookstore-token', response.data.token);

        //dispatch redux action
        dispatch({
            type: types.USER_LOGIN,
            payload: response.data
        });

        dispatch({ type: types.USER_LOGIN_SUCESS });

    } catch (error) {
        dispatch({ type: types.USER_LOGIN_ERROR });
   }


};
export const registerAction = (user, setErrors) => async (dispatch) => {

    try {
        dispatch({ type: types.USER_REGISTER_PENDING });

        const response = await authService.register(user);

        dispatch({ type: types.USER_REGISTER_SUCCESS, payload: { id: response.data } });
    } catch (error) {
        if (error.response && error.response.status === 409) {
            const serverFieldErrors = error.response.data.errors;
            if (serverFieldErrors && setErrors) {
                setErrors(serverFieldErrors);
            }
            dispatch({ type: types.USER_REGISTER_ERROR, payload: error.response.data.message });
        } else {
            dispatch({ type: types.USER_REGISTER_ERROR, payload: 'Something went wrong.' });
        }
    }

};