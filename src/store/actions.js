import { getNewsList, getJobsList, getAskList, getUserInfo } from '../api/index.js'

export default {
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
  },
  GET_USER ({ commit }, name) {
    getUserInfo(name)
      .then(({ data }) => {
        commit('SET_USER', data)
      })
      .catch(error => {
        console.log(error)
      })
  },
  GET_ASKID ({ commit }, id) {
    getUserInfo(id)
      .then(({ data }) => {
        commit('SET_USER', data)
      })
      .catch(error => {
        console.log(error)
      })
  }
}
