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
$red: red;

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $red;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
