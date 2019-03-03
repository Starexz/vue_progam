import * as types from './mutationTypes'

const matutaions = {
    [types.GET_CART_NUM](state, cartNum) {
        state.cartNum = cartNum;
    },
    [types.SET_USERDATA] (state, userData) {
        state.userData = userData
    }
}

export default matutaions
