import Vue from 'vue'
import Router from 'vue-router'
import businessComponent from './modules'
import tools from './modules/tools'

Vue.use(Router);

let baseRoute =  [
  businessComponent,
  tools,
  {
    path: "/code-details",
    name: "code-details",
    meta: { icon: "el-icon-bank-card", isShow: false },
    component: () => import("@/components/es-code-detail"),
  }
];

let router = new Router({
  routes: baseRoute
});


export default router


