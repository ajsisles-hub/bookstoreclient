import getBookServices from './bookService';

// 1. We keep it as a named export
export const getBooksAction = () => async (dispatch) => {
    try {
        //
        dispatch({ type: 'BOOKLISTPENDING' });
        // 2. Fixed: Call the specific .getBooks() method from the object
        const response = await getBookServices.getBooks();
        //
        dispatch({
            type: "BOOKLIST",
            payload: response.data // axios nests the response in a .data object
        });
        //
        dispatch({ type: 'BOOKLISTFULLFILLED' });
    } catch (error) {
        dispatch({ type: 'BOOKLISTERROR' });
    }
};