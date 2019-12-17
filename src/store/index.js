import Vue from 'vue'
import Vuex from 'vuex'
import { getNewsList, getJobsList, getAskList } from '../api/index.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    news: [],
    jobs: [],
    ask: []
  },
  getters: {
    getNewsList (state) {
      return state.news
    },
    getJobsList (state) {
      return state.jobs
    },
    getAskList (state) {
      return state.ask
    }
  },
  mutations: {
    SET_NEWS (state, news) {
      state.news = news
    },
    SET_JOBS (state, jobs) {
      state.jobs = jobs
    },
    SET_ASK (state, ask) {
      state.ask = ask
    }
  },
  actions: {
    GET_NEWS ({ commit }) {
      getNewsList()
        .then(({ data }) => {
          commit('SET_NEWS', data)
        })
        .catch(error => {
          console.log(error)
        })
    },
    GET_JOBS ({ commit }) {
      getJobsList()
        .then(({ data }) => {
          commit('SET_JOBS', data)
        })
        .catch(error => {
          console.log(error)
        })
    },
    GET_ASK ({ commit }) {
      getAskList()
        .then(({ data }) => {
          commit('SET_ASK', data)
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  modules: {
  }
})
