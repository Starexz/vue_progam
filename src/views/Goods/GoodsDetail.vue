<template>
    <div>
        <h2>商品信息</h2>
        <div class="detail">
            <div class="fl goods-img">
                <img src="https://img.alicdn.com/imgextra/i1/1115488308/O1CN01myLT7D2BF70gn0Wsd_!!0-item_pic.jpg_430x430q90.jpg" alt="">
            </div>
            <div class="fl goods-desc">
                <h3 class="title">现货！3期免息/送壳膜+延保 苹果6splus Apple/苹果 iPhone 6s Plus全网通手机正品原封苹果x国行7</h3>
                <div>商品价格：￥ <span class="price-text">110.00</span></div>
            </div>
            <div class="fl goods-color">
                <span>机身颜色：</span>
                <ul>
                    <li>黑色</li>
                    <li>白色</li>
                    <li>红色</li>
                    <li>金色</li>
                </ul>
            </div>
            <div class="fl goods-btns">
                <a class="cart-btns" @click="addCart()">加入购物车</a>
            </div>
        </div>
    </div>
</template>

<script>

import {mapState,mapGetters,mapMutations,mapActions} from 'vuex';
import Cookies from 'js-cookie';
import $api from '@/api';

export default {
    data(){
        return {
            goodsId: '',
        }
    },
    computed: {
        ...mapState(['cartNum'])
    },
    methods: {
        addCart(){
            $api.addCartGoods(this.goodsId).then(response => {
                if(response.code == 200){
                    // let cartNum = this.cartNum * 1 + 1;
                    // Cookies.set('cartNum', cartNum);
                    this.getCartNum();
                }
            })
        },
        ...mapActions(['getCartNum'])
    },
    created(){
        this.goodsId = this.$route.params.id;
        console.log(this.goodsId);
    },
    watch: {
        cartNum(val){
            console.log('++++++++++++++++++')
            console.log(val)
        }
    }
}
</script>

<style lang="less" scoped>
    @import "./goods_detail.less";
</style>
