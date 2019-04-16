import popUp from './pop-up/index'

const MyPlugin = {
  install (Vue, options) {
    Vue.component(popUp.name, popUp)
  }
}

// 自动安装
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(MyPlugin)
}

export default MyPlugin
