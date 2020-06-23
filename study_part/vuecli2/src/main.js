import Vue from 'vue'
import App from './App'
// 直接写router其会直接找到index文件
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
