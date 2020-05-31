import Vue from 'vue'
import Router from 'vue-router'
import Fullpath from './fullpath'
import Login from '../views/login'
import Error from '../views/404'
import store from '../store/index'

Vue.use(Router);

let baseRoute =  [
  {
    path: '/',
    name: '登录',
    component: Login,
  },
  {
    path: '/404',
    name: '404',
    component: Error,
  }
]

let router = new Router({
  routes:baseRoute
})

router.beforeEach((to, from, next)=>{
  //用户手动修改地址操作
  if(to.name === null){
    router.push({path: '/404',params:{ id:'1'}});
  }
  next();
});

router.afterEach(()=>{
  // 浏览器刷新情况下
  if(router.currentRoute.matched.length < 2){
    let allTage = JSON.parse(sessionStorage.allTage)
    router.addRoutes(Fullpath)
    if(allTage){
      let newAlltage = []
      for (let i in allTage){
        newAlltage.push(allTage[i])
      }
      store.commit('GETNEWTAGE', newAlltage)
    }
  }
})

export default router


