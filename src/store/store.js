import Vue from 'vue'
import Vuex from 'vuex'
import articles from '../assets/articles.json'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ishome: true,
    articles: articles,
    article: '',
  },
  getters: {
    getArticle: (state, getters) => () => {
      return state.article.html
    }
  },
  mutations: {
    isNotAtHome(state) {
      state.ishome = false
    },
    isAtHome(state) {
      state.ishome = true
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
