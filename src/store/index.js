import Vue from 'vue'
import Vuex from 'vuex'
import { getNewsList } from '../api/index.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    news: []
  },
  mutations: {
    SET_NEWS (state, news) {
      state.news = news
    }
  },
  actions: {
    GET_NEWS (context) {
      getNewsList()
        .then(response => {
          context.commit('SET_NEWS', response.data)
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  modules: {
  }
})
