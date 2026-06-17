import React from 'react';
import { render } from '@testing-library/react';
import BookListItemWithImage from '../book/BookListItemWithImage';


describe('BookListItemWithImage', () => {
    it("should render booklist item", () => {
        const mockBooks = [
            {
                id: 1,
                title: 'Book Title 1',
                description: 'Book Description 1',
                releaseYear: 2020
            }
        ];

       const { getByText, getAllByText } = render(<BookListItemWithImage books={mockBooks} />);
        expect(getAllByText("Book Title 1")[0]).toBeInTheDocument();
        expect(getByText("Book Description 1")).toBeInTheDocument();
        expect(getByText("Published: 2020")).toBeInTheDocument();

    });
});