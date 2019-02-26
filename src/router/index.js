import Vue from 'vue'
import Router from 'vue-router'
import {routers} from './router.js'

// 路由配置
const RouterConfig = {
  routes: routers
}
Vue.use(Router)

export const router = new Router(RouterConfig)

router.beforeEach((to, from, next) => {
  next()
})
