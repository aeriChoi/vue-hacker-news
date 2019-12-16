<template>
  <header id="sticky-header">
    <nav class="header-nav">
      <h1 class="logo">
        <img src="../assets/logo.png" alt="vue logo">
      </h1>
      <ul>
        <li>
          <router-link to="/news">News</router-link>
        </li>
        <li>
          <router-link to="/ask">Ask</router-link>
        </li>
        <li>
          <router-link to="/jobs">Jobs</router-link>
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
$header-bg: #ccc;
$default-color: #fff;
$active-color: #42b983;
$pd-10: 1rem;
$pd-5: .5rem;

.header-nav {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  padding: $pd-10;
  background-color: $header-bg;
  font-size: 1.2rem;

  .logo {
    width: 50px;
    margin: 0 20px 0 0;
    img {
      width: 100%;
    }
  }

  a {
    font-weight: bold;
    padding-left: $pd-5;
    padding-right: $pd-5;
    color: $default-color;
    &.router-link-exact-active {
      color: $active-color;
    }
  }
}
</style>
