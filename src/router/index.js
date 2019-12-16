import Vue from 'vue'
import VueRouter from 'vue-router'
import NewsView from '../views/NewsView.vue'
import AskView from '../views/AskView.vue'
import JobsView from '../views/JobsView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/news',
    name: 'newsView',
    component: NewsView
  },
  {
    path: '/ask',
    name: 'askView',
    component: AskView
  },
  {
    path: '/jobs',
    name: 'jobsView',
    component: JobsView
  }
]

const router = new VueRouter({
  routes
})

export default router
