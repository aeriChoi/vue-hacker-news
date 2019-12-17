<template>
  <section id="news">
    <ul>
      <li v-for="item in getNewsList" v-bind:key="item.id">
        {{ item }}
      </li>
    </ul>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

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
