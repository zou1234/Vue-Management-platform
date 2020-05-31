/* eslint-disable no-new */
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from './untils/axios'
import Vuex from 'vuex'
import Store from './store'
import $ from 'jquery'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'font-awesome/css/font-awesome.min.css'
import MyPlugin from './extend-ui/index'
import 'babel-polyfill'


import VueCodeMirror from 'vue-codemirror'
import 'codemirror/lib/codemirror.css'
Vue.use(VueCodeMirror)

Vue.use(MyPlugin)
Vue.use(Vuex)
Vue.use(ElementUI)

Vue.prototype.$http = Axios
window.$ = window.jquery = $
Vue.config.productionTip = false

new Vue({el: '#app',
  store: Store,
  router,
  components: { App },
  template: '<App/>'
})
