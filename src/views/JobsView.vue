<template>
  <div id="jobs">
    <li v-for="job in getJobsList" v-bind:key="job.id">
      {{ job }}
    </li>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

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

<style lang="scss">

</style>
