<template>
  <div id="item">
    {{ getCommentItem.title }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'getCommentItem'
    ])
  },
  created () {
    const CommentItemId = this.$route.params.id
    this.$store.dispatch('GET_COMMENTITEM', CommentItemId)
  }
}
</script>

<style lang="scss">

</style>
