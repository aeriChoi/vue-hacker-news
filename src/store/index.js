import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations.js'
import actions from './actions.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    news: [],
    jobs: [],
    ask: [],
    user: {},
    commentItem: []
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
    },
    getUserInfo (state) {
      return state.user
    }
  },
  mutations,
  actions
})
