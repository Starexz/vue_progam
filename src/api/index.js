import $http from '@/resource';
import goods from './goods.js';
import login from './login.js';

const $api = Object.assign({},
    goods,
    login
);


export default $api;
