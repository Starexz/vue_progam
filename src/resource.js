import axios from 'axios'
import Config from '@/config.js'
import Cookies from 'js-cookie'

var $http = axios.create({
    baseURL: Config.apiUrl,
    timeout: 55000
});

$http.interceptors.request.use(
    config => {
        if (Cookies.get('token')) {
            config.headers['Token'] = Cookies.get('token')
        }
        if (Cookies.get('uid')) {
            config.headers['Uid'] = Cookies.get('uid')
        }
        return config
    }
)

$http.interceptors.response.use(
    response => {
        return response.data;
    }
)
export default $http;
