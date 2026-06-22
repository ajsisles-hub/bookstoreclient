import authService from './userService';


export const loginAction = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: 'USER_PENDING' });

        // issue axios request to login api
        const response = await authService.login(email, password);

        //save jwt token local storage
        window.localStorage.setItem('bookstore-token', response.data.token);

        //dispatch redux action
        dispatch({
            type: "USER_LOGIN",
            payload: response.data
        });
        dispatch({ type: 'USER_SUCESS' });

    } catch (error) {
        dispatch({ type: 'USER_ERROR' });

    }


};
export const registerAction = (user) => async (dispatch) => {

    try {
        dispatch({ type: 'USER_REGISTER_PENDING' });

        const response = await authService.register(user);

        dispatch({
            type: 'USER_REGISTER',
            payload: {
                id: response.data,
                ...user,
            }

        });
        dispatch({ type: 'USER_REGISTER_SUCCESS' });
    } catch (error) {
        dispatch({ type: 'USER_REGISTER_ERROR' });
    }

};