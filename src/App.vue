<template>
  <HeaderApp></HeaderApp>
</template>

<script lang="ts">
import HeaderApp from "./components/HeaderApp.vue";
export default {
  name: "mainApp",
  components: {
    HeaderApp,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Albert+Sans:wght@200;400;600;800&display=swap");
* {
  margin: 0;
  padding: 0;
  font-family: "Albert Sans", sans-serif;
}
</style>
