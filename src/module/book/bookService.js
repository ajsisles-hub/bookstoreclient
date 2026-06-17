import axios from 'axios';
import { baseApiUrl } from '../../config';


export const getBookService = {
    getBooks: () => axios.get(`${baseApiUrl}/api/v1/books`)
};

export const getBookByTitleService = {
    getBooks: (title) => axios.get(`${baseApiUrl}/api/v1/books/${title}`)
};