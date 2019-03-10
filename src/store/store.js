import Vue from 'vue'
import Vuex from 'vuex'
import articles from '../assets/articles.json'
import searchtag from '../assets/searchtag.json'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ishome: true,
    isDark: true,
    order: "",
    algorithms: [],
    articles: articles,
    searchtag: searchtag,
    article: "",
  },
  getters: {
    getArticle: (state, getters) => {
      return state.article.html
    },
    getSearchtags: (state, getters) => {
      return state.searchtag
    },
    getSearchOptions: (state, getters) => {
      return {"order":state.order,"algorithms":state.algorithms}
    },
    getArticles: (state, getters) => {
      return state.articles
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
      
      if (state.isDark) {
        localStorage.setItem('dark','true')
      }
      else {
        localStorage.setItem('dark','false')
      }
      
      return state.isDark
    },
    setArticle(state, payload) {
      state.article = payload.article
    },
    setSearchOptions(state, payload) {
      state.order = payload.order
      state.algorithms = payload.algorithms
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
      context.commit("setArticle", payload)
    }
  }
})
