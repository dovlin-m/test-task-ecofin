<template>
  <div>
    <HeaderComponent page="Protected" path="/" textPath="Log out" />
    <main>
      <div class="container d-flex jc-center">
        <div class="d-flex flex-wrap w-100 mt-6">
          <CardUser
            v-for="user of byUsers"
            :key="user.id.value"
            :user="user"
          />
        </div>
      </div>
      <p class="text-center" v-if="!byUsers.length">...loading...</p>
      <div v-else class="d-flex jc-center">
        <button
          @click.prevent="addUsers"
          class="btn mb-2 px-2"
        >
          Add 10 Users
        </button>
      </div>
    </main>
    <LinkComponent class="jc-center my-4" v-if="screen"/>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import HeaderComponent from "../components/HeaderComponent";
import CardUser from "../components/CardUser";

export default {
  name: "protected",

  middleware: ['auth'],

  components: {
    CardUser,
    HeaderComponent
  },

  data: () => ({
    screen: false
  }),

  computed: {
    ...mapGetters('users', ['byUsers'])
  },

  methods: {
    ...mapActions('users', ['getUsers']),

    async addUsers() {
      await this.getUsers()
    },

    onResize() {
      this.screen = window.innerWidth <= 600;
    }
  },

  created() {
    window.addEventListener('resize', this.onResize);
    this.onResize();
  },

  destroyed() {
    window.removeEventListener('resize', this.onResize)
  },

  async mounted() {
    if (!this.byUsers.length) await this.getUsers()
  }
}
</script>
