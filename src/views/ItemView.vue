<template>
  <div id="item">
    {{ this.$store.state.commentItem }}
  </div>
</template>

<script>
export default {
  created () {
    const CommentItemId = this.$route.params.id
    this.$store.dispatch('GET_COMMENTITEM', CommentItemId)
  }
}
</script>

<style lang="scss">

</style>
