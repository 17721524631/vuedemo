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
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/music',
      name: 'music',
      component: () => import('./views/music.vue')
    },
    {
      path: '/findMusic',
      name: 'findMusic',
      component: () => import('./views/findMusic.vue')
    },
    {
      path: '/myMusic',
      name: 'myMusic',
      component: () => import('./views/myMusic.vue')
    },
    {
      path: '/friend',
      name: 'friend',
      component: () => import('./views/friend.vue')
    },
    {
      path: '/musician',
      name: 'musician',
      component: () => import('./views/musician.vue')
    },
    {
      path: '/download',
      name: 'download',
      component: () => import('./views/download.vue')
    },
  ]
})
