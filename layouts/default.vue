<template>
  <router-view/>
</template>

<script>
export default {
  name: "default"
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  font-weight: normal;
  font-family: Roboto, sans-serif;
  color: #fff;
}

body {
  background: #1e1e1e;
}

.container {
  margin-left: auto;
  margin-right: auto;
  width: 100%;
}

.d-flex {
  display: flex;
  display: -webkit-flex;
}

.flex-col {
  flex-direction: column;
  -ms-flex-direction: column;
  -webkit-flex-direction: column;
}

.flex-wrap {
  flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  -webkit-flex-wrap: wrap;
}

.jc-between {
  justify-content: space-between;
  -webkit-justify-content: space-between;
}

.jc-center {
  justify-content: center;
  -webkit-justify-content: center;
}

.text-center {
  text-align: center;
  -moz-text-align-last: center;
  -ms-text-align-last: center;
}

.text-left {
  text-align: left;
  -moz-text-align-last: left;
  -ms-text-align-last: left;
}

.text-right {
  text-align: right;
  -moz-text-align-last: right;
  -ms-text-align-last: right;
}

.w-100 {
  width: 100%;
}

.btn {
  height: 36px;
  margin-top: 16px;
  font-size: 14px;
  background-color: #238636;
  border-radius: 4px;
  border: none;

  &:hover {
    color: #FFFFFF;
    cursor: pointer;
    background-color: #4caf50;
  }
}

.m-2 {
  margin: 8px;
}

.m-4 {
  margin: 16px;
}

.mt-2 {
  margin-top: 8px;
}

.mt-4 {
  margin-top: 16px;
}

.mt-6 {
  margin-top: 24px;
}

.mt-12 {
  margin-top: 48px;
}

.mr-4 {
  margin-right: 16px;
}

.mr-8 {
  margin-right: 32px;
}

.mb-4 {
  margin-bottom: 16px;
}

.mb-2 {
  margin-bottom: 8px;
}

.mb-4 {
  margin-bottom: 16px;
}

.ml-4 {
  margin-left: 16px;
}

.mx-4 {
  margin-left: 16px;
  margin-right: 16px;
}

.mx-auto {
  margin-left: auto;
  margin-right: auto;
}

.my-4 {
  margin-top: 16px;
  margin-bottom: 16px;
}

.my-2 {
  margin-top: 8px;
  margin-bottom: 8px;
}

.pr-4 {
  padding-right: 16px;
}

.p-4 {
  padding: 16px;
}

.p-8 {
  padding: 32px;
}

.px-2 {
  padding-left: 8px;
  padding-right: 8px;
}

.fw-bold {
  font-weight: bold;
}

@media (min-width: 600px) {
  .jc-sm-between {
    justify-content: space-between;
    -webkit-justify-content: space-between;
  }
}

@media (min-width: 768px) {
  .d-md-flex {
    display: flex;
    display: -webkit-flex;
  }
}

@media (min-width: 576px) {
  .container {
    max-width: 540px;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
}

@media (min-width: 992px) {
  .container {
    max-width: 960px;
  }
}

@media (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }
}

@media (min-width: 1400px) {
  .container {
    max-width: 1320px;
  }
}
</style>
