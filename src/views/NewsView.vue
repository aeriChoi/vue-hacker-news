<template>
  <section id="news" class="list-sec">
    <ul class="list-box">
      <li class="list-item" v-for="item in getNewsList" v-bind:key="item.id">
        <p class="domain-info-box">
          <span class="des-icon">
            <font-awesome-icon icon="home" size="4px" />
          </span>
          <span class="domain-des-url">
            {{ item.domain }}
          </span>
        </p>
        <p class="script-title">
          <strong>
            <a v-bind:href="item.url" target="_blank">
              {{ item.title }}
            </a>
          </strong>
        </p>
        <div class="info-box">
          <ul class="info-list">
            <li class="info-list-item">
              <span class="des-icon">
                <font-awesome-icon :icon="['far', 'user']" size="4px" />
              </span>
              <span class="des-text user-name">
                <router-link v-bind:to="`/user/${item.user}`">{{ item.user }}</router-link>
              </span>
            </li>
            <li class="info-list-item">
              <span class="des-icon">
                 <font-awesome-icon :icon="['far', 'clock']" size="4px" />
              </span>
              <span class="des-text time-ago">
                {{ item.time_ago }}
              </span>
            </li>
            <li class="info-list-item">
              <span class="des-icon">
                <font-awesome-icon :icon="['far', 'comment']" size="4px" />
              </span>
              <span class="des-text comments">
                {{ item.comments_count }}
              </span>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

import '../assets/style/list-item.scss'

export default {
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
