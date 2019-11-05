import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
import BaiduMap from 'vue-baidu-map'
import i18n from './locales'
import axios from 'axios'
import VueAxios from 'vue-axios'
import _ from 'lodash'
Vue.prototype._ = _

Vue.use(VueAxios, axios)

import animated from 'animate.css' // npm install animate.css --save安装，再引入
Vue.use(animated)
Vue.use(Vant);

Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'VY4Z2UZdBHehjaoEoTPj8GyekdvM71mK'
})

import VideoPlayer from 'vue-video-player'
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
import "videojs-flash";
Vue.use(VideoPlayer)


Vue.config.productionTip = false

new Vue({
  router,
  i18n,
  store,
  render: h => h(App)
}).$mount('#app')