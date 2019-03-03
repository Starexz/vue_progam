import * as types from './mutationTypes'
import Cookies from 'js-cookie';
import $api from '@/api';

export const actions = {
    getCartNum({state, commit}) {
        $api.getCartSumCount().then(response => {
            // const cartNum = Cookies.get('cartNum');
            const cartNum = response.data;
            console.log('cartNum:' + cartNum)
            commit(types.GET_CART_NUM, cartNum);
        });
    },
    setUserData ({state, commit}) {
        let uid = ''
        let token = ''
        let username = ''
        if (Cookies.get('uid') != '') {
            uid = Cookies.get('uid')
        }
        if (Cookies.get('token') != '') {
            token = Cookies.get('token')
        }
        if (Cookies.get('username') != '') {
            username = Cookies.get('username')
        }
        let userData = {
            uid: uid,
            token: token,
            username: username
        }
        commit(types.SET_USERDATA, userData)
    }
}
