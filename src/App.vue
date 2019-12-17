<template>
  <div id="app">
    <StickyHeader></StickyHeader>
    <router-view/>
  </div>
</template>

<script>
import StickyHeader from './components/StickyHeader.vue'
export default {
  components: {
    StickyHeader
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
