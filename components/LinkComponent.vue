<template>
  <div class="d-flex">
    <router-link
      v-if="$route.path === '/' || $route.path === '/public'"
      class="link"
      to="/protected"
    >
      Protected
    </router-link>
    <router-link
      v-if="$route.path === '/' || $route.path === '/protected'"
      class="link"
      to="/public"
    >
      Public
    </router-link>
    <p
      v-if="$route.path !== '/'"
      class="link"
      @click.prevent="onLogout"
    >
      {{ hasToken ? 'Log out' : 'Log in' }}
    </p>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: "LinkComponent",

  computed: {
    ...mapGetters(['hasToken'])
  },

  methods: {
    ...mapActions(['logout']),

    onLogout() {
      if (this.hasToken) {
        this.logout()
      }
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss">
.link {
  width: 70px;
  margin-left: 16px;
  margin-right: 16px;
  text-decoration: none;
  cursor: pointer;
}
</style>
