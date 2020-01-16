<template>
  <div class="list-sec">
    <ul class="list-box">
      <li class="list-item" v-for="item in listItems" v-bind:key="item.id">
        <div class="points">
          {{ item.points || 0 }}
        </div>
        <div class="item-info-box">
          <template v-if="item.domain">
            <p class="domain-info-box">
              <span class="des-icon">
                <font-awesome-icon icon="home" />
              </span>
              <a class="domain-des-url" :href="item.url" target="_blank">
                {{ item.domain }}
              </a>
            </p>
          </template>
          <h2 class="script-title">
            <strong>
              <template v-if="item.domain">
                <a v-bind:href="item.url" target="_blank">
                  {{ item.title }}
                </a>
              </template>
              <template v-else>
                <router-link v-bind:to="`item/${item.id}`">
                  {{ item.title }}
                </router-link>
              </template>
            </strong>
          </h2>
          <div class="des-info-box">
            <ul class="des-info-list">
              <template v-if="item.user">
                <li class="des-info-list-item">
                  <span class="des-icon">
                    <font-awesome-icon :icon="['far', 'user']" />
                  </span>
                  <span class="des-text user-name">
                    <router-link v-bind:to="`/user/${item.user}`">{{ item.user }}</router-link>
                  </span>
                </li>
              </template>
              <template v-if="item.time_ago">
                <li class="des-info-list-item">
                  <span class="des-icon">
                    <font-awesome-icon :icon="['far', 'clock']" />
                  </span>
                  <span class="des-text time-ago">
                    {{ item.time_ago }}
                  </span>
                </li>
              </template>
              <template v-if="item.comments_count">
                <li class="des-info-list-item">
                  <span class="des-icon">
                    <font-awesome-icon :icon="['far', 'comment']" />
                  </span>
                  <span class="des-text comments">
                    {{ item.comments_count }}
                  </span>
                </li>
              </template>
            </ul>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import '../assets/style/list-item.scss'

export default {
  created () {
    const name = this.$route.name

    if (name === 'news') {
      this.$store.dispatch('GET_NEWS')
    } else if (name === 'ask') {
      this.$store.dispatch('GET_ASK')
    } else if (name === 'jobs') {
      this.$store.dispatch('GET_JOBS')
    }
  },
  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    listItems () {
      const name = this.$route.name
      if (name === 'news') {
        return this.$store.state.news
      } else if (name === 'ask') {
        return this.$store.state.ask
      } else if (name === 'jobs') {
        return this.$store.state.jobs
      }
    }
  }
}
</script>

<style lang="scss">
</style>
