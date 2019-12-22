<template>
  <section id="jobs" class="list-sec">
    <ul class="list-box">
      <li class="list-item" v-for="job in getJobsList" v-bind:key="job.id">
        {{ job }}
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
