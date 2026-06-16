import React from 'react';
import { render } from '@testing-library/react';
import BookList from '../book/BookList';
import BookListItemWithImage from '../book/BookListItemWithImage';

// 1. Properly mock the ES module default export with a trackable jest.fn()
// Change your mock block to look like this:
jest.mock('../book/BookListItemWithImage', () => jest.fn(() => <div>BookListItemWithImage comp</div>));

describe('BookList', () => {

    // 2. Clear calls before each test to prevent bleed-over pollution
    beforeEach(() => {
        BookListItemWithImage.mockClear();
});

    const books = [
        {
            id: 1,
            title: 'Book Title 1',
            description: 'Book Description 1',
            releaseYear: 2020
        },
        {
            id: 2,
            title: 'Book Title 2',
            description: 'Book Description 2',
            releaseYear: 2022
        }
    ];

    it('render booklist without error', () => {
        render(<BookList books={books} />);

        // 3. This assertion will now successfully register 2 calls!
        expect(BookListItemWithImage).toHaveBeenCalledTimes(2);
        expect(BookListItemWithImage).toHaveBeenCalledWith({ book: books[0] }, undefined);
        expect(BookListItemWithImage).toHaveBeenCalledWith({ book: books[1] }, undefined);
    });
});