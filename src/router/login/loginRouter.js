const loginRouter = {
  path: 'login',
  name: 'login',
  meta: {
    title: '登录'
  },
  component: () =>
      import('@/views/Login/Login.vue')
}
export default loginRouter
