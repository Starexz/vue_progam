<template>
    <div class="">
        <div class="header">
            <div class="logo"></div>
            <div class="info">
                <a>{{ userData.username }}</a>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <a v-if="userData.uid == ''" @click="showLoginModal()">登录</a>
                <a @click="logOut()" v-if="userData.uid != ''">退出</a>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <a @click="toCart">
                    购物车
                    <span class="shop-cart" v-if="cartNum != 0">{{ cartNum }}</span>
                </a>
            </div>
        </div>
        <Modal v-model="modal1" title="登录" @on-ok="doLogin()">
            <Row>
                <Col span="18">
                    <i-form :model="formItem" :label-width="80">
                        <Form-item label="手机号">
                            <i-input :value.sync="formItem.phone" v-model="formItem.phone" placeholder="手机号"></i-input>
                        </Form-item>
                        <Form-item label="密码">
                            <i-input type="password" :value.sync="formItem.password" v-model="formItem.password" placeholder="密码"></i-input>
                        </Form-item>
                    </i-form>
                </Col>
            </Row>
        </Modal>
        <router-view></router-view>
    </div>
</template>

<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex';
import Cookies from 'js-cookie'
import $api from '@/api';
export default {
    data(){
        return {
            formItem: {
                phone: '',
                password: ''
            },
            modal1: false
        }
    },
    methods: {
        ...mapActions(['getCartNum', 'setUserData']),
        logOut () {
            $api.logout().then(response => {
                if(response.code == 200) {
                    Cookies.set('uid', '')
                    Cookies.set('token', '')
                    Cookies.set('username', '')
                    this.setUserData()
                    this.getCartNum();
                    this.$Message.info(response.msg);
                } else {
                    this.$Message.error(response.msg);
                }
            })
        },
        showLoginModal () {
            this.modal1 = true
        },
        doLogin() {
            $api.doLogin(this.formItem.phone, this.formItem.password)
            .then(response => {
                if (response.code == 200) {
                    this.$Message.info(response.msg);
                    let data = response.data
                    Cookies.set('uid', data.uid)
                    Cookies.set('token', data.token)
                    Cookies.set('username', data.username)
                    this.setUserData()
                    this.getCartNum();
                } else {
                    this.$Message.error(response.msg);
                }
            })
        },
        toCart() {
            this.$router.push({name: "cart"})
        }
    },
    computed: {
        ...mapState(['cartNum', 'userData']),
    },
    created() {
        // 获取购物车数量
        this.getCartNum();
        // 设置用户登录信息
        this.setUserData()
    }
}
</script>

<style scoped>
    .header {
        width: 100%;
        height: 30px;
        line-height: 30px;
        margin-bottom: 10px;
        border-bottom: 1px solid #ccc;
    }
    .logo {
        width: 300px;
        float: left;
    }
    .info {
        width: 300px;
        float: right;
    }
    .info a {
        color: #777;
        font-size: 12px;
    }
    .shop-cart {
        font-size: 12px;
        display: inline-block;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: red;
        color: #fff;
        line-height: 20px;
        text-align: center;
    }
    * {
        font-size: 16px;
        color: #2c3e50;
    }
    a:hover {
        color: #222;
    }
</style>
