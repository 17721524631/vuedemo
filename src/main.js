import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BaiduMap from 'vue-baidu-map'
import VueI18n from 'vue-i18n'

Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'VY4Z2UZdBHehjaoEoTPj8GyekdvM71mK'
})

Vue.use(VueI18n) // 通过插件的形式挂载

const i18n = new VueI18n({
  locale: 'zh-CN',    // 语言标识
  //this.$i18n.locale // 通过切换locale的值来实现语言切换
  messages: {
    'zh-CN': require('./lang/zh'),   // 中文语言包
    'en-US': require('./lang/en')    // 英文语言包
  }
})

Vue.config.productionTip = false

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
