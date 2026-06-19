import { INITIAL_BOOK_REDUCER_STATE } from "../book/bookReducer";

export const USER_INITIAL_STATE = {
    token: '',
    promise: {
        isPending: false,
        isFulfilled: false,
        isErrorOccured: false
    }

};


const userReducer = (state = USER_INITIAL_STATE, action) => {

    // return new state if 'USER_LOGIN' action dispatch
    switch (action.type) {
        case 'USER_LOGIN': {
            return {
                ...state,
                token: action.payload.token
            };
        }

        default: {
            return state;
        }
    }
}

    // return




export default userReducer;