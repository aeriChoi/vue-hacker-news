<template>
  <div id="comments-item">
    <div class="comments-card">
      <section class="card-title">
        <div class="user-info">
          <ul class="info-list">
            <li class="info-list-item">
              <span class="des-icon">
                <font-awesome-icon :icon="['far', 'user']" />
              </span>
              <span class="des-text user-name">
                <router-link v-bind:to="`/user/${getCommentItem.user}`">{{ getCommentItem.user }}</router-link>
              </span>
            </li>
            <li class="info-list-item">
              <span class="des-icon">
                 <font-awesome-icon :icon="['far', 'clock']" />
              </span>
              <span class="des-text time-ago">
                {{ getCommentItem.time_ago }}
              </span>
            </li>
          </ul>
        </div>
        <h2>{{ getCommentItem.title }}</h2>
      </section>
      <section class="card-contents">
        {{ getCommentItem.content }}
      </section>
    </div>
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

<style lang="scss" scoped>
  .comments-card {
    width: 90%;
    padding: 1.3rem 2rem;
    margin: 3rem auto;
    border: 1px solid #ccc;
    border-radius: 5px;
    color: #000;
    font-size: 1.3rem;
    box-shadow: 0 10px 10px -1px #999;

    section {
      overflow: hidden;

      &.card-title {
        margin-bottom: 1.5rem;
        font-size: 1.6rem;

        .user-info {
          ul {
            display: flex;
            padding: 0;
            align-items: center;

            .info-list-item {
              margin-right: 13px;
              font-size: 1.2rem;
              color: #999;

              a {
                margin-left: 10px;
                color: #999;

                &:hover {
                  color: #42b983;
                  text-decoration: none;
                }
              }
            }
          }
        }

        .user-icon {
          margin-right: 10px;
        }
      }

      &.card-contents {
        padding: 0 10px;
      }
    }
  }
</style>
