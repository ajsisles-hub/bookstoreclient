import bookReducer from '../../module/book/bookReducer';
import { INITIAL_BOOK_REDUCER_STATE } from '../../module/book/bookReducer';


describe('Book Reducer', () => {
    it('should return the initial state', () => {
        const action = {
            type: 'BOOKLIST',
            payload: [{
                id: 1,
                title: 'Mock Book',
                description: 'Mock description',
                releaseYear: 2020

            }]

        }


        const newState = bookReducer(INITIAL_BOOK_REDUCER_STATE, action);

        expect(newState).toEqual({
           books: [{
                id: 1,
                title: 'Mock Book',
                description: 'Mock description',
                releaseYear: 2020
            }]
        });


    });
});