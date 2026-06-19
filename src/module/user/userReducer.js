export const USER_INITIAL_STATE = {
    token: '',
    promise: {
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
                promise: { isPending: false, isSuccess: true, isErrorOccured: false }

            };
        case 'USER_PENDING':
            return {
                ...state,
                promise: { isPending: true, isSuccess: false, isErrorOccured: false }

            };
        case 'USER_ERROR':
            return {
                ...state,
                promise: { isPending: false, isSuccess: false, isErrorOccured: true }
            };
        default: {
            return state;
        }
    }
}



export default userReducer;