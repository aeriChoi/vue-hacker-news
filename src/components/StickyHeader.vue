<template>
  <header id="sticky-header">
    <nav class="header-nav">
      <ul>
        <li>
          <router-link to="/">News</router-link> |
        </li>
        <li>
          <router-link to="/about">Ask</router-link>
        </li>
        <li>
          <router-link to="/about">Jobs</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
}
</script>

<style lang="scss">
.header-nav {
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
