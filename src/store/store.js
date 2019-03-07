import Vue from 'vue'
import Vuex from 'vuex'
import articles from '../assets/articles.json'
// import { stat } from 'fs';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ishome: true,
    articles: articles
  },
  mutations: {
    isNotAtHome(state) {
      state.ishome = false
    },
    isAtHome(state) {
      state.ishome = true
    }
  },
  actions: {

  }
})
