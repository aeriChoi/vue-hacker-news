<template>
  <div id="item">
    item
  </div>
</template>

<script>
export default {
  created () {
    const askCommentId = this.$route.params.id
    this.$store.dispatch('GET_ASKCOMMENTID', askCommentId)
  }
}
</script>

<style lang="scss">

</style>
