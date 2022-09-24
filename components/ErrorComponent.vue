<template>
  <div>
    <div v-if="error" class="d-flex jc-center">
      <div class="error">
        <p class="px-2 text-error">
          Incorrect email or password.
        </p>
      </div>
    </div>
    <div v-else-if="$route.query.message" class="d-flex jc-center">
      <div class="error">
        <p class="px-2 text-error">
          Need login first
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: "ErrorComponent",

  computed: {
    ...mapState(['error'])
  }
}
</script>

<style lang="scss">
.error {
  display: inline-block;
  padding: 8px 16px;
  margin-bottom: 8px;
  font-size: 14px;
  background-color: rgba(255, 82, 82, 0.1);
  border: 1px solid #ff5252;
  border-radius: 6px;

  .text-error {
    color: rgb(255, 82, 82);
  }
}
</style>
