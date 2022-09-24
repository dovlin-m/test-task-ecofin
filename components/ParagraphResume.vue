<template>
  <div class="fs-14">
    <p class="fw-bold">{{ title }}</p>
    <p>{{ subtitle }}</p>
  </div>
</template>

<script>
export default {
  name: "ParagraphResume",

  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: true
    }
  }
}
</script>
