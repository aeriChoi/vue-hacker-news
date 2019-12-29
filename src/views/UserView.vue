<template>
  <div id="user">
    <div class="user-info-card">
      <p>{{ getUserInfo.id }}</p>
      <p>{{ getUserInfo.created }}</p>
      <p>{{ getUserInfo.karma }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'getUserInfo'
    ])
  },
  created () {
    const userName = this.$route.params.id

    this.$store.dispatch('GET_USER', userName)
  }
}
</script>

<style lang="scss">

</style>
