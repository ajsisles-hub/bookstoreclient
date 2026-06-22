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


        //Register action
        case 'USER_REGISTER':
            return {
                ...state,
                user: action.payload
            };

        case 'USER_REGISTER_SUCESS':
            return {
                ...state,
                loginPromise: { isPending: false, isSuccess: true, isErrorOccured: false }

            };
        case 'USER_REGISTER_PENDING':
            return {
                ...state,
                loginPromise: { isPending: true, isSuccess: false, isErrorOccured: false }

            };
        case 'USER_REGISTER_ERROR':
            return {
                ...state,
                loginPromise: { isPending: false, isSuccess: false, isErrorOccured: true }
            };


        default: {
            return state;
        }
    }
}



export default userReducer;