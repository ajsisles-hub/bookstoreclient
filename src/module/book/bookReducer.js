export const INITIAL_BOOK_REDUCER_STATE = {
    books: [],
    promise: {
        isPending: false,
        isFulfilled: false,
        isErrorOccured: false
    }
}

const bookReducer = (state = INITIAL_BOOK_REDUCER_STATE, action) => {
    // Safety guard: If action is missing, just return current state
    if (!action || !action.type) {
        return state;
    }
    switch (action.type) {
        case 'BOOKLIST':
            return {
                ...state,
                books: action.payload
            };
        case 'BOOKSBYTITLE':
            return {
                ...state,
                books: action.payload
            };
        case "BOOKLISTPENDING":
            return {
                ...state,
                promise: { isPending: true, isFulfilled: false, isErrorOccured: false }
            }
        case "BOOKLISTERROR":
            return {
                ...state,
                promise: { isPending: false, isFulfilled: false, isErrorOccured: true }
            }
        case "BOOKLISTFULFILLED":
            return {
                ...state,
                promise: { isPending: false, isFulfilled: true, isErrorOccured: false }
            }
        case "LOGOUT": {
            // 1. Clear it from browser storage
            window.localStorage.removeItem('bookstore-token');
            // 2. Clear it from Redux state so React re-renders
            return {
                ...state,
                token: null,
                books: [] // Optional: clear out data for security
            };
        }
        default: {
            return state;
        }

    }

}

export default bookReducer;