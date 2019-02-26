import listRouter from './list';
import detailRouter from './detail';
import cartRouter from './cart';

const goodsRouter = {
    name: 'goods',
    path: 'goods',
    redirect: {
        name: 'list'
    },
    component: () =>
        import('@/components/Router.vue'),
    children: [
        listRouter,
        detailRouter,
        cartRouter
    ]
};

export default goodsRouter
