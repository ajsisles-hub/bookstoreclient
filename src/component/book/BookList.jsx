import React from 'react';
import { StyledBookContainer } from './BookStyles';
import PropTypes from 'prop-types';


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
        <StyledBookContainer>
            {books.map((book) =>
                <div key={book.title}>
                    {book.title}
                </div>
            )}
        </StyledBookContainer>
    )
};


BookList.propTypes = propTypes;
export default BookList;


