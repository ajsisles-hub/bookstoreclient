import React, { useEffect } from 'react';
import { Box, Stack, Paper } from '@mui/material'; 
import Skeleton from '@mui/material/Skeleton';
import BookFilter from './BookFilter';
import { StyledBookContainer, useStyles } from './BookStyles'; // 1. Imported useStyles to copy your card layout exactly
import { useDispatch, useSelector } from 'react-redux';
import { getBooksAction } from '../../module/book/bookAction';
import { getBookSelector, getBookPromiseSelector } from '../../module/book/bookSelector';
import BookListItemWithImage from './BookListItemWithImage';

const BookContainer = () => {
    const dispatch = useDispatch();
    const { classes } = useStyles(); // 2. Initialized your styles hook

    useEffect(() => { 
        dispatch(getBooksAction());
    }, [dispatch]);

    const books = useSelector(getBookSelector);
    const bookPromise = useSelector(getBookPromiseSelector);

    return (
        <StyledBookContainer>
            <BookFilter />
            <Box>
                {/* Modernized, Structural Loader Track */}
                {bookPromise.isPending && (
                    <Stack spacing={3} className={classes.listContainer} data-testid="book-loader">
                        {[1, 2, 3].map((id) => (
                            <Paper key={id} elevation={1} className={classes.bookRowCard} sx={{ opacity: 0.7 }}>
                                
                                {/* Structural Image Skeleton Box */}
                                <Box className={classes.imageContainer}>
                                    <Skeleton 
                                        variant="rectangular" 
                                        animation="wave" 
                                        width="100%" 
                                        height="100%" 
                                        sx={{ minHeight: 120 }} // Matches typical thumbnail block heights
                                    />
                                </Box>

                                {/* Structural Metadata Content Skeletons */}
                                <Box className={classes.textBlock} sx={{ flexGrow: 1, width: '100%' }}>
                                    {/* Book Title Skeleton */}
                                    <Skeleton variant="text" animation="wave" height={32} width="40%" sx={{ mb: 1 }} />
                                    
                                    {/* Book Description Skeletons */}
                                    <Skeleton variant="text" animation="wave" height={20} width="90%" />
                                    <Skeleton variant="text" animation="wave" height={20} width="75%" sx={{ mb: 2 }} />

                                    {/* Tag Badge / Publication Year Skeleton */}
                                    <Skeleton variant="rounded" animation="wave" height={24} width="100px" />
                                </Box>

                            </Paper>
                        ))}
                    </Stack>
                )}

                {bookPromise.isErrorOccured && (<div data-testid="book-error-message">Error Message</div>)}

                {bookPromise.isFulfilled && <BookListItemWithImage books={books} />}
            </Box>
        </StyledBookContainer>
    );
};

export default BookContainer;