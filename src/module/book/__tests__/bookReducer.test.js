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
        };

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

    it('should return new state for BOOKSBYTITLE Action', () => {
        const action = {
            type: 'BOOKSBYTITLE',
            payload: [
                {
                    id: 1,
                    title: 'test title',
                    description: 'desc',
                    releaseYear: 2026
                },
            ],
        };

        // FIX 1: Moved this logic INSIDE the it() block boundaries
        const newState = bookReducer(INITIAL_BOOK_REDUCER_STATE, action);
        
        // FIX 2: Aligned the expectations to match the payload you actually provided above
        expect(newState).toEqual({
            books: [{
                id: 1,
                title: 'test title',
                description: 'desc',
                releaseYear: 2026
            }],
            promise: {
                isPending: false,
                isFulfilled: false,
                isErrorOccured: false
            }
        });
    }); 
});