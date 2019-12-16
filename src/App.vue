<template>
  <div id="app">
    <header id="sticky-header">
      <nav class="header-nav">
        <ul>
          <li><router-link to="/">Home</router-link> |</li>
          <li><router-link to="/about">About</router-link></li>
        </ul>
      </nav>
    </header>
    <section>
      <router-view/>
    </section>
  </div>
</template>

<style lang="scss">
$red: red;

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $red;

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
}
</style>
