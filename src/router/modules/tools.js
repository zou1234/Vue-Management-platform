const tools = {
  path: '/tools',
  name: '工具类',
  meta: {icon: "el-icon-bank-card"},
  component: () => import("@/views/layout"),
  children: [
    {
      path: "/cj",
      name: "插件",
      meta: {icon: "el-icon-bank-card"},
      component: () => import("@/views/tools"),
    }
  ],
};
export default tools

