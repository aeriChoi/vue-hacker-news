<template>
  <section id="ask" class="list-sec">
    <ul class="list-box">
      <li class="list-item" v-for="item in getAskList" v-bind:key="item.id">
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
