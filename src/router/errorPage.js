
export const page404 = {
  path: '/*',
  name: 'error-404',
  meta: {
    title: '404-页面不存在'
  },
  component: () =>
    import('@/pages/errorPage/404.vue')
};

export const page403 = {
  path: '/403',
  meta: {
    title: '403-权限不足'
  },
  name: 'error-403',
  component: () =>
    import('@/pages/errorPage/403.vue')
};

export const page500 = {
  path: '/500',
  meta: {
    title: '500-服务端错误'
  },
  name: 'error-500',
  component: () =>
    import('@/pages/errorPage/500.vue')
};