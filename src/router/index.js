import Vue from 'vue'
import Router from 'vue-router'
import businessComponent from './modules'
import tools from './modules/tools'

Vue.use(Router);

let baseRoute =  [
  businessComponent,
  tools
];

let router = new Router({
  routes: baseRoute
});


export default router


