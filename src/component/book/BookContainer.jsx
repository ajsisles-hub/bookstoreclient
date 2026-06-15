import React from 'react';
import { Box } from '@mui/material';
import BookFilter from './BookFilter';
// Import the styled component directly from your styles file
import { StyledBookContainer } from './BookStyles'; 

const BookContainer = () => {
    return (
        <StyledBookContainer>
            <BookFilter />
            <Box>
                Here is where the book list will go.     
            </Box>
        </StyledBookContainer>
    );
};

export default BookContainer;