<template>
  <div id="ask">
    <li v-for="item in this.$store.state.ask" v-bind:key="item.id">
      {{ item }}
    </li>
  </div>
</template>

<script>
export default {
  created () {
    this.$store.dispatch('GET_ASK')
  }
}
</script>

<style lang="scss">

</style>
