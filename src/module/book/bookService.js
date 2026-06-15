import axios from 'axios';
import { baseApiUrl } from '../../config';


const getBookServices = {
    getBooks: () => axios.get(`${baseApiUrl}/api/v1/books`)
};

export default getBookServices;