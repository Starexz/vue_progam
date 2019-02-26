const detailRouter = {
    name: 'detail',
    path: 'detail/:id',
    component: () =>
        import('@/views/Goods/GoodsDetail.vue')
}
export default detailRouter
