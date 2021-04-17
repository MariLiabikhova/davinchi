<template>
  <div class="navbar w-30">
    <router-link to="/" class="link mb-50 link__logo">DVCh</router-link>
      <div v-for="link in links" :key="link.id" >
          <router-link :to="'/' + link.src" class="link navbar__link w-90 d-flex">
            <img :src='link.icon' class="navbar__icon" />
            <p class="navbar__text mb-0">{{link.text}}</p>
          </router-link>
      </div>
      <button type="submit" @click="logOut" class="navbar__btn navbar__link link navbar__text w-90 text--left"><img :src="require('@/assets/img/i-logout.png')"  class="navbar__icon"/>
        Log out
      </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          text: 'My page',
          icon: require('@/assets/img/i-user.png'),
          src: 'current_user'
        },
        {
          text: 'All users',
          icon: require('@/assets/img/i-users.png'),
          src: 'users'
        },
        { text: 'Chat', icon: require('@/assets/img/i-chat.png'), src: 'chat' },
        {
          text: 'Find/delete user',
          icon: require('@/assets/img/i-find.png'),
          src: 'find_delete_user'
        }
      ]
    }
  },
  methods: {
    logOut() {
      this.$store.dispatch('logoutUser')
      this.$router.push(`/`)
    }
  }
}
</script>
