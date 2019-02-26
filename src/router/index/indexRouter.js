const indexRouter = {
  path: 'index',
  name: 'index',
  meta: {
    title: '首页'
  },
  component: () =>
      import('@/components/HelloWorld.vue')
}
export default indexRouter
