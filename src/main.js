import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BaiduMap from 'vue-baidu-map'
Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'VY4Z2UZdBHehjaoEoTPj8GyekdvM71mK'
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
