import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Detail from './views/Detail.vue'

document.title = "Competitive Programming"
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Home,
      meta: {
        title: 'a'
      }
    },
    {
      path: '/posts/:value',
      component: Detail,
      meta: {
        title: 'a'
      }
    }
  ]
})
