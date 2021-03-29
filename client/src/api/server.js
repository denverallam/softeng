import axios from 'axios';

const api = axios.create({baseURL: 'https://best-escolario.herokuapp.com/api'});
// const api = axios.create({baseURL: 'http://localhost:5000/api'});

export default api

