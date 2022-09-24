<template>
  <form class="form" @submit.prevent="onSubmit">
    <h1 class="mb-4 text-center">
      Log in to EcoFin
    </h1>

    <ErrorComponent />

    <div class="auth-form-main">
      <div class="text-field d-flex flex-col">
        <label>Email</label>
        <input v-model="email" type="email"/>
      </div>
      <div class="text-field d-flex flex-col">
        <label>Password</label>
        <input v-model="password" type="password"/>
      </div>
      <button type="submit" class="btn w-100">
        Log in
      </button>
    </div>

    <LinkComponent class="jc-center my-4" v-if="screen"/>
  </form>
</template>

<script>
import { mapActions, mapState, mapMutations } from 'vuex'
import LinkComponent from "./LinkComponent";
import ErrorComponent from "./ErrorComponent";

export default {
  name: "FormAuth",

  components: {
    ErrorComponent,
    LinkComponent
  },

  data: () => ({
    email: null,
    password: null,
    screen: false
  }),

  created() {
    window.addEventListener('resize', this.onResize);
    this.onResize();
  },

  destroyed() {
    window.removeEventListener('resize', this.onResize)
  },

  computed: {
    ...mapState(['user']),
  },

  methods: {
    ...mapActions(['login']),
    ...mapMutations(['updateErrors']),

    onSubmit() {
      if (this.user.email === this.email && this.user.password === this.password) {
        this.login()
        this.$router.push('/protected')
      } else {
        this.updateErrors(true)
        this.$router.push('/')
      }
    },

    onResize() {
      this.screen = window.innerWidth <= 600;
    },
  }
}
</script>

<style lang="scss">
.form {
  margin-top: 32px;
  padding: 16px;
  border-radius: 12px;

  h1 {
    font-size: 24px;
    font-weight: normal;
  }

  .auth-form-main {
    padding: 16px;
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 6px;
    background: #272727;
  }

  .text-field {
    label {
      font-size: 14px;
      line-height: 13px;
      letter-spacing: -0.02em;
      color: hsla(0,0%,100%,.7);
    }

    input {
      font-size: 14px;
      margin-top: 8px;
      margin-bottom: 16px;
      padding: 8px 16px;
      border-radius: 6px;
      color: #B4B4B4;
      border: 1px solid rgba(255, 255, 255, 0.12);
      background: #1e1e1e;
    }
  }
}
</style>
