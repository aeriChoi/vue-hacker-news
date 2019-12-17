<template>
  <section id="news">
    <ul>
      <li v-for="item in this.$store.state.news" v-bind:key="item.id">
        {{ item }}
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  created () {
    this.$store.dispatch('GET_NEWS')
  }
}
</script>

<style lang="scss">

</style>
