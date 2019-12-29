<template>
  <section id="jobs" class="list-sec">
    <ul class="list-box">
      <li class="list-item" v-for="job in getJobsList" v-bind:key="job.id">
        <p class="domain-info-box">
          <span class="des-icon">
            <font-awesome-icon icon="home" size="4px" />
          </span>
          <span class="domain-des-url">
            {{ job.domain }}
          </span>
        </p>
        <p class="script-title">
          <strong>
            <a v-bind:href="job.url" target="_blank">
              {{ job.title }}
            </a>
          </strong>
        </p>
        <div class="info-box">
          <ul class="info-list">
            <li class="info-list-item">
              <span class="des-icon">
                 <font-awesome-icon :icon="['far', 'clock']" size="4px" />
              </span>
              <span class="des-text time-ago">
                {{ job.time_ago }}
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
      'getJobsList'
    ])
  },
  created () {
    this.$store.dispatch('GET_JOBS')
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
