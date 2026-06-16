import React from 'react';
import renderWithRedux from '../../util/testUtil';
import BookContainer from '../book/BookContainer';
import BookList from '../book/BookList';
import bookReducer from '../../module/book/bookReducer';

jest.mock('../book/BookList');

describe('BookContainer Component', () => {

    beforeAll(() => {
        BookList.mockImplementation(() => <div>mock book List</div>)
    });

    it('renders without crashing', () => {
        const books = [
            {
                id: 1,
                title: 'Mock Book',
                description: 'Mock description',
                releaseYear: 2020
            },
        ];


        // 1. Render your component inside the 'it' block
        // const { getByText } = renderWithRedux(<BookContainer />, {
        //     initialState: {
        //         bookReducer: {
        //             books: [{
        //                 id: 1,
        //                 title: 'Mock Book',
        //                 description: 'Mock description',
        //                 releaseYear: 2020
        //             }]
        //         }
        //     }
        // });

        // 2. Make your assertion INSIDE the 'it' block where getByText is available
        // expect(getByText('Here is where the book list will go.')).toBeInTheDocument();


        renderWithRedux(
            <BookContainer />,
            {
                initialState: {
                    bookReducer: {
                        books,
                    },
                },
            });

        expect(BookList).toHaveBeenCalledWith({ books }, undefined);

    });

});