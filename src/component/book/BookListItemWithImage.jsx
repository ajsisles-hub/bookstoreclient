import React from 'react';
import PropTypes from 'prop-types';
import { Box, Paper, Stack, Typography } from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { useStyles } from './BookStyles'; // Import the style rules hook

const propTypes = {
    books: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            releaseYear: PropTypes.number.isRequired,
            imageUrl: PropTypes.string
        })
    ).isRequired
};

const BookTableItem = ({ books }) => {
    // Destructure the classes generator function from our hook
    const { classes } = useStyles();

    if (!books || !Array.isArray(books)) {
        return null;
    }

    return (
        <Stack spacing={3} className={classes.listContainer}>
            {books.map((book) => (
                <Paper key={book.id} elevation={1} className={classes.bookRowCard}>
                    
                    {/* Cover Thumbnail Section */}
                    <Box className={classes.imageContainer}>
                        {book.imageUrl ? (
                            <Box 
                                component="img" 
                                src={book.imageUrl} 
                                alt={book.title}
                                className={classes.coverImage}
                            />
                        ) : (
                            <MenuBookIcon className={classes.fallbackIcon} />
                        )}
                    </Box>

                    {/* Metadata Content Section */}
                    <Box className={classes.textBlock}>
                        <Typography variant="h5" component="h2" className={classes.titleText}>
                            {book.title}
                        </Typography>
                        
                        {/* Fully unclipped, flowing description */}
                        <Typography variant="body1" className={classes.descriptionText}>
                            {book.description}
                        </Typography>

                        <Typography variant="caption" className={classes.tagBadge}>
                            Published: {book.releaseYear}
                        </Typography>
                    </Box>

                </Paper>
            ))}
        </Stack>
    );
};

BookTableItem.propTypes = propTypes;

export default BookTableItem;