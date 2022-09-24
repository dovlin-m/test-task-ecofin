<template>
  <header class="header d-flex jc-sm-between jc-center flex-wrap">
    <div class="d-flex heading-box">
      <h1 class="header-title text-right">
        Test EcoFin
      </h1>
      <hr class="vertical">
      <h2 class="header-title text-left">
        {{ page }}
      </h2>
    </div>
    <LinkComponent />
  </header>
</template>

<script>
import LinkComponent from "./LinkComponent";

export default {
  name: "HeaderComponent",

  components: {
    LinkComponent
  },

  props: {
    page: {
      type: String,
      required: true
    }
  },
}
</script>

<style lang="scss">
.header {
  padding: 8px 16px;
  align-items: center;
  background: #272727;

  .heading-box {
    height: 48px;
    align-items: center;

    .header-title {
      width: 120px;
      font-size: 1.25rem;
      font-weight: normal;
      line-height: 1.5;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: #fff;
      text-decoration: none;
      background: #272727;
    }
  }
}

.vertical {
  height: inherit;
  margin-left: 20px;
  margin-right: 20px;
  color: rgba(255, 255, 255, 0.12);
}

@media (max-width: 600px) {
  .header {
    .heading-box {
      .header-title {
        font-size: 18px;
      }
    }

    .link {
      display: none;
    }
  }
}
</style>
