<template>
  <div id="jobs">
    <ul>
      <li v-for="job in jobs" v-bind:key="job.id">{{ job }}</li>
    </ul>
  </div>
</template>

<script>
import { getJobsList } from '../api/index.js'

export default {
  data () {
    return {
      jobs: []
    }
  },
  created () {
    getJobsList()
      .then(response => {
        this.jobs = response.data
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>

<style lang="scss">

</style>
