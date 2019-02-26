<template>
    <div class="">
        <div class="header">
            <div class="logo"></div>
            <div class="info">
                <a>
                    购物车
                    <span class="shop-cart" v-if="cartNum != 0">{{ cartNum }}</span>
                </a>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex';
export default {
    data(){
        return {}
    },
    methods: {
        ...mapActions(['getCartNum']),
    },
    computed: {
        ...mapState(['cartNum'])
    },
    created() {
        this.getCartNum();
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
