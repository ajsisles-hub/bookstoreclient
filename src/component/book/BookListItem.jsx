import React from 'react';
import PropTypes from 'prop-types';
import { Box, Paper, Typography, Avatar } from '@mui/material';

const propTypes = {
    book: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        releaseYear: PropTypes.number.isRequired
    }).isRequired
};

const BookListItem = ({ book }) => {

    return (
        <Box>
            <Paper>
                <Avatar variant="square">{book.title}</Avatar>
            </Paper>
            <Box>
                <Typography variant='h5'>{book.title}</Typography>
                <Typography variant='h5'>{book.description}</Typography>
                <Typography variant='h5'>{book.releaseYear}</Typography>
            </Box>
        </Box>
    )
}


BookListItem.propTypes = propTypes;
export default BookListItem;