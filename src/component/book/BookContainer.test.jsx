import React from 'react';
import renderWithRedux from '../../util/testUtil';
import BookContainer from '../book/BookContainer';

describe('BookContainer Component', () => {
    it('renders without crashing', () => {
        // 1. Render your component inside the 'it' block
        const { getByText } = renderWithRedux(<BookContainer />, {
            initialState: {
                bookReducer: {
                    books: [{
                        id: 1,
                        title: 'Mock Book',
                        description: 'Mock description',
                        releaseYear: 2020
                    }]
                }
            }
        });

        // 2. Make your assertion INSIDE the 'it' block where getByText is available
        expect(getByText('Here is where the book list will go.')).toBeInTheDocument();
    }); // <-- The 'it' block ends HERE now
});