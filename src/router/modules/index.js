const index = {
  path: '/',
  name: '业务类（PC）',
  meta: {icon: 'el-icon-bank-card'},
  component: () => import('@/views/layout'),
  redirect: '/frame',
  children: [
    {
      path: '/chart',
      name: '图表',
      meta: {icon: 'el-icon-bank-card'},
      component: () => import('@/views/business-component/chart')
    },
    {
      path: '/form',
      name: '表单',
      meta: {icon: 'el-icon-bank-card'},
      component: () => import('@/views/business-component/form')
    },
    {
      path: '/frame',
      name: '框',
      meta: {icon: 'el-icon-bank-card'},
      component: () => import('@/views/business-component/frame')
    }
  ]
};
export default index
