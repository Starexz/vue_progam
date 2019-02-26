import indexRouter from './index/indexRouter'
import goodsRouter from './goods/goodsRouter'

const appRouter = {
  path: '/',
  name: 'home_index',
  component: () =>
    import('@/views/ShopLayout/Layout.vue'),
  redirect: {
    name: 'index'
  },
  children: [
    indexRouter,
    goodsRouter
  ]
}

// 所有上面定义的路由都要写在下面的routers里
export const routers = [
  appRouter
]
