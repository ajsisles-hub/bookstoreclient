import React from 'react';
import PropTypes from 'prop-types';
// import BookListItem from './BookListItem'
import BookListItemWithImage from './BookListItemWithImage';
import { Box } from '@mui/material'

const propTypes = {
    books: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        releaseYear: PropTypes.number.isRequired
    }))
}

const BookList = ({ books }) => {
    return (
        <Box>
            {books.map((book) =>
                <BookListItemWithImage book={book} key={book.id} />
            )}
        </Box>
    )
};

BookList.propTypes = propTypes;
export default BookList;


