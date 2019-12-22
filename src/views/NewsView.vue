<template>
  <section id="news" class="list-sec">
    <ul class="list-box">
      <li class="list-item" v-for="item in getNewsList" v-bind:key="item.id">
        {{ item }}
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
