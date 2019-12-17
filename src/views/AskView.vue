<template>
  <div id="ask">
    <ul>
      <li v-for="ask in asks" v-bind:key="ask.id">{{ ask }}</li>
    </ul>
  </div>
</template>

<script>
import { getAskList } from '../api/index.js'

export default {
  data () {
    return {
      asks: []
    }
  },
  created () {
    getAskList()
      .then(response => {
        this.asks = response.data
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>

<style lang="scss">

</style>
