import axios from 'axios';

const  api = axios.create({
    baseURL: 'http://10.8.145.100:3333',
});

export default api;