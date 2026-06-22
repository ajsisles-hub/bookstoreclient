import axios from 'axios';
import { baseApiUrl } from '../../config';


const authService = {

    login: (email, password) =>
        axios.post(`${baseApiUrl}/api/v1/login`, { email, password }),

    register: (user) =>
        axios.post(`${baseApiUrl}/api/v1/register`, user)

};

export default authService;