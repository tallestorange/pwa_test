import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Detail from './views/Detail.vue'
import Search from './views/Search.vue'
import Result from './views/Result.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/posts/:value',
      component: Detail,
    },
    {
      path: '/search/result',
      component: Result,
    },
    {
      path: '/search',
      component: Search,
    }
  ]
})
