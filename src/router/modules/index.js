const index = {
    path: '/',
    name: '业务组件库',
    meta: {icon: "el-icon-bank-card"},
    component: () => import("@/views/layout"),
    redirect: '/frame',
    children: [
      {
        path: "/frame",
        name: "框",
        meta: {icon: "el-icon-bank-card"},
        component: () => import("@/views/business-component/frame"),
      },
      {
        path: "/frame2",
        name: "框2",
        meta: {icon: "el-icon-bank-card"},
        component: () => import("@/views/business-component/frame"),
      }
    ],
};
export default index


// {
//   path: "/business-component",
//   name: "业务组件库",
//   meta: {icon: "el-icon-bank-card"},
//   component: () => import("@/views/business-component"),
// },
// {
//   path: "/tools",
//   name: "工具类",
//   meta: {icon: "el-icon-bank-card"},
//   component: () => import("@/views/tools"),
// }
