import getBookServices from './bookService';

// 1. We keep it as a named export
export const getBooksAction = () => async (dispatch) => {
    try {
        // 2. Fixed: Call the specific .getBooks() method from the object
        const response = await getBookServices.getBooks(); 
        
        dispatch({
            type: "BOOKLIST",
            payload: response.data // axios nests the response in a .data object
        });
    } catch (error) {
        console.error('Error fetching books:', error);
    }
};