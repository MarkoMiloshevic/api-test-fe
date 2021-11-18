import axios from 'axios';
const apiUrl = 'http://localhost:8080/';




const instance = axios.create({
    baseURL: apiUrl,
});


instance.interceptors.request.use(
    (request) => {
        request.headers["Access-Control-Allow-Origin"] = "*";
        return request;
    },
    (error) => {
        return Promise.reject(error);
    }
);


export default instance;