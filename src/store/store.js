import Vue from 'vue'
import Vuex from 'vuex'
import articles from '../assets/articles.json'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ishome: true,
    isDark: true,
    articles: articles,
    article: '',
  },
  getters: {
    getArticle: (state, getters) => () => {
      return state.article.html
    },
    darkColor: (state, getters) => {
      if (localStorage.dark == "true") {
        state.isDark = true
      }
      else if (localStorage.dark == "false") {
        state.isDark = false
      }
      else {
        state.isDark = true
        localStorage.dark = "true"
      }
      console.log(state.isDark,localStorage.dark)
      return state.isDark
    }
  },
  mutations: {
    isNotAtHome(state) {
      state.ishome = false
    },
    isAtHome(state) {
      state.ishome = true
    },
    changeTheme(state) {
      state.isDark = !state.isDark
      
      console.log(state.isDark)
      if (state.isDark) {
        localStorage.setItem('dark','true')
      }
      else {
        localStorage.setItem('dark','false')
      }
      
      return state.isDark
    },
    getArticle(state, payload) {
      state.article = payload.article
    }
  },
  actions: {
    async getArticleAction(context,{name}) {
      const payload = {
        article: '',
      }
      await axios.get(name)
      .then((res) => {
        payload.article = res.data
      })
      context.commit('getArticle', payload)
    }
  }
})
