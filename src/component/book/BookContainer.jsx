import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';
import BookFilter from './BookFilter';
// Import the styled component directly from your styles file
import { StyledBookContainer } from './BookStyles';
import { useDispatch, useSelector } from 'react-redux';
import { getBooksAction } from '../../module/book/bookAction';
import { getBookSelector, getBookPromiseSelector } from '../../module/book/bookSelector';
// import BookList from './BookList';
import BookTableItem from './BookTableItem';
import BookListItemWithImage from './BookListItemWithImage';

const BookContainer = () => {
    const dispatch = useDispatch();

    useEffect(() => { // this will run once when the component mounts
        dispatch(getBooksAction());
    }, [dispatch]);


    const books = useSelector(getBookSelector);
    const bookPromise = useSelector(getBookPromiseSelector);



    return (
        <StyledBookContainer>
            <BookFilter />
            <Box>
                {bookPromise.isPending && <Skeleton data-testid="book-loader" />}

                {bookPromise.isErrorOccured && (<div data-testid="book-error-message">Error Message</div>)}

                {bookPromise.isFulfilled && <BookListItemWithImage books={books} />}
            </Box>
        </StyledBookContainer>
    );
};

export default BookContainer;