import {
    // USER_LOGIN_PENDING, USER_LOGIN_LOGIN, USER_LOGIN_SUCESS,
    USER_REGISTER_PENDING, USER_REGISTER,
    USER_REGISTER_SUCCESS, USER_REGISTER_ERROR
} from './userActionTypes';

export const USER_INITIAL_STATE = {
    token: window.localStorage.getItem('bookstore-token'),
    loginPromise: {
        isPending: false,
        isSuccess: false,
        isErrorOccured: false
    },
    registerPromise: {
        isPending: false,
        isSuccess: false,
        isErrorOccured: false
    }

};


const userReducer = (state = USER_INITIAL_STATE, action) => {

    // return new state if 'USER_LOGIN' action dispatch
    switch (action.type) {
        case 'USER_LOGIN':
            return {
                ...state,
                token: action.payload.token
            };

        case 'USER_SUCESS':
            return {
                ...state,
                loginPromise: { isPending: false, isSuccess: true, isErrorOccured: false }

            };
        case 'USER_PENDING':
            return {
                ...state,
                loginPromise: { isPending: true, isSuccess: false, isErrorOccured: false }

            };
        case 'USER_ERROR':
            return {
                ...state,
                loginPromise: { isPending: false, isSuccess: false, isErrorOccured: true }
            };


        //======== REGISTRATION REDUCER ======= //
        case USER_REGISTER:
            return {
                ...state,
                user: action.payload
            };

        case USER_REGISTER_SUCCESS:
            return {
                ...state,
                registerPromise: { isPending: false, isSuccess: true, isErrorOccured: false }

            };
        case USER_REGISTER_PENDING:
            return {
                ...state,
                registerPromise: { isPending: true, isSuccess: false, isErrorOccured: false }

            };
        case USER_REGISTER_ERROR:
            return {
                ...state,
                registerPromise: { isPending: false, isSuccess: false, isErrorOccured: true, errorMessage: action.payload }
            };


        default: {
            return state;
        }
    }
}



export default userReducer;