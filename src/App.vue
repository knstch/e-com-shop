<template>
  <HeaderApp></HeaderApp>
  <BodyApp></BodyApp>
  <FooterApp></FooterApp>
</template>

<script lang="ts">
import HeaderApp from "./components/HeaderApp.vue";
import BodyApp from "./components/BodyApp.vue";
import FooterApp from "./components/FooterApp.vue";
export default {
  name: "mainApp",
  components: {
    HeaderApp,
    BodyApp,
    FooterApp,
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
