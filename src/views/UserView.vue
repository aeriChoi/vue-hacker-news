<template>
  <div id="user">
    <div class="user-info-card">
      <p class="card-title">
        <strong>User Info</strong>
      </p>
      <p class="card-des">
        <strong>User Name:</strong>
        <span>{{ getUserInfo.id }}</span>
      </p>
      <p class="card-des">
        <strong>Created:</strong>
        <span>{{ getUserInfo.created }}</span>
      </p>
      <p class="card-des">
        <strong>Karma:</strong>
        <span>{{ getUserInfo.karma }}</span>
      </p>
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
.user-info-card {
  width: 85%;
  padding: 1.3rem 2rem;
  margin: 3rem auto;
  border: 1px solid #ccc;
  border-radius: 10px;
  color: #000;
  font-size: 1.3rem;

  p {

    &.card-title {
      margin-bottom: 2rem;
      font-size: 2rem;
    }

    &.card-des {
      margin-bottom: .6rem;

      strong {
        margin-right: 1rem;
      }
    }
  }
}
</style>
