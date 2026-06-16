import React from 'react';
import PropTypes from 'prop-types';
import {
    Table, TableBody,
    TableCell, TableContainer,
    TableHead, TableRow, Paper
} from '@mui/material';


const propTypes = {
    book: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        releaseYear: PropTypes.number.isRequired
    }).isRequired
};



const BookTableItem = ({ books }) => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead>
                <TableCell>Title</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Release Year</TableCell>
                </TableHead>
               <TableBody>
                    {/* 3. Map over the books array to dynamically generate rows */}
                    {books.map((book) => (
                        <TableRow key={book.id}>
                            <TableCell>{book.title}</TableCell>
                            <TableCell>{book.description}</TableCell>
                            <TableCell>{book.releaseYear}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

BookTableItem.propTypes = propTypes; 
export default BookTableItem;

