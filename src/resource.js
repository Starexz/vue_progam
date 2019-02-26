import axios from 'axios'
import Config from '@/config.js';

var $http = axios.create({
    baseURL: Config.apiUrl,
    timeout: 55000
});

$http.interceptors.response.use(
    response => {
        return response.data;
    }
)
export default $http;
