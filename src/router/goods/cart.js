const cartRouter = {
    name: 'cart',
    path: 'cart',
    component: () =>
        import('@/views/Goods/Cart.vue')
}
export default cartRouter
