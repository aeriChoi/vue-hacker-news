<template>
  <div id="app">
    <StickyHeader></StickyHeader>
    <transition name="fade">
      <router-view/>
    </transition>
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

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
}
</style>
