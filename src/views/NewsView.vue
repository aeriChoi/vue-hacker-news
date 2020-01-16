<template>
  <section id="news" class="list-sec">
    <ul class="list-box">
      <li class="list-item" v-for="item in getNewsList" v-bind:key="item.id">
        <div class="points">
          {{ item.points || 0 }}
        </div>
        <div class="item-info-box">
          <p class="domain-info-box">
            <span class="des-icon">
              <font-awesome-icon icon="home" />
            </span>
            <a class="domain-des-url" :href="item.domain">
              {{ item.domain }}
            </a>
          </p>
          <h2 class="script-title">
            <strong>
              <a v-bind:href="item.url" target="_blank">
                {{ item.title }}
              </a>
            </strong>
          </h2>
          <div class="des-info-box">
            <ul class="des-info-list">
              <li class="des-info-list-item">
                <span class="des-icon">
                  <font-awesome-icon :icon="['far', 'user']" />
                </span>
                <span class="des-text user-name">
                  <router-link v-bind:to="`/user/${item.user}`">{{ item.user }}</router-link>
                </span>
              </li>
              <li class="des-info-list-item">
                <span class="des-icon">
                  <font-awesome-icon :icon="['far', 'clock']" />
                </span>
                <span class="des-text time-ago">
                  {{ item.time_ago }}
                </span>
              </li>
              <li class="des-info-list-item">
                <span class="des-icon">
                  <font-awesome-icon :icon="['far', 'comment']" />
                </span>
                <span class="des-text comments">
                  {{ item.comments_count }}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
// import ListItem from '../components/ListItem.vue'

import '../assets/style/list-item.scss'

export default {
  // components: {
  //   ListItem
  // }
  computed: {
    ...mapGetters([
      'getNewsList'
    ])
  },
  created () {
    this.$store.dispatch('GET_NEWS')
  }
}
</script>

<style lang="scss">

</style>
