import $http from '@/resource';

const $api = {};

// $api.getCartSumCount = async () => {
//     const url = '/shopCart/getCartSumCount';
//     let res = await $http.get(url);
//     if(res.code == 200){
//         return res.data;
//     }else{
//         console.log('error');
//     }
// }

$api.getCartSumCount = function() {
    const url = '/shopCart/getCartSumCount';
    const promise = new Promise((resolve, reject) => {
        $http.get(url).then(response => {
            resolve(response);
        });
    })
    return promise;
}

$api.getGoodsList = function() {
    const url = '/goods/index';
    const promise = new Promise((resolve, reject) => {
        $http.get(url).then(response => {
            resolve(response);
        })
    })
    return promise;
}

$api.addCartGoods = function(goodsId) {
    const url = '/shopCart/addCartGoods';
    const data = {goods_id: goodsId};
    const promise = new Promise((resolve, reject) => {
        $http.post(url, data).then(response => {
            if(response.code == 200){
                resolve(response);
            }
        })
    })
    return promise;
}

export default $api;
