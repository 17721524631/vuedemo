import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueDragResize from 'vue-drag-resize' //缩放、拖拽
Vue.component('vue-drag-resize', VueDragResize)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')