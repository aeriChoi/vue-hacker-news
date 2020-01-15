<template>
  <section id="ask" class="list-sec">
    <ul class="list-box">
      <li class="list-item" v-for="item in getAskList" v-bind:key="item.id">
        <p class="script-title">
          <strong>
            <router-link v-bind:to="`item/${item.id}`">{{ item.title }}</router-link>
          </strong>
        </p>
        <div class="info-box">
          <ul class="info-list">
            <li class="info-list-item">
              <span class="des-icon">
                <font-awesome-icon :icon="['far', 'user']" />
              </span>
              <span class="des-text user-name">
                <router-link v-bind:to="`/user/${item.user}`">{{ item.user }}</router-link>
              </span>
            </li>
            <li class="info-list-item">
              <span class="des-icon">
                 <font-awesome-icon :icon="['far', 'clock']" />
              </span>
              <span class="des-text time-ago">
                {{ item.time_ago }}
              </span>
            </li>
            <li class="info-list-item">
              <span class="des-icon">
                <font-awesome-icon :icon="['far', 'comment']" />
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
      'getAskList'
    ])
  },
  created () {
    this.$store.dispatch('GET_ASK')
  }
}
</script>

<style scope lang="scss">
  ul {
    li  {
      list-style: none;
    }
  }
</style>
