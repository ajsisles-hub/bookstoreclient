import axios from 'axios';
import { baseApiUrl } from '../../config';


export const login = (email, password) => axios.post(`${baseApiUrl}/api/v1/login`, {
    email,
    password
})