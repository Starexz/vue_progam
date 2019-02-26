import * as types from './mutationTypes'

const matutaions = {
    [types.GET_CART_NUM](state, cartNum) {
        state.cartNum = cartNum;
    }
}

export default matutaions
