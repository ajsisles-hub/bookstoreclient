import { getBookService, getBookByTitleService } from './bookService';

// 1. We keep it as a named export
export const getBooksAction = () => async (dispatch) => {
    try {
        //
        dispatch({ type: 'BOOKLISTPENDING' });
        // 2. Fixed: Call the specific .getBooks() method from the object
        const response = await getBookService.getBooks();
        //
        dispatch({
            type: "BOOKLIST",
            payload: response.data // axios nests the response in a .data object
        });
        //
        dispatch({ type: 'BOOKLISTFULFILLED' });
    } catch (error) {
        dispatch({ type: 'BOOKLISTERROR' });
    }
};

export const getBooksByTitle = (title) => async (dispatch) => {
    try {
        console.log("get")
        dispatch({ type: "BOOKLISTPENDING" });

        const response = await getBookByTitleService.getBooks(title);

        dispatch({
            type: "BOOKSBYTITLE",
            payload: response.data
        });

        dispatch({ type: "BOOKLISTFULFILLED" });

    } catch (error) {
        console.log("THE ACTUAL TEST ERROR:", error);
        dispatch({ type: "BOOKLISTERROR" });

    }

};