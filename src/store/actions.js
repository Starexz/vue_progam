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
    }
}
