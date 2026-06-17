import { isFulfilled } from '@reduxjs/toolkit';
import bookReducer from '../book/bookReducer';
import { INITIAL_BOOK_REDUCER_STATE } from '../book/bookReducer';


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
            }],
            promise: {
                isPending: false,
                isFulfilled: false,
                isErrorOccured: false
            }
        });


    });
});