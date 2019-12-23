import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: '重定向',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
    }
  ]
})
