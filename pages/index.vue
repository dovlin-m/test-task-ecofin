<template>
  <div>
    <HeaderComponent page="Authorization" />
    <main class="mt-12">
      <div class="auth-box mx-auto">
        <FormAuth/>
      </div>
    </main>
  </div>
</template>

<script>
import HeaderComponent from "../components/HeaderComponent";
import FormAuth from "../components/FormAuth";

export default {
  name: 'IndexPage',

  middleware: ['logon'],

  components: {
    FormAuth,
    HeaderComponent
  }
}
</script>

<style lang="scss">
.auth-box {
  max-width: 340px;
}
</style>
