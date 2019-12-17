<template>
  <section id="news">
    <ul>
      <li v-for="user in users" v-bind:key="user.id">{{ user }}</li>
    </ul>
  </section>
</template>

<script>
import { getNewsList } from '../api/index.js'

export default {
  data () {
    return {
      users: []
    }
  },
  created () {
    getNewsList()
      .then(response => {
        this.users = response.data
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>

<style lang="scss">

</style>
