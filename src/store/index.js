import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import vehicleSpecifications from './modules/vehicleSpecifications'
import msTage from './modules/ms-Tage'
import getters from './getters'

// 状态模块
var store = new Vuex.Store({
  modules: {
    vehicleSpecifications,
    msTage
  },
  getters
})

export default store
