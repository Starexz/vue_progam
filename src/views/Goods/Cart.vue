<template>
    <div>
        <h2>购物车</h2>
        <div class="cart">
            <table class="table">
                <tbody>
                    <tr v-for="(item, index) in listData">
                        <td>
                            <input type="checkbox" name="" :value="item.id" v-model="cartIds">
                            <img :src="item.image" class="logo">
                        </td>
                        <td>
                            {{ item.name }}
                        </td>
                        <td>
                            ￥{{ item.price }}
                        </td>
                        <td>
                            <button type="button" class="btn btn-default" @click="addNumber(index)">+</button>
                            <span>{{ item.number }}</span>
                            <button type="button" class="btn btn-default" @click="descNumber(index)">-</button>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3">
                            总计：￥{{ totalPrice }}
                        </td>
                        <td>
                            <button type="button" class="btn btn-primary">去结算</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            listData: [
                {
                    goods_id: '1',
                    image: '//gaitaobao2.alicdn.com/tfscom/i4/3174739641/O1CN010kODPc2L5cxpdiVsE_!!3174739641.jpg_240x240xz.jpg_.webp',
                    name: '国行带票【正常发货不打烊】Apple/苹果 iPhone XR苹果XR降价',
                    price: '10.00',
                    number: 10,
                    id: '1'
                },
                {
                    goods_id: '2',
                    image: '//gaitaobao2.alicdn.com/tfscom/i4/3174739641/O1CN010kODPc2L5cxpdiVsE_!!3174739641.jpg_240x240xz.jpg_.webp',
                    name: '国行带票【正常发货不打烊】Apple/苹果 iPhone XR苹果XR降价',
                    price: '5.00',
                    number: 2,
                    id: '2'
                }
            ],
            cartIds: []
        }
    },
    methods: {
        addNumber(index){
            this.listData[index].number ++;
        },
        descNumber(index){
            this.listData[index].number --;
        },
    },
    computed: {
        totalPrice() {
            let price = 0;
            for(let value of this.listData){
                if(this.cartIds.includes(value.id)){
                    price += parseInt(value.price) * value.number;
                }
            }
            return price;
        }
    }
}
</script>

<style scoped>
    .table {
        width: 100%;
    }
    .table td {
        /* height: 120px; */
        vertical-align: middle;
    }
    h2 {
        width: 1400px;
        margin: auto;
        margin-bottom: 10px;
    }
    .cart {
        width: 1000px;
        margin: auto;
    }
    .logo {
        width: 100px;
        height: 100px;
        /* vertical-align: middle; */
    }
</style>
