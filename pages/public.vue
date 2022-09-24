<template>
  <div>
    <HeaderComponent page="Public" />
    <main>
      <div class="container d-flex jc-center">
        <ResumeComponent/>
      </div>
    </main>
    <LinkComponent class="jc-center my-4" v-if="screen"/>
  </div>
</template>

<script>
import HeaderComponent from "../components/HeaderComponent";
import ResumeComponent from "../components/ResumeComponent";
import LinkComponent from "../components/LinkComponent";

export default {
  name: "public",
  components: {
    LinkComponent,
    ResumeComponent,
    HeaderComponent
  },

  data: () => ({
    screen: false
  }),

  created() {
    window.addEventListener('resize', this.onResize);
    this.onResize();
  },

  destroyed() {
    window.removeEventListener('resize', this.onResize)
  },

  methods: {
    onResize() {
      this.screen = window.innerWidth <= 600;
    }
  }
}
</script>

<style lang="scss">

</style>
