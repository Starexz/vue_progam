import $http from '@/resource'

const $api = {}

$api.doLogin = function(phone, password) {
    const url = '/login/doLogin'
    const data = {
        phone: phone,
        password: password
    }
    let promise = new Promise((resolve, reject) => {
        $http.post(url, data).then(response => {
            resolve(response)
        })
    })
    return promise
}

$api.logout = function(phone, password) {
    const url = '/login/logout'
    let promise = new Promise((resolve, reject) => {
        $http.post(url).then(response => {
            resolve(response)
        })
    })
    return promise
}
export default $api
