<template>
  <HeaderApp></HeaderApp>
  <BodyApp></BodyApp>
  <FooterApp></FooterApp>
</template>

<script lang="ts">
import HeaderApp from "./components/HeaderApp.vue";
import BodyApp from "./components/BodyApp.vue";
import FooterApp from "./components/FooterApp.vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "mainApp",
  components: {
    HeaderApp,
    BodyApp,
    FooterApp,
  },
});
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Albert+Sans:wght@200;400;600;800&display=swap");
* {
  margin: 0;
  padding: 0;
  font-family: "Albert Sans", sans-serif;
}
::-webkit-scrollbar {
  width: 10px; /* ширина нового скроллбара */
}
::-webkit-scrollbar-track {
  background: #f1f1f1;
}
::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
