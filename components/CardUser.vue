<template>
  <div class="card-user d-flex p-4 m-2">
    <div class="d-flex jc-center flex-col">
      <img :src="user.picture.large" height="128" width="128">
    </div>

    <div class="user-info d-flex flex-wrap jc-between ml-8 fs-14">
      <div class="d-flex flex-col flex-wrap mr-4">
        <p class="my-2">
          FullName:<br>
          {{ user.name.title }}
          {{ user.name.first }}
          {{ user.name.last }}
        </p>
        <p class="my-2">
          Date of birth:<br>
          {{ user.dob.date.slice(0, 10) }}
        </p>
      </div>
      <div class="d-flex flex-col flex-wrap mr-4">
        <p class="my-2">Email:<br> {{ user.email }}</p>
        <p class="my-2">Phone:<br> {{ user.phone }}</p>
      </div>
      <div class="d-flex flex-col flex-wrap">
        <p class="my-2">
          Location:<br>
          {{ user.location.country }},
          {{ user.location.state }},
          {{ user.location.city }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import ParagraphResume from "./ParagraphResume";

export default {
  name: "CardUser",
  components: {ParagraphResume},
  props: {
    user: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss">
.card-user {
  width: 100%;
  background: #272727;

  .user-info {
    margin: 0 32px 0 16px;
  }

}

@media (max-width: 767px) {
  .card-user {
    display: block;
    width: 100%;

    .user-info {
      margin: 16px auto 0 auto;
    }
  }
}

@media (min-width: 1400px) {
  .card-user {
    max-width: 600px;
  }
}
</style>
