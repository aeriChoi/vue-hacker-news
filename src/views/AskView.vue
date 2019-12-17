<template>
  <div id="ask">
    <li v-for="item in getAskList" v-bind:key="item.id">
      {{ item }}
    </li>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

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

<style lang="scss">

</style>
