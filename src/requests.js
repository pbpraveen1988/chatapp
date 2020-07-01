import axios from 'axios';

const API_ROOT = process.env.REACT_APP_SERVER_URI

axios.defaults.baseURL = API_ROOT;

export const fetchUsers = () => {
    return axios.get(`/users`)
        .then(res => res.data.data)
}


export const addUser = (user) => {
    return axios.post('/add-user', { name: user }).then(res => res.data.user);
}