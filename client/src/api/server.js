import axios from 'axios';

const api = axios.create({baseURL: 'https://best-escolario.herokuapp.com/api'});
// const api = axios.create({baseURL: 'http://localhost:5000/api'});
api.interceptors.request.use((req) => {
    if(localStorage.getItem('admin')){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('admin')).token}`
    }
    else if(localStorage.getItem('viewer')){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('viewer')).token}`
    }
    return req;
});

export default api

