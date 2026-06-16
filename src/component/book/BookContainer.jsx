import React , {useEffect} from 'react';
import { Box } from '@mui/material';
import BookFilter from './BookFilter';
// Import the styled component directly from your styles file
import { StyledBookContainer } from './BookStyles';
import { useDispatch, useSelector } from 'react-redux';
import { getBooksAction } from '../../module/book/bookAction';
import { getBookSelector } from '../../module/book/bookSelector';
// import BookList from './BookList';
import BookTableItem from './BookTableItem';
import BookListItemWithImage from './BookListItemWithImage';

const BookContainer = () => {
    const dispatch = useDispatch();

    useEffect(() => { // this will run once when the component mounts
        dispatch(getBooksAction());
    },[dispatch]);


    const books = useSelector(getBookSelector);
    console.log('Books from Redux state:', books);  


    return (
        <StyledBookContainer>
            <BookFilter />
            <Box>
                <BookListItemWithImage books={books} />
            </Box>
        </StyledBookContainer>
    );
};

export default BookContainer;