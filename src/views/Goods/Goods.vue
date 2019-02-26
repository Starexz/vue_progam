<template>
    <div>
        <h2>精品推荐</h2>
        <div class="list">
            <div class="list-item" v-for="item in listData">
                <a @click="toDetail(item.id)">
                    <img :src="item.image">
                </a>
                <div class="title">
                    <a @click="toDetail(item.id)">{{ item.name }}</a>
                </div>
                <div class="price">
                    <a @click="toDetail(item.id)">￥<span class="price-num">{{ item.price }}</span></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import $api from '@/api';
export default {
    data(){
        return {
            listData: [
                {
                    id: '1',
                    title: '国行带票【正常发货不打烊】Apple/苹果 iPhone XR苹果XR降价',
                    img: '//gaitaobao2.alicdn.com/tfscom/i4/3174739641/O1CN010kODPc2L5cxpdiVsE_!!3174739641.jpg_240x240xz.jpg_.webp',
                    price: '10.00'
                },
                {
                    id: '2',
                    title: '国行带票【正常发货不打烊】Apple/苹果 iPhone XR苹果XR降价',
                    img: '//gaitaobao2.alicdn.com/tfscom/i2/3174739641/O1CN01xXmlUZ2L5cxxTIXpU_!!3174739641.jpg_240x240xz.jpg_.webp',
                    price: '10.00'
                },
                {
                    id: '3',
                    title: '国行带票【正常发货不打烊】Apple/苹果 iPhone XR苹果XR降价',
                    img: '//gaitaobao2.alicdn.com/tfscom/i4/3174739641/O1CN010kODPc2L5cxpdiVsE_!!3174739641.jpg_240x240xz.jpg_.webp',
                    price: '10.00'
                },
                {
                    id: '4',
                    title: '国行带票【正常发货不打烊】Apple/苹果 iPhone XR苹果XR降价',
                    img: '//gaitaobao2.alicdn.com/tfscom/i4/3174739641/O1CN010kODPc2L5cxpdiVsE_!!3174739641.jpg_240x240xz.jpg_.webp',
                    price: '10.00'
                },
                {
                    id: '5',
                    title: '国行带票【正常发货不打烊】Apple/苹果 iPhone XR苹果XR降价',
                    img: '//gaitaobao2.alicdn.com/tfscom/i4/3174739641/O1CN010kODPc2L5cxpdiVsE_!!3174739641.jpg_240x240xz.jpg_.webp',
                    price: '10.00'
                },
                {
                    id: '6',
                    title: '国行带票【正常发货不打烊】Apple/苹果 iPhone XR苹果XR降价',
                    img: '//gaitaobao2.alicdn.com/tfscom/i4/3174739641/O1CN010kODPc2L5cxpdiVsE_!!3174739641.jpg_240x240xz.jpg_.webp',
                    price: '10.00'
                },
                {
                    id: '7',
                    title: '国行带票【正常发货不打烊】Apple/苹果 iPhone XR苹果XR降价',
                    img: '//gaitaobao2.alicdn.com/tfscom/i4/3174739641/O1CN010kODPc2L5cxpdiVsE_!!3174739641.jpg_240x240xz.jpg_.webp',
                    price: '10.00'
                },
            ]
        }
    },
    methods: {
        toDetail(id) {
            this.$router.push(`detail/${id}`)
        },
        getGoodsList(){
            $api.getGoodsList().then(response => {
                if(response.code == 200){
                    this.listData = response.data;
                }
            })
        }
    },
    created(){
        this.getGoodsList();
    }
}
</script>

<style lang="less" scoped>
    @import "./goods.less";
</style>
